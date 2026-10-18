import { correctAnswerText, findLesson, findQuestion, findUnit, subjects } from '../content';
import { lessonAccuracy, weakSpots } from '../game/engine';
import { dayKey, lastNDays, parseDay } from '../game/dates';
import { levelFor } from '../game/levels';
import { AboutList } from '../components/AboutCard';
import { RewardsPanel, type RewardsControl } from '../components/RewardsPanel';
import { ScreenTimePanel } from '../components/ScreenTime';
import type { Progress } from '../game/types';

function ago(iso: string): string {
  const mins = Math.round((Date.now() - new Date(iso).getTime()) / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins} min ago`;
  const hours = Math.round(mins / 60);
  if (hours < 24) return `${hours} h ago`;
  const days = Math.round(hours / 24);
  return days === 1 ? 'yesterday' : `${days} days ago`;
}

function when(iso: string): string {
  return new Date(iso).toLocaleString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
}

const pct = (x: number) => `${Math.round(x * 100)}%`;

function mastery(acc: number | null): { label: string; cls: string } {
  if (acc === null) return { label: 'Not started', cls: 'none' };
  if (acc >= 0.8) return { label: 'Strong', cls: 'good' };
  if (acc >= 0.6) return { label: 'Getting there', cls: 'ok' };
  return { label: 'Needs work', cls: 'weak' };
}

export function ParentDashboard({ progress, rewards }: { progress: Progress; rewards?: RewardsControl }) {
  const today = dayKey();
  const days = lastNDays(today, 14);
  const week = lastNDays(today, 7);
  const weekStats = week.reduce(
    (s, d) => {
      const x = progress.daily[d];
      if (x) { s.seconds += x.seconds; s.answered += x.answered; s.correct += x.correct; s.sessions += x.lessons; if (x.lessons) s.activeDays++; }
      return s;
    },
    { seconds: 0, answered: 0, correct: 0, sessions: 0, activeDays: 0 },
  );
  const maxMinutes = Math.max(10, ...days.map((d) => (progress.daily[d]?.seconds ?? 0) / 60));
  const lastSession = progress.sessions[progress.sessions.length - 1];
  const weak = weakSpots(progress, 8);
  const recentMistakes = [...progress.mistakes].reverse().slice(0, 15);
  const recentSessions = [...progress.sessions].reverse().slice(0, 10);
  const lvl = levelFor(progress.xp);

  return (
    <div className="parent">
      <section className="parent-hero">
        <h1>{progress.profile.name}’s progress</h1>
        <p className="muted">
          {lastSession ? `Last studied ${ago(lastSession.at)}` : 'Hasn’t started a lesson yet'}
          {' · '}Level {lvl.level} · {progress.xp} XP total
        </p>
      </section>

      <div className="kpi-row">
        <div className="kpi"><span className="kpi-label">Current streak</span><span className="kpi-value">{progress.streak.current} {progress.streak.current === 1 ? 'day' : 'days'}</span><span className="kpi-sub">Best: {progress.streak.longest}</span></div>
        <div className="kpi"><span className="kpi-label">Active days (7d)</span><span className="kpi-value">{weekStats.activeDays}/7</span><span className="kpi-sub">{weekStats.sessions} sessions</span></div>
        <div className="kpi"><span className="kpi-label">Time (7d)</span><span className="kpi-value">{weekStats.seconds > 0 && weekStats.seconds < 60 ? '<1' : Math.round(weekStats.seconds / 60)} min</span><span className="kpi-sub">Goal: {progress.dailyGoal} XP/day</span></div>
        <div className="kpi"><span className="kpi-label">Accuracy (7d)</span><span className="kpi-value">{weekStats.answered ? pct(weekStats.correct / weekStats.answered) : '–'}</span><span className="kpi-sub">{weekStats.answered} questions</span></div>
      </div>

      <ScreenTimePanel progress={progress} />

      {rewards && <RewardsPanel name={progress.profile.name} gems={progress.gems} claims={progress.claims ?? []} control={rewards} />}

      <section className="panel">
        <h2>Minutes studied: last 14 days</h2>
        <div className="bars" role="img" aria-label="Bar chart of minutes studied per day over the last 14 days">
          {days.map((d) => {
            const s = progress.daily[d];
            const mins = (s?.seconds ?? 0) / 60;
            const date = parseDay(d);
            return (
              <div key={d} className="bar-col" tabIndex={0}>
                <div className="bar-area">
                  <div className={`bar ${mins === 0 ? 'empty' : ''}`} style={{ height: `${mins === 0 ? 0 : Math.max(4, (mins / maxMinutes) * 100)}%` }} />
                </div>
                <span className={`bar-label ${d === today ? 'today' : ''}`}>{date.toLocaleDateString('en-GB', { weekday: 'narrow' })}</span>
                <div className="tip">
                  <b>{date.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })}</b>
                  {s ? <>
                    <span>{Math.round(mins)} min · {s.lessons} sessions</span>
                    <span>{s.xp} XP · {s.answered ? pct(s.correct / s.answered) : '–'} correct</span>
                  </> : <span>No activity</span>}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="panel">
        <h2>Topic mastery</h2>
        <p className="muted small">Accuracy across every attempt at each lesson’s questions. Units she hasn’t started are hidden.</p>
        {subjects.map((subject) => {
          const started = subject.units.filter((u) => u.lessons.some((l) => lessonAccuracy(progress, l.id) !== null) || progress.checkpoints[u.id] !== undefined);
          return (
            <div key={subject.id} className="mastery-subject">
              <h3 className="mastery-subject-title">{subject.emoji} {subject.title}
                <span className="small muted"> · {started.length} of {subject.units.length} units started</span>
              </h3>
              {started.map((u) => (
          <div key={u.id} className="mastery-unit">
            <h3>{u.title}{progress.checkpoints[u.id] !== undefined && <span className="chip">Unit test best: {pct(progress.checkpoints[u.id])}</span>}</h3>
            {u.lessons.map((l) => {
              const acc = lessonAccuracy(progress, l.id);
              const m = mastery(acc);
              const rec = progress.lessons[l.id];
              return (
                <div key={l.id} className="mastery-row">
                  <span className="mastery-name">{l.emoji} {l.title}</span>
                  <div className="mastery-bar"><div className={`mastery-fill ${m.cls}`} style={{ width: acc === null ? 0 : `${acc * 100}%` }} /></div>
                  <span className={`mastery-tag ${m.cls}`}>{acc === null ? m.label : `${pct(acc)} · ${m.label}`}</span>
                  <span className="mastery-done small muted">{rec ? `done ${rec.completions}×` : ''}</span>
                </div>
              );
            })}
          </div>
              ))}
            </div>
          );
        })}
      </section>

      <section className="panel">
        <h2>Needs attention</h2>
        <p className="muted small">The questions she gets wrong most. ✅ means she’s since got it right.</p>
        {weak.length === 0 && <p className="muted">No mistakes yet!</p>}
        <ul className="weak-list">
          {weak.map((w) => (
            <li key={w.key} className="weak-item">
              <div className="weak-top">
                <span className="chip">{w.lessonTitle}</span>
                <span className="small muted">wrong {w.wrong} of {w.seen} {w.fixed ? '· ✅ fixed' : ''}</span>
              </div>
              <p className="weak-q">{w.question.prompt.replace('___', '_____')}</p>
              {w.question.code && <pre className="code-block small-code">{w.question.code}</pre>}
              {w.lastWrongAnswer && <p className="small">Her answer: <span className="bad-text">{w.lastWrongAnswer}</span></p>}
              <p className="small">Correct: <span className="good-text">{correctAnswerText(w.question)}</span></p>
            </li>
          ))}
        </ul>
      </section>

      <section className="panel">
        <h2>Recent mistakes</h2>
        {recentMistakes.length === 0 && <p className="muted">Nothing yet.</p>}
        <ul className="mistake-list">
          {recentMistakes.map((m, i) => {
            const ref = findQuestion(m.key);
            if (!ref) return null;
            return (
              <li key={i} className="mistake-item">
                <p className="small muted">{when(m.at)} · {ref.lesson.title}</p>
                <p className="weak-q">{ref.question.prompt}</p>
                {ref.question.code && <pre className="code-block small-code">{ref.question.code}</pre>}
                <div className="answer-pair">
                  <span>She said: <span className="bad-text">{m.given}</span></span>
                  <span>Answer: <span className="good-text">{correctAnswerText(ref.question)}</span></span>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="panel">
        <h2>Recent sessions</h2>
        {recentSessions.length === 0 && <p className="muted">Nothing yet.</p>}
        <div className="table-wrap">
          <table className="data-table">
            <thead><tr><th>When</th><th>What</th><th>Score</th><th>Time</th><th>XP</th></tr></thead>
            <tbody>
              {recentSessions.map((s, i) => {
                const lesson = s.lessonId ? findLesson(s.lessonId)?.lesson.title : undefined;
                const unit = s.unitId ? findUnit(s.unitId)?.unit.title : undefined;
                const what = s.kind === 'review' ? 'Practice' : s.kind === 'checkpoint' ? `Unit test: ${unit}` : lesson;
                return (
                  <tr key={i}>
                    <td className="nowrap small">{when(s.at)}</td>
                    <td>{what}{s.perfect ? ' 💎' : ''}</td>
                    <td>{s.correct}/{s.total}</td>
                    <td className="nowrap">{Math.max(1, Math.round(s.seconds / 60))} min</td>
                    <td>+{s.xp}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="panel">
        <h2>What {progress.profile.name} told Mito</h2>
        {progress.profile.about?.doneAt
          ? <AboutList about={progress.profile.about} />
          : <p className="muted">{progress.profile.about?.skippedAt ? 'She said “maybe later”. She can start the chat from the Me tab any time.' : 'Mito will ask next time she opens the app.'}</p>}
      </section>
    </div>
  );
}
