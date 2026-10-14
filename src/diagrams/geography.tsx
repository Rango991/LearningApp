import { Arrow, C, CurveArrow, E, Label, Svg, T, Tiles } from './kit';

// KS3 Geography diagrams.

function GridRef() {
  const x = (e: number) => 60 + (e - 23) * 54;
  const y = (n: number) => 176 - (n - 46) * 54;
  return (
    <Svg h={196} label="A map grid with eastings 23 to 26 along the bottom and northings 46 to 49 up the side. Square 2447 is shaded, named from its bottom-left corner. The point 245473 is halfway across and three tenths up that square">
      <rect x={x(24)} y={y(48)} width={54} height={54} fill={C.purpleSoft} />
      {[23, 24, 25, 26].map((e) => (
        <g key={e}>
          <line x1={x(e)} y1={y(46)} x2={x(e)} y2={y(49)} stroke={C.muted} strokeWidth={1.5} />
          <T x={x(e)} y={188} size={11}>{e}</T>
        </g>
      ))}
      {[46, 47, 48, 49].map((n) => (
        <g key={n}>
          <line x1={x(23)} y1={y(n)} x2={x(26)} y2={y(n)} stroke={C.muted} strokeWidth={1.5} />
          <T x={46} y={y(n)} size={11} anchor="end">{n}</T>
        </g>
      ))}
      <circle cx={x(24)} cy={y(47)} r={4} fill={C.purple} />
      <circle cx={x(24.5)} cy={y(47.3)} r={5} fill={C.red} />
      <T x={236} y={40} size={11} anchor="start" fill={C.purple}>Square 2447</T>
      <T x={236} y={56} size={9.5} weight={700} fill={C.muted} anchor="start">named from its</T>
      <T x={236} y={69} size={9.5} weight={700} fill={C.muted} anchor="start">bottom-left corner</T>
      <T x={236} y={104} size={11} anchor="start" fill={C.red}>Point 245473</T>
      <T x={236} y={120} size={9.5} weight={700} fill={C.muted} anchor="start">5 tenths along,</T>
      <T x={236} y={133} size={9.5} weight={700} fill={C.muted} anchor="start">3 tenths up</T>
      <T x={236} y={166} size={9.5} weight={700} fill={C.green} anchor="start">along, then up</T>
    </Svg>
  );
}

function CompassRose() {
  const cx = 92;
  const cy = 100;
  const pts = [
    { a: 90, t: 'N', main: true }, { a: 45, t: 'NE' }, { a: 0, t: 'E', main: true }, { a: -45, t: 'SE' },
    { a: -90, t: 'S', main: true }, { a: -135, t: 'SW' }, { a: 180, t: 'W', main: true }, { a: 135, t: 'NW' },
  ];
  const p = (deg: number, r: number) => [cx + r * Math.cos((deg * Math.PI) / 180), cy - r * Math.sin((deg * Math.PI) / 180)];
  return (
    <Svg h={200} label="A compass rose with north, north-east, east, south-east, south, south-west, west and north-west, and a scale bar where 4 centimetres on a 1 to 25,000 map is 1 kilometre">
      {pts.map((q) => {
        const tip = p(q.a, q.main ? 62 : 40);
        const l = p(q.a + 90, 9);
        const r = p(q.a - 90, 9);
        const lab = p(q.a, q.main ? 78 : 56);
        return (
          <g key={q.t}>
            <polygon points={`${tip[0]},${tip[1]} ${l[0]},${l[1]} ${cx},${cy} `} fill={q.main ? C.purple : C.purpleSoft} stroke={C.purple} strokeWidth={1} />
            <polygon points={`${tip[0]},${tip[1]} ${r[0]},${r[1]} ${cx},${cy} `} fill={q.main ? '#5a32c9' : '#d3c6ff'} stroke={C.purple} strokeWidth={1} />
            <T x={lab[0]} y={lab[1]} size={q.main ? 14 : 10} fill={q.main ? C.ink : C.muted}>{q.t}</T>
          </g>
        );
      })}
      <T x={250} y={40} size={11}>Scale 1:25,000</T>
      {[0, 1, 2, 3].map((i) => <rect key={i} x={194 + i * 28} y={56} width={28} height={10} fill={i % 2 ? '#fff' : C.ink} stroke={C.ink} strokeWidth={1} />)}
      <T x={194} y={78} size={9.5} weight={700} fill={C.muted}>0</T>
      <T x={250} y={78} size={9.5} weight={700} fill={C.muted}>500 m</T>
      <T x={306} y={78} size={9.5} weight={700} fill={C.muted}>1 km</T>
      <T x={250} y={98} size={10} weight={700} fill={C.muted}>each 1 cm = 250 m</T>
      <T x={250} y={140} size={10.5} fill={C.purple}>Never Eat</T>
      <T x={250} y={156} size={10.5} fill={C.purple}>Shredded Wheat</T>
      <T x={250} y={174} size={9.5} weight={700} fill={C.muted}>(clockwise from N)</T>
    </Svg>
  );
}

