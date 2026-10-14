import { useState } from 'react';
import { TopBar } from './components/Hud';
import { Mascot } from './components/Mascot';
import { applySession } from './game/engine';
import type { RewardSummary, SessionKind, SessionResult } from './game/types';
import { sfx } from './sound';
import { useStore } from './store';
import { Badges } from './screens/Badges';
import { Learn } from './screens/Learn';
import { Me } from './screens/Me';
import { ParentApp, ParentGate } from './screens/Parent';
import { Practice } from './screens/Practice';
import { Results } from './screens/Results';
import { Session, type SessionPlan } from './screens/Session';
import { Shop } from './screens/Shop';
import { StudentSetup, Welcome } from './screens/Welcome';

type Tab = 'learn' | 'practice' | 'badges' | 'shop' | 'me';

const TABS: { id: Tab; icon: string; label: string }[] = [
  { id: 'learn', icon: '🏠', label: 'Learn' },
  { id: 'practice', icon: '🔁', label: 'Practice' },
  { id: 'badges', icon: '🏅', label: 'Badges' },
  { id: 'shop', icon: '💎', label: 'Shop' },
  { id: 'me', icon: '😊', label: 'Me' },
];

export function App() {
  const { ready, role, progress } = useStore();
  if (!ready) return null;
  if (!role) return <Welcome />;
  if (role === 'parent') return <ParentApp />;
  if (!progress) return <StudentSetup />;
  return <StudentApp />;
}

function StudentApp() {
  const { progress, setProgress, streakNotice, dismissStreakNotice } = useStore();
  const [tab, setTab] = useState<Tab>('learn');
  const [plan, setPlan] = useState<SessionPlan | null>(null);
  const [results, setResults] = useState<{ summary: RewardSummary; kind: SessionKind } | null>(null);
  const [parent, setParent] = useState(false);
  if (!progress) return null;

  function finish(result: SessionResult) {
    const { progress: next, summary } = applySession(progress!, result);
    setProgress(next);
    setPlan(null);
    setResults({ summary, kind: result.kind });
  }

  if (parent) return <ParentGate onClose={() => setParent(false)} />;
  if (results) {
    return <Results summary={results.summary} kind={results.kind} progress={progress} onDone={() => { setResults(null); window.scrollTo(0, 0); }} />;
  }
  if (plan) {
    return <Session plan={plan} accessory={progress.equipped} onQuit={() => setPlan(null)} onFinish={finish} />;
  }

  return (
    <div className="app">
      <TopBar progress={progress} onStreak={() => setTab('me')} />
      <main className="content">
        {tab === 'learn' && <Learn progress={progress} onStart={setPlan} />}
        {tab === 'practice' && <Practice progress={progress} onStart={setPlan} />}
        {tab === 'badges' && <Badges progress={progress} />}
        {tab === 'shop' && <Shop progress={progress} setProgress={setProgress} />}
        {tab === 'me' && <Me progress={progress} setProgress={setProgress} onParent={() => setParent(true)} />}
      </main>
      <nav className="tabbar">
        {TABS.map((t) => (
          <button key={t.id} className={`tab ${tab === t.id ? 'active' : ''}`} onClick={() => { sfx.tap(); setTab(t.id); window.scrollTo(0, 0); }}>
            <span className="tab-icon">{t.icon}</span>
            <span className="tab-label">{t.label}</span>
          </button>
        ))}
      </nav>

      {streakNotice && (
        <div className="modal-backdrop" onClick={dismissStreakNotice}>
          <div className="modal pop-in" onClick={(e) => e.stopPropagation()}>
            {streakNotice.frozeDays > 0 ? (
              <>
                <div className="big-emoji">🧊</div>
                <h3>Streak saved!</h3>
                <p>A streak freeze covered {streakNotice.frozeDays === 1 ? 'the day' : `${streakNotice.frozeDays} days`} you missed. Your {progress.streak.current}-day streak is safe. Do a lesson today to keep it going!</p>
              </>
            ) : (
              <>
                <Mascot mood="sad" accessory={progress.equipped} size={90} />
                <h3>Your streak reset</h3>
                <p>You had a {streakNotice.lostStreak}-day streak. No worries, everyone misses a day! Start a new one today. Tip: streak freezes in the shop protect it next time.</p>
              </>
            )}
            <button className="btn primary wide" onClick={dismissStreakNotice}>Let’s go!</button>
          </div>
        </div>
      )}
    </div>
  );
}
