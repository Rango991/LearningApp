import { Arrow, C, Svg, T } from './kit';

// Diagrams for the extra Years 8-9 Maths units (content/maths-y89.ts).

function Grid({ x, y, cols, rows, s }: { x: number; y: number; cols: number; rows: number; s: number }) {
  return (
    <g>
      {Array.from({ length: cols + 1 }, (_, i) => <line key={`v${i}`} x1={x + i * s} y1={y} x2={x + i * s} y2={y + rows * s} stroke={C.line} strokeWidth={1} />)}
      {Array.from({ length: rows + 1 }, (_, i) => <line key={`h${i}`} x1={x} y1={y + i * s} x2={x + cols * s} y2={y + i * s} stroke={C.line} strokeWidth={1} />)}
    </g>
  );
}

const pts = (x0: number, y0: number, s: number, cells: [number, number][]) => cells.map(([c, r]) => `${x0 + c * s},${y0 + r * s}`).join(' ');

function ReflectTranslate() {
  const s = 15;
  const ax = 8;
  const bx = 166;
  const y0 = 24;
  return (
    <Svg label="Reflection: a triangle flipped in a mirror line. Translation: a triangle slid 5 right and 3 up by a vector">
      <T x={ax + 75} y={12} size={11.5}>Reflection</T>
      <Grid x={ax} y={y0} cols={10} rows={9} s={s} />
      <line x1={ax + 75} y1={y0 - 4} x2={ax + 75} y2={y0 + 139} stroke={C.purple} strokeWidth={2.5} strokeDasharray="6 4" />
      <polygon points={pts(ax, y0, s, [[1, 7], [4, 7], [1, 2]])} fill={C.blueSoft} stroke={C.blue} strokeWidth={2.5} />
      <polygon points={pts(ax, y0, s, [[9, 7], [6, 7], [9, 2]])} fill={C.orangeSoft} stroke={C.orange} strokeWidth={2.5} />
      <T x={ax + 75} y={176} size={9.5} weight={700} fill={C.muted}>same distance from the</T>
      <T x={ax + 75} y={188} size={9.5} weight={700} fill={C.muted}>mirror line, flipped</T>
      <T x={bx + 75} y={12} size={11.5}>Translation</T>
      <Grid x={bx} y={y0} cols={10} rows={9} s={s} />
      <polygon points={pts(bx, y0, s, [[1, 8], [3, 8], [1, 5]])} fill={C.blueSoft} stroke={C.blue} strokeWidth={2.5} />
      <polygon points={pts(bx, y0, s, [[6, 5], [8, 5], [6, 2]])} fill={C.orangeSoft} stroke={C.orange} strokeWidth={2.5} />
      <Arrow x1={bx + 15} y1={y0 + 120} x2={bx + 88} y2={y0 + 77} color={C.purple} width={2.5} dashed />
      <T x={bx + 75} y={176} size={10} fill={C.purple}>vector (5, 3)</T>
      <T x={bx + 75} y={188} size={9.5} weight={700} fill={C.muted}>5 right, 3 up: just a slide</T>
    </Svg>
  );
}

function Enlargement() {
  const s = 15;
  const x0 = 10;
  const y0 = 22;
  const O: [number, number] = [1, 9];
  const small: [number, number][] = [[3, 8], [5, 8], [3, 6]];
  const big: [number, number][] = small.map(([c, r]) => [O[0] + 2 * (c - O[0]), O[1] + 2 * (r - O[1])]);
  return (
    <Svg label="Enlargement by scale factor 2 from a centre: lines from the centre through each corner; every length doubles and the angles stay the same">
      <Grid x={x0} y={y0} cols={13} rows={10} s={s} />
      {big.map(([c, r], i) => (
        <line key={i} x1={x0 + O[0] * s} y1={y0 + O[1] * s} x2={x0 + c * s} y2={y0 + r * s} stroke={C.muted} strokeWidth={1.2} strokeDasharray="4 3" />
      ))}
      <polygon points={pts(x0, y0, s, big)} fill={C.orangeSoft} stroke={C.orange} strokeWidth={2.5} />
      <polygon points={pts(x0, y0, s, small)} fill={C.blueSoft} stroke={C.blue} strokeWidth={2.5} />
      <circle cx={x0 + O[0] * s} cy={y0 + O[1] * s} r={4} fill={C.ink} />
      <T x={x0 + O[0] * s + 12} y={y0 + O[1] * s + 10} size={10} anchor="start">centre</T>
      <T x={218} y={60} size={12} anchor="start" fill={C.purple}>Scale factor 2</T>
      <T x={218} y={84} size={10} weight={700} anchor="start" fill={C.muted}>every length × 2</T>
      <T x={218} y={102} size={10} weight={700} anchor="start" fill={C.muted}>angles stay the</T>
      <T x={218} y={116} size={10} weight={700} anchor="start" fill={C.muted}>same: similar</T>
      <T x={218} y={134} size={10} weight={700} anchor="start" fill={C.muted}>shapes</T>
    </Svg>
  );
}

