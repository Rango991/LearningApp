import { Arrow, C, Svg, T, Tiles } from './kit';

// GCSE (AQA) Maths diagrams.

/** Samples f between x0 and x1 and maps each point to SVG coordinates. */
function curve(f: (x: number) => number, x0: number, x1: number, px: (x: number) => number, py: (y: number) => number, steps = 60) {
  const pts: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const x = x0 + ((x1 - x0) * i) / steps;
    pts.push(`${px(x).toFixed(1)},${py(f(x)).toFixed(1)}`);
  }
  return pts.join(' ');
}

function IndexLaws() {
  const rows = [
    { f: 'aᵐ × aⁿ = aᵐ⁺ⁿ', n: 'multiply → add powers', c: C.purpleSoft },
    { f: 'aᵐ ÷ aⁿ = aᵐ⁻ⁿ', n: 'divide → subtract powers', c: C.blueSoft },
    { f: '(aᵐ)ⁿ = aᵐⁿ', n: 'power of a power → multiply', c: C.greenSoft },
    { f: 'a⁰ = 1', n: 'anything to the power 0', c: C.goldSoft },
    { f: 'a⁻ⁿ = 1/aⁿ', n: 'negative → reciprocal', c: C.orangeSoft },
    { f: 'a^(1/n) = ⁿ√a', n: 'fraction → root', c: C.redSoft },
  ];
  return (
    <Svg h={218} label="Index laws: multiply add the powers, divide subtract, power of a power multiply, power zero is one, negative power is a reciprocal, fractional power is a root">
      {rows.map((r, i) => {
        const y = 6 + i * 35;
        return (
          <g key={r.f}>
            <rect x={8} y={y} width={304} height={31} rx={10} fill={r.c} />
            <T x={20} y={y + 16} size={15} anchor="start">{r.f}</T>
            <T x={302} y={y + 16} size={10.5} weight={700} fill={C.muted} anchor="end">{r.n}</T>
          </g>
        );
      })}
    </Svg>
  );
}

function Bounds() {
  const px = (v: number) => 30 + (v - 3.6) * 1300; // 3.6 → 30, 3.8 → 290
  const ticks = [3.6, 3.65, 3.7, 3.75, 3.8];
  return (
    <Svg h={170} label="Error interval: 3.7 to one decimal place lies between the lower bound 3.65, included, and the upper bound 3.75, not included">
      <T x={160} y={20} size={13}>3.7 cm, rounded to 1 d.p.</T>
      <line x1={20} y1={90} x2={300} y2={90} stroke={C.muted} strokeWidth={2} />
      {ticks.map((t) => (
        <g key={t}>
          <line x1={px(t)} y1={84} x2={px(t)} y2={96} stroke={C.muted} strokeWidth={1.5} />
          <T x={px(t)} y={112} size={11} weight={700} fill={t === 3.65 || t === 3.75 ? C.ink : C.muted}>{t.toFixed(2).replace(/0$/, '')}</T>
        </g>
      ))}
      <rect x={px(3.65)} y={80} width={px(3.75) - px(3.65)} height={20} rx={4} fill={C.purpleSoft} />
      <line x1={px(3.65)} y1={90} x2={px(3.75)} y2={90} stroke={C.purple} strokeWidth={4} />
      <circle cx={px(3.65)} cy={90} r={7} fill={C.purple} />
      <circle cx={px(3.75)} cy={90} r={7} fill="#fff" stroke={C.purple} strokeWidth={3} />
      <T x={px(3.65)} y={60} size={10.5} fill={C.green}>lower bound</T>
      <T x={px(3.75)} y={60} size={10.5} fill={C.red}>upper bound</T>
      <T x={160} y={145} size={16} fill={C.purple}>3.65 ≤ x &lt; 3.75</T>
    </Svg>
  );
}

