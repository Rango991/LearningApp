import { useState } from 'react';
import { Emoji } from '../components/Emoji';
import { Mascot } from '../components/Mascot';
import { buyItem, touch } from '../game/engine';
import { MAX_FREEZES, shopItems } from '../game/shop';
import type { Progress } from '../game/types';
import { sfx } from '../sound';

export function Shop({ progress, setProgress }: { progress: Progress; setProgress: (p: Progress) => void }) {
  const [message, setMessage] = useState<string | null>(null);

  function buy(id: string) {
    const r = buyItem(progress, id);
    if (r.ok) {
      sfx.coin();
      setProgress(r.progress);
      setMessage(id === 'freeze' ? 'Streak freeze ready! 🧊' : 'Looking good! ✨');
    } else {
      sfx.wrong();
      setMessage(r.reason);
    }
  }

  function equip(id: string | null) {
    sfx.tap();
    setProgress(touch({ ...progress, equipped: id }));
  }

  return (
    <div className="page">
      <h1>Shop</h1>
      <div className="card shop-hero">
        <Mascot mood="cheer" accessory={progress.equipped} size={120} bounce />
        <div>
          <p className="gem-balance">💎 {progress.gems}</p>
          <p className="muted small">Earn gems from lessons, quests, levels and badges.</p>
          {message && <p className="shop-message pop-in" key={message}>{message}</p>}
        </div>
      </div>
      <div className="shop-grid">
        {shopItems.map((item) => {
          const owned = progress.owned.includes(item.id);
          const equipped = progress.equipped === item.id;
          return (
            <div key={item.id} className="card shop-item">
              <Emoji e={item.emoji} size={64} className="shop-emoji" />
              <h4>{item.title}</h4>
              <p className="small muted">{item.description}</p>
              {item.kind === 'freeze' && <p className="small">You have {progress.streak.freezes}/{MAX_FREEZES}</p>}
              {item.kind === 'accessory' && owned ? (
                <button className={`btn ${equipped ? 'ghost' : 'primary'}`} onClick={() => equip(equipped ? null : item.id)}>
                  {equipped ? 'Take off' : 'Wear'}
                </button>
              ) : (
                <button
                  className="btn gold"
                  disabled={progress.gems < item.price || (item.kind === 'freeze' && progress.streak.freezes >= MAX_FREEZES)}
                  onClick={() => buy(item.id)}
                >
                  💎 {item.price}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