function Contours() {
  const rings = [
    { cx: 240, rx: 70, ry: 62, h: '100' },
    { cx: 230, rx: 52, ry: 46, h: '200' },
    { cx: 220, rx: 34, ry: 30, h: '300' },
    { cx: 210, rx: 16, ry: 14, h: '400' },
  ];
  return (
    <Svg h={200} label="A hill shown from the side and as contour lines on a map. Where the hill is steep the contour lines are close together; where it is gentle they are far apart">
      <T x={76} y={14} size={11}>Side view</T>
      {[140, 110, 80, 50].map((yy, i) => (
        <g key={yy}>
          <line x1={10} y1={yy} x2={150} y2={yy} stroke={C.line} strokeWidth={1} strokeDasharray="3 3" />
          <T x={152} y={yy} size={8} weight={700} fill={C.muted} anchor="start">{(i + 1) * 100}</T>
        </g>
      ))}
      <path d="M 10 170 L 26 140 L 34 110 L 42 80 L 50 50 L 56 40 C 64 40 70 46 80 50 L 104 80 L 124 110 L 140 140 L 150 156 L 150 170 Z" fill={C.greenSoft} stroke={C.green} strokeWidth={2.5} strokeLinejoin="round" />
      <T x={30} y={186} size={10} fill={C.red}>steep</T>
      <T x={118} y={186} size={10} fill={C.green}>gentle</T>
      <T x={240} y={14} size={11}>Map view</T>
      {rings.map((r) => (
        <g key={r.h}>
          <ellipse cx={r.cx} cy={100} rx={r.rx} ry={r.ry} fill="none" stroke={C.brown} strokeWidth={2} />
          <T x={r.cx + r.rx - 8} y={100} size={8} weight={700} fill={C.brown}>{r.h}</T>
        </g>
      ))}
      <T x={186} y={186} size={10} fill={C.red}>close = steep</T>
      <T x={278} y={186} size={10} fill={C.green}>far = gentle</T>
    </Svg>
  );
}

function WeatherInstruments() {
  return (
    <Tiles
      label="Weather instruments: thermometer measures temperature, rain gauge measures rainfall, anemometer measures wind speed, wind vane shows wind direction, barometer measures air pressure"
      items={[
        { e: '🌡️', title: 'Thermometer', sub: 'temperature', colour: C.redSoft },
        { e: '🌧️', title: 'Rain gauge', sub: 'rainfall', colour: C.blueSoft },
        { e: '🌬️', title: 'Anemometer', sub: 'wind speed', colour: C.greenSoft },
        { e: '🚩', title: 'Wind vane', sub: 'wind direction', colour: C.goldSoft },
        { e: '⏲️', title: 'Barometer', sub: 'air pressure', colour: C.purpleSoft },
      ]}
    />
  );
}

