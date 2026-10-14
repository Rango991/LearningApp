// Marking for typed answers. Small spelling slips are accepted so she isn't
// punished for a typo on a tablet keyboard, but we tell her the right spelling.

export type GapResult = 'correct' | 'close' | 'wrong';

export function normalise(s: string): string {
  return s
    .toLowerCase()
    .trim()
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9 ]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function levenshtein(a: string, b: string): number {
  const dp = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let prev = dp[0];
    dp[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const tmp = dp[j];
      dp[j] = Math.min(dp[j] + 1, dp[j - 1] + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = tmp;
    }
  }
  return dp[b.length];
}

/**
 * Reads a typed number: "-3", "0.75", ".75", "3/4", "1 1/2", "£12.50", "1,200", "40%", "5cm".
 * Returns null if it isn't a number.
 */
export function parseNumber(s: string): number | null {
  const t = s.trim().toLowerCase().replace(/[£$€,\s]/g, '').replace(/−/g, '-').replace(/(cm|mm|km|kg|m|g|s|n|j|w|v|a|°|%|p)+$/, '');
  if (/^-?\d*\.?\d+$/.test(t)) return parseFloat(t);
  const frac = /^(-?)(?:(\d+)\s+)?(\d+)\s*\/\s*(\d+)$/.exec(s.trim().replace(/−/g, '-'));
  if (frac) {
    const [, sign, whole, num, den] = frac;
    if (Number(den) === 0) return null;
    const v = (whole ? Number(whole) : 0) + Number(num) / Number(den);
    return sign ? -v : v;
  }
  return null;
}

const isNumericAnswer = (a: string) => /^-?[\d.,\/ ]+%?$/.test(a.trim()) && parseNumber(a) !== null;

export function markGap(input: string, accept: string[]): GapResult {
  // Number answers are compared by value, so 0.5, .5 and 1/2 all count.
  if (accept.length && accept.every(isNumericAnswer)) {
    const given = parseNumber(input);
    if (given === null) return 'wrong';
    return accept.some((a) => Math.abs(parseNumber(a)! - given) < 1e-9) ? 'correct' : 'wrong';
  }
  const given = normalise(input);
  if (!given) return 'wrong';
  let close = false;
  for (const a of accept) {
    const target = normalise(a);
    if (given === target) return 'correct';
    // Numbers must be exact; words of 5+ letters allow one slip, 9+ allow two.
    if (/^\d+$/.test(target)) continue;
    const allowed = target.length >= 9 ? 2 : target.length >= 5 ? 1 : 0;
    if (allowed > 0 && levenshtein(given, target) <= allowed) close = true;
  }
  return close ? 'close' : 'wrong';
}
