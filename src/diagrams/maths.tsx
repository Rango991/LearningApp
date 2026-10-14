import { Box, C, CurveArrow, E, Svg, T, Tiles } from './kit';

// Maths lesson diagrams.

function NumberLine() {
  const step = 19;
  const at = (n: number) => 18 + (n + 5) * step;
  return (
    <Svg h={160} label="Number line: 5 plus negative 3 means move 3 left to 2; 5 minus negative 3 means move 3 right to 8">
      <line x1={at(-5)} y1={96} x2={at(10)} y2={96} stroke={C.ink} strokeWidth={2.5} />
      {Array.from({ length: 16 }, (_, i) => i - 5).map((n) => (
        <g key={n}>
          <line x1={at(n)} y1={90} x2={at(n)} y2={102} stroke={C.ink} strokeWidth={n === 0 ? 2.5 : 1.5} />
          <T x={at(n)} y={116} size={10} fill={n < 0 ? C.red : n === 0 ? C.ink : C.blue}>{n < 0 ? `−${-n}` : n}</T>
        </g>
      ))}
      <circle cx={at(5)} cy={96} r={5} fill={C.ink} />
      <CurveArrow d={`M${at(5) - 2} 86 Q${at(3.5)} 58 ${at(2) + 3} 86`} color={C.red} />
      <T x={at(3.5)} y={46} size={11} fill={C.red}>5 + (−3) = 2</T>
      <T x={at(3.5)} y={60} size={9} weight={700} fill={C.red}>← 3 left</T>
      <CurveArrow d={`M${at(5) + 2} 86 Q${at(6.5)} 58 ${at(8) - 3} 86`} color={C.blue} />
      <T x={at(6.5)} y={30} size={11} fill={C.blue}>5 − (−3) = 8</T>
      <T x={at(6.5)} y={44} size={9} weight={700} fill={C.blue}>3 right →</T>
      <T x={160} y={140} size={10} weight={700} fill={C.muted}>adding a negative = subtracting · subtracting a negative = adding</T>
    </Svg>
  );
}

function SignRules() {
  const cell = (x: number, y: number, t: string, fill: string) => (
    <g key={`${x}${y}`}>
      <rect x={x} y={y} width={60} height={40} rx={8} fill={fill} />
      <T x={x + 30} y={y + 20} size={18}>{t}</T>
    </g>
  );
  return (
    <Svg h={170} label="Sign rules for multiplying and dividing: same signs give positive, different signs give negative">
      <T x={60} y={20} size={11} fill={C.muted}>×  ÷</T>
      <T x={120} y={20} size={16} fill={C.blue}>+</T>
      <T x={186} y={20} size={16} fill={C.red}>−</T>
      <T x={60} y={56} size={16} fill={C.blue}>+</T>
      <T x={60} y={102} size={16} fill={C.red}>−</T>
      {cell(90, 36, '+', C.greenSoft)}
      {cell(156, 36, '−', C.redSoft)}
      {cell(90, 82, '−', C.redSoft)}
      {cell(156, 82, '+', C.greenSoft)}
      <T x={234} y={58} size={10.5} anchor="start">same signs</T>
      <T x={234} y={72} size={10.5} anchor="start" fill="#178a60">→ positive</T>
      <T x={234} y={98} size={10.5} anchor="start">different</T>
      <T x={234} y={112} size={10.5} anchor="start" fill="#c0392b">→ negative</T>
      <T x={160} y={148} size={12}>(−4) × (−3) = 12 · (−4) × 3 = −12</T>
    </Svg>
  );
}

function Bidmas() {
  const levels = [
    { t: 'B', n: 'Brackets', c: '#8b5cf6' },
    { t: 'I', n: 'Indices (powers)', c: '#6366f1' },
    { t: 'D M', n: 'Divide / Multiply', c: '#3b82f6' },
    { t: 'A S', n: 'Add / Subtract', c: '#06b6d4' },
  ];
  return (
    <Svg label="BIDMAS: brackets, indices, division and multiplication, addition and subtraction">
      {levels.map((l, i) => (
        <g key={l.t}>
          <rect x={10} y={12 + i * 34} width={186} height={28} rx={8} fill={l.c} />
          <T x={22} y={26 + i * 34} size={13} fill="#fff" anchor="start">{l.t}</T>
          <T x={64} y={26 + i * 34} size={10.5} fill="#fff" anchor="start">{l.n}</T>
        </g>
      ))}
      <T x={100} y={160} size={9.5} weight={700} fill={C.muted}>top first · D/M and A/S go left to right</T>
      <Box x={204} y={20} w={110} h={120} fill={C.soft} />
      <T x={259} y={40} size={12}>2 + 3 × 4</T>
      <T x={259} y={62} size={10} fill={C.muted}>× first:</T>
      <T x={259} y={82} size={12}>2 + 12</T>
      <T x={259} y={110} size={18} fill={C.green}>= 14 ✓</T>
      <T x={259} y={130} size={9.5} fill={C.red}>not 20</T>
    </Svg>
  );
}

