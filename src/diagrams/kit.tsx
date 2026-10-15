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

/** A formula triangle (e.g. d over s × t) with the rearrangements listed beside it. */
export function FormulaTriangle({ top, left, right, label, notes }: { top: string; left: string; right: string; label: string; notes: string[] }) {
  return (
    <Svg h={180} label={label}>
      <path d="M90 14 L162 150 L18 150 Z" fill={C.purpleSoft} stroke={C.purple} strokeWidth={3} strokeLinejoin="round" />
      <line x1={50} y1={92} x2={130} y2={92} stroke={C.purple} strokeWidth={2.5} />
      <line x1={90} y1={92} x2={90} y2={150} stroke={C.purple} strokeWidth={2.5} />
      <T x={90} y={64} size={20}>{top}</T>
      <T x={62} y={124} size={20}>{left}</T>
      <T x={118} y={124} size={20}>{right}</T>
      {notes.map((n, i) => <T key={n} x={186} y={46 + i * 34} size={12.5} anchor="start">{n}</T>)}
      <T x={90} y={170} size={9.5} weight={700} fill={C.muted}>cover the one you want</T>
    </Svg>
  );
}

/** Events spaced evenly along a line, with labels alternating above and below. Not to scale. */
export function Timeline({ events, label, colour = C.purple }: { events: { date: string; text: string; e: string }[]; label: string; colour?: string }) {
  const n = events.length;
  const step = 224 / (n - 1);
  const maxChars = 15;
  return (
    <Svg h={210} label={label}>
      <line x1={14} y1={105} x2={306} y2={105} stroke={C.line} strokeWidth={6} strokeLinecap="round" />
      {events.map((ev, i) => {
        const x = 48 + i * step;
        const up = i % 2 === 0;
        const lines = wrap(ev.text, maxChars);
        return (
          <g key={ev.date + ev.text}>
            <line x1={x} y1={105} x2={x} y2={up ? 88 : 122} stroke={colour} strokeWidth={2} />
            <circle cx={x} cy={105} r={6} fill={colour} />
            <T x={x} y={up ? 78 : 132} size={12} fill={colour}>{ev.date}</T>
            {lines.map((l, li) => (
              <T key={li} x={x} y={up ? 62 - (lines.length - 1 - li) * 12 : 148 + li * 12} size={9.5} weight={700}>{l}</T>
            ))}
            <E e={ev.e} x={x} y={up ? 62 - lines.length * 12 - 8 : 148 + lines.length * 12 + 10} size={24} />
          </g>
        );
      })}
    </Svg>
  );
}

/** Boxes joined by downward arrows, for a sequence or a chain of consequences. */
export function Chain({ steps, label }: { steps: { t: string; fill: string }[]; label: string }) {
  return (
    <Svg h={8 + steps.length * 38} label={label}>
      {steps.map((s, i) => {
        const y = 6 + i * 38;
        return (
          <g key={s.t}>
            <rect x={20} y={y} width={280} height={28} rx={10} fill={s.fill} />
            <T x={160} y={y + 14} size={11.5}>{s.t}</T>
            {i < steps.length - 1 && <Arrow x1={160} y1={y + 29} x2={160} y2={y + 37} width={2} color={C.muted} />}
          </g>
        );
      })}
    </Svg>
  );
}

/** Two side-by-side panels, each with a title and a list of emoji items. */
export function TwoCol({ label, left, right, footer }: { label: string; left: { title: string; sub: string; colour: string; fill: string; items: [string, string][] }; right: { title: string; sub: string; colour: string; fill: string; items: [string, string][] }; footer?: string }) {
  const h = footer ? 200 : 186;
  return (
    <Svg h={h} label={label}>
      {[left, right].map((p, pi) => {
        const x = 8 + pi * 156;
        return (
          <g key={p.title}>
            <rect x={x} y={8} width={148} height={170} rx={14} fill={p.fill} />
            <T x={x + 74} y={28} size={13} fill={p.colour}>{p.title}</T>
            <T x={x + 74} y={46} size={9.5} weight={700} fill={C.muted}>{p.sub}</T>
            {p.items.map(([e, t], i) => (
              <g key={t}>
                <E e={e} x={x + 24} y={76 + i * 36} size={26} />
                <T x={x + 44} y={76 + i * 36} size={10.5} anchor="start">{t}</T>
              </g>
            ))}
          </g>
        );
      })}
      {footer && <T x={160} y={192} size={10.5} weight={700} fill={C.muted}>{footer}</T>}
    </Svg>
  );
}
