import { card, gap, match, mcq, order, tf } from './helpers';
import type { Unit } from './types';

// AQA GCSE Combined Science: Trilogy (8464), Biology topics 4.1-4.7.
// These are also the core of AQA GCSE Biology (8461).
// Question ids are stored in progress data, so never change an existing id.

const STAGE = 'GCSE (AQA)';

export const gcseBiology: Unit[] = [
  {
    id: 'g-bio-cells',
    title: 'Cell biology',
    stage: STAGE,
    description: 'Eukaryotes and prokaryotes, magnification, mitosis, stem cells, and moving substances in and out of cells.',
    colour: '#159a6c',
    lessons: [
      {
        id: 'gb-cell-types',
        title: 'Cell structure',
        emoji: '🦠',
        learn: [
          card('🧫', 'Eukaryotes and prokaryotes', 'Eukaryotic cells (animal and plant cells) have their genetic material inside a nucleus. Prokaryotic cells (bacteria) are much smaller and have no nucleus: their DNA is a single loop in the cytoplasm, and they may also have small rings of DNA called plasmids. Bacteria have a cell wall, a cell membrane, cytoplasm and ribosomes.', ['eukaryotic', 'prokaryotic', 'plasmids'], 'cell-types'),
          card('🏭', 'Ribosomes', 'Ribosomes are where proteins are made (protein synthesis). Every cell has them, including bacteria.', ['ribosomes']),
          card('🔍', 'Magnification', 'Magnification = size of image ÷ size of real object. Units must match: 1 mm = 1,000 micrometres (µm), and 1 µm = 1,000 nanometres (nm). Electron microscopes have a much higher magnification and resolution than light microscopes, so they show sub-cellular structures like ribosomes.', ['magnification', 'resolution', 'micrometre'], 'mag-triangle'),
        ],
        questions: [
          mcq('q1', 'Which type of cell has no nucleus?', ['Animal cell', 'Plant cell', 'Bacterial cell', 'Fungal cell'], 2),
          gap('q2', 'Small rings of DNA found in bacteria are called ___.', ['plasmids', 'plasmid']),
          mcq('q3', 'What is the function of ribosomes?', ['Respiration', 'Protein synthesis', 'Photosynthesis', 'Controlling the cell'], 1),
          gap('q4', 'An image is 10 mm long and the real object is 0.1 mm. Magnification = ×___', ['100']),
          gap('q5', '1 mm = ___ µm', ['1000']),
          tf('q6', 'Electron microscopes have a higher resolution than light microscopes.', true),
          match('q7', 'Eukaryotic or prokaryotic?', [
            ['Has a nucleus', 'Eukaryotic'],
            ['DNA in a single loop', 'Prokaryotic'],
          ]),
          gap('q8', 'A cell is 50 µm across and is magnified ×400. The image is ___ mm wide.', ['20'], '50 × 400 = 20,000 µm = 20 mm.'),
        ],
      },
      {
        id: 'gb-cell-division',
        title: 'Mitosis & stem cells',
        emoji: '🧬',
        learn: [
          card('🔁', 'The cell cycle', 'Before a cell divides it grows, makes more ribosomes and mitochondria, and copies its DNA so each chromosome is doubled. In mitosis one set of chromosomes is pulled to each end of the cell, then the cytoplasm and cell membrane divide. The result is two identical cells. Mitosis is used for growth and repair.', ['cell cycle', 'mitosis'], 'mitosis'),
          card('🌱', 'Stem cells', 'A stem cell is undifferentiated: it can become many types of cell. Embryonic stem cells can become almost any cell. Adult stem cells (e.g. in bone marrow) can form only some types, like blood cells. In plants, meristems (in root and shoot tips) can make any type of plant cell throughout the plant’s life.', ['stem cell', 'differentiate', 'meristem']),
          card('⚖️', 'Uses and issues', 'Stem cells might treat conditions like diabetes and paralysis. In therapeutic cloning, an embryo is made with the same genes as the patient, so the cells won’t be rejected. Issues: risk of passing on viral infections, and ethical or religious objections to using embryos.', ['therapeutic cloning']),
        ],
        questions: [
          mcq('q1', 'Mitosis produces…', ['Two identical cells', 'Four different cells', 'Gametes', 'One larger cell'], 0),
          mcq('q2', 'What happens to the DNA before a cell divides?', ['It is copied', 'It is destroyed', 'It halves', 'It leaves the nucleus for good'], 0),
          tf('q3', 'Mitosis is used for growth and repair.', true),
          gap('q4', 'A cell that is not yet specialised is ___.', ['undifferentiated']),
          mcq('q5', 'Where are adult stem cells found?', ['Bone marrow', 'Skin surface only', 'Red blood cells', 'Hair'], 0),
          gap('q6', 'In plants, stem cells are found in the ___.', ['meristem', 'meristems']),
          mcq('q7', 'Why might therapeutic cloning be useful?', ['The cells won’t be rejected by the patient', 'It is cheaper', 'It makes bacteria', 'It produces gametes'], 0),
          order('q8', 'Put the cell cycle in order', ['The cell grows and copies its DNA', 'Chromosomes are pulled to each end', 'The cytoplasm and membrane divide', 'Two identical cells are formed']),
        ],
      },
      {
        id: 'gb-cell-transport',
        title: 'Diffusion, osmosis & active transport',
        emoji: '💧',
        learn: [
          card('💨', 'Diffusion', 'Diffusion is the net movement of particles from high to low concentration. It is faster with a bigger concentration gradient, a higher temperature and a larger surface area. Single-celled organisms have a large surface area to volume ratio, so diffusion is enough. Big organisms need exchange surfaces like the lungs, gills, villi and roots.', ['concentration gradient', 'surface area to volume ratio']),
          card('🫧', 'Osmosis', 'Osmosis is the diffusion of water from a dilute solution to a more concentrated solution through a partially permeable membrane. A potato in strong salt solution loses water and gets lighter; in pure water it gains water and gets heavier.', ['osmosis', 'partially permeable'], 'osmosis'),
          card('🔋', 'Active transport', 'Active transport moves substances from a more dilute to a more concentrated solution: against the concentration gradient. It needs energy from respiration. Root hair cells use it to absorb mineral ions from the soil, and the gut uses it to absorb sugar into the blood.', ['active transport'], 'transport-compare'),
        ],
        questions: [
          match('q1', 'Match the process to its description', [
            ['Diffusion', 'Particles move down a concentration gradient'],
            ['Osmosis', 'Water moves through a partially permeable membrane'],
            ['Active transport', 'Moves against a gradient, using energy'],
          ]),
          mcq('q2', 'Which would NOT speed up diffusion?', ['A higher temperature', 'A bigger concentration gradient', 'A larger surface area', 'A thicker membrane'], 3),
          mcq('q3', 'A potato chip is put in strong salt solution. What happens to its mass?', ['It increases', 'It decreases', 'It stays the same'], 1, 'Water leaves the potato by osmosis into the more concentrated solution.'),
          tf('q4', 'Active transport needs energy from respiration.', true),
          mcq('q5', 'How do root hair cells take in mineral ions?', ['Active transport', 'Osmosis', 'Diffusion only', 'Photosynthesis'], 0, 'The soil has a lower concentration of ions than the root, so they must be moved against the gradient.'),
          gap('q6', 'In osmosis, water moves from a ___ solution to a more concentrated one.', ['dilute', 'weak', 'weaker']),
          mcq('q7', 'A cube with 1 cm sides has a surface area to volume ratio of…', ['6 : 1', '1 : 6', '1 : 1', '3 : 1'], 0, 'Surface area = 6 cm², volume = 1 cm³.'),
        ],
      },
    ],
  },
  {
    id: 'g-bio-organisation',
    title: 'Organisation',
    stage: STAGE,
    description: 'Enzymes, the heart and blood vessels, blood, heart disease, and plant tissues.',
    colour: '#e5533d',
    lessons: [
      {
        id: 'gb-org-enzymes',
        title: 'Enzymes',
        emoji: '🔑',
        learn: [
          card('🔐', 'Lock and key', 'Enzymes are biological catalysts: they speed up reactions without being used up. Each enzyme has an active site with a specific shape that only fits one substrate, like a lock and key.', ['active site', 'substrate', 'catalyst'], 'lock-key'),
          card('🌡️', 'Temperature and pH', 'Each enzyme works fastest at its optimum temperature and pH. Too hot, or the wrong pH, and the active site changes shape so the substrate no longer fits: the enzyme is denatured. In humans most enzymes work best around 37 °C; protease in the stomach works best in acid.', ['optimum', 'denatured'], 'enzyme-graph'),
          card('🟢', 'Bile', 'Bile is made in the liver and stored in the gall bladder. It is alkaline, so it neutralises stomach acid, and it emulsifies fat into small droplets, giving lipase a bigger surface area to work on.', ['bile', 'emulsify']),
        ],
        questions: [
          gap('q1', 'The part of an enzyme where the substrate fits is the active ___.', ['site']),
          mcq('q2', 'What happens to an enzyme at a very high temperature?', ['It works faster forever', 'It is denatured', 'It becomes a substrate', 'Nothing'], 1),
          tf('q3', 'Enzymes are used up in the reactions they catalyse.', false),
          mcq('q4', 'Why does a denatured enzyme stop working?', ['The active site changes shape', 'It runs out of energy', 'It dissolves', 'It becomes too small'], 0),
          match('q5', 'Match the enzyme to its products', [
            ['Amylase', 'Sugars'],
            ['Protease', 'Amino acids'],
            ['Lipase', 'Fatty acids and glycerol'],
          ]),
          mcq('q6', 'What does bile do to fat?', ['Emulsifies it into droplets', 'Digests it into sugars', 'Absorbs it', 'Makes it solid'], 0),
          gap('q7', 'Bile is made in the ___.', ['liver']),
        ],
      },
      {
        id: 'gb-org-heart',
        title: 'The heart & blood',
        emoji: '🫀',
        learn: [
          card('🔄', 'Double circulation', 'Humans have a double circulatory system. The right side of the heart pumps deoxygenated blood to the lungs; the left side pumps oxygenated blood around the body. The left ventricle has a thicker muscle wall because it pumps blood all round the body. Valves stop blood flowing backwards. Pacemaker cells in the right atrium control the heart rate.', ['double circulatory system', 'ventricle', 'atrium', 'valves'], 'heart'),
          card('🩸', 'Blood vessels', 'Arteries carry blood away from the heart at high pressure, so they have thick, muscular, elastic walls. Veins carry blood back to the heart at low pressure; they have thinner walls, a wide lumen and valves. Capillaries are one cell thick, so substances diffuse in and out easily.', ['artery', 'vein', 'capillary'], 'vessels'),
          card('🧪', 'Blood and heart disease', 'Blood is plasma (carries dissolved substances), red blood cells (carry oxygen, no nucleus), white blood cells (fight infection) and platelets (help clotting). Coronary heart disease is when fatty material builds up in the coronary arteries. Treatments: stents keep arteries open, statins lower cholesterol, and faulty valves can be replaced.', ['plasma', 'platelets', 'coronary heart disease', 'stent', 'statins']),
        ],
        questions: [
          mcq('q1', 'Which side of the heart pumps blood to the lungs?', ['Left', 'Right', 'Both', 'Neither'], 1),
          mcq('q2', 'Why does the left ventricle have the thickest wall?', ['It pumps blood all round the body', 'It holds more blood', 'It pumps to the lungs', 'It has valves'], 0),
          match('q3', 'Match the vessel to its feature', [
            ['Artery', 'Thick muscular walls, high pressure'],
            ['Vein', 'Valves, thin walls'],
            ['Capillary', 'Walls one cell thick'],
          ]),
          gap('q4', 'Fragments of cells that help blood clot are ___.', ['platelets']),
          mcq('q5', 'What does a stent do?', ['Keeps a coronary artery open', 'Lowers cholesterol', 'Replaces a valve', 'Makes blood clot'], 0),
          tf('q6', 'Veins carry blood towards the heart.', true),
          gap('q7', 'The heart’s natural pacemaker is in the right ___.', ['atrium']),
          mcq('q8', 'Which part of the blood carries dissolved substances like glucose and CO₂?', ['Plasma', 'Platelets', 'White blood cells', 'Red blood cells'], 0),
        ],
      },
      {
        id: 'gb-org-plants',
        title: 'Plant tissues & transpiration',
        emoji: '🌿',
        learn: [
          card('🚰', 'Xylem and phloem', 'Xylem is made of dead cells strengthened with lignin; it carries water and mineral ions from the roots up to the leaves. Phloem is living cells; it carries dissolved sugars from the leaves to the rest of the plant, in both directions. This is translocation.', ['xylem', 'phloem', 'translocation'], 'xylem-phloem'),
          card('💨', 'Transpiration', 'Transpiration is the loss of water vapour from the leaves, mostly through stomata. It pulls water up the xylem. It is faster when it is hotter, brighter, windier or drier (less humid). Guard cells open and close the stomata.', ['transpiration', 'stomata', 'guard cells']),
          card('🍃', 'Leaf tissues', 'Epidermis covers the leaf. Palisade mesophyll is where most photosynthesis happens. Spongy mesophyll has air spaces so gases can diffuse.', ['epidermis', 'palisade mesophyll', 'spongy mesophyll']),
        ],
        questions: [
          match('q1', 'Xylem or phloem?', [
            ['Carries water and minerals upwards', 'Xylem'],
            ['Carries dissolved sugars', 'Phloem'],
          ]),
          gap('q2', 'The movement of sugars through the phloem is called ___.', ['translocation']),
          mcq('q3', 'Which would DECREASE the rate of transpiration?', ['Higher temperature', 'More wind', 'Higher humidity', 'Brighter light'], 2),
          tf('q4', 'Xylem is made of living cells.', false, 'Xylem cells are dead, hollow tubes strengthened by lignin.'),
          gap('q5', 'Water vapour is lost from leaves mainly through the ___.', ['stomata']),
          mcq('q6', 'Why does spongy mesophyll have air spaces?', ['So gases can diffuse', 'To store water', 'To make it float', 'To carry sugars'], 0),
          mcq('q7', 'What substance strengthens xylem?', ['Lignin', 'Cellulose only', 'Chlorophyll', 'Starch'], 0),
        ],
      },
    ],
  },
  {
    id: 'g-bio-infection',
    title: 'Infection & response',
    stage: STAGE,
    description: 'Pathogens and diseases, how the body defends itself, vaccines and medicines.',
    colour: '#8b5cf6',
    lessons: [
      {
        id: 'gb-inf-pathogens',
        title: 'Pathogens & disease',
        emoji: '🦠',
        learn: [
          card('🧫', 'Four types of pathogen', 'Pathogens are microorganisms that cause infectious disease. Viruses reproduce inside cells and damage them. Bacteria reproduce rapidly and may produce toxins. Fungi and protists also cause disease. They spread through the air, in water or by direct contact.', ['pathogen', 'toxins'], 'pathogens'),
          card('📋', 'Examples to know', 'Viral: measles (fever, red rash, spread in droplets), HIV (attacks the immune system), tobacco mosaic virus (plants). Bacterial: salmonella (food poisoning), gonorrhoea (an STD, treated with antibiotics; prevented with condoms). Fungal: rose black spot. Protist: malaria, spread by mosquitoes (a vector).', ['vector']),
        ],
        questions: [
          match('q1', 'Match the disease to its pathogen type', [
            ['Measles', 'Virus'],
            ['Salmonella', 'Bacterium'],
            ['Rose black spot', 'Fungus'],
            ['Malaria', 'Protist'],
          ]),
          mcq('q2', 'How do viruses cause illness?', ['They reproduce inside cells and damage them', 'They produce toxins only', 'They eat cells', 'They block blood vessels'], 0),
          gap('q3', 'An animal that spreads a disease without getting it, like a mosquito, is a ___.', ['vector']),
          tf('q4', 'Gonorrhoea is caused by a virus.', false, 'It is caused by a bacterium and can be treated with antibiotics.'),
          mcq('q5', 'Which disease affects plants?', ['Measles', 'Tobacco mosaic virus', 'HIV', 'Gonorrhoea'], 1),
          mcq('q6', 'Which is a good way to reduce the spread of malaria?', ['Mosquito nets', 'Antibiotics', 'Washing hands', 'Vaccinating plants'], 0),
          gap('q7', 'Bacteria can make you ill by producing ___.', ['toxins', 'poisons']),
        ],
      },
      {
        id: 'gb-inf-defence',
        title: 'Defence & vaccination',
        emoji: '🛡️',
        learn: [
          card('🚧', 'First defences', 'The skin is a barrier. Nose hairs and mucus trap particles. Cells in the trachea and bronchi have cilia and make mucus to trap pathogens and move them away. Stomach acid kills pathogens that are swallowed.', ['barrier', 'mucus', 'cilia']),
          card('⚔️', 'White blood cells', 'If pathogens get in, white blood cells attack them in three ways: phagocytosis (engulfing and digesting them), producing antibodies (which stick to specific antigens on the pathogen), and producing antitoxins (which neutralise toxins).', ['phagocytosis', 'antibodies', 'antitoxins']),
          card('💉', 'Vaccination', 'A vaccine contains a small amount of a dead or inactive pathogen. White blood cells make antibodies against it and memory cells remain. If the real pathogen enters later, antibodies are made very quickly, so you don’t get ill. If most people are vaccinated, the disease can’t spread easily (herd immunity).', ['vaccine', 'herd immunity'], 'antibody-graph'),
        ],
        questions: [
          match('q1', 'Match the white blood cell action to what it does', [
            ['Phagocytosis', 'Engulfs and digests pathogens'],
            ['Antibodies', 'Stick to antigens on the pathogen'],
            ['Antitoxins', 'Neutralise toxins'],
          ]),
          mcq('q2', 'What does a vaccine contain?', ['A dead or inactive pathogen', 'Antibiotics', 'Painkillers', 'Live, active bacteria at full strength'], 0),
          tf('q3', 'After vaccination, antibodies are made much faster if the real pathogen enters.', true),
          mcq('q4', 'What job do cilia in the airways do?', ['Move mucus and trapped pathogens away', 'Make antibodies', 'Kill bacteria with acid', 'Carry oxygen'], 0),
          gap('q5', 'When enough people are vaccinated, it protects others too. This is ___ immunity.', ['herd']),
          mcq('q6', 'What kills pathogens that are swallowed?', ['Stomach acid', 'Saliva only', 'Bile', 'Platelets'], 0),
        ],
      },
      {
        id: 'gb-inf-drugs',
        title: 'Medicines & drug testing',
        emoji: '💊',
        learn: [
          card('💊', 'Antibiotics and painkillers', 'Antibiotics (like penicillin) kill bacteria inside the body, but they don’t work on viruses. Overuse leads to resistant bacteria such as MRSA. Painkillers treat the symptoms of a disease but don’t kill the pathogen.', ['antibiotics', 'painkillers', 'resistant']),
          card('🌿', 'Where drugs come from', 'Many drugs were first found in plants or microorganisms: digitalis (heart drug) from foxgloves, aspirin from willow, and penicillin, discovered by Alexander Fleming from a mould. Most new drugs are now made by chemists in the pharmaceutical industry.', ['penicillin', 'Fleming']),
          card('🧪', 'Testing new drugs', 'New drugs are tested for toxicity, efficacy (does it work?) and dose. Preclinical testing is on cells, tissues and live animals. Then clinical trials: first very low doses on healthy volunteers, then on patients to find the best dose. In double-blind trials, neither doctors nor patients know who has the drug and who has a placebo.', ['clinical trials', 'placebo', 'double-blind'], 'drug-trials'),
        ],
        questions: [
          tf('q1', 'Antibiotics can cure viral infections like the flu.', false),
          mcq('q2', 'Who discovered penicillin?', ['Alexander Fleming', 'Charles Darwin', 'Louis Pasteur', 'Marie Curie'], 0),
          match('q3', 'Match the drug to where it came from', [
            ['Digitalis', 'Foxgloves'],
            ['Aspirin', 'Willow'],
            ['Penicillin', 'Mould'],
          ]),
          mcq('q4', 'What is a placebo?', ['A dummy treatment with no drug in it', 'A stronger dose', 'A type of antibiotic', 'A vaccine'], 0),
          order('q5', 'Put drug testing in order', ['Tested on cells and tissues', 'Tested on animals', 'Low doses on healthy volunteers', 'Tested on patients']),
          gap('q6', 'In a ___-blind trial, neither the doctors nor the patients know who gets the real drug.', ['double']),
          mcq('q7', 'Why is overusing antibiotics a problem?', ['It leads to resistant bacteria', 'It makes viruses stronger', 'It causes vaccines to fail', 'It damages platelets'], 0),
        ],
      },
    ],
  },
  {
    id: 'g-bio-bioenergetics',
    title: 'Bioenergetics',
    stage: STAGE,
    description: 'Photosynthesis and limiting factors, respiration, and what happens when you exercise.',
    colour: '#3c9d2f',
    lessons: [
      {
        id: 'gb-ben-photo',
        title: 'Photosynthesis',
        emoji: '☀️',
        learn: [
          card('🧪', 'The equations', 'Photosynthesis is endothermic: energy is transferred from the environment by light. Word equation: carbon dioxide + water → glucose + oxygen. Symbol equation: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂.', ['endothermic', 'C₆H₁₂O₆']),
          card('📈', 'Limiting factors', 'The rate of photosynthesis can be limited by light intensity, carbon dioxide concentration, temperature and the amount of chlorophyll. Whichever is in shortest supply limits the rate. Farmers use greenhouses with heaters, lamps and extra CO₂ to grow crops faster.', ['limiting factor', 'light intensity'], 'limiting-factors'),
          card('🍞', 'Uses of glucose', 'Plants use glucose for respiration, to make starch for storage, cellulose for cell walls, fats and oils for storage, and amino acids for proteins (using nitrate ions from the soil).', ['starch', 'cellulose', 'amino acids']),
        ],
        questions: [
          mcq('q1', 'Photosynthesis is…', ['Endothermic', 'Exothermic'], 0),
          gap('q2', '6CO₂ + 6H₂O → C₆H₁₂O₆ + ___O₂', ['6']),
          mcq('q3', 'Which is NOT a limiting factor for photosynthesis?', ['Light intensity', 'Carbon dioxide', 'Temperature', 'Oxygen concentration'], 3),
          tf('q4', 'If light is the limiting factor, adding more CO₂ won’t increase the rate.', true),
          match('q5', 'Match the use of glucose', [
            ['Starch', 'Storage'],
            ['Cellulose', 'Cell walls'],
            ['Amino acids', 'Making proteins'],
          ]),
          mcq('q6', 'Plants need nitrate ions to make…', ['Amino acids (proteins)', 'Starch', 'Cellulose', 'Chlorophyll only'], 0),
          mcq('q7', 'Why do greenhouse owners sometimes burn paraffin heaters?', ['To increase temperature and CO₂', 'To add oxygen', 'To reduce light', 'To kill pests'], 0),
        ],
      },
      {
        id: 'gb-ben-resp',
        title: 'Respiration',
        emoji: '⚡',
        learn: [
          card('⚡', 'Aerobic respiration', 'Respiration is an exothermic reaction that happens continuously in living cells to release energy. Aerobic (with oxygen): glucose + oxygen → carbon dioxide + water. Symbol equation: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O.', ['exothermic', 'aerobic'], 'resp-compare'),
          card('🍺', 'Anaerobic respiration', 'Without enough oxygen, cells respire anaerobically. In muscles: glucose → lactic acid. In plants and yeast: glucose → ethanol + carbon dioxide (fermentation, used to make bread and alcoholic drinks). Anaerobic respiration releases much less energy because glucose is only partly broken down.', ['anaerobic', 'lactic acid', 'fermentation']),
          card('🔧', 'Uses of the energy', 'Organisms use the energy for chemical reactions to build larger molecules, for movement, and (in mammals and birds) to keep warm. Metabolism is the sum of all the reactions in a cell or the body.', ['metabolism']),
        ],
        questions: [
          gap('q1', 'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6___', ['H₂O', 'H2O', 'water']),
          mcq('q2', 'Respiration is…', ['Exothermic', 'Endothermic'], 0),
          mcq('q3', 'What does anaerobic respiration in muscles produce?', ['Lactic acid', 'Ethanol', 'Oxygen', 'Glucose'], 0),
          mcq('q4', 'Why does anaerobic respiration release less energy?', ['Glucose is only partly broken down', 'There is no glucose', 'It is faster', 'It uses more oxygen'], 0),
          tf('q5', 'Yeast fermentation produces ethanol and carbon dioxide.', true),
          gap('q6', 'The sum of all the reactions in a cell or the body is ___.', ['metabolism']),
          match('q7', 'Aerobic or anaerobic?', [
            ['Needs oxygen', 'Aerobic'],
            ['Makes lactic acid', 'Anaerobic'],
          ]),
        ],
      },
      {
        id: 'gb-ben-exercise',
        title: 'Response to exercise',
        emoji: '🏋️',
        learn: [
          card('💓', 'During exercise', 'Muscles need more energy, so heart rate, breathing rate and breath volume increase. This supplies more oxygenated blood to the muscles and removes more carbon dioxide.', ['heart rate', 'breathing rate'], 'exercise-graph'),
          card('😮‍💨', 'Oxygen debt', 'During hard exercise muscles respire anaerobically and lactic acid builds up, causing fatigue. Afterwards you keep breathing hard to repay the oxygen debt: blood carries lactic acid to the liver, where it is converted back into glucose.', ['oxygen debt', 'fatigue']),
        ],
        questions: [
          mcq('q1', 'What happens to heart rate during exercise?', ['It increases', 'It decreases', 'It stays the same', 'It stops'], 0),
          mcq('q2', 'Why does breathing rate increase during exercise?', ['To supply more oxygen and remove more CO₂', 'To cool the lungs', 'To make lactic acid', 'To store oxygen'], 0),
          gap('q3', 'The extra oxygen needed after exercise to break down lactic acid is the oxygen ___.', ['debt']),
          mcq('q4', 'Where is lactic acid converted back to glucose?', ['Liver', 'Lungs', 'Stomach', 'Kidneys'], 0),
          tf('q5', 'Lactic acid build-up causes muscle fatigue.', true),
          mcq('q6', 'Why do you keep breathing hard after a race?', ['To repay the oxygen debt', 'To get rid of glucose', 'To cool down the heart', 'To make more lactic acid'], 0),
        ],
      },
    ],
  },
  {
    id: 'g-bio-homeostasis',
    title: 'Homeostasis & response',
    stage: STAGE,
    description: 'The nervous system and reflexes, hormones, blood glucose, diabetes and reproductive hormones.',
    colour: '#e0890b',
    lessons: [
      {
        id: 'gb-hom-nervous',
        title: 'The nervous system',
        emoji: '🧠',
        learn: [
          card('⚖️', 'Homeostasis', 'Homeostasis is keeping internal conditions constant (like body temperature, blood glucose and water levels) so cells and enzymes work properly. Control systems have receptors (detect changes), coordination centres (brain, spinal cord, pancreas) and effectors (muscles or glands that respond).', ['homeostasis', 'receptor', 'effector']),
          card('⚡', 'Reflex arc', 'Reflexes are automatic and rapid; they don’t involve the conscious part of the brain. Stimulus → receptor → sensory neurone → relay neurone (in the spinal cord) → motor neurone → effector → response. At a synapse, the gap between neurones, a chemical diffuses across to carry the signal.', ['reflex', 'sensory neurone', 'relay neurone', 'motor neurone', 'synapse'], 'reflex-arc'),
        ],
        questions: [
          gap('q1', 'Keeping internal conditions constant is called ___.', ['homeostasis']),
          order('q2', 'Put the reflex arc in order', ['Receptor', 'Sensory neurone', 'Relay neurone', 'Motor neurone', 'Effector']),
          mcq('q3', 'What is an effector?', ['A muscle or gland that responds', 'A cell that detects a stimulus', 'The brain', 'A hormone'], 0),
          tf('q4', 'Reflex actions involve the conscious part of the brain.', false),
          mcq('q5', 'How is a signal passed across a synapse?', ['A chemical diffuses across the gap', 'Electricity jumps across', 'Blood carries it', 'It isn’t passed on'], 0),
          gap('q6', 'In a reflex arc, the relay neurone is in the spinal ___.', ['cord']),
          mcq('q7', 'Why are reflexes useful?', ['They are fast and protect the body', 'They are slow and careful', 'They use hormones', 'They make you think first'], 0),
        ],
      },
      {
        id: 'gb-hom-hormones',
        title: 'Hormones & blood glucose',
        emoji: '🩸',
        learn: [
          card('🧪', 'The endocrine system', 'Glands release hormones into the bloodstream, which carries them to target organs. Effects are slower than nerves but last longer. The pituitary gland in the brain is the “master gland”. Others: thyroid (thyroxine), adrenal (adrenaline), pancreas (insulin), ovaries (oestrogen) and testes (testosterone).', ['hormone', 'gland', 'pituitary'], 'glands'),
          card('🍬', 'Controlling blood glucose', 'The pancreas monitors blood glucose. If it is too high, the pancreas releases insulin, which makes cells take in glucose; the liver and muscles store excess as glycogen. If it is too low, the pancreas releases glucagon, which turns glycogen back into glucose.', ['insulin', 'glucagon', 'glycogen'], 'glucose-control'),
          card('💉', 'Diabetes', 'Type 1 diabetes: the pancreas doesn’t make enough insulin, so it is treated with insulin injections. Type 2 diabetes: body cells no longer respond to insulin; it is treated with a carbohydrate-controlled diet and exercise. Obesity is a risk factor for type 2.', ['type 1', 'type 2']),
        ],
        questions: [
          mcq('q1', 'How do hormones travel around the body?', ['In the bloodstream', 'Along neurones', 'Through the air', 'In lymph only'], 0),
          gap('q2', 'The “master gland” is the ___ gland.', ['pituitary']),
          mcq('q3', 'Blood glucose is too high. What does the pancreas release?', ['Insulin', 'Glucagon', 'Adrenaline', 'Thyroxine'], 0),
          gap('q4', 'Excess glucose is stored in the liver as ___.', ['glycogen']),
          match('q5', 'Match the diabetes type to the cause', [
            ['Type 1', 'Pancreas makes too little insulin'],
            ['Type 2', 'Cells stop responding to insulin'],
          ]),
          match('q6', 'Match the gland to its hormone', [
            ['Thyroid', 'Thyroxine'],
            ['Adrenal', 'Adrenaline'],
            ['Pancreas', 'Insulin'],
          ]),
          tf('q7', 'Hormones act faster than nerve impulses.', false),
        ],
      },
      {
        id: 'gb-hom-repro',
        title: 'Hormones in reproduction',
        emoji: '🧬',
        learn: [
          card('🔁', 'Menstrual cycle hormones', 'FSH (from the pituitary) makes an egg mature in the ovary and stimulates oestrogen. Oestrogen (from the ovaries) makes the uterus lining thicken. LH (from the pituitary) triggers ovulation, the release of the egg. Progesterone keeps the uterus lining in place.', ['FSH', 'LH', 'oestrogen', 'progesterone'], 'repro-hormones'),
          card('🛡️', 'Contraception', 'Hormonal: the pill (contains oestrogen/progesterone to stop eggs maturing), injections, implants and patches. Non-hormonal: barrier methods like condoms (which also protect against STDs), intrauterine devices, spermicide, sterilisation, and abstaining around ovulation.', ['contraception']),
        ],
        questions: [
          match('q1', 'Match the hormone to its job', [
            ['FSH', 'Makes an egg mature'],
            ['LH', 'Triggers ovulation'],
            ['Oestrogen', 'Thickens the uterus lining'],
            ['Progesterone', 'Maintains the uterus lining'],
          ]),
          mcq('q2', 'Which gland releases FSH and LH?', ['Pituitary', 'Ovaries', 'Thyroid', 'Adrenal'], 0),
          gap('q3', 'The release of an egg is called ___.', ['ovulation']),
          mcq('q4', 'Which contraceptive also protects against STDs?', ['Condoms', 'The pill', 'Implants', 'Injections'], 0),
          tf('q5', 'Oestrogen is made in the ovaries.', true),
          mcq('q6', 'How does the combined pill prevent pregnancy?', ['It stops eggs maturing', 'It kills sperm', 'It blocks the cervix', 'It removes the uterus lining'], 0),
        ],
      },
    ],
  },
  {
    id: 'g-bio-inheritance',
    title: 'Inheritance, variation & evolution',
    stage: STAGE,
    description: 'Meiosis, DNA, genetic crosses, inherited disorders, evolution, selective breeding and classification.',
    colour: '#2f6fe0',
    lessons: [
      {
        id: 'gb-inh-meiosis',
        title: 'Reproduction & meiosis',
        emoji: '🧫',
        learn: [
          card('👪', 'Sexual and asexual', 'Sexual reproduction joins male and female gametes (sperm and egg, or pollen and egg cells) and mixes genetic information, giving variation. Asexual reproduction needs only one parent, involves mitosis, and produces genetically identical offspring (clones).', ['gametes', 'clones']),
          card('✂️', 'Meiosis', 'Meiosis makes gametes. The cell copies its DNA, then divides twice, forming four gametes, each with a single set of chromosomes (23 in humans), all genetically different. At fertilisation, gametes join to restore the full number (46).', ['meiosis'], 'mitosis-meiosis'),
          card('🧬', 'DNA and the genome', 'DNA is a polymer made of two strands forming a double helix. A gene is a small section of DNA that codes for a particular sequence of amino acids, making a specific protein. The genome is all the genetic material of an organism.', ['DNA', 'gene', 'genome']),
        ],
        questions: [
          mcq('q1', 'Meiosis produces…', ['Four genetically different gametes', 'Two identical cells', 'One large cell', 'Four identical body cells'], 0),
          gap('q2', 'A human gamete has ___ chromosomes.', ['23']),
          match('q3', 'Mitosis or meiosis?', [
            ['Growth and repair', 'Mitosis'],
            ['Making gametes', 'Meiosis'],
          ]),
          tf('q4', 'Asexual reproduction produces variation.', false, 'The offspring are clones: genetically identical to the parent.'),
          gap('q5', 'All the genetic material of an organism is its ___.', ['genome']),
          mcq('q6', 'A gene codes for a specific…', ['Protein', 'Cell', 'Organ', 'Chromosome'], 0),
          mcq('q7', 'Which is a gamete?', ['Egg cell', 'Skin cell', 'Nerve cell', 'Red blood cell'], 0),
        ],
      },
      {
        id: 'gb-inh-genetics',
        title: 'Genetic crosses',
        emoji: '🧮',
        learn: [
          card('🔤', 'Key words', 'Alleles are different versions of a gene. A dominant allele (B) shows even if there is one copy; a recessive allele (b) only shows with two copies. Homozygous: two the same (BB or bb). Heterozygous: two different (Bb). Genotype is the alleles you have; phenotype is the characteristic you see.', ['allele', 'dominant', 'recessive', 'homozygous', 'heterozygous', 'genotype', 'phenotype']),
          card('🟦', 'Punnett squares', 'Write one parent’s alleles along the top and the other’s down the side, then fill in the boxes. Bb × Bb gives BB, Bb, Bb, bb: a 3 : 1 ratio of dominant to recessive phenotype, so a 25% chance of bb.', ['Punnett square'], 'punnett'),
          card('⚠️', 'Inherited disorders and sex', 'Polydactyly (extra fingers or toes) is caused by a dominant allele. Cystic fibrosis is caused by a recessive allele. Sex is determined by chromosomes: XX is female, XY is male, so there is a 50% chance of each.', ['polydactyly', 'cystic fibrosis', 'XX', 'XY']),
        ],
        questions: [
          gap('q1', 'Different versions of the same gene are called ___.', ['alleles', 'allele']),
          mcq('q2', 'Bb is…', ['Heterozygous', 'Homozygous dominant', 'Homozygous recessive'], 0),
          gap('q3', 'Bb × Bb. The chance of a bb offspring is ___%', ['25']),
          mcq('q4', 'Bb × Bb gives a ratio of dominant to recessive phenotype of…', ['3 : 1', '1 : 1', '1 : 2 : 1', '4 : 0'], 0),
          match('q5', 'Match the disorder to the type of allele', [
            ['Polydactyly', 'Dominant'],
            ['Cystic fibrosis', 'Recessive'],
          ]),
          gap('q6', 'Bb × bb. The chance of a bb offspring is ___%', ['50']),
          mcq('q7', 'Which sex chromosomes does a male have?', ['XY', 'XX', 'YY', 'X only'], 0),
          tf('q8', 'Phenotype means the alleles you have.', false, 'That’s genotype. Phenotype is the characteristic you can see.'),
        ],
      },
      {
        id: 'gb-inh-evolution',
        title: 'Evolution & classification',
        emoji: '🦕',
        learn: [
          card('🧬', 'Evolution and evidence', 'Evolution is a change in the inherited characteristics of a population over time, through natural selection, which may lead to a new species. Evidence includes fossils (remains of organisms from millions of years ago) and bacteria evolving resistance to antibiotics.', ['evolution', 'fossils', 'species']),
          card('🐄', 'Selective breeding and GM', 'Selective breeding: humans choose parents with useful characteristics and breed them over many generations (e.g. high-yield crops, gentle dogs). It can cause inbreeding. Genetic engineering moves a gene from one organism into another: bacteria make human insulin, and GM crops resist pests or give bigger yields.', ['selective breeding', 'genetic engineering']),
          card('🌳', 'Classification', 'Linnaeus sorted living things into kingdom, phylum, class, order, family, genus and species, and gave each a two-part (binomial) name, like Homo sapiens. Carl Woese later proposed three domains: Archaea, Bacteria and Eukaryota.', ['Linnaeus', 'binomial', 'three-domain'], 'three-domains'),
        ],
        questions: [
          mcq('q1', 'Which is evidence for evolution?', ['Fossils', 'Vaccines', 'Painkillers', 'Hormones'], 0),
          order('q2', 'Put Linnaeus’s groups in order, largest first', ['Kingdom', 'Phylum', 'Class', 'Order', 'Family', 'Genus', 'Species']),
          mcq('q3', 'Who proposed the three-domain system?', ['Carl Woese', 'Charles Darwin', 'Carl Linnaeus', 'Gregor Mendel'], 0),
          match('q4', 'Match the technique to the example', [
            ['Selective breeding', 'Choosing the cows that give the most milk'],
            ['Genetic engineering', 'Bacteria making human insulin'],
          ]),
          tf('q5', 'Homo sapiens is a binomial name: genus then species.', true),
          mcq('q6', 'A risk of selective breeding is…', ['Inbreeding, making animals prone to disease', 'Creating new elements', 'Faster evolution of viruses', 'There are no risks'], 0),
          gap('q7', 'The three domains are Archaea, Bacteria and ___.', ['Eukaryota', 'eukaryotes']),
        ],
      },
    ],
  },
  {
    id: 'g-bio-ecology',
    title: 'Ecology',
    stage: STAGE,
    description: 'Communities, biotic and abiotic factors, the carbon and water cycles, biodiversity and human impact.',
    colour: '#0f8b8d',
    lessons: [
      {
        id: 'gb-eco-communities',
        title: 'Communities & adaptations',
        emoji: '🌍',
        learn: [
          card('🏞️', 'Key words', 'A population is all the organisms of one species in a habitat. A community is all the populations in a habitat. An ecosystem is the community plus the non-living parts of the environment. Organisms compete: plants for light, space, water and minerals; animals for food, mates and territory.', ['population', 'community', 'ecosystem']),
          card('🌡️', 'Biotic and abiotic factors', 'Abiotic (non-living) factors: light, temperature, moisture, soil pH and minerals, wind, CO₂ and O₂ levels. Biotic (living) factors: food availability, new predators, new pathogens, and competition.', ['abiotic', 'biotic'], 'biotic-abiotic'),
          card('🐫', 'Adaptations', 'Adaptations can be structural (body shape), behavioural (how it acts) or functional (body processes). Extremophiles live in extreme conditions, like bacteria in deep-sea vents at very high temperatures.', ['structural', 'behavioural', 'functional', 'extremophiles']),
        ],
        questions: [
          match('q1', 'Match the word to its meaning', [
            ['Population', 'One species in a habitat'],
            ['Community', 'All the populations in a habitat'],
            ['Ecosystem', 'Living and non-living parts together'],
          ]),
          match('q2', 'Biotic or abiotic?', [
            ['Temperature', 'Abiotic'],
            ['A new predator', 'Biotic'],
          ]),
          mcq('q3', 'Which is an abiotic factor?', ['Soil pH', 'Competition', 'Pathogens', 'Food availability'], 0),
          gap('q4', 'Organisms that live in extreme conditions are called ___.', ['extremophiles', 'extremophile']),
          mcq('q5', 'A bird migrating for the winter is what type of adaptation?', ['Behavioural', 'Structural', 'Functional'], 0),
          tf('q6', 'Animals compete for light.', false, 'Plants compete for light. Animals compete for food, mates and territory.'),
        ],
      },
      {
        id: 'gb-eco-cycles',
        title: 'Cycles & decomposition',
        emoji: '♻️',
        learn: [
          card('🔄', 'The carbon cycle', 'Photosynthesis removes carbon dioxide from the air. Respiration (by plants, animals and decomposers) returns it. Combustion of fuels also releases carbon dioxide. Carbon passes along food chains as animals eat plants. Decomposers return carbon and mineral ions to the soil.', ['carbon cycle', 'decomposers'], 'carbon-cycle'),
          card('🌧️', 'The water cycle', 'Water evaporates from the sea and transpires from plants, condenses into clouds, and falls as precipitation (rain). It provides fresh water for plants and animals on land before draining back to the sea.', ['evaporation', 'precipitation']),
          card('🍂', 'Decomposition', 'Decay is faster when it is warm, moist and there is plenty of oxygen, because decomposers (bacteria and fungi) respire more. Gardeners use compost heaps; biogas generators use anaerobic decay to make methane fuel.', ['decay', 'compost', 'biogas']),
        ],
        questions: [
          mcq('q1', 'Which process removes CO₂ from the atmosphere?', ['Photosynthesis', 'Respiration', 'Combustion', 'Decay'], 0),
          mcq('q2', 'Which conditions make decay fastest?', ['Warm, moist, plenty of oxygen', 'Cold and dry', 'Hot with no water', 'Freezing'], 0),
          tf('q3', 'Decomposers return carbon to the air by respiration.', true),
          gap('q4', 'Rain, snow and hail are all forms of ___.', ['precipitation']),
          mcq('q5', 'What gas does a biogas generator produce?', ['Methane', 'Oxygen', 'Nitrogen', 'Hydrogen'], 0),
          order('q6', 'Put the water cycle in order, starting at the sea', ['Evaporation', 'Condensation into clouds', 'Precipitation', 'Water flows back to the sea']),
        ],
      },
      {
        id: 'gb-eco-biodiversity',
        title: 'Biodiversity & human impact',
        emoji: '🌳',
        learn: [
          card('🌈', 'Biodiversity', 'Biodiversity is the variety of all the species on Earth or in an ecosystem. High biodiversity makes ecosystems more stable, because species depend on each other for food, shelter and the physical environment.', ['biodiversity']),
          card('🏭', 'Human impact', 'A growing human population uses more resources and makes more waste. Pollution affects water (sewage, fertiliser, toxic chemicals), air (smoke, acidic gases) and land (landfill, toxic chemicals). Deforestation and destroying peat bogs release carbon dioxide and reduce biodiversity. Global warming changes where species can live.', ['pollution', 'deforestation', 'global warming'], 'human-impact'),
          card('🛟', 'Protecting biodiversity', 'Breeding programmes for endangered species, protecting and regenerating rare habitats, replanting hedgerows and field margins, reducing deforestation and carbon dioxide emissions, and recycling instead of using landfill.', ['conservation']),
        ],
        questions: [
          gap('q1', 'The variety of all the species in an ecosystem is ___.', ['biodiversity']),
          mcq('q2', 'Why is high biodiversity good?', ['Ecosystems are more stable', 'It increases pollution', 'There is less competition for nothing', 'It stops evolution'], 0),
          mcq('q3', 'Why does destroying peat bogs add to global warming?', ['Decay and burning of peat release CO₂', 'Peat absorbs sunlight', 'It removes oxygen', 'It cools the soil'], 0),
          tf('q4', 'Planting hedgerows around fields can increase biodiversity.', true),
          mcq('q5', 'Which is a way to protect endangered species?', ['Breeding programmes', 'More landfill', 'Deforestation', 'Burning peat'], 0),
          match('q6', 'Match the pollution to where it happens', [
            ['Sewage and fertiliser', 'Water'],
            ['Smoke and acidic gases', 'Air'],
            ['Landfill', 'Land'],
          ]),
        ],
      },
    ],
  },
];
