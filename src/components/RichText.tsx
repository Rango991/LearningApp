import { Fragment, type ReactNode } from 'react';

// Makes a learn card's paragraph easier to scan:
//  - one sentence per line
//  - a "Label:" at the start of a sentence is bold (e.g. "Nucleus: controls the cell")
//  - the card's keywords are highlighted

const SENTENCE_END = /(?<=[.!?])\s+(?=[A-Z0-9“"(£−-])/;

function escapeRe(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** Highlights the first use of each keyword. `used` is shared across the card's sentences. */
function highlight(text: string, keywords: string[], used: Set<string>): ReactNode[] {
  if (!keywords.length) return [text];
  const re = new RegExp(`(${keywords.map(escapeRe).sort((a, b) => b.length - a.length).join('|')})`, 'gi');
  return text.split(re).map((part, i) => {
    if (i % 2 === 1 && !used.has(part.toLowerCase())) {
      used.add(part.toLowerCase());
      return <mark key={i} className="kw">{part}</mark>;
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

export function RichText({ text, keywords = [] }: { text: string; keywords?: string[] }) {
  const sentences = text.split(SENTENCE_END);
  const used = new Set<string>();
  return (
    <div className="rich">
      {sentences.map((s, i) => {
        const m = /^([^:]{2,40}):\s(.+)$/.exec(s);
        return (
          <p key={i}>
            {m ? <><b>{m[1]}:</b> {highlight(m[2], keywords, used)}</> : highlight(s, keywords, used)}
          </p>
        );
      })}
    </div>
  );
}
