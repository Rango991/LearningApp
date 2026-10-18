import { Arrow, Box, C, Chain, E, Svg, T, Tiles, TwoCol } from './kit';

// Diagrams for the second batch of Computing units (content/computing.ts).

const MONO = 'ui-monospace, Consolas, monospace';

function Code({ x, y, children, size = 12, fill = C.ink, anchor = 'start' }: { x: number; y: number; children: string; size?: number; fill?: string; anchor?: 'start' | 'middle' | 'end' }) {
  return <text x={x} y={y} fontFamily={MONO} fontSize={size} fill={fill} textAnchor={anchor} dominantBaseline="middle" fontWeight={700}>{children}</text>;
}

// ---------- digital skills ----------

function SpreadsheetGrid() {
  const rows = [['Item', 'Cost'], ['Pens', '3'], ['Paper', '5'], ['Glue', '2'], ['Total', '10']];
  return (
    <Svg h={190} label="A spreadsheet: cells B2 to B4 hold 3, 5 and 2, and cell B5 has the formula =SUM(B2:B4), which shows 10">
      <rect x={20} y={8} width={280} height={24} rx={4} fill="#fff" stroke={C.line} />
      <Code x={30} y={20} size={11}>fx  =SUM(B2:B4)</Code>
      {['', 'A', 'B'].map((h, c) => <T key={h} x={c === 0 ? 34 : 48 + c * 90 - 45} y={46} size={10} fill={C.muted}>{h}</T>)}
      {rows.map((r, i) => (
        <g key={i}>
          <T x={34} y={68 + i * 24} size={10} fill={C.muted}>{String(i + 1)}</T>
          {r.map((v, c) => {
            const sel = i === 4 && c === 1;
            return (
              <g key={c}>
                <rect x={48 + c * 90} y={56 + i * 24} width={90} height={24} fill={sel ? C.greenSoft : i === 0 ? C.soft : '#fff'} stroke={sel ? C.green : C.line} strokeWidth={sel ? 2.5 : 1} />
                <T x={93 + c * 90} y={68 + i * 24} size={10.5} weight={i === 0 || i === 4 ? 900 : 700}>{v}</T>
              </g>
            );
          })}
        </g>
      ))}
      <T x={256} y={164} size={9.5} weight={700} anchor="start" fill={C.green}>B5</T>
      <T x={256} y={178} size={9} weight={700} anchor="start" fill={C.muted}>updates itself</T>
    </Svg>
  );
}

function DatabaseTable() {
  const head = ['ID', 'Name', 'Year', 'Points'];
  const rows = [['101', 'Ava', '7', '92'], ['102', 'Leo', '8', '75'], ['103', 'Mia', '7', '88']];
  const w = [44, 80, 54, 64];
  const xs = w.map((_, i) => 26 + w.slice(0, i).reduce((s, v) => s + v, 0));
  return (
    <Svg h={180} label="A database table: each row is a record about one student and each column is a field; the ID is the key field">
      {head.map((h, c) => (
        <g key={h}>
          <rect x={xs[c]} y={24} width={w[c]} height={26} fill={c === 1 ? C.blueSoft : C.purpleSoft} stroke={C.line} />
          <T x={xs[c] + w[c] / 2} y={37} size={10.5}>{h}</T>
        </g>
      ))}
      {rows.map((r, i) => r.map((v, c) => (
        <g key={`${i}-${c}`}>
          <rect x={xs[c]} y={50 + i * 26} width={w[c]} height={26} fill={i === 1 ? C.goldSoft : c === 1 ? C.blueSoft : '#fff'} stroke={C.line} />
          <T x={xs[c] + w[c] / 2} y={63 + i * 26} size={10.5} weight={700}>{v}</T>
        </g>
      )))}
      <T x={300} y={89} size={10} anchor="end" fill={C.gold}>← record</T>
      <T x={xs[1] + 40} y={142} size={10} fill={C.blue}>↑ field</T>
      <T x={xs[0] + 22} y={160} size={9} weight={700} fill={C.purple}>key field</T>
    </Svg>
  );
}

