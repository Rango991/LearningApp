import { useState } from 'react';
import { comingSoon, qKey, subjects } from '../content';
import type { Lesson, Unit } from '../content/types';
import { DailyCard } from '../components/Hud';
import { Mascot } from '../components/Mascot';
import { ScreenCard } from '../components/ScreenTime';
import { checkpointQuestions, isLessonUnlocked, isUnitComplete, lessonStars, reviewAvailable, streakAtRisk } from '../game/engine';
import { dayKey } from '../game/dates';
import type { Progress } from '../game/types';
import { sfx } from '../sound';
import type { SessionPlan } from './Session';

const OFFSETS = [0, 52, 78, 52, 0, -52, -78, -52];

type Selected = { unit: Unit; lesson: Lesson; index: number } | { unit: Unit; checkpoint: true };

function greeting(p: Progress): string {
  const hour = new Date().getHours();
  const name = p.profile.name;
  if (p.totals.lessons === 0) return `Hi ${name}! I’m Mito, the powerhouse of the cell. Tap the first lesson to start!`;
  if (streakAtRisk(p)) return `Your ${p.streak.current}-day streak is waiting, ${name}! One lesson keeps it alive 🔥`;
  if ((p.daily[dayKey()]?.xp ?? 0) >= p.dailyGoal) return `Goal smashed today, ${name}! Anything extra is a bonus ⭐`;
  if (reviewAvailable(p) >= 3) return `You’ve got ${reviewAvailable(p)} questions ready to practise. Fixing mistakes is how brains grow 🧠`;
  return hour < 12 ? `Morning ${name}! Ready to learn something new?` : hour < 18 ? `Hey ${name}! Fancy a quick lesson?` : `Evening ${name}! A quick lesson before bed?`;
}

export function Learn({ progress, onStart }: { progress: Progress; onStart: (plan: SessionPlan) => void }) {
  const [selected, setSelected] = useState<Selected | null>(null);
  const subject = subjects[0];

  // The "current" lesson is the first one not yet done, so it gets the bouncing START bubble.
  let current: string | null = null;
  for (const u of subject.units) {
    const l = u.lessons.find((x) => !progress.lessons[x.id]);
    if (l) { current = l.id; break; }
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

  return (
    <div className="learn-layout">
      <div className="learn-main">
        <div className="mascot-hello">
          <Mascot mood="happy" accessory={progress.equipped} size={84} bounce />
          <p className="speech">{greeting(progress)}</p>
        </div>

        <div className="subject-tabs">
          <button className="subject-tab active">{subject.emoji} {subject.title} <span className="muted small">{subject.yearGroup}</span></button>
          {comingSoon.map((s) => (
            <button key={s.title} className="subject-tab soon" disabled title="Coming soon">{s.emoji} {s.title} <span className="small">soon</span></button>
          ))}
        </div>

        {subject.units.map((unit, ui) => {
          const done = unit.lessons.filter((l) => progress.lessons[l.id]).length;
          const testScore = progress.checkpoints[unit.id];
          const testUnlocked = isUnitComplete(progress, unit);
          return (
            <section key={unit.id} className="unit" style={{ ['--unit' as string]: unit.colour }}>
              <div className="unit-banner">
                <div>
                  <p className="unit-kicker">Unit {ui + 1} · {done}/{unit.lessons.length} lessons</p>
                  <h2>{unit.title}</h2>
                  <p className="unit-desc">{unit.description}</p>
                </div>
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
                        <span className="node-emoji">{unlocked ? lesson.emoji : '🔒'}</span>
                      </button>
                      <div className="node-stars" aria-label={`${stars} stars`}>
                        {[0, 1, 2].map((s) => <span key={s} className={s < stars ? 'on' : ''}>★</span>)}
                      </div>
                    </div>
                  );
                })}
                <div className="path-row">
                  <button
                    className={`node trophy ${testScore !== undefined && testScore >= 0.8 ? 'gold complete' : ''} ${testUnlocked ? '' : 'locked'}`}
                    onClick={() => { sfx.tap(); setSelected({ unit, checkpoint: true }); }}
                    aria-label="Unit test"
                  >
                    <span className="node-emoji">🏆</span>
                  </button>
                  <div className="node-caption">Unit test</div>
                </div>
              </div>
            </section>
          );
        })}

        <p className="muted center small">More units, subjects and GCSE content coming soon!</p>
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
                <h3>🏆 {selected.unit.title}: unit test</h3>
                <p className="muted">12 mixed questions from the whole unit, exam-style. Score 80% to win the trophy and 20 💎.</p>
                {progress.checkpoints[selected.unit.id] !== undefined && (
                  <p>Best score: <b>{Math.round(progress.checkpoints[selected.unit.id] * 100)}%</b></p>
                )}
                {isUnitComplete(progress, selected.unit) ? (
                  <button className="btn unit wide" onClick={() => start(selected)}>Start test</button>
                ) : (
                  <p className="locked-note">🔒 Finish every lesson in this unit to unlock the test.</p>
                )}
              </>
            ) : (
              <>
                <h3>{selected.lesson.emoji} {selected.lesson.title}</h3>
                <p className="muted">{selected.lesson.learn.length} quick cards, then {selected.lesson.questions.length} questions.</p>
                {progress.lessons[selected.lesson.id] && (
                  <p>Best score: <b>{Math.round(progress.lessons[selected.lesson.id].bestAccuracy * 100)}%</b> · Completed {progress.lessons[selected.lesson.id].completions}×</p>
                )}
                {isLessonUnlocked(progress, selected.unit, selected.index) ? (
                  <button className="btn unit wide" onClick={() => start(selected)}>
                    {progress.lessons[selected.lesson.id] ? 'Practise again' : 'Start'} · up to +{selected.lesson.questions.length * 2 + 13} XP
                  </button>
                ) : (
                  <p className="locked-note">🔒 Finish “{selected.unit.lessons[selected.index - 1].title}” to unlock this.</p>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