function Recurring() {
  const rows = [
    { l: 'x', r: '0.272727…', c: C.soft },
    { l: '100x', r: '27.272727…', c: C.soft },
    { l: '99x', r: '27', c: C.purpleSoft },
    { l: 'x', r: '27/99 = 3/11', c: C.greenSoft },
  ];
  return (
    <Svg h={190} label="Converting 0.27 recurring to a fraction: x equals 0.2727..., 100x equals 27.2727..., subtract to get 99x equals 27, so x equals 27 over 99 which is 3 over 11">
      {rows.map((r, i) => {
        const y = 8 + i * 44;
        return (
          <g key={i}>
            <rect x={60} y={y} width={200} height={36} rx={10} fill={r.c} stroke={C.line} strokeWidth={1.5} />
            <T x={130} y={y + 18} size={15} anchor="end">{r.l}</T>
            <T x={142} y={y + 18} size={15}>=</T>
            <T x={154} y={y + 18} size={15} anchor="start">{r.r}</T>
          </g>
        );
      })}
      <T x={268} y={70} size={10.5} weight={700} fill={C.muted} anchor="start">× 100</T>
      <T x={268} y={114} size={10.5} weight={700} fill={C.red} anchor="start">subtract</T>
      <T x={52} y={158} size={10.5} weight={700} fill={C.green} anchor="end">÷ 99</T>
    </Svg>
  );
}

function QuadraticRoots() {
  const px = (x: number) => 30 + (x + 5) * 52;
  const py = (y: number) => 178 - (y + 0.5) * 40;
  return (
    <Svg h={200} label="Graph of y equals x squared plus 5x plus 6, crossing the x-axis at x equals minus 3 and x equals minus 2">
      <line x1={20} y1={py(0)} x2={300} y2={py(0)} stroke={C.muted} strokeWidth={1.5} />
      <line x1={px(0)} y1={14} x2={px(0)} y2={186} stroke={C.muted} strokeWidth={1.5} />
      <T x={306} y={py(0)} size={10} fill={C.muted} anchor="start">x</T>
      <T x={px(0)} y={8} size={10} fill={C.muted}>y</T>
      <polyline points={curve((x) => x * x + 5 * x + 6, -4.19, -0.81, px, py)} fill="none" stroke={C.purple} strokeWidth={3.5} />
      <circle cx={px(-3)} cy={py(0)} r={6} fill={C.red} />
      <circle cx={px(-2)} cy={py(0)} r={6} fill={C.red} />
      <T x={px(-3) - 8} y={py(0) + 14} size={12} fill={C.red} anchor="end">x = −3</T>
      <T x={px(-2) + 8} y={py(0) + 14} size={12} fill={C.red} anchor="start">x = −2</T>
      <T x={20} y={24} size={13} anchor="start">y = x² + 5x + 6</T>
      <T x={20} y={42} size={11} weight={700} fill={C.muted} anchor="start">= (x + 2)(x + 3)</T>
      <T x={160} y={194} size={10} weight={700} fill={C.muted}>roots = where the curve crosses the x-axis</T>
    </Svg>
  );
}

function SimultaneousGraph() {
  const px = (x: number) => 30 + x * 24;
  const py = (y: number) => 170 - (y + 4) * 10.5;
  return (
    <Svg h={185} label="Simultaneous equations on a graph: the lines x plus y equals 10 and x minus y equals 4 cross at the point 7, 3">
      <line x1={px(0)} y1={py(0)} x2={300} y2={py(0)} stroke={C.muted} strokeWidth={1.5} />
      <line x1={px(0)} y1={8} x2={px(0)} y2={176} stroke={C.muted} strokeWidth={1.5} />
      <line x1={px(0)} y1={py(10)} x2={px(11)} y2={py(-1)} stroke={C.purple} strokeWidth={3} />
      <line x1={px(0)} y1={py(-4)} x2={px(11)} y2={py(7)} stroke={C.orange} strokeWidth={3} />
      <T x={px(1.6)} y={py(10)} size={12} fill={C.purple} anchor="start">x + y = 10</T>
      <T x={px(11)} y={py(8.4)} size={12} fill={C.orange} anchor="end">x − y = 4</T>
      <line x1={px(7)} y1={py(3)} x2={px(7)} y2={py(0)} stroke={C.muted} strokeWidth={1} strokeDasharray="3 3" />
      <circle cx={px(7)} cy={py(3)} r={6} fill={C.green} />
      <T x={px(7)} y={py(3) - 18} size={12} fill={C.green}>(7, 3)</T>
      <T x={px(7)} y={py(0) + 10} size={10} fill={C.muted}>7</T>
    </Svg>
  );
}