function DesignChecklist() {
  return (
    <Tiles
      label="A design checklist: know your audience and purpose, use readable fonts and strong contrast, add alt text, and test with real users"
      items={[
        { e: '👥', title: 'Audience', sub: 'who is it for?', colour: C.blueSoft },
        { e: '🎯', title: 'Purpose', sub: 'what must it do?', colour: C.goldSoft },
        { e: '🔤', title: 'Readable', sub: 'clear fonts', colour: C.soft },
        { e: '🌓', title: 'Contrast', sub: 'dark on light', colour: '#e5e7eb' },
        { e: '🖼️', title: 'Alt text', sub: 'for screen readers', colour: C.greenSoft },
        { e: '🧪', title: 'Test it', sub: 'with real users', colour: C.purpleSoft },
      ]}
    />
  );
}

// ---------- Scratch ----------

function Block({ x, y, w, fill, children, hat = false }: { x: number; y: number; w: number; fill: string; children: string; hat?: boolean }) {
  return (
    <g>
      {hat && <path d={`M${x} ${y} Q${x + 30} ${y - 16} ${x + 60} ${y}`} fill={fill} />}
      <rect x={x} y={y} width={w} height={28} rx={5} fill={fill} />
      <T x={x + 10} y={y + 14} size={10.5} anchor="start" fill="#fff">{children}</T>
    </g>
  );
}

function ScratchBlocks() {
  return (
    <Svg h={160} label="Scratch blocks snapped together: when green flag clicked, say Hello for 2 seconds, then move 10 steps">
      <Block x={40} y={24} w={170} fill="#e6a800" hat>when 🏁 clicked</Block>
      <Block x={40} y={52} w={210} fill="#9966ff">say [Hello!] for 2 seconds</Block>
      <Block x={40} y={80} w={140} fill="#4c97ff">move (10) steps</Block>
      <E e="🐱" x={276} y={66} size={40} />
      <T x={160} y={130} size={10} weight={700} fill={C.muted}>events (yellow) start a script; blocks run top to bottom</T>
    </Svg>
  );
}

function ScratchLoop() {
  return (
    <Svg h={190} label="A Scratch forever loop containing move 5 steps and an if touching edge then turn 180 degrees block">
      <Block x={30} y={16} w={170} fill="#e6a800" hat>when 🏁 clicked</Block>
      <path d="M30 44 h150 v28 h-130 v86 h130 v20 h-150 z" fill="#ffab19" />
      <T x={40} y={58} size={10.5} anchor="start" fill="#fff">forever</T>
      <Block x={50} y={72} w={130} fill="#4c97ff">move (5) steps</Block>
      <path d="M50 100 h190 v26 h-170 v26 h170 v10 h-190 z" fill="#ffbf00" />
      <T x={58} y={113} size={10} anchor="start" fill="#fff">if touching edge? then</T>
      <Block x={70} y={126} w={150} fill="#4c97ff">turn ↻ 180 degrees</Block>
      <T x={266} y={58} size={9.5} weight={700} fill={C.muted}>repeats</T>
      <T x={266} y={70} size={9.5} weight={700} fill={C.muted}>until stopped</T>
    </Svg>
  );
}

function Broadcast() {
  return (
    <Svg h={170} label="Broadcast: one sprite broadcasts game over, and every sprite with when I receive game over reacts">
      <E e="🐱" x={50} y={80} size={46} />
      <rect x={14} y={112} width={74} height={22} rx={6} fill="#ffbf00" />
      <T x={51} y={123} size={8.5} fill="#fff">broadcast</T>
      <T x={51} y={146} size={9} weight={700} fill={C.muted}>“game over”</T>
      <Arrow x1={100} y1={70} x2={190} y2={40} color={C.orange} width={2.5} dashed />
      <Arrow x1={100} y1={90} x2={190} y2={120} color={C.orange} width={2.5} dashed />
      <E e="👾" x={220} y={40} size={36} />
      <T x={244} y={40} size={9} weight={700} anchor="start" fill={C.muted}>hides</T>
      <E e="📝" x={220} y={120} size={36} />
      <T x={244} y={114} size={9} weight={700} anchor="start" fill={C.muted}>shows</T>
      <T x={244} y={126} size={9} weight={700} anchor="start" fill={C.muted}>“Game over!”</T>
      <T x={240} y={160} size={9.5} fill={C.orange}>when I receive [game over]</T>
    </Svg>
  );
}

// ---------- web ----------

