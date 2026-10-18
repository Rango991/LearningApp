import { Arrow, C, Chain, CurveArrow, E, Label, Svg, T, Tiles, Timeline, TwoCol } from './kit';

// Diagrams for the second round of extra units: Years 8-9 depth units in
// maths, English, biology, chemistry, history and geography, and the GCSE
// extras in content/gcse-extra.ts.

// ---------- maths ----------

function NegativeLine() {
  const x = (n: number) => 20 + (n + 10) * 18.5;
  return (
    <Svg h={170} label="A number line from minus 10 to 5: starting at minus 6 and moving 4 to the left lands on minus 10">
      <line x1={14} y1={90} x2={306} y2={90} stroke={C.ink} strokeWidth={2.5} />
      {Array.from({ length: 16 }, (_, i) => i - 10).map((n) => (
        <g key={n}>
          <line x1={x(n)} y1={84} x2={x(n)} y2={96} stroke={C.ink} strokeWidth={n === 0 ? 2.5 : 1.5} />
          {n % 2 === 0 && <T x={x(n)} y={110} size={10} fill={n === 0 ? C.ink : C.muted}>{n < 0 ? `−${-n}` : `${n}`}</T>}
        </g>
      ))}
      <CurveArrow d={`M${x(-6)} 82 Q${x(-8)} 40 ${x(-10)} 82`} color={C.red} />
      <circle cx={x(-6)} cy={90} r={5} fill={C.blue} />
      <circle cx={x(-10)} cy={90} r={5} fill={C.red} />
      <T x={x(-8)} y={36} size={11} fill={C.red}>move 4 left</T>
      <T x={160} y={140} size={12.5} fill={C.purple}>−6 − 4 = −10</T>
      <T x={160} y={160} size={10} weight={700} fill={C.muted}>subtracting a negative is adding: 3 − (−5) = 8</T>
    </Svg>
  );
}

function BestBuy() {
  const deal = (x: number, title: string, maths: string, each: string, best: boolean) => (
    <g>
      <rect x={x} y={14} width={140} height={150} rx={14} fill={best ? C.greenSoft : C.soft} stroke={best ? C.green : C.line} strokeWidth={2} />
      <E e="🥫" x={x + 70} y={50} size={40} />
      <T x={x + 70} y={88} size={13}>{title}</T>
      <T x={x + 70} y={110} size={10.5} weight={700} fill={C.muted}>{maths}</T>
      <T x={x + 70} y={134} size={14} fill={best ? C.green : C.ink}>{each}</T>
      {best && <T x={x + 70} y={154} size={10} fill={C.green}>better buy ✓</T>}
    </g>
  );
  return (
    <Svg h={180} label="Best buy: 6 cans for £3 is 50p a can; 10 cans for £4.50 is 45p a can, so the 10-pack is the better buy">
      {deal(14, '6 for £3', '£3 ÷ 6', '50p each', false)}
      {deal(166, '10 for £4.50', '£4.50 ÷ 10', '45p each', true)}
    </Svg>
  );
}

function CompoundShape() {
  const s = 22;
  return (
    <Svg label="An L-shape split into a 6 by 4 rectangle and a 2 by 3 rectangle: 24 plus 6 makes a total area of 30">
      <rect x={30} y={30} width={2 * s} height={3 * s} fill={C.orangeSoft} stroke={C.orange} strokeWidth={2.5} />
      <rect x={30} y={30 + 3 * s} width={6 * s} height={4 * s} fill={C.blueSoft} stroke={C.blue} strokeWidth={2.5} />
      <line x1={30} y1={30 + 3 * s} x2={30 + 2 * s} y2={30 + 3 * s} stroke={C.ink} strokeWidth={2} strokeDasharray="5 4" />
      <T x={30 + s} y={30 + 1.5 * s} size={10} fill={C.orange}>2 × 3</T>
      <T x={30 + s} y={30 + 1.5 * s + 14} size={11} fill={C.orange}>= 6</T>
      <T x={30 + 3 * s} y={30 + 5 * s} size={11} fill={C.blue}>6 × 4 = 24</T>
      <T x={30 + s} y={22} size={10} fill={C.muted}>2</T>
      <T x={20} y={30 + 1.5 * s} size={10} fill={C.muted}>3</T>
      <T x={30 + 3 * s} y={30 + 7 * s + 12} size={10} fill={C.muted}>6</T>
      <T x={30 + 6 * s + 10} y={30 + 5 * s} size={10} fill={C.muted}>4</T>
      <T x={240} y={90} size={12}>Split it up,</T>
      <T x={240} y={108} size={12}>then add:</T>
      <T x={240} y={134} size={14} fill={C.purple}>24 + 6 = 30</T>
    </Svg>
  );
}

