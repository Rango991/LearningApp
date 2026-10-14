import { Arrow, C, E, Label, Svg, T } from './kit';

// Extra Year 7 diagrams for Chemistry, Physics and Maths.

function HazardSymbols() {
  const items = [
    { e: '🔥', t: 'Flammable' },
    { e: '🧪', t: 'Corrosive' },
    { e: '☠️', t: 'Toxic' },
    { e: '❗', t: 'Harmful' },
    { e: '⭕', t: 'Oxidising' },
    { e: '🐟', t: 'Environment' },
  ];
  return (
    <Svg h={200} label="Hazard symbols are red diamonds: flammable, corrosive, toxic, harmful or irritant, oxidising, and dangerous to the environment">
      {items.map((it, i) => {
        const cx = 55 + (i % 3) * 105;
        const cy = 42 + Math.floor(i / 3) * 98;
        return (
          <g key={it.t}>
            <polygon points={`${cx},${cy - 30} ${cx + 30},${cy} ${cx},${cy + 30} ${cx - 30},${cy}`} fill="#fff" stroke={C.red} strokeWidth={4} strokeLinejoin="round" />
            <E e={it.e} x={cx} y={cy} size={28} />
            <T x={cx} y={cy + 44} size={11.5}>{it.t}</T>
          </g>
        );
      })}
    </Svg>
  );
}

function Bunsen() {
  const Burner = ({ cx, open }: { cx: number; open: boolean }) => (
    <g>
      <rect x={cx - 30} y={176} width={60} height={12} rx={4} fill={C.muted} />
      <rect x={cx - 7} y={100} width={14} height={78} fill="#b9b3c9" stroke={C.muted} strokeWidth={1.5} />
      <rect x={cx - 10} y={148} width={20} height={14} rx={3} fill="#9a93ad" />
      <circle cx={cx} cy={155} r={4} fill={open ? C.ink : '#9a93ad'} stroke={C.ink} strokeWidth={1} />
      {open ? (
        <g>
          <path d={`M ${cx - 8} 100 C ${cx - 12} 76, ${cx - 4} 58, ${cx} 48 C ${cx + 4} 58, ${cx + 12} 76, ${cx + 8} 100 Z`} fill="#8fc7ff" />
          <path d={`M ${cx - 5} 100 L ${cx} 74 L ${cx + 5} 100 Z`} fill={C.blue} />
        </g>
      ) : (
        <path d={`M ${cx - 9} 100 C ${cx - 16} 72, ${cx - 2} 52, ${cx + 2} 22 C ${cx + 8} 50, ${cx + 16} 72, ${cx + 9} 100 Z`} fill={C.gold} stroke={C.orange} strokeWidth={1.5} />
      )}
    </g>
  );
  return (
    <Svg h={196} label="Two Bunsen burners: air hole closed gives a yellow safety flame that is easy to see; air hole open gives a hotter blue roaring flame, hottest just above the inner blue cone">
      <Burner cx={50} open={false} />
      <Burner cx={190} open />
      <T x={76} y={112} size={11} anchor="start">Air hole closed</T>
      <T x={76} y={130} size={10.5} anchor="start" fill={C.orange}>Yellow safety flame</T>
      <T x={76} y={146} size={10} weight={700} fill={C.muted} anchor="start">easy to see</T>
      <T x={216} y={112} size={11} anchor="start">Air hole open</T>
      <T x={216} y={130} size={11} anchor="start" fill={C.blue}>Blue roaring flame</T>
      <T x={216} y={146} size={10} weight={700} fill={C.muted} anchor="start">much hotter</T>
      <Label x={226} y={50} px={192} py={71}>hottest point</Label>
      <Label x={70} y={170} px={56} py={155}>air hole</Label>
    </Svg>
  );
}