function FactorTree() {
  const node = (x: number, y: number, n: number | string, prime = false) => (
    <g key={`${x}-${y}`}>
      <circle cx={x} cy={y} r={15} fill={prime ? C.goldSoft : C.soft} stroke={prime ? C.gold : C.line} strokeWidth={2.5} />
      <T x={x} y={y} size={12}>{n}</T>
    </g>
  );
  return (
    <Svg label="Factor tree for 60: 60 = 2 × 2 × 3 × 5">
      <path d="M90 32 L60 72 M90 32 L120 72 M120 72 L95 112 M120 72 L145 112 M145 112 L125 152 M145 112 L165 152" stroke={C.muted} strokeWidth={2} />
      {node(90, 28, 60)}
      {node(60, 72, 2, true)}
      {node(120, 72, 30)}
      {node(95, 112, 2, true)}
      {node(145, 112, 15)}
      {node(125, 152, 3, true)}
      {node(165, 152, 5, true)}
      <T x={250} y={60} size={12}>circle the primes:</T>
      <T x={250} y={90} size={14}>60 = 2 × 2 × 3 × 5</T>
      <T x={250} y={118} size={16} fill={C.purple}>= 2² × 3 × 5</T>
      <T x={250} y={150} size={9.5} weight={700} fill={C.muted}>keep splitting until</T>
      <T x={250} y={163} size={9.5} weight={700} fill={C.muted}>every branch is prime</T>
    </Svg>
  );
}

function HcfVenn() {
  return (
    <Svg label="Venn diagram of prime factors: 12 = 2 × 2 × 3 and 18 = 2 × 3 × 3; HCF = 6, LCM = 36">
      <circle cx={120} cy={92} r={70} fill={C.blue} opacity={0.15} stroke={C.blue} strokeWidth={2} />
      <circle cx={200} cy={92} r={70} fill={C.orange} opacity={0.15} stroke={C.orange} strokeWidth={2} />
      <T x={92} y={20} size={12} fill={C.blue}>12</T>
      <T x={228} y={20} size={12} fill={C.orange}>18</T>
      <T x={90} y={92} size={16}>2</T>
      <T x={160} y={80} size={16}>2</T>
      <T x={160} y={106} size={16}>3</T>
      <T x={230} y={92} size={16}>3</T>
      <T x={160} y={176} size={11}>HCF = middle: 2 × 3 = 6</T>
      <T x={160} y={192} size={11}>LCM = everything: 2 × 2 × 3 × 3 = 36</T>
    </Svg>
  );
}

function Powers() {
  return (
    <Svg h={170} label="Squares and cubes: 3 squared is 9 small squares; 2 cubed is 8 small cubes">
      {Array.from({ length: 9 }, (_, i) => <rect key={i} x={24 + (i % 3) * 22} y={30 + Math.floor(i / 3) * 22} width={20} height={20} rx={3} fill={C.purple} opacity={0.85} />)}
      <T x={57} y={118} size={14}>3² = 9</T>
      <T x={57} y={136} size={9.5} weight={700} fill={C.muted}>3 × 3</T>
      {[0, 1].map((layer) => [0, 1, 2, 3].map((i) => (
        <rect key={`${layer}${i}`} x={130 + layer * 50 + (i % 2) * 20} y={40 + Math.floor(i / 2) * 20} width={18} height={18} rx={3} fill={layer ? '#ffb27a' : C.orange} />
      )))}
      <T x={150} y={92} size={9} weight={700} fill={C.muted}>layer 1</T>
      <T x={200} y={92} size={9} weight={700} fill={C.muted}>layer 2</T>
      <T x={166} y={118} size={14}>2³ = 8</T>
      <T x={166} y={136} size={9.5} weight={700} fill={C.muted}>2 × 2 × 2</T>
      <T x={262} y={46} size={12}>√9 = 3</T>
      <T x={262} y={70} size={12}>∛8 = 2</T>
      <T x={262} y={104} size={10} fill={C.muted}>roots undo</T>
      <T x={262} y={118} size={10} fill={C.muted}>powers</T>
      <T x={160} y={160} size={10} weight={700} fill={C.purple}>5² × 5³ = 5⁵ (add powers when multiplying)</T>
    </Svg>
  );
}

function StandardForm() {
  return (
    <Svg h={170} label="Standard form: 4500 = 4.5 × 10³ because the decimal point moves 3 places">
      <T x={160} y={22} size={12}>A × 10ⁿ, where 1 ≤ A {'<'} 10</T>
      {['4', '5', '0', '0'].map((d, i) => <Box key={i} x={70 + i * 34} y={44} w={30} h={36} fill={C.soft} size={18}>{d}</Box>)}
      <circle cx={204} cy={74} r={3.5} fill={C.red} />
      <circle cx={102} cy={74} r={3.5} fill={C.blue} />
      <path d="M204 86 Q186 104 170 86 M170 86 Q152 104 136 86 M136 86 Q120 104 104 86" fill="none" stroke={C.red} strokeWidth={2} />
      <T x={154} y={108} size={10} fill={C.red}>3 jumps</T>
      <T x={160} y={134} size={16}>4500 = 4.5 × 10³</T>
      <T x={160} y={158} size={11} fill={C.muted}>0.0062 = 6.2 × 10⁻³ (small number → negative power)</T>
    </Svg>
  );
}

