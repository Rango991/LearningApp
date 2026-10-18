import { Arrow, C, Label, Svg, T, Tiles, TwoCol } from './kit';

// Diagrams for the extra KS3 Geography units (content/geography-ks3.ts).

function AirMasses() {
  return (
    <Svg h={206} label="Air masses that reach the UK: Arctic maritime from the north, polar maritime from the north-west, polar continental from the east, tropical continental from the south-east, and tropical maritime from the south-west">
      <path d="M150 62 L166 58 L172 74 L184 84 L190 104 L198 120 L186 132 L160 136 L148 126 L154 110 L146 96 L152 82 Z" fill={C.greenSoft} stroke={C.green} strokeWidth={2} />
      <T x={170} y={104} size={11}>UK</T>
      <Arrow x1={164} y1={6} x2={164} y2={52} color={C.blue} width={3} />
      <T x={172} y={16} size={9.5} anchor="start" fill={C.blue}>Arctic maritime: cold, snowy</T>
      <Arrow x1={44} y1={30} x2={140} y2={76} color={C.blue} width={3} />
      <T x={8} y={20} size={9.5} anchor="start" fill={C.blue}>Polar maritime:</T>
      <T x={8} y={46} size={9.5} anchor="start" fill={C.blue}>cold, wet</T>
      <Arrow x1={312} y1={100} x2={206} y2={104} color={C.purple} width={3} />
      <T x={312} y={84} size={9.5} anchor="end" fill={C.purple}>Polar continental:</T>
      <T x={312} y={116} size={9.5} anchor="end" fill={C.purple}>cold, dry (winter)</T>
      <Arrow x1={296} y1={178} x2={200} y2={134} color={C.orange} width={3} />
      <T x={314} y={196} size={9.5} anchor="end" fill={C.orange}>Tropical continental: hot, dry</T>
      <Arrow x1={28} y1={172} x2={140} y2={130} color={C.red} width={3} />
      <T x={8} y={196} size={9.5} anchor="start" fill={C.red}>Tropical maritime: warm, wet</T>
    </Svg>
  );
}

function PressureSystems() {
  return (
    <TwoCol
      label="Depressions: low pressure, air rises, clouds form, rain and wind. Anticyclones: high pressure, air sinks, clear skies, frost or fog in winter"
      left={{ title: 'Depression', sub: 'low pressure', colour: C.blue, fill: C.blueSoft, items: [['⬆️', 'air rises'], ['☁️', 'clouds form'], ['🌧️', 'rain and wind']] }}
      right={{ title: 'Anticyclone', sub: 'high pressure', colour: C.orange, fill: C.orangeSoft, items: [['⬇️', 'air sinks'], ['☀️', 'clear skies'], ['🌫️', 'winter frost, fog']] }}
    />
  );
}

function StormArwen() {
  return (
    <Tiles
      label="Storm Arwen, November 2021: gusts of 98 mph, around a million homes without power, millions of trees down, roads and railways blocked, the army checking isolated homes, and compensation from power companies"
      items={[
        { e: '🌬️', title: '98 mph gusts', sub: 'from the north', colour: C.blueSoft },
        { e: '🔌', title: 'Power cuts', sub: 'about a million homes', colour: C.goldSoft },
        { e: '🌳', title: 'Trees down', sub: 'millions fell', colour: C.greenSoft },
        { e: '🚧', title: 'Blocked routes', sub: 'roads and railways', colour: C.orangeSoft },
        { e: '🪖', title: 'Army help', sub: 'checking isolated homes', colour: C.soft },
        { e: '💷', title: 'Compensation', sub: 'from power companies', colour: C.purpleSoft },
      ]}
    />
  );
}

function SettlementSites() {
  return (
    <Tiles
      label="Site factors for early settlements: a wet point for water, a dry point above flooding, defence, a bridging point, shelter, and resources"
      items={[
        { e: '💧', title: 'Wet point', sub: 'water supply', colour: C.blueSoft },
        { e: '⛰️', title: 'Dry point', sub: 'safe from floods', colour: C.goldSoft },
        { e: '🛡️', title: 'Defence', sub: 'hill or river bend', colour: C.redSoft },
        { e: '🌉', title: 'Bridging point', sub: 'river crossing', colour: C.purpleSoft },
        { e: '🌲', title: 'Shelter', sub: 'from wind and cold', colour: C.greenSoft },
        { e: '🪵', title: 'Resources', sub: 'wood, stone, farmland', colour: C.orangeSoft },
      ]}
    />
  );
}