function ReliefRainfall() {
  return (
    <Svg h={200} label="Relief rainfall: moist air from the sea is forced up over mountains, cools and condenses into clouds, and rain falls on the windward side. The air sinks on the other side, leaving a dry rain shadow">
      <rect x={0} y={170} width={80} height={30} fill={C.blueSoft} />
      <T x={40} y={186} size={10} fill={C.blue}>sea</T>
      <polygon points="80,200 170,58 300,200" fill="#cfe8c4" stroke={C.green} strokeWidth={2.5} strokeLinejoin="round" />
      <path d="M 170 58 L 158 77 L 166 74 L 172 80 L 180 72 Z" fill="#fff" />
      <CurveArrow d="M 10 150 C 60 150 90 130 110 100 C 125 78 135 60 148 44" color={C.blue} />
      <T x={8} y={136} size={10} anchor="start" fill={C.blue}>moist air</T>
      <E e="🌧️" x={150} y={30} size={42} />
      <T x={96} y={20} size={10} anchor="end">cools, condenses</T>
      <T x={150} y={156} size={11} fill={C.blue}>wet</T>
      <T x={150} y={170} size={9} weight={700} fill={C.muted}>windward</T>
      <CurveArrow d="M 196 40 C 230 50 250 90 280 140" color={C.orange} />
      <T x={262} y={70} size={9.5} weight={700} fill={C.orange} anchor="start">warmer,</T>
      <T x={262} y={83} size={9.5} weight={700} fill={C.orange} anchor="start">drier</T>
      <T x={232} y={168} size={11} fill={C.brown}>dry</T>
      <T x={232} y={182} size={9} weight={700} fill={C.muted}>rain shadow</T>
    </Svg>
  );
}

function Biomes() {
  return (
    <Tiles
      label="Biomes: tropical rainforest is hot and wet, hot desert is very dry, savanna has wet and dry seasons, temperate forest is mild like the UK, tundra is freezing with no trees"
      items={[
        { e: '🌴', title: 'Rainforest', sub: 'hot and wet', colour: C.greenSoft },
        { e: '🏜️', title: 'Hot desert', sub: 'very dry', colour: C.goldSoft },
        { e: '🦒', title: 'Savanna', sub: 'wet and dry seasons', colour: C.orangeSoft },
        { e: '🌳', title: 'Temperate', sub: 'mild, like the UK', colour: C.blueSoft },
        { e: '❄️', title: 'Tundra', sub: 'freezing, no trees', colour: C.purpleSoft },
      ]}
    />
  );
}

function WaterCycle() {
  const land = (x: number) => 160 - ((x - 130) * 80) / 190;
  return (
    <Svg h={200} label="The water cycle: water evaporates from the sea, condenses into clouds, falls as precipitation, plants transpire, and water returns to the sea by surface runoff and through the ground after infiltration">
      <rect x={0} y={160} width={134} height={40} fill={C.blueSoft} />
      <T x={40} y={182} size={10} fill={C.blue}>sea</T>
      <polygon points={`130,160 320,${land(320)} 320,200 130,200`} fill="#cfe8c4" stroke={C.green} strokeWidth={2} />
      <E e="☀️" x={28} y={28} size={36} />
      <E e="☁️" x={176} y={36} size={48} />
      <E e="☁️" x={228} y={30} size={40} />
      <T x={204} y={8} size={10}>condensation</T>
      <CurveArrow d="M 78 156 C 90 120 110 90 142 54" color={C.orange} />
      <T x={90} y={104} size={10} anchor="end" fill={C.orange}>evaporation</T>
      {[208, 222, 236].map((rx) => <line key={rx} x1={rx} y1={58} x2={rx - 6} y2={land(rx) - 14} stroke={C.blue} strokeWidth={2} strokeDasharray="5 4" />)}
      <T x={198} y={74} size={10} anchor="end" fill={C.blue}>precipitation</T>
      <E e="🌳" x={290} y={land(290) - 18} size={34} />
      <Arrow x1={290} y1={land(290) - 38} x2={290} y2={44} color={C.green} width={2} />
      <T x={312} y={128} size={9.5} anchor="end" fill={C.green}>transpiration</T>
      <Arrow x1={190} y1={land(190) - 4} x2={150} y2={land(150) - 4} color={C.blue} width={2.5} />
      <T x={186} y={160} size={9.5} fill={C.ink}>runoff</T>
      <Arrow x1={215} y1={land(215) + 6} x2={215} y2={176} color={C.brown} width={2} />
      <T x={219} y={188} size={9.5} anchor="start" fill={C.brown}>infiltration</T>
    </Svg>
  );
}