function HtmlStructure() {
  return (
    <Svg h={200} label="The structure of an HTML page: html contains head, which holds the title, and body, which holds the visible heading and paragraph">
      <rect x={20} y={10} width={280} height={180} rx={10} fill={C.soft} stroke={C.purple} strokeWidth={2} />
      <Code x={30} y={24} size={11} fill={C.purple}>{'<html>'}</Code>
      <rect x={34} y={36} width={252} height={42} rx={8} fill={C.goldSoft} stroke={C.gold} />
      <Code x={42} y={48} size={10.5}>{'<head>'}</Code>
      <Code x={60} y={66} size={10.5} fill={C.muted}>{'<title>My page</title>'}</Code>
      <rect x={34} y={86} width={252} height={94} rx={8} fill="#fff" stroke={C.blue} strokeWidth={2} />
      <Code x={42} y={98} size={10.5} fill={C.blue}>{'<body>'}</Code>
      <text x={60} y={128} fontSize={20} fontWeight={900} fill={C.ink}>Hello!</text>
      <text x={60} y={154} fontSize={12} fill={C.ink}>Welcome to my page.</text>
      <T x={250} y={128} size={9} weight={700} fill={C.muted}>{'<h1>'}</T>
      <T x={250} y={154} size={9} weight={700} fill={C.muted}>{'<p>'}</T>
    </Svg>
  );
}

function CssRule() {
  return (
    <Svg h={190} label="A CSS rule: the selector h1, then the property color with the value purple, makes headings purple">
      <rect x={16} y={14} width={170} height={96} rx={10} fill="#1f1b2e" />
      <Code x={28} y={34} size={13} fill="#fbbf24">h1</Code>
      <Code x={50} y={34} size={13} fill="#f2efff">{'{'}</Code>
      <Code x={40} y={58} size={13} fill="#7dd3fc">color</Code>
      <Code x={88} y={58} size={13} fill="#f2efff">:</Code>
      <Code x={100} y={58} size={13} fill="#c4b5fd">purple</Code>
      <Code x={150} y={58} size={13} fill="#f2efff">;</Code>
      <Code x={28} y={82} size={13} fill="#f2efff">{'}'}</Code>
      <T x={210} y={34} size={10} anchor="start" fill={C.gold}>← selector</T>
      <T x={210} y={52} size={10} anchor="start" fill={C.blue}>← property</T>
      <T x={210} y={68} size={10} anchor="start" fill={C.purple}>← value</T>
      <rect x={16} y={124} width={288} height={52} rx={10} fill="#fff" stroke={C.line} />
      <text x={30} y={158} fontSize={26} fontWeight={900} fill="#7c3aed">My heading</text>
    </Svg>
  );
}

function ReliableSite() {
  return (
    <Tiles
      label="Checking whether a website is reliable: who wrote it, why, when it was updated, whether others agree, remembering a padlock only means a secure connection, and checking its sources"
      items={[
        { e: '✍️', title: 'Who wrote it?', sub: 'an expert?', colour: C.blueSoft },
        { e: '🎯', title: 'Why?', sub: 'to inform or sell?', colour: C.goldSoft },
        { e: '📅', title: 'When?', sub: 'recently updated?', colour: C.soft },
        { e: '🤝', title: 'Others agree?', sub: 'check 2–3 sites', colour: C.greenSoft },
        { e: '🔒', title: 'Padlock', sub: 'secure, not true', colour: C.orangeSoft },
        { e: '📚', title: 'Sources', sub: 'does it cite them?', colour: C.purpleSoft },
      ]}
    />
  );
}

// ---------- more Python ----------

function StringIndex() {
  const word = 'Python';
  return (
    <Svg h={150} label="The string Python with each letter’s index: P is 0, y is 1, t is 2, h is 3, o is 4 and n is 5; the length is 6">
      <Code x={20} y={20} size={12}>word = "Python"</Code>
      {word.split('').map((ch, i) => (
        <g key={i}>
          <rect x={30 + i * 44} y={36} width={40} height={40} rx={8} fill={i === 0 ? C.goldSoft : C.blueSoft} stroke={i === 0 ? C.gold : C.blue} strokeWidth={2} />
          <Code x={50 + i * 44} y={56} size={18} anchor="middle">{ch}</Code>
          <T x={50 + i * 44} y={92} size={12} fill={C.purple}>{String(i)}</T>
        </g>
      ))}
      <T x={160} y={118} size={10.5} weight={700} fill={C.muted}>word[0] is "P" · len(word) is 6</T>
      <T x={160} y={136} size={10.5} weight={700} fill={C.muted}>word.upper() is "PYTHON"</T>
    </Svg>
  );
}