function Variables() {
  const rows = [
    { e: '🎛️', t: 'Independent', s: 'the one thing you change', ex: 'water temperature', c: C.purpleSoft, f: C.purple },
    { e: '📏', t: 'Dependent', s: 'what you measure', ex: 'time to dissolve', c: C.blueSoft, f: C.blue },
    { e: '🔒', t: 'Control', s: 'keep these the same', ex: 'mass of sugar, volume', c: C.greenSoft, f: C.green },
  ];
  return (
    <Svg h={186} label="Variables in a fair test: independent is the one thing you change, such as water temperature; dependent is what you measure, such as time to dissolve; control variables are kept the same, such as mass of sugar and volume of water">
      {rows.map((r, i) => {
        const y = 8 + i * 60;
        return (
          <g key={r.t}>
            <rect x={8} y={y} width={304} height={52} rx={12} fill={r.c} />
            <E e={r.e} x={32} y={y + 26} size={30} />
            <T x={56} y={y + 18} size={13} anchor="start" fill={r.f}>{r.t}</T>
            <T x={56} y={y + 36} size={10} weight={700} fill={C.muted} anchor="start">{r.s}</T>
            <T x={302} y={y + 26} size={11} anchor="end">{r.ex}</T>
          </g>
        );
      })}
    </Svg>
  );
}

function SolubilityCurve() {
  const px = (t: number) => 44 + t * 2.56;
  const py = (s: number) => 168 - s * 0.75;
  const s = (t: number) => 13 + 0.3 * t + 0.012 * t * t;
  const pts = Array.from({ length: 41 }, (_, i) => i * 2.5).map((t) => `${px(t).toFixed(1)},${py(s(t)).toFixed(1)}`).join(' ');
  return (
    <Svg h={196} label="Solubility curve: the mass of solid that dissolves in 100 grams of water rises as the temperature goes up. A solution on the line is saturated">
      <line x1={44} y1={168} x2={304} y2={168} stroke={C.muted} strokeWidth={1.5} />
      <line x1={44} y1={168} x2={44} y2={16} stroke={C.muted} strokeWidth={1.5} />
      {[0, 50, 100].map((t) => <T key={t} x={px(t)} y={178} size={9.5} weight={700} fill={C.muted}>{t}</T>)}
      {[0, 100, 150].map((g) => <T key={g} x={38} y={py(g)} size={9.5} weight={700} fill={C.muted} anchor="end">{g}</T>)}
      <T x={174} y={192} size={10} fill={C.muted}>temperature (°C)</T>
      <T x={50} y={12} size={10} fill={C.muted} anchor="start">grams that dissolve in 100 g of water</T>
      <polyline points={pts} fill="none" stroke={C.purple} strokeWidth={3.5} />
      <circle cx={px(60)} cy={py(s(60))} r={5} fill={C.purple} />
      <Label x={150} y={70} px={px(60)} py={py(s(60))} anchor="end">saturated</Label>
      <T x={230} y={150} size={10.5} fill={C.green}>hotter → more dissolves</T>
    </Svg>
  );
}

function ElementCompoundMixture() {
  const atom = (x: number, y: number, fill: string, r = 8) => <circle cx={x} cy={y} r={r} fill={fill} stroke={C.ink} strokeWidth={1} />;
  const water = (x: number, y: number) => (
    <g>
      {atom(x - 9, y + 6, '#fff', 5)}
      {atom(x + 9, y + 6, '#fff', 5)}
      {atom(x, y, C.red, 8)}
    </g>
  );
  const grid = [[25, 38], [55, 38], [25, 72], [55, 72], [25, 106], [55, 106]];
  return (
    <Svg h={196} label="Particle pictures: an element has only one type of atom, a compound has different atoms chemically joined like water, a mixture has different substances mixed but not joined">
      {[0, 1, 2].map((p) => <rect key={p} x={8 + p * 103} y={8} width={98} height={140} rx={12} fill={C.soft} stroke={C.line} strokeWidth={1.5} />)}
      {grid.map(([x, y], i) => <g key={`e${i}`}>{atom(8 + x + 9, y, '#b0b0b8')}</g>)}
      {grid.map(([x, y], i) => <g key={`c${i}`}>{water(111 + x + 9, y)}</g>)}
      {grid.map(([x, y], i) => (
        <g key={`m${i}`}>{i % 3 === 0 ? water(214 + x + 9, y) : i % 3 === 1 ? atom(214 + x + 9, y, '#b0b0b8') : <g>{atom(214 + x + 3, y, C.blue, 6)}{atom(214 + x + 15, y, C.blue, 6)}</g>}</g>
      ))}
      <T x={57} y={166} size={12}>Element</T>
      <T x={160} y={166} size={12}>Compound</T>
      <T x={263} y={166} size={12}>Mixture</T>
      <T x={57} y={184} size={9.5} weight={700} fill={C.muted}>one type of atom</T>
      <T x={160} y={184} size={9.5} weight={700} fill={C.muted}>atoms joined</T>
      <T x={263} y={184} size={9.5} weight={700} fill={C.muted}>mixed, not joined</T>
    </Svg>
  );
}

