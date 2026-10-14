import { questLabel, streakAtRisk } from '../game/engine';
import { dayKey } from '../game/dates';
import { levelFor } from '../game/levels';
import type { Progress } from '../game/types';

export function TopBar({ progress, onStreak }: { progress: Progress; onStreak?: () => void }) {
  const lvl = levelFor(progress.xp);
  const risk = streakAtRisk(progress);
  return (
    <header className="topbar">
      <button className={`hud-item streak ${risk ? 'at-risk' : ''} ${progress.streak.current === 0 ? 'cold' : ''}`} onClick={onStreak} aria-label={`${progress.streak.current} day streak`}>
        <span className="hud-icon">🔥</span>{progress.streak.current}
      </button>
      <div className="hud-item gems" aria-label={`${progress.gems} gems`}>
        <span className="hud-icon">💎</span>{progress.gems}
      </div>
      <div className="hud-item level" aria-label={`Level ${lvl.level}`}>
        <span className="level-chip">Lv {lvl.level}</span>
        <div className="mini-track"><div className="mini-fill" style={{ width: `${(lvl.into / lvl.needed) * 100}%` }} /></div>
      </div>
    </header>
  );
}

export function GoalRing({ progress, size = 64 }: { progress: Progress; size?: number }) {
  const xp = progress.daily[dayKey()]?.xp ?? 0;
  const pct = Math.min(1, xp / progress.dailyGoal);
  const r = size / 2 - 6;
  const c = 2 * Math.PI * r;
  return (
    <div className="goal-ring" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--line)" strokeWidth="8" />
        <circle
          cx={size / 2} cy={size / 2} r={r} fill="none" stroke={pct >= 1 ? 'var(--green)' : 'var(--gold)'} strokeWidth="8"
          strokeLinecap="round" strokeDasharray={`${c * pct} ${c}`} transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <span className="goal-ring-label">{pct >= 1 ? '✓' : `${xp}`}</span>
    </div>
  );
}

export function DailyCard({ progress }: { progress: Progress }) {
  const xp = progress.daily[dayKey()]?.xp ?? 0;
  const quests = progress.quests.items;
  const allDone = quests.length > 0 && quests.every((q) => q.done);
  return (
    <section className="card daily-card">
      <div className="daily-goal">
        <GoalRing progress={progress} />
        <div>
          <h3>Daily goal</h3>
          <p className="muted">{xp >= progress.dailyGoal ? 'Done for today! Extra XP still counts.' : `${xp} / ${progress.dailyGoal} XP`}</p>
        </div>
      </div>
      <h3 className="quests-title">Daily quests <span className={`chest ${allDone ? 'open' : ''}`}>{allDone ? '🎁' : '🧰'}</span></h3>
      <ul className="quest-list">
        {quests.map((q) => (
          <li key={q.kind} className={`quest ${q.done ? 'done' : ''}`}>
            <div className="quest-label">
              <span>{q.done ? '✅' : '⭐'} {questLabel(q)}</span>
              <span className="quest-reward">{q.reward} 💎</span>
            </div>
            <div className="mini-track"><div className="mini-fill gold" style={{ width: `${(q.progress / q.target) * 100}%` }} /></div>
          </li>
        ))}
      </ul>
      {!allDone && <p className="muted small">Finish all three for a bonus chest 🎁</p>}
    </section>
  );
}