function DiceGame() {
  return (
    <Chain
      label="A guessing game: the computer picks a secret random number, asks for a guess, says higher or lower, and repeats until the guess is right"
      steps={[
        { t: '🎲 secret = random.randint(1, 10)', fill: C.purpleSoft },
        { t: '⌨️ Ask for a guess', fill: C.blueSoft },
        { t: '⬆️⬇️ Too low? “Higher!” Too high? “Lower!”', fill: C.goldSoft },
        { t: '🔁 Repeat while the guess is wrong', fill: C.orangeSoft },
        { t: '🎉 “Got it!”', fill: C.greenSoft },
      ]}
    />
  );
}

function ErrorTypes() {
  return (
    <Tiles
      label="Three kinds of error: syntax errors stop the program starting, runtime errors crash it while running, and logic errors give the wrong answer"
      items={[
        { e: '✏️', title: 'Syntax', sub: 'won’t start: a missing : or )', colour: C.redSoft },
        { e: '💥', title: 'Runtime', sub: 'crashes: dividing by 0', colour: C.orangeSoft },
        { e: '🤔', title: 'Logic', sub: 'runs, wrong answer', colour: C.goldSoft },
      ]}
      cols={3}
    />
  );
}

function ValidationLoop() {
  return (
    <Svg h={190} label="Validation loop: ask for an age, check it is between 0 and 120; if not, say try again and ask again; if it is, carry on">
      <polygon points="104,10 224,10 214,38 94,38" fill={C.blueSoft} stroke={C.blue} strokeWidth={2} />
      <T x={159} y={24} size={10.5}>Input age</T>
      <Arrow x1={159} y1={38} x2={159} y2={56} color={C.muted} width={2} />
      <polygon points="159,58 229,90 159,122 89,90" fill={C.goldSoft} stroke={C.gold} strokeWidth={2} />
      <T x={159} y={84} size={9.5}>0 ≤ age</T>
      <T x={159} y={98} size={9.5}>≤ 120?</T>
      <path d="M89 90 H30 V24 H94" fill="none" stroke={C.red} strokeWidth={2} />
      <Arrow x1={60} y1={24} x2={92} y2={24} color={C.red} width={2} />
      <T x={46} y={110} size={9.5} fill={C.red}>No: “try again”</T>
      <Arrow x1={159} y1={122} x2={159} y2={150} color={C.green} width={2} />
      <T x={176} y={136} size={9.5} anchor="start" fill={C.green}>Yes</T>
      <rect x={104} y={152} width={110} height={28} rx={10} fill={C.greenSoft} stroke={C.green} strokeWidth={2} />
      <T x={159} y={166} size={10.5}>Carry on</T>
    </Svg>
  );
}

// ---------- data, models & AI ----------

function ModelLoop() {
  return (
    <Chain
      label="How a computer model works: inputs go through rules to make outputs, which are compared with reality so the model can be improved"
      steps={[
        { t: '📥 Inputs: today’s temperature, wind, pressure', fill: C.blueSoft },
        { t: '⚙️ Rules: how the weather behaves', fill: C.purpleSoft },
        { t: '📤 Output: tomorrow’s forecast', fill: C.goldSoft },
        { t: '🔍 Compare with what really happened', fill: C.orangeSoft },
        { t: '🔧 Improve the rules', fill: C.greenSoft },
      ]}
    />
  );
}

function DataTrail() {
  return (
    <Tiles
      label="The data trail you leave: what you click, buy, watch and search for, where you go, and who you know"
      items={[
        { e: '🖱️', title: 'Clicks', sub: 'what you tap', colour: C.blueSoft },
        { e: '🛒', title: 'Purchases', sub: 'what you buy', colour: C.goldSoft },
        { e: '📍', title: 'Location', sub: 'where you go', colour: C.redSoft },
        { e: '📺', title: 'Watching', sub: 'what you view', colour: C.purpleSoft },
        { e: '🔎', title: 'Searches', sub: 'what you look up', colour: C.greenSoft },
        { e: '📇', title: 'Contacts', sub: 'who you know', colour: C.orangeSoft },
      ]}
    />
  );
}

