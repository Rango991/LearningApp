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

export function markGap(input: string, accept: string[]): GapResult {
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