function CityZones() {
  const zones = [
    { r: 90, fill: '#e8f5e9', t: 'Rural-urban fringe', ex: 'Ponteland' },
    { r: 68, fill: C.greenSoft, t: 'Suburbs', ex: 'Gosforth, Jesmond' },
    { r: 46, fill: C.orangeSoft, t: 'Inner city', ex: 'Byker' },
    { r: 22, fill: C.redSoft, t: 'CBD', ex: 'Grey Street' },
  ];
  return (
    <Svg label="City zones in rings from the centre: the CBD, the inner city, the suburbs and the rural-urban fringe, with Newcastle examples">
      {zones.map((z) => <circle key={z.t} cx={104} cy={100} r={z.r} fill={z.fill} stroke={C.line} strokeWidth={1.5} />)}
      {zones.slice().reverse().map((z, i) => {
        const ry = 40 + i * 40;
        return (
          <g key={z.t}>
            <line x1={104 + z.r - 6} y1={100} x2={208} y2={ry} stroke={C.muted} strokeWidth={1} />
            <circle cx={104 + z.r - 6} cy={100} r={2.5} fill={C.ink} />
            <T x={212} y={ry - 7} size={11} anchor="start">{z.t}</T>
            <T x={212} y={ry + 8} size={9.5} weight={700} anchor="start" fill={C.muted}>{`e.g. ${z.ex}`}</T>
          </g>
        );
      })}
    </Svg>
  );
}

function PopulationDistribution() {
  return (
    <TwoCol
      label="Densely populated places have flat fertile land, water, a mild climate and jobs. Sparsely populated places are deserts, mountains, the poles and thick rainforest"
      left={{ title: 'Densely populated', sub: 'lots of people', colour: C.green, fill: C.greenSoft, items: [['🌾', 'flat, fertile land'], ['🏞️', 'rivers and coasts'], ['🏙️', 'jobs in cities']] }}
      right={{ title: 'Sparsely populated', sub: 'few people', colour: C.orange, fill: C.orangeSoft, items: [['🏜️', 'hot deserts'], ['🏔️', 'high mountains'], ['🧊', 'polar regions']] }}
    />
  );
}

function GlacierParts() {
  const ground = '0,40 60,50 130,96 200,132 270,160 320,172';
  return (
    <Svg label="A valley glacier: snow builds up high on the mountain and is squashed into ice, the ice flows downhill, plucking and abrasion erode the valley floor, and moraine is dumped where it melts">
      <polygon points={`${ground} 320,200 0,200`} fill="#cbb594" />
      <polygon points="20,22 60,30 130,76 200,112 262,150 270,160 200,132 130,96 60,50 20,44" fill="#dbeefe" stroke={C.blue} strokeWidth={2} />
      <Arrow x1={70} y1={44} x2={180} y2={112} color={C.blue} width={2.5} />
      <T x={30} y={12} size={10} anchor="start" fill={C.blue}>snow builds up and becomes ice</T>
      <T x={210} y={92} size={10} anchor="start" fill={C.blue}>ice flows downhill</T>
      {[[276, 158], [284, 162], [280, 154], [290, 165]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={4} fill="#8c6a43" />)}
      <Label x={104} y={160} px={96} py={74}>plucking</Label>
      <Label x={176} y={186} px={190} py={128}>abrasion</Label>
      <Label x={300} y={138} px={284} py={156} anchor="end">moraine</Label>
    </Svg>
  );
}