/** Horizontal bars with an emoji and name for each row. */
function Bars({ rows, max, label, caption, unit, colour }: { rows: { e: string; t: string; v: number }[]; max: number; label: string; caption: string; unit: string; colour: string }) {
  return (
    <Svg h={200} label={label}>
      {rows.map((r, i) => {
        const y = 8 + i * 44;
        const w = (r.v / max) * 150;
        return (
          <g key={r.t}>
            <E e={r.e} x={22} y={y + 17} size={28} />
            <T x={42} y={y + 17} size={11.5} anchor="start">{r.t}</T>
            <rect x={112} y={y + 5} width={w} height={24} rx={6} fill={colour} />
            <T x={118 + w} y={y + 17} size={11.5} anchor="start">{r.v.toLocaleString('en-GB')} {unit}</T>
          </g>
        );
      })}
      <T x={160} y={190} size={10.5} weight={700} fill={C.muted}>{caption}</T>
    </Svg>
  );
}

function PlanetWeights() {
  return (
    <Bars
      label="Weight of a 50 kilogram astronaut: 80 newtons on the Moon, 185 on Mars, 500 on Earth and 1,250 on Jupiter"
      rows={[
        { e: '🌕', t: 'Moon', v: 80 },
        { e: '🔴', t: 'Mars', v: 185 },
        { e: '🌍', t: 'Earth', v: 500 },
        { e: '🪐', t: 'Jupiter', v: 1250 },
      ]}
      max={1250}
      unit="N"
      colour={C.purple}
      caption="Weight of a 50 kg astronaut (mass stays 50 kg)"
    />
  );
}

function FoodEnergy() {
  return (
    <Bars
      label="Energy in 100 grams of food: apple about 220 kilojoules, bread about 1,000, cheese about 1,700, chocolate about 2,200"
      rows={[
        { e: '🍎', t: 'Apple', v: 220 },
        { e: '🍞', t: 'Bread', v: 1000 },
        { e: '🧀', t: 'Cheese', v: 1700 },
        { e: '🍫', t: 'Chocolate', v: 2200 },
      ]}
      max={2200}
      unit="kJ"
      colour={C.orange}
      caption="Energy in 100 g (roughly)"
    />
  );
}

function HeatVsTemp() {
  const Side = ({ x, e, temp, note, bar, colour }: { x: number; e: string; temp: string; note: string; bar: number; colour: string }) => (
    <g>
      <rect x={x} y={8} width={148} height={170} rx={14} fill={C.soft} />
      <E e={e} x={x + 74} y={50} size={56} />
      <T x={x + 74} y={98} size={20} fill={colour}>{temp}</T>
      <T x={x + 74} y={118} size={10.5} weight={700} fill={C.muted}>{note}</T>
      <T x={x + 12} y={140} size={9.5} weight={700} fill={C.muted} anchor="start">thermal energy</T>
      <rect x={x + 12} y={150} width={124} height={14} rx={7} fill="#fff" />
      <rect x={x + 12} y={150} width={bar} height={14} rx={7} fill={C.green} />
    </g>
  );
  return (
    <Svg h={196} label="A warm bath at 40 degrees stores much more thermal energy than a cup of tea at 80 degrees, because it has much more water">
      <Side x={8} e="🛁" temp="40 °C" note="lots of water" bar={124} colour={C.orange} />
      <Side x={164} e="☕" temp="80 °C" note="a little water" bar={18} colour={C.red} />
      <T x={160} y={190} size={10.5} weight={700} fill={C.muted}>Hotter doesn’t always mean more energy</T>
    </Svg>
  );
}