function ProblemSteps() {
  return (
    <Chain
      label="A plan for word problems: read it twice, pick out the numbers, decide the steps, calculate with working, then check it is sensible"
      steps={[
        { t: '1. Read it twice, underline the question', fill: C.purpleSoft },
        { t: '2. Pick out the numbers you need', fill: C.blueSoft },
        { t: '3. Decide the steps', fill: C.greenSoft },
        { t: '4. Calculate, showing working', fill: C.goldSoft },
        { t: '5. Check: sensible? Right units?', fill: C.orangeSoft },
      ]}
    />
  );
}

function SineCosine() {
  return (
    <Svg label="A triangle with sides a, b and c opposite angles A, B and C, with the sine rule, cosine rule and area formula">
      <polygon points="30,170 190,170 120,40" fill={C.purpleSoft} stroke={C.purple} strokeWidth={2.5} strokeLinejoin="round" />
      <T x={22} y={180} size={12}>B</T>
      <T x={200} y={180} size={12}>C</T>
      <T x={120} y={28} size={12}>A</T>
      <T x={170} y={102} size={12} fill={C.red}>b</T>
      <T x={64} y={100} size={12} fill={C.red}>c</T>
      <T x={110} y={186} size={12} fill={C.red}>a</T>
      <T x={214} y={50} size={10.5} anchor="start" fill={C.purple}>Sine rule</T>
      <T x={214} y={66} size={10.5} anchor="start">a/sin A = b/sin B</T>
      <T x={214} y={96} size={10.5} anchor="start" fill={C.purple}>Cosine rule</T>
      <T x={214} y={112} size={10} anchor="start">a² = b² + c²</T>
      <T x={214} y={126} size={10} anchor="start">− 2bc cos A</T>
      <T x={214} y={156} size={10.5} anchor="start" fill={C.purple}>Area</T>
      <T x={214} y={172} size={10.5} anchor="start">½ab sin C</T>
    </Svg>
  );
}

function VectorPath() {
  return (
    <Svg h={180} label="Vectors: AB is a and BC is b, so going straight from A to C is a plus b">
      <Arrow x1={40} y1={150} x2={170} y2={60} color={C.blue} width={3} />
      <Arrow x1={170} y1={60} x2={280} y2={140} color={C.orange} width={3} />
      <Arrow x1={40} y1={150} x2={276} y2={142} color={C.purple} width={3} dashed />
      <circle cx={40} cy={150} r={4} fill={C.ink} />
      <circle cx={170} cy={60} r={4} fill={C.ink} />
      <circle cx={280} cy={140} r={4} fill={C.ink} />
      <T x={30} y={164} size={12}>A</T>
      <T x={170} y={46} size={12}>B</T>
      <T x={292} y={140} size={12}>C</T>
      <T x={92} y={96} size={13} fill={C.blue}>a</T>
      <T x={238} y={92} size={13} fill={C.orange}>b</T>
      <T x={160} y={166} size={12} fill={C.purple}>AC = a + b</T>
    </Svg>
  );
}

function Histogram() {
  const bars = [
    { from: 0, to: 10, fd: 1.5 },
    { from: 10, to: 30, fd: 2 },
    { from: 30, to: 40, fd: 4 },
    { from: 40, to: 60, fd: 1 },
  ];
  const X = (v: number) => 40 + v * 4.2;
  const Y = (fd: number) => 170 - fd * 32;
  return (
    <Svg label="A histogram with unequal class widths: the height is frequency density and the area of each bar is the frequency">
      <line x1={40} y1={170} x2={300} y2={170} stroke={C.ink} strokeWidth={2} />
      <line x1={40} y1={170} x2={40} y2={20} stroke={C.ink} strokeWidth={2} />
      {bars.map((b) => (
        <g key={b.from}>
          <rect x={X(b.from)} y={Y(b.fd)} width={X(b.to) - X(b.from)} height={170 - Y(b.fd)} fill={C.blue} opacity={0.7} stroke={C.blue} strokeWidth={1.5} />
          <T x={(X(b.from) + X(b.to)) / 2} y={Y(b.fd) - 8} size={9.5} fill={C.blue}>{`f = ${b.fd * (b.to - b.from)}`}</T>
        </g>
      ))}
      {[0, 10, 30, 40, 60].map((v) => <T key={v} x={X(v)} y={182} size={9.5} fill={C.muted}>{v}</T>)}
      <T x={44} y={14} size={9.5} weight={700} anchor="start" fill={C.muted}>frequency density</T>
      <T x={250} y={60} size={10} anchor="middle" fill={C.purple}>area = frequency</T>
    </Svg>
  );
}