function Bearings() {
  const cx = 100;
  const cy = 104;
  const a = (60 * Math.PI) / 180;
  const bx = cx + 76 * Math.sin(a);
  const by = cy - 76 * Math.cos(a);
  return (
    <Svg label="A bearing of 060 degrees: measured clockwise from north, written with three figures">
      <circle cx={cx} cy={cy} r={76} fill="none" stroke={C.line} strokeWidth={1.5} strokeDasharray="4 4" />
      <Arrow x1={cx} y1={cy} x2={cx} y2={cy - 88} color={C.ink} width={2.5} />
      <T x={cx} y={8} size={12}>N</T>
      <path d={`M${cx} ${cy - 34} A34 34 0 0 1 ${cx + 34 * Math.sin(a)} ${cy - 34 * Math.cos(a)}`} fill="none" stroke={C.purple} strokeWidth={2.5} />
      <Arrow x1={cx} y1={cy} x2={bx} y2={by} color={C.orange} width={3} />
      <circle cx={cx} cy={cy} r={4} fill={C.ink} />
      <T x={cx - 10} y={cy + 12} size={11}>A</T>
      <T x={bx + 10} y={by - 6} size={11}>B</T>
      <T x={cx + 22} y={cy - 46} size={11} fill={C.purple}>060°</T>
      <T x={196} y={50} size={11} anchor="start">Bearings:</T>
      <T x={196} y={70} size={10} weight={700} anchor="start" fill={C.muted}>measured clockwise</T>
      <T x={196} y={84} size={10} weight={700} anchor="start" fill={C.muted}>from north</T>
      <T x={196} y={104} size={10} weight={700} anchor="start" fill={C.muted}>always three figures</T>
      <T x={196} y={128} size={10} anchor="start" fill={C.purple}>E = 090°</T>
      <T x={196} y={144} size={10} anchor="start" fill={C.purple}>S = 180°</T>
      <T x={196} y={160} size={10} anchor="start" fill={C.purple}>W = 270°</T>
    </Svg>
  );
}

function Bisectors() {
  const arc = (d: string) => <path d={d} fill="none" stroke={C.orange} strokeWidth={2} />;
  return (
    <Svg label="Constructions: a perpendicular bisector cuts a line in half at right angles using equal arcs from each end; an angle bisector cuts an angle in half">
      {/* perpendicular bisector */}
      <line x1={30} y1={100} x2={130} y2={100} stroke={C.ink} strokeWidth={2.5} />
      {arc('M72.4 57.6 A60 60 0 0 1 85.6 77.5')}
      {arc('M85.6 122.5 A60 60 0 0 1 72.4 142.4')}
      {arc('M74.4 77.5 A60 60 0 0 1 87.6 57.6')}
      {arc('M87.6 142.4 A60 60 0 0 1 74.4 122.5')}
      <line x1={80} y1={46} x2={80} y2={154} stroke={C.purple} strokeWidth={2.5} />
      <rect x={80} y={92} width={8} height={8} fill="none" stroke={C.purple} strokeWidth={1.5} />
      <circle cx={30} cy={100} r={3.5} fill={C.ink} />
      <circle cx={130} cy={100} r={3.5} fill={C.ink} />
      <T x={22} y={112} size={11}>A</T>
      <T x={138} y={112} size={11}>B</T>
      <T x={80} y={176} size={10.5}>Perpendicular bisector</T>
      <T x={80} y={190} size={9} weight={700} fill={C.muted}>halves the line at 90°</T>
      {/* angle bisector */}
      <line x1={180} y1={150} x2={306} y2={150} stroke={C.ink} strokeWidth={2.5} />
      <line x1={180} y1={150} x2={240} y2={46} stroke={C.ink} strokeWidth={2.5} />
      {arc('M205 106.7 A50 50 0 0 1 230 150')}
      {arc('M236 104 Q246 108 252 118')}
      {arc('M240 120 Q246 112 250 102')}
      <line x1={180} y1={150} x2={290} y2={86.5} stroke={C.purple} strokeWidth={2.5} />
      <T x={244} y={176} size={10.5}>Angle bisector</T>
      <T x={244} y={190} size={9} weight={700} fill={C.muted}>halves the angle</T>
    </Svg>
  );
}