function AiTraining() {
  return (
    <Svg h={180} label="Machine learning: lots of labelled cat and dog photos train a model, which can then label a new photo, for example cat, 94% sure">
      <rect x={10} y={20} width={96} height={120} rx={10} fill={C.soft} stroke={C.line} />
      {['🐱', '🐶', '🐱', '🐶', '🐱', '🐶'].map((e, i) => <E key={i} e={e} x={34 + (i % 2) * 48} y={44 + Math.floor(i / 2) * 36} size={26} />)}
      <T x={58} y={154} size={9.5} weight={700} fill={C.muted}>labelled examples</T>
      <Arrow x1={110} y1={80} x2={140} y2={80} color={C.purple} width={2.5} />
      <rect x={142} y={50} width={70} height={60} rx={12} fill={C.purpleSoft} stroke={C.purple} strokeWidth={2} />
      <E e="🤖" x={177} y={74} size={28} />
      <T x={177} y={100} size={9} fill={C.purple}>model</T>
      <Arrow x1={214} y1={80} x2={240} y2={80} color={C.purple} width={2.5} />
      <E e="🐱" x={270} y={64} size={34} />
      <T x={270} y={96} size={10} fill={C.green}>“cat”</T>
      <T x={270} y={110} size={9} weight={700} fill={C.muted}>94% sure</T>
      <T x={177} y={154} size={9.5} weight={700} fill={C.muted}>learns patterns</T>
      <T x={270} y={140} size={9.5} weight={700} fill={C.muted}>new photo</T>
    </Svg>
  );
}

// ---------- GCSE memory, security, techniques ----------

function StoragePyramid() {
  const levels = [
    { t: 'Registers & cache', w: 90, fill: C.redSoft },
    { t: 'RAM', w: 140, fill: C.orangeSoft },
    { t: 'SSD', w: 190, fill: C.goldSoft },
    { t: 'Hard disk', w: 240, fill: C.greenSoft },
    { t: 'Optical & cloud', w: 290, fill: C.blueSoft },
  ];
  return (
    <Svg h={200} label="The storage pyramid: registers and cache at the top are fastest, smallest and most expensive; then RAM, SSD, hard disk, and optical and cloud storage at the bottom, which are slowest, biggest and cheapest per gigabyte">
      {levels.map((l, i) => (
        <g key={l.t}>
          <rect x={160 - l.w / 2} y={12 + i * 34} width={l.w} height={30} rx={6} fill={l.fill} stroke={C.line} />
          <T x={160} y={27 + i * 34} size={10.5}>{l.t}</T>
        </g>
      ))}
      <T x={14} y={22} size={9} weight={700} anchor="start" fill={C.red}>faster</T>
      <T x={14} y={34} size={9} weight={700} anchor="start" fill={C.red}>smaller</T>
      <T x={306} y={22} size={9} weight={700} anchor="end" fill={C.red}>pricier</T>
      <T x={14} y={196} size={9} weight={700} anchor="start" fill={C.blue}>slower, bigger</T>
      <T x={306} y={196} size={9} weight={700} anchor="end" fill={C.blue}>cheaper per GB</T>
    </Svg>
  );
}

function BinaryShift() {
  const row = (y: number, bits: string, hi: number[]) => bits.split('').map((b, i) => (
    <g key={`${y}-${i}`}>
      <rect x={40 + i * 30} y={y} width={28} height={30} rx={5} fill={hi.includes(i) ? C.goldSoft : '#fff'} stroke={C.line} strokeWidth={1.5} />
      <Code x={54 + i * 30} y={y + 15} size={14} anchor="middle">{b}</Code>
    </g>
  ));
  return (
    <Svg h={170} label="A binary left shift by 2 places: 00000101 (5) becomes 00010100 (20), which is multiplying by 4">
      {row(14, '00000101', [5, 7])}
      <T x={300} y={29} size={11} anchor="end">= 5</T>
      <Arrow x1={160} y1={52} x2={120} y2={78} color={C.purple} width={2.5} />
      <T x={196} y={66} size={10} anchor="start" fill={C.purple}>shift left by 2</T>
      {row(84, '00010100', [3, 5])}
      <T x={300} y={99} size={11} anchor="end">= 20</T>
      <T x={160} y={140} size={10.5} weight={700} fill={C.muted}>each place left doubles it: × 2 × 2 = × 4</T>
      <T x={160} y={158} size={10.5} weight={700} fill={C.muted}>shifting right halves it (and can lose bits)</T>
    </Svg>
  );
}

