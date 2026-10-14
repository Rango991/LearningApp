import { useEffect, useMemo, useState } from 'react';
import { Confetti } from '../components/Confetti';
import { Mascot } from '../components/Mascot';
import { StreakWeek } from '../components/StreakWeek';
import { achievementById } from '../game/achievements';
import { questLabel } from '../game/engine';
import type { Progress, RewardSummary, SessionKind } from '../game/types';
import { sfx } from '../sound';

interface Props {
  summary: RewardSummary;
  progress: Progress;
  kind: SessionKind;
  onDone: () => void;
}

type Step = 'main' | 'streak' | 'goal' | 'quests' | 'level' | `badge:${string}`;

/** A sequence of celebration cards, one reward at a time, like a slot machine paying out. */
export function Results({ summary, progress, kind, onDone }: Props) {
  const steps = useMemo<Step[]>(() => {
    const s: Step[] = ['main'];
    if (summary.streakExtended) s.push('streak');
    if (summary.goalJustMet) s.push('goal');
    if (summary.questsCompleted.length) s.push('quests');
    if (summary.levelUp) s.push('level');
    for (const id of summary.newAchievements) s.push(`badge:${id}`);
    return s;
  }, [summary]);
  const [i, setI] = useState(0);
  const step = steps[i];

  useEffect(() => {
    if (step === 'main') sfx.complete();
    else if (step === 'level' || step.startsWith('badge:')) sfx.fanfare();
    else sfx.coin();
  }, [step]);

  const next = () => (i + 1 < steps.length ? setI(i + 1) : onDone());
  const failedTest = kind === 'checkpoint' && !summary.passedCheckpoint;

  return (
    <div className="results">
      {(step === 'main' && !failedTest) || step === 'level' || step.startsWith('badge:') ? <Confetti key={step} /> : null}
      <div className="results-card pop-in" key={step}>
        {step === 'main' && (
          <>
            <Mascot mood={failedTest ? 'think' : 'cheer'} accessory={progress.equipped} size={130} bounce />
            <h1>
              {kind === 'checkpoint'
                ? summary.passedCheckpoint ? 'Unit test passed! 🏆' : 'Good try!'
                : summary.perfect ? 'Perfect lesson!' : kind === 'review' ? 'Practice complete!' : 'Lesson complete!'}
            </h1>
            {failedTest && <p className="muted">You need 80% to pass. Have another go once you’ve practised.</p>}
            <div className="stat-row">
              <div className="stat-tile xp"><span className="stat-label">Total XP</span><span className="stat-value">⚡ {summary.xpGained}</span></div>
              <div className="stat-tile acc"><span className="stat-label">{summary.accuracy >= 0.9 ? 'Amazing' : summary.accuracy >= 0.7 ? 'Good' : 'Score'}</span><span className="stat-value">🎯 {Math.round(summary.accuracy * 100)}%</span></div>
              <div className="stat-tile gem"><span className="stat-label">Gems</span><span className="stat-value">💎 {summary.gemsGained}</span></div>
            </div>
            <ul className="breakdown">
              {summary.xpBreakdown.map((b) => <li key={b.label}><span>{b.label}</span><b>+{b.xp} XP</b></li>)}
            </ul>
          </>
        )}

        {step === 'streak' && (
          <>
            <div className="big-flame">🔥</div>
            <h1 className="streak-number">{summary.streak}</h1>
            <h2>day streak!</h2>
            <StreakWeek progress={progress} />
            <p className="muted">
              {summary.streak === 1 ? 'Come back tomorrow to build your streak!' : 'Keep it going tomorrow!'}
            </p>
          </>
        )}

        {step === 'goal' && (
          <>
            <div className="big-emoji">🎯</div>
            <h1>Daily goal hit!</h1>
            <p className="muted">You earned {progress.dailyGoal}+ XP today. Brilliant work.</p>
          </>
        )}

        {step === 'quests' && (
          <>
            <div className="big-emoji">{summary.allQuestsBonus ? '🎁' : '📜'}</div>
            <h1>{summary.allQuestsBonus ? 'All quests done!' : 'Quest complete!'}</h1>
            <ul className="quest-list">
              {summary.questsCompleted.map((q) => (
                <li key={q.kind} className="quest done">
                  <span>✅ {questLabel(q)}</span><b>+{q.reward} 💎</b>
                </li>
              ))}
              {summary.allQuestsBonus && <li className="quest done bonus"><span>🎁 Daily chest</span><b>+20 💎</b></li>}
            </ul>
          </>
        )}

        {step === 'level' && (
          <>
            <div className="level-badge">{summary.levelUp}</div>
            <h1>Level up!</h1>
            <p className="muted">You’re now level {summary.levelUp}. +25 💎</p>
          </>
        )}

        {step.startsWith('badge:') && (() => {
          const a = achievementById(step.slice(6));
          return a && (
            <>
              <p className="eyebrow">New badge unlocked</p>
              <div className="badge-big">{a.emoji}</div>
              <h1>{a.title}</h1>
              <p className="muted">{a.description}</p>
              <p className="gem-reward">+{a.gems} 💎</p>
            </>
          );
        })()}
      </div>
      <footer className="session-footer">
        <button className="btn primary wide" onClick={next} autoFocus>Continue</button>
      </footer>
    </div>
  );
}
