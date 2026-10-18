import { useState } from 'react';
import { Emoji } from '../components/Emoji';
import { Mascot } from '../components/Mascot';
import { buyItem, claimReward, touch } from '../game/engine';
import { MAX_FREEZES, shopItems, type ShopItem } from '../game/shop';
import type { Progress } from '../game/types';
import { sfx } from '../sound';

const SECTIONS: { kind: ShopItem['kind']; title: string; sub: string }[] = [
  { kind: 'freeze', title: 'Power-ups', sub: 'Keep your streak safe.' },
  { kind: 'accessory', title: 'Outfits for Mito', sub: 'Buy once, wear whenever you like.' },
  { kind: 'skin', title: 'Mito colours', sub: 'Big ones to save up for!' },
];

export function Shop({ progress, setProgress }: { progress: Progress; setProgress: (p: Progress) => void }) {
  const [message, setMessage] = useState<string | null>(null);
  const rewards = progress.rewards?.items ?? [];
  const claims = [...(progress.claims ?? [])].reverse();

  function buy(item: ShopItem) {
    const r = buyItem(progress, item.id);
    if (r.ok) {
      sfx.coin();
      setProgress(r.progress);
      setMessage(item.kind === 'freeze' ? 'Streak freeze ready! 🧊' : item.kind === 'skin' ? 'Whoa, new look! 🎨' : 'Looking good! ✨');
    } else {
      sfx.wrong();
      setMessage(r.reason);
    }
  }

  function claim(id: string, title: string) {
    const r = claimReward(progress, id);
    if (r.ok) {
      sfx.coin();
      setProgress(r.progress);
      setMessage(`You claimed “${title}”! 🎉 Your grown-up can see it now.`);
    } else {
      sfx.wrong();
      setMessage(r.reason);
    }
  }

  function wear(item: ShopItem, on: boolean) {
    sfx.tap();
    setProgress(touch(item.kind === 'skin'
      ? { ...progress, skin: on ? item.id : null }
      : { ...progress, equipped: on ? item.id : null }));
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

      {rewards.length > 0 && (
        <section className="shop-section">
          <h2>Real rewards</h2>
          <p className="muted small">Set up by your grown-up. Claim one and they’ll see it on their phone.</p>
          <div className="shop-grid">
            {rewards.map((r) => (
              <div key={r.id} className="card shop-item reward-item">
                <Emoji e={r.emoji} size={64} className="shop-emoji" />
                <h4>{r.title}</h4>
                <button className="btn gold" disabled={progress.gems < r.price} onClick={() => claim(r.id, r.title)}>
                  💎 {r.price}
                </button>
              </div>
            ))}
          </div>
          {claims.length > 0 && (
            <ul className="claim-list">
              {claims.slice(0, 6).map((c) => (
                <li key={c.id}>
                  <Emoji e={c.emoji} size={22} /> {c.title}
                  <span className={`claim-status ${c.givenAt ? 'given' : ''}`}>{c.givenAt ? 'Got it ✓' : 'Waiting for a grown-up'}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}

      {SECTIONS.map((section) => (
        <section key={section.kind} className="shop-section">
          <h2>{section.title}</h2>
          <p className="muted small">{section.sub}</p>
          <div className="shop-grid">
            {shopItems.filter((i) => i.kind === section.kind).map((item) => {
              const owned = progress.owned.includes(item.id);
              const wearing = item.kind === 'skin' ? progress.skin === item.id : progress.equipped === item.id;
              return (
                <div key={item.id} className="card shop-item">
                  {item.kind === 'accessory'
                    ? <div className="shop-preview"><Mascot accessory={item.id} size={84} /></div>
                    : <Emoji e={item.emoji} size={64} className="shop-emoji" />}
                  <h4>{item.title}</h4>
                  <p className="small muted">{item.description}</p>
                  {item.kind === 'freeze' && <p className="small">You have {progress.streak.freezes}/{MAX_FREEZES}</p>}
                  {item.kind !== 'freeze' && owned ? (
                    <button className={`btn ${wearing ? 'ghost' : 'primary'}`} onClick={() => wear(item, !wearing)}>
                      {wearing ? (item.kind === 'skin' ? 'Back to orange' : 'Take off') : (item.kind === 'skin' ? 'Use' : 'Wear')}
                    </button>
                  ) : (
                    <button
                      className="btn gold"
                      disabled={progress.gems < item.price || (item.kind === 'freeze' && progress.streak.freezes >= MAX_FREEZES)}
                      onClick={() => buy(item)}
                    >
                      💎 {item.price}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