// ---------- English ----------

function ShowDontTell() {
  return (
    <TwoCol
      label="Show, don’t tell. Telling: Sam was nervous, she was sad, he was angry. Showing: kept glancing at the door, blinked back tears, fists clenched white"
      left={{ title: 'Telling', sub: 'names the feeling', colour: C.red, fill: C.redSoft, items: [['😐', 'Sam was nervous.'], ['😢', 'She was sad.'], ['😠', 'He was angry.']] }}
      right={{ title: 'Showing', sub: 'lets the reader see it', colour: C.green, fill: C.greenSoft, items: [['👀', 'glanced at the door'], ['💧', 'blinked back tears'], ['✊', 'fists clenched white']] }}
    />
  );
}

function PoemQuestions() {
  return (
    <Tiles
      label="Questions to ask about a poem: who is speaking, to whom, what is happening, what is the tone, what is the big idea, and why that title"
      items={[
        { e: '🗣️', title: 'Who speaks?', sub: 'the speaker', colour: C.purpleSoft },
        { e: '👂', title: 'To whom?', sub: 'the listener', colour: C.blueSoft },
        { e: '🎬', title: 'What happens?', sub: 'the situation', colour: C.greenSoft },
        { e: '🎭', title: 'Tone?', sub: 'angry, tender…', colour: C.goldSoft },
        { e: '💡', title: 'Big idea?', sub: 'the theme', colour: C.orangeSoft },
        { e: '🏷️', title: 'Why the title?', sub: 'often a clue', colour: C.soft },
      ]}
    />
  );
}

function Enjambment() {
  return (
    <Svg h={180} label="Enjambment runs a sentence over the line break; a caesura is a pause in the middle of a line">
      <rect x={14} y={14} width={292} height={110} rx={12} fill={C.soft} />
      <text x={30} y={46} fontSize={14} fontStyle="italic" fill={C.ink}>The river ran and ran and</text>
      <text x={30} y={76} fontSize={14} fontStyle="italic" fill={C.ink}>never stopped.</text>
      <text x={30} y={106} fontSize={14} fontStyle="italic" fill={C.ink}>Then <tspan fill={C.red} fontWeight={900}>—</tspan> silence. Nothing moved.</text>
      <T x={234} y={42} size={18} fill={C.purple}>↵</T>
      <T x={160} y={146} size={11} fill={C.purple}>Enjambment: the sentence spills onto the next line</T>
      <T x={160} y={166} size={11} fill={C.red}>Caesura: a pause mid-line</T>
    </Svg>
  );
}

function StructureZoom() {
  return (
    <Chain
      label="Structure as a camera: a wide view of the setting, zoom in to one place, a close-up of a character, a shift such as a flashback, and an ending that links back"
      steps={[
        { t: '🎥 Wide shot: the whole town in the storm', fill: C.blueSoft },
        { t: '🔍 Zoom in: one lit window', fill: C.purpleSoft },
        { t: '🙂 Close-up: a girl waiting by the door', fill: C.pink + '33' },
        { t: '⏪ Shift: a flashback to that morning', fill: C.goldSoft },
        { t: '🔚 Ending: back to the window, now dark', fill: C.greenSoft },
      ]}
    />
  );
}

function Q5Marks() {
  return (
    <Svg h={170} label="Question 5 is worth 40 marks: 24 for content and organisation and 16 for technical accuracy. Spend 5 minutes planning, 40 writing and 5 checking">
      <T x={160} y={14} size={11}>40 marks</T>
      <rect x={20} y={26} width={168} height={40} rx={8} fill={C.purple} />
      <rect x={188} y={26} width={112} height={40} rx={8} fill={C.orange} />
      <T x={104} y={46} size={11} fill="#fff">24: content & organisation</T>
      <T x={244} y={46} size={11} fill="#fff">16: accuracy</T>
      <T x={160} y={92} size={11}>About 50 minutes</T>
      <rect x={20} y={104} width={28} height={36} rx={6} fill={C.goldSoft} stroke={C.gold} />
      <rect x={48} y={104} width={224} height={36} rx={6} fill={C.blueSoft} stroke={C.blue} />
      <rect x={272} y={104} width={28} height={36} rx={6} fill={C.greenSoft} stroke={C.green} />
      <T x={34} y={122} size={9.5}>5</T>
      <T x={160} y={122} size={11}>Write: 40 minutes</T>
      <T x={286} y={122} size={9.5}>5</T>
      <T x={34} y={154} size={9} weight={700} fill={C.muted}>plan</T>
      <T x={286} y={154} size={9} weight={700} fill={C.muted}>check</T>
    </Svg>
  );
}