function InterestBars() {
  const simple = [100, 110, 120, 130];
  const compound = [100, 110, 121, 133.1];
  const h = (v: number) => v * 1.0;
  return (
    <Svg label="£100 at 10% a year: simple interest grows 100, 110, 120, 130; compound interest grows 100, 110, 121, 133.10">
      <line x1={30} y1={170} x2={310} y2={170} stroke={C.ink} strokeWidth={2} />
      {simple.map((v, i) => {
        const x = 50 + i * 68;
        return (
          <g key={i}>
            <rect x={x} y={170 - h(v)} width={24} height={h(v)} rx={3} fill={C.blue} />
            <rect x={x + 26} y={170 - h(compound[i])} width={24} height={h(compound[i])} rx={3} fill={C.purple} />
            <T x={x + 12} y={164 - h(v)} size={8.5}>{`£${v}`}</T>
            <T x={x + 38} y={164 - h(compound[i]) - (i > 1 ? 9 : 0)} size={8.5} fill={C.purple}>{`£${compound[i] % 1 ? compound[i].toFixed(2) : compound[i]}`}</T>
            <T x={x + 25} y={184} size={10}>{`Year ${i}`}</T>
          </g>
        );
      })}
      <rect x={34} y={10} width={12} height={12} rx={2} fill={C.blue} />
      <T x={52} y={16} size={10} anchor="start">simple</T>
      <rect x={104} y={10} width={12} height={12} rx={2} fill={C.purple} />
      <T x={122} y={16} size={10} anchor="start">compound</T>
      <T x={220} y={16} size={10} weight={700} fill={C.muted}>£100 at 10% a year</T>
    </Svg>
  );
}

function VennExample() {
  return (
    <Svg label="Venn diagram for a class of 30: 8 like football only, 5 like both, 7 like tennis only, and 10 like neither">
      <rect x={20} y={14} width={280} height={156} rx={10} fill={C.soft} stroke={C.line} strokeWidth={2} />
      <circle cx={128} cy={94} r={62} fill={C.blue} opacity={0.18} stroke={C.blue} strokeWidth={2.5} />
      <circle cx={196} cy={94} r={62} fill={C.orange} opacity={0.18} stroke={C.orange} strokeWidth={2.5} />
      <T x={108} y={52} size={11} fill={C.blue}>Football</T>
      <T x={218} y={52} size={11} fill={C.orange}>Tennis</T>
      <T x={98} y={98} size={20}>8</T>
      <T x={162} y={98} size={20}>5</T>
      <T x={226} y={98} size={20}>7</T>
      <T x={280} y={154} size={20}>10</T>
      <T x={162} y={120} size={9} weight={700} fill={C.muted}>both</T>
      <T x={272} y={30} size={9} weight={700} fill={C.muted}>neither ↓</T>
      <T x={160} y={188} size={10} weight={700} fill={C.muted}>class of 30: 13 football, 12 tennis, 5 both</T>
    </Svg>
  );
}

function CuboidNet() {
  const s = 12;
  const x0 = 14;
  const y0 = 70;
  const strip = [4, 3, 4, 3];
  let x = x0;
  const faces = strip.map((w, i) => {
    const el = (
      <g key={i}>
        <rect x={x} y={y0} width={w * s} height={2 * s} fill={i % 2 ? C.goldSoft : C.blueSoft} stroke={C.ink} strokeWidth={1.5} />
        <T x={x + (w * s) / 2} y={y0 + s} size={10}>{w * 2}</T>
      </g>
    );
    x += w * s;
    return el;
  });
  return (
    <Svg label="Net of a 4 by 3 by 2 cuboid: faces of 8, 6, 8 and 6 square centimetres around the middle, and 12 on the top and bottom; total surface area 52 square centimetres">
      <rect x={x0} y={y0 - 3 * s} width={4 * s} height={3 * s} fill={C.greenSoft} stroke={C.ink} strokeWidth={1.5} />
      <T x={x0 + 2 * s} y={y0 - 1.5 * s} size={10}>12</T>
      {faces}
      <rect x={x0} y={y0 + 2 * s} width={4 * s} height={3 * s} fill={C.greenSoft} stroke={C.ink} strokeWidth={1.5} />
      <T x={x0 + 2 * s} y={y0 + 3.5 * s} size={10}>12</T>
      {/* 3D sketch */}
      <polygon points="222,70 270,70 270,94 222,94" fill={C.blueSoft} stroke={C.ink} strokeWidth={1.5} />
      <polygon points="222,70 240,52 288,52 270,70" fill={C.greenSoft} stroke={C.ink} strokeWidth={1.5} />
      <polygon points="270,70 288,52 288,76 270,94" fill={C.goldSoft} stroke={C.ink} strokeWidth={1.5} />
      <T x={246} y={106} size={9.5} fill={C.muted}>4 cm</T>
      <T x={300} y={66} size={9.5} fill={C.muted}>3</T>
      <T x={212} y={82} size={9.5} fill={C.muted}>2</T>
      <T x={250} y={130} size={9.5} weight={700} fill={C.muted}>faces in cm²</T>
      <T x={160} y={176} size={11} fill={C.purple}>2 × (12 + 8 + 6) = 52 cm²</T>
      <T x={160} y={192} size={9.5} weight={700} fill={C.muted}>add the three different faces, then double</T>
    </Svg>
  );
}

export const mathsY89Diagrams: Record<string, () => JSX.Element> = {
  'reflect-translate': ReflectTranslate,
  enlargement: Enlargement,
  bearings: Bearings,
  bisectors: Bisectors,
  'interest-bars': InterestBars,
  'venn-example': VennExample,
  'cuboid-net': CuboidNet,
};
