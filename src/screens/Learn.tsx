import { useState } from 'react';
import { qKey, subjects, findSubject, unitsByStage } from '../content';
import type { Lesson, Unit } from '../content/types';
import { Emoji } from '../components/Emoji';
import { DailyCard } from '../components/Hud';
import { Mascot } from '../components/Mascot';
import { ScreenCard } from '../components/ScreenTime';
import { LESSON_PASS, needsRedo } from '../game/mastery';
import { StudyChestsCard } from '../components/StudyChests';
import {
  GEMS, checkpointQuestions, isLessonUnlocked, isUnitComplete, lessonStars, testedOut,
} from '../game/engine';
import { greeting, mitoAccessory, testPep } from '../game/mito';
import { unitTestBonus } from '../game/screenTime';
import type { Progress } from '../game/types';
import { sfx } from '../sound';
import type { SessionPlan } from './Session';

const OFFSETS = [0, 52, 78, 52, 0, -52, -78, -52];
const SUBJECT_KEY = 'brainboost:subject';

type Selected = { unit: Unit; lesson: Lesson; index: number } | { unit: Unit; checkpoint: true };

function loadSubject(): string {
  try { return localStorage.getItem(SUBJECT_KEY) ?? subjects[0].id; } catch { return subjects[0].id; }
}

/** The unit's picture: the first lesson's emoji. */
const unitEmoji = (u: Unit) => u.lessons[0]?.emoji ?? '📘';

const started = (p: Progress, u: Unit) => u.lessons.some((l) => p.lessons[l.id]) || p.checkpoints[u.id] !== undefined;

