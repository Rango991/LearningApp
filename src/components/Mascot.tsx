// Mito the mitochondrion: "the powerhouse of the cell" and her study buddy.

export type Mood = 'happy' | 'cheer' | 'sad' | 'think';

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
          <path d="M22 62 L8 38" stroke="#e8743b" strokeWidth="7" strokeLinecap="round" />
          <path d="M98 62 L112 38" stroke="#e8743b" strokeWidth="7" strokeLinecap="round" />
        </>
      ) : (
        <>
          <path d="M20 72 L10 84" stroke="#e8743b" strokeWidth="7" strokeLinecap="round" />
          <path d="M100 72 L110 84" stroke="#e8743b" strokeWidth="7" strokeLinecap="round" />
        </>
      )}
      {/* feet */}
      <ellipse cx="44" cy="106" rx="9" ry="5" fill="#e8743b" />
      <ellipse cx="76" cy="106" rx="9" ry="5" fill="#e8743b" />
      {/* body */}
      <ellipse cx="60" cy="68" rx="44" ry="36" fill="#ff9f6b" stroke="#e8743b" strokeWidth="4" />
      <ellipse cx="60" cy="72" rx="34" ry="26" fill="#ffb98f" />
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
    default:
      return null;
  }
}
