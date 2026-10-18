import { Arrow, Box, C, Chain, E, Svg, T, Tiles, TwoCol } from './kit';

// Diagrams for the Computing subject (content/computing.ts).

const MONO = 'ui-monospace, Consolas, monospace';

function Code({ x, y, children, size = 12, fill = C.ink, anchor = 'start' }: { x: number; y: number; children: string; size?: number; fill?: string; anchor?: 'start' | 'middle' | 'end' }) {
  return <text x={x} y={y} fontFamily={MONO} fontSize={size} fill={fill} textAnchor={anchor} dominantBaseline="middle" fontWeight={700}>{children}</text>;
}

// ---------- staying safe ----------

function PasswordStrength() {
  const rows = [
    { pw: 'sam2012', w: 50, label: 'weak: name + year', fill: C.red },
    { pw: 'Passw0rd!', w: 110, label: 'weak: too common', fill: C.orange },
    { pw: 'PurpleKettleRocket', w: 270, label: 'strong: three random words', fill: C.green },
  ];
  return (
    <Svg h={170} label="Password strength: a name and year is weak, a common word with symbols is still weak, and three random words joined together is strong">
      {rows.map((r, i) => {
        const y = 22 + i * 50;
        return (
          <g key={r.pw}>
            <Code x={20} y={y}>{r.pw}</Code>
            <rect x={20} y={y + 12} width={280} height={12} rx={6} fill={C.soft} />
            <rect x={20} y={y + 12} width={r.w} height={12} rx={6} fill={r.fill} />
            <T x={300} y={y} size={9.5} weight={700} anchor="end" fill={r.fill}>{r.label}</T>
          </g>
        );
      })}
    </Svg>
  );
}

function PhishingSigns() {
  return (
    <Tiles
      label="Warning signs of phishing: urgency, a prize that’s too good to be true, spelling mistakes, an odd sender address, requests for passwords, and unexpected links"
      items={[
        { e: '⏰', title: 'Urgency', sub: '“act now!”', colour: C.redSoft },
        { e: '🎁', title: 'Too good', sub: 'a prize you didn’t enter', colour: C.goldSoft },
        { e: '✏️', title: 'Mistakes', sub: 'spelling, odd grammar', colour: C.orangeSoft },
        { e: '📧', title: 'Odd sender', sub: 'strange address', colour: C.blueSoft },
        { e: '🔑', title: 'Asks for passwords', sub: 'real firms never do', colour: C.purpleSoft },
        { e: '🔗', title: 'Unexpected link', sub: 'don’t click it', colour: C.soft },
      ]}
    />
  );
}

function ReportSteps() {
  return (
    <Chain
      label="If you’re bullied online: don’t reply, screenshot the evidence, block and report, then tell a trusted adult"
      steps={[
        { t: '🤐 Don’t reply', fill: C.soft },
        { t: '📸 Screenshot the evidence', fill: C.blueSoft },
        { t: '🚫 Block and report', fill: C.orangeSoft },
        { t: '🗣️ Tell a trusted adult', fill: C.greenSoft },
      ]}
    />
  );
}

// ---------- binary & data ----------

function BinaryColumns() {
  const cols = [128, 64, 32, 16, 8, 4, 2, 1];
  const bits = [0, 0, 0, 0, 1, 1, 0, 1];
  return (
    <Svg h={160} label="Binary place values 128, 64, 32, 16, 8, 4, 2, 1. The byte 00001101 is 8 plus 4 plus 1, which is 13">
      {cols.map((c, i) => {
        const x = 14 + i * 37;
        const on = bits[i] === 1;
        return (
          <g key={c}>
            <rect x={x} y={20} width={34} height={30} rx={6} fill={C.purpleSoft} />
            <T x={x + 17} y={35} size={11} fill={C.purple}>{c}</T>
            <rect x={x} y={56} width={34} height={34} rx={6} fill={on ? C.gold : '#fff'} stroke={C.line} strokeWidth={2} />
            <T x={x + 17} y={73} size={16}>{String(bits[i])}</T>
          </g>
        );
      })}
      <T x={160} y={116} size={13}>8 + 4 + 1 = 13</T>
      <T x={160} y={140} size={10} weight={700} fill={C.muted}>each column is double the one to its right</T>
    </Svg>
  );
}

