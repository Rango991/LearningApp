import { useId, type ReactNode } from 'react';
import { emojiFile } from '../components/Emoji';

// Building blocks for lesson diagrams. Every diagram is an inline SVG drawn
// on a fixed grid (usually 320 × 200) so it scales crisply to any screen.

export const C = {
  ink: '#2b2140',
  muted: '#6f6787',
  line: '#d9d3ea',
  soft: '#f3f0fb',
  purple: '#7c4dff',
  purpleSoft: '#e9e1ff',
  green: '#22b07d',
  greenSoft: '#d9f5e9',
  red: '#ef4b4b',
  redSoft: '#ffe1e1',
  gold: '#f5b800',
  goldSoft: '#fff3c4',
  blue: '#1c9df6',
  blueSoft: '#dcf0ff',
  orange: '#ff8a3d',
  orangeSoft: '#ffe7d6',
  pink: '#ff5fa2',
  brown: '#a0703c',
};

export function Svg({ w = 320, h = 200, label, children }: { w?: number; h?: number; label: string; children: ReactNode }) {
  return (
    <svg className="diagram" viewBox={`0 0 ${w} ${h}`} role="img" aria-label={label} fontFamily="Nunito, system-ui, sans-serif">
      {children}
    </svg>
  );
}

interface TextProps {
  x: number;
  y: number;
  children: ReactNode;
  size?: number;
  weight?: number;
  fill?: string;
  anchor?: 'start' | 'middle' | 'end';
}

export function T({ x, y, children, size = 12, weight = 800, fill = C.ink, anchor = 'middle' }: TextProps) {
  return (
    <text x={x} y={y} fontSize={size} fontWeight={weight} fill={fill} textAnchor={anchor} dominantBaseline="middle">
      {children}
    </text>
  );
}

/** A label with a thin leader line pointing at (px, py). */
export function Label({ x, y, px, py, children, anchor = 'start', fill = C.ink }: { x: number; y: number; px: number; py: number; children: ReactNode; anchor?: 'start' | 'middle' | 'end'; fill?: string }) {
  return (
    <g>
      <line x1={x} y1={y} x2={px} y2={py} stroke={C.muted} strokeWidth={1.2} />
      <circle cx={px} cy={py} r={2.2} fill={C.ink} />
      <T x={x + (anchor === 'start' ? 3 : anchor === 'end' ? -3 : 0)} y={y} anchor={anchor} fill={fill} size={11.5}>{children}</T>
    </g>
  );
}