function RiverTransport() {
  return (
    <Svg h={200} label="How a river transports material: traction rolls boulders along the bed, saltation bounces pebbles, suspension carries fine silt in the water, and solution carries dissolved minerals">
      <rect x={8} y={26} width={304} height={126} rx={6} fill={C.blueSoft} />
      <rect x={8} y={150} width={304} height={16} fill="#c9a77c" />
      <Arrow x1={24} y1={42} x2={110} y2={42} color={C.blue} />
      <T x={120} y={42} size={10} anchor="start" fill={C.blue}>river flow</T>
      <circle cx={60} cy={134} r={16} fill="#9a93ad" stroke={C.ink} strokeWidth={1.5} />
      <CurveArrow d="M 44 108 C 52 100 70 100 78 110" color={C.ink} width={2} />
      <path d="M 106 150 Q 120 112 134 150 Q 148 112 162 150" fill="none" stroke={C.ink} strokeWidth={1.5} strokeDasharray="4 3" />
      <circle cx={162} cy={145} r={5} fill="#9a93ad" stroke={C.ink} strokeWidth={1} />
      {[[205, 70], [220, 96], [236, 64], [248, 118], [212, 128], [232, 84], [252, 92], [200, 104]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={2.2} fill={C.brown} />)}
      {[[280, 76], [294, 104], [276, 120], [298, 70], [288, 132]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={1.6} fill={C.purple} />)}
      <T x={60} y={182} size={11}>Traction</T>
      <T x={134} y={182} size={11}>Saltation</T>
      <T x={226} y={182} size={11}>Suspension</T>
      <T x={287} y={182} size={11}>Solution</T>
      <T x={60} y={196} size={8.5} weight={700} fill={C.muted}>rolling</T>
      <T x={134} y={196} size={8.5} weight={700} fill={C.muted}>bouncing</T>
      <T x={226} y={196} size={8.5} weight={700} fill={C.muted}>floating</T>
      <T x={287} y={196} size={8.5} weight={700} fill={C.muted}>dissolved</T>
    </Svg>
  );
}

function Meander() {
  return (
    <Svg h={200} label="A meander from above. On the outside of the bend the water is fast and erodes a river cliff. On the inside it is slow and deposits a slip-off slope">
      <path d="M 10 46 L 150 46 C 230 46 230 160 150 160 L 10 160" fill="none" stroke={C.blue} strokeWidth={28} />
      <ellipse cx={176} cy={103} rx={12} ry={28} fill={C.goldSoft} stroke={C.gold} strokeWidth={2} />
      <path d="M 150 36 C 244 36 244 170 150 170" fill="none" stroke={C.red} strokeWidth={3} strokeDasharray="6 4" />
      <Arrow x1={40} y1={46} x2={90} y2={46} color="#fff" width={2.5} />
      <Arrow x1={90} y1={160} x2={40} y2={160} color="#fff" width={2.5} />
      <T x={312} y={92} size={11} fill={C.red} anchor="end">river cliff</T>
      <T x={312} y={108} size={9.5} weight={700} fill={C.muted} anchor="end">fast: erosion</T>
      <T x={156} y={96} size={11} fill={C.brown} anchor="end">slip-off slope</T>
      <T x={156} y={112} size={9.5} weight={700} fill={C.muted} anchor="end">slow: deposition</T>
      <T x={150} y={190} size={9.5} weight={700} fill={C.red}>- - - fastest flow, on the outside</T>
    </Svg>
  );
}