function HearingRanges() {
  const px = (f: number) => 78 + Math.log10(f / 10) * 52;
  const rows = [
    { e: '🧒', t: 'Humans', lo: 20, hi: 20000, txt: '20 – 20,000 Hz', c: C.purple },
    { e: '🐕', t: 'Dogs', lo: 67, hi: 45000, txt: 'up to 45,000 Hz', c: C.orange },
    { e: '🦇', t: 'Bats', lo: 2000, hi: 110000, txt: 'up to 100,000 Hz', c: C.blue },
  ];
  return (
    <Svg h={190} label="Hearing ranges: humans 20 to 20,000 hertz, dogs up to about 45,000 hertz, bats up to about 100,000 hertz. Sound above 20,000 hertz is ultrasound">
      <rect x={px(20000)} y={20} width={302 - px(20000)} height={128} fill={C.purpleSoft} />
      <T x={(px(20000) + 302) / 2} y={14} size={10} fill={C.purple}>ultrasound</T>
      {rows.map((r, i) => {
        const y = 32 + i * 40;
        return (
          <g key={r.t}>
            <E e={r.e} x={16} y={y + 6} size={22} />
            <T x={30} y={y + 6} size={11} anchor="start">{r.t}</T>
            <rect x={px(r.lo)} y={y} width={px(r.hi) - px(r.lo)} height={12} rx={6} fill={r.c} />
            <T x={px(r.lo)} y={y + 22} size={9} weight={700} fill={C.muted} anchor="start">{r.txt}</T>
          </g>
        );
      })}
      <line x1={78} y1={150} x2={302} y2={150} stroke={C.muted} strokeWidth={1.5} />
      {[10, 100, 1000, 10000, 100000].map((f) => (
        <g key={f}>
          <line x1={px(f)} y1={146} x2={px(f)} y2={154} stroke={C.muted} strokeWidth={1.5} />
          <T x={px(f)} y={164} size={9} weight={700} fill={C.muted}>{f.toLocaleString('en-GB')}</T>
        </g>
      ))}
      <T x={190} y={182} size={10} fill={C.muted}>frequency (Hz): each step is × 10</T>
    </Svg>
  );
}

function Eclipses() {
  const Row = ({ y, title, mid, end }: { y: number; title: string; mid: 'moon' | 'earth'; end: 'moon' | 'earth' }) => {
    const body = (kind: 'moon' | 'earth', x: number, dark: boolean) =>
      kind === 'moon' ? <circle cx={x} cy={y} r={8} fill={dark ? '#a0533e' : '#c9c6d3'} stroke={C.muted} strokeWidth={1} /> : <circle cx={x} cy={y} r={20} fill={C.blue} stroke="#1478c0" strokeWidth={1.5} />;
    const midR = mid === 'moon' ? 8 : 20;
    return (
      <g>
        <T x={8} y={y - 36} size={12} anchor="start">{title}</T>
        <line x1={40} y1={y - 26} x2={170} y2={y - midR} stroke={C.gold} strokeWidth={1.5} strokeDasharray="4 3" />
        <line x1={40} y1={y + 26} x2={170} y2={y + midR} stroke={C.gold} strokeWidth={1.5} strokeDasharray="4 3" />
        <polygon points={`170,${y - midR} 170,${y + midR} 290,${y + midR / 3} 290,${y - midR / 3}`} fill={C.ink} fillOpacity={0.22} />
        <circle cx={40} cy={y} r={26} fill={C.gold} />
        {body(mid, 170, false)}
        {body(end, 270, end === 'moon')}
        <T x={40} y={y + 38} size={10} weight={700} fill={C.muted}>Sun</T>
        <T x={170} y={y + 32} size={10} weight={700} fill={C.muted}>{mid === 'moon' ? 'Moon' : 'Earth'}</T>
        <T x={270} y={y + 32} size={10} weight={700} fill={C.muted}>{end === 'moon' ? 'Moon' : 'Earth'}</T>
      </g>
    );
  };
  return (
    <Svg h={206} label="Solar eclipse: the Moon is between the Sun and Earth and its shadow falls on Earth. Lunar eclipse: Earth is between the Sun and the Moon and its shadow falls on the Moon">
      <Row y={54} title="Solar eclipse: Moon in the middle" mid="moon" end="earth" />
      <Row y={158} title="Lunar eclipse: Earth in the middle" mid="earth" end="moon" />
    </Svg>
  );
}

