import { useState } from 'react';
import { REWARD_EMOJI } from '../game/shop';
import type { FamilyReward, RewardClaim } from '../game/types';
import { Emoji } from './Emoji';

export interface RewardsControl {
  items: FamilyReward[];
  given: string[];
  onSave: (items: FamilyReward[]) => void;
  onGiven: (claimId: string) => void;
  /** Shown under the heading, e.g. how changes reach her tablet. */
  note?: string;
  /** Show the note as an error (in red). */
  noteIsError?: boolean;
}

const IDEAS: Omit<FamilyReward, 'id'>[] = [
  { emoji: '🎬', title: 'Pick the Friday film', price: 400 },
  { emoji: '🌙', title: 'Stay up 30 minutes later', price: 500 },
  { emoji: '🍦', title: 'Ice cream trip', price: 600 },
  { emoji: '🔑', title: 'New keyring', price: 800 },
  { emoji: '🎀', title: 'New hair bow', price: 1000 },
  { emoji: '🧪', title: 'Slime', price: 1000 },
  { emoji: '🍩', title: 'Donuts', price: 1000 },
  { emoji: '🛍️', title: '£5 to spend', price: 1500 },
  { emoji: '🥤', title: 'Bubble tea', price: 1500 },
  { emoji: '💎', title: '400 Robux (once a month)', price: 1500 },
  { emoji: '🖼️', title: 'Katseye poster', price: 2000 },
  { emoji: '🏛️', title: 'Museum day out', price: 2500 },
  { emoji: '🎨', title: 'Coloured markers', price: 3000 },
  { emoji: '🧩', title: 'New puzzle', price: 3000 },
  { emoji: '🎮', title: 'Arcade trip (£10)', price: 3000 },
  { emoji: '🎟️', title: 'Cinema trip', price: 3000 },
  { emoji: '🍕', title: 'Pizza night (you pick)', price: 3500 },
  { emoji: '🍽️', title: 'Buffet trip', price: 3500 },
  { emoji: '🎲', title: 'New board game', price: 6000 },
  { emoji: '🤸', title: 'Trampoline park', price: 6000 },
  { emoji: '👟', title: 'Heelys', price: 13000 },
  { emoji: '🎢', title: 'Theme park day', price: 15000 },
];

const newId = () => `r${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;

/** The parent's side of real-world rewards: set them up, and mark claims as given. */
export function RewardsPanel({ name, gems, claims, control }: { name: string; gems: number; claims: RewardClaim[]; control: RewardsControl }) {
  const [emoji, setEmoji] = useState(REWARD_EMOJI[0]);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('400');
  const given = new Set(control.given);
  const isGiven = (c: RewardClaim) => Boolean(c.givenAt) || given.has(c.id);
  const sorted = [...claims].reverse().sort((a, b) => Number(isGiven(a)) - Number(isGiven(b)));
  const priceNum = Math.round(Number(price));
  const canAdd = title.trim().length > 0 && priceNum >= 10 && priceNum <= 100000;

  function add(r: Omit<FamilyReward, 'id'>) {
    control.onSave([...control.items, { ...r, id: newId() }]);
  }

  return (
    <section className="panel rewards-panel">
      <h2>Real rewards</h2>
      <p className="muted small">
        Rewards {name} can claim with gems in her shop, so her gems have something real to save up for.
      </p>
      {control.note && <p className={`small ${control.noteIsError ? 'form-message' : 'muted'}`}>{control.note}</p>}

      {sorted.length > 0 && (
        <>
          <h3>Claimed</h3>
          <ul className="claim-list">
            {sorted.slice(0, 10).map((c) => (
              <li key={c.id}>
                <Emoji e={c.emoji} size={22} /> {c.title}
                <span className="small muted"> · {new Date(c.at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}</span>
                {isGiven(c)
                  ? <span className="claim-status given">Given ✓</span>
                  : <button className="btn primary small-btn" onClick={() => control.onGiven(c.id)}>Mark as given</button>}
              </li>
            ))}
          </ul>
        </>
      )}

      <h3>In her shop</h3>
      {control.items.length === 0 && <p className="muted small">None yet. Add one below, or tap an idea.</p>}
      <ul className="reward-list">
        {control.items.map((r) => (
          <li key={r.id}>
            <Emoji e={r.emoji} size={24} /> <span className="reward-title">{r.title}</span>
            <span className="reward-price">💎 {r.price}</span>
            <button className="btn link small" aria-label={`Remove ${r.title}`} onClick={() => control.onSave(control.items.filter((x) => x.id !== r.id))}>Remove</button>
          </li>
        ))}
      </ul>

      <div className="idea-row">
        {IDEAS.filter((i) => !control.items.some((r) => r.title === i.title)).map((i) => (
          <button key={i.title} className="chip" onClick={() => add(i)}><Emoji e={i.emoji} size={20} /> {i.title} · {i.price}</button>
        ))}
      </div>

      <div className="reward-form">
        <div className="emoji-pick" role="radiogroup" aria-label="Picture">
          {REWARD_EMOJI.map((e) => (
            <button key={e} role="radio" aria-checked={e === emoji} className={`emoji-choice ${e === emoji ? 'selected' : ''}`} onClick={() => setEmoji(e)}>
              <Emoji e={e} size={26} />
            </button>
          ))}
        </div>
        <input className="text-input" placeholder="Reward, e.g. Choose Sunday lunch" value={title} maxLength={40} onChange={(e) => setTitle(e.target.value)} aria-label="Reward" />
        <label className="price-field">💎 <input className="text-input" inputMode="numeric" value={price} onChange={(e) => setPrice(e.target.value.replace(/\D/g, ''))} aria-label="Price in gems" /></label>
        <button className="btn primary" disabled={!canAdd} onClick={() => { add({ emoji, title: title.trim(), price: priceNum }); setTitle(''); }}>Add reward</button>
      </div>
      <p className="small muted">Price rewards so they take a few days of study to earn. She has 💎 {gems} right now.</p>
    </section>
  );
}