function BinaryAddition() {
  const col = (i: number) => 120 + i * 36;
  return (
    <Svg h={190} label="Binary addition: 0101 plus 0011 equals 1000, carrying 1 at each step">
      {['1', '1', '1', ''].map((c, i) => c && <T key={i} x={col(i)} y={22} size={11} fill={C.red}>{c}</T>)}
      {'0101'.split('').map((d, i) => <Code key={`a${i}`} x={col(i)} y={52} size={22} anchor="middle">{d}</Code>)}
      <Code x={col(0) - 36} y={88} size={22} anchor="middle" fill={C.muted}>+</Code>
      {'0011'.split('').map((d, i) => <Code key={`b${i}`} x={col(i)} y={88} size={22} anchor="middle">{d}</Code>)}
      <line x1={col(0) - 24} y1={110} x2={col(3) + 20} y2={110} stroke={C.ink} strokeWidth={2.5} />
      {'1000'.split('').map((d, i) => <Code key={`c${i}`} x={col(i)} y={132} size={22} anchor="middle" fill={C.purple}>{d}</Code>)}
      <T x={160} y={168} size={10.5} weight={700} fill={C.muted}>1 + 1 = 10: write 0, carry 1 (red)</T>
      <T x={160} y={184} size={10.5} weight={700} fill={C.muted}>5 + 3 = 8</T>
    </Svg>
  );
}

function PixelGrid() {
  const art = ['00111100', '01000010', '10100101', '10000001', '10100101', '10011001', '01000010', '00111100'];
  return (
    <Svg h={180} label="An 8 by 8 black-and-white smiley face made of pixels: each 1 is a black pixel and each 0 is white, so each row is one byte">
      {art.map((row, r) => row.split('').map((b, c) => (
        <rect key={`${r}-${c}`} x={20 + c * 18} y={14 + r * 18} width={17} height={17} fill={b === '1' ? C.ink : '#fff'} stroke={C.line} strokeWidth={1} />
      )))}
      {art.map((row, r) => <Code key={r} x={190} y={23 + r * 18} size={11} fill={r === 2 ? C.purple : C.muted}>{row}</Code>)}
      <T x={160} y={170} size={10} weight={700} fill={C.muted}>1 = black pixel, 0 = white: each row is one byte</T>
    </Svg>
  );
}

// ---------- algorithms & thinking ----------

function CompThinking() {
  return (
    <Tiles
      label="Computational thinking: decomposition, pattern recognition, abstraction and algorithms"
      items={[
        { e: '🧩', title: 'Decomposition', sub: 'break it down', colour: C.blueSoft },
        { e: '🔍', title: 'Patterns', sub: 'spot similarities', colour: C.greenSoft },
        { e: '🗺️', title: 'Abstraction', sub: 'ignore what doesn’t matter', colour: C.goldSoft },
        { e: '📝', title: 'Algorithm', sub: 'step-by-step plan', colour: C.purpleSoft },
      ]}
      cols={2}
    />
  );
}

function FlowchartSymbols() {
  return (
    <Svg h={210} label="A flowchart: start, input age, a decision asking if age is 13 or more, then output teen or child, then end">
      <rect x={120} y={4} width={80} height={24} rx={12} fill={C.greenSoft} stroke={C.green} strokeWidth={2} />
      <T x={160} y={16} size={10.5}>Start</T>
      <Arrow x1={160} y1={28} x2={160} y2={38} color={C.muted} width={2} />
      <polygon points="114,40 214,40 206,64 106,64" fill={C.blueSoft} stroke={C.blue} strokeWidth={2} />
      <T x={160} y={52} size={10.5}>Input age</T>
      <Arrow x1={160} y1={64} x2={160} y2={74} color={C.muted} width={2} />
      <polygon points="160,76 210,100 160,124 110,100" fill={C.goldSoft} stroke={C.gold} strokeWidth={2} />
      <T x={160} y={100} size={10}>age ≥ 13?</T>
      <path d="M110 100 H60 V140" fill="none" stroke={C.muted} strokeWidth={2} />
      <path d="M210 100 H260 V140" fill="none" stroke={C.muted} strokeWidth={2} />
      <T x={86} y={92} size={9.5} fill={C.red}>No</T>
      <T x={234} y={92} size={9.5} fill={C.green}>Yes</T>
      <polygon points="18,142 108,142 100,166 10,166" fill={C.blueSoft} stroke={C.blue} strokeWidth={2} />
      <T x={59} y={154} size={10}>Output “child”</T>
      <polygon points="218,142 308,142 300,166 210,166" fill={C.blueSoft} stroke={C.blue} strokeWidth={2} />
      <T x={259} y={154} size={10}>Output “teen”</T>
      <path d="M59 166 V192 H120 M259 166 V192 H200" fill="none" stroke={C.muted} strokeWidth={2} />
      <rect x={120} y={182} width={80} height={22} rx={11} fill={C.redSoft} stroke={C.red} strokeWidth={2} />
      <T x={160} y={193} size={10.5}>End</T>
    </Svg>
  );
}