function FractionBar({ y, parts, filled, colour, label }: { y: number; parts: number; filled: number; colour: string; label: string }) {
  const w = 200 / parts;
  return (
    <g>
      {Array.from({ length: parts }, (_, i) => (
        <rect key={i} x={60 + i * w} y={y} width={w} height={26} fill={i < filled ? colour : '#fff'} stroke={C.ink} strokeWidth={1.5} />
      ))}
      <T x={34} y={y + 13} size={13}>{label}</T>
    </g>
  );
}

function FractionAdd() {
  return (
    <Svg label="Fraction bars: one third is two sixths, so one third plus one sixth is three sixths, which is one half">
      <FractionBar y={14} parts={3} filled={1} colour={C.blue} label="1/3" />
      <FractionBar y={50} parts={6} filled={2} colour={C.blue} label="= 2/6" />
      <FractionBar y={86} parts={6} filled={1} colour={C.orange} label="+ 1/6" />
      <g>
        {Array.from({ length: 6 }, (_, i) => (
          <rect key={i} x={60 + (i * 200) / 6} y={130} width={200 / 6} height={26} fill={i < 2 ? C.blue : i < 3 ? C.orange : '#fff'} stroke={C.ink} strokeWidth={1.5} />
        ))}
        <T x={34} y={143} size={13}>= 3/6</T>
      </g>
      <T x={290} y={143} size={14} fill={C.green}>= ½</T>
      <T x={160} y={186} size={10} weight={700} fill={C.muted}>make the bottoms the same, then add the tops</T>
    </Svg>
  );
}

function FractionOf() {
  return (
    <Svg h={150} label="Two fifths of 40: split 40 into 5 equal parts of 8, take 2 parts, which is 16">
      {Array.from({ length: 5 }, (_, i) => (
        <g key={i}>
          <rect x={20 + i * 56} y={30} width={56} height={40} fill={i < 2 ? C.purple : C.soft} stroke={C.ink} strokeWidth={1.5} />
          <T x={48 + i * 56} y={50} size={14} fill={i < 2 ? '#fff' : C.ink}>8</T>
        </g>
      ))}
      <path d="M20 22 L20 14 L300 14 L300 22" fill="none" stroke={C.muted} strokeWidth={1.5} />
      <T x={160} y={8} size={11} fill={C.muted}>40</T>
      <T x={76} y={88} size={11} fill={C.purple}>2 parts = 16</T>
      <T x={160} y={118} size={13}>40 ÷ 5 = 8, then 8 × 2 = 16</T>
      <T x={160} y={138} size={10} weight={700} fill={C.muted}>divide by the bottom, times by the top</T>
    </Svg>
  );
}

function FdpStrip() {
  const rows = [
    { f: '1/2', d: '0.5', p: '50%', v: 0.5 },
    { f: '1/4', d: '0.25', p: '25%', v: 0.25 },
    { f: '3/4', d: '0.75', p: '75%', v: 0.75 },
    { f: '1/5', d: '0.2', p: '20%', v: 0.2 },
    { f: '1/10', d: '0.1', p: '10%', v: 0.1 },
  ];
  return (
    <Svg label="Fractions, decimals and percentages that are equal">
      <T x={50} y={14} size={11} fill={C.purple}>Fraction</T>
      <T x={110} y={14} size={11} fill={C.blue}>Decimal</T>
      <T x={170} y={14} size={11} fill={C.orange}>Percent</T>
      {rows.map((r, i) => {
        const y = 36 + i * 32;
        return (
          <g key={r.f}>
            <T x={50} y={y} size={14} fill={C.purple}>{r.f}</T>
            <T x={110} y={y} size={14} fill={C.blue}>{r.d}</T>
            <T x={170} y={y} size={14} fill={C.orange}>{r.p}</T>
            <rect x={210} y={y - 9} width={100} height={18} rx={4} fill={C.soft} />
            <rect x={210} y={y - 9} width={100 * r.v} height={18} rx={4} fill={C.green} />
          </g>
        );
      })}
      <T x={160} y={194} size={9.5} weight={700} fill={C.muted}>decimal × 100 = percent · top ÷ bottom = decimal</T>
    </Svg>
  );
}

function PercentBar() {
  return (
    <Svg h={160} label="Percentages of 80: 10% is 8, 5% is 4, so 15% is 12">
      {Array.from({ length: 10 }, (_, i) => (
        <g key={i}>
          <rect x={10 + i * 30} y={30} width={30} height={34} fill={i === 0 ? C.blue : C.soft} stroke={C.ink} strokeWidth={1.2} />
          <T x={25 + i * 30} y={47} size={11} fill={i === 0 ? '#fff' : C.muted}>8</T>
        </g>
      ))}
      <rect x={10} y={68} width={15} height={14} fill={C.orange} />
      <T x={180} y={16} size={11} fill={C.muted}>80 split into ten 10% blocks</T>
      <T x={50} y={75} size={10} fill={C.orange} anchor="start">5% = half a block = 4</T>
      <T x={25} y={22} size={10} fill={C.blue}>10%</T>
      <T x={160} y={106} size={13}>10% = 8 · 5% = 4</T>
      <T x={160} y={128} size={15} fill={C.green}>15% = 8 + 4 = 12</T>
      <T x={160} y={150} size={10} weight={700} fill={C.muted}>or: 0.15 × 80 = 12</T>
    </Svg>
  );
}