function PlaceValue() {
  const cols = [
    { h: 'Th', d: '3' }, { h: 'H', d: '4' }, { h: 'T', d: '0' }, { h: 'O', d: '7' }, { h: '.', d: '.' }, { h: 't', d: '2' }, { h: 'h', d: '5' },
  ];
  let x = 22;
  return (
    <Svg h={190} label="Place value chart for 3,407.25: thousands 3, hundreds 4, tens 0, ones 7, then tenths 2 and hundredths 5. Multiplying by 10 moves digits one place left; dividing by 10 moves them one place right">
      {cols.map((c) => {
        const w = c.h === '.' ? 20 : 42;
        const cx = x + w / 2;
        x += w;
        return (
          <g key={c.h}>
            {c.h !== '.' && <rect x={cx - w / 2 + 2} y={10} width={w - 4} height={28} rx={8} fill={['t', 'h'].includes(c.h) ? C.orangeSoft : C.purpleSoft} />}
            {c.h !== '.' && <T x={cx} y={24} size={12}>{c.h}</T>}
            <T x={cx} y={66} size={26}>{c.d}</T>
          </g>
        );
      })}
      <T x={160} y={98} size={10} weight={700} fill={C.muted}>t = tenths, h = hundredths</T>
      <Arrow x1={250} y1={128} x2={70} y2={128} color={C.green} />
      <T x={160} y={116} size={11} fill={C.green}>× 10: every digit moves one place left</T>
      <Arrow x1={70} y1={170} x2={250} y2={170} color={C.red} />
      <T x={160} y={158} size={11} fill={C.red}>÷ 10: every digit moves one place right</T>
    </Svg>
  );
}

function FunctionMachine() {
  const Box = ({ x, y, t, fill }: { x: number; y: number; t: string; fill: string }) => (
    <g>
      <rect x={x - 28} y={y - 18} width={56} height={36} rx={8} fill={fill} stroke={C.line} strokeWidth={2} />
      <T x={x} y={y} size={15}>{t}</T>
    </g>
  );
  const Num = ({ x, y, t }: { x: number; y: number; t: string }) => (
    <g>
      <circle cx={x} cy={y} r={20} fill="#fff" stroke={C.purple} strokeWidth={2.5} />
      <T x={x} y={y} size={15}>{t}</T>
    </g>
  );
  return (
    <Svg h={190} label="Function machine: input 5, times 3, plus 2, gives output 17. Backwards: 17, minus 2, divide by 3, gives 5">
      <T x={30} y={14} size={9.5} weight={700} fill={C.muted}>input</T>
      <T x={290} y={14} size={9.5} weight={700} fill={C.muted}>output</T>
      <Num x={30} y={44} t="5" />
      <Arrow x1={52} y1={44} x2={80} y2={44} width={2} />
      <Box x={112} y={44} t="× 3" fill={C.blueSoft} />
      <Arrow x1={142} y1={44} x2={174} y2={44} width={2} />
      <Box x={206} y={44} t="+ 2" fill={C.greenSoft} />
      <Arrow x1={236} y1={44} x2={266} y2={44} width={2} />
      <Num x={290} y={44} t="17" />
      <T x={160} y={98} size={11} fill={C.red}>Backwards: undo each step in reverse</T>
      <Num x={30} y={140} t="5" />
      <Arrow x1={80} y1={140} x2={52} y2={140} width={2} color={C.red} />
      <Box x={112} y={140} t="÷ 3" fill={C.redSoft} />
      <Arrow x1={174} y1={140} x2={142} y2={140} width={2} color={C.red} />
      <Box x={206} y={140} t="− 2" fill={C.redSoft} />
      <Arrow x1={266} y1={140} x2={236} y2={140} width={2} color={C.red} />
      <Num x={290} y={140} t="17" />
    </Svg>
  );
}

