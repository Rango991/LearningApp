// Mito the mitochondrion: "the powerhouse of the cell" and her study buddy.

export type Mood = 'happy' | 'cheer' | 'sad' | 'think';

// Body colours come from CSS variables so a shop skin recolours Mito everywhere.
const EDGE = { stroke: 'var(--mito-edge, #e8743b)' };
const EDGE_FILL = { fill: 'var(--mito-edge, #e8743b)' };

interface Props {
  mood?: Mood;
  accessory?: string | null;
  size?: number;
  bounce?: boolean;
}

export function Mascot({ mood = 'happy', accessory = null, size = 96, bounce = false }: Props) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={`mascot ${bounce ? 'mascot-bounce' : ''} ${mood === 'cheer' ? 'mascot-cheer' : ''}`}
      role="img"
      aria-label="Mito the mitochondrion"
    >
      {/* arms */}
      {mood === 'cheer' ? (
        <>
          <path d="M22 62 L8 38" style={EDGE} strokeWidth="7" strokeLinecap="round" />
          <path d="M98 62 L112 38" style={EDGE} strokeWidth="7" strokeLinecap="round" />
        </>
      ) : (
        <>
          <path d="M20 72 L10 84" style={EDGE} strokeWidth="7" strokeLinecap="round" />
          <path d="M100 72 L110 84" style={EDGE} strokeWidth="7" strokeLinecap="round" />
        </>
      )}
      {/* feet */}
      <ellipse cx="44" cy="106" rx="9" ry="5" style={EDGE_FILL} />
      <ellipse cx="76" cy="106" rx="9" ry="5" style={EDGE_FILL} />
      {/* body */}
      <ellipse cx="60" cy="68" rx="44" ry="36" style={{ fill: 'var(--mito-body, #ff9f6b)', stroke: 'var(--mito-edge, #e8743b)' }} strokeWidth="4" />
      <ellipse cx="60" cy="72" rx="34" ry="26" style={{ fill: 'var(--mito-belly, #ffb98f)' }} />
      {/* cheeks */}
      <circle cx="34" cy="72" r="6" fill="#ff7aa2" opacity="0.5" />
      <circle cx="86" cy="72" r="6" fill="#ff7aa2" opacity="0.5" />
      {/* eyes */}
      {mood === 'cheer' ? (
        <>
          <path d="M40 60 q7 -9 14 0" fill="none" stroke="#3b2a4a" strokeWidth="4" strokeLinecap="round" />
          <path d="M66 60 q7 -9 14 0" fill="none" stroke="#3b2a4a" strokeWidth="4" strokeLinecap="round" />
        </>
      ) : (
        <>
          <circle cx="47" cy="58" r="9" fill="#fff" />
          <circle cx="73" cy="58" r="9" fill="#fff" />
          <circle cx={mood === 'think' ? 50 : 48} cy={mood === 'think' ? 55 : 59} r="5" fill="#3b2a4a" />
          <circle cx={mood === 'think' ? 76 : 74} cy={mood === 'think' ? 55 : 59} r="5" fill="#3b2a4a" />
          <circle cx={mood === 'think' ? 51.5 : 49.5} cy={mood === 'think' ? 53 : 57} r="1.6" fill="#fff" />
          <circle cx={mood === 'think' ? 77.5 : 75.5} cy={mood === 'think' ? 53 : 57} r="1.6" fill="#fff" />
        </>
      )}
      {mood === 'sad' && (
        <>
          <path d="M38 47 l12 4" stroke="#3b2a4a" strokeWidth="3" strokeLinecap="round" />
          <path d="M82 47 l-12 4" stroke="#3b2a4a" strokeWidth="3" strokeLinecap="round" />
        </>
      )}
      {/* mouth */}
      {mood === 'sad' && <path d="M52 80 q8 -6 16 0" fill="none" stroke="#3b2a4a" strokeWidth="3.5" strokeLinecap="round" />}
      {mood === 'think' && <path d="M54 78 h12" stroke="#3b2a4a" strokeWidth="3.5" strokeLinecap="round" />}
      {mood === 'happy' && <path d="M50 74 q10 10 20 0" fill="none" stroke="#3b2a4a" strokeWidth="3.5" strokeLinecap="round" />}
      {mood === 'cheer' && <path d="M48 72 q12 18 24 0 z" fill="#3b2a4a" />}
      {accessory && <Accessory id={accessory} />}
    </svg>
  );
}