function Multipliers() {
  return (
    <Svg h={170} label="Percentage multipliers: a 10% increase is times 1.10; a 25% decrease is times 0.75">
      <Box x={10} y={16} w={140} h={66} fill={C.greenSoft} stroke="#9ad9bf" />
      <T x={80} y={34} size={11}>10% increase</T>
      <T x={80} y={60} size={18} fill="#178a60">× 1.10</T>
      <Box x={170} y={16} w={140} h={66} fill={C.redSoft} stroke="#f3a5a5" />
      <T x={240} y={34} size={11}>25% decrease</T>
      <T x={240} y={60} size={18} fill="#c0392b">× 0.75</T>
      <T x={80} y={100} size={10.5} fill={C.muted}>100% + 10% = 110%</T>
      <T x={240} y={100} size={10.5} fill={C.muted}>100% − 25% = 75%</T>
      <rect x={20} y={118} width={280} height={44} rx={10} fill={C.soft} stroke={C.line} strokeWidth={1.5} />
      <T x={160} y={132} size={11}>percentage change =</T>
      <T x={160} y={150} size={12}>change ÷ original × 100</T>
    </Svg>
  );
}

function RatioBar() {
  return (
    <Svg h={170} label="Sharing £30 in the ratio 2 to 3: 5 parts of £6, so £12 and £18">
      {Array.from({ length: 5 }, (_, i) => (
        <g key={i}>
          <rect x={20 + i * 56} y={40} width={56} height={40} fill={i < 2 ? C.blue : C.orange} stroke="#fff" strokeWidth={2} />
          <T x={48 + i * 56} y={60} size={13} fill="#fff">£6</T>
        </g>
      ))}
      <T x={76} y={26} size={12} fill={C.blue}>2 parts</T>
      <T x={216} y={26} size={12} fill={C.orange}>3 parts</T>
      <T x={76} y={96} size={14} fill={C.blue}>£12</T>
      <T x={216} y={96} size={14} fill={C.orange}>£18</T>
      <T x={160} y={128} size={12}>2 + 3 = 5 parts · £30 ÷ 5 = £6 per part</T>
      <T x={160} y={152} size={10} weight={700} fill={C.muted}>check: £12 + £18 = £30 ✓</T>
    </Svg>
  );
}

function LikeTerms() {
  const tile = (x: number, y: number, t: string, c: string) => (
    <g key={`${x}${y}`}>
      <rect x={x} y={y} width={30} height={30} rx={6} fill={c} />
      <T x={x + 15} y={y + 15} size={13} fill="#fff">{t}</T>
    </g>
  );
  return (
    <Svg h={160} label="Collecting like terms: x tiles and y tiles are counted separately; 4x + 3y − x + y = 3x + 4y">
      <T x={160} y={14} size={12}>4x + 3y − x + y</T>
      {[0, 1, 2].map((i) => tile(30 + i * 34, 34, 'x', C.purple))}
      <g opacity={0.35}>{tile(132, 34, 'x', C.purple)}</g>
      <line x1={128} y1={30} x2={166} y2={68} stroke={C.red} strokeWidth={2.5} />
      {[0, 1, 2, 3].map((i) => tile(30 + i * 34, 80, 'y', C.orange))}
      <T x={240} y={50} size={14} fill={C.purple}>3x</T>
      <T x={240} y={96} size={14} fill={C.orange}>4y</T>
      <T x={160} y={134} size={16}>= 3x + 4y</T>
      <T x={160} y={152} size={9.5} weight={700} fill={C.muted}>only combine terms with exactly the same letters</T>
    </Svg>
  );
}

function ExpandGrid() {
  return (
    <Svg label="Expanding double brackets with a grid: (x + 2)(x + 3) = x² + 3x + 2x + 6 = x² + 5x + 6">
      <T x={108} y={16} size={13}>x</T>
      <T x={188} y={16} size={13}>+3</T>
      <T x={30} y={62} size={13}>x</T>
      <T x={30} y={122} size={13}>+2</T>
      <Box x={60} y={30} w={96} h={62} fill={C.purpleSoft} stroke={C.purple} size={15}>x²</Box>
      <Box x={156} y={30} w={64} h={62} fill={C.blueSoft} stroke={C.blue} size={15}>3x</Box>
      <Box x={60} y={92} w={96} h={56} fill={C.blueSoft} stroke={C.blue} size={15}>2x</Box>
      <Box x={156} y={92} w={64} h={56} fill={C.goldSoft} stroke={C.gold} size={15}>6</Box>
      <T x={270} y={60} size={11} fill={C.muted}>add them up:</T>
      <T x={270} y={84} size={12}>x² + 3x</T>
      <T x={270} y={102} size={12}>+ 2x + 6</T>
      <T x={270} y={128} size={13} fill={C.green}>= x² + 5x + 6</T>
      <T x={160} y={180} size={10} weight={700} fill={C.muted}>3(x + 4) = 3x + 12: multiply everything inside</T>
    </Svg>
  );
}