/** Scroll a unit into view once React has drawn it. */
function scrollToUnit(id: string) {
  window.setTimeout(() => document.getElementById(`unit-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
}

export function Learn({ progress, onStart }: { progress: Progress; onStart: (plan: SessionPlan) => void }) {
  const [selected, setSelected] = useState<Selected | null>(null);
  const [subjectId, setSubjectId] = useState(loadSubject);
  const [jumpOpen, setJumpOpen] = useState(false);
  // Finished and tested-out units are folded to their banner unless she opens them.
  const [opened, setOpened] = useState<Set<string>>(() => new Set());
  const subject = findSubject(subjectId);

  function pickSubject(id: string) {
    sfx.tap();
    setSubjectId(id);
    try { localStorage.setItem(SUBJECT_KEY, id); } catch { /* not important */ }
  }

  function toggleUnit(id: string) {
    sfx.tap();
    setOpened((o) => { const n = new Set(o); if (n.has(id)) n.delete(id); else n.add(id); return n; });
  }

  // The "current" lesson gets the START bubble and the Continue button: the first
  // unlocked lesson not yet done (or one to redo), skipping units she has tested out of.
  let current: { unit: Unit; lesson: Lesson; index: number } | null = null;
  for (const skipTestedOut of [true, false]) {
    for (const u of subject.units) {
      if (skipTestedOut && testedOut(progress, u)) continue;
      // Either the next new lesson, or one under the pass mark that's blocking the next.
      const i = u.lessons.findIndex((x, li) => (!progress.lessons[x.id] && isLessonUnlocked(progress, u, li))
        || (needsRedo(progress, x.id) && li + 1 < u.lessons.length && !isLessonUnlocked(progress, u, li + 1)));
      if (i >= 0) { current = { unit: u, lesson: u.lessons[i], index: i }; break; }
    }
    if (current) break;
  }
  // Finished units fold away, unless one of their lessons still needs a redo.
  const foldable = (u: Unit) => (isUnitComplete(progress, u) || testedOut(progress, u)) && u.id !== current?.unit.id
    && !u.lessons.some((l) => needsRedo(progress, l.id));

  // A subject she hasn't tried yet, to suggest.
  const untried = subjects.find((s) => s.id !== subject.id && !s.units.some((u) => started(progress, u)));

  function jumpTo(u: Unit) {
    sfx.tap();
    setJumpOpen(false);
    setOpened((o) => new Set(o).add(u.id));
    scrollToUnit(u.id);
  }

  function start(sel: Selected) {
    setSelected(null);
    if ('checkpoint' in sel) {
      onStart({ kind: 'checkpoint', title: `${sel.unit.title}: unit test`, colour: sel.unit.colour, unitId: sel.unit.id, keys: checkpointQuestions(sel.unit) });
    } else {
      onStart({
        kind: 'lesson',
        title: sel.lesson.title,
        colour: sel.unit.colour,
        lessonId: sel.lesson.id,
        unitId: sel.unit.id,
        learn: sel.lesson.learn,
        keys: sel.lesson.questions.map((q) => qKey(sel.lesson.id, q.id)),
      });
    }
  }

  let unitNumber = 0;
  return (
    <div className="learn-layout">
      <div className="learn-main">
        <div className="mascot-hello">
          <Mascot mood="happy" accessory={mitoAccessory(progress)} size={84} bounce />
          <p className="speech">{greeting(progress)}</p>
        </div>

        <div className="subject-tabs" role="tablist">
          {subjects.map((s) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={s.id === subject.id}
              className={`subject-tab ${s.id === subject.id ? 'active' : ''}`}
              style={{ ['--subject' as string]: s.colour }}
              onClick={() => pickSubject(s.id)}
            >
              <Emoji e={s.emoji} size={28} /> {s.title}
            </button>
          ))}
        </div>

        {untried && (
          <div className="card suggest-card">
            <Emoji e={untried.emoji} size={36} />
            <p>You haven’t tried <b>{untried.title}</b> yet. Fancy something new?</p>
            <button className="btn primary small-btn" onClick={() => pickSubject(untried.id)}>Try it</button>
          </div>
        )}

        <div className="learn-nav">
          {current && (
            <button
              className="btn unit continue-btn"
              style={{ ['--unit' as string]: current.unit.colour }}
              onClick={() => { sfx.tap(); setSelected(current); scrollToUnit(current!.unit.id); }}
            >
              <Emoji e={current.lesson.emoji} size={30} />
              <span className="continue-text"><b>Continue: {current.lesson.title}</b><span>{current.unit.title}</span></span>
            </button>
          )}
          <button className="btn ghost jump-btn" onClick={() => { sfx.tap(); setJumpOpen(true); }}>🗺️ Jump to unit</button>
        </div>

        {unitsByStage(subject).map(({ stage, units }) => (
          <div key={stage} className="stage">
            <h2 className="stage-title"><span>{stage}</span></h2>
            {units.map((unit) => {
              unitNumber++;
              const done = unit.lessons.filter((l) => progress.lessons[l.id]).length;
              const testScore = progress.checkpoints[unit.id];
              const skipped = testedOut(progress, unit);
              const canFold = foldable(unit);
              const folded = canFold && !opened.has(unit.id);
              return (
                <section key={unit.id} id={`unit-${unit.id}`} className={`unit ${folded ? 'folded' : ''}`} style={{ ['--unit' as string]: unit.colour }}>
                  <div
                    className={`unit-banner ${canFold ? 'foldable' : ''}`}
                    onClick={canFold ? () => toggleUnit(unit.id) : undefined}
                    role={canFold ? 'button' : undefined}
                    aria-expanded={canFold ? !folded : undefined}
                  >
                    <div className="unit-text">
                      <p className="unit-kicker">Unit {unitNumber} · {done}/{unit.lessons.length} lessons{skipped ? ' · tested out ✓' : ''}</p>
                      <h2>{unit.title}</h2>
                      {!folded && <p className="unit-desc">{unit.description}</p>}
                      {canFold && <p className="unit-toggle">{folded ? 'Show lessons ▾' : 'Hide lessons ▴'}</p>}
                    </div>
                    <Emoji e={unitEmoji(unit)} size={folded ? 48 : 72} className="unit-art" />
                  </div>
                  {skipped && done < unit.lessons.length && (
                    <p className="tested-out-nudge">⭐ You tested out of this one! Do its lessons for stars, plus {GEMS.testedOutLesson} 💎 extra for each new one.</p>
                  )}
                  {!folded && <div className="path">
                    {unit.lessons.map((lesson, li) => {
                      const unlocked = isLessonUnlocked(progress, unit, li);
                      const { stars, gold } = lessonStars(progress, lesson.id);
                      const isCurrent = lesson.id === current?.lesson.id;
                      return (
                        <div key={lesson.id} className="path-row" style={{ transform: `translateX(${OFFSETS[li % OFFSETS.length]}px)` }}>
                          {isCurrent && <span className="start-bubble">START</span>}
                          <button
                            className={`node ${stars ? 'complete' : ''} ${gold ? 'gold' : ''} ${unlocked ? '' : 'locked'} ${isCurrent ? 'current' : ''}`}
                            onClick={() => { sfx.tap(); setSelected({ unit, lesson, index: li }); }}
                            aria-label={`${lesson.title}${unlocked ? '' : ' (locked)'}`}
                          >
                            <Emoji e={unlocked ? lesson.emoji : '🔒'} size={unlocked ? 44 : 34} className="node-emoji" />
                          </button>
                          <div className="node-stars" aria-label={`${stars} stars`}>
                            {[0, 1, 2].map((s) => <span key={s} className={s < stars ? 'on' : ''}>★</span>)}
                          </div>
                          {needsRedo(progress, lesson.id) && <span className="redo-tag">Redo</span>}
                        </div>
                      );
                    })}
                    <div className="path-row">
                      <button
                        className={`node trophy ${testScore !== undefined && testScore >= 0.8 ? 'gold complete' : ''}`}
                        onClick={() => { sfx.tap(); setSelected({ unit, checkpoint: true }); }}
                        aria-label="Unit test"
                      >
                        <Emoji e="🏆" size={44} className="node-emoji" />
                      </button>
                      <div className="node-caption">Unit test</div>
                    </div>
                  </div>}
                </section>
              );
            })}
          </div>
        ))}

      </div>

      <aside className="learn-side">
        <ScreenCard progress={progress} />
        <StudyChestsCard progress={progress} />
        <DailyCard progress={progress} />
      </aside>

      {jumpOpen && (
        <div className="sheet-backdrop" onClick={() => setJumpOpen(false)}>
          <div className="sheet jump-sheet pop-up" onClick={(e) => e.stopPropagation()} style={{ ['--unit' as string]: subject.colour }}>
            <h3><Emoji e={subject.emoji} size={28} /> {subject.title}: jump to a unit</h3>
            {(() => {
              let n = 0;
              return unitsByStage(subject).map(({ stage, units }) => (
                <div key={stage} className="jump-stage">
                  <h4>{stage}</h4>
                  {units.map((u) => {
                    n++;
                    const done = u.lessons.filter((l) => progress.lessons[l.id]).length;
                    const here = u.id === current?.unit.id;
                    const status = here ? 'next up' : isUnitComplete(progress, u) ? '✓ done' : testedOut(progress, u) ? '✓ tested out' : done ? `${done}/${u.lessons.length}` : '';
                    return (
                      <button key={u.id} className={`jump-row ${here ? 'here' : ''}`} style={{ ['--unit' as string]: u.colour }} onClick={() => jumpTo(u)}>
                        <span className="jump-num">{n}</span>
                        <Emoji e={unitEmoji(u)} size={26} />
                        <span className="jump-title">{u.title}</span>
                        <span className="jump-status">{status}</span>
                      </button>
                    );
                  })}
                </div>
              ));
            })()}
          </div>
        </div>
      )}

      {selected && (
        <div className="sheet-backdrop" onClick={() => setSelected(null)}>
          <div className="sheet pop-up" onClick={(e) => e.stopPropagation()} style={{ ['--unit' as string]: selected.unit.colour }}>
            {'checkpoint' in selected ? (
              <>
                <h3><Emoji e="🏆" size={30} /> {selected.unit.title}: unit test</h3>
                <p className="muted">12 mixed questions from the whole unit. Score 80% to win the trophy and 20 💎.</p>
                {progress.screenBonuses.some((b) => b.unitId === selected.unit.id) ? (
                  <p className="small muted">🎮 You’ve already earned this unit’s screen-time bonus.</p>
                ) : isUnitComplete(progress, selected.unit) ? (
                  <p className="bonus-line">🎮 Pass it for +{unitTestBonus(selected.unit)} min of screen time!</p>
                ) : (
                  <p className="small muted">🎮 Finish all {selected.unit.lessons.length} lessons first to earn +{unitTestBonus(selected.unit)} min of screen time.</p>
                )}
                {!isUnitComplete(progress, selected.unit) && !testedOut(progress, selected.unit) && (
                  <p className="test-out-note">⚡ Already know this? Pass the test to unlock every lesson in the unit and skip ahead.</p>
                )}
                {progress.checkpoints[selected.unit.id] !== undefined && (
                  <p>Best score: <b>{Math.round(progress.checkpoints[selected.unit.id] * 100)}%</b></p>
                )}
                <p className="mito-pep">🧬 {testPep(progress)}</p>
                <button className="btn unit wide" onClick={() => start(selected)}>Start test</button>
              </>
            ) : (
              <>
                <h3><Emoji e={selected.lesson.emoji} size={30} /> {selected.lesson.title}</h3>
                <p className="muted">{selected.lesson.learn.length} quick cards, then {selected.lesson.questions.length} questions.</p>
                {progress.lessons[selected.lesson.id] && (
                  <p>Best score: <b>{Math.round(progress.lessons[selected.lesson.id].bestAccuracy * 100)}%</b> · Completed {progress.lessons[selected.lesson.id].completions}×</p>
                )}
                {needsRedo(progress, selected.lesson.id) && (
                  <p className="retry-note">Get {Math.round(LESSON_PASS * 100)}% first try to pass this lesson{selected.index + 1 < selected.unit.lessons.length ? ' and unlock the next one' : ''}.</p>
                )}
                {!progress.lessons[selected.lesson.id] && testedOut(progress, selected.unit) && (
                  <p className="bonus-line">⭐ You tested out of this unit, so this lesson earns {GEMS.testedOutLesson} 💎 extra.</p>
                )}
                {isLessonUnlocked(progress, selected.unit, selected.index) ? (
                  <button className="btn unit wide" onClick={() => start(selected)}>
                    {needsRedo(progress, selected.lesson.id) ? 'Redo' : progress.lessons[selected.lesson.id] ? 'Practise again' : 'Start'} · up to +{selected.lesson.questions.length * 2 + 13} XP
                  </button>
                ) : (
                  <p className="locked-note">
                    🔒 {progress.lessons[selected.unit.lessons[selected.index - 1].id]
                      ? `Get ${Math.round(LESSON_PASS * 100)}% on “${selected.unit.lessons[selected.index - 1].title}” to unlock this`
                      : `Finish “${selected.unit.lessons[selected.index - 1].title}” to unlock this`}, or pass the unit test to skip ahead.
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
