import { Fragment, type ReactNode } from 'react';

// Makes a learn card's paragraph easier to scan:
//  - one sentence per line
//  - a "Label:" at the start of a sentence is bold (e.g. "Nucleus: controls the cell")
//  - the card's keywords are highlighted

const SENTENCE_END = /(?<=[.!?])\s+(?=[A-Z0-9“"(£−-])/;

function escapeRe(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** Highlights the first use of each keyword, as a whole word (plurals like "nouns" included).
 *  `used` is shared across the card's sentences. */
function highlight(text: string, keywords: string[], used: Set<string>): ReactNode[] {
  if (!keywords.length) return [text];
  const sorted = [...keywords].sort((a, b) => b.length - a.length);
  const re = new RegExp(`((?<!\\p{L})(?:${sorted.map(escapeRe).join('|')})\\p{L}*)`, 'giu');
  return text.split(re).map((part, i) => {
    const key = i % 2 === 1 ? sorted.find((k) => part.toLowerCase().startsWith(k.toLowerCase()))?.toLowerCase() : undefined;
    if (key && !used.has(key)) {
      used.add(key);
      return <mark key={i} className="kw">{part}</mark>;
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

/** A bold "Label:" already names a keyword, so it counts as its first use. */
function markLabelUsed(label: string, keywords: string[], used: Set<string>) {
  const l = label.toLowerCase();
  for (const k of keywords) if (l === k.toLowerCase() || l === `${k.toLowerCase()}s`) used.add(k.toLowerCase());
}

export function RichText({ text, keywords = [] }: { text: string; keywords?: string[] }) {
  const sentences = text.split(SENTENCE_END);
  const used = new Set<string>();
  return (
    <div className="rich">
      {sentences.map((s, i) => {
        const m = /^([^:]{2,40}):\s(.+)$/.exec(s);
        if (m) markLabelUsed(m[1], keywords, used);
        return (
          <p key={i}>
            {m ? <><b>{m[1]}:</b> {highlight(m[2], keywords, used)}</> : highlight(s, keywords, used)}
          </p>
        );
      })}
    </div>
  );
}