function Balance() {
  return (
    <Svg label="Solving 2x + 5 = 17 like a balance: take 5 off both sides, then halve both sides">
      <path d="M160 70 L160 150" stroke={C.muted} strokeWidth={5} />
      <path d="M130 160 L190 160 L160 140 Z" fill={C.muted} />
      <line x1={40} y1={70} x2={280} y2={70} stroke={C.ink} strokeWidth={5} strokeLinecap="round" />
      <rect x={52} y={36} width={34} height={30} rx={6} fill={C.purple} />
      <T x={69} y={51} size={13} fill="#fff">x</T>
      <rect x={90} y={36} width={34} height={30} rx={6} fill={C.purple} />
      <T x={107} y={51} size={13} fill="#fff">x</T>
      <rect x={128} y={44} width={22} height={22} rx={4} fill={C.gold} />
      <T x={139} y={55} size={11}>5</T>
      <rect x={196} y={36} width={70} height={30} rx={6} fill={C.gold} />
      <T x={231} y={51} size={13}>17</T>
      <T x={100} y={92} size={12}>2x + 5</T>
      <T x={231} y={92} size={12}>17</T>
      <T x={160} y={176} size={11}>− 5 both sides: 2x = 12 · ÷ 2: x = 6</T>
      <T x={160} y={194} size={10} weight={700} fill={C.muted}>whatever you do to one side, do to the other</T>
    </Svg>
  );
}

function SequencePattern() {
  return (
    <Svg h={170} label="A linear sequence 3, 7, 11, 15 goes up by 4 each time, so the nth term is 4n minus 1">
      {[3, 7, 11, 15].map((v, i) => (
        <g key={v}>
          <Box x={20 + i * 76} y={30} w={50} h={44} fill={C.soft} size={18}>{v}</Box>
          <T x={45 + i * 76} y={16} size={10} fill={C.muted}>n = {i + 1}</T>
          {i < 3 && <CurveArrow d={`M${62 + i * 76} 80 Q${83 + i * 76} 102 ${104 + i * 76} 80`} color={C.green} width={2} />}
          {i < 3 && <T x={83 + i * 76} y={106} size={11} fill={C.green}>+4</T>}
        </g>
      ))}
      <T x={160} y={134} size={13}>goes up by 4 → 4n, then 4 × 1 − 1 = 3</T>
      <T x={160} y={158} size={16} fill={C.purple}>nth term = 4n − 1</T>
    </Svg>
  );
}

function SquareNumbers() {
  return (
    <Svg h={160} label="Square numbers as dot squares: 1, 4, 9, 16">
      {[1, 2, 3, 4].map((n, k) => {
        const x0 = 20 + [0, 30, 82, 152][k];
        return (
          <g key={n}>
            {Array.from({ length: n * n }, (_, i) => <circle key={i} cx={x0 + (i % n) * 14} cy={30 + Math.floor(i / n) * 14} r={5} fill={C.purple} />)}
            <T x={x0 + (n - 1) * 7} y={100} size={14}>{n * n}</T>
          </g>
        );
      })}
      <T x={160} y={126} size={11} fill={C.muted}>square numbers: 1, 4, 9, 16, 25…</T>
      <T x={160} y={148} size={11} fill={C.muted}>Fibonacci: 1, 1, 2, 3, 5, 8, 13 (add the last two)</T>
    </Svg>
  );
}

function LineGraph() {
  const ox = 70;
  const oy = 170;
  const s = 15;
  const pt = (x: number, y: number) => `${ox + x * s},${oy - y * s}`;
  return (
    <Svg label="Graph of y = 2x + 3: it crosses the y-axis at 3 and goes up 2 for every 1 across">
      <line x1={ox - 40} y1={oy} x2={ox + 6 * s} y2={oy} stroke={C.ink} strokeWidth={1.5} />
      <line x1={ox} y1={oy + 10} x2={ox} y2={10} stroke={C.ink} strokeWidth={1.5} />
      {Array.from({ length: 6 }, (_, i) => <T key={i} x={ox + (i + 1) * s} y={oy + 10} size={8.5} fill={C.muted}>{i + 1}</T>)}
      {[3, 6, 9].map((v) => <T key={v} x={ox - 8} y={oy - v * s} size={8.5} fill={C.muted}>{v}</T>)}
      <polyline points={`${pt(-1.5, 0)} ${pt(3.5, 10)}`} fill="none" stroke={C.purple} strokeWidth={3.5} />
      <circle cx={ox} cy={oy - 3 * s} r={5} fill={C.orange} />
      <polyline points={`${pt(1, 5)} ${pt(2, 5)} ${pt(2, 7)}`} fill="none" stroke={C.green} strokeWidth={2.5} strokeDasharray="4 3" />
      <T x={ox + 1.5 * s} y={oy - 4.4 * s} size={9.5} fill={C.green}>1</T>
      <T x={ox + 2.5 * s} y={oy - 6 * s} size={9.5} fill={C.green}>2</T>
      <T x={245} y={30} size={15} fill={C.purple}>y = 2x + 3</T>
      <T x={245} y={64} size={11} fill={C.green}>m = 2: gradient</T>
      <T x={245} y={80} size={9.5} weight={700} fill={C.muted}>up 2 for every 1 across</T>
      <T x={245} y={110} size={11} fill={C.orange}>c = 3: y-intercept</T>
      <T x={245} y={126} size={9.5} weight={700} fill={C.muted}>crosses the y-axis at 3</T>
    </Svg>
  );
}