function Coordinates() {
  const px = (x: number) => 160 + x * 20;
  const py = (y: number) => 100 - y * 20;
  const ticks = [-4, -3, -2, -1, 1, 2, 3, 4];
  return (
    <Svg h={200} label="Coordinate grid with four quadrants. A at 3, 2 is 3 along and 2 up. B at minus 3, 2 is 3 left and 2 up. C at 2, minus 3 is 2 right and 3 down">
      {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((n) => (
        <g key={n}>
          <line x1={px(n)} y1={py(4)} x2={px(n)} y2={py(-4)} stroke={C.line} strokeWidth={1} />
          <line x1={px(-4)} y1={py(n)} x2={px(4)} y2={py(n)} stroke={C.line} strokeWidth={1} />
        </g>
      ))}
      <line x1={px(-4.4)} y1={py(0)} x2={px(4.4)} y2={py(0)} stroke={C.ink} strokeWidth={1.8} />
      <line x1={px(0)} y1={py(4.4)} x2={px(0)} y2={py(-4.4)} stroke={C.ink} strokeWidth={1.8} />
      <T x={px(4.4) + 8} y={py(0)} size={11}>x</T>
      <T x={px(0)} y={py(4.4) - 6} size={11}>y</T>
      {ticks.map((n) => (
        <g key={n}>
          <T x={px(n)} y={py(0) + 9} size={7.5} weight={700} fill={C.muted}>{n < 0 ? `−${-n}` : n}</T>
          <T x={px(0) - 7} y={py(n)} size={7.5} weight={700} fill={C.muted}>{n < 0 ? `−${-n}` : n}</T>
        </g>
      ))}
      <Arrow x1={px(0)} y1={py(0)} x2={px(3) - 2} y2={py(0)} color={C.orange} width={3} />
      <Arrow x1={px(3)} y1={py(0)} x2={px(3)} y2={py(2) + 7} color={C.orange} width={3} />
      <circle cx={px(3)} cy={py(2)} r={5} fill={C.purple} />
      <circle cx={px(-3)} cy={py(2)} r={5} fill={C.purple} />
      <circle cx={px(2)} cy={py(-3)} r={5} fill={C.purple} />
      <T x={px(3) + 8} y={py(2) - 10} size={11} anchor="start">A (3, 2)</T>
      <T x={px(-3) - 8} y={py(2) - 10} size={11} anchor="end">B (−3, 2)</T>
      <T x={px(2) + 8} y={py(-3) + 10} size={11} anchor="start">C (2, −3)</T>
      <T x={8} y={186} size={10} anchor="start" fill={C.orange}>along, then up</T>
    </Svg>
  );
}

function AngleTypes() {
  const items = [
    { t: 'Acute', s: 'less than 90°', a: 45, c: C.green },
    { t: 'Right', s: 'exactly 90°', a: 90, c: C.blue },
    { t: 'Obtuse', s: '90° to 180°', a: 135, c: C.orange },
    { t: 'Reflex', s: 'more than 180°', a: 240, c: C.red },
  ];
  return (
    <Svg h={170} label="Types of angle: acute is less than 90 degrees, right angle is exactly 90, obtuse is between 90 and 180, reflex is more than 180">
      {items.map((it, i) => {
        const ox = 4 + i * 79;
        const vx = ox + 34;
        const vy = 80;
        const p = (deg: number, r: number) => [vx + r * Math.cos((deg * Math.PI) / 180), vy - r * Math.sin((deg * Math.PI) / 180)];
        const end = p(it.a, 40);
        const a0 = p(0, 14);
        const a1 = p(it.a, 14);
        return (
          <g key={it.t}>
            <rect x={ox} y={8} width={75} height={154} rx={12} fill={C.soft} />
            {it.a === 90 ? (
              <path d={`M ${vx + 10} ${vy} L ${vx + 10} ${vy - 10} L ${vx} ${vy - 10}`} fill="none" stroke={it.c} strokeWidth={2} />
            ) : (
              <path d={`M ${a0[0]} ${a0[1]} A 14 14 0 ${it.a > 180 ? 1 : 0} 0 ${a1[0].toFixed(1)} ${a1[1].toFixed(1)}`} fill="none" stroke={it.c} strokeWidth={2.5} />
            )}
            <line x1={vx} y1={vy} x2={vx + 36} y2={vy} stroke={C.ink} strokeWidth={2.5} strokeLinecap="round" />
            <line x1={vx} y1={vy} x2={end[0]} y2={end[1]} stroke={C.ink} strokeWidth={2.5} strokeLinecap="round" />
            <T x={ox + 37.5} y={136} size={12} fill={it.c}>{it.t}</T>
            <T x={ox + 37.5} y={152} size={9} weight={700} fill={C.muted}>{it.s}</T>
          </g>
        );
      })}
    </Svg>
  );
}

