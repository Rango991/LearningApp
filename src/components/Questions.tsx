import { useEffect, useMemo, useRef, useState } from 'react';
import { Emoji } from './Emoji';
import { markGap } from '../game/answers';
import { shuffle } from '../game/engine';
import type { GapQuestion, MatchQuestion, McqQuestion, OrderQuestion, Question, TrueFalseQuestion } from '../content/types';
import { sfx } from '../sound';

export interface CheckResult {
  correct: boolean;
  given: string;
  /** Right answer but spelt slightly wrong. */
  close?: boolean;
}

/** Each question tells the session screen how to check it once it's answerable. */
export type CheckFn = (() => CheckResult) | null;

interface Props<Q> {
  q: Q;
  locked: boolean;
  onReady: (check: CheckFn) => void;
}

export function QuestionView({ q, locked, onReady }: Props<Question>) {
  switch (q.type) {
    case 'mcq': return <Mcq q={q} locked={locked} onReady={onReady} />;
    case 'tf': return <TrueFalse q={q} locked={locked} onReady={onReady} />;
    case 'gap': return <Gap q={q} locked={locked} onReady={onReady} />;
    case 'match': return <Match q={q} locked={locked} onReady={onReady} />;
    case 'order': return <Order q={q} locked={locked} onReady={onReady} />;
  }
}

export function questionInstruction(q: Question): string {
  switch (q.type) {
    case 'mcq': return 'Choose the right answer';
    case 'tf': return 'True or false?';
    case 'gap': return 'Fill in the gap';
    case 'match': return 'Tap the pairs';
    case 'order': return 'Put them in order';
  }
}

function Mcq({ q, locked, onReady }: Props<McqQuestion>) {
  const order = useMemo(() => shuffle(q.options.map((_, i) => i)), [q]);
  const [picked, setPicked] = useState<number | null>(null);
  return (
    <div className="options">
      {order.map((i, n) => (
        <button
          key={i}
          className={`option ${picked === i ? 'selected' : ''} ${locked && i === q.answer ? 'reveal' : ''}`}
          disabled={locked}
          onClick={() => {
            sfx.tap();
            setPicked(i);
            onReady(() => ({ correct: i === q.answer, given: q.options[i] }));
          }}
        >
          <span className="option-key">{n + 1}</span>
          {q.options[i]}
        </button>
      ))}
    </div>
  );
}

function TrueFalse({ q, locked, onReady }: Props<TrueFalseQuestion>) {
  const [picked, setPicked] = useState<boolean | null>(null);
  return (
    <div className="options tf">
      {[true, false].map((v) => (
        <button
          key={String(v)}
          className={`option big ${picked === v ? 'selected' : ''} ${locked && v === q.answer ? 'reveal' : ''}`}
          disabled={locked}
          onClick={() => {
            sfx.tap();
            setPicked(v);
            onReady(() => ({ correct: v === q.answer, given: v ? 'True' : 'False' }));
          }}
        >
          <Emoji e={v ? '👍' : '👎'} size={48} className="tf-emoji" />
          {v ? 'True' : 'False'}
        </button>
      ))}
    </div>
  );
}

function Gap({ q, locked, onReady }: Props<GapQuestion>) {
  const [value, setValue] = useState('');
  const input = useRef<HTMLInputElement>(null);
  const [before, after] = q.prompt.split('___');

  useEffect(() => {
    input.current?.focus({ preventScroll: true });
  }, []);

  return (
    <div className="gap">
      <p className="gap-sentence">
        {before}
        <input
          ref={input}
          className="gap-input"
          value={value}
          disabled={locked}
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          enterKeyHint="done"
          aria-label="Your answer"
          size={Math.max(6, value.length + 1)}
          onChange={(e) => {
            const v = e.target.value;
            setValue(v);
            onReady(v.trim() ? () => {
              const r = markGap(v, q.accept);
              return { correct: r !== 'wrong', close: r === 'close', given: v.trim() };
            } : null);
          }}
        />
        {after}
      </p>
      {q.hint && <p className="hint">💡 {q.hint}</p>}
    </div>
  );
}

