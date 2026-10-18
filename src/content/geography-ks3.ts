import { card, gap, match, mcq, order, tf } from './helpers';
import type { Unit } from './types';

// More KS3 Geography, filling gaps found by checking the app against Gosforth East
// Middle School's Year 7-8 geography plans: Britain's weather, settlement, ice and
// cold environments (Year 7); Kenya and population, and globalisation (Year 8).
// Question ids are stored in progress data, so never change an existing id.

const Y7 = 'Year 7';
const Y89 = 'Years 8–9';

export const geographyKs3: Unit[] = [
  {
    id: 'geo-uk-weather',
    title: 'Britain’s weather',
    stage: Y7,
    description: 'Air masses, why the west is wetter, depressions and anticyclones, and Storm Arwen.',
    colour: '#3b82c4',
    lessons: [
      {
        id: 'gw-air',
        title: 'Air masses',
        emoji: '🌬️',
        learn: [
          card('🧭', 'Where our weather comes from', 'An air mass is a huge body of air with the same temperature and moisture. Britain sits where several meet, so our weather changes a lot. Air from the sea (maritime) is wet; air from over land (continental) is dry. Air from the north (polar) is cold; air from the south (tropical) is warm.', ['air mass', 'maritime', 'continental', 'polar', 'tropical'], 'air-masses'),
          card('🌊', 'The sea and the west', 'Most of our weather blows in from the Atlantic on south-westerly winds, so the west is wetter than the east. The North Atlantic Drift, a warm ocean current, keeps Britain milder in winter than other places this far north. Places by the sea have milder winters and cooler summers than places inland.', ['prevailing wind', 'North Atlantic Drift']),
        ],
        questions: [
          match('q1', 'Match the air mass to its weather', [
            ['Tropical maritime', 'Warm and wet'],
            ['Polar continental', 'Cold and dry'],
            ['Polar maritime', 'Cold and wet'],
          ]),
          mcq('q2', 'Which direction does most of Britain’s weather come from?', ['South-west, from the Atlantic', 'North-east, from Scandinavia', 'South-east, from Europe', 'Straight down from space'], 0),
          mcq('q3', 'Why is the west of Britain wetter than the east?', ['Wet winds from the Atlantic reach the west first', 'The west is higher up', 'The east is closer to the equator', 'It rains more on Mondays'], 0),
          gap('q4', 'Air that comes from over the sea is called ___.', ['maritime']),
          tf('q5', 'The North Atlantic Drift makes Britain’s winters colder.', false, 'It’s a warm current, so it makes them milder.'),
          mcq('q6', 'Compared with inland places, places by the sea have…', ['Milder winters and cooler summers', 'Colder winters and hotter summers', 'No weather', 'Snow all year'], 0),
        ],
      },
      {
        id: 'gw-pressure',
        title: 'Depressions & anticyclones',
        emoji: '🌀',
        learn: [
          card('🌧️', 'Depressions (low pressure)', 'In a depression, warm, moist air rises, cools and condenses into clouds, bringing rain and strong winds. Depressions form over the Atlantic and sweep across Britain, bringing changeable, unsettled weather. On weather maps they have isobars close together and weather fronts.', ['depression', 'low pressure', 'front', 'isobar'], 'pressure-systems'),
          card('☀️', 'Anticyclones (high pressure)', 'In an anticyclone, air sinks and warms, so clouds don’t form. Skies are clear and winds are light. In summer that means hot, sunny days; in winter, cold, frosty nights and sometimes fog.', ['anticyclone', 'high pressure']),
        ],
        questions: [
          match('q1', 'Depression or anticyclone?', [
            ['Rising air, cloud and rain', 'Depression'],
            ['Sinking air and clear skies', 'Anticyclone'],
          ]),
          mcq('q2', 'What weather does an anticyclone bring in winter?', ['Cold, frosty nights and sometimes fog', 'Heavy rain and gales', 'Thunderstorms', 'Hot sunshine'], 0),
          tf('q3', 'In a depression, air rises and cools, making clouds.', true),
          gap('q4', 'A depression is an area of ___ pressure.', ['low']),
          mcq('q5', 'On a weather map, isobars close together mean…', ['Strong winds', 'No wind', 'Snow', 'High pressure'], 0),
          mcq('q6', 'Why don’t clouds form in an anticyclone?', ['The air sinks and warms', 'There is no water on Earth', 'The wind blows them away', 'It is always night'], 0),
        ],
      },
      {
        id: 'gw-arwen',
        title: 'Storm Arwen',
        emoji: '🌳',
        learn: [
          card('🌪️', 'What happened', 'On 26 and 27 November 2021, Storm Arwen hit the UK. Unusually, its strongest winds came from the north, so trees weren’t used to bending that way. Gusts reached 98 mph at Brizlee Wood in Northumberland. The North East and Scotland were hit hardest.', ['Storm Arwen', 'gust'], 'storm-arwen'),
          card('⚡', 'Effects and responses', 'Around a million homes lost power, and in rural Northumberland and Durham some were cut off for over a week in freezing weather. Millions of trees fell, blocking roads and railways, and three people died. Responses included emergency centres, the army checking on isolated homes, and power companies paying compensation.', ['primary effects', 'secondary effects', 'response']),
        ],
        questions: [
          gap('q1', 'Storm Arwen hit the UK in November ___.', ['2021']),
          mcq('q2', 'Why did Storm Arwen bring down so many trees?', ['Its strongest winds came from the north, an unusual direction', 'The trees were all dead', 'It was very hot', 'It only rained'], 0),
          mcq('q3', 'Which part of England was hit hardest?', ['The North East', 'Cornwall', 'London', 'The Midlands'], 0),
          tf('q4', 'Some homes were without power for over a week.', true),
          match('q5', 'Effect or response?', [
            ['Homes lost power', 'Effect'],
            ['The army checked on isolated homes', 'Response'],
          ]),
          gap('q6', 'Gusts reached ___ mph in Northumberland.', ['98']),
        ],
      },
    ],
  },
  {
    id: 'geo-settlement',
    title: 'Settlement',
    stage: Y7,
    description: 'Why settlements grew where they did, what place names tell us, zones in cities, and world population and megacities.',
    colour: '#c0843a',
    lessons: [
      {
        id: 'gs-sites',
        title: 'Site & place names',
        emoji: '🏘️',
        learn: [
          card('📍', 'Choosing a site', 'Early settlers chose sites carefully. They wanted a water supply (a wet point), land that didn’t flood (a dry point), a place easy to defend (on a hill or in a river bend), a bridging point where a river could be crossed, shelter, and resources like wood, building stone and farmland.', ['site', 'wet point', 'dry point', 'bridging point', 'defence'], 'settlement-sites'),
          card('🏰', 'Newcastle', 'Newcastle grew at a bridging point on the River Tyne. The Romans built a bridge and fort here, Pons Aelius, on Hadrian’s Wall. In 1080 the Normans built a “new castle” on the steep riverbank, which gave the city its name. The river then helped it grow through trade, coal and shipbuilding.', ['Newcastle', 'situation']),
          card('🔤', 'What place names tell us', 'Place names reveal who settled there. -chester or -caster: a Roman fort (Lancaster). -ton or -ham: an Anglo-Saxon farm or village (Darlington, Birmingham). -by or -thorpe: a Viking settlement (Whitby). -burgh or -bury: a fortified place (Edinburgh).', ['place names', 'Anglo-Saxons', 'Vikings']),
        ],
        questions: [
          match('q1', 'Match the site factor to its meaning', [
            ['Wet point', 'A good water supply'],
            ['Dry point', 'Land that doesn’t flood'],
            ['Bridging point', 'Where a river can be crossed'],
          ]),
          mcq('q2', 'How did Newcastle get its name?', ['From the “new castle” the Normans built in 1080', 'From a new king', 'From the newest bridge', 'From the Vikings'], 0),
          match('q3', 'Match the place-name ending to who settled there', [
            ['-chester', 'Romans'],
            ['-by', 'Vikings'],
            ['-ton', 'Anglo-Saxons'],
          ]),
          mcq('q4', 'Why might early settlers build on a hill?', ['It was easy to defend', 'It was easy to flood', 'It was closer to the sea', 'It was flat for farming'], 0),
          gap('q5', 'Newcastle grew where people could cross the River ___.', ['Tyne']),
          tf('q6', 'Whitby was probably a Viking settlement.', true, 'The ending -by is Old Norse for a farm or village.'),
        ],
      },
      {
        id: 'gs-zones',
        title: 'Zones in cities',
        emoji: '🏙️',
        learn: [
          card('🎯', 'The zones', 'Many UK cities have zones in rings. In the middle is the CBD (central business district), with shops, offices and transport links. Around it, the inner city has older, tightly packed terraced houses and old factories. Further out, the suburbs have newer, bigger houses with gardens. At the edge, the rural-urban fringe mixes countryside with business parks and new estates.', ['CBD', 'inner city', 'suburbs', 'rural-urban fringe'], 'city-zones'),
          card('🗺️', 'Newcastle’s zones', 'In Newcastle, the CBD includes Grey Street and Northumberland Street. Inner-city areas like Byker have Victorian terraces and newer housing. Gosforth and Jesmond are suburbs. The rural-urban fringe includes places like Ponteland and the edge of the city near the airport.', ['Newcastle']),
          card('🔄', 'Why cities change', 'Settlements change over time: old factories close and are turned into flats or offices, new housing estates spread outwards, and out-of-town shopping centres (like the Metrocentre) pull shoppers away from the CBD.', ['regeneration']),
        ],
        questions: [
          order('q1', 'Put the zones in order from the centre outwards', ['CBD', 'Inner city', 'Suburbs', 'Rural-urban fringe']),
          mcq('q2', 'What does CBD stand for?', ['Central business district', 'City building direction', 'Central bus depot', 'County border district'], 0),
          mcq('q3', 'Where would you mostly find old terraced houses and old factories?', ['The inner city', 'The rural-urban fringe', 'The CBD', 'The countryside'], 0),
          mcq('q4', 'Which is a suburb of Newcastle?', ['Gosforth', 'Grey Street', 'Northumberland Street', 'The Tyne Bridge'], 0),
          tf('q5', 'Houses in the suburbs are usually bigger and newer, with gardens.', true),
          mcq('q6', 'How can out-of-town shopping centres change a city?', ['They pull shoppers away from the CBD', 'They make the CBD busier', 'They stop people driving', 'They have no effect'], 0),
        ],
      },
      {
        id: 'gs-world',
        title: 'World population & megacities',
        emoji: '🌏',
        learn: [
          card('👥', 'An uneven spread', 'There are about 8 billion people, but they aren’t spread evenly. Areas are densely populated where there is flat, fertile land, water, a mild climate and jobs: river valleys, coasts, and cities. Areas are sparsely populated where it’s too cold, dry, high or steep: deserts, mountains, the poles and thick rainforests.', ['population distribution', 'densely populated', 'sparsely populated'], 'population-distribution'),
          card('🏙️', 'Megacities', 'A megacity has over 10 million people. The biggest include Tokyo, Delhi, Shanghai, Dhaka, São Paulo and Cairo. In 1950 there were only two; now there are over 30, and most of the new ones are in Asia and Africa, where cities are growing fastest. Lagos in Nigeria is one of the fastest-growing.', ['megacity']),
        ],
        questions: [
          mcq('q1', 'Which area is likely to be sparsely populated?', ['A hot desert', 'A river valley', 'A coastal city', 'Flat, fertile farmland'], 0),
          gap('q2', 'A megacity has over ___ million people.', ['10', 'ten']),
          mcq('q3', 'Where are most new megacities growing?', ['Asia and Africa', 'Europe', 'Antarctica', 'Australia'], 0),
          tf('q4', 'People are spread evenly across the world.', false),
          gap('q5', 'There are about ___ billion people in the world.', ['8', 'eight']),
          mcq('q6', 'Why do many people live in river valleys?', ['Flat, fertile land and water', 'It is very cold', 'There are no jobs', 'It is very steep'], 0),
        ],
      },
    ],
  },
  {
    id: 'geo-ice',
    title: 'Ice & cold places',
    stage: Y7,
    description: 'The last ice age, how glaciers move and shape the land, the Lake District, and Antarctica and the Arctic.',
    colour: '#4fa3c7',
    lessons: [
      {
        id: 'gi-glaciers',
        title: 'Glaciers & the ice age',
        emoji: '🧊',
        learn: [
          card('❄️', 'The last ice age', 'About 20,000 years ago, at the peak of the last ice age, ice sheets up to a kilometre thick covered most of Britain, including the North East. Woolly mammoths roamed the land beyond the ice. As the climate warmed, the ice melted, leaving behind the landscapes we see today.', ['ice age', 'ice sheet']),
          card('🏔️', 'What a glacier is', 'A glacier is a huge, slow river of ice. It forms when snow builds up year after year and is squashed into ice. Gravity pulls it downhill, and meltwater underneath helps it slide. Valley glaciers flow down mountain valleys; ice sheets cover whole continents.', ['glacier', 'valley glacier'], 'glacier-parts'),
          card('🪨', 'How glaciers erode', 'Plucking: ice freezes onto rocks and tears them out as the glacier moves. Abrasion: rocks stuck in the ice scrape the ground like sandpaper. Freeze-thaw weathering cracks rocks on the valley sides as water freezes and expands.', ['plucking', 'abrasion', 'freeze-thaw']),
        ],
        questions: [
          gap('q1', 'The last ice age was at its peak about ___ years ago.', ['20000', '20,000']),
          mcq('q2', 'What is a glacier?', ['A huge, slow river of ice', 'A frozen lake', 'A type of iceberg', 'A snowy mountain'], 0),
          match('q3', 'Match the process to its description', [
            ['Plucking', 'Ice tears out rocks it has frozen onto'],
            ['Abrasion', 'Rocks in the ice scrape the ground'],
            ['Freeze-thaw', 'Water freezes in cracks and splits rocks'],
          ]),
          tf('q4', 'Ice sheets once covered the North East of England.', true),
          mcq('q5', 'What makes a glacier move?', ['Gravity, helped by meltwater underneath', 'Wind', 'The Moon', 'Earthquakes'], 0),
          mcq('q6', 'How does a glacier form?', ['Snow builds up and is squashed into ice', 'A lake freezes', 'Rain falls on a mountain', 'Sea water freezes'], 0),
        ],
      },
      {
        id: 'gi-landforms',
        title: 'Glacial landforms',
        emoji: '⛰️',
        learn: [
          card('🥣', 'Upland landforms', 'A corrie is an armchair-shaped hollow where a glacier began; when the ice melts it often fills with a lake, a tarn. Where two corries form back to back, a sharp knife-edge ridge called an arête is left between them. Three or more corries can carve a pointed pyramidal peak.', ['corrie', 'tarn', 'arête', 'pyramidal peak'], 'glacial-landforms'),
          card('🛤️', 'Valley landforms', 'Glaciers turn V-shaped river valleys into wide, steep-sided U-shaped valleys. Smaller side valleys are left hanging high above, as hanging valleys, often with waterfalls. Long, narrow ribbon lakes fill dips in the valley floor. Moraine is the rock and soil a glacier dumps when it melts.', ['U-shaped valley', 'hanging valley', 'ribbon lake', 'moraine']),
          card('🥾', 'The Lake District', 'The Lake District was shaped by glaciers. Striding Edge on Helvellyn is an arête, Red Tarn is a corrie lake, and Windermere is a ribbon lake. Its steep cliffs and crags were carved by plucking and abrasion.', ['Lake District']),
        ],
        questions: [
          mcq('q1', 'What shape is a glaciated valley?', ['U-shaped', 'V-shaped', 'W-shaped', 'Flat with no sides'], 0),
          match('q2', 'Match the landform to its description', [
            ['Corrie', 'Armchair-shaped hollow'],
            ['Arête', 'Knife-edge ridge between corries'],
            ['Ribbon lake', 'Long, narrow lake in a valley floor'],
          ]),
          gap('q3', 'A lake in a corrie is called a ___.', ['tarn']),
          mcq('q4', 'Striding Edge in the Lake District is an example of…', ['An arête', 'A ribbon lake', 'A moraine', 'A delta'], 0),
          tf('q5', 'Moraine is rock and soil dumped by a melting glacier.', true),
          mcq('q6', 'Which is a ribbon lake in the Lake District?', ['Windermere', 'Red Tarn', 'Helvellyn', 'Striding Edge'], 0),
        ],
      },
      {
        id: 'gi-poles',
        title: 'Antarctica & the Arctic',
        emoji: '🐧',
        learn: [
          card('🌍', 'Similar but different', 'Antarctica, at the South Pole, is a continent: land covered by an ice sheet over 4 km thick in places. It has no permanent residents, only scientists, and penguins live there. The Arctic, at the North Pole, is mostly frozen ocean surrounded by land where people such as the Inuit live, along with polar bears.', ['Antarctica', 'Arctic'], 'poles-compare'),
          card('🧊', 'Why scientists are worried', 'As the climate warms, Arctic sea ice is shrinking, and huge icebergs are breaking off Antarctica’s ice shelves. Melting land ice raises sea levels, putting coastal cities at risk. Less white ice also means less sunlight is reflected, which warms the planet even more.', ['sea level rise', 'climate change']),
          card('🚢', 'Tourism in Antarctica', 'Over 100,000 tourists now visit Antarctica each year, mostly by cruise ship. They can disturb wildlife, cause pollution and bring in seeds and diseases. The Antarctic Treaty (1959) protects it for peace and science, and tour companies follow strict rules, such as landing only 100 people at a time.', ['Antarctic Treaty', 'tourism', 'sustainable']),
        ],
        questions: [
          match('q1', 'Antarctica or the Arctic?', [
            ['A continent covered by an ice sheet', 'Antarctica'],
            ['Mostly frozen ocean', 'Arctic'],
          ]),
          tf('q2', 'Lots of people live permanently in Antarctica.', false, 'Only scientists live there, and only for a while.'),
          mcq('q3', 'Why does melting land ice worry scientists?', ['It raises sea levels', 'It makes the sea saltier', 'It cools the planet', 'It makes more ice'], 0),
          gap('q4', 'The Antarctic Treaty was signed in ___.', ['1959']),
          mcq('q5', 'Which is a way to reduce the impact of tourism in Antarctica?', ['Landing only small groups at a time', 'Building hotels', 'Feeding the penguins', 'Bringing pets'], 0),
          mcq('q6', 'Why does less ice make the planet warm faster?', ['Less sunlight is reflected back into space', 'Ice produces heat', 'Penguins leave', 'The ocean gets saltier'], 0),
        ],
      },
    ],
  },
  {
    id: 'geo-kenya',
    title: 'Kenya & population',
    stage: Y89,
    description: 'Kenya as a country of contrasts, migration to Nairobi, tourism, and reading population pyramids.',
    colour: '#c2622d',
    lessons: [
      {
        id: 'gk-kenya',
        title: 'Kenya: a country of contrasts',
        emoji: '🦒',
        learn: [
          card('🗺️', 'Where and what', 'Kenya is in East Africa, on the equator, with a coast on the Indian Ocean. About 55 million people live there; the capital is Nairobi. It has savanna grassland, the Great Rift Valley, snowy Mount Kenya, and wildlife reserves like the Maasai Mara.', ['Kenya', 'Nairobi', 'savanna'], 'kenya-facts'),
          card('🐄', 'Traditional and modern', 'Some Maasai still live as pastoralists, herding cattle across the savanna. But Kenya is also modern: Nairobi is a tech hub nicknamed “Silicon Savannah”, and M-Pesa, a Kenyan mobile-money service launched in 2007, lets millions of people pay and save by phone.', ['Maasai', 'M-Pesa']),
          card('🚫', 'Challenging stereotypes', 'Africa is a continent of 54 countries, not one place. Thinking of it only as poor, rural or dangerous is a stereotype. Kenya has wealth and poverty, cities and villages, and is developing fast.', ['stereotype']),
        ],
        questions: [
          gap('q1', 'The capital of Kenya is ___.', ['Nairobi']),
          mcq('q2', 'Which line of latitude runs through Kenya?', ['The equator', 'The Arctic Circle', 'The Tropic of Capricorn', 'The Prime Meridian'], 0),
          mcq('q3', 'What is M-Pesa?', ['A mobile-money service', 'A mountain', 'A wildlife park', 'A river'], 0),
          tf('q4', 'Africa is a single country.', false, 'It’s a continent of 54 countries.'),
          mcq('q5', 'How do traditional Maasai pastoralists make a living?', ['Herding cattle', 'Working in factories', 'Fishing at sea', 'Mining coal'], 0),
          gap('q6', 'Nairobi’s tech industry has the nickname “Silicon ___”.', ['Savannah', 'Savanna']),
        ],
      },
      {
        id: 'gk-nairobi',
        title: 'Nairobi & migration',
        emoji: '🏙️',
        learn: [
          card('🧳', 'Moving to the city', 'Every year many Kenyans move from the countryside to cities: rural-urban migration. Push factors drive them away (few jobs, drought, poor services). Pull factors draw them in (jobs, schools, hospitals, the hope of a better life).', ['rural-urban migration', 'push factors', 'pull factors'], 'push-pull'),
          card('🏚️', 'Informal settlements', 'Many newcomers can’t afford proper housing, so they build homes on spare land in informal settlements. Kibera in Nairobi is one of the largest in Africa. Homes are often made of mud, wood and tin, with few toilets, shared water taps and a risk of fire and disease.', ['informal settlement', 'Kibera']),
          card('🛠️', 'Improving life', 'Residents run businesses, schools and community groups. Projects have added toilets, clean water, electricity and new flats. Upgrading homes where people already live works better than knocking them down.', ['self-help', 'upgrading']),
        ],
        questions: [
          match('q1', 'Push or pull factor?', [
            ['Drought ruining crops', 'Push'],
            ['Jobs in the city', 'Pull'],
          ]),
          mcq('q2', 'What is rural-urban migration?', ['Moving from the countryside to towns and cities', 'Moving abroad', 'Moving from cities to villages', 'Going on holiday'], 0),
          gap('q3', 'Kibera is an informal settlement in ___.', ['Nairobi']),
          mcq('q4', 'Which is a common problem in informal settlements?', ['Few toilets and shared water taps', 'Too many parks', 'Very expensive houses', 'No people'], 0),
          tf('q5', 'People in informal settlements often run their own businesses and community groups.', true),
          mcq('q6', 'Why do people build homes in informal settlements?', ['They can’t afford proper housing', 'They prefer tin roofs', 'The government tells them to', 'It is far from jobs'], 0),
        ],
      },
      {
        id: 'gk-tourism',
        title: 'Tourism in Kenya',
        emoji: '📸',
        learn: [
          card('🦁', 'Why tourists come', 'Tourists visit Kenya for safaris in reserves like the Maasai Mara, beaches near Mombasa, and its culture. Tourism is one of Kenya’s biggest earners of money from abroad.', ['tourism', 'safari'], 'kenya-tourism'),
          card('⚖️', 'Good and bad', 'Tourism brings jobs, money for conservation and better roads and airports. But some profits leave Kenya with foreign companies (leakage), jobs can be seasonal and low-paid, wildlife can be disturbed, and some Maasai lost land to reserves. Ecotourism tries to protect the environment and benefit local people.', ['leakage', 'ecotourism']),
        ],
        questions: [
          mcq('q1', 'Which reserve is famous for safaris?', ['The Maasai Mara', 'The Lake District', 'The Sahara', 'Kibera'], 0),
          match('q2', 'Benefit or problem of tourism?', [
            ['New jobs', 'Benefit'],
            ['Profits going to foreign companies', 'Problem'],
          ]),
          gap('q3', 'When tourism profits leave the country, it’s called ___.', ['leakage']),
          mcq('q4', 'What is ecotourism?', ['Tourism that protects the environment and helps local people', 'Cheap package holidays', 'Tourism in big cities', 'Cruises'], 0),
          tf('q5', 'Tourism jobs are always well paid and all year round.', false, 'Many are seasonal and low-paid.'),
          gap('q6', 'Kenya’s beach resorts are near the city of ___.', ['Mombasa']),
        ],
      },
      {
        id: 'gk-pyramids',
        title: 'Population pyramids',
        emoji: '📊',
        learn: [
          card('📊', 'Reading a pyramid', 'A population pyramid shows how many males and females are in each age group. A wide base means lots of children and a high birth rate. A narrow top means few people live to old age. Wide at the top means lots of older people: an ageing population.', ['population pyramid', 'birth rate', 'ageing population'], 'pop-pyramids'),
          card('🌐', 'Kenya and Japan', 'Kenya’s pyramid has a wide base: a young, fast-growing population, with half its people under about 20. Japan’s is top-heavy: the population is shrinking and ageing, with more people over 65 than under 15. That means fewer workers to pay for pensions and care.', ['young population', 'dependency']),
        ],
        questions: [
          mcq('q1', 'A pyramid with a wide base shows…', ['A high birth rate and lots of children', 'Lots of old people', 'A shrinking population', 'No children'], 0),
          mcq('q2', 'Which country has an ageing population?', ['Japan', 'Kenya', 'Nigeria', 'Uganda'], 0),
          tf('q3', 'Kenya has a young, fast-growing population.', true),
          mcq('q4', 'What problem does an ageing population cause?', ['Fewer workers to pay for pensions and care', 'Too many schools', 'Not enough children’s toys', 'Too many workers'], 0),
          gap('q5', 'A population pyramid shows males and females in each ___ group.', ['age']),
          gap('q6', 'More people over 65 than under 15 is a sign of an ___ population.', ['ageing', 'aging']),
        ],
      },
    ],
  },
  {
    id: 'geo-globalisation',
    title: 'Globalisation & trade',
    stage: Y89,
    description: 'Who wins and loses from world trade, TNCs and sweatshops, and how Fairtrade helps.',
    colour: '#2f8f6b',
    lessons: [
      {
        id: 'gg-trade',
        title: 'Is world trade fair?',
        emoji: '⚽',
        learn: [
          card('🚢', 'Imports and exports', 'Exports are goods a country sells abroad; imports are goods it buys. Many lower-income countries export raw materials (primary products) like cocoa, coffee and cotton, which sell cheaply. Richer countries export manufactured goods and services, which earn much more.', ['exports', 'imports', 'primary products'], 'chocolate-chain'),
          card('⚽', 'Winners and losers', 'Footballs and football shirts are often made in countries like Pakistan and Bangladesh, but most of the money goes to brands and shops in richer countries. Globalisation, the world becoming more connected through trade, travel and the internet, creates winners and losers.', ['globalisation']),
        ],
        questions: [
          match('q1', 'Import or export?', [
            ['Goods a country sells abroad', 'Export'],
            ['Goods a country buys from abroad', 'Import'],
          ]),
          mcq('q2', 'Which is a primary product?', ['Raw cocoa beans', 'A chocolate bar', 'A smartphone', 'A car'], 0),
          tf('q3', 'Raw materials usually sell for less than manufactured goods.', true),
          mcq('q4', 'What is globalisation?', ['The world becoming more connected through trade, travel and the internet', 'Making a globe', 'Countries closing their borders', 'A type of map'], 0),
          mcq('q5', 'Of the price of a chocolate bar, who usually gets the smallest share?', ['The cocoa farmer', 'The chocolate company', 'The shop', 'The government'], 0),
          gap('q6', 'Goods a country buys from other countries are called ___.', ['imports']),
        ],
      },
      {
        id: 'gg-tncs',
        title: 'TNCs & sweatshops',
        emoji: '👟',
        learn: [
          card('🏢', 'Transnational corporations', 'A TNC is a company that operates in many countries, like Nike, Apple or Toyota. Its headquarters are usually in a richer country, but it often makes its products in factories in lower-wage countries to keep costs down.', ['TNC'], 'tnc-pros-cons'),
          card('⚖️', 'Good or bad?', 'TNCs bring jobs, skills, investment and new roads to the countries where they build factories. But wages can be very low, hours long and conditions unsafe, and most of the profit goes back to the headquarters. In 2013 the Rana Plaza garment factory in Bangladesh collapsed, killing more than 1,100 workers, and led to new safety agreements.', ['sweatshop', 'Rana Plaza']),
        ],
        questions: [
          gap('q1', 'A company that operates in many countries is a ___.', ['TNC', 'transnational corporation']),
          match('q2', 'Advantage or disadvantage for the host country?', [
            ['New jobs', 'Advantage'],
            ['Very low wages', 'Disadvantage'],
          ]),
          mcq('q3', 'Why do TNCs often build factories in lower-wage countries?', ['To keep costs down', 'Because it’s colder there', 'To avoid customers', 'Because they must by law'], 0),
          mcq('q4', 'What happened at Rana Plaza in 2013?', ['A garment factory collapsed, killing over 1,100 workers', 'A new football stadium opened', 'A Fairtrade deal was signed', 'A TNC moved to the UK'], 0),
          tf('q5', 'A sweatshop is a factory with good pay and safe conditions.', false),
          mcq('q6', 'Where are most TNC headquarters based?', ['In richer countries', 'In their factories', 'At sea', 'In every country equally'], 0),
        ],
      },
      {
        id: 'gg-fairtrade',
        title: 'Fairtrade',
        emoji: '🤝',
        learn: [
          card('🤝', 'How Fairtrade works', 'Fairtrade guarantees farmers a minimum price for crops like cocoa, coffee and bananas, even if world prices fall. Farmers also get an extra Fairtrade Premium to spend on their community, like schools, clean water or better equipment. Farms must meet standards such as no child labour.', ['Fairtrade', 'minimum price', 'Fairtrade Premium'], 'fairtrade'),
          card('🛒', 'Does it work?', 'Fairtrade helps millions of farmers, but Fairtrade products are often a little more expensive, and they are still only a small share of what’s sold. Shoppers can make a difference by looking for the Fairtrade mark.', ['ethical shopping']),
        ],
        questions: [
          mcq('q1', 'What does Fairtrade guarantee farmers?', ['A minimum price for their crops', 'Free tractors', 'A job in the UK', 'Double the world price'], 0),
          mcq('q2', 'What is the Fairtrade Premium spent on?', ['Community projects like schools and clean water', 'Advertising', 'Shop profits', 'Shipping'], 0),
          tf('q3', 'Fairtrade farms must not use child labour.', true),
          mcq('q4', 'Which of these could you buy as Fairtrade?', ['Bananas', 'Petrol', 'A car', 'Electricity'], 0),
          tf('q5', 'Fairtrade products are always cheaper.', false, 'They are often a little more expensive.'),
          gap('q6', 'Fairtrade farmers get an extra payment for their community called the Fairtrade ___.', ['Premium']),
        ],
      },
    ],
  },
  {
    id: 'geo-china-india',
    title: 'China & India',
    stage: Y89,
    description: 'Two Asian giants: their places and people, their fast-growing economies, and the challenges that growth brings.',
    colour: '#d6336c',
    lessons: [
      {
        id: 'gci-places',
        title: 'Two giants',
        emoji: '🐉',
        learn: [
          card('🗺️', 'Where and how big', 'China and India are in Asia and each has about 1.4 billion people; India overtook China as the most populous country in 2023. China’s capital is Beijing and India’s is New Delhi. The Himalayas, the world’s highest mountains (including Everest), lie between them.', ['population', 'Himalayas'], 'china-india'),
          card('🌊', 'Rivers and climate', 'Great rivers support farming and cities: the Yangtze and Yellow rivers in China, and the Ganges in India. Much of India has a monsoon climate: a long dry season, then heavy summer rains that farmers depend on but which can cause floods.', ['monsoon', 'Ganges', 'Yangtze']),
        ],
        questions: [
          mcq('q1', 'Which country has had the most people since 2023?', ['India', 'China', 'USA', 'Russia'], 0),
          gap('q2', 'The capital of China is ___.', ['Beijing']),
          mcq('q3', 'The mountains between China and India are the…', ['Himalayas', 'Alps', 'Andes', 'Rockies'], 0),
          mcq('q4', 'What is a monsoon?', ['A season of very heavy rain', 'A type of mountain', 'A desert wind', 'A river'], 0),
          tf('q5', 'The Ganges is a major river in India.', true),
          mcq('q6', 'Roughly how many people live in each of China and India?', ['About 1.4 billion', 'About 14 million', 'About 140 million', 'About 14 billion'], 0),
        ],
      },
      {
        id: 'gci-economy',
        title: 'Growing economies',
        emoji: '🏭',
        learn: [
          card('🏭', 'China: the world’s factory', 'Since the 1980s China has opened up to trade and built huge numbers of factories, making everything from phones to toys. Hundreds of millions of people have moved from the countryside to cities for work, and hundreds of millions have been lifted out of poverty.', ['manufacturing', 'rural-urban migration'], 'china-india-economy'),
          card('💻', 'India: services and tech', 'India’s economy has grown fast too, especially services like IT, software and call centres, centred on cities like Bengaluru. But many people still farm small plots, and there are big gaps between rich and poor.', ['services', 'IT', 'inequality']),
        ],
        questions: [
          mcq('q1', 'China is called “the world’s factory” because it…', ['Makes a huge share of the world’s manufactured goods', 'Has no farms', 'Has closed its factories', 'Only grows food'], 0),
          mcq('q2', 'India’s fast-growing sector is especially…', ['Services like IT and software', 'Coal mining', 'Whaling', 'Fishing'], 0),
          gap('q3', 'India’s best-known tech city is ___.', ['Bengaluru', 'Bangalore']),
          tf('q4', 'Millions of people in China moved from the countryside to cities for work.', true),
          mcq('q5', 'A big challenge in India is…', ['The gap between rich and poor', 'Too few people', 'No rivers', 'Too much snow'], 0),
          mcq('q6', 'What do both countries have in common?', ['Fast economic growth', 'Small populations', 'No cities', 'Only cold deserts'], 0),
        ],
      },
      {
        id: 'gci-challenges',
        title: 'Challenges',
        emoji: '😷',
        learn: [
          card('😷', 'Pollution', 'Fast growth has brought air pollution from coal power stations, traffic and factories; cities like Delhi and Beijing have had dangerous smog. Both countries are now building huge amounts of solar and wind power.', ['air pollution', 'smog', 'renewable energy'], 'growth-challenges'),
          card('🏙️', 'Megacities', 'Both countries have several megacities, like Shanghai and Mumbai. Rapid growth brings jobs but also traffic, slums and pressure on water and housing. China has built vast high-speed railways and metro systems to cope.', ['megacity', 'infrastructure']),
        ],
        questions: [
          mcq('q1', 'What has caused smog in Delhi and Beijing?', ['Coal power, traffic and factories', 'The sea', 'Snow', 'Forests'], 0),
          tf('q2', 'China and India are building lots of solar and wind power.', true),
          mcq('q3', 'Which is a megacity in China?', ['Shanghai', 'Mumbai', 'Lagos', 'Cairo'], 0),
          mcq('q4', 'A problem of fast-growing cities is…', ['Pressure on housing and water', 'Too few people', 'No jobs', 'Too much farmland'], 0),
          gap('q5', 'Thick, polluted haze over a city is called ___.', ['smog']),
          mcq('q6', 'Which is a megacity in India?', ['Mumbai', 'Shanghai', 'Beijing', 'Tokyo'], 0),
        ],
      },
    ],
  },
  {
    id: 'geo-coasts',
    title: 'Coasts',
    stage: Y89,
    description: 'How waves erode the coast, the landforms they create, and how coasts like Holderness are managed.',
    colour: '#1c7ed6',
    lessons: [
      {
        id: 'gc-waves',
        title: 'Waves & erosion',
        emoji: '🌊',
        learn: [
          card('🌊', 'Constructive and destructive waves', 'Waves are made by wind blowing over the sea. The distance the wind blows over is the fetch: the longer it is, the bigger the waves. Constructive waves are gentle, with a strong swash that builds beaches. Destructive waves are tall and frequent, with a strong backwash that drags material away.', ['fetch', 'swash', 'backwash'], 'wave-types'),
          card('🪨', 'Erosion', 'Hydraulic action: waves force air into cracks, blasting rock apart. Abrasion: rocks hurled by waves scrape the cliff. Attrition: rocks knock together and become smaller and rounder. Solution: some rocks, like chalk, dissolve in seawater.', ['hydraulic action', 'abrasion', 'attrition']),
        ],
        questions: [
          mcq('q1', 'The distance the wind blows over the sea is the…', ['Fetch', 'Swash', 'Backwash', 'Tide'], 0),
          match('q2', 'Match the wave to its effect', [
            ['Constructive wave', 'Builds up beaches'],
            ['Destructive wave', 'Drags material away'],
          ]),
          match('q3', 'Match the erosion process', [
            ['Hydraulic action', 'Air forced into cracks'],
            ['Abrasion', 'Rocks scrape the cliff'],
            ['Attrition', 'Rocks knock together and get smaller'],
          ]),
          tf('q4', 'A longer fetch makes bigger waves.', true),
          gap('q5', 'Water rushing up the beach after a wave breaks is the ___.', ['swash']),
          mcq('q6', 'Chalk dissolving in seawater is…', ['Solution', 'Attrition', 'Abrasion', 'Deposition'], 0),
        ],
      },
      {
        id: 'gc-landforms',
        title: 'Coastal landforms',
        emoji: '🏝️',
        learn: [
          card('🏝️', 'Headlands to stacks', 'Soft rock erodes into bays, while hard rock is left sticking out as headlands. On a headland, a crack grows into a cave, then an arch when it breaks right through. The arch roof collapses, leaving a stack, which wears down into a stump. Old Harry Rocks in Dorset are stacks.', ['headland', 'bay', 'cave', 'arch', 'stack'], 'coast-landforms'),
          card('🏖️', 'Longshore drift and spits', 'Waves hit the beach at an angle (with the wind) but drain straight back, zig-zagging sand along the coast: longshore drift. Where the coast changes direction, the sand builds out into a spit, like Spurn Head in Yorkshire.', ['longshore drift', 'spit']),
        ],
        questions: [
          order('q1', 'Put the headland landforms in order', ['Crack', 'Cave', 'Arch', 'Stack', 'Stump']),
          mcq('q2', 'Bays form in…', ['Softer rock', 'Harder rock', 'Granite only', 'Ice'], 0),
          mcq('q3', 'Longshore drift moves sand…', ['Along the coast in a zig-zag', 'Straight out to sea', 'Up the cliffs', 'Nowhere'], 0),
          gap('q4', 'A ridge of sand built out where the coast changes direction is a ___.', ['spit']),
          tf('q5', 'Old Harry Rocks are stacks.', true),
          mcq('q6', 'What happens when an arch roof collapses?', ['A stack is left', 'A bay forms', 'A spit forms', 'A beach forms'], 0),
        ],
      },
      {
        id: 'gc-management',
        title: 'Managing coasts',
        emoji: '🧱',
        learn: [
          card('🧱', 'Hard engineering', 'Sea walls reflect waves, groynes (wooden fences down the beach) trap sand moving by longshore drift, and rock armour absorbs the waves’ energy. They work, but they’re expensive and can cause more erosion further along the coast.', ['sea wall', 'groynes', 'rock armour'], 'coast-defences'),
          card('🌾', 'Soft engineering and Holderness', 'Beach nourishment adds sand to widen beaches; managed retreat lets some land flood to create salt marsh. The Holderness coast in Yorkshire is one of Europe’s fastest-eroding coastlines, losing nearly 2 m a year. Mappleton is protected by rock armour and groynes, but places further south lose more land.', ['beach nourishment', 'managed retreat', 'Holderness']),
        ],
        questions: [
          match('q1', 'Match the defence to how it works', [
            ['Sea wall', 'Reflects waves'],
            ['Groynes', 'Trap sand'],
            ['Rock armour', 'Absorbs wave energy'],
          ]),
          tf('q2', 'Hard engineering is cheap and has no side effects.', false, 'It’s expensive and can increase erosion further along the coast.'),
          mcq('q3', 'Adding sand to a beach is called…', ['Beach nourishment', 'Managed retreat', 'Rock armour', 'Abrasion'], 0),
          mcq('q4', 'The Holderness coast is eroding by about…', ['Nearly 2 m a year', '1 cm a century', '100 m a day', 'It isn’t eroding'], 0),
          mcq('q5', 'Letting some land flood to make salt marsh is…', ['Managed retreat', 'A sea wall', 'Groynes', 'Drilling'], 0),
          gap('q6', 'Wooden fences built down a beach to trap sand are ___.', ['groynes']),
        ],
      },
    ],
  },
];