function TurtleSquare() {
  return (
    <Svg h={190} label="A turtle drawing a square: move forward 100, turn right 90 degrees, four times">
      <rect x={40} y={30} width={120} height={120} fill="none" stroke={C.green} strokeWidth={4} />
      {[[40, 150, 40, 30], [40, 30, 160, 30], [160, 30, 160, 150], [160, 150, 40, 150]].map(([x1, y1, x2, y2], i) => (
        <Arrow key={i} x1={x1 + (x2 - x1) * 0.3} y1={y1 + (y2 - y1) * 0.3} x2={x1 + (x2 - x1) * 0.6} y2={y1 + (y2 - y1) * 0.6} color={C.purple} width={2.5} />
      ))}
      <E e="🐢" x={40} y={150} size={30} />
      <Code x={190} y={60} size={12}>repeat 4:</Code>
      <Code x={206} y={84} size={12} fill={C.purple}>forward 100</Code>
      <Code x={206} y={106} size={12} fill={C.purple}>right 90</Code>
      <T x={244} y={146} size={10} weight={700} fill={C.muted}>4 turns × 90° = 360°</T>
    </Svg>
  );
}

// ---------- Python ----------

function VariableBox() {
  const box = (x: number, value: string, note: string) => (
    <g>
      <rect x={x} y={50} width={90} height={70} rx={10} fill={C.goldSoft} stroke={C.brown} strokeWidth={2.5} />
      <path d={`M${x} 50 l12 -14 h66 l12 14`} fill="#f5deb3" stroke={C.brown} strokeWidth={2} />
      <Code x={x + 45} y={86} size={20} anchor="middle">{value}</Code>
      <T x={x + 45} y={136} size={10} weight={700} fill={C.muted}>{note}</T>
    </g>
  );
  return (
    <Svg h={170} label="A variable is a labelled box: score holds 10, then score = score + 5 changes it to 15">
      <T x={160} y={16} size={11}>score</T>
      {box(36, '10', 'score = 10')}
      <Arrow x1={136} y1={86} x2={186} y2={86} color={C.purple} width={3} />
      {box(194, '15', 'score = score + 5')}
      <T x={160} y={160} size={10} weight={700} fill={C.muted}>= stores a value; it doesn’t mean “equals”</T>
    </Svg>
  );
}

function IfBranches() {
  return (
    <Svg h={190} label="An if, elif, else chain: if the mark is 70 or more, grade A; else if 50 or more, grade B; otherwise keep going">
      <Box x={90} y={6} w={140} h={28} fill={C.goldSoft} stroke={C.gold}>mark ≥ 70?</Box>
      <Arrow x1={230} y1={20} x2={262} y2={20} color={C.green} width={2} />
      <Box x={264} y={6} w={50} h={28} fill={C.greenSoft} stroke={C.green} size={11}>A</Box>
      <Arrow x1={160} y1={34} x2={160} y2={66} color={C.red} width={2} />
      <T x={172} y={50} size={9.5} anchor="start" fill={C.red}>no</T>
      <T x={246} y={10} size={9.5} fill={C.green}>yes</T>
      <Box x={90} y={68} w={140} h={28} fill={C.goldSoft} stroke={C.gold}>elif mark ≥ 50?</Box>
      <Arrow x1={230} y1={82} x2={262} y2={82} color={C.green} width={2} />
      <Box x={264} y={68} w={50} h={28} fill={C.greenSoft} stroke={C.green} size={11}>B</Box>
      <Arrow x1={160} y1={96} x2={160} y2={128} color={C.red} width={2} />
      <T x={172} y={112} size={9.5} anchor="start" fill={C.red}>no</T>
      <Box x={90} y={130} w={140} h={28} fill={C.soft} stroke={C.line}>else: Keep going</Box>
      <T x={160} y={180} size={10} weight={700} fill={C.muted}>only the first true branch runs</T>
    </Svg>
  );
}

function LoopTypes() {
  return (
    <TwoCol
      label="for loops repeat a set number of times, like range 5 giving 0 to 4; while loops repeat until a condition is false, so watch out for infinite loops"
      left={{ title: 'for loop', sub: 'a set number of times', colour: C.green, fill: C.greenSoft, items: [['🔢', 'range(5): 0 to 4'], ['📋', 'go through a list'], ['✅', 'stops by itself']] }}
      right={{ title: 'while loop', sub: 'until a condition is false', colour: C.orange, fill: C.orangeSoft, items: [['⏳', 'unknown repeats'], ['🔁', 'checks each time'], ['⚠️', 'infinite loops!']] }}
    />
  );
}

function ListIndex() {
  const items = ['"cat"', '"dog"', '"fish"', '"rabbit"'];
  return (
    <Svg h={150} label="A list with indexes: cat is at index 0, dog at 1, fish at 2 and rabbit at 3; the length is 4">
      <Code x={20} y={20} size={12}>pets =</Code>
      {items.map((it, i) => (
        <g key={it}>
          <rect x={20 + i * 72} y={36} width={66} height={44} rx={8} fill={i === 3 ? C.greenSoft : C.blueSoft} stroke={i === 3 ? C.green : C.blue} strokeWidth={2} />
          <Code x={53 + i * 72} y={58} size={12} anchor="middle">{it}</Code>
          <T x={53 + i * 72} y={98} size={12} fill={C.purple}>{String(i)}</T>
        </g>
      ))}
      <T x={20} y={98} size={9.5} weight={700} anchor="end" fill={C.muted}> </T>
      <T x={160} y={120} size={10.5} weight={700} fill={C.muted}>index starts at 0 · len(pets) = 4</T>
      <T x={238} y={140} size={9.5} fill={C.green}>added with append()</T>
    </Svg>
  );
}

