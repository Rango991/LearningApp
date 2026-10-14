import { useMemo, useRef, useState } from 'react';
import { correctAnswerText, findQuestion } from '../content';
import type { LearnCard } from '../content/types';
import { Mascot } from '../components/Mascot';
import { QuestionView, questionInstruction, type CheckFn, type CheckResult } from '../components/Questions';
import type { AnswerRecord, SessionKind, SessionResult } from '../game/types';
import { sfx } from '../sound';

export interface SessionPlan {
  kind: SessionKind;
  title: string;
  colour: string;
  keys: string[];
  learn?: LearnCard[];
  lessonId?: string;
  unitId?: string;
}

interface Props {
  plan: SessionPlan;
  accessory: string | null;
  onQuit: () => void;
  onFinish: (result: SessionResult) => void;
}

const PRAISE = ['Nice one!', 'Brilliant!', 'Spot on!', 'Nailed it!', 'Correct!', 'Great job!', 'Yes!', 'Amazing!'];
const COMBO_PRAISE: Record<number, string> = { 3: '3 in a row!', 5: '5 in a row! 🔥', 8: '8 in a row! Unstoppable!', 10: '10 in a row! Legend!' };
const MAX_REPEATS = 2;

interface Feedback extends CheckResult {
  explain?: string;
  answerText: string;
  praise: string;
}

export function Session({ plan, accessory, onQuit, onFinish }: Props) {
  const [phase, setPhase] = useState<'learn' | 'quiz'>(plan.learn?.length ? 'learn' : 'quiz');
  const [card, setCard] = useState(0);
  const [queue, setQueue] = useState(plan.keys);
  const [index, setIndex] = useState(0);
  const [check, setCheck] = useState<CheckFn>(null);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [combo, setCombo] = useState(0);
  const [confirmQuit, setConfirmQuit] = useState(false);
  const maxCombo = useRef(0);
  const answers = useRef(new Map<string, AnswerRecord>());
  const repeats = useRef(new Map<string, number>());
  const started = useRef(Date.now());

  const key = queue[index];
  const ref = useMemo(() => (key ? findQuestion(key) : undefined), [key]);
  const progress = phase === 'learn' ? 0 : (index + (feedback ? 1 : 0)) / queue.length;

  function doCheck() {
    if (!check || !ref || feedback) return;
    const r = check();
    if (!answers.current.has(key)) answers.current.set(key, { key, correct: r.correct, given: r.given });

    let praise = '';
    if (r.correct) {
      const c = combo + 1;
      setCombo(c);
      maxCombo.current = Math.max(maxCombo.current, c);
      praise = COMBO_PRAISE[c] ?? PRAISE[Math.floor(Math.random() * PRAISE.length)];
      if (COMBO_PRAISE[c]) sfx.combo(); else sfx.correct();
    } else {
      setCombo(0);
      sfx.wrong();
      // Ask it again at the end so she leaves the lesson having got it right.
      const n = repeats.current.get(key) ?? 0;
      if (n < MAX_REPEATS) {
        repeats.current.set(key, n + 1);
        setQueue((q) => [...q, key]);
      }
    }
    setFeedback({ ...r, explain: ref.question.explain, answerText: correctAnswerText(ref.question), praise });
  }

  function next() {
    sfx.tap();
    setFeedback(null);
    setCheck(null);
    if (index + 1 >= queue.length) {
      onFinish({
        kind: plan.kind,
        lessonId: plan.lessonId,
        unitId: plan.unitId,
        answers: [...answers.current.values()],
        maxCombo: maxCombo.current,
        seconds: Math.min(1800, Math.round((Date.now() - started.current) / 1000)),
      });
      return;
    }
    setIndex(index + 1);
  }

  return (
    <div className="session" style={{ ['--unit' as string]: plan.colour }}>
      <header className="session-top">
        <button className="icon-btn" aria-label="Quit" onClick={() => setConfirmQuit(true)}>✕</button>
        <div className="progress-track" aria-label="Lesson progress">
          <div className="progress-fill" style={{ width: `${Math.max(4, progress * 100)}%` }} />
        </div>
        {combo >= 3 && <span className="combo-pill" key={combo}>🔥 {combo}</span>}
      </header>

      {phase === 'learn' && plan.learn && (
        <main className="session-body learn">
          <p className="eyebrow">Learn · {card + 1} of {plan.learn.length}</p>
          <div className="learn-card pop-in" key={card}>
            <div className="learn-emoji">{plan.learn[card].emoji}</div>
            <h2>{plan.learn[card].title}</h2>
            <p>{plan.learn[card].body}</p>
            {plan.learn[card].keywords && (
              <div className="keywords">
                {plan.learn[card].keywords!.map((k) => <span key={k} className="chip">{k}</span>)}
              </div>
            )}
          </div>
          <div className="session-actions">
            {card > 0 && <button className="btn ghost" onClick={() => setCard(card - 1)}>Back</button>}
            <button
              className="btn primary grow"
              onClick={() => {
                sfx.tap();
                if (card + 1 < plan.learn!.length) setCard(card + 1);
                else setPhase('quiz');
              }}
            >
              {card + 1 < plan.learn.length ? 'Next' : 'Start the quiz!'}
            </button>
          </div>
        </main>
      )}

      {phase === 'quiz' && ref && (
        <main className="session-body quiz">
          {index >= plan.keys.length ? (
            <p className="eyebrow redo">🔁 Let’s try this one again</p>
          ) : (
            <p className="eyebrow">{questionInstruction(ref.question)}</p>
          )}
          {ref.question.type !== 'gap' && <h2 className="prompt">{ref.question.prompt}</h2>}
          <QuestionView key={`${key}#${index}`} q={ref.question} locked={Boolean(feedback)} onReady={(fn) => setCheck(() => fn)} />
        </main>
      )}

      {phase === 'quiz' && !feedback && (
        <footer className="session-footer">
          <button className="btn primary wide" disabled={!check} onClick={doCheck}>Check</button>
        </footer>
      )}

      {feedback && (
        <footer className={`feedback ${feedback.correct ? 'good' : 'bad'}`} role="status">
          <div className="feedback-inner">
            <div className="feedback-text">
              <h3>{feedback.correct ? `✅ ${feedback.praise}` : '❌ Not quite'}</h3>
              {feedback.close && <p>Watch the spelling: <b>{feedback.answerText}</b></p>}
              {!feedback.correct && <p>Answer: <b>{feedback.answerText}</b></p>}
              {feedback.explain && (!feedback.correct || feedback.close) && <p className="explain">{feedback.explain}</p>}
            </div>
            <button className={`btn wide ${feedback.correct ? 'success' : 'danger'}`} onClick={next} autoFocus>
              Continue
            </button>
          </div>
        </footer>
      )}

      {confirmQuit && (
        <div className="modal-backdrop" onClick={() => setConfirmQuit(false)}>
          <div className="modal pop-in" onClick={(e) => e.stopPropagation()}>
            <Mascot mood="sad" accessory={accessory} size={90} />
            <h3>Wait, don’t go!</h3>
            <p>You’ll lose your progress in this {plan.kind === 'checkpoint' ? 'test' : 'lesson'}.</p>
            <button className="btn primary wide" onClick={() => setConfirmQuit(false)}>Keep learning</button>
            <button className="btn ghost wide" onClick={onQuit}>Quit</button>
          </div>
        </div>
      )}
    </div>
  );
}
