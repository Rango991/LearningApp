import { useState } from 'react';
import { qKey, subjects, findSubject, unitsByStage } from '../content';
import type { Lesson, Unit } from '../content/types';
import { Emoji } from '../components/Emoji';
import { DailyCard } from '../components/Hud';
import { Mascot } from '../components/Mascot';
import { ScreenCard } from '../components/ScreenTime';
import {
  checkpointQuestions, isLessonUnlocked, isUnitComplete, lessonStars, testedOut,
} from '../game/engine';
import { greeting, mitoAccessory, testPep } from '../game/mito';
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

export function Learn({ progress, onStart }: { progress: Progress; onStart: (plan: SessionPlan) => void }) {
  const [selected, setSelected] = useState<Selected | null>(null);
  const [subjectId, setSubjectId] = useState(loadSubject);
  const subject = findSubject(subjectId);

  function pickSubject(id: string) {
    sfx.tap();
    setSubjectId(id);
    try { localStorage.setItem(SUBJECT_KEY, id); } catch { /* not important */ }
  }

  // The "current" lesson is the first unlocked one not yet done, so it gets the START bubble.
  let current: string | null = null;
  for (const u of subject.units) {
    const i = u.lessons.findIndex((x, li) => !progress.lessons[x.id] && isLessonUnlocked(progress, u, li));
    if (i >= 0) { current = u.lessons[i].id; break; }
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

        {unitsByStage(subject).map(({ stage, units }) => (
          <div key={stage} className="stage">
            <h2 className="stage-title"><span>{stage}</span></h2>
            {units.map((unit) => {
              unitNumber++;
              const done = unit.lessons.filter((l) => progress.lessons[l.id]).length;
              const testScore = progress.checkpoints[unit.id];
              const skipped = testedOut(progress, unit);
              return (
                <section key={unit.id} className="unit" style={{ ['--unit' as string]: unit.colour }}>
                  <div className="unit-banner">
                    <div className="unit-text">
                      <p className="unit-kicker">Unit {unitNumber} · {done}/{unit.lessons.length} lessons{skipped ? ' · tested out ✓' : ''}</p>
                      <h2>{unit.title}</h2>
                      <p className="unit-desc">{unit.description}</p>
                    </div>
                    <Emoji e={unitEmoji(unit)} size={72} className="unit-art" />
                  </div>
                  <div className="path">
                    {unit.lessons.map((lesson, li) => {
                      const unlocked = isLessonUnlocked(progress, unit, li);
                      const { stars, gold } = lessonStars(progress, lesson.id);
                      const isCurrent = lesson.id === current;
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
                  </div>
                </section>
              );
            })}
          </div>
        ))}

      </div>

      <aside className="learn-side">
        <ScreenCard progress={progress} />
        <DailyCard progress={progress} />
      </aside>

      {selected && (
        <div className="sheet-backdrop" onClick={() => setSelected(null)}>
          <div className="sheet pop-up" onClick={(e) => e.stopPropagation()} style={{ ['--unit' as string]: selected.unit.colour }}>
            {'checkpoint' in selected ? (
              <>
                <h3><Emoji e="🏆" size={30} /> {selected.unit.title}: unit test</h3>
                <p className="muted">12 mixed questions from the whole unit. Score 80% to win the trophy, 20 💎 and 15 min of screen time.</p>
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
                {isLessonUnlocked(progress, selected.unit, selected.index) ? (
                  <button className="btn unit wide" onClick={() => start(selected)}>
                    {progress.lessons[selected.lesson.id] ? 'Practise again' : 'Start'} · up to +{selected.lesson.questions.length * 2 + 13} XP
                  </button>
                ) : (
                  <p className="locked-note">🔒 Finish “{selected.unit.lessons[selected.index - 1].title}” to unlock this, or pass the unit test to skip ahead.</p>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