// ---------- searching & sorting ----------

function SearchCompare() {
  const nums = [2, 5, 8, 12, 16, 23, 38];
  return (
    <Svg h={200} label="Linear search checks every item from the start; binary search on a sorted list checks the middle and throws away half each time, finding 23 in 2 checks instead of 6">
      <T x={160} y={12} size={11}>Find 23</T>
      <T x={20} y={34} size={10.5} anchor="start" fill={C.orange}>Linear: 6 checks</T>
      {nums.map((n, i) => (
        <g key={`l${n}`}>
          <rect x={20 + i * 41} y={44} width={36} height={32} rx={6} fill={i <= 5 ? C.orangeSoft : '#fff'} stroke={i === 5 ? C.orange : C.line} strokeWidth={2} />
          <T x={38 + i * 41} y={60} size={12}>{String(n)}</T>
        </g>
      ))}
      <T x={20} y={102} size={10.5} anchor="start" fill={C.green}>Binary: 2 checks (sorted list)</T>
      {nums.map((n, i) => (
        <g key={`b${n}`}>
          <rect x={20 + i * 41} y={112} width={36} height={32} rx={6} fill={i < 4 ? '#eee' : i === 5 ? C.greenSoft : '#fff'} stroke={i === 3 || i === 5 ? C.green : C.line} strokeWidth={2} />
          <T x={38 + i * 41} y={128} size={12} fill={i < 4 ? C.muted : C.ink}>{String(n)}</T>
        </g>
      ))}
      <T x={143} y={160} size={9.5} weight={700} fill={C.muted}>1: middle is 12, too small, drop the left half</T>
      <T x={143} y={176} size={9.5} weight={700} fill={C.muted}>2: middle of the rest is 23. Found!</T>
    </Svg>
  );
}

function BubbleSort() {
  const steps = [
    { list: [5, 3, 8, 1], hi: [0, 1], note: 'swap 5 and 3' },
    { list: [3, 5, 8, 1], hi: [1, 2], note: 'keep 5, 8' },
    { list: [3, 5, 8, 1], hi: [2, 3], note: 'swap 8 and 1' },
    { list: [3, 5, 1, 8], hi: [3, 3], note: 'end of pass 1: 8 in place' },
  ];
  return (
    <Svg h={200} label="One pass of bubble sort on 5, 3, 8, 1: swap 5 and 3, keep 5 and 8, swap 8 and 1, so 8 bubbles to the end giving 3, 5, 1, 8">
      {steps.map((s, r) => (
        <g key={r}>
          {s.list.map((n, i) => {
            const active = r < 3 && (i === s.hi[0] || i === s.hi[1]);
            const done = r === 3 && i === 3;
            return (
              <g key={i}>
                <rect x={16 + i * 40} y={10 + r * 46} width={34} height={34} rx={6} fill={done ? C.greenSoft : active ? C.goldSoft : '#fff'} stroke={done ? C.green : active ? C.gold : C.line} strokeWidth={2} />
                <T x={33 + i * 40} y={27 + r * 46} size={14}>{String(n)}</T>
              </g>
            );
          })}
          <T x={190} y={27 + r * 46} size={10.5} anchor="start" fill={r === 3 ? C.green : C.muted}>{s.note}</T>
        </g>
      ))}
    </Svg>
  );
}

function MergeSort() {
  const row = (y: number, groups: number[][], fill: string) => {
    const total = groups.reduce((s, g) => s + g.length, 0) * 30 + (groups.length - 1) * 14;
    let x = 160 - total / 2;
    return groups.map((g, gi) => {
      const el = (
        <g key={`${y}-${gi}`}>
          {g.map((n, i) => (
            <g key={i}>
              <rect x={x + i * 30} y={y} width={28} height={26} rx={5} fill={fill} stroke={C.line} strokeWidth={1.5} />
              <T x={x + i * 30 + 14} y={y + 13} size={11}>{String(n)}</T>
            </g>
          ))}
        </g>
      );
      x += g.length * 30 + 14;
      return el;
    });
  };
  return (
    <Svg h={200} label="Merge sort on 38, 27, 43, 3: split into halves until single items, then merge back in order to give 3, 27, 38, 43">
      {row(6, [[38, 27, 43, 3]], C.soft)}
      {row(44, [[38, 27], [43, 3]], C.blueSoft)}
      {row(82, [[38], [27], [43], [3]], C.goldSoft)}
      {row(120, [[27, 38], [3, 43]], C.purpleSoft)}
      {row(158, [[3, 27, 38, 43]], C.greenSoft)}
      <T x={28} y={57} size={9.5} anchor="start" fill={C.blue}>split</T>
      <T x={28} y={95} size={9.5} anchor="start" fill={C.gold}>split</T>
      <T x={28} y={133} size={9.5} anchor="start" fill={C.purple}>merge</T>
      <T x={28} y={171} size={9.5} anchor="start" fill={C.green}>merge</T>
    </Svg>
  );
}

