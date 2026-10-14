import { useState } from 'react';
import { CloudSignIn } from '../components/CloudSignIn';
import { Mascot } from '../components/Mascot';
import { createProgress, ensureQuests } from '../game/engine';
import { useStore } from '../store';
import { cloudConfigured } from '../sync/cloud';

export function Welcome() {
  const { setRole } = useStore();
  return (
    <div className="welcome">
      <Mascot mood="cheer" size={150} bounce />
      <h1 className="brand">BrainBoost</h1>
      <p className="muted">Bite-size lessons. Big brain gains.</p>
      <p className="welcome-q">Who’s using this device?</p>
      <div className="welcome-choices">
        <button className="btn primary big" onClick={() => setRole('student')}>🎒 I’m the learner</button>
        <button className="btn ghost big" onClick={() => setRole('parent')}>👪 I’m a parent</button>
      </div>
    </div>
  );
}

const GOALS = [10, 20, 40, 60];

export function StudentSetup() {
  const { setProgress, setRole, refresh, cloudEmail } = useStore();
  const [step, setStep] = useState<'name' | 'goal' | 'cloud'>('name');
  const [name, setName] = useState('');
  const [goal, setGoal] = useState(20);

  function finish() {
    const p = ensureQuests({ ...createProgress(name.trim() || 'Superstar'), dailyGoal: goal });
    setProgress(p);
  }

  return (
    <div className="welcome">
      <Mascot mood={step === 'goal' ? 'think' : 'happy'} size={120} bounce />
      {step === 'name' && (
        <form className="setup-form" onSubmit={(e) => { e.preventDefault(); setStep('goal'); }}>
          <h1>Hi! I’m Mito 👋</h1>
          <p className="muted">I’m a mitochondrion, the powerhouse of the cell. What should I call you?</p>
          <input className="big-input" autoFocus placeholder="Your name" value={name} maxLength={20} onChange={(e) => setName(e.target.value)} />
          <button className="btn primary wide" disabled={!name.trim()}>Next</button>
          <button type="button" className="btn link" onClick={() => setRole(null)}>Back</button>
        </form>
      )}
      {step === 'goal' && (
        <div className="setup-form">
          <h1>Pick a daily goal, {name.trim()}</h1>
          <p className="muted">You can change it any time.</p>
          <div className="goal-options">
            {GOALS.map((g) => (
              <button key={g} className={`goal-option ${goal === g ? 'selected' : ''}`} onClick={() => setGoal(g)}>
                <b>{g === 10 ? 'Chill' : g === 20 ? 'Regular' : g === 40 ? 'Serious' : 'Intense'}</b>
                <span>{g} XP a day</span>
              </button>
            ))}
          </div>
          <button className="btn primary wide" onClick={() => (cloudConfigured && !cloudEmail ? setStep('cloud') : finish())}>Let’s go!</button>
        </div>
      )}
      {step === 'cloud' && (
        <div className="setup-form">
          <h1>One last thing</h1>
          <p className="muted">Ask a grown-up to sign in to the family account so your progress is saved safely.</p>
          <CloudSignIn onDone={async () => { if (!(await refresh())) finish(); }} />
          <button className="btn link" onClick={finish}>Skip for now</button>
        </div>
      )}
    </div>
  );
}
