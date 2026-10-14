// Level n needs 25·n·(n−1) total XP: 0, 50, 150, 300, 500… so early levels
// come quickly and later ones take a bit longer.

export function xpForLevel(level: number): number {
  return 25 * level * (level - 1);
}

export function levelFor(xp: number): { level: number; into: number; needed: number } {
  let level = 1;
  while (xp >= xpForLevel(level + 1)) level++;
  const start = xpForLevel(level);
  return { level, into: xp - start, needed: xpForLevel(level + 1) - start };
}