function EarthLayers() {
  return (
    <Svg h={200} label="Layers of the Earth: a thin rocky crust, the mantle, a liquid outer core and a solid inner core">
      <circle cx={96} cy={100} r={92} fill={C.brown} />
      <circle cx={96} cy={100} r={86} fill={C.orange} />
      <circle cx={96} cy={100} r={52} fill={C.gold} />
      <circle cx={96} cy={100} r={24} fill="#fff4cc" stroke={C.red} strokeWidth={2} />
      <Label x={206} y={24} px={160} py={34}>Crust: thin, rocky</Label>
      <Label x={206} y={64} px={168} py={88}>Mantle: hot rock</Label>
      <Label x={206} y={118} px={142} py={112}>Outer core: liquid</Label>
      <Label x={206} y={160} px={104} py={108}>Inner core: solid</Label>
    </Svg>
  );
}

function Epicentre() {
  return (
    <Svg h={200} label="An earthquake starts at the focus underground. The epicentre is the point on the surface directly above it. Seismic waves spread out from the focus">
      <rect x={8} y={60} width={304} height={134} fill="#e8d8c2" />
      <line x1={8} y1={60} x2={312} y2={60} stroke={C.brown} strokeWidth={3} />
      {[22, 44, 64].map((r) => <circle key={r} cx={160} cy={130} r={r} fill="none" stroke={C.red} strokeWidth={1.5} strokeDasharray="4 4" />)}
      <line x1={160} y1={60} x2={160} y2={130} stroke={C.ink} strokeWidth={1.5} strokeDasharray="3 3" />
      <polygon points="160,120 163,127 171,127 165,132 167,140 160,135 153,140 155,132 149,127 157,127" fill={C.red} />
      <circle cx={160} cy={60} r={5} fill={C.red} />
      <E e="🏠" x={60} y={44} size={30} />
      <E e="🏢" x={250} y={40} size={34} />
      <T x={160} y={34} size={12} fill={C.red}>Epicentre</T>
      <T x={160} y={48} size={9} weight={700} fill={C.muted}>on the surface, right above</T>
      <Label x={236} y={160} px={166} py={134}>Focus</Label>
      <T x={240} y={176} size={9} weight={700} fill={C.muted} anchor="start">where it starts</T>
      <T x={18} y={110} size={9.5} weight={700} fill={C.red} anchor="start">seismic waves</T>
    </Svg>
  );
}

function PushPull() {
  return (
    <Svg h={200} label="Urbanisation: push factors such as few jobs, drought and poor services drive people from the countryside; pull factors such as jobs, schools and hospitals attract them to cities">
      <rect x={8} y={8} width={130} height={184} rx={14} fill={C.redSoft} />
      <rect x={182} y={8} width={130} height={184} rx={14} fill={C.greenSoft} />
      <E e="🌾" x={73} y={40} size={40} />
      <E e="🏙️" x={247} y={40} size={40} />
      <T x={73} y={76} size={12}>Countryside</T>
      <T x={247} y={76} size={12}>City</T>
      <Arrow x1={140} y1={100} x2={180} y2={100} color={C.ink} width={3} />
      <T x={73} y={100} size={11} fill={C.red}>Push factors</T>
      {['few jobs', 'drought', 'poor services'].map((t, i) => <T key={t} x={73} y={124 + i * 20} size={10.5} weight={700}>{t}</T>)}
      <T x={247} y={100} size={11} fill={C.green}>Pull factors</T>
      {['jobs', 'schools', 'hospitals'].map((t, i) => <T key={t} x={247} y={124 + i * 20} size={10.5} weight={700}>{t}</T>)}
    </Svg>
  );
}

