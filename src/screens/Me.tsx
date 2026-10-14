import { useState } from 'react';
import { CloudSignIn } from '../components/CloudSignIn';
import { Mascot } from '../components/Mascot';
import { StreakWeek } from '../components/StreakWeek';
import { questionsSeenCount, touch } from '../game/engine';
import { levelFor } from '../game/levels';
import type { Progress } from '../game/types';
import { useStore } from '../store';
import { cloudConfigured, signOut } from '../sync/cloud';

const GOALS = [
  { xp: 10, label: 'Chill', note: '~1 short lesson' },
  { xp: 20, label: 'Regular', note: '~1 lesson' },
  { xp: 40, label: 'Serious', note: '~2 lessons' },
  { xp: 60, label: 'Intense', note: '~3 lessons' },
];

export function Me({ progress, setProgress, onParent }: { progress: Progress; setProgress: (p: Progress) => void; onParent: () => void }) {
  const { cloudEmail, sync, lastSynced, refresh } = useStore();
  const [signingIn, setSigningIn] = useState(false);
  const lvl = levelFor(progress.xp);
  const seen = questionsSeenCount(progress);

  const set = (patch: Partial<Progress>) => setProgress(touch({ ...progress, ...patch }));

  return (
    <div className="page">
      <div className="profile-head">
        <Mascot mood="happy" accessory={progress.equipped} size={90} />
        <div>
          <h1>{progress.profile.name}</h1>
          <p className="muted">Level {lvl.level} · {progress.xp} XP</p>
        </div>
      </div>

      <div className="stat-row">
        <div className="stat-tile"><span className="stat-label">Streak</span><span className="stat-value">🔥 {progress.streak.current}</span></div>
        <div className="stat-tile"><span className="stat-label">Best streak</span><span className="stat-value">🏅 {progress.streak.longest}</span></div>
        <div className="stat-tile"><span className="stat-label">Lessons</span><span className="stat-value">📚 {progress.totals.lessons}</span></div>
        <div className="stat-tile"><span className="stat-label">Questions seen</span><span className="stat-value">🧠 {seen.seen}/{seen.total}</span></div>
      </div>

      <section className="card">
        <h3>This week</h3>
        <StreakWeek progress={progress} />
        <p className="muted small">🧊 Streak freezes: {progress.streak.freezes}. They protect your streak if you miss a day.</p>
      </section>

      <section className="card">
        <h3>Daily goal</h3>
        <div className="goal-options">
          {GOALS.map((g) => (
            <button key={g.xp} className={`goal-option ${progress.dailyGoal === g.xp ? 'selected' : ''}`} onClick={() => set({ dailyGoal: g.xp })}>
              <b>{g.label}</b><span>{g.xp} XP</span><span className="small muted">{g.note}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="card">
        <h3>Settings</h3>
        <label className="toggle">
          <input type="checkbox" checked={progress.settings.sound} onChange={(e) => set({ settings: { ...progress.settings, sound: e.target.checked } })} />
          Sound effects
        </label>
      </section>

      <section className="card">
        <h3>Cloud sync</h3>
        {!cloudConfigured && <p className="muted small">Not set up yet. Progress is saved on this device. (See docs/SETUP.md.)</p>}
        {cloudConfigured && cloudEmail && (
          <>
            <p className="small">Signed in as <b>{cloudEmail}</b></p>
            <p className="muted small">
              {sync === 'syncing' ? 'Syncing…' : sync === 'error' ? '⚠️ Couldn’t sync. Will retry when online.' : lastSynced ? `✅ Synced ${lastSynced.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}` : ''}
            </p>
            <button className="btn ghost" onClick={async () => { await signOut(); await refresh(); }}>Sign out</button>
          </>
        )}
        {cloudConfigured && !cloudEmail && (signingIn
          ? <CloudSignIn onDone={async () => { setSigningIn(false); await refresh(); }} />
          : <button className="btn primary" onClick={() => setSigningIn(true)}>Connect family account</button>)}
      </section>

      <button className="btn ghost wide parent-link" onClick={onParent}>👪 Parent area</button>
    </div>
  );
}
