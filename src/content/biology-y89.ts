import { card, gap, match, mcq, order, tf } from './helpers';
import type { Unit } from './types';

// More KS3 Biology for Years 8-9 (National Curriculum), filling gaps found by
// checking the app against Gosforth East Middle School's Year 7-8 science plans.
// Question ids are stored in progress data, so never change an existing id.

const Y89 = 'Years 8–9';

export const biologyY89: Unit[] = [
  {
    id: 'bio-circulation',
    title: 'Heart, blood & lungs',
    stage: Y89,
    description: 'How the heart pumps blood, arteries, veins and capillaries, what blood is made of, and breathing, exercise and asthma.',
    colour: '#d9465f',
    lessons: [
      {
        id: 'bc-heart',
        title: 'The heart',
        emoji: '❤️',
        learn: [
          card('❤️', 'A double pump', 'Your heart is a muscle that pumps blood around your body. It’s a double pump: the right side pumps blood to the lungs to pick up oxygen, and the left side pumps it to the rest of the body. So blood passes through the heart twice on each trip round.', ['double circulation', 'pump'], 'circulation-loop'),
          card('🚪', 'Four chambers', 'The heart has four chambers. The two atria at the top receive blood; the two ventricles below pump it out. Valves stop blood flowing backwards. The left ventricle has the thickest wall, because it pumps blood all around the body.', ['atrium', 'ventricle', 'valve']),
        ],
        questions: [
          mcq('q1', 'What is the heart mainly made of?', ['Muscle', 'Bone', 'Fat', 'Cartilage'], 0),
          mcq('q2', 'Where does the right side of the heart pump blood?', ['To the lungs', 'To the brain', 'To the legs', 'To the stomach'], 0),
          mcq('q3', 'What do the valves in the heart do?', ['Stop blood flowing backwards', 'Make blood red', 'Add oxygen', 'Pump air'], 0),
          tf('q4', 'The ventricles are the top chambers of the heart.', false, 'The atria are at the top; the ventricles are below.'),
          gap('q5', 'The heart has ___ chambers.', ['4', 'four']),
          mcq('q6', 'Why does the left ventricle have the thickest wall?', ['It pumps blood all around the body', 'It holds the most blood', 'It is the oldest part', 'It pumps blood to the lungs'], 0),
          tf('q7', 'Blood passes through the heart twice on each full trip around the body.', true),
        ],
      },
      {
        id: 'bc-vessels',
        title: 'Blood vessels & blood',
        emoji: '🩸',
        learn: [
          card('🛣️', 'Three kinds of vessel', 'Arteries carry blood away from the heart at high pressure, so they have thick, stretchy, muscular walls. Veins carry blood back to the heart at low pressure; they have thinner walls and valves to stop it flowing backwards. Capillaries are tiny vessels with walls one cell thick, where substances pass between the blood and the body’s cells.', ['artery', 'vein', 'capillary'], 'vessel-types'),
          card('🩸', 'What’s in blood', 'Blood is mostly plasma, a yellowish liquid that carries dissolved food, carbon dioxide and waste. Red blood cells carry oxygen using haemoglobin; they have no nucleus, which leaves more room. White blood cells fight infection. Platelets help blood clot when you cut yourself.', ['plasma', 'red blood cell', 'white blood cell', 'platelet'], 'blood-cells'),
        ],
        questions: [
          match('q1', 'Match the vessel to its job', [
            ['Artery', 'Carries blood away from the heart'],
            ['Vein', 'Carries blood back to the heart'],
            ['Capillary', 'Swaps substances with cells'],
          ]),
          mcq('q2', 'Why do arteries have thick walls?', ['The blood in them is at high pressure', 'They carry more oxygen', 'They are older', 'They have valves'], 0),
          tf('q3', 'Veins have valves to stop blood flowing backwards.', true),
          match('q4', 'Match the part of blood to its job', [
            ['Red blood cells', 'Carry oxygen'],
            ['White blood cells', 'Fight infection'],
            ['Platelets', 'Help blood clot'],
            ['Plasma', 'Carries dissolved substances'],
          ]),
          mcq('q5', 'Why are capillary walls only one cell thick?', ['So substances can pass through easily', 'To make them strong', 'To hold more blood', 'To stop blood clotting'], 0),
          gap('q6', 'The red substance in red blood cells that carries oxygen is ___.', ['haemoglobin', 'hemoglobin']),
          tf('q7', 'Red blood cells have a large nucleus.', false, 'They have no nucleus, which makes room for more haemoglobin.'),
        ],
      },
      {
        id: 'bc-lungs',
        title: 'Lungs, exercise & asthma',
        emoji: '🫁',
        learn: [
          card('🎈', 'Breathing in and out', 'To breathe in, your intercostal muscles pull the ribs up and out, and the diaphragm contracts and flattens. The chest gets bigger, the pressure inside drops, and air rushes in. Breathing out is the reverse: the chest gets smaller, the pressure rises, and air is pushed out.', ['diaphragm', 'intercostal muscles', 'pressure'], 'breathing-model'),
          card('🏃', 'Exercise', 'During exercise your muscles need more oxygen for respiration and make more carbon dioxide, so your breathing rate and heart rate go up. Regular exercise makes your heart and breathing muscles stronger and can increase your lung capacity: the most air your lungs can hold. You can measure it by breathing out into an upside-down bottle full of water.', ['breathing rate', 'heart rate', 'lung capacity']),
          card('🌬️', 'Asthma', 'In an asthma attack, the muscles around the small airways (bronchioles) tighten, and the linings swell and make extra mucus. The airways get narrower, so it’s hard to breathe. Triggers include dust, pollen, smoke and cold air. An inhaler relaxes the muscles to open the airways again.', ['asthma', 'bronchioles', 'inhaler']),
        ],
        questions: [
          mcq('q1', 'When you breathe in, the diaphragm…', ['Contracts and flattens', 'Relaxes and domes upwards', 'Disappears', 'Moves into the throat'], 0),
          order('q2', 'Put the steps of breathing in in order', ['The diaphragm contracts and the ribs move up and out', 'The chest gets bigger', 'The pressure inside drops', 'Air rushes into the lungs']),
          mcq('q3', 'Why does your breathing rate go up during exercise?', ['Muscles need more oxygen and make more carbon dioxide', 'Your lungs get smaller', 'To cool your brain', 'Your heart stops'], 0),
          tf('q4', 'Regular exercise can increase your lung capacity.', true),
          mcq('q5', 'What happens to the airways during an asthma attack?', ['They get narrower', 'They get wider', 'They fill with blood', 'Nothing'], 0),
          mcq('q6', 'How does an inhaler help?', ['It relaxes the muscles around the airways', 'It adds extra mucus', 'It makes the heart beat faster', 'It blocks the airways'], 0),
          gap('q7', 'The most air your lungs can hold is your lung ___.', ['capacity']),
        ],
      },
    ],
  },
  {
    id: 'bio-health',
    title: 'Health & disease',
    stage: Y89,
    description: 'Pathogens and how they spread, your body’s defences and immune system, and vaccines and antibiotics.',
    colour: '#c2255c',
    lessons: [
      {
        id: 'bh-pathogens',
        title: 'Germs & how they spread',
        emoji: '🦠',
        learn: [
          card('🦠', 'Pathogens', 'Pathogens are microorganisms that cause disease: bacteria (like salmonella), viruses (like flu and measles), fungi (like athlete’s foot) and protists (like malaria). Viruses are much smaller than bacteria and can only reproduce inside cells.', ['pathogen', 'bacteria', 'virus'], 'pathogens'),
          card('🤧', 'How they spread', 'Diseases spread through the air (coughs and sneezes), by touch, in dirty water or food, and through animals (like mosquitoes carrying malaria). Washing hands, covering coughs, clean water and cooking food properly all cut the spread.', ['spread', 'hygiene']),
        ],
        questions: [
          match('q1', 'Match the disease to its type of pathogen', [
            ['Flu', 'Virus'],
            ['Salmonella', 'Bacteria'],
            ['Athlete’s foot', 'Fungus'],
            ['Malaria', 'Protist'],
          ]),
          tf('q2', 'Viruses can reproduce on their own, outside cells.', false),
          mcq('q3', 'Which helps stop diseases spreading?', ['Washing your hands', 'Sharing cups', 'Coughing into your hand, then touching things', 'Eating undercooked chicken'], 0),
          mcq('q4', 'Malaria is spread by…', ['Mosquitoes', 'Handshakes', 'Cold weather', 'Water bottles'], 0),
          gap('q5', 'A microorganism that causes disease is a ___.', ['pathogen']),
          mcq('q6', 'Which is the smallest?', ['A virus', 'A bacterium', 'A human cell', 'A fungus'], 0),
        ],
      },
      {
        id: 'bh-defences',
        title: 'Your body’s defences',
        emoji: '🛡️',
        learn: [
          card('🛡️', 'First line of defence', 'Your skin is a barrier. Your nose has hairs and mucus to trap germs, tiny hairs called cilia sweep mucus out of your airways, and stomach acid kills germs in food. Tears contain enzymes that kill bacteria.', ['skin', 'mucus', 'cilia', 'stomach acid'], 'body-defences'),
          card('⚪', 'White blood cells', 'If germs get in, white blood cells attack. Some engulf and digest pathogens. Others make antibodies that stick to one specific pathogen, and antitoxins that neutralise its poisons. Afterwards, memory cells remember it, so you can fight it faster next time: you’re immune.', ['white blood cells', 'antibodies', 'immunity']),
        ],
        questions: [
          mcq('q1', 'Which is part of the first line of defence?', ['Skin', 'Antibodies', 'Antibiotics', 'Memory cells'], 0),
          mcq('q2', 'What do antibodies do?', ['Stick to a specific pathogen', 'Kill all cells', 'Make mucus', 'Digest food'], 0),
          tf('q3', 'Stomach acid kills many germs in food.', true),
          mcq('q4', 'Why don’t you usually catch chickenpox twice?', ['Memory cells remember it, so you’re immune', 'You become allergic', 'Only children can catch it', 'Antibiotics stop it'], 0),
          gap('q5', 'Tiny hairs that sweep mucus out of your airways are called ___.', ['cilia']),
          mcq('q6', 'Antitoxins…', ['Neutralise the poisons pathogens make', 'Kill viruses inside cells', 'Make you sneeze', 'Build muscles'], 0),
        ],
      },
      {
        id: 'bh-medicine',
        title: 'Vaccines & antibiotics',
        emoji: '💉',
        learn: [
          card('💉', 'Vaccines', 'A vaccine contains a dead or weakened pathogen (or part of one). Your white blood cells make antibodies and memory cells without you getting ill, so you’re protected. If most people are vaccinated, the disease can’t spread easily: herd immunity.', ['vaccine', 'herd immunity'], 'vaccine-antibiotic'),
          card('💊', 'Antibiotics', 'Antibiotics, like penicillin (discovered by Alexander Fleming in 1928), kill bacteria but do nothing against viruses. Overusing them has led to antibiotic-resistant bacteria, so only take them when needed and always finish the course.', ['antibiotic', 'penicillin', 'resistance']),
        ],
        questions: [
          mcq('q1', 'What does a vaccine contain?', ['A dead or weakened pathogen', 'Antibiotics', 'Only sugar', 'Live bacteria that make you ill'], 0),
          tf('q2', 'Antibiotics work against viruses like colds and flu.', false, 'They only kill bacteria.'),
          gap('q3', 'Penicillin was discovered by Alexander ___.', ['Fleming']),
          mcq('q4', 'What is herd immunity?', ['When so many people are immune that a disease can’t spread easily', 'Immunity in cows', 'Never getting ill', 'A type of antibiotic'], 0),
          mcq('q5', 'Why are some bacteria now antibiotic-resistant?', ['Antibiotics have been overused', 'Bacteria grew bigger', 'Because of vaccines', 'Because of hand washing'], 0),
          tf('q6', 'Vaccines help your body make memory cells.', true),
        ],
      },
    ],
  },
  {
    id: 'bio-plants',
    title: 'Plants',
    stage: Y89,
    description: 'How roots, stems and leaves are adapted, how water and minerals move, and seeds, pollinators and food security.',
    colour: '#2f9e44',
    lessons: [
      {
        id: 'bp-parts',
        title: 'Roots, stems & leaves',
        emoji: '🌱',
        learn: [
          card('🌱', 'The parts of a plant', 'Roots anchor the plant and absorb water and minerals; root hair cells have a large surface area to do this. The stem holds the plant up and carries water and food. Leaves make food by photosynthesis. Flowers are for reproduction.', ['root hair cell', 'stem', 'leaf'], 'plant-parts'),
          card('🍃', 'Leaves are adapted', 'Leaves are broad and thin, to catch light and let gases in and out quickly. Palisade cells near the top are packed with chloroplasts. Stomata (tiny pores, mostly underneath) let carbon dioxide in and oxygen and water vapour out; guard cells open and close them.', ['palisade cell', 'stomata', 'guard cells']),
        ],
        questions: [
          match('q1', 'Match the part to its job', [
            ['Roots', 'Absorb water and minerals'],
            ['Stem', 'Supports and transports'],
            ['Leaves', 'Photosynthesis'],
            ['Flowers', 'Reproduction'],
          ]),
          mcq('q2', 'Why are root hair cells long and thin?', ['A big surface area to absorb water', 'To store food', 'To make seeds', 'To catch light'], 0),
          gap('q3', 'Tiny pores on leaves are called ___.', ['stomata']),
          tf('q4', 'Palisade cells contain lots of chloroplasts.', true),
          mcq('q5', 'What opens and closes the stomata?', ['Guard cells', 'Root hairs', 'Xylem', 'Petals'], 0),
          mcq('q6', 'Why are leaves thin?', ['So gases can diffuse in and out quickly', 'To be heavy', 'To store water', 'To hold flowers'], 0),
        ],
      },
      {
        id: 'bp-transport',
        title: 'Water & minerals',
        emoji: '💧',
        learn: [
          card('💧', 'Transport in plants', 'Xylem tubes carry water and minerals up from the roots. Phloem tubes carry sugars made in the leaves to the rest of the plant. Water evaporating from the leaves (transpiration) pulls more water up the stem.', ['xylem', 'phloem', 'transpiration'], 'xylem-phloem'),
          card('🧪', 'Minerals', 'Plants need minerals from the soil. Nitrates are used to make proteins for growth: without them, leaves turn yellow and growth is stunted. Magnesium is needed to make chlorophyll. Farmers add fertilisers to replace the minerals crops use up.', ['nitrates', 'magnesium', 'fertiliser']),
        ],
        questions: [
          mcq('q1', 'Which tubes carry water up the plant?', ['Xylem', 'Phloem', 'Stomata', 'Root hairs'], 0),
          mcq('q2', 'Phloem carries…', ['Sugars', 'Only water', 'Oxygen', 'Soil'], 0),
          gap('q3', 'Water evaporating from the leaves is called ___.', ['transpiration']),
          mcq('q4', 'A plant short of nitrates has…', ['Yellow leaves and stunted growth', 'Purple flowers', 'Extra-big leaves', 'More roots'], 0),
          tf('q5', 'Magnesium is needed to make chlorophyll.', true),
          mcq('q6', 'Why do farmers use fertilisers?', ['To replace minerals in the soil', 'To kill insects', 'To water plants', 'To warm the soil'], 0),
        ],
      },
      {
        id: 'bp-seeds',
        title: 'Seeds & food security',
        emoji: '🌻',
        learn: [
          card('🌻', 'Seeds and dispersal', 'After pollination and fertilisation, the ovule becomes a seed and the ovary becomes a fruit. Seeds are spread out so new plants don’t compete with the parent: by wind (sycamore, dandelion), animals (berries, burrs), water (coconut) or bursting pods (peas).', ['seed dispersal'], 'seed-dispersal'),
          card('🐝', 'Insects and food security', 'About a third of the food we eat depends on insect pollination, especially by bees. Pesticides, habitat loss and disease have reduced insect numbers, which threatens food security. Planting wildflowers and using fewer pesticides helps.', ['pollination', 'food security']),
        ],
        questions: [
          match('q1', 'Match the plant to how its seeds spread', [
            ['Dandelion', 'Wind'],
            ['Burdock burrs', 'Animal fur'],
            ['Coconut', 'Water'],
          ]),
          mcq('q2', 'After fertilisation, the ovule becomes…', ['A seed', 'A petal', 'A leaf', 'A root'], 0),
          mcq('q3', 'Why do plants spread their seeds?', ['So new plants don’t compete with the parent', 'To feed birds', 'To stay close together', 'To make flowers'], 0),
          tf('q4', 'About a third of our food depends on insect pollination.', true),
          mcq('q5', 'Which helps pollinating insects?', ['Planting wildflowers', 'Using more pesticides', 'Cutting down hedges', 'Paving over gardens'], 0),
          gap('q6', 'Having enough safe food for everyone is called food ___.', ['security']),
        ],
      },
    ],
  },
];