function NonfictionDevices() {
  return (
    <Tiles
      label="Non-fiction devices: direct address, rhetorical questions, lists of three, facts and statistics, emotive language and anecdotes"
      items={[
        { e: '👉', title: 'Direct address', sub: '“you can help”', colour: C.blueSoft },
        { e: '❓', title: 'Rhetorical question', sub: 'makes you think', colour: C.purpleSoft },
        { e: '📋', title: 'List of three', sub: 'memorable rhythm', colour: C.goldSoft },
        { e: '📊', title: 'Facts & stats', sub: 'sound reliable', colour: C.greenSoft },
        { e: '😢', title: 'Emotive language', sub: 'stirs feelings', colour: C.redSoft },
        { e: '💬', title: 'Anecdote', sub: 'a personal story', colour: C.orangeSoft },
      ]}
    />
  );
}

function ArgumentStructure() {
  return (
    <Chain
      label="Structure for a viewpoint piece: a hook, a clear opinion, points with evidence, a counter-argument answered, and a call to action"
      steps={[
        { t: '🎣 Hook the reader', fill: C.goldSoft },
        { t: '📢 Give a clear opinion', fill: C.purpleSoft },
        { t: '🧱 Points, each with evidence', fill: C.blueSoft },
        { t: '🔁 Answer the other side', fill: C.orangeSoft },
        { t: '🚀 End with a call to action', fill: C.greenSoft },
      ]}
    />
  );
}

// ---------- biology ----------

function BodyDefences() {
  return (
    <Tiles
      label="The body’s defences: skin, nose hairs and mucus, cilia, stomach acid, tears, and white blood cells"
      items={[
        { e: '🖐️', title: 'Skin', sub: 'a barrier', colour: C.orangeSoft },
        { e: '👃', title: 'Nose', sub: 'hairs and mucus', colour: C.goldSoft },
        { e: '🫁', title: 'Cilia', sub: 'sweep mucus out', colour: C.pink + '33' },
        { e: '🧪', title: 'Stomach acid', sub: 'kills germs in food', colour: C.greenSoft },
        { e: '😢', title: 'Tears', sub: 'enzymes kill bacteria', colour: C.blueSoft },
        { e: '🛡️', title: 'White blood cells', sub: 'engulf, antibodies', colour: C.purpleSoft },
      ]}
    />
  );
}

function VaccineAntibiotic() {
  return (
    <TwoCol
      label="Vaccines prevent disease using a weakened pathogen so you make memory cells. Antibiotics treat bacterial infections but don’t work on viruses, and overuse leads to resistance"
      left={{ title: 'Vaccine', sub: 'prevents disease', colour: C.blue, fill: C.blueSoft, items: [['💉', 'weakened pathogen'], ['🧠', 'makes memory cells'], ['👥', 'herd immunity']] }}
      right={{ title: 'Antibiotic', sub: 'treats infection', colour: C.green, fill: C.greenSoft, items: [['💊', 'kills bacteria'], ['🚫', 'not viruses'], ['⚠️', 'overuse: resistance']] }}
    />
  );
}

function PlantParts() {
  return (
    <Svg label="The parts of a flowering plant: flower for reproduction, leaves for photosynthesis, stem for support and transport, and roots to absorb water and minerals">
      <rect x={0} y={150} width={320} height={50} fill="#d9c3a5" />
      <path d="M160 150 L160 56" stroke={C.green} strokeWidth={6} strokeLinecap="round" />
      <ellipse cx={130} cy={110} rx={28} ry={11} transform="rotate(-25 130 110)" fill={C.green} opacity={0.85} />
      <ellipse cx={190} cy={92} rx={28} ry={11} transform="rotate(25 190 92)" fill={C.green} opacity={0.85} />
      {[0, 60, 120, 180, 240, 300].map((a) => (
        <ellipse key={a} cx={160 + 13 * Math.cos((a * Math.PI) / 180)} cy={44 + 13 * Math.sin((a * Math.PI) / 180)} rx={9} ry={6} transform={`rotate(${a} ${160 + 13 * Math.cos((a * Math.PI) / 180)} ${44 + 13 * Math.sin((a * Math.PI) / 180)})`} fill={C.pink} />
      ))}
      <circle cx={160} cy={44} r={7} fill={C.gold} />
      <path d="M160 150 L140 180 M160 150 L160 190 M160 150 L182 178 M148 168 L132 172 M170 166 L190 166" stroke={C.brown} strokeWidth={3} strokeLinecap="round" />
      <Label x={250} y={30} px={172} py={42}>flower</Label>
      <Label x={250} y={80} px={204} py={90}>leaf</Label>
      <Label x={250} y={128} px={162} py={128}>stem</Label>
      <Label x={250} y={180} px={184} py={176}>roots</Label>
      <T x={60} y={40} size={9.5} weight={700} fill={C.muted}>reproduction</T>
      <T x={60} y={80} size={9.5} weight={700} fill={C.muted}>photosynthesis</T>
      <T x={60} y={140} size={9.5} weight={700} fill={C.muted}>support, transport</T>
      <T x={60} y={186} size={9.5} weight={700} fill={C.muted}>water, minerals</T>
    </Svg>
  );
}