// ---------- how computers work ----------

function InputOutput() {
  return (
    <TwoCol
      label="Input devices put data in: keyboard, mouse, microphone. Output devices show results: screen, speakers, printer"
      left={{ title: 'Input', sub: 'data goes in', colour: C.blue, fill: C.blueSoft, items: [['⌨️', 'keyboard'], ['🖱️', 'mouse'], ['🎙️', 'microphone']] }}
      right={{ title: 'Output', sub: 'results come out', colour: C.green, fill: C.greenSoft, items: [['🖥️', 'screen'], ['🔊', 'speakers'], ['🖨️', 'printer']] }}
    />
  );
}

function MemoryStorage() {
  return (
    <Tiles
      label="Memory and storage: RAM is fast but volatile, ROM holds start-up instructions, SSDs are fast flash storage, hard disks are cheap and large, and cloud storage is online"
      items={[
        { e: '⚡', title: 'RAM', sub: 'in use now; volatile', colour: C.goldSoft },
        { e: '🔒', title: 'ROM', sub: 'start-up instructions', colour: C.purpleSoft },
        { e: '💾', title: 'SSD', sub: 'fast flash storage', colour: C.blueSoft },
        { e: '💿', title: 'Hard disk', sub: 'cheap, large', colour: C.soft },
        { e: '☁️', title: 'Cloud', sub: 'files online', colour: C.greenSoft },
        { e: '📀', title: 'Optical', sub: 'CDs and DVDs', colour: C.orangeSoft },
      ]}
    />
  );
}

function LogicGates() {
  const table = (x: number, rows: string[]) => rows.map((r, i) => <Code key={r} x={x} y={150 + i * 12} size={9.5} anchor="middle" fill={C.muted}>{r}</Code>);
  return (
    <Svg h={200} label="Logic gates: AND outputs 1 only if both inputs are 1; OR outputs 1 if either input is 1; NOT flips its input">
      {/* AND */}
      <path d="M20 60 H48 A28 28 0 0 1 48 116 H20 Z" fill={C.blueSoft} stroke={C.blue} strokeWidth={2.5} />
      <T x={46} y={88} size={11} fill={C.blue}>AND</T>
      <T x={50} y={136} size={9} weight={700} fill={C.muted}>A B → out</T>
      {table(50, ['0 0 → 0', '0 1 → 0', '1 0 → 0', '1 1 → 1'])}
      {/* OR */}
      <path d="M122 60 Q148 60 172 88 Q148 116 122 116 Q136 88 122 60 Z" fill={C.greenSoft} stroke={C.green} strokeWidth={2.5} />
      <T x={150} y={88} size={11} fill={C.green}>OR</T>
      <T x={150} y={136} size={9} weight={700} fill={C.muted}>A B → out</T>
      {table(150, ['0 0 → 0', '0 1 → 1', '1 0 → 1', '1 1 → 1'])}
      {/* NOT */}
      <path d="M228 66 L272 88 L228 110 Z" fill={C.orangeSoft} stroke={C.orange} strokeWidth={2.5} />
      <circle cx={278} cy={88} r={6} fill="#fff" stroke={C.orange} strokeWidth={2.5} />
      <T x={244} y={88} size={10} fill={C.orange}>NOT</T>
      <T x={252} y={136} size={9} weight={700} fill={C.muted}>A → out</T>
      {table(252, ['0 → 1', '1 → 0'])}
      <T x={160} y={24} size={11}>Logic gates</T>
    </Svg>
  );
}

// ---------- networks ----------

function NetworkMap() {
  const lan = (x: number, label: string) => (
    <g>
      <rect x={x} y={40} width={110} height={120} rx={14} fill={C.soft} stroke={C.line} strokeWidth={2} />
      <T x={x + 55} y={56} size={10.5}>{label}</T>
      <E e="📡" x={x + 55} y={100} size={30} />
      <E e="💻" x={x + 22} y={140} size={22} />
      <E e="📱" x={x + 55} y={142} size={22} />
      <E e="🖨️" x={x + 88} y={140} size={22} />
      <T x={x + 55} y={122} size={8.5} weight={700} fill={C.muted}>router</T>
    </g>
  );
  return (
    <Svg h={190} label="Two LANs, a home and a school, each with a router and devices, connected through the internet, which is a WAN">
      {lan(6, 'Home LAN')}
      {lan(204, 'School LAN')}
      <E e="☁️" x={160} y={100} size={50} />
      <T x={160} y={136} size={10} fill={C.blue}>Internet (WAN)</T>
      <line x1={84} y1={100} x2={134} y2={100} stroke={C.blue} strokeWidth={2.5} strokeDasharray="5 4" />
      <line x1={186} y1={100} x2={236} y2={100} stroke={C.blue} strokeWidth={2.5} strokeDasharray="5 4" />
    </Svg>
  );
}