function InequalityLine() {
  const px = (n: number) => 30 + (n + 4) * 30;
  const nums = [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
  return (
    <Svg h={170} label="Number line for minus 2 less than n less than or equal to 3: open circle at minus 2, filled circle at 3, integers minus 1, 0, 1, 2, 3 satisfy it">
      <T x={160} y={20} size={16} fill={C.purple}>−2 &lt; n ≤ 3</T>
      <line x1={18} y1={80} x2={302} y2={80} stroke={C.muted} strokeWidth={2} />
      {nums.map((n) => (
        <g key={n}>
          <line x1={px(n)} y1={74} x2={px(n)} y2={86} stroke={C.muted} strokeWidth={1.5} />
          <T x={px(n)} y={102} size={12} fill={n > -2 && n <= 3 ? C.purple : C.muted}>{n < 0 ? `−${-n}` : n}</T>
        </g>
      ))}
      <line x1={px(-2)} y1={80} x2={px(3)} y2={80} stroke={C.purple} strokeWidth={5} />
      <circle cx={px(-2)} cy={80} r={7} fill="#fff" stroke={C.purple} strokeWidth={3} />
      <circle cx={px(3)} cy={80} r={7} fill={C.purple} />
      <circle cx={70} cy={136} r={6} fill="#fff" stroke={C.purple} strokeWidth={2.5} />
      <T x={82} y={136} size={11} anchor="start">not included (&lt;, &gt;)</T>
      <circle cx={70} cy={156} r={6} fill={C.purple} />
      <T x={82} y={156} size={11} anchor="start">included (≤, ≥)</T>
    </Svg>
  );
}

function ParallelPerp() {
  return (
    <Svg h={190} label="Parallel lines have the same gradient. Perpendicular lines meet at a right angle and their gradients multiply to minus 1">
      <rect x={6} y={6} width={150} height={150} rx={12} fill={C.soft} />
      <rect x={164} y={6} width={150} height={150} rx={12} fill={C.soft} />
      <line x1={22} y1={120} x2={110} y2={20} stroke={C.purple} strokeWidth={3} />
      <line x1={52} y1={145} x2={140} y2={45} stroke={C.purple} strokeWidth={3} />
      <T x={81} y={172} size={12}>Parallel</T>
      <T x={81} y={186} size={10} weight={700} fill={C.muted}>same gradient</T>
      <line x1={190} y1={140} x2={270} y2={20} stroke={C.orange} strokeWidth={3} />
      <line x1={180} y1={56} x2={300} y2={136} stroke={C.blue} strokeWidth={3} />
      {/* right angle marker where the lines cross, at (225.7, 86.5) */}
      <path d="M 230.1 79.8 L 236.8 84.2 L 232.4 91" fill="none" stroke={C.ink} strokeWidth={1.5} />
      <T x={258} y={24} size={11} fill={C.orange} anchor="end">m = 3/2</T>
      <T x={292} y={148} size={11} fill={C.blue} anchor="end">m = −2/3</T>
      <T x={239} y={172} size={12}>Perpendicular</T>
      <T x={239} y={186} size={10} weight={700} fill={C.muted}>gradients × to −1</T>
    </Svg>
  );
}

function CompoundInterest() {
  const Row = ({ y, vals, mult, colour, title }: { y: number; vals: string[]; mult: string; colour: string; title: string }) => (
    <g>
      <T x={8} y={y - 12} size={11} anchor="start" fill={C.muted}>{title}</T>
      {vals.map((v, i) => {
        const x = 8 + i * 108;
        return (
          <g key={v}>
            <rect x={x} y={y} width={88} height={34} rx={10} fill={colour} stroke={C.line} strokeWidth={1.5} />
            <T x={x + 44} y={y + 17} size={13}>{v}</T>
            {i < vals.length - 1 && <Arrow x1={x + 90} y1={y + 17} x2={x + 106} y2={y + 17} width={2} color={C.muted} />}
            {i < vals.length - 1 && <T x={x + 98} y={y + 44} size={10} fill={C.purple}>{mult}</T>}
          </g>
        );
      })}
    </g>
  );
  return (
    <Svg h={200} label="Compound interest: 1000 pounds times 1.05 each year becomes 1050 then 1102.50. Depreciation: 10000 pounds times 0.9 each year becomes 9000 then 8100">
      <Row y={24} vals={['£1,000', '£1,050', '£1,102.50']} mult="× 1.05" colour={C.greenSoft} title="5% interest each year" />
      <Row y={104} vals={['£10,000', '£9,000', '£8,100']} mult="× 0.9" colour={C.redSoft} title="Losing 10% each year" />
      <T x={160} y={186} size={12}>amount × multiplier^years</T>
    </Svg>
  );
}

function ProportionGraphs() {
  return (
    <Svg h={190} label="Direct proportion is a straight line through the origin, y equals k x. Inverse proportion is a curve, y equals k over x">
      {[0, 162].map((ox) => (
        <g key={ox}>
          <line x1={ox + 20} y1={150} x2={ox + 150} y2={150} stroke={C.muted} strokeWidth={1.5} />
          <line x1={ox + 20} y1={150} x2={ox + 20} y2={14} stroke={C.muted} strokeWidth={1.5} />
          <T x={ox + 150} y={160} size={9.5} fill={C.muted}>x</T>
          <T x={ox + 12} y={16} size={9.5} fill={C.muted}>y</T>
        </g>
      ))}
      <line x1={20} y1={150} x2={140} y2={24} stroke={C.purple} strokeWidth={3.5} />
      <polyline points={curve((x) => 6 / x, 0.42, 5.4, (x) => 182 + x * 24, (y) => 150 - y * 9)} fill="none" stroke={C.orange} strokeWidth={3.5} />
      <T x={85} y={172} size={12}>Direct: y = kx</T>
      <T x={247} y={172} size={12}>Inverse: y = k/x</T>
      <T x={85} y={186} size={9.5} weight={700} fill={C.muted}>double x → double y</T>
      <T x={247} y={186} size={9.5} weight={700} fill={C.muted}>double x → halve y</T>
    </Svg>
  );
}

function Sohcahtoa() {
  return (
    <Svg h={190} label="A right-angled triangle labelled from the angle theta: hypotenuse opposite the right angle, opposite across from theta, adjacent next to theta. sin is O over H, cos is A over H, tan is O over A">
      <path d="M 20 160 L 150 160 L 150 40 Z" fill={C.purpleSoft} stroke={C.purple} strokeWidth={3} strokeLinejoin="round" />
      <path d="M 140 160 L 140 150 L 150 150" fill="none" stroke={C.ink} strokeWidth={1.5} />
      <path d="M 48 160 A 28 28 0 0 0 40.6 141" fill="none" stroke={C.red} strokeWidth={2} />
      <T x={58} y={150} size={13} fill={C.red}>θ</T>
      <T x={70} y={90} size={12} fill={C.purple} anchor="end">H</T>
      <T x={162} y={100} size={12} fill={C.orange} anchor="start">O</T>
      <T x={85} y={176} size={12} fill={C.blue}>A</T>
      {[
        { t: 'sin θ = O / H', c: C.orangeSoft },
        { t: 'cos θ = A / H', c: C.blueSoft },
        { t: 'tan θ = O / A', c: C.greenSoft },
      ].map((r, i) => (
        <g key={r.t}>
          <rect x={186} y={30 + i * 46} width={126} height={36} rx={10} fill={r.c} />
          <T x={249} y={48 + i * 46} size={13}>{r.t}</T>
        </g>
      ))}
    </Svg>
  );
}

function Volumes3d() {
  return (
    <Svg h={190} label="Volumes: cylinder pi r squared h, cone one third pi r squared h, sphere four thirds pi r cubed">
      {/* cylinder */}
      <path d="M 20 40 L 20 120 A 33 10 0 0 0 86 120 L 86 40" fill={C.blueSoft} stroke={C.blue} strokeWidth={2.5} />
      <ellipse cx={53} cy={40} rx={33} ry={10} fill="#fff" stroke={C.blue} strokeWidth={2.5} />
      <line x1={53} y1={40} x2={86} y2={40} stroke={C.ink} strokeWidth={1.5} />
      <T x={70} y={33} size={10}>r</T>
      <T x={94} y={82} size={10} anchor="start">h</T>
      {/* cone */}
      <path d="M 127 120 L 160 30 L 193 120" fill={C.orangeSoft} stroke={C.orange} strokeWidth={2.5} strokeLinejoin="round" />
      <ellipse cx={160} cy={120} rx={33} ry={10} fill={C.orangeSoft} stroke={C.orange} strokeWidth={2.5} />
      <line x1={160} y1={30} x2={160} y2={120} stroke={C.ink} strokeWidth={1.2} strokeDasharray="3 3" />
      <line x1={160} y1={120} x2={193} y2={120} stroke={C.ink} strokeWidth={1.5} />
      <T x={177} y={130} size={10}>r</T>
      <T x={166} y={80} size={10} anchor="start">h</T>
      {/* sphere */}
      <circle cx={267} cy={80} r={42} fill={C.greenSoft} stroke={C.green} strokeWidth={2.5} />
      <ellipse cx={267} cy={80} rx={42} ry={11} fill="none" stroke={C.green} strokeWidth={1.5} strokeDasharray="4 3" />
      <line x1={267} y1={80} x2={309} y2={80} stroke={C.ink} strokeWidth={1.5} />
      <T x={288} y={72} size={10}>r</T>
      <T x={53} y={154} size={12}>Cylinder</T>
      <T x={160} y={154} size={12}>Cone</T>
      <T x={267} y={154} size={12}>Sphere</T>
      <T x={53} y={176} size={13} fill={C.blue}>πr²h</T>
      <T x={160} y={176} size={13} fill={C.orange}>⅓πr²h</T>
      <T x={267} y={176} size={13} fill={C.green}>⁴⁄₃πr³</T>
    </Svg>
  );
}

function Transformations() {
  return (
    <Tiles
      label="The four transformations: translation slides by a vector, reflection flips in a mirror line, rotation turns about a centre, enlargement changes size by a scale factor"
      cols={2}
      h={210}
      items={[
        { e: '➡️', title: 'Translation', sub: 'slide by a vector', colour: C.blueSoft },
        { e: '🪞', title: 'Reflection', sub: 'flip in a mirror line', colour: C.purpleSoft },
        { e: '🔄', title: 'Rotation', sub: 'angle, direction, centre', colour: C.greenSoft },
        { e: '🔍', title: 'Enlargement', sub: 'scale factor, centre', colour: C.orangeSoft },
      ]}
    />
  );
}

function CircleTheorems() {
  const r = 34;
  const at = (cx: number, cy: number, deg: number) => [cx + r * Math.cos((deg * Math.PI) / 180), cy - r * Math.sin((deg * Math.PI) / 180)];
  const pt = (p: number[]) => `${p[0].toFixed(1)},${p[1].toFixed(1)}`;
  const panels = [
    { lines: ['Angle in a', 'semicircle', 'is 90°'] },
    { lines: ['Angle at centre', '= 2 × angle at', 'circumference'] },
    { lines: ['Cyclic quad:', 'opposite angles', 'add to 180°'] },
    { lines: ['Tangent meets', 'radius at 90°'] },
  ];
  return (
    <Svg h={200} label="Circle theorems: the angle in a semicircle is 90 degrees, the angle at the centre is twice the angle at the circumference, opposite angles in a cyclic quadrilateral add to 180 degrees, a tangent meets a radius at 90 degrees">
      {panels.map((p, i) => {
        const ox = 6 + (i % 2) * 157;
        const oy = 6 + Math.floor(i / 2) * 97;
        const cx = ox + 42;
        const cy = oy + 44;
        let inner = null;
        if (i === 0) {
          const P = at(cx, cy, 120);
          inner = (
            <g>
              <line x1={cx - r} y1={cy} x2={cx + r} y2={cy} stroke={C.ink} strokeWidth={1.5} />
              <polyline points={`${cx - r},${cy} ${pt(P)} ${cx + r},${cy}`} fill="none" stroke={C.purple} strokeWidth={2} />
              <T x={P[0] + 7} y={P[1] + 16} size={9} fill={C.red}>90°</T>
            </g>
          );
        } else if (i === 1) {
          const A = at(cx, cy, 215);
          const B = at(cx, cy, 325);
          const P = at(cx, cy, 90);
          inner = (
            <g>
              <polyline points={`${pt(A)} ${cx},${cy} ${pt(B)}`} fill="none" stroke={C.orange} strokeWidth={2} />
              <polyline points={`${pt(A)} ${pt(P)} ${pt(B)}`} fill="none" stroke={C.purple} strokeWidth={2} />
              <circle cx={cx} cy={cy} r={2.5} fill={C.ink} />
              <T x={cx} y={cy + 10} size={9} fill={C.orange}>2x</T>
              <T x={cx} y={P[1] + 14} size={9} fill={C.purple}>x</T>
            </g>
          );
        } else if (i === 2) {
          const Q = [100, 200, 290, 20].map((d) => at(cx, cy, d));
          inner = (
            <g>
              <polygon points={Q.map(pt).join(' ')} fill="none" stroke={C.purple} strokeWidth={2} />
              <T x={Q[0][0] + 2} y={Q[0][1] + 12} size={9} fill={C.red}>a</T>
              <T x={Q[2][0] - 1} y={Q[2][1] - 11} size={9} fill={C.red}>b</T>
            </g>
          );
        } else {
          inner = (
            <g>
              <line x1={cx} y1={cy} x2={cx} y2={cy + r} stroke={C.purple} strokeWidth={2} />
              <line x1={cx - 40} y1={cy + r} x2={cx + 40} y2={cy + r} stroke={C.orange} strokeWidth={2.5} />
              <path d={`M ${cx} ${cy + r - 8} L ${cx + 8} ${cy + r - 8} L ${cx + 8} ${cy + r}`} fill="none" stroke={C.ink} strokeWidth={1.3} />
              <circle cx={cx} cy={cy} r={2.5} fill={C.ink} />
            </g>
          );
        }
        return (
          <g key={i}>
            <rect x={ox} y={oy} width={151} height={91} rx={12} fill={C.soft} />
            <circle cx={cx} cy={cy} r={r} fill="#fff" stroke={C.muted} strokeWidth={1.5} />
            {inner}
            {p.lines.map((l, li) => (
              <T key={l} x={ox + 116} y={oy + 46 + (li - (p.lines.length - 1) / 2) * 13} size={9.5} weight={li === 0 ? 800 : 700}>{l}</T>
            ))}
          </g>
        );
      })}
    </Svg>
  );
}

function TreeDiagram() {
  const node = (x: number, y: number, red: boolean) => (
    <g>
      <circle cx={x} cy={y} r={10} fill={red ? C.red : C.blue} />
      <T x={x} y={y + 0.5} size={10} fill="#fff">{red ? 'R' : 'B'}</T>
    </g>
  );
  const branch = (x1: number, y1: number, x2: number, y2: number, p: string, above: boolean) => (
    <g>
      <line x1={x1} y1={y1} x2={x2 - 10} y2={y2} stroke={C.muted} strokeWidth={2} />
      <T x={(x1 + x2) / 2 - 4} y={(y1 + y2) / 2 + (above ? -10 : 10)} size={10.5} fill={C.purple}>{p}</T>
    </g>
  );
  const ends = [
    { y: 28, from: 58, red: true, p: '2/4', out: 'RR  6/20' },
    { y: 76, from: 58, red: false, p: '2/4', out: 'RB  6/20' },
    { y: 124, from: 142, red: true, p: '3/4', out: 'BR  6/20' },
    { y: 172, from: 142, red: false, p: '1/4', out: 'BB  2/20' },
  ];
  return (
    <Svg h={196} label="Tree diagram for 3 red and 2 blue balls taken without replacement. First ball red 3/5 or blue 2/5. Red then red 6/20, red then blue 6/20, blue then red 6/20, blue then blue 2/20">
      <circle cx={18} cy={100} r={4} fill={C.ink} />
      {branch(18, 100, 110, 58, '3/5', true)}
      {branch(18, 100, 110, 142, '2/5', false)}
      {node(110, 58, true)}
      {node(110, 142, false)}
      {ends.map((e) => (
        <g key={e.out}>
          {branch(120, e.from, 200, e.y, e.p, e.y < e.from)}
          {node(200, e.y, e.red)}
          <T x={218} y={e.y} size={11.5} anchor="start">{e.out}</T>
        </g>
      ))}
      <T x={110} y={100} size={9.5} weight={700} fill={C.muted}>1st ball</T>
      <T x={200} y={100} size={9.5} weight={700} fill={C.muted}>2nd ball</T>
      <T x={234} y={100} size={9.5} weight={700} fill={C.green} anchor="start">multiply along →</T>
    </Svg>
  );
}

function VennSets() {
  return (
    <Svg h={190} label="Venn diagram of 30 pupils: 13 football only, 5 both, 7 tennis only and 5 neither">
      <rect x={8} y={8} width={304} height={170} rx={12} fill={C.soft} stroke={C.line} strokeWidth={2} />
      <T x={18} y={24} size={13} anchor="start">ξ = 30</T>
      <circle cx={125} cy={98} r={62} fill={C.purple} fillOpacity={0.18} stroke={C.purple} strokeWidth={2.5} />
      <circle cx={197} cy={98} r={62} fill={C.orange} fillOpacity={0.2} stroke={C.orange} strokeWidth={2.5} />
      <T x={100} y={28} size={11} fill={C.purple}>Football (18)</T>
      <T x={222} y={28} size={11} fill={C.orange}>Tennis (12)</T>
      <T x={98} y={98} size={20}>13</T>
      <T x={161} y={98} size={20}>5</T>
      <T x={224} y={98} size={20}>7</T>
      <T x={286} y={160} size={20}>5</T>
      <T x={286} y={140} size={9.5} weight={700} fill={C.muted}>neither</T>
      <T x={161} y={120} size={9.5} weight={700} fill={C.muted}>both</T>
    </Svg>
  );
}

function FreqTable() {
  const rows = [['0', '4', '0'], ['1', '3', '3'], ['2', '2', '4'], ['3', '1', '3']];
  const cols = [40, 130, 220];
  const y0 = 8;
  const rh = 25;
  return (
    <Svg h={200} label="Frequency table: goals 0, 1, 2, 3 with frequencies 4, 3, 2, 1. Goals times frequency gives 0, 3, 4, 3, totalling 10 goals from 10 matches, so the mean is 1">
      <rect x={18} y={y0} width={284} height={rh} rx={8} fill={C.purpleSoft} />
      {['Goals', 'Frequency', 'Goals × freq'].map((h, i) => <T key={h} x={cols[i] + 40} y={y0 + rh / 2} size={11.5}>{h}</T>)}
      {rows.map((r, ri) => (
        <g key={ri}>
          <line x1={18} y1={y0 + rh * (ri + 1)} x2={302} y2={y0 + rh * (ri + 1)} stroke={C.line} strokeWidth={1.5} />
          {r.map((v, ci) => <T key={ci} x={cols[ci] + 40} y={y0 + rh * (ri + 1.5)} size={13} weight={ci === 2 ? 800 : 700} fill={ci === 2 ? C.purple : C.ink}>{v}</T>)}
        </g>
      ))}
      <rect x={18} y={y0 + rh * 5} width={284} height={rh} rx={8} fill={C.goldSoft} />
      <T x={80} y={y0 + rh * 5.5} size={11.5}>Total</T>
      <T x={170} y={y0 + rh * 5.5} size={13}>10</T>
      <T x={260} y={y0 + rh * 5.5} size={13} fill={C.purple}>10</T>
      <T x={160} y={180} size={14} fill={C.green}>Mean = 10 ÷ 10 = 1 goal</T>
    </Svg>
  );
}

function Scatter() {
  const pos = [[10, 20], [18, 28], [25, 30], [32, 45], [40, 44], [48, 58], [56, 60], [64, 72], [72, 76], [80, 86]];
  const none = [[12, 60], [20, 25], [28, 80], [36, 45], [44, 15], [52, 70], [60, 35], [68, 85], [76, 50], [84, 22]];
  const panels = [
    { t: 'Positive', pts: pos, fit: [6, 16, 88, 90] },
    { t: 'Negative', pts: pos.map(([x, y]) => [x, 100 - y]), fit: [6, 84, 88, 10] },
    { t: 'None', pts: none },
  ];
  return (
    <Svg h={170} label="Scatter graphs: positive correlation slopes up, negative correlation slopes down, no correlation has no pattern. Lines of best fit drawn through the first two">
      {panels.map((p, i) => {
        const ox = 8 + i * 104;
        const X = (x: number) => ox + 6 + x * 0.9;
        const Y = (y: number) => 130 - y * 1.1;
        return (
          <g key={p.t}>
            <line x1={ox + 4} y1={132} x2={ox + 96} y2={132} stroke={C.muted} strokeWidth={1.5} />
            <line x1={ox + 4} y1={132} x2={ox + 4} y2={14} stroke={C.muted} strokeWidth={1.5} />
            {p.fit && <line x1={X(p.fit[0])} y1={Y(p.fit[1])} x2={X(p.fit[2])} y2={Y(p.fit[3])} stroke={C.orange} strokeWidth={2.5} strokeDasharray="6 4" />}
            {p.pts.map(([x, y], k) => <circle key={k} cx={X(x)} cy={Y(y)} r={3.5} fill={C.purple} />)}
            <T x={ox + 50} y={152} size={12}>{p.t}</T>
          </g>
        );
      })}
    </Svg>
  );
}

export const gcseMathsDiagrams: Record<string, () => JSX.Element> = {
  'index-laws': IndexLaws,
  bounds: Bounds,
  recurring: Recurring,
  'quadratic-roots': QuadraticRoots,
  'simultaneous-graph': SimultaneousGraph,
  'inequality-line': InequalityLine,
  'parallel-perp': ParallelPerp,
  'compound-interest': CompoundInterest,
  'proportion-graphs': ProportionGraphs,
  sohcahtoa: Sohcahtoa,
  'volumes-3d': Volumes3d,
  transformations: Transformations,
  'circle-theorems': CircleTheorems,
  'tree-diagram': TreeDiagram,
  'venn-sets': VennSets,
  'freq-table': FreqTable,
  scatter: Scatter,
};