// ---------- chemistry ----------

function MaterialProperties() {
  return (
    <Tiles
      label="Types of material: ceramics are hard but brittle, polymers are light and flexible, composites are strong and light, and metals are strong and conduct"
      items={[
        { e: '🏺', title: 'Ceramics', sub: 'hard but brittle', colour: C.orangeSoft },
        { e: '🧴', title: 'Polymers', sub: 'light, flexible', colour: C.blueSoft },
        { e: '🚲', title: 'Composites', sub: 'strong and light', colour: C.greenSoft },
        { e: '🔩', title: 'Metals', sub: 'strong, conduct', colour: C.soft },
      ]}
      cols={2}
    />
  );
}

function AlloyLayers() {
  const grid = (x0: number, alloy: boolean) => (
    <g>
      {Array.from({ length: 20 }, (_, i) => {
        const col = i % 5;
        const row = Math.floor(i / 5);
        const big = alloy && (i === 6 || i === 13);
        return <circle key={i} cx={x0 + 16 + col * 26} cy={40 + row * 26} r={big ? 15 : 11} fill={big ? C.orange : '#b8bcc8'} stroke={C.ink} strokeWidth={1} />;
      })}
    </g>
  );
  return (
    <Svg h={190} label="In a pure metal the atoms are in neat layers that slide easily, so it is soft. In an alloy, different-sized atoms disrupt the layers, so they can’t slide and it is harder">
      {grid(14, false)}
      {grid(176, true)}
      <Arrow x1={20} y1={150} x2={130} y2={150} color={C.blue} width={2.5} />
      <T x={78} y={168} size={11}>Pure metal</T>
      <T x={78} y={184} size={9.5} weight={700} fill={C.muted}>layers slide: soft</T>
      <T x={240} y={168} size={11}>Alloy</T>
      <T x={240} y={184} size={9.5} weight={700} fill={C.muted}>layers can’t slide: harder</T>
    </Svg>
  );
}

// ---------- history ----------

function HolocaustTimeline() {
  return (
    <Timeline
      label="Holocaust timeline: the Nazis take power in 1933, the Nuremberg Laws in 1935, Kristallnacht in 1938, the death camps from 1942, and the camps liberated in 1945"
      colour="#475569"
      events={[
        { date: '1933', text: 'Nazis take power', e: '🏛️' },
        { date: '1935', text: 'Nuremberg Laws', e: '📜' },
        { date: '1938', text: 'Kristallnacht', e: '🏚️' },
        { date: '1942', text: 'Death camps', e: '🚂' },
        { date: '1945', text: 'Camps liberated', e: '🕯️' },
      ]}
    />
  );
}

function IslamicGoldenAge() {
  return (
    <Timeline
      label="The Islamic Golden Age: Baghdad founded in 762, al-Khwarizmi’s algebra around 820, Ibn al-Haytham’s optics around 1011, Ibn Sina’s Canon of Medicine in 1025, and Baghdad destroyed in 1258"
      colour="#0b7285"
      events={[
        { date: '762', text: 'Baghdad founded', e: '🕌' },
        { date: 'c.820', text: 'Al-Khwarizmi’s algebra', e: '🔢' },
        { date: 'c.1011', text: 'Ibn al-Haytham’s optics', e: '👁️' },
        { date: '1025', text: 'Canon of Medicine', e: '📚' },
        { date: '1258', text: 'Mongols destroy Baghdad', e: '🔥' },
      ]}
    />
  );
}

function NopSource() {
  return (
    <Tiles
      label="Judging a source with N.O.P.: its nature (what type of source), its origin (who made it and when) and its purpose (why it was made)"
      items={[
        { e: '📄', title: 'Nature', sub: 'what type of source?', colour: C.goldSoft },
        { e: '✍️', title: 'Origin', sub: 'who made it, when?', colour: C.blueSoft },
        { e: '🎯', title: 'Purpose', sub: 'why was it made?', colour: C.greenSoft },
      ]}
      cols={3}
    />
  );
}

