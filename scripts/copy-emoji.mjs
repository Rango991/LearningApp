// Copies the Fluent 3D emoji images that the app actually uses into
// public/emoji, named by code point without variation selectors
// (e.g. ⚗️ -> 2697.webp). Runs before dev and build.
import { copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const SRC = 'node_modules/@lobehub/fluent-emoji-3d/assets';
const OUT = 'public/emoji';

function walk(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : /\.(tsx?)$/.test(f) ? [p] : [];
  });
}

const emojiRe = /\p{Extended_Pictographic}(?:️|‍\p{Extended_Pictographic}️?|[\u{1F3FB}-\u{1F3FF}])*/gu;
const cps = (e) => [...e].map((c) => c.codePointAt(0).toString(16).padStart(4, '0'));

mkdirSync(OUT, { recursive: true });
const seen = new Set();
let copied = 0;
const missing = [];
for (const file of walk('src')) {
  for (const e of readFileSync(file, 'utf8').match(emojiRe) ?? []) {
    const points = cps(e);
    const name = points.filter((p) => p !== 'fe0f').join('-');
    if (seen.has(name)) continue;
    seen.add(name);
    const candidates = [points.join('-'), name, `${name}-fe0f`];
    const src = candidates.map((c) => join(SRC, `${c}.webp`)).find(existsSync);
    if (src) { copyFileSync(src, join(OUT, `${name}.webp`)); copied++; } else missing.push(e);
  }
}
console.log(`emoji: copied ${copied}${missing.length ? `, no 3D image for ${missing.join(' ')}` : ''}`);