/** An arrow from (x1, y1) to (x2, y2). */
export function Arrow({ x1, y1, x2, y2, color = C.ink, width = 2.5, dashed = false }: { x1: number; y1: number; x2: number; y2: number; color?: string; width?: number; dashed?: boolean }) {
  const id = useId().replace(/:/g, '');
  return (
    <g>
      <defs>
        <marker id={`a${id}`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth={5} markerHeight={5} orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill={color} />
        </marker>
      </defs>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth={width} strokeLinecap="round" markerEnd={`url(#a${id})`} strokeDasharray={dashed ? '5 4' : undefined} />
    </g>
  );
}

/** A curved arrow through a control point. */
export function CurveArrow({ d, color = C.ink, width = 2.5 }: { d: string; color?: string; width?: number }) {
  const id = useId().replace(/:/g, '');
  return (
    <g>
      <defs>
        <marker id={`c${id}`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth={5} markerHeight={5} orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill={color} />
        </marker>
      </defs>
      <path d={d} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" markerEnd={`url(#c${id})`} />
    </g>
  );
}

/** A rounded box with centred text. */
export function Box({ x, y, w, h, fill = C.soft, stroke = C.line, children, size = 12, color = C.ink, r = 10 }: { x: number; y: number; w: number; h: number; fill?: string; stroke?: string; children?: ReactNode; size?: number; color?: string; r?: number }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={r} fill={fill} stroke={stroke} strokeWidth={2} />
      {children !== undefined && <T x={x + w / 2} y={y + h / 2} size={size} fill={color}>{children}</T>}
    </g>
  );
}

/** A Fluent 3D emoji drawn inside a diagram, centred on (x, y). */
export function E({ e, x, y, size = 32 }: { e: string; x: number; y: number; size?: number }) {
  return <image href={`/emoji/${emojiFile(e)}.webp`} x={x - size / 2} y={y - size / 2} width={size} height={size} />;
}

/** A row of emoji tiles with captions: a quick way to show categories. */
/** Splits text into at most two lines that fit roughly maxChars each. */
export function wrap(text: string, maxChars: number): string[] {
  if (text.length <= maxChars || !text.includes(' ')) return [text];
  const mid = text.length / 2;
  let best = -1;
  for (let i = 0; i < text.length; i++) if (text[i] === ' ' && (best < 0 || Math.abs(i - mid) < Math.abs(best - mid))) best = i;
  return [text.slice(0, best), text.slice(best + 1)];
}

export function Tiles({ items, w = 320, h, label, cols }: { items: { e: string; title: string; sub?: string; colour?: string }[]; w?: number; h?: number; label: string; cols?: number }) {
  const n = items.length;
  const perRow = cols ?? (n <= 4 ? n : Math.ceil(n / 2));
  const rows = Math.ceil(n / perRow);
  h ??= rows === 1 ? 130 : 200;
  const gap = 8;
  const tw = (w - gap * (perRow + 1)) / perRow;
  const th = (h - gap * (rows + 1)) / rows;
  return (
    <Svg w={w} h={h} label={label}>
      {items.map((it, i) => {
        const r = Math.floor(i / perRow);
        const c = i % perRow;
        const x = gap + c * (tw + gap);
        const y = gap + r * (th + gap);
        const emojiSize = Math.min(th * 0.4, tw * 0.5, 44);
        return (
          <g key={i}>
            <rect x={x} y={y} width={tw} height={th} rx={12} fill={it.colour ?? C.soft} stroke={C.line} strokeWidth={1.5} />
            <E e={it.e} x={x + tw / 2} y={y + th * 0.34} size={emojiSize} />
            <T x={x + tw / 2} y={y + th * (it.sub ? 0.66 : 0.76)} size={Math.min(12, tw / 7)}>{it.title}</T>
            {it.sub && (() => {
              const size = Math.min(10, tw / 8);
              const lines = wrap(it.sub, Math.floor((tw - 8) / (size * 0.56)));
              return lines.map((line, li) => (
                <T key={li} x={x + tw / 2} y={y + th * 0.8 + (li - (lines.length - 1) / 2) * (size + 2) + (lines.length > 1 ? 3 : 0)} size={size} weight={700} fill={C.muted}>{line}</T>
              ));
            })()}
          </g>
        );
      })}
    </Svg>
  );
}

/** A formula-style row of boxes joined by symbols, e.g. A + B → C + D. */
export function Equation({ parts, w = 320, h = 90, label, sizes }: { parts: (string | { text: string; fill?: string; e?: string })[]; w?: number; h?: number; label: string; sizes?: number[] }) {
  // Strings that are operators (+, →, ×, =) are drawn bare; others as boxes.
  const isOp = (p: string | { text: string }) => typeof p === 'string' && /^[+→×=÷−]$/.test(p);
  const opW = 22;
  const boxes = parts.filter((p) => !isOp(p)).length;
  const ops = parts.length - boxes;
  const bw = (w - 8 - ops * opW - (boxes - 1) * 0) / boxes;
  let x = 4;
  return (
    <Svg w={w} h={h} label={label}>
      {parts.map((p, i) => {
        if (isOp(p)) {
          const el = <T key={i} x={x + opW / 2} y={h / 2} size={20} fill={C.muted}>{p as string}</T>;
          x += opW;
          return el;
        }
        const part = typeof p === 'string' ? { text: p } : p;
        const bx = x;
        x += bw;
        const has = Boolean(part.e);
        return (
          <g key={i}>
            <rect x={bx + 2} y={8} width={bw - 4} height={h - 16} rx={12} fill={part.fill ?? C.soft} stroke={C.line} strokeWidth={1.5} />
            {has && <E e={part.e!} x={bx + bw / 2} y={h / 2 - 12} size={30} />}
            <T x={bx + bw / 2} y={has ? h / 2 + 18 : h / 2} size={sizes?.[i] ?? 12}>{part.text}</T>
          </g>
        );
      })}
    </Svg>
  );
}