function Quadrilaterals() {
  const shapes: { t: string; pts: (cx: number, cy: number) => string }[] = [
    { t: 'Square', pts: (x, y) => `${x - 22},${y - 22} ${x + 22},${y - 22} ${x + 22},${y + 22} ${x - 22},${y + 22}` },
    { t: 'Rectangle', pts: (x, y) => `${x - 34},${y - 18} ${x + 34},${y - 18} ${x + 34},${y + 18} ${x - 34},${y + 18}` },
    { t: 'Rhombus', pts: (x, y) => `${x},${y - 24} ${x + 34},${y} ${x},${y + 24} ${x - 34},${y}` },
    { t: 'Parallelogram', pts: (x, y) => `${x - 36},${y + 18} ${x + 20},${y + 18} ${x + 36},${y - 18} ${x - 20},${y - 18}` },
    { t: 'Trapezium', pts: (x, y) => `${x - 36},${y + 18} ${x + 36},${y + 18} ${x + 18},${y - 18} ${x - 18},${y - 18}` },
    { t: 'Kite', pts: (x, y) => `${x},${y - 24} ${x + 22},${y - 8} ${x},${y + 26} ${x - 22},${y - 8}` },
  ];
  const fills = [C.purpleSoft, C.blueSoft, C.greenSoft, C.goldSoft, C.orangeSoft, C.redSoft];
  const strokes = [C.purple, C.blue, C.green, C.gold, C.orange, C.red];
  return (
    <Svg h={200} label="Quadrilaterals: square, rectangle, rhombus, parallelogram, trapezium and kite">
      {shapes.map((s, i) => {
        const cx = 58 + (i % 3) * 102;
        const cy = 40 + Math.floor(i / 3) * 96;
        return (
          <g key={s.t}>
            <polygon points={s.pts(cx, cy)} fill={fills[i]} stroke={strokes[i]} strokeWidth={2.5} strokeLinejoin="round" />
            <T x={cx} y={cy + 42} size={11.5}>{s.t}</T>
          </g>
        );
      })}
    </Svg>
  );
}

function PieChart() {
  const cx = 88;
  const cy = 96;
  const r = 78;
  const slices = [
    { t: 'Pizza', n: 15, c: C.purple },
    { t: 'Pasta', n: 9, c: C.orange },
    { t: 'Salad', n: 6, c: C.green },
  ];
  let start = -90;
  const pt = (deg: number) => `${(cx + r * Math.cos((deg * Math.PI) / 180)).toFixed(1)} ${(cy + r * Math.sin((deg * Math.PI) / 180)).toFixed(1)}`;
  return (
    <Svg h={200} label="Pie chart of 30 people: each person is 12 degrees. Pizza 15 people, 180 degrees. Pasta 9 people, 108 degrees. Salad 6 people, 72 degrees">
      {slices.map((s) => {
        const angle = s.n * 12;
        const d = `M ${cx} ${cy} L ${pt(start)} A ${r} ${r} 0 ${angle > 180 ? 1 : 0} 1 ${pt(start + angle)} Z`;
        const mid = start + angle / 2;
        start += angle;
        return (
          <g key={s.t}>
            <path d={d} fill={s.c} stroke="#fff" strokeWidth={2} />
            <T x={cx + 46 * Math.cos((mid * Math.PI) / 180)} y={cy + 46 * Math.sin((mid * Math.PI) / 180)} size={12} fill="#fff">{angle}°</T>
          </g>
        );
      })}
      <T x={184} y={22} size={11} anchor="start">30 people asked</T>
      <T x={184} y={40} size={11} anchor="start" fill={C.purple}>360 ÷ 30 = 12° each</T>
      {slices.map((s, i) => (
        <g key={s.t}>
          <rect x={184} y={64 + i * 32} width={14} height={14} rx={3} fill={s.c} />
          <T x={204} y={71 + i * 32} size={11} anchor="start">{s.t}: {s.n} × 12 = {s.n * 12}°</T>
        </g>
      ))}
    </Svg>
  );
}

export const year7Diagrams: Record<string, () => JSX.Element> = {
  'hazard-symbols': HazardSymbols,
  bunsen: Bunsen,
  variables: Variables,
  'solubility-curve': SolubilityCurve,
  'element-compound-mixture': ElementCompoundMixture,
  'planet-weights': PlanetWeights,
  'food-energy': FoodEnergy,
  'heat-vs-temp': HeatVsTemp,
  'hearing-ranges': HearingRanges,
  eclipses: Eclipses,
  'place-value': PlaceValue,
  'function-machine': FunctionMachine,
  coordinates: Coordinates,
  'angle-types': AngleTypes,
  quadrilaterals: Quadrilaterals,
  'pie-chart': PieChart,
};