function DnsLookup() {
  return (
    <Chain
      label="How a web page arrives: you type a web address, a DNS server looks up its IP address, your browser requests the page from that server, and the server sends back HTML that the browser displays"
      steps={[
        { t: '⌨️ You type bbc.co.uk', fill: C.soft },
        { t: '📒 DNS finds its IP address', fill: C.goldSoft },
        { t: '📨 Browser asks that server for the page', fill: C.blueSoft },
        { t: '📄 Server sends back the HTML', fill: C.purpleSoft },
        { t: '🖥️ Browser draws the page', fill: C.greenSoft },
      ]}
    />
  );
}

function SecurityThreats() {
  return (
    <TwoCol
      label="Threats: viruses, ransomware, spyware and phishing. Defences: software updates, antivirus, a firewall, and backups"
      left={{ title: 'Threats', sub: 'what attackers use', colour: C.red, fill: C.redSoft, items: [['🦠', 'viruses'], ['🔒', 'ransomware'], ['🎣', 'phishing']] }}
      right={{ title: 'Defences', sub: 'how to stay safe', colour: C.green, fill: C.greenSoft, items: [['🔄', 'updates'], ['🧱', 'firewall'], ['💾', 'backups']] }}
    />
  );
}

// ---------- GCSE ----------

function CpuParts() {
  return (
    <Svg label="Inside the CPU: the control unit, the ALU, cache and registers including the program counter and accumulator, connected to main memory">
      <rect x={10} y={20} width={200} height={160} rx={14} fill={C.soft} stroke={C.purple} strokeWidth={2.5} />
      <T x={110} y={36} size={11} fill={C.purple}>CPU</T>
      <Box x={22} y={48} w={84} h={40} fill={C.blueSoft} stroke={C.blue} size={10}>Control unit</Box>
      <Box x={114} y={48} w={84} h={40} fill={C.greenSoft} stroke={C.green} size={11}>ALU</Box>
      <Box x={22} y={96} w={176} h={30} fill={C.goldSoft} stroke={C.gold} size={10}>Registers: PC, ACC, MAR, MDR</Box>
      <Box x={22} y={134} w={176} h={30} fill={C.orangeSoft} stroke={C.orange} size={10}>Cache (fast memory)</Box>
      <Box x={240} y={70} w={72} h={60} fill="#fff" stroke={C.ink} size={10}>RAM</Box>
      <Arrow x1={212} y1={92} x2={236} y2={92} color={C.ink} width={2} />
      <Arrow x1={238} y1={108} x2={214} y2={108} color={C.ink} width={2} />
      <T x={276} y={150} size={9} weight={700} fill={C.muted}>instructions</T>
      <T x={276} y={162} size={9} weight={700} fill={C.muted}>and data</T>
    </Svg>
  );
}

function HexTable() {
  const vals = [9, 10, 11, 12, 13, 14, 15];
  return (
    <Svg h={170} label="Hexadecimal: after 9 come A for 10, B for 11, up to F for 15; each hex digit is 4 bits, so 1111 1010 is FA">
      {vals.map((v, i) => {
        const x = 14 + i * 42;
        return (
          <g key={v}>
            <rect x={x} y={14} width={38} height={28} rx={6} fill={C.purpleSoft} />
            <T x={x + 19} y={28} size={14} fill={C.purple}>{v.toString(16).toUpperCase()}</T>
            <T x={x + 19} y={54} size={10.5}>{String(v)}</T>
            <Code x={x + 19} y={70} size={9} anchor="middle" fill={C.muted}>{v.toString(2).padStart(4, '0')}</Code>
          </g>
        );
      })}
      <Code x={110} y={108} size={16} anchor="middle">1111 1010</Code>
      <Arrow x1={170} y1={108} x2={200} y2={108} color={C.purple} width={2.5} />
      <Code x={232} y={108} size={18} anchor="middle" fill={C.purple}>FA</Code>
      <T x={160} y={140} size={10} weight={700} fill={C.muted}>one hex digit = 4 bits (a nibble)</T>
      <T x={160} y={158} size={10} weight={700} fill={C.muted}>2F = 2 × 16 + 15 = 47</T>
    </Svg>
  );
}

