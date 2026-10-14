import { achievements } from '../game/achievements';
import { Emoji } from '../components/Emoji';
import type { Progress } from '../game/types';

export function Badges({ progress }: { progress: Progress }) {
  const unlocked = achievements.filter((a) => progress.achievements[a.id]).length;
  return (
    <div className="page">
      <h1>Badges</h1>
      <p className="muted">{unlocked} of {achievements.length} collected</p>
      <div className="badge-grid">
        {achievements.map((a) => {
          const got = progress.achievements[a.id];
          const { value, target } = a.progress(progress);
          return (
            <div key={a.id} className={`badge ${got ? 'got' : 'locked'}`}>
              <div className="badge-emoji"><Emoji e={a.emoji} size={48} /></div>
              <h4>{a.title}</h4>
              <p className="small muted">{a.description}</p>
              {got ? (
                <p className="small got-date">Unlocked {new Date(got).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}</p>
              ) : (
                <>
                  <div className="mini-track"><div className="mini-fill gold" style={{ width: `${(value / target) * 100}%` }} /></div>
                  <p className="small muted">{value} / {target} · {a.gems} 💎</p>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