function Match({ q, locked, onReady }: Props<MatchQuestion>) {
  const left = useMemo(() => shuffle(q.pairs.map((p) => p[0])), [q]);
  const right = useMemo(() => shuffle(q.pairs.map((p) => p[1])), [q]);
  const answer = useMemo(() => new Map(q.pairs), [q]);
  const [selLeft, setSelLeft] = useState<string | null>(null);
  const [selRight, setSelRight] = useState<string | null>(null);
  const [matched, setMatched] = useState<string[]>([]);
  const [flash, setFlash] = useState<[string, string] | null>(null);
  const mistakes = useRef<string[]>([]);

  function attempt(l: string | null, r: string | null) {
    if (!l || !r) return;
    if (answer.get(l) === r) {
      sfx.correct();
      const next = [...matched, l];
      setMatched(next);
      if (next.length === q.pairs.length) {
        onReady(() => ({
          correct: mistakes.current.length === 0,
          given: mistakes.current.length ? `Mixed up: ${mistakes.current.join('; ')}` : 'All matched',
        }));
      }
    } else {
      sfx.wrong();
      mistakes.current.push(`${l} → ${r}`);
      setFlash([l, r]);
      window.setTimeout(() => setFlash(null), 500);
    }
    setSelLeft(null);
    setSelRight(null);
  }

  const matchedRight = new Set(matched.map((l) => answer.get(l)));
  return (
    <div className="match">
      <div className="match-col">
        {left.map((l) => (
          <button
            key={l}
            className={`tile ${selLeft === l ? 'selected' : ''} ${matched.includes(l) ? 'matched' : ''} ${flash?.[0] === l ? 'shake bad' : ''}`}
            disabled={locked || matched.includes(l)}
            onClick={() => { sfx.tap(); setSelLeft(l); attempt(l, selRight); }}
          >
            {l}
          </button>
        ))}
      </div>
      <div className="match-col">
        {right.map((r) => (
          <button
            key={r}
            className={`tile ${selRight === r ? 'selected' : ''} ${matchedRight.has(r) ? 'matched' : ''} ${flash?.[1] === r ? 'shake bad' : ''}`}
            disabled={locked || matchedRight.has(r)}
            onClick={() => { sfx.tap(); setSelRight(r); attempt(selLeft, r); }}
          >
            {r}
          </button>
        ))}
      </div>
    </div>
  );
}

function Order({ q, locked, onReady }: Props<OrderQuestion>) {
  const pool = useMemo(() => {
    // Make sure the shuffle isn't already the right answer.
    let s = shuffle(q.items);
    for (let i = 0; i < 5 && s.join() === q.items.join(); i++) s = shuffle(q.items);
    return s;
  }, [q]);
  const [chosen, setChosen] = useState<string[]>([]);

  function update(next: string[]) {
    setChosen(next);
    onReady(next.length === q.items.length ? () => ({
      correct: next.join('|') === q.items.join('|'),
      given: next.join(' → '),
    }) : null);
  }

  return (
    <div className="order">
      <div className="order-slots">
        {chosen.length === 0 && <span className="order-placeholder">Tap the cards below in order</span>}
        {chosen.map((item, i) => (
          <button key={item} className="tile chosen" disabled={locked} onClick={() => { sfx.tap(); update(chosen.filter((c) => c !== item)); }}>
            <span className="order-num">{i + 1}</span> {item}
          </button>
        ))}
      </div>
      <div className="order-pool">
        {pool.map((item) => (
          <button
            key={item}
            className={`tile ${chosen.includes(item) ? 'used' : ''}`}
            disabled={locked || chosen.includes(item)}
            onClick={() => { sfx.tap(); update([...chosen, item]); }}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
