import { useEffect, useMemo, useState } from 'react';
import { Emoji } from '../components/Emoji';
import { Confetti } from '../components/Confetti';
import { Mascot } from '../components/Mascot';
import { StreakWeek } from '../components/StreakWeek';
import { formatMinutes } from '../components/ScreenTime';
import { earnedToday, nextBoostHint } from '../game/screenTime';
import { achievementById } from '../game/achievements';
import { questLabel } from '../game/engine';
import { nextChest, WEEKLY_GOAL } from '../game/studyChests';
import { studyMinutes } from '../game/screenTime';
import { dayKey } from '../game/dates';
import { mitoAccessory } from '../game/mito';
import type { Progress, RewardSummary, SessionKind } from '../game/types';
import { sfx } from '../sound';

interface Props {
  summary: RewardSummary;
  progress: Progress;
  kind: SessionKind;
  /** What Mito says about this session. */
  line?: string;
  onDone: () => void;
}

type Step = 'main' | 'screen' | 'chests' | 'streak' | 'goal' | 'quests' | 'level' | `badge:${string}`;

/** A sequence of celebration cards, one reward at a time, like a slot machine paying out. */
export function Results({ summary, progress, kind, line, onDone }: Props) {
  const steps = useMemo<Step[]>(() => {
    const s: Step[] = ['main'];
    if (summary.screenMinutes > 0) s.push('screen');
    if (summary.studyChests.length || summary.weeklyWon) s.push('chests');
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
            <Mascot mood={failedTest ? 'think' : 'cheer'} accessory={mitoAccessory(progress)} size={130} bounce />
            {line && <p className="speech results-speech">{line}</p>}
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

        {step === 'screen' && (
          <>
            <Emoji e="🎮" size={110} className="big-emoji" />
            <h1 className="screen-earned">+{formatMinutes(summary.screenMinutes)}</h1>
            <h2>screen time earned!</h2>
            {summary.screenBonus > 0 && <p className="bonus-line">🏆 Includes a {summary.screenBonus} min unit test bonus!</p>}
            <p className="bank-total">Today’s total: <b>{formatMinutes(earnedToday(progress))}</b></p>
            <p className="muted">⚡ {nextBoostHint(progress)}</p>
          </>
        )}

        {step === 'chests' && (() => {
          const mins = studyMinutes(progress, dayKey());
          const coming = nextChest(mins);
          return (
            <>
              <Emoji e="🎁" size={110} className="big-emoji" />
              <h1>{summary.weeklyWon && !summary.studyChests.length ? 'You beat last week!' : summary.studyChests.length > 1 ? 'Study chests opened!' : 'Study chest opened!'}</h1>
              <ul className="quest-list">
                {summary.studyChests.map((c) => (
                  <li key={c.minutes} className="quest done"><span>🎁 {c.minutes} min of study today</span><b>+{c.gems} 💎</b></li>
                ))}
                {summary.weeklyWon && <li className="quest done bonus"><span>🏆 Beat last week</span><b>+{WEEKLY_GOAL.gems} 💎</b></li>}
              </ul>
              <p className="muted">{coming ? `${Math.ceil(coming.minutes - mins)} more min for a ${coming.gems}-gem chest!` : 'Every chest opened today. Amazing!'}</p>
            </>
          );
        })()}

        {step === 'streak' && (
          <>
            <Emoji e="🔥" size={130} className="big-flame" />
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
            <Emoji e="🎯" size={110} className="big-emoji" />
            <h1>Daily goal hit!</h1>
            <p className="muted">You earned {progress.dailyGoal}+ XP today. Brilliant work.</p>
          </>
        )}

        {step === 'quests' && (
          <>
            <Emoji e={summary.allQuestsBonus ? '🎁' : '📜'} size={110} className="big-emoji" />
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
              <div className="badge-big"><Emoji e={a.emoji} size={96} /></div>
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