function Topologies() {
  const pts = [[60, 50], [100, 30], [140, 60], [120, 110], [60, 110]];
  return (
    <Svg h={180} label="Network topologies: in a star, every device connects to a central switch; in a mesh, devices connect to many others">
      <T x={80} y={14} size={11}>Star</T>
      {[[30, 50], [130, 50], [30, 130], [130, 130], [80, 150]].map(([x, y], i) => (
        <g key={i}>
          <line x1={80} y1={90} x2={x} y2={y} stroke={C.blue} strokeWidth={2} />
          <circle cx={x} cy={y} r={11} fill={C.blueSoft} stroke={C.blue} strokeWidth={2} />
        </g>
      ))}
      <rect x={66} y={80} width={28} height={20} rx={4} fill={C.blue} />
      <T x={80} y={170} size={9} weight={700} fill={C.muted}>switch fails = all down</T>
      <T x={240} y={14} size={11}>Mesh</T>
      {pts.map(([x1, y1], i) => pts.slice(i + 1).map(([x2, y2], j) => (
        <line key={`${i}-${j}`} x1={x1 + 140} y1={y1 + 20} x2={x2 + 140} y2={y2 + 20} stroke={C.green} strokeWidth={1.5} />
      )))}
      {pts.map(([x, y], i) => <circle key={i} cx={x + 140} cy={y + 20} r={11} fill={C.greenSoft} stroke={C.green} strokeWidth={2} />)}
      <T x={240} y={170} size={9} weight={700} fill={C.muted}>many routes</T>
    </Svg>
  );
}

function CsLaws() {
  return (
    <Tiles
      label="Computing laws: the Data Protection Act 2018 for personal data, the Computer Misuse Act 1990 against hacking, and the Copyright, Designs and Patents Act 1988 protecting creative work"
      items={[
        { e: '🔏', title: 'Data Protection', sub: '2018: personal data', colour: C.blueSoft },
        { e: '🚫', title: 'Computer Misuse', sub: '1990: hacking, malware', colour: C.redSoft },
        { e: '©️', title: 'Copyright', sub: '1988: creative work', colour: C.goldSoft },
      ]}
      cols={3}
    />
  );
}

function TraceTable() {
  const rows = [['–', '1'], ['0', '2'], ['1', '4'], ['2', '8']];
  return (
    <Svg h={180} label="A trace table for a loop that doubles x three times: x goes 1, 2, 4, 8">
      <rect x={14} y={14} width={150} height={90} rx={10} fill="#1f1b2e" />
      <Code x={24} y={30} size={10.5} fill="#f2efff">x = 1</Code>
      <Code x={24} y={48} size={10.5} fill="#f2efff">for i in range(3):</Code>
      <Code x={40} y={66} size={10.5} fill="#f2efff">x = x * 2</Code>
      <Code x={24} y={84} size={10.5} fill="#f2efff">print(x)</Code>
      <rect x={190} y={14} width={116} height={24} fill={C.purpleSoft} />
      <T x={219} y={26} size={11}>i</T>
      <T x={277} y={26} size={11}>x</T>
      {rows.map(([i, x], r) => (
        <g key={r}>
          <rect x={190} y={38 + r * 24} width={116} height={24} fill="#fff" stroke={C.line} />
          <line x1={248} y1={38 + r * 24} x2={248} y2={62 + r * 24} stroke={C.line} />
          <T x={219} y={50 + r * 24} size={11}>{i}</T>
          <T x={277} y={50 + r * 24} size={11} fill={r === 3 ? C.purple : C.ink}>{x}</T>
        </g>
      ))}
      <T x={160} y={160} size={10} weight={700} fill={C.muted}>prints 8</T>
    </Svg>
  );
}

function TestData() {
  const X = (v: number) => 56 + v * 1.75;
  return (
    <Svg h={170} label="Test data for an age between 0 and 120: normal data like 35, boundary data at 0 and 120, and erroneous data like minus 5 or 200">
      <line x1={10} y1={90} x2={310} y2={90} stroke={C.ink} strokeWidth={2} />
      <rect x={X(0)} y={80} width={X(120) - X(0)} height={20} fill={C.greenSoft} />
      {[[0, C.gold, 'boundary'], [120, C.gold, 'boundary'], [35, C.green, 'normal']].map(([v, c, l]) => (
        <g key={`${v}`}>
          <circle cx={X(v as number)} cy={90} r={7} fill={c as string} />
          <T x={X(v as number)} y={64} size={10.5}>{String(v)}</T>
          <T x={X(v as number)} y={118} size={9.5} weight={700} fill={c as string}>{l as string}</T>
        </g>
      ))}
      <circle cx={18} cy={90} r={7} fill={C.red} />
      <T x={18} y={64} size={10.5}>−5</T>
      <circle cx={302} cy={90} r={7} fill={C.red} />
      <T x={302} y={64} size={10.5}>200</T>
      <T x={160} y={144} size={10.5} fill={C.red}>erroneous: outside the range, or “cat”</T>
      <T x={160} y={20} size={11}>Valid ages: 0 to 120</T>
    </Svg>
  );
}

