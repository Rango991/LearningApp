import { useState } from 'react';

/** File name for an emoji's Fluent 3D image (see scripts/copy-emoji.mjs). */
export function emojiFile(e: string): string {
  return [...e]
    .map((c) => c.codePointAt(0)!.toString(16).padStart(4, '0'))
    .filter((p) => p !== 'fe0f')
    .join('-');
}

/** A Fluent 3D emoji image, falling back to the device's emoji if there isn't one. */
export function Emoji({ e, size = 24, className = '', label }: { e: string; size?: number; className?: string; label?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <span className={`emoji-fallback ${className}`} style={{ fontSize: size * 0.85, lineHeight: `${size}px` }} role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true}>{e}</span>;
  }
  return (
    <img
      className={`emoji ${className}`}
      src={`/emoji/${emojiFile(e)}.webp`}
      width={size}
      height={size}
      alt={label ?? ''}
      aria-hidden={label ? undefined : true}
      draggable={false}
      onError={() => setFailed(true)}
    />
  );
}
