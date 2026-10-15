import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { subjects } from '../content';
import { Emoji } from '../components/Emoji';
import { Mascot } from '../components/Mascot';
import { touch } from '../game/engine';
import { ACCENTS, ANIMALS, FOODS, HOBBIES, MONTHS, accentFor, react, subjectName } from '../game/mito';
import type { About, Pick, Progress } from '../game/types';
import { sfx } from '../sound';

// "All about me": Mito asks a few questions in a chat, and she answers by tapping
// (or typing her own). Every question can be skipped.

type StepId = 'intro' | 'animal' | 'colour' | 'food' | 'hobby' | 'birthday' | 'hardest' | 'goal' | 'outro';
const ORDER: StepId[] = ['intro', 'animal', 'colour', 'food', 'hobby', 'birthday', 'hardest', 'goal', 'outro'];

interface Message {
  from: 'mito' | 'me';
  text: string;
}

function question(step: StepId, name: string, editing: boolean): string {
  switch (step) {
    case 'intro':
      return editing
        ? `Want to update what I know about you, ${name}?`
        : `Hey ${name}! I want to get to know you, so I can be the best study buddy ever. Can I ask you a few quick questions?`;
    case 'animal': return 'What’s your favourite animal?';
    case 'colour': return 'Pick your favourite colour. I’ll paint the app with it 🎨';
    case 'food': return 'What’s your favourite food?';
    case 'hobby': return 'What do you love doing when you’re not studying?';
    case 'birthday': return 'When’s your birthday? Just the day and month, so I can celebrate 🎂';
    case 'hardest': return 'Which subject do you find the trickiest?';
    case 'goal': return 'Last one! What’s a goal you’re working towards?';
    case 'outro': return `Thanks, ${name}! I’ll remember all of this. You can change it any time in the Me tab.`;
  }
}

/** Free-text answers stay short and tidy. */
const clean = (s: string) => s.replace(/\s+/g, ' ').trim().slice(0, 40);