function AngleRules() {
  return (
    <Svg label="Angle rules: straight line 180, around a point 360, triangle 180, quadrilateral 360">
      {/* straight line */}
      <line x1={14} y1={70} x2={140} y2={70} stroke={C.ink} strokeWidth={2.5} />
      <line x1={77} y1={70} x2={112} y2={26} stroke={C.ink} strokeWidth={2.5} />
      <T x={58} y={56} size={11} fill={C.blue}>125°</T>
      <T x={112} y={58} size={11} fill={C.red}>55°</T>
      <T x={77} y={90} size={10.5}>straight line = 180°</T>
      {/* point */}
      <g transform="translate(236 52)">
        {[0, 110, 220].map((a) => <line key={a} x1={0} y1={0} x2={38 * Math.cos((a * Math.PI) / 180)} y2={-38 * Math.sin((a * Math.PI) / 180)} stroke={C.ink} strokeWidth={2.5} />)}
      </g>
      <T x={236} y={102} size={10.5}>around a point = 360°</T>
      {/* triangle */}
      <path d="M20 180 L130 180 L60 120 Z" fill={C.purpleSoft} stroke={C.purple} strokeWidth={2.5} />
      <T x={38} y={172} size={10}>50°</T>
      <T x={110} y={172} size={10}>60°</T>
      <T x={62} y={138} size={10} fill={C.red}>70°</T>
      <T x={78} y={196} size={10.5}>triangle = 180°</T>
      {/* quadrilateral */}
      <path d="M190 124 L290 128 L280 180 L200 176 Z" fill={C.blueSoft} stroke={C.blue} strokeWidth={2.5} />
      <T x={240} y={152} size={11}>360°</T>
      <T x={240} y={196} size={10.5}>quadrilateral = 360°</T>
    </Svg>
  );
}

function ParallelAngles() {
  const Panel = ({ x, title, rule, colour, shape }: { x: number; title: string; rule: string; colour: string; shape: string }) => (
    <g>
      <rect x={x} y={6} width={100} height={188} rx={12} fill={C.soft} />
      <line x1={x + 8} y1={60} x2={x + 92} y2={60} stroke={C.ink} strokeWidth={2} />
      <line x1={x + 8} y1={120} x2={x + 92} y2={120} stroke={C.ink} strokeWidth={2} />
      <line x1={x + 30} y1={150} x2={x + 74} y2={30} stroke={C.ink} strokeWidth={2} />
      <path d={shape} fill="none" stroke={colour} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" opacity={0.8} />
      <T x={x + 50} y={164} size={11.5}>{title}</T>
      <T x={x + 50} y={180} size={10} fill={colour}>{rule}</T>
    </g>
  );
  return (
    <Svg label="Angles on parallel lines: alternate angles (Z) are equal, corresponding angles (F) are equal, co-interior angles (C) add to 180">
      <Panel x={4} title="Alternate (Z)" rule="equal" colour={C.purple} shape="M14 60 L67 60 L41 120 L96 120" />
      <Panel x={110} title="Corresponding (F)" rule="equal" colour={C.blue} shape="M184 34 L162 98 M166 60 L200 60 M151 120 L200 120" />
      <Panel x={216} title="Co-interior (C)" rule="add to 180°" colour={C.orange} shape="M300 60 L273 60 L251 120 L300 120" />
    </Svg>
  );
}

function AreaRectTri() {
  return (
    <Svg label="Area of a rectangle is length times width; area of a triangle is half base times height">
      <rect x={20} y={40} width={110} height={70} fill={C.blueSoft} stroke={C.blue} strokeWidth={2.5} />
      <T x={75} y={124} size={11}>8 cm</T>
      <T x={142} y={75} size={11} anchor="start">5 cm</T>
      <T x={75} y={75} size={12}>40 cm²</T>
      <T x={75} y={150} size={11}>length × width</T>
      <T x={75} y={168} size={10} weight={700} fill={C.muted}>perimeter: 8+5+8+5 = 26</T>
      <path d="M190 110 L300 110 L230 40 Z" fill={C.orangeSoft} stroke={C.orange} strokeWidth={2.5} />
      <line x1={230} y1={40} x2={230} y2={110} stroke={C.muted} strokeWidth={1.5} strokeDasharray="4 3" />
      <rect x={230} y={102} width={8} height={8} fill="none" stroke={C.muted} />
      <T x={245} y={124} size={11}>base 10</T>
      <T x={218} y={80} size={10} anchor="end">h 6</T>
      <T x={258} y={88} size={11}>30</T>
      <T x={245} y={150} size={11}>½ × base × height</T>
      <T x={245} y={168} size={10} weight={700} fill={C.muted}>½ × 10 × 6 = 30 cm²</T>
    </Svg>
  );
}