function FileSizeFormulas() {
  return (
    <Svg h={170} label="File size formulas: an image is width times height times colour depth bits; a sound is sample rate times bit depth times seconds bits; divide by 8 for bytes">
      <Box x={14} y={14} w={292} h={44} fill={C.blueSoft} stroke={C.blue} size={11}>🖼️ image = width × height × colour depth</Box>
      <Box x={14} y={68} w={292} h={44} fill={C.greenSoft} stroke={C.green} size={11}>🔊 sound = sample rate × bit depth × seconds</Box>
      <T x={160} y={132} size={11} fill={C.purple}>answers are in bits: ÷ 8 for bytes</T>
      <T x={160} y={152} size={10} weight={700} fill={C.muted}>÷ 1,000 for kilobytes, then ÷ 1,000 for megabytes</T>
    </Svg>
  );
}

function AttackTypes() {
  return (
    <Tiles
      label="Common cyber attacks: malware, phishing, brute force, denial of service, data interception and SQL injection"
      items={[
        { e: '🦠', title: 'Malware', sub: 'viruses, worms, trojans', colour: C.redSoft },
        { e: '🎣', title: 'Phishing', sub: 'tricks people', colour: C.orangeSoft },
        { e: '🔨', title: 'Brute force', sub: 'tries every password', colour: C.goldSoft },
        { e: '🌊', title: 'Denial of service', sub: 'floods a server', colour: C.blueSoft },
        { e: '📡', title: 'Interception', sub: 'steals data in transit', colour: C.purpleSoft },
        { e: '💉', title: 'SQL injection', sub: 'code in a web form', colour: C.soft },
      ]}
    />
  );
}

function DefenceLayers() {
  return (
    <Tiles
      label="Ways to defend a system: penetration testing, anti-malware, firewalls, user access levels, encryption and physical security"
      items={[
        { e: '🕵️', title: 'Pen testing', sub: 'find weak spots first', colour: C.purpleSoft },
        { e: '🛡️', title: 'Anti-malware', sub: 'find and remove', colour: C.greenSoft },
        { e: '🧱', title: 'Firewall', sub: 'block bad traffic', colour: C.orangeSoft },
        { e: '🔑', title: 'Access levels', sub: 'only what you need', colour: C.goldSoft },
        { e: '🔐', title: 'Encryption', sub: 'unreadable if stolen', colour: C.blueSoft },
        { e: '🔒', title: 'Physical', sub: 'locks, ID cards', colour: C.soft },
      ]}
    />
  );
}

function OsRoles() {
  return (
    <Tiles
      label="What an operating system does: provides the user interface, manages memory, multitasks, manages peripherals with drivers, manages users and manages files"
      items={[
        { e: '🖥️', title: 'Interface', sub: 'GUI or command line', colour: C.blueSoft },
        { e: '🧠', title: 'Memory', sub: 'what’s in RAM', colour: C.purpleSoft },
        { e: '🔀', title: 'Multitasking', sub: 'shares the CPU', colour: C.goldSoft },
        { e: '🖨️', title: 'Peripherals', sub: 'via drivers', colour: C.greenSoft },
        { e: '👤', title: 'Users', sub: 'accounts, permissions', colour: C.orangeSoft },
        { e: '📁', title: 'Files', sub: 'folders, names', colour: C.soft },
      ]}
    />
  );
}

function DivMod() {
  return (
    <Svg h={170} label="17 divided by 5: three full groups of 5, so 17 DIV 5 is 3, with 2 left over, so 17 MOD 5 is 2">
      {Array.from({ length: 17 }, (_, i) => {
        const g = Math.floor(i / 5);
        const k = i % 5;
        const x = g < 3 ? 24 + g * 92 + k * 16 : 24 + 3 * 92 - 12 + k * 16;
        return <circle key={i} cx={x} cy={44} r={7} fill={g < 3 ? C.blue : C.orange} />;
      })}
      {[0, 1, 2].map((g) => <rect key={g} x={14 + g * 92} y={30} width={84} height={28} rx={10} fill="none" stroke={C.blue} strokeWidth={2} />)}
      <T x={110} y={86} size={13} fill={C.blue}>17 // 5 = 3</T>
      <T x={110} y={104} size={10} weight={700} fill={C.muted}>DIV: whole groups</T>
      <T x={270} y={86} size={13} fill={C.orange}>17 % 5 = 2</T>
      <T x={270} y={104} size={10} weight={700} fill={C.muted}>MOD: left over</T>
      <T x={160} y={146} size={10.5} weight={700} fill={C.muted}>n % 2 == 0 means n is even</T>
    </Svg>
  );
}