function Development() {
  return (
    <Tiles
      label="Development indicators: GDP per person shows average income, life expectancy shows how long people live, literacy rate shows who can read and write, HDI combines health, education and income"
      cols={2}
      h={200}
      items={[
        { e: '💷', title: 'GDP per person', sub: 'average income', colour: C.goldSoft },
        { e: '❤️', title: 'Life expectancy', sub: 'how long people live', colour: C.redSoft },
        { e: '📖', title: 'Literacy rate', sub: '% who can read and write', colour: C.blueSoft },
        { e: '🏆', title: 'HDI', sub: 'health + education + income', colour: C.purpleSoft },
      ]}
    />
  );
}

function MitigateAdapt() {
  const Col = ({ x, title, sub, colour, fill, items }: { x: number; title: string; sub: string; colour: string; fill: string; items: [string, string][] }) => (
    <g>
      <rect x={x} y={8} width={148} height={184} rx={14} fill={fill} />
      <T x={x + 74} y={28} size={13} fill={colour}>{title}</T>
      <T x={x + 74} y={46} size={9.5} weight={700} fill={C.muted}>{sub}</T>
      {items.map(([e, t], i) => (
        <g key={t}>
          <E e={e} x={x + 24} y={78 + i * 40} size={28} />
          <T x={x + 44} y={78 + i * 40} size={10.5} anchor="start">{t}</T>
        </g>
      ))}
    </g>
  );
  return (
    <Svg h={200} label="Mitigation tackles the cause of climate change, for example renewable energy, planting trees and using less fuel. Adaptation copes with the effects, for example flood defences, drought-resistant crops and building away from coasts">
      <Col x={8} title="Mitigation" sub="tackle the cause" colour={C.green} fill={C.greenSoft} items={[['🌬️', 'Renewable energy'], ['🌳', 'Plant trees'], ['🚲', 'Use less fuel']]} />
      <Col x={164} title="Adaptation" sub="cope with the effects" colour={C.blue} fill={C.blueSoft} items={[['🧱', 'Flood defences'], ['🌾', 'Drought-proof crops'], ['🏠', 'Build inland']]} />
    </Svg>
  );
}

function RainforestLayers() {
  const layers = [
    { y: 8, h: 40, fill: '#c9efc0', e: '🦅', t: 'Emergent', s: 'tallest trees, sunny' },
    { y: 48, h: 52, fill: '#7fcf7a', e: '🐒', t: 'Canopy', s: 'thick roof, most animals' },
    { y: 100, h: 48, fill: '#3f9a52', e: '🐆', t: 'Understory', s: 'darker, young trees' },
    { y: 148, h: 44, fill: '#5b4630', e: '🍄', t: 'Forest floor', s: 'very dark, rotting leaves' },
  ];
  return (
    <Svg h={200} label="Layers of a tropical rainforest from the top: the emergent layer, the canopy where most animals live, the darker understory, and the very dark forest floor">
      {layers.map((l) => (
        <g key={l.t}>
          <rect x={8} y={l.y} width={150} height={l.h} fill={l.fill} />
          <E e={l.e} x={83} y={l.y + l.h / 2} size={28} />
          <T x={170} y={l.y + l.h / 2 - 8} size={12} anchor="start">{l.t}</T>
          <T x={170} y={l.y + l.h / 2 + 8} size={9.5} weight={700} fill={C.muted} anchor="start">{l.s}</T>
        </g>
      ))}
    </Svg>
  );
}

export const geographyDiagrams: Record<string, () => JSX.Element> = {
  'grid-ref': GridRef,
  'compass-rose': CompassRose,
  contours: Contours,
  'weather-instruments': WeatherInstruments,
  'relief-rainfall': ReliefRainfall,
  biomes: Biomes,
  'water-cycle': WaterCycle,
  'river-transport': RiverTransport,
  meander: Meander,
  'earth-layers': EarthLayers,
  epicentre: Epicentre,
  'push-pull': PushPull,
  development: Development,
  'mitigate-adapt': MitigateAdapt,
  'rainforest-layers': RainforestLayers,
};
