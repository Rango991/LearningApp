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
];