function GlacialLandforms() {
  return (
    <Svg label="Glacial landforms: two armchair-shaped corries with tarns, separated by a knife-edge arête; a river makes a V-shaped valley but a glacier makes a U-shaped valley">
      <path d="M10 50 Q30 140 70 132 Q100 126 110 34 Q120 126 150 132 Q190 140 200 50 L200 190 L10 190 Z" fill="#b8b2a7" stroke={C.ink} strokeWidth={2} />
      <ellipse cx={62} cy={131} rx={24} ry={5} fill={C.blue} opacity={0.7} />
      <ellipse cx={158} cy={131} rx={24} ry={5} fill={C.blue} opacity={0.7} />
      <T x={110} y={22} size={11} fill={C.red}>arête</T>
      <T x={62} y={160} size={10}>corrie</T>
      <T x={62} y={174} size={9.5} weight={700} fill={C.blue}>with a tarn</T>
      <T x={158} y={160} size={10}>corrie</T>
      <T x={158} y={174} size={9.5} weight={700} fill={C.blue}>with a tarn</T>
      <path d="M214 40 L238 96 L262 40" fill="none" stroke={C.ink} strokeWidth={3} />
      <path d="M236 92 h4" stroke={C.blue} strokeWidth={4} />
      <path d="M214 120 Q214 172 238 172 Q262 172 262 120" fill="none" stroke={C.ink} strokeWidth={3} />
      <T x={270} y={62} size={10} anchor="start">V-shaped:</T>
      <T x={270} y={76} size={9.5} weight={700} anchor="start" fill={C.muted}>river</T>
      <T x={270} y={142} size={10} anchor="start">U-shaped:</T>
      <T x={270} y={156} size={9.5} weight={700} anchor="start" fill={C.muted}>glacier</T>
    </Svg>
  );
}

function PolesCompare() {
  return (
    <TwoCol
      label="Antarctica: a continent at the South Pole with an ice sheet, penguins and only visiting scientists. The Arctic: frozen ocean at the North Pole with polar bears and Inuit communities"
      left={{ title: 'Antarctica', sub: 'South Pole: a continent', colour: C.blue, fill: C.blueSoft, items: [['🧊', 'ice sheet on land'], ['🐧', 'penguins'], ['🔬', 'only scientists']] }}
      right={{ title: 'Arctic', sub: 'North Pole: frozen ocean', colour: C.purple, fill: C.purpleSoft, items: [['🌊', 'sea ice on ocean'], ['🐻‍❄️', 'polar bears'], ['🏘️', 'Inuit communities']] }}
    />
  );
}

function KenyaFacts() {
  return (
    <Tiles
      label="Kenya: in East Africa on the equator, about 55 million people, capital Nairobi, Mount Kenya, the Maasai Mara, and M-Pesa mobile money"
      items={[
        { e: '📍', title: 'East Africa', sub: 'on the equator', colour: C.soft },
        { e: '👥', title: '55 million', sub: 'people', colour: C.blueSoft },
        { e: '🏙️', title: 'Nairobi', sub: 'the capital', colour: C.purpleSoft },
        { e: '🏔️', title: 'Mount Kenya', sub: 'snow on the equator', colour: C.greenSoft },
        { e: '🦒', title: 'Maasai Mara', sub: 'wildlife reserve', colour: C.goldSoft },
        { e: '📱', title: 'M-Pesa', sub: 'mobile money', colour: C.orangeSoft },
      ]}
    />
  );
}

function KenyaTourism() {
  return (
    <TwoCol
      label="Tourism in Kenya. Benefits: jobs, money for conservation, better roads and airports. Problems: profits leaving the country, seasonal low-paid jobs, disturbed wildlife"
      left={{ title: 'Benefits', sub: 'for Kenya', colour: C.green, fill: C.greenSoft, items: [['💼', 'jobs'], ['🦏', 'conservation money'], ['✈️', 'roads and airports']] }}
      right={{ title: 'Problems', sub: 'to manage', colour: C.red, fill: C.redSoft, items: [['💸', 'profits leak abroad'], ['📆', 'seasonal, low pay'], ['🐘', 'wildlife disturbed']] }}
    />
  );
}

