import { card, gap, match, mcq, order, tf } from './helpers';
import type { Unit } from './types';

// KS3 Geography (Year 7, then Years 8-9, National Curriculum), pitched to lead into GCSE.
// Question ids are stored in progress data, so never change an existing id.

const Y7 = 'Year 7';
const Y89 = 'Years 8–9';

export const geography: Unit[] = [
  {
    id: 'geo-maps',
    title: 'Map skills',
    stage: Y7,
    description: 'Grid references, compass directions, scale, and reading contour lines.',
    colour: '#0f9d8a',
    lessons: [
      {
        id: 'gy-grid',
        title: 'Grid references',
        emoji: '🗺️',
        learn: [
          card('🗺️', 'Four-figure grid references', 'Maps are covered in a grid of squares. Eastings are the lines numbered along the bottom; northings are the lines numbered up the side. Always give eastings first: “along the corridor, then up the stairs.” A square is named by the lines at its bottom-left corner, so the square with easting 24 and northing 47 is 2447.', ['easting', 'northing', 'grid reference'], 'grid-ref'),
          card('🎯', 'Six-figure grid references', 'For more detail, imagine each square split into tenths. A point halfway along square 24 and three tenths up square 47 is 245473. Six figures point to a spot within 100 m on a 1:25,000 map.', ['six-figure']),
        ],
        questions: [
          mcq('q1', 'Which do you give first in a grid reference?', ['Eastings (along)', 'Northings (up)'], 0),
          gap('q2', 'Bottom-left corner: easting 24, northing 47. The four-figure reference is ___', ['2447']),
          mcq('q3', 'Which lines are numbered along the bottom of the map?', ['Eastings', 'Northings', 'Contours', 'Latitudes'], 0),
          tf('q4', 'A six-figure grid reference is more precise than a four-figure one.', true),
          mcq('q5', 'A point halfway across square 24 and 3 tenths up square 47 is…', ['245473', '247345', '244753', '2447'], 0),
          mcq('q6', 'Which phrase helps you remember the order?', ['Along the corridor, then up the stairs', 'Up the stairs, then along the corridor', 'North before east', 'Biggest number first'], 0),
        ],
      },
      {
        id: 'gy-compass',
        title: 'Directions & scale',
        emoji: '🧭',
        learn: [
          card('🧭', 'Compass points', 'The four main points are north, east, south and west (“Never Eat Shredded Wheat”, clockwise). Between them are north-east, south-east, south-west and north-west.', ['compass', 'north-east'], 'compass-rose'),
          card('📏', 'Scale', 'Scale tells you how much smaller the map is than real life. On a 1:25,000 map, 1 cm on the map is 25,000 cm (250 m) in real life, so 4 cm is 1 km. On a 1:50,000 map, 1 cm is 500 m, so 2 cm is 1 km.', ['scale', 'ratio']),
        ],
        questions: [
          mcq('q1', 'Which direction is opposite north-east?', ['South-west', 'South-east', 'North-west', 'West'], 0),
          mcq('q2', 'Which direction is between south and west?', ['South-west', 'South-east', 'North-west', 'North-east'], 0),
          gap('q3', 'On a 1:25,000 map, 4 cm represents ___ km', ['1']),
          gap('q4', 'On a 1:50,000 map, 1 cm represents ___ m', ['500']),
          mcq('q5', 'Facing north, you turn 90° clockwise. Which way are you facing?', ['East', 'West', 'South', 'North-east'], 0),
          order('q6', 'Put the main compass points in clockwise order, starting at north', ['North', 'East', 'South', 'West']),
        ],
      },
      {
        id: 'gy-relief',
        title: 'Contours & relief',
        emoji: '⛰️',
        learn: [
          card('⛰️', 'Contour lines', 'Relief is the height and shape of the land. Contour lines join places at the same height above sea level. Lines close together mean steep land; lines far apart mean gentle slopes. The contour interval is the height gap between lines, often 10 m.', ['relief', 'contour line', 'contour interval'], 'contours'),
          card('📍', 'Other height clues', 'A spot height is a dot with the exact height written next to it. A triangulation pillar (a blue triangle) marks a high point used for surveying. Hilltops show as small closed rings of contours.', ['spot height', 'triangulation pillar']),
        ],
        questions: [
          mcq('q1', 'Contour lines that are close together show…', ['Steep land', 'Flat land', 'A river', 'A town'], 0),
          tf('q2', 'Contour lines join places at the same height.', true),
          mcq('q3', 'A dot on the map with a number next to it is a…', ['Spot height', 'Contour', 'Grid line', 'Scale'], 0),
          mcq('q4', 'Relief means…', ['The height and shape of the land', 'The weather', 'Where people live', 'The map scale'], 0),
          gap('q5', 'Contours at 100 m, 110 m and 120 m. The contour interval is ___ m', ['10']),
          mcq('q6', 'Where would a walk be easiest?', ['Where contours are far apart', 'Where contours are close together', 'Where contours cross', 'It makes no difference'], 0),
        ],
      },
    ],
  },
  {
    id: 'geo-weather',
    title: 'Weather & climate',
    stage: Y7,
    description: 'Measuring the weather, the three types of rainfall, and climate zones around the world.',
    colour: '#2f80ed',
    lessons: [
      {
        id: 'gy-weather',
        title: 'Weather vs climate',
        emoji: '🌦️',
        learn: [
          card('🌦️', 'Two different things', 'Weather is the day-to-day state of the atmosphere: rain, sun, wind and temperature today. Climate is the average weather of a place, measured over about 30 years. “It’s raining” is weather; “the UK has mild, wet winters” is climate.', ['weather', 'climate']),
          card('🌡️', 'Measuring the weather', 'Thermometer: temperature. Rain gauge: rainfall. Anemometer: wind speed. Wind vane: wind direction. Barometer: air pressure. High pressure usually brings dry, settled weather; low pressure brings cloud, wind and rain.', ['anemometer', 'barometer', 'rain gauge', 'air pressure'], 'weather-instruments'),
        ],
        questions: [
          match('q1', 'Match the instrument to what it measures', [
            ['Rain gauge', 'Rainfall'],
            ['Anemometer', 'Wind speed'],
            ['Barometer', 'Air pressure'],
          ]),
          mcq('q2', '“It’s sunny in Leeds today” describes…', ['Weather', 'Climate'], 0),
          gap('q3', 'Climate is the average weather over about ___ years', ['30']),
          mcq('q4', 'What does a wind vane show?', ['Wind direction', 'Wind speed', 'Temperature', 'Rainfall'], 0),
          mcq('q5', 'Low pressure usually brings…', ['Cloud, wind and rain', 'Clear blue skies', 'Snow every time', 'No weather at all'], 0),
          tf('q6', 'Weather and climate mean the same thing.', false),
        ],
      },
      {
        id: 'gy-rainfall',
        title: 'Types of rainfall',
        emoji: '🌧️',
        learn: [
          card('☁️', 'Why it rains', 'Rain happens when warm, moist air rises. As it rises it cools, and the water vapour condenses into clouds. When the droplets get heavy enough, they fall as rain. There are three ways air can be made to rise.', ['condense']),
          card('⛰️', 'Relief rainfall', 'Relief rainfall: wind blows moist air from the sea over mountains, so it is forced to rise, cools and rains on the windward side. The far side, the rain shadow, stays dry. This is why the west of the UK is wetter than the east.', ['relief rainfall', 'rain shadow', 'windward'], 'relief-rainfall'),
          card('🌩️', 'Convectional and frontal', 'Convectional rainfall: the Sun heats the ground, warm air rises quickly and makes heavy showers or thunderstorms (common in the tropics and on UK summer afternoons). Frontal rainfall: warm air meets cold air and is pushed up over it. Most UK rain is frontal.', ['convectional rainfall', 'frontal rainfall']),
        ],
        questions: [
          mcq('q1', 'Rain forms when moist air rises and…', ['Cools and condenses', 'Warms up', 'Speeds up', 'Sinks'], 0),
          mcq('q2', 'Air forced up over mountains gives…', ['Relief rainfall', 'Convectional rainfall', 'Frontal rainfall'], 0),
          mcq('q3', 'Thunderstorms on a hot afternoon are usually…', ['Convectional rainfall', 'Relief rainfall', 'Frontal rainfall'], 0),
          mcq('q4', 'The dry side of a mountain is called the…', ['Rain shadow', 'Windward side', 'Front', 'Summit'], 0),
          tf('q5', 'The west of the UK is usually wetter than the east.', true, 'Moist winds from the Atlantic hit the western mountains first.'),
          mcq('q6', 'Warm air meeting cold air gives…', ['Frontal rainfall', 'Relief rainfall', 'Convectional rainfall'], 0),
        ],
      },
      {
        id: 'gy-biomes',
        title: 'Climate zones & biomes',
        emoji: '🌴',
        learn: [
          card('☀️', 'Why the equator is hot', 'The Sun’s rays hit the equator almost straight on, so the heat is concentrated. Near the poles the rays arrive at a low angle and spread over a bigger area, so it’s colder.', ['equator', 'poles']),
          card('🌴', 'Biomes', 'A biome is a large area with a similar climate, plants and animals. Tropical rainforest: hot and wet all year, near the equator. Hot desert: very dry, around 30° north and south. Savanna: grassland with a wet and a dry season. Temperate forest: mild, like the UK. Tundra: freezing, with tiny plants and no trees.', ['biome', 'tropical rainforest', 'desert', 'tundra'], 'biomes'),
        ],
        questions: [
          mcq('q1', 'Which biome is hot and wet all year?', ['Tropical rainforest', 'Hot desert', 'Tundra', 'Savanna'], 0),
          mcq('q2', 'Which biome is the UK in?', ['Temperate forest', 'Tundra', 'Tropical rainforest', 'Hot desert'], 0),
          tf('q3', 'The Sun’s rays are more concentrated at the equator than at the poles.', true),
          mcq('q4', 'A freezing biome with no trees is…', ['Tundra', 'Savanna', 'Rainforest', 'Temperate forest'], 0),
          mcq('q5', 'A grassland with a wet season and a dry season is…', ['Savanna', 'Tundra', 'Desert', 'Rainforest'], 0),
          mcq('q6', 'A biome is…', ['A large area with a similar climate, plants and animals', 'A type of rock', 'A kind of map', 'A weather instrument'], 0),
        ],
      },
    ],
  },
  {
    id: 'geo-rivers',
    title: 'Rivers',
    stage: Y7,
    description: 'The water cycle, how rivers erode and carry material, and the landforms they make.',
    colour: '#1c7fd6',
    lessons: [
      {
        id: 'gy-water-cycle',
        title: 'The water cycle',
        emoji: '💧',
        learn: [
          card('💧', 'Round and round', 'Water moves between the sea, the air and the land. Evaporation: the Sun heats water and it turns into vapour. Condensation: vapour cools and forms clouds. Precipitation: rain, snow or hail falls. Transpiration: plants lose water from their leaves.', ['evaporation', 'condensation', 'precipitation', 'transpiration'], 'water-cycle'),
          card('🏞️', 'Getting back to the sea', 'Surface runoff: water flows over the ground into rivers. Infiltration: water soaks into the soil. Groundwater flow: water moves slowly through rocks. Rivers carry the water back to the sea.', ['surface runoff', 'infiltration', 'groundwater']),
        ],
        questions: [
          match('q1', 'Match the process to its meaning', [
            ['Evaporation', 'Water turns into vapour'],
            ['Condensation', 'Vapour cools to form clouds'],
            ['Precipitation', 'Rain, snow or hail falls'],
          ]),
          mcq('q2', 'Water lost from plant leaves is…', ['Transpiration', 'Infiltration', 'Runoff', 'Condensation'], 0),
          mcq('q3', 'Water soaking into the soil is…', ['Infiltration', 'Evaporation', 'Transpiration', 'Precipitation'], 0),
          order('q4', 'Put these in order, starting from the sea', ['Evaporation', 'Condensation', 'Precipitation', 'Surface runoff']),
          tf('q5', 'The water cycle is powered by heat from the Sun.', true),
          mcq('q6', 'Water flowing over the ground into rivers is…', ['Surface runoff', 'Groundwater flow', 'Transpiration', 'Condensation'], 0),
        ],
      },
      {
        id: 'gy-river-processes',
        title: 'Erosion, transport & deposition',
        emoji: '🪨',
        learn: [
          card('💥', 'Erosion', 'Erosion is the wearing away of the land. Hydraulic action: the force of the water. Abrasion: rocks carried by the river scrape the bed and banks. Attrition: rocks knock into each other and become smaller and rounder. Solution: some rocks dissolve.', ['erosion', 'hydraulic action', 'abrasion', 'attrition']),
          card('🚚', 'Transport', 'Traction: big boulders roll along the bed. Saltation: pebbles bounce along. Suspension: fine sand and silt are carried in the water, making it look muddy. Solution: dissolved minerals are carried along.', ['traction', 'saltation', 'suspension'], 'river-transport'),
          card('🏖️', 'Deposition', 'When a river slows down, it drops the material it was carrying. This is deposition. It happens on the inside of bends, when a river floods, and where it meets the sea.', ['deposition']),
        ],
        questions: [
          mcq('q1', 'Rocks knocking together and getting smaller is…', ['Attrition', 'Abrasion', 'Hydraulic action', 'Saltation'], 0),
          mcq('q2', 'Pebbles bouncing along the river bed is…', ['Saltation', 'Traction', 'Suspension', 'Solution'], 0),
          mcq('q3', 'Big boulders rolling along the bed is…', ['Traction', 'Saltation', 'Suspension', 'Attrition'], 0),
          mcq('q4', 'A river deposits material when it…', ['Slows down', 'Speeds up', 'Gets deeper', 'Freezes'], 0),
          tf('q5', 'Abrasion is when rocks carried by the river scrape the bed and banks.', true),
          mcq('q6', 'Fine silt carried in the water, making it muddy, is…', ['Suspension', 'Traction', 'Saltation', 'Deposition'], 0),
        ],
      },
      {
        id: 'gy-landforms',
        title: 'River landforms & flooding',
        emoji: '🏞️',
        learn: [
          card('🏞️', 'Waterfalls', 'A waterfall forms where hard rock lies on top of soft rock. The soft rock erodes faster, undercutting the hard rock and leaving an overhang. The overhang collapses, and the waterfall moves back, leaving a steep gorge. The rocks swirl in a deep plunge pool at the bottom.', ['waterfall', 'plunge pool', 'gorge']),
          card('〰️', 'Meanders and ox-bow lakes', 'A meander is a bend in a river. On the outside of the bend the water is fast, so it erodes a river cliff. On the inside it’s slow, so it deposits a slip-off slope. Over time two bends can meet, cutting off a loop as an ox-bow lake.', ['meander', 'river cliff', 'slip-off slope', 'ox-bow lake'], 'meander'),
          card('🌊', 'Flooding', 'A flood happens when a river overflows its banks. Heavy rain, steep slopes, impermeable rock and concrete in towns all make floods more likely. Flood defences include embankments, dams, planting trees and building away from the floodplain.', ['flood', 'floodplain', 'impermeable']),
        ],
        questions: [
          order('q1', 'Put the formation of a waterfall in order', ['Soft rock erodes faster than hard rock', 'An overhang of hard rock forms', 'The overhang collapses', 'The waterfall moves back, forming a gorge']),
          mcq('q2', 'On the outside of a meander, the river…', ['Erodes a river cliff', 'Deposits a slip-off slope', 'Stops flowing', 'Forms a delta'], 0),
          mcq('q3', 'A cut-off loop of a meander is an…', ['Ox-bow lake', 'Estuary', 'Plunge pool', 'Gorge'], 0),
          mcq('q4', 'Which makes a flood more likely?', ['Concrete in towns', 'Planting trees', 'Gentle slopes', 'Light rain'], 0),
          tf('q5', 'Water flows fastest on the inside of a meander.', false, 'It’s fastest on the outside, which is why the outside erodes.'),
          mcq('q6', 'The deep pool at the bottom of a waterfall is a…', ['Plunge pool', 'Gorge', 'Meander', 'Floodplain'], 0),
        ],
      },
    ],
  },
  {
    id: 'geo-tectonics',
    title: 'Earthquakes & volcanoes',
    stage: Y89,
    description: 'The structure of the Earth, plate boundaries, and living with tectonic hazards.',
    colour: '#d9534f',
    lessons: [
      {
        id: 'gy-plates',
        title: 'Plates & boundaries',
        emoji: '🌋',
        learn: [
          card('🌍', 'Inside the Earth', 'The Earth has a thin rocky crust, a hot mantle, a liquid outer core and a solid inner core. The crust is broken into huge pieces called tectonic plates, which move a few centimetres a year, pushed by heat currents (convection currents) in the mantle.', ['crust', 'mantle', 'core', 'tectonic plate'], 'earth-layers'),
          card('↔️', 'Three kinds of boundary', 'Constructive: plates move apart and magma rises to make new crust, with gentle volcanoes (Iceland). Destructive: plates move towards each other; one sinks and melts, causing explosive volcanoes and big earthquakes (the Andes). Conservative: plates slide past each other, causing earthquakes but no volcanoes (the San Andreas Fault).', ['constructive', 'destructive', 'conservative']),
        ],
        questions: [
          order('q1', 'Order the layers from the outside in', ['Crust', 'Mantle', 'Outer core', 'Inner core']),
          match('q2', 'Match the boundary to the movement', [
            ['Constructive', 'Plates move apart'],
            ['Destructive', 'Plates move together'],
            ['Conservative', 'Plates slide past each other'],
          ]),
          mcq('q3', 'What moves the plates?', ['Convection currents in the mantle', 'The Moon', 'Wind', 'Ocean waves'], 0),
          tf('q4', 'Conservative boundaries have lots of volcanoes.', false, 'They cause earthquakes but no volcanoes.'),
          mcq('q5', 'Iceland sits on which kind of boundary?', ['Constructive', 'Destructive', 'Conservative'], 0),
          mcq('q6', 'Which layer is liquid?', ['Outer core', 'Inner core', 'Crust'], 0),
        ],
      },
      {
        id: 'gy-hazards',
        title: 'Living with hazards',
        emoji: '🏚️',
        learn: [
          card('📈', 'Earthquakes', 'An earthquake starts underground at the focus. The point on the surface directly above it is the epicentre, where shaking is usually strongest. Shaking is measured with a seismometer; the size is given on the magnitude scale, and each step up is about 10 times more shaking.', ['focus', 'epicentre', 'seismometer', 'magnitude'], 'epicentre'),
          card('🏘️', 'Why live there?', 'Millions of people live near volcanoes because volcanic soil is very fertile for farming, and volcanoes bring tourism, minerals and geothermal energy. Risk can be reduced by monitoring and predicting eruptions, earthquake-proof buildings, and planning where to build.', ['fertile', 'geothermal']),
        ],
        questions: [
          mcq('q1', 'The point on the surface above where an earthquake starts is the…', ['Epicentre', 'Focus', 'Crater', 'Fault'], 0),
          mcq('q2', 'Earthquake shaking is measured with a…', ['Seismometer', 'Barometer', 'Anemometer', 'Rain gauge'], 0),
          mcq('q3', 'Why do farmers live near volcanoes?', ['The soil is very fertile', 'It never rains', 'It’s always cold', 'There are no earthquakes'], 0),
          tf('q4', 'A magnitude 7 earthquake shakes about 10 times more than a magnitude 6.', true),
          mcq('q5', 'Which reduces the damage from earthquakes?', ['Earthquake-proof buildings', 'Taller unreinforced buildings', 'Building on loose sand', 'Ignoring warnings'], 0),
          mcq('q6', 'Where an earthquake starts underground is the…', ['Focus', 'Epicentre', 'Vent', 'Summit'], 0),
        ],
      },
    ],
  },
  {
    id: 'geo-people',
    title: 'Population & development',
    stage: Y89,
    description: 'How population changes, why people move to cities, and how we measure development.',
    colour: '#a259d9',
    lessons: [
      {
        id: 'gy-population',
        title: 'Population & cities',
        emoji: '🏙️',
        learn: [
          card('👥', 'Population change', 'The world’s population passed 8 billion in 2022. Population grows when the birth rate is higher than the death rate; the difference is the natural increase. Migration (people moving in or out) also changes a country’s population.', ['birth rate', 'death rate', 'natural increase', 'migration']),
          card('🏙️', 'Urbanisation', 'Urbanisation is the growth of towns and cities. More than half the world now lives in urban areas. People move because of push factors (reasons to leave the countryside, like few jobs or drought) and pull factors (reasons to move to a city, like jobs, schools and hospitals).', ['urbanisation', 'push factor', 'pull factor'], 'push-pull'),
        ],
        questions: [
          gap('q1', 'The world population passed ___ billion in 2022', ['8']),
          mcq('q2', 'Urbanisation means…', ['The growth of towns and cities', 'People moving to the countryside', 'Building farms', 'Population falling'], 0),
          mcq('q3', 'Which is a pull factor of a city?', ['Better jobs', 'Drought', 'Few schools', 'Crop failure'], 0),
          mcq('q4', 'Which is a push factor from the countryside?', ['Few jobs', 'Good hospitals', 'Entertainment', 'Better schools'], 0),
          gap('q5', 'Birth rate 20 per 1,000, death rate 8 per 1,000. Natural increase = ___ per 1,000', ['12']),
          tf('q6', 'More than half of the world’s people live in urban areas.', true),
        ],
      },
      {
        id: 'gy-development',
        title: 'Measuring development',
        emoji: '📊',
        learn: [
          card('📊', 'Development indicators', 'Development is how far a country has improved people’s lives. GDP per person: average income. Life expectancy: how long people live on average. Literacy rate: the percentage who can read and write. The Human Development Index (HDI) combines health, education and income into one score from 0 to 1.', ['GDP', 'life expectancy', 'literacy rate', 'HDI'], 'development'),
          card('🌐', 'Groups of countries', 'High-income countries (HICs) like the UK and Japan. Low-income countries (LICs) like Chad and Malawi. Newly emerging economies (NEEs) are developing quickly, like Nigeria, India and Brazil.', ['HIC', 'LIC', 'NEE']),
        ],
        questions: [
          mcq('q1', 'Which indicator measures how long people live?', ['Life expectancy', 'GDP', 'Literacy rate', 'Birth rate'], 0),
          mcq('q2', 'HDI combines…', ['Health, education and income', 'Only income', 'Only population', 'Weather and climate'], 0),
          mcq('q3', 'Which is a high-income country?', ['Japan', 'Chad', 'Malawi'], 0),
          mcq('q4', 'A country developing quickly, like India, is an…', ['NEE', 'HIC', 'LIC'], 0),
          gap('q5', 'HDI is a score from 0 to ___', ['1']),
          tf('q6', 'Literacy rate is the percentage of people who can read and write.', true),
        ],
      },
    ],
  },
  {
    id: 'geo-climate',
    title: 'Climate change & rainforests',
    stage: Y89,
    description: 'Causes, effects and responses to climate change, and life in the tropical rainforest.',
    colour: '#22a06b',
    lessons: [
      {
        id: 'gy-climate-change',
        title: 'Climate change',
        emoji: '🌡️',
        learn: [
          card('🏭', 'Causes', 'Greenhouse gases like carbon dioxide and methane trap heat in the atmosphere. Burning fossil fuels, cutting down forests (deforestation) and farming (cows release methane) all add more, so the Earth warms.', ['greenhouse gas', 'deforestation', 'fossil fuels']),
          card('🛡️', 'Effects and responses', 'Effects include rising sea levels, melting ice, more extreme weather and habitats changing. Mitigation tackles the cause, for example renewable energy and planting trees. Adaptation means coping with the effects, for example building flood defences or growing drought-resistant crops.', ['mitigation', 'adaptation'], 'mitigate-adapt'),
        ],
        questions: [
          mcq('q1', 'Which gas do cows release?', ['Methane', 'Oxygen', 'Nitrogen', 'Helium'], 0),
          mcq('q2', 'Planting trees to absorb carbon dioxide is…', ['Mitigation', 'Adaptation'], 0),
          mcq('q3', 'Building flood defences is…', ['Adaptation', 'Mitigation'], 0),
          mcq('q4', 'Which is an effect of climate change?', ['Rising sea levels', 'More ice at the poles', 'Fewer storms everywhere', 'Shorter summers'], 0),
          tf('q5', 'Burning fossil fuels releases carbon dioxide.', true),
          mcq('q6', 'Cutting down forests is called…', ['Deforestation', 'Urbanisation', 'Infiltration', 'Migration'], 0),
        ],
      },
      {
        id: 'gy-rainforest',
        title: 'Tropical rainforests',
        emoji: '🦜',
        learn: [
          card('🌳', 'Layers', 'A rainforest has layers. The emergent layer: the tallest trees poking out at the top. The canopy: a thick roof of leaves where most animals live. The understory: darker, with young trees and shrubs. The forest floor: very dark, covered in fallen leaves that rot quickly.', ['emergent', 'canopy', 'understory', 'forest floor'], 'rainforest-layers'),
          card('🪓', 'Under threat', 'Rainforests hold half the world’s plant and animal species. They are cleared for cattle farming, palm oil, logging, mining and roads. Sustainable management includes protected areas, selective logging (only some trees) and ecotourism.', ['biodiversity', 'sustainable', 'ecotourism']),
        ],
        questions: [
          order('q1', 'Order the layers from the top down', ['Emergent', 'Canopy', 'Understory', 'Forest floor']),
          mcq('q2', 'Where do most rainforest animals live?', ['The canopy', 'The forest floor', 'Underground', 'The emergent layer'], 0),
          mcq('q3', 'Which is a cause of deforestation?', ['Cattle farming', 'Ecotourism', 'Protected areas', 'Selective logging'], 0),
          mcq('q4', 'Cutting down only some trees is…', ['Selective logging', 'Clear felling', 'Mining', 'Urbanisation'], 0),
          tf('q5', 'Rainforests are home to about half of the world’s species.', true),
          mcq('q6', 'Why is the forest floor so dark?', ['The canopy blocks the sunlight', 'It rains all day', 'The soil is black', 'It’s underground'], 0),
        ],
      },
    ],
  },
];