function HistoryEssay() {
  return (
    <Chain
      label="Plan for a how-far essay: answer the question, a paragraph agreeing with evidence, other factors with evidence, then a judgement weighing them"
      steps={[
        { t: '🎯 Intro: answer the question directly', fill: C.purpleSoft },
        { t: '✅ Agree: the stated factor + evidence', fill: C.greenSoft },
        { t: '🔀 Other factors + evidence', fill: C.blueSoft },
        { t: '⚖️ Weigh them: which mattered most?', fill: C.goldSoft },
        { t: '🏁 Judgement: clear and explained', fill: C.orangeSoft },
      ]}
    />
  );
}

// ---------- geography ----------

function ChinaIndia() {
  return (
    <TwoCol
      label="China and India compared: China has its capital in Beijing, a lot of manufacturing and high-speed rail; India has its capital in New Delhi, IT and services, and a monsoon climate. Each has about 1.4 billion people"
      left={{ title: 'China', sub: 'capital: Beijing', colour: C.red, fill: C.redSoft, items: [['🏭', 'manufacturing'], ['🚄', 'high-speed rail'], ['🏞️', 'Yangtze river']] }}
      right={{ title: 'India', sub: 'capital: New Delhi', colour: C.orange, fill: C.orangeSoft, items: [['💻', 'IT and services'], ['🌧️', 'monsoon rains'], ['🌊', 'River Ganges']] }}
      footer="about 1.4 billion people each"
    />
  );
}

function WaveTypes() {
  const wave = (x0: number, amp: number, wl: number) => {
    const pts: string[] = [];
    for (let x = 0; x <= 130; x += 2) pts.push(`${x0 + 10 + x},${(80 - amp * Math.sin((2 * Math.PI * x) / wl)).toFixed(1)}`);
    return pts.join(' ');
  };
  const panel = (x0: number, constructive: boolean) => (
    <g>
      <T x={x0 + 75} y={18} size={12} fill={constructive ? C.green : C.red}>{constructive ? 'Constructive' : 'Destructive'}</T>
      <T x={x0 + 75} y={34} size={9.5} weight={700} fill={C.muted}>{constructive ? 'low, gentle, far apart' : 'tall, steep, close together'}</T>
      <polyline points={constructive ? wave(x0, 7, 60) : wave(x0, 20, 32)} fill="none" stroke={C.blue} strokeWidth={3} />
      <line x1={x0 + 10} y1={156} x2={x0 + 140} y2={122} stroke={C.brown} strokeWidth={5} strokeLinecap="round" />
      <Arrow x1={x0 + 22} y1={142} x2={x0 + 128} y2={114} color={C.green} width={constructive ? 5 : 2} />
      <Arrow x1={x0 + 128} y1={136} x2={x0 + 22} y2={164} color={C.red} width={constructive ? 2 : 5} />
      <T x={x0 + 75} y={180} size={9.5} weight={700} fill={C.green}>{constructive ? 'strong swash' : 'weak swash'}</T>
      <T x={x0 + 75} y={194} size={9.5} weight={700} fill={C.red}>{constructive ? 'weak backwash: builds beach' : 'strong backwash: erodes'}</T>
    </g>
  );
  return (
    <Svg h={200} label="Constructive waves are low and gentle with a strong swash that builds beaches; destructive waves are tall and steep with a strong backwash that erodes them">
      {panel(6, true)}
      {panel(164, false)}
    </Svg>
  );
}

function CoastDefences() {
  return (
    <Tiles
      label="Coastal defences: hard engineering such as sea walls, groynes and rock armour; soft engineering such as beach nourishment and managed retreat"
      items={[
        { e: '🧱', title: 'Sea wall', sub: 'hard: reflects waves', colour: C.soft },
        { e: '🪵', title: 'Groynes', sub: 'hard: trap sand', colour: C.goldSoft },
        { e: '🪨', title: 'Rock armour', sub: 'hard: absorbs energy', colour: '#e5e7eb' },
        { e: '🏖️', title: 'Nourishment', sub: 'soft: adds sand', colour: C.orangeSoft },
        { e: '🌾', title: 'Managed retreat', sub: 'soft: let it flood', colour: C.greenSoft },
        { e: '💷', title: 'Cost', sub: 'hard costs far more', colour: C.redSoft },
      ]}
    />
  );
}

