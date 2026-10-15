import { card, gap, match, mcq, order, tf } from './helpers';
import type { Unit } from './types';

// Pearson Edexcel GCSE Geography B (1GB0), which Gosforth Academy teaches.
// Paper 1: Global Geographical Issues. Paper 2: UK Geographical Issues (with fieldwork).
// Paper 3: People and Environment Issues. Case studies vary by school, so examples are named as examples.
// Question ids are stored in progress data, so never change an existing id.

const STAGE = 'GCSE (Edexcel B)';

export const gcseGeography: Unit[] = [
  {
    id: 'g-geo-hazards',
    title: 'Hazardous Earth',
    stage: STAGE,
    description: 'Global atmospheric circulation and climate change, tropical cyclones, and tectonic hazards.',
    colour: '#d9534f',
    lessons: [
      {
        id: 'gg-circulation',
        title: 'Atmospheric circulation & climate change',
        emoji: '🌬️',
        learn: [
          card('🌬️', 'Three cells', 'Air moves in three giant loops, or cells, in each hemisphere: the Hadley, Ferrel and Polar cells. At the equator, warm air rises, creating low pressure and heavy rain (rainforests). At about 30° north and south, air sinks, creating high pressure and dry conditions (hot deserts). At about 60°, air rises again, which is why the UK gets so much rain.', ['Hadley cell', 'Ferrel cell', 'Polar cell', 'high pressure', 'low pressure'], 'atmos-cells'),
          card('🌡️', 'Climate change', 'Natural causes of climate change include Milankovitch cycles (changes in Earth’s orbit), changes in the Sun’s output, and big volcanic eruptions, whose ash cools the planet. Evidence comes from ice cores, tree rings and historical records. Since about 1850, humans have enhanced the greenhouse effect by burning fossil fuels, farming and deforestation.', ['Milankovitch cycles', 'ice cores', 'enhanced greenhouse effect']),
        ],
        questions: [
          mcq('q1', 'Rising air at the equator creates…', ['Low pressure and heavy rain', 'High pressure and dry weather', 'Snow', 'Strong winds only'], 0),
          mcq('q2', 'At about 30° north and south, sinking air creates…', ['Hot deserts', 'Rainforests', 'Tundra', 'Ice sheets'], 0),
          order('q3', 'Order the cells from the equator to the pole', ['Hadley cell', 'Ferrel cell', 'Polar cell']),
          mcq('q4', 'Which is a natural cause of climate change?', ['Milankovitch cycles', 'Burning coal', 'Deforestation', 'Cattle farming'], 0),
          mcq('q5', 'Which gives evidence of past climates?', ['Ice cores', 'Satellite TV', 'Road maps', 'Census data'], 0),
          tf('q6', 'Large volcanic eruptions can cool the climate for a short time.', true, 'Ash and gases block some sunlight.'),
        ],
      },
      {
        id: 'gg-cyclones',
        title: 'Tropical cyclones',
        emoji: '🌀',
        learn: [
          card('🌀', 'How they form', 'Tropical cyclones (hurricanes or typhoons) form over warm oceans of at least 26.5 °C, between about 5° and 30° from the equator. Warm, moist air rises fast, cools and condenses, releasing heat that powers the storm. The Coriolis effect makes it spin. In the centre is a calm eye, surrounded by the eye wall with the strongest winds.', ['tropical cyclone', 'Coriolis effect', 'eye', 'eye wall'], 'cyclone'),
          card('🌊', 'Hazards and impacts', 'Hazards include strong winds, heavy rain, flooding, landslides and storm surges, where the sea is pushed onto land. They are measured on the Saffir–Simpson scale from 1 to 5. Impacts are usually worse in poorer countries with less warning, weaker buildings and less money to recover: Typhoon Haiyan (Philippines, 2013) killed over 6,000 people.', ['storm surge', 'Saffir–Simpson scale']),
        ],
        questions: [
          gap('q1', 'Tropical cyclones need sea temperatures of at least ___ °C', ['26.5']),
          mcq('q2', 'What makes a tropical cyclone spin?', ['The Coriolis effect', 'The Moon', 'Earthquakes', 'Ocean currents'], 0),
          mcq('q3', 'The calm centre of a cyclone is the…', ['Eye', 'Eye wall', 'Front', 'Storm surge'], 0),
          mcq('q4', 'When the sea is pushed onto land by a storm, it’s a…', ['Storm surge', 'Tsunami', 'Spring tide', 'Flash flood'], 0),
          mcq('q5', 'Tropical cyclones are measured on the…', ['Saffir–Simpson scale', 'Richter scale', 'pH scale', 'Beaufort scale only'], 0),
          tf('q6', 'Tropical cyclones form right on the equator.', false, 'There’s no Coriolis effect there, so they form between about 5° and 30°.'),
        ],
      },
      {
        id: 'gg-tectonic',
        title: 'Tectonic hazards',
        emoji: '🌋',
        learn: [
          card('🌋', 'Two kinds of volcano', 'Shield volcanoes form at constructive boundaries and hotspots (like Hawaii); runny lava makes gentle slopes and gentle eruptions. Composite volcanoes form at destructive boundaries; thick, sticky lava traps gas, causing explosive eruptions with ash and pyroclastic flows.', ['shield volcano', 'composite volcano', 'hotspot', 'pyroclastic flow'], 'volcano-types'),
          card('🛡️', 'Reducing the risk', 'Earthquakes can’t be predicted, but volcanoes give warning signs like small earthquakes and swelling ground. Countries manage the risk through monitoring and prediction, protection (earthquake-proof buildings), and preparation (drills and emergency plans). Richer countries can usually afford more of these.', ['prediction', 'protection', 'preparation']),
        ],
        questions: [
          mcq('q1', 'Which volcano type has gentle slopes and runny lava?', ['Shield', 'Composite', 'Cinder', 'Dome'], 0),
          mcq('q2', 'Composite volcanoes form at…', ['Destructive boundaries', 'Constructive boundaries', 'Hotspots', 'Conservative boundaries'], 0),
          mcq('q3', 'Hawaii’s volcanoes formed over a…', ['Hotspot', 'Destructive boundary', 'Conservative boundary', 'Ocean trench'], 0),
          tf('q4', 'Scientists can predict exactly when an earthquake will happen.', false),
          match('q5', 'Match the strategy', [
            ['Earthquake-proof buildings', 'Protection'],
            ['Earthquake drills', 'Preparation'],
            ['Monitoring a volcano', 'Prediction'],
          ]),
          mcq('q6', 'A fast-moving cloud of hot gas and ash is a…', ['Pyroclastic flow', 'Lahar', 'Lava flow', 'Tsunami'], 0),
        ],
      },
    ],
  },
  {
    id: 'g-geo-development',
    title: 'Development dynamics',
    stage: STAGE,
    description: 'Measuring development, Rostow’s and Frank’s theories, and an emerging country such as India.',
    colour: '#a259d9',
    lessons: [
      {
        id: 'gg-dev-theories',
        title: 'Theories of development',
        emoji: '📶',
        learn: [
          card('📶', 'Rostow’s model', 'Rostow said countries develop in five stages: traditional society, preconditions for take-off, take-off, drive to maturity, and the age of high mass consumption. Critics say it is based on how Europe and the USA developed, which may not suit every country.', ['Rostow', 'take-off'], 'rostow'),
          card('🔗', 'Frank’s dependency theory', 'Frank argued that rich “core” countries keep poorer “periphery” countries poor, by buying their raw materials cheaply and selling manufactured goods back at high prices. Colonialism started this pattern.', ['dependency theory', 'core', 'periphery'], 'dependency'),
        ],
        questions: [
          gap('q1', 'Rostow’s model has ___ stages', ['5', 'five']),
          order('q2', 'Put Rostow’s stages in order', ['Traditional society', 'Preconditions for take-off', 'Take-off', 'Drive to maturity', 'High mass consumption']),
          mcq('q3', 'Dependency theory was put forward by…', ['Frank', 'Rostow', 'Malthus', 'Boserup'], 0),
          mcq('q4', 'In dependency theory, rich countries are the…', ['Core', 'Periphery', 'Take-off', 'Hotspot'], 0),
          mcq('q5', 'A criticism of Rostow’s model is that…', ['It’s based on Europe and the USA', 'It has too many stages', 'It only covers Africa', 'It ignores industry'], 0),
          tf('q6', 'Frank believed trade helps poor countries catch up quickly.', false, 'He argued it keeps them poor and dependent.'),
        ],
      },
      {
        id: 'gg-emerging',
        title: 'An emerging country',
        emoji: '🏭',
        learn: [
          card('🏭', 'Globalisation and TNCs', 'Emerging countries such as India are developing fast. Globalisation links them to the world economy. Transnational corporations (TNCs), which work in many countries, bring jobs, skills and investment, but may pay low wages and send profits abroad.', ['globalisation', 'TNC', 'emerging country']),
          card('🏗️', 'Top-down or bottom-up', 'Top-down development is large projects run by governments or big organisations, like dams. Bottom-up development is small projects run with local communities, like a village water pump. Fast growth can widen the gap between rich and poor, and between cities and the countryside.', ['top-down', 'bottom-up'], 'top-down-bottom-up'),
        ],
        questions: [
          mcq('q1', 'A company that operates in many countries is a…', ['TNC', 'NGO', 'HIC', 'NEE'], 0),
          mcq('q2', 'A large dam built by the government is…', ['Top-down development', 'Bottom-up development'], 0),
          mcq('q3', 'A village water pump run with local people is…', ['Bottom-up development', 'Top-down development'], 0),
          mcq('q4', 'Which is a disadvantage of TNCs?', ['Profits may be sent abroad', 'They create jobs', 'They bring new skills', 'They invest money'], 0),
          tf('q5', 'Fast economic growth can widen the gap between rich and poor.', true),
          mcq('q6', 'Countries becoming more connected through trade and communication is…', ['Globalisation', 'Urbanisation', 'Deforestation', 'Migration'], 0),
        ],
      },
    ],
  },
  {
    id: 'g-geo-urban',
    title: 'Challenges of an urban world',
    stage: STAGE,
    description: 'How fast cities are growing, megacities, and the challenges of a megacity such as Mumbai.',
    colour: '#f2994a',
    lessons: [
      {
        id: 'gg-urban-trends',
        title: 'Urban trends',
        emoji: '🌆',
        learn: [
          card('🌆', 'A world of cities', 'In 1950 about 30% of people lived in towns and cities. By 2007 it passed 50%, and the UN expects about 68% by 2050. Most growth is now in developing and emerging countries, from rural–urban migration and natural increase.', ['urbanisation', 'rural–urban migration', 'natural increase'], 'urban-growth'),
          card('🏙️', 'Megacities', 'A megacity has more than 10 million people. A primate city is much bigger than any other in its country. Many cities in developing countries have a large informal economy: jobs with no contracts or taxes, like street selling.', ['megacity', 'primate city', 'informal economy']),
        ],
        questions: [
          gap('q1', 'A megacity has more than ___ million people', ['10']),
          mcq('q2', 'About what share of people lived in cities in 1950?', ['30%', '50%', '68%', '90%'], 0),
          mcq('q3', 'When did more than half the world first live in cities?', ['About 2007', '1950', '1900', '2050'], 0),
          mcq('q4', 'Selling goods on the street without a contract is part of the…', ['Informal economy', 'Formal economy', 'Primary sector', 'Quaternary sector'], 0),
          mcq('q5', 'A city much bigger than any other in its country is a…', ['Primate city', 'Megacity', 'Capital city', 'New town'], 0),
          tf('q6', 'Most urban growth today is in high-income countries.', false, 'It’s mostly in developing and emerging countries.'),
        ],
      },
      {
        id: 'gg-megacity',
        title: 'A megacity: Mumbai',
        emoji: '🏘️',
        learn: [
          card('🏘️', 'Opportunities and challenges', 'Mumbai, India’s financial capital, has more than 20 million people in its wider area. It offers jobs in industry, film (Bollywood) and services. But many people live in squatter settlements like Dharavi, with crowded housing, poor sanitation and informal work, alongside wealthy districts.', ['squatter settlement', 'Dharavi', 'sanitation'], 'megacity'),
          card('🌱', 'Making cities sustainable', 'Ideas include upgrading slums with water and toilets, better public transport (like Mumbai’s metro), recycling, and bottom-up schemes run by local people. Your school may use a different city as its case study; the same ideas apply.', ['sustainable', 'regeneration']),
        ],
        questions: [
          mcq('q1', 'Dharavi in Mumbai is an example of a…', ['Squatter settlement', 'Business district', 'National park', 'New town'], 0),
          mcq('q2', 'Which is a challenge in squatter settlements?', ['Poor sanitation', 'Too many parks', 'Empty houses', 'Too few people'], 0),
          mcq('q3', 'Mumbai is famous for which film industry?', ['Bollywood', 'Hollywood', 'Nollywood', 'Pinewood'], 0),
          mcq('q4', 'Which helps make a city more sustainable?', ['Better public transport', 'More traffic', 'More landfill', 'Cutting down parks'], 0),
          tf('q5', 'Mumbai has both very poor and very wealthy areas.', true),
          mcq('q6', 'Mumbai is India’s…', ['Financial capital', 'Smallest city', 'Political capital', 'Only port'], 0),
        ],
      },
    ],
  },
  {
    id: 'g-geo-uk',
    title: 'The UK’s landscapes',
    stage: STAGE,
    description: 'Geology and coasts, rivers and flooding, the UK’s human landscape, and fieldwork.',
    colour: '#0f9d8a',
    lessons: [
      {
        id: 'gg-coasts',
        title: 'Geology & coasts',
        emoji: '🌊',
        learn: [
          card('🪨', 'Upland and lowland', 'The Tees–Exe line splits the UK. To the north and west are uplands of older, harder igneous and metamorphic rock. To the south and east are lowlands of younger, softer sedimentary rock.', ['Tees–Exe line', 'upland', 'lowland']),
          card('🌊', 'Coastal landforms', 'Destructive waves have a strong backwash that erodes; constructive waves have a strong swash that builds beaches. Where hard and soft rocks alternate, headlands and bays form. Waves erode cracks in a headland into a cave, then an arch, then a stack, then a stump. Longshore drift carries sand along the coast and can build a spit.', ['destructive waves', 'constructive waves', 'headland', 'longshore drift', 'spit'], 'coast-landforms'),
          card('🧱', 'Managing coasts', 'Hard engineering builds structures: sea walls, groynes and rock armour. Soft engineering works with nature: beach nourishment and managed retreat. Protecting one place can increase erosion further along the coast, causing conflict.', ['hard engineering', 'soft engineering']),
        ],
        questions: [
          order('q1', 'Put the erosion of a headland in order', ['Crack', 'Cave', 'Arch', 'Stack', 'Stump']),
          mcq('q2', 'Waves with a strong backwash that erode the coast are…', ['Destructive', 'Constructive'], 0),
          mcq('q3', 'Sand moved along the coast by waves is…', ['Longshore drift', 'Attrition', 'Saltation', 'Deposition'], 0),
          mcq('q4', 'Which is soft engineering?', ['Beach nourishment', 'A sea wall', 'Rock armour', 'Groynes'], 0),
          mcq('q5', 'North and west of the Tees–Exe line, rocks are mostly…', ['Older and harder', 'Younger and softer', 'All chalk', 'All clay'], 0),
          tf('q6', 'A spit is built by deposition from longshore drift.', true),
        ],
      },
      {
        id: 'gg-rivers',
        title: 'Rivers & flood risk',
        emoji: '🏞️',
        learn: [
          card('📈', 'Storm hydrographs', 'A storm hydrograph shows how a river’s discharge changes after rain. Lag time is the gap between peak rainfall and peak discharge. A short lag time and a high peak mean a higher flood risk.', ['hydrograph', 'discharge', 'lag time', 'peak discharge'], 'hydrograph'),
          card('🏙️', 'What affects flooding?', 'Steep slopes, impermeable rock, saturated or frozen ground and heavy rain all raise flood risk. Urbanisation makes it worse: concrete and drains send water to rivers quickly. Trees intercept rain and slow it down.', ['impermeable', 'saturated', 'interception']),
        ],
        questions: [
          mcq('q1', 'The time between peak rainfall and peak discharge is the…', ['Lag time', 'Rising limb', 'Base flow', 'Return period'], 0),
          mcq('q2', 'A short lag time means…', ['A higher flood risk', 'A lower flood risk', 'No flood risk', 'Drought'], 0),
          mcq('q3', 'How does urbanisation affect flooding?', ['It increases flood risk', 'It reduces flood risk', 'It has no effect'], 0),
          mcq('q4', 'Trees reduce flooding by…', ['Intercepting rain', 'Making soil impermeable', 'Raising the river level', 'Melting snow'], 0),
          tf('q5', 'Saturated ground increases flood risk.', true, 'Water can’t soak in, so it runs off into rivers.'),
          mcq('q6', 'The amount of water flowing in a river is its…', ['Discharge', 'Lag time', 'Gradient', 'Load'], 0),
        ],
      },
      {
        id: 'gg-uk-human',
        title: 'The UK’s human landscape',
        emoji: '🗺️',
        learn: [
          card('🧭', 'Core and periphery', 'Most people and money are concentrated in the core: London and the South East. The periphery, such as parts of Scotland, Wales and the North, has lower population density and has often lost jobs as old industries closed.', ['core', 'periphery', 'population density'], 'core-periphery'),
          card('🏙️', 'A major UK city', 'London has about 9 million people. Migration from the rest of the UK and abroad shapes its culture and economy. It has huge inequality between rich and poor areas. Regeneration projects, such as the Olympic Park in Stratford, aim to improve run-down areas.', ['migration', 'inequality', 'regeneration']),
        ],
        questions: [
          mcq('q1', 'The UK’s economic core is…', ['London and the South East', 'The Scottish Highlands', 'Mid Wales', 'Cornwall'], 0),
          gap('q2', 'London has about ___ million people', ['9']),
          mcq('q3', 'Improving a run-down area is called…', ['Regeneration', 'Urbanisation', 'Deindustrialisation', 'Counter-urbanisation'], 0),
          mcq('q4', 'Which was a regeneration project in London?', ['The Olympic Park', 'Hadrian’s Wall', 'The Lake District', 'The Peak District'], 0),
          tf('q5', 'Population density is lower in the periphery than in the core.', true),
          mcq('q6', 'Why have many peripheral areas lost jobs?', ['Old industries closed', 'Too many tourists', 'New motorways', 'Rising population'], 0),
        ],
      },
      {
        id: 'gg-fieldwork',
        title: 'Fieldwork',
        emoji: '📋',
        learn: [
          card('📋', 'The enquiry process', 'Every investigation follows the same steps: ask a question or hypothesis; collect data; present it; analyse it; reach a conclusion; and evaluate what went well and what could be better. You do one physical and one human investigation.', ['hypothesis', 'enquiry'], 'fieldwork-enquiry'),
          card('🎲', 'Collecting data', 'Primary data is collected yourself (surveys, river measurements); secondary data comes from others (census, maps). Sampling can be random (anywhere by chance), systematic (every 10 m, or every 5th person) or stratified (in proportion to groups).', ['primary data', 'secondary data', 'random', 'systematic', 'stratified']),
        ],
        questions: [
          order('q1', 'Put the enquiry steps in order', ['Question or hypothesis', 'Collect data', 'Present data', 'Analyse', 'Conclude', 'Evaluate']),
          mcq('q2', 'Measuring the river every 10 m is…', ['Systematic sampling', 'Random sampling', 'Stratified sampling'], 0),
          mcq('q3', 'Census data is…', ['Secondary data', 'Primary data'], 0),
          mcq('q4', 'A questionnaire you hand out yourself gives…', ['Primary data', 'Secondary data'], 0),
          mcq('q5', 'Sampling in proportion to different groups is…', ['Stratified', 'Random', 'Systematic'], 0),
          tf('q6', 'Evaluating means thinking about how reliable your results and methods were.', true),
        ],
      },
    ],
  },
  {
    id: 'g-geo-environment',
    title: 'People & environment',
    stage: STAGE,
    description: 'The biosphere, forests under threat (tropical rainforest and taiga), and consuming energy resources.',
    colour: '#22a06b',
    lessons: [
      {
        id: 'gg-biosphere',
        title: 'People and the biosphere',
        emoji: '🌍',
        learn: [
          card('🌍', 'Biomes', 'Biomes are spread by climate: temperature and rainfall depend on latitude. Altitude, soils and rock also matter, and mountains have colder biomes higher up.', ['biome', 'latitude', 'altitude']),
          card('🎁', 'Goods and services', 'The biosphere gives us goods (food, timber, medicines, fuel) and services (regulating the climate, cleaning water, making soil, and the water and carbon cycles). Growing populations and wealth increase demand, which puts pressure on it.', ['goods', 'services'], 'goods-services'),
        ],
        questions: [
          mcq('q1', 'Which is a good provided by the biosphere?', ['Timber', 'Regulating the climate', 'Cleaning water', 'Forming soil'], 0),
          mcq('q2', 'Which is a service provided by the biosphere?', ['Regulating the climate', 'Timber', 'Fruit', 'Fuel wood'], 0),
          mcq('q3', 'What mainly controls where biomes are found?', ['Climate', 'Roads', 'Population', 'Language'], 0),
          tf('q4', 'Higher up a mountain, the biome is usually colder.', true),
          mcq('q5', 'Distance north or south of the equator is…', ['Latitude', 'Longitude', 'Altitude', 'Relief'], 0),
          mcq('q6', 'What increases pressure on the biosphere?', ['Growing population and wealth', 'Fewer people', 'Less farming', 'More protected areas'], 0),
        ],
      },
      {
        id: 'gg-forests',
        title: 'Forests under threat',
        emoji: '🌲',
        learn: [
          card('🌲', 'Two forests', 'Tropical rainforests are hot and wet all year, with huge biodiversity; most nutrients are stored in the plants (biomass), so soils are poor once trees are cut. The taiga is a cold coniferous forest across Canada, Scandinavia and Russia; most of its nutrients are in the slowly rotting leaf litter.', ['tropical rainforest', 'taiga', 'nutrient cycle', 'biomass'], 'forest-compare'),
          card('🛡️', 'Threats and protection', 'Rainforests are cleared for cattle, soy, palm oil, logging and mining. The taiga is threatened by logging, oil and gas, and mining. Protection includes national parks, CITES (which controls trade in endangered species), and REDD, which pays countries to keep their forests.', ['CITES', 'REDD']),
        ],
        questions: [
          mcq('q1', 'In a tropical rainforest, most nutrients are stored in the…', ['Biomass (plants)', 'Soil', 'Leaf litter'], 0),
          mcq('q2', 'In the taiga, most nutrients are stored in the…', ['Leaf litter', 'Biomass', 'Rivers'], 0),
          mcq('q3', 'Which countries have large areas of taiga?', ['Canada and Russia', 'Brazil and Peru', 'Egypt and Libya', 'India and Nepal'], 0),
          mcq('q4', 'CITES controls…', ['Trade in endangered species', 'Carbon emissions', 'Oil prices', 'Tourist numbers'], 0),
          mcq('q5', 'What does REDD do?', ['Pays countries to keep their forests', 'Plants palm oil', 'Builds roads', 'Mines for gold'], 0),
          tf('q6', 'Taiga forests are mostly coniferous trees.', true),
        ],
      },
      {
        id: 'gg-energy',
        title: 'Consuming energy resources',
        emoji: '⚡',
        learn: [
          card('⚡', 'Types of energy', 'Non-renewable resources will run out: coal, oil, gas and nuclear fuel. Renewable resources won’t: solar, wind, hydroelectric, tidal and geothermal. A country’s energy mix is the combination it uses.', ['renewable', 'non-renewable', 'energy mix'], 'energy-mix'),
          card('🔒', 'Energy security', 'Energy security means having enough reliable, affordable energy. Demand rises as countries develop. Options to increase supply include fracking for shale gas and drilling in remote places like the Arctic, but these bring environmental risks. Saving energy and switching to renewables are more sustainable.', ['energy security', 'fracking', 'sustainable']),
        ],
        questions: [
          mcq('q1', 'Which is a renewable resource?', ['Wind', 'Coal', 'Oil', 'Natural gas'], 0),
          mcq('q2', 'The combination of energy sources a country uses is its…', ['Energy mix', 'Energy security', 'Carbon footprint', 'Grid'], 0),
          mcq('q3', 'Fracking extracts…', ['Shale gas', 'Uranium', 'Coal', 'Geothermal heat'], 0),
          mcq('q4', 'Having enough reliable, affordable energy is…', ['Energy security', 'Energy mix', 'Fracking', 'Conservation'], 0),
          tf('q5', 'Nuclear fuel is a renewable resource.', false, 'Uranium will run out, so it’s non-renewable.'),
          mcq('q6', 'Why does energy demand rise as countries develop?', ['More industry, cars and appliances', 'People use less', 'It always falls', 'Population shrinks'], 0),
        ],
      },
    ],
  },
];