function PopPyramids() {
  const kenya = [46, 40, 34, 27, 20, 14, 8, 4];
  const japan = [17, 19, 21, 24, 27, 29, 30, 27];
  const pyramid = (cx: number, widths: number[], title: string, sub: string, colour: string) => (
    <g>
      <T x={cx} y={14} size={12} fill={colour}>{title}</T>
      {widths.map((w, i) => {
        const y = 152 - i * 15;
        return (
          <g key={i}>
            <rect x={cx - 2 - w} y={y} width={w} height={12} fill={C.blue} opacity={0.75} />
            <rect x={cx + 2} y={y} width={w} height={12} fill={C.pink} opacity={0.75} />
          </g>
        );
      })}
      <T x={cx} y={182} size={9.5} weight={700} fill={C.muted}>{sub}</T>
    </g>
  );
  return (
    <Svg label="Population pyramids: Kenya has a wide base and a narrow top, a young population; Japan is top-heavy, an ageing population">
      {pyramid(84, kenya, 'Kenya', 'wide base: young, growing', C.orange)}
      {pyramid(236, japan, 'Japan', 'top-heavy: ageing', C.purple)}
      <T x={160} y={40} size={9} weight={700} fill={C.muted}>older ↑</T>
      <T x={160} y={160} size={9} weight={700} fill={C.muted}>young</T>
      <T x={84} y={196} size={9} fill={C.blue}>males ◀ ▶ <tspan fill={C.pink}>females</tspan></T>
      <T x={236} y={196} size={9} fill={C.blue}>males ◀ ▶ <tspan fill={C.pink}>females</tspan></T>
    </Svg>
  );
}

function ChocolateChain() {
  const parts = [
    { t: 'Shop', v: 44, fill: C.purple },
    { t: 'Chocolate company', v: 35, fill: C.blue },
    { t: 'Processing, transport', v: 14, fill: C.orange },
    { t: 'Farmer', v: 7, fill: C.green },
  ];
  let x = 10;
  return (
    <Svg h={150} label="Roughly who gets each £1 spent on chocolate: the shop about 44p, the chocolate company about 35p, processing and transport about 14p, and the cocoa farmer about 7p">
      <T x={160} y={14} size={11}>Roughly, for every £1 spent on chocolate</T>
      {parts.map((p) => {
        const w = p.v * 3;
        const el = (
          <g key={p.t}>
            <rect x={x} y={30} width={w} height={40} fill={p.fill} />
            <T x={x + w / 2} y={50} size={11} fill="#fff">{`${p.v}p`}</T>
          </g>
        );
        x += w;
        return el;
      })}
      <T x={76} y={88} size={10} fill={C.purple}>Shop</T>
      <T x={194} y={88} size={10} fill={C.blue}>Chocolate company</T>
      <T x={265} y={104} size={9.5} fill={C.orange}>Processing</T>
      <Label x={280} y={128} px={300} py={70} anchor="end">cocoa farmer</Label>
    </Svg>
  );
}

function TncProsCons() {
  return (
    <TwoCol
      label="TNCs in lower-wage countries. Advantages: jobs, skills and investment. Disadvantages: low wages, unsafe conditions, and profits sent abroad"
      left={{ title: 'Advantages', sub: 'for the host country', colour: C.green, fill: C.greenSoft, items: [['💼', 'new jobs'], ['🎓', 'new skills'], ['🏗️', 'investment']] }}
      right={{ title: 'Disadvantages', sub: 'for the host country', colour: C.red, fill: C.redSoft, items: [['💷', 'low wages'], ['⚠️', 'unsafe factories'], ['✈️', 'profits leave']] }}
    />
  );
}

function Fairtrade() {
  return (
    <Tiles
      label="How Fairtrade helps: a guaranteed minimum price, a Fairtrade Premium for community projects, standards such as no child labour, and the Fairtrade mark for shoppers"
      items={[
        { e: '💷', title: 'Minimum price', sub: 'even if prices fall', colour: C.greenSoft },
        { e: '🏫', title: 'Premium', sub: 'schools, water, tools', colour: C.blueSoft },
        { e: '🚸', title: 'Standards', sub: 'no child labour', colour: C.goldSoft },
        { e: '🏷️', title: 'The mark', sub: 'look for it in shops', colour: C.purpleSoft },
      ]}
      cols={2}
    />
  );
}

export const geographyKs3Diagrams: Record<string, () => JSX.Element> = {
  'air-masses': AirMasses,
  'pressure-systems': PressureSystems,
  'storm-arwen': StormArwen,
  'settlement-sites': SettlementSites,
  'city-zones': CityZones,
  'population-distribution': PopulationDistribution,
  'glacier-parts': GlacierParts,
  'glacial-landforms': GlacialLandforms,
  'poles-compare': PolesCompare,
  'kenya-facts': KenyaFacts,
  'kenya-tourism': KenyaTourism,
  'pop-pyramids': PopPyramids,
  'chocolate-chain': ChocolateChain,
  'tnc-pros-cons': TncProsCons,
  fairtrade: Fairtrade,
};