function Array2d() {
  const grid = [[5, 8, 2], [7, 3, 9]];
  return (
    <Svg h={170} label="A 2D array with 2 rows and 3 columns; scores[1][2] means row 1, column 2, which holds 9">
      {[0, 1, 2].map((c) => <T key={c} x={110 + c * 56} y={20} size={11} fill={C.purple}>{String(c)}</T>)}
      {grid.map((row, r) => (
        <g key={r}>
          <T x={70} y={50 + r * 46} size={11} fill={C.purple}>{String(r)}</T>
          {row.map((v, c) => {
            const hit = r === 1 && c === 2;
            return (
              <g key={c}>
                <rect x={84 + c * 56} y={30 + r * 46} width={52} height={40} rx={8} fill={hit ? C.goldSoft : C.blueSoft} stroke={hit ? C.gold : C.blue} strokeWidth={2} />
                <Code x={110 + c * 56} y={50 + r * 46} size={16} anchor="middle">{String(v)}</Code>
              </g>
            );
          })}
        </g>
      ))}
      <T x={40} y={20} size={9} weight={700} fill={C.muted}>column →</T>
      <T x={36} y={74} size={9} weight={700} fill={C.muted}>row ↓</T>
      <Code x={160} y={148} size={12} anchor="middle" fill={C.gold}>scores[1][2] = 9</Code>
    </Svg>
  );
}

function Subprograms() {
  return (
    <TwoCol
      label="Subprograms: a function returns a value, like area returning width times height; a procedure does a job, like greet printing a message"
      left={{ title: 'Function', sub: 'gives back a value', colour: C.green, fill: C.greenSoft, items: [['🧮', 'area(w, h)'], ['↩️', 'uses return'], ['📦', 'result = area(3, 4)']] }}
      right={{ title: 'Procedure', sub: 'just does a job', colour: C.blue, fill: C.blueSoft, items: [['👋', 'greet(name)'], ['🖨️', 'prints a message'], ['🚫', 'no return value']] }}
    />
  );
}

function PseudocodeFlow() {
  return (
    <Chain
      label="A linear search in steps: start at the first item, check if it is the target; if so it is found, if not move to the next item, until the end of the list"
      steps={[
        { t: '1️⃣ Start at item 0', fill: C.soft },
        { t: '❓ Is names[i] the target?', fill: C.goldSoft },
        { t: '✅ Yes: found = True', fill: C.greenSoft },
        { t: '➡️ No: move to the next item', fill: C.blueSoft },
        { t: '🏁 End of list: report found or not found', fill: C.purpleSoft },
      ]}
    />
  );
}

export const computingMoreDiagrams: Record<string, () => JSX.Element> = {
  'spreadsheet-grid': SpreadsheetGrid,
  'database-table': DatabaseTable,
  'design-checklist': DesignChecklist,
  'scratch-blocks': ScratchBlocks,
  'scratch-loop': ScratchLoop,
  broadcast: Broadcast,
  'html-structure': HtmlStructure,
  'css-rule': CssRule,
  'reliable-site': ReliableSite,
  'string-index': StringIndex,
  'dice-game': DiceGame,
  'error-types': ErrorTypes,
  'validation-loop': ValidationLoop,
  'model-loop': ModelLoop,
  'data-trail': DataTrail,
  'ai-training': AiTraining,
  'storage-pyramid': StoragePyramid,
  'binary-shift': BinaryShift,
  'file-size-formulas': FileSizeFormulas,
  'attack-types': AttackTypes,
  'defence-layers': DefenceLayers,
  'os-roles': OsRoles,
  'div-mod': DivMod,
  'array-2d': Array2d,
  subprograms: Subprograms,
  'pseudocode-flow': PseudocodeFlow,
};