export function AboutChat({ progress, setProgress, onClose, editing = false }: { progress: Progress; setProgress: (p: Progress) => void; onClose: () => void; editing?: boolean }) {
  const name = progress.profile.name;
  const [draft, setDraft] = useState<About>(progress.profile.about ?? {});
  const [step, setStep] = useState<StepId>('intro');
  const [messages, setMessages] = useState<Message[]>([{ from: 'mito', text: question('intro', name, editing) }]);
  const [typing, setTyping] = useState(false);
  const [other, setOther] = useState<string | null>(null);
  const [day, setDay] = useState(draft.birthday ? Number(draft.birthday.slice(3)) : 1);
  const [month, setMonth] = useState(draft.birthday ? Number(draft.birthday.slice(0, 2)) : 1);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' }); }, [messages, typing]);

  function save(about: About) {
    setProgress(touch({ ...progress, profile: { ...progress.profile, about } }));
  }

  /** Records her answer, then Mito reacts and asks the next question. */
  function answer(text: string, patch: Partial<About>, reaction: string | null) {
    sfx.tap();
    const nextDraft = { ...draft, ...patch };
    setDraft(nextDraft);
    setOther(null);
    const nextStep = ORDER[ORDER.indexOf(step) + 1];
    setMessages((m) => [...m, { from: 'me', text }]);
    setTyping(true);
    setStep(nextStep);
    window.setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, ...(reaction ? [{ from: 'mito' as const, text: reaction }] : []), { from: 'mito' as const, text: question(nextStep, name, editing) }]);
      if (nextStep === 'outro') sfx.complete();
    }, 650);
  }

  function later() {
    if (!editing) save({ ...draft, skippedAt: new Date().toISOString() });
    onClose();
  }

  function finish() {
    const done: About = { ...draft, doneAt: new Date().toISOString() };
    delete done.skippedAt;
    save(done);
    sfx.fanfare();
    onClose();
  }

  const accent = accentFor(draft);
  const style = { '--purple': accent.main, '--purple-dark': accent.dark, '--purple-soft': accent.soft } as CSSProperties;
  const skip = <button className="btn link small" onClick={() => answer('Skip', {}, 'No problem!')}>Skip this one</button>;

  const picker = (items: Pick[], key: 'animal' | 'food' | 'hobby', fallback: string) => (
    <>
      <div className="chip-grid">
        {items.map((x) => (
          <button key={x.label} className={`chip ${draft[key]?.label === x.label ? 'selected' : ''}`} onClick={() => answer(`${x.e} ${x.label}`, { [key]: x }, react[key](x))}>
            <Emoji e={x.e} size={26} /> {x.label}
          </button>
        ))}
        <button className="chip" onClick={() => setOther('')}>✏️ Something else</button>
      </div>
      {other !== null && (
        <form className="chat-type" onSubmit={(e) => { e.preventDefault(); const t = clean(other); if (t) answer(t, { [key]: { e: fallback, label: t } }, react[key]({ e: fallback, label: t })); }}>
          <input autoFocus maxLength={40} placeholder="Type it here" value={other} onChange={(e) => setOther(e.target.value)} />
          <button className="btn primary" disabled={!clean(other)}>Send</button>
        </form>
      )}
      {skip}
    </>
  );

  const goals = [
    'Ace my next test',
    'Get a grade 9 at GCSE',
    'Beat my longest streak',
    ...(subjectName(draft.hardest) ? [`Feel confident in ${subjectName(draft.hardest)}`] : []),
  ];

  return (
    <div className="about-chat" style={style}>
      <header className="about-head">
        <Mascot mood={step === 'outro' ? 'cheer' : 'happy'} accessory={progress.equipped} size={56} />
        <div>
          <h2>Mito</h2>
          <p className="muted small">{typing ? 'typing…' : 'your study buddy'}</p>
        </div>
      </header>

      <div className="chat-log" aria-live="polite">
        {messages.map((m, i) => (
          <p key={i} className={`bubble ${m.from}`}>{m.text}</p>
        ))}
        {typing && <p className="bubble mito typing"><span /><span /><span /></p>}
        <div ref={endRef} />
      </div>

      {!typing && (
        <footer className="chat-answers">
          {step === 'intro' && (
            <div className="chip-row">
              <button className="btn primary" onClick={() => answer('Sure! 😄', {}, null)}>Sure! 😄</button>
              <button className="btn ghost" onClick={later}>Maybe later</button>
            </div>
          )}
          {step === 'animal' && picker(ANIMALS, 'animal', '🐾')}
          {step === 'food' && picker(FOODS, 'food', '🍽️')}
          {step === 'hobby' && picker(HOBBIES, 'hobby', '⭐')}
          {step === 'colour' && (
            <>
              <div className="swatches">
                {ACCENTS.map((c) => (
                  <button key={c.id} className={`swatch ${draft.colour === c.id ? 'selected' : ''}`} style={{ background: c.main }} aria-label={c.name} onClick={() => answer(`My favourite is ${c.name}`, { colour: c.id }, react.colour(c.name))} />
                ))}
              </div>
              {skip}
            </>
          )}
          {step === 'birthday' && (
            <>
              <div className="birthday-row">
                <select value={day} onChange={(e) => setDay(Number(e.target.value))} aria-label="Day">
                  {Array.from({ length: 31 }, (_, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)}
                </select>
                <select value={month} onChange={(e) => setMonth(Number(e.target.value))} aria-label="Month">
                  {MONTHS.map((m, i) => <option key={m} value={i + 1}>{m}</option>)}
                </select>
                <button className="btn primary" onClick={() => {
                  const mmdd = `${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                  answer(`${day} ${MONTHS[month - 1]}`, { birthday: mmdd }, react.birthday(mmdd));
                }}>Send</button>
              </div>
              <button className="btn link small" onClick={() => answer('I’d rather not say', { birthday: undefined }, 'That’s totally fine!')}>I’d rather not say</button>
            </>
          )}
          {step === 'hardest' && (
            <>
              <div className="chip-grid">
                {subjects.map((s) => (
                  <button key={s.id} className={`chip ${draft.hardest === s.id ? 'selected' : ''}`} onClick={() => answer(`${s.emoji} ${s.title}`, { hardest: s.id }, react.hardest(s.title))}>
                    <Emoji e={s.emoji} size={26} /> {s.title}
                  </button>
                ))}
                <button className="chip" onClick={() => answer('None of them 😎', { hardest: 'none' }, react.hardest(null))}>😎 None of them</button>
              </div>
              {skip}
            </>
          )}
          {step === 'goal' && (
            <>
              <div className="chip-grid">
                {goals.map((g) => (
                  <button key={g} className={`chip ${draft.goal === g ? 'selected' : ''}`} onClick={() => answer(g, { goal: g }, react.goal(g))}>{g}</button>
                ))}
                <button className="chip" onClick={() => setOther('')}>✏️ Something else</button>
              </div>
              {other !== null && (
                <form className="chat-type" onSubmit={(e) => { e.preventDefault(); const t = clean(other); if (t) answer(t, { goal: t }, react.goal(t)); }}>
                  <input autoFocus maxLength={40} placeholder="My goal is…" value={other} onChange={(e) => setOther(e.target.value)} />
                  <button className="btn primary" disabled={!clean(other)}>Send</button>
                </form>
              )}
              {skip}
            </>
          )}
          {step === 'outro' && <button className="btn primary wide" onClick={finish}>Let’s go!</button>}
        </footer>
      )}
    </div>
  );
}