function AreaParaTrap() {
  return (
    <Svg label="Area of a parallelogram is base times height; area of a trapezium is half of a plus b, times height">
      <path d="M20 110 L120 110 L150 40 L50 40 Z" fill={C.greenSoft} stroke={C.green} strokeWidth={2.5} />
      <line x1={50} y1={40} x2={50} y2={110} stroke={C.muted} strokeWidth={1.5} strokeDasharray="4 3" />
      <T x={70} y={124} size={11}>base</T>
      <T x={40} y={75} size={10} anchor="end">h</T>
      <T x={85} y={150} size={11}>base × height</T>
      <path d="M190 110 L310 110 L280 40 L220 40 Z" fill={C.purpleSoft} stroke={C.purple} strokeWidth={2.5} />
      <line x1={220} y1={40} x2={220} y2={110} stroke={C.muted} strokeWidth={1.5} strokeDasharray="4 3" />
      <T x={250} y={30} size={11}>a</T>
      <T x={250} y={124} size={11}>b</T>
      <T x={212} y={75} size={10} anchor="end">h</T>
      <T x={250} y={150} size={11}>½ × (a + b) × h</T>
      <T x={160} y={180} size={10} weight={700} fill={C.muted}>height is always measured at right angles to the base</T>
    </Svg>
  );
}

function CircleParts() {
  return (
    <Svg label="Parts of a circle: radius, diameter, circumference; area = pi r squared, circumference = pi d">
      <circle cx={90} cy={100} r={70} fill={C.blueSoft} stroke={C.blue} strokeWidth={3} />
      <line x1={20} y1={100} x2={160} y2={100} stroke={C.purple} strokeWidth={2.5} />
      <line x1={90} y1={100} x2={139} y2={50} stroke={C.orange} strokeWidth={2.5} />
      <circle cx={90} cy={100} r={3.5} fill={C.ink} />
      <T x={60} y={112} size={10.5} fill={C.purple}>diameter</T>
      <T x={128} y={84} size={10.5} fill={C.orange}>radius</T>
      <T x={90} y={186} size={10.5} fill={C.blue}>circumference (all the way round)</T>
      <T x={245} y={40} size={12}>d = 2 × r</T>
      <T x={245} y={78} size={11} fill={C.muted}>circumference</T>
      <T x={245} y={96} size={15}>C = πd</T>
      <T x={245} y={128} size={11} fill={C.muted}>area</T>
      <T x={245} y={146} size={15}>A = πr²</T>
      <T x={245} y={172} size={10} fill={C.muted}>π ≈ 3.14</T>
    </Svg>
  );
}

function Pythagoras() {
  // Right triangle with sides 3, 4, 5 and squares on each side (scaled).
  const s = 16;
  const A = { x: 70, y: 150 };
  const B = { x: 70 + 4 * s, y: 150 };
  const Cc = { x: 70, y: 150 - 3 * s };
  return (
    <Svg label="Pythagoras: a squared plus b squared equals c squared; 9 + 16 = 25">
      <rect x={A.x} y={A.y} width={4 * s} height={4 * s} fill={C.blue} opacity={0.25} stroke={C.blue} transform={`translate(0 -${0}) `} />
      <rect x={A.x - 3 * s} y={Cc.y} width={3 * s} height={3 * s} fill={C.orange} opacity={0.3} stroke={C.orange} />
      <polygon points={`${Cc.x},${Cc.y} ${B.x},${B.y} ${B.x + 3 * s},${B.y - 4 * s} ${Cc.x + 3 * s},${Cc.y - 4 * s}`} fill={C.purple} opacity={0.22} stroke={C.purple} />
      <polygon points={`${A.x},${A.y} ${B.x},${B.y} ${Cc.x},${Cc.y}`} fill="#fff" stroke={C.ink} strokeWidth={2.5} />
      <rect x={A.x} y={A.y - 8} width={8} height={8} fill="none" stroke={C.ink} />
      <T x={A.x + 2 * s} y={A.y + 2 * s} size={13} fill={C.blue}>16</T>
      <T x={A.x - 1.5 * s} y={Cc.y + 1.5 * s} size={13} fill={C.orange}>9</T>
      <T x={B.x + 4} y={Cc.y - 6} size={13} fill={C.purple}>25</T>
      <T x={A.x + 2 * s} y={A.y - 8} size={10}>4</T>
      <T x={A.x + 8} y={A.y - 1.5 * s} size={10} anchor="start">3</T>
      <T x={A.x + 2.4 * s} y={A.y - 2 * s} size={10}>5</T>
      <T x={250} y={60} size={15}>a² + b² = c²</T>
      <T x={250} y={88} size={13}>9 + 16 = 25</T>
      <T x={250} y={114} size={13}>c = √25 = 5</T>
      <T x={250} y={150} size={9.5} weight={700} fill={C.muted}>c is the hypotenuse:</T>
      <T x={250} y={163} size={9.5} weight={700} fill={C.muted}>the longest side, opposite</T>
      <T x={250} y={176} size={9.5} weight={700} fill={C.muted}>the right angle</T>
    </Svg>
  );
}

function Cuboid() {
  return (
    <Svg h={170} label="Volume of a cuboid is length times width times height: 4 × 3 × 2 = 24 cubic centimetres">
      <path d="M40 60 L140 60 L140 130 L40 130 Z" fill={C.purple} opacity={0.75} />
      <path d="M40 60 L80 30 L180 30 L140 60 Z" fill="#b59cff" />
      <path d="M140 60 L180 30 L180 100 L140 130 Z" fill="#6a3de8" />
      <T x={90} y={146} size={11}>length 4 cm</T>
      <T x={186} y={76} size={11} anchor="start">height 2 cm</T>
      <T x={170} y={22} size={11} anchor="start">width 3 cm</T>
      <T x={250} y={110} size={13}>4 × 3 × 2</T>
      <T x={250} y={134} size={16} fill={C.green}>= 24 cm³</T>
      <T x={160} y={164} size={9.5} weight={700} fill={C.muted}>any prism: area of cross-section × length</T>
    </Svg>
  );
}