function MapTypes() {
  const panel = (x: number, y: number, title: string, body: JSX.Element) => (
    <g>
      <rect x={x} y={y} width={148} height={84} rx={10} fill={C.soft} stroke={C.line} />
      {body}
      <T x={x + 74} y={y + 76} size={10}>{title}</T>
    </g>
  );
  return (
    <Svg label="Map types: a choropleth map shades areas by value, a flow-line map shows movement with line widths, a dot map shows distribution, and isolines join points of equal value">
      {panel(8, 8, 'Choropleth', (
        <g>{[0.15, 0.4, 0.7, 0.9, 0.3, 0.55].map((o, i) => <rect key={i} x={24 + (i % 3) * 38} y={18 + Math.floor(i / 3) * 24} width={36} height={22} fill={C.purple} opacity={o} />)}</g>
      ))}
      {panel(164, 8, 'Flow lines', (
        <g>
          <Arrow x1={180} y1={30} x2={290} y2={30} color={C.blue} width={6} />
          <Arrow x1={180} y1={50} x2={270} y2={50} color={C.blue} width={3} />
          <Arrow x1={180} y1={64} x2={250} y2={64} color={C.blue} width={1.5} />
        </g>
      ))}
      {panel(8, 100, 'Dot map', (
        <g>{[[30, 120], [40, 128], [36, 112], [52, 124], [100, 140], [120, 118], [64, 140], [44, 136]].map(([cx, cy], i) => <circle key={i} cx={cx} cy={cy} r={3} fill={C.red} />)}</g>
      ))}
      {panel(164, 100, 'Isolines', (
        <g>
          {[12, 24, 36].map((r) => <ellipse key={r} cx={238} cy={132} rx={r * 1.8} ry={r * 0.7} fill="none" stroke={C.green} strokeWidth={1.8} />)}
        </g>
      ))}
    </Svg>
  );
}

function HomeFrontWw2() {
  return (
    <Tiles
      label="Britain in the Second World War: evacuation, rationing, the Blitz, women at work, the Battle of Britain and D-Day"
      items={[
        { e: '🧳', title: 'Evacuation', sub: 'children to the country', colour: C.goldSoft },
        { e: '🍞', title: 'Rationing', sub: 'food was limited', colour: C.orangeSoft },
        { e: '💥', title: 'The Blitz', sub: 'cities bombed 1940–41', colour: C.redSoft },
        { e: '🏭', title: 'Women at work', sub: 'factories and farms', colour: C.blueSoft },
        { e: '✈️', title: 'Battle of Britain', sub: 'RAF won, 1940', colour: C.purpleSoft },
        { e: '🚢', title: 'D-Day', sub: '6 June 1944', colour: C.greenSoft },
      ]}
    />
  );
}

function IslamicScholars() {
  return (
    <Tiles
      label="Scholars of the Islamic Golden Age: al-Khwarizmi and algebra, Ibn al-Haytham and optics, Ibn Sina and medicine, and free hospitals"
      items={[
        { e: '🔢', title: 'Al-Khwarizmi', sub: 'algebra, algorithms', colour: C.blueSoft },
        { e: '👁️', title: 'Ibn al-Haytham', sub: 'light and the eye', colour: C.purpleSoft },
        { e: '📚', title: 'Ibn Sina', sub: 'Canon of Medicine', colour: C.greenSoft },
        { e: '🏥', title: 'Hospitals', sub: 'free treatment', colour: C.goldSoft },
      ]}
      cols={2}
    />
  );
}

function KnowledgeRoute() {
  return (
    <Chain
      label="How knowledge travelled: from Greece, Persia and India to the House of Wisdom in Baghdad, through Spain and Sicily to European universities, helping spark the Renaissance"
      steps={[
        { t: 'Greek, Persian & Indian books', fill: C.goldSoft },
        { t: 'Translated & improved in Baghdad', fill: C.blueSoft },
        { t: 'Through Spain and Sicily', fill: C.greenSoft },
        { t: 'Into European universities', fill: C.purpleSoft },
        { t: 'Helps spark the Renaissance', fill: C.orangeSoft },
      ]}
    />
  );
}

function ChinaIndiaEconomy() {
  return (
    <Tiles
      label="How China and India make money: China’s factories and electronics, India’s IT and services, and many small farms in both"
      items={[
        { e: '🏭', title: 'China: factories', sub: 'the world’s factory', colour: C.redSoft },
        { e: '📱', title: 'China: electronics', sub: 'phones, toys, cars', colour: C.redSoft },
        { e: '💻', title: 'India: IT', sub: 'software, call centres', colour: C.orangeSoft },
        { e: '🚜', title: 'Both: farming', sub: 'many small farms', colour: C.greenSoft },
      ]}
      cols={2}
    />
  );
}