function Accessory({ id }: { id: string }) {
  switch (id) {
    case 'party-hat':
      return (
        <g>
          <path d="M60 4 L44 34 L76 34 Z" fill="#7c4dff" />
          <path d="M52 19 L68 19 M48 27 L72 27" stroke="#ffc800" strokeWidth="3" />
          <circle cx="60" cy="5" r="5" fill="#ff4b8b" />
        </g>
      );
    case 'shades':
      return (
        <g>
          <rect x="34" y="50" width="24" height="16" rx="6" fill="#222" />
          <rect x="62" y="50" width="24" height="16" rx="6" fill="#222" />
          <path d="M58 56 h4" stroke="#222" strokeWidth="3" />
          <path d="M38 54 l6 0" stroke="#fff" strokeWidth="2" opacity="0.6" />
          <path d="M66 54 l6 0" stroke="#fff" strokeWidth="2" opacity="0.6" />
        </g>
      );
    case 'bow':
      return (
        <g transform="translate(80 30) rotate(20)">
          <path d="M0 0 L-16 -10 L-16 10 Z" fill="#ff4b8b" />
          <path d="M0 0 L16 -10 L16 10 Z" fill="#ff4b8b" />
          <circle r="5" fill="#ff7aa2" />
        </g>
      );
    case 'headphones':
      return (
        <g>
          <path d="M22 60 q0 -48 38 -48 q38 0 38 48" fill="none" stroke="#1cb0f6" strokeWidth="6" />
          <rect x="12" y="54" width="14" height="24" rx="6" fill="#1cb0f6" />
          <rect x="94" y="54" width="14" height="24" rx="6" fill="#1cb0f6" />
        </g>
      );
    case 'wizard':
      return (
        <g>
          <path d="M66 0 L40 36 L84 36 Z" fill="#5b2bd6" />
          <ellipse cx="62" cy="36" rx="30" ry="6" fill="#4a20b8" />
          <path d="M58 18 l2 4 4 0 -3 3 1 4 -4 -2 -4 2 1 -4 -3 -3 4 0z" fill="#ffc800" />
        </g>
      );
    case 'crown':
      return (
        <g>
          <path d="M40 34 L40 16 L50 26 L60 10 L70 26 L80 16 L80 34 Z" fill="#ffc800" stroke="#e0a800" strokeWidth="2" strokeLinejoin="round" />
          <circle cx="60" cy="26" r="3" fill="#ff4b8b" />
          <circle cx="48" cy="29" r="2.5" fill="#1cb0f6" />
          <circle cx="72" cy="29" r="2.5" fill="#22b07d" />
        </g>
      );
    case 'goggles':
      return (
        <g>
          <path d="M16 57 h88" stroke="#5b6b7a" strokeWidth="4" />
          <circle cx="47" cy="58" r="12" fill="#bfe9ff" fillOpacity="0.55" stroke="#2f8fd8" strokeWidth="4" />
          <circle cx="73" cy="58" r="12" fill="#bfe9ff" fillOpacity="0.55" stroke="#2f8fd8" strokeWidth="4" />
        </g>
      );
    case 'flower-crown':
      return (
        <g>
          <path d="M30 40 Q60 20 90 40" fill="none" stroke="#3fa53a" strokeWidth="4" />
          {[[34, 38, '#ff7aa2'], [47, 31, '#ffc800'], [60, 28, '#b38cff'], [73, 31, '#ff7aa2'], [86, 38, '#ffc800']].map(([x, y, c]) => (
            <g key={`${x}`}>
              <circle cx={x as number} cy={y as number} r="6" fill={c as string} />
              <circle cx={x as number} cy={y as number} r="2.2" fill="#fff6cc" />
            </g>
          ))}
        </g>
      );
    case 'pirate':
      return (
        <g>
          <path d="M26 38 Q60 -2 94 38 Q60 28 26 38 Z" fill="#2b2140" />
          <circle cx="60" cy="22" r="5" fill="#fff" />
          <path d="M54 30 l12 -4 M54 26 l12 4" stroke="#fff" strokeWidth="2" />
        </g>
      );
    case 'grad-cap':
      return (
        <g>
          <path d="M42 24 v10 q18 8 36 0 v-10 z" fill="#3b2a4a" />
          <polygon points="60,8 100,22 60,34 20,22" fill="#2b2140" />
          <path d="M60 21 L92 26 L92 42" fill="none" stroke="#ffc800" strokeWidth="2.5" />
          <circle cx="92" cy="43" r="3" fill="#ffc800" />
        </g>
      );
    case 'astronaut':
      return (
        <g>
          <circle cx="60" cy="64" r="54" fill="#dff3ff" fillOpacity="0.3" stroke="#cfd8e3" strokeWidth="5" />
          <path d="M30 34 q10 -14 26 -18" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
          <rect x="54" y="2" width="12" height="8" rx="3" fill="#cfd8e3" />
        </g>
      );
    case 'halo':
      return <ellipse cx="60" cy="16" rx="24" ry="7" fill="none" stroke="#ffc800" strokeWidth="5" />;
    default:
      return null;
  }
}