function UnitLadder() {
  return (
    <Tiles
      label="Unit conversions: 1 cm = 10 mm, 1 m = 100 cm, 1 km = 1000 m, 1 kg = 1000 g, 1 litre = 1000 ml, 1 m² = 10,000 cm²"
      cols={3}
      items={[
        { e: '📏', title: '1 cm = 10 mm' },
        { e: '📐', title: '1 m = 100 cm' },
        { e: '🛣️', title: '1 km = 1,000 m' },
        { e: '⚖️', title: '1 kg = 1,000 g' },
        { e: '🧃', title: '1 L = 1,000 ml', sub: '= 1,000 cm³' },
        { e: '🟩', title: '1 m² =', sub: '10,000 cm² (100 × 100)' },
      ]}
    />
  );
}

function Averages() {
  const data = [3, 5, 5, 7, 10];
  return (
    <Svg label="Averages of 3, 5, 5, 7, 10: mean 6, median 5, mode 5, range 7">
      {data.map((v, i) => (
        <g key={i}>
          <Box x={20 + i * 58} y={20} w={50} h={44} fill={i === 2 ? C.purpleSoft : C.soft} stroke={i === 2 ? C.purple : C.line} size={18}>{v}</Box>
        </g>
      ))}
      <T x={153} y={78} size={9.5} fill={C.purple}>middle</T>
      <rect x={10} y={96} width={146} height={42} rx={10} fill={C.soft} />
      <T x={83} y={110} size={11}>Mean = 30 ÷ 5</T>
      <T x={83} y={127} size={13} fill={C.green}>6</T>
      <rect x={164} y={96} width={146} height={42} rx={10} fill={C.soft} />
      <T x={237} y={110} size={11}>Median (middle)</T>
      <T x={237} y={127} size={13} fill={C.purple}>5</T>
      <rect x={10} y={146} width={146} height={42} rx={10} fill={C.soft} />
      <T x={83} y={160} size={11}>Mode (most common)</T>
      <T x={83} y={177} size={13} fill={C.orange}>5</T>
      <rect x={164} y={146} width={146} height={42} rx={10} fill={C.soft} />
      <T x={237} y={160} size={11}>Range = 10 − 3</T>
      <T x={237} y={177} size={13} fill={C.blue}>7</T>
    </Svg>
  );
}

function ProbabilityScale() {
  const at = (p: number) => 30 + p * 260;
  return (
    <Svg h={150} label="The probability scale from 0 (impossible) to 1 (certain)">
      <rect x={30} y={60} width={260} height={14} rx={7} fill="url(#pgrad)" />
      <defs>
        <linearGradient id="pgrad" x1="0" x2="1">
          <stop offset="0" stopColor="#ef4444" />
          <stop offset="0.5" stopColor="#facc15" />
          <stop offset="1" stopColor="#22c55e" />
        </linearGradient>
      </defs>
      {[0, 0.5, 1].map((p) => <T key={p} x={at(p)} y={90} size={12}>{p === 0.5 ? '½' : p}</T>)}
      <T x={at(0)} y={106} size={9.5} weight={700} fill={C.muted}>impossible</T>
      <T x={at(0.5)} y={106} size={9.5} weight={700} fill={C.muted}>even chance</T>
      <T x={at(1)} y={106} size={9.5} weight={700} fill={C.muted}>certain</T>
      <E e="🎲" x={at(1 / 6)} y={40} size={26} />
      <T x={at(1 / 6)} y={14} size={10}>roll a 6: 1/6</T>
      <E e="🪙" x={at(0.5)} y={40} size={26} />
      <T x={at(0.5) + 28} y={14} size={10}>heads: ½</T>
      <T x={160} y={134} size={11}>P(not A) = 1 − P(A)</T>
    </Svg>
  );
}

export const mathsDiagrams: Record<string, () => JSX.Element> = {
  'number-line': NumberLine,
  'sign-rules': SignRules,
  bidmas: Bidmas,
  'factor-tree': FactorTree,
  'hcf-venn': HcfVenn,
  powers: Powers,
  'standard-form': StandardForm,
  'fraction-add': FractionAdd,
  'fraction-of': FractionOf,
  'fdp-strip': FdpStrip,
  'percent-bar': PercentBar,
  multipliers: Multipliers,
  'ratio-bar': RatioBar,
  'like-terms': LikeTerms,
  'expand-grid': ExpandGrid,
  balance: Balance,
  'sequence-pattern': SequencePattern,
  'square-numbers': SquareNumbers,
  'line-graph': LineGraph,
  'angle-rules': AngleRules,
  'parallel-angles': ParallelAngles,
  'area-rect-tri': AreaRectTri,
  'area-para-trap': AreaParaTrap,
  'circle-parts': CircleParts,
  pythagoras: Pythagoras,
  cuboid: Cuboid,
  'unit-ladder': UnitLadder,
  averages: Averages,
  'probability-scale': ProbabilityScale,
};