function GrowthChallenges() {
  return (
    <Tiles
      label="Challenges of fast growth in China and India: smog, traffic, slums and pressure on water, and responses such as solar power and new metro systems"
      items={[
        { e: '😷', title: 'Smog', sub: 'coal and traffic', colour: '#e5e7eb' },
        { e: '🚗', title: 'Traffic', sub: 'crowded roads', colour: C.orangeSoft },
        { e: '🏚️', title: 'Slums', sub: 'not enough housing', colour: C.goldSoft },
        { e: '💧', title: 'Water', sub: 'growing demand', colour: C.blueSoft },
        { e: '☀️', title: 'Solar & wind', sub: 'cleaner power', colour: C.greenSoft },
        { e: '🚇', title: 'Metros', sub: 'new rail systems', colour: C.purpleSoft },
      ]}
    />
  );
}

function Q4Steps() {
  return (
    <Chain
      label="Answering Paper 1 Question 4: read the statement, decide how far you agree, find evidence, analyse the writer’s methods, explain the effect, and link back to the statement"
      steps={[
        { t: '📖 Read the statement carefully', fill: C.goldSoft },
        { t: '🧭 Decide: how far do I agree?', fill: C.purpleSoft },
        { t: '🔍 Pick short quotations', fill: C.blueSoft },
        { t: '🛠️ Analyse the writer’s methods', fill: C.greenSoft },
        { t: '🔗 Link back to the statement', fill: C.orangeSoft },
      ]}
    />
  );
}

function InterpretationsCompare() {
  return (
    <TwoCol
      label="Interpretations: how they differ (what each says, what it emphasises, when it was written) and which is more convincing (check against your knowledge, what is missing, judge both)"
      left={{ title: 'How they differ', sub: 'and why', colour: C.blue, fill: C.blueSoft, items: [['🔍', 'what each says'], ['🎯', 'what they stress'], ['🗓️', 'when written']] }}
      right={{ title: 'More convincing?', sub: 'your judgement', colour: C.purple, fill: C.purpleSoft, items: [['📚', 'test with knowledge'], ['🧩', 'what’s missing?'], ['⚖️', 'judge both']] }}
    />
  );
}

function ClimateGraph() {
  const rain = [80, 60, 65, 55, 50, 55, 60, 70, 65, 85, 90, 85];
  const temp = [4, 5, 7, 9, 12, 15, 17, 17, 14, 11, 7, 5];
  const x = (i: number) => 40 + i * 22;
  return (
    <Svg label="A climate graph for a UK town: rainfall shown as bars each month and temperature as a line, warmest in July and August">
      <line x1={34} y1={170} x2={306} y2={170} stroke={C.ink} strokeWidth={2} />
      {rain.map((r, i) => <rect key={i} x={x(i) - 8} y={170 - r * 1.3} width={16} height={r * 1.3} fill={C.blue} opacity={0.6} />)}
      <polyline points={temp.map((t, i) => `${x(i)},${170 - t * 7}`).join(' ')} fill="none" stroke={C.red} strokeWidth={3} />
      {'JFMAMJJASOND'.split('').map((m, i) => <T key={i} x={x(i)} y={182} size={9} fill={C.muted}>{m}</T>)}
      <T x={60} y={16} size={10} anchor="start" fill={C.blue}>bars: rainfall (mm)</T>
      <T x={200} y={16} size={10} anchor="start" fill={C.red}>line: temperature (°C)</T>
    </Svg>
  );
}

export const moreUnitsDiagrams: Record<string, () => JSX.Element> = {
  'home-front-ww2': HomeFrontWw2,
  'islamic-scholars': IslamicScholars,
  'knowledge-route': KnowledgeRoute,
  'china-india-economy': ChinaIndiaEconomy,
  'growth-challenges': GrowthChallenges,
  'q4-steps': Q4Steps,
  'interpretations-compare': InterpretationsCompare,
  'climate-graph': ClimateGraph,
  'negative-line': NegativeLine,
  'best-buy': BestBuy,
  'compound-shape': CompoundShape,
  'problem-steps': ProblemSteps,
  'sine-cosine': SineCosine,
  'vector-path': VectorPath,
  histogram: Histogram,
  'show-dont-tell': ShowDontTell,
  'poem-questions': PoemQuestions,
  enjambment: Enjambment,
  'structure-zoom': StructureZoom,
  'q5-marks': Q5Marks,
  'nonfiction-devices': NonfictionDevices,
  'argument-structure': ArgumentStructure,
  'body-defences': BodyDefences,
  'vaccine-antibiotic': VaccineAntibiotic,
  'plant-parts': PlantParts,
  'material-properties': MaterialProperties,
  'alloy-layers': AlloyLayers,
  'holocaust-timeline': HolocaustTimeline,
  'islamic-golden-age': IslamicGoldenAge,
  'nop-source': NopSource,
  'history-essay': HistoryEssay,
  'china-india': ChinaIndia,
  'wave-types': WaveTypes,
  'coast-defences': CoastDefences,
  'map-types': MapTypes,
};
