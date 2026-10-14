import { findQuestion, subjects } from '../content';
import { Mascot } from '../components/Mascot';
import { buildReview, dueKeys, isUnitComplete, checkpointQuestions, mistakeKeys } from '../game/engine';
import type { Progress } from '../game/types';
import type { SessionPlan } from './Session';

export function Practice({ progress, onStart }: { progress: Progress; onStart: (plan: SessionPlan) => void }) {
  const mistakes = mistakeKeys(progress);
  const due = dueKeys(progress);
  const review = buildReview(progress);
  // Units she's started, plus any she has a test score for.
  const units = subjects.flatMap((s) => s.units).filter((u) => u.lessons.some((l) => progress.lessons[l.id]) || progress.checkpoints[u.id] !== undefined);

  return (
    <div className="page">
      <h1>Practice</h1>
      <p className="muted">Questions you got wrong come back here until you’ve nailed them. Old ones come back after a few days so you don’t forget them. That’s the secret to remembering things for exams!</p>

      <section className="card practice-hero">
        <Mascot mood={mistakes.length ? 'think' : 'happy'} accessory={progress.equipped} size={80} />
        <div className="grow">
          {review.length ? (
            <>
              <h3>{mistakes.length ? `🔧 ${mistakes.length} mistake${mistakes.length === 1 ? '' : 's'} to fix` : '🧠 Memory refresh'}</h3>
              <p className="muted">{due.length ? `${due.length} older question${due.length === 1 ? '' : 's'} due for a refresh.` : 'Fix these and earn XP!'}</p>
              <button
                className="btn primary"
                onClick={() => onStart({ kind: 'review', title: 'Practice', colour: '#7c4dff', keys: review })}
              >
                Practise {review.length} question{review.length === 1 ? '' : 's'}
              </button>
            </>
          ) : (
            <>
              <h3>All caught up! 🎉</h3>
              <p className="muted">No mistakes to fix right now. Do some lessons and anything tricky will appear here.</p>
            </>
          )}
        </div>
      </section>

      {mistakes.length > 0 && (
        <section className="card">
          <h3>Your tricky questions</h3>
          <ul className="tricky-list">
            {mistakes.slice(0, 8).map((k) => {
              const ref = findQuestion(k);
              return ref && <li key={k}><span className="chip">{ref.lesson.title}</span> {ref.question.prompt.replace('___', '…')}</li>;
            })}
          </ul>
        </section>
      )}

      <h2>Unit tests 🏆</h2>
      {units.length === 0 && <p className="muted">Start a unit and its test appears here. You can also take any unit’s test from the 🏆 at the end of its path.</p>}
      <div className="test-grid">
        {units.map((u) => {
          const best = progress.checkpoints[u.id];
          return (
            <section key={u.id} className="card test-card" style={{ ['--unit' as string]: u.colour }}>
              <h3>{u.title}</h3>
              <p className="muted small">{best === undefined ? 'Not tried yet' : `Best: ${Math.round(best * 100)}% ${best >= 0.8 ? '🏆' : ''}`}</p>
              <button
                className="btn unit"
                onClick={() => onStart({ kind: 'checkpoint', title: `${u.title}: unit test`, colour: u.colour, unitId: u.id, keys: checkpointQuestions(u) })}
              >
                {isUnitComplete(progress, u) ? 'Take test' : 'Test out'}
              </button>
            </section>
          );
        })}
      </div>
    </div>
  );
}