function LogicCircuit() {
  return (
    <Svg h={170} label="A logic circuit for P equals A AND B, OR C">
      <T x={14} y={44} size={12} anchor="start">A</T>
      <T x={14} y={76} size={12} anchor="start">B</T>
      <T x={14} y={128} size={12} anchor="start">C</T>
      <line x1={28} y1={44} x2={80} y2={44} stroke={C.ink} strokeWidth={2} />
      <line x1={28} y1={76} x2={80} y2={76} stroke={C.ink} strokeWidth={2} />
      <path d="M80 30 H104 A30 30 0 0 1 104 90 H80 Z" fill={C.blueSoft} stroke={C.blue} strokeWidth={2.5} />
      <T x={104} y={60} size={10} fill={C.blue}>AND</T>
      <path d="M134 60 H184 V82" fill="none" stroke={C.ink} strokeWidth={2} />
      <path d="M28 128 H184 V110" fill="none" stroke={C.ink} strokeWidth={2} />
      <path d="M176 76 Q204 76 228 96 Q204 116 176 116 Q190 96 176 76 Z" fill={C.greenSoft} stroke={C.green} strokeWidth={2.5} />
      <T x={204} y={96} size={10} fill={C.green}>OR</T>
      <line x1={228} y1={96} x2={276} y2={96} stroke={C.ink} strokeWidth={2} />
      <T x={290} y={96} size={13} fill={C.purple}>P</T>
      <T x={160} y={158} size={11} fill={C.purple}>P = (A AND B) OR C</T>
    </Svg>
  );
}

function Translators() {
  return (
    <Svg h={160} label="Translators turn high-level code like Python into machine code: a compiler does the whole program at once, an interpreter does one line at a time">
      <rect x={10} y={30} width={96} height={70} rx={10} fill="#1f1b2e" />
      <Code x={58} y={56} size={10} anchor="middle" fill="#f2efff">print("hi")</Code>
      <T x={58} y={82} size={9} fill="#c4b5fd">high-level</T>
      <Arrow x1={110} y1={65} x2={126} y2={65} color={C.purple} width={2.5} />
      <rect x={128} y={20} width={86} height={40} rx={10} fill={C.blueSoft} stroke={C.blue} strokeWidth={2} />
      <T x={171} y={34} size={10} fill={C.blue}>Compiler</T>
      <T x={171} y={48} size={8.5} weight={700} fill={C.muted}>all at once</T>
      <rect x={128} y={70} width={86} height={40} rx={10} fill={C.greenSoft} stroke={C.green} strokeWidth={2} />
      <T x={171} y={84} size={10} fill={C.green}>Interpreter</T>
      <T x={171} y={98} size={8.5} weight={700} fill={C.muted}>line by line</T>
      <Arrow x1={218} y1={65} x2={234} y2={65} color={C.purple} width={2.5} />
      <rect x={236} y={30} width={76} height={70} rx={10} fill={C.soft} stroke={C.line} strokeWidth={2} />
      <Code x={274} y={56} size={10} anchor="middle">10110011</Code>
      <T x={274} y={82} size={9} fill={C.muted}>machine code</T>
      <T x={160} y={140} size={10} weight={700} fill={C.muted}>the CPU only understands machine code</T>
    </Svg>
  );
}

function SoftwareTypes() {
  return (
    <TwoCol
      label="System software runs the computer: the operating system and utilities like antivirus and backup. Application software does tasks for you: browsers, games and word processors"
      left={{ title: 'System', sub: 'runs the computer', colour: C.purple, fill: C.purpleSoft, items: [['🪟', 'operating system'], ['🛡️', 'antivirus'], ['💾', 'backup']] }}
      right={{ title: 'Application', sub: 'does tasks for you', colour: C.blue, fill: C.blueSoft, items: [['🌐', 'web browser'], ['🎮', 'games'], ['📝', 'word processor']] }}
    />
  );
}

export const computingDiagrams: Record<string, () => JSX.Element> = {
  'software-types': SoftwareTypes,
  'password-strength': PasswordStrength,
  'phishing-signs': PhishingSigns,
  'report-steps': ReportSteps,
  'binary-columns': BinaryColumns,
  'binary-addition': BinaryAddition,
  'pixel-grid': PixelGrid,
  'comp-thinking': CompThinking,
  'flowchart-symbols': FlowchartSymbols,
  'turtle-square': TurtleSquare,
  'variable-box': VariableBox,
  'if-branches': IfBranches,
  'loop-types': LoopTypes,
  'list-index': ListIndex,
  'search-compare': SearchCompare,
  'bubble-sort': BubbleSort,
  'merge-sort': MergeSort,
  'input-output': InputOutput,
  'memory-storage': MemoryStorage,
  'logic-gates': LogicGates,
  'network-map': NetworkMap,
  'dns-lookup': DnsLookup,
  'security-threats': SecurityThreats,
  'cpu-parts': CpuParts,
  'hex-table': HexTable,
  topologies: Topologies,
  'cs-laws': CsLaws,
  'trace-table': TraceTable,
  'test-data': TestData,
  'logic-circuit': LogicCircuit,
  translators: Translators,
};
