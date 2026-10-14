import { card, gap, match, mcq, order, tf } from './helpers';
import type { Unit } from './types';

// KS3 Biology, Years 8-9 (National Curriculum), pitched to lead into AQA GCSE.
// Question ids are stored in progress data, so never change an existing id.

const STAGE = 'Years 8–9';

export const biologyKs3: Unit[] = [
  {
    id: 'bio-nutrition',
    title: 'Nutrition & digestion',
    stage: STAGE,
    description: 'A balanced diet, food tests, and how your gut breaks food down.',
    colour: '#f29d38',
    lessons: [
      {
        id: 'bn-diet',
        title: 'A balanced diet',
        emoji: '🥗',
        learn: [
          card('🍞', 'The 7 nutrients', 'Carbohydrates: main energy source. Lipids (fats and oils): store energy and insulate. Proteins: growth and repair. Vitamins and minerals: keep you healthy in small amounts. Fibre: keeps food moving through the gut. Water: needed by every cell.', ['carbohydrate', 'lipid', 'protein', 'fibre']),
          card('🍊', 'Deficiency diseases', 'Not enough of a vitamin or mineral causes a deficiency disease. Too little vitamin C causes scurvy (bleeding gums). Too little vitamin D or calcium causes weak bones (rickets). Too little iron causes anaemia (tiredness).', ['deficiency', 'scurvy', 'anaemia']),
          card('⚖️', 'Energy balance', 'If you take in more energy than you use, the extra is stored as fat, and over time this can lead to obesity. Taking in too little energy leads to starvation. Active people need more energy.'),
        ],
        questions: [
          match('q1', 'Match the nutrient to its main job', [
            ['Carbohydrate', 'Main source of energy'],
            ['Protein', 'Growth and repair'],
            ['Fibre', 'Keeps food moving through the gut'],
            ['Lipid', 'Stores energy and insulates'],
          ]),
          mcq('q2', 'Which disease is caused by a lack of vitamin C?', ['Rickets', 'Scurvy', 'Anaemia', 'Diabetes'], 1),
          mcq('q3', 'A lack of iron in the diet can cause…', ['Scurvy', 'Anaemia', 'Rickets', 'Obesity'], 1, 'Iron is needed to make haemoglobin in red blood cells.'),
          tf('q4', 'Vitamins and minerals are needed in large amounts.', false, 'They’re only needed in small amounts, but you still need them.'),
          gap('q5', 'Too little vitamin D or calcium can cause weak bones, a disease called ___.', ['rickets']),
          mcq('q6', 'What happens to energy you take in but don’t use?', ['It is breathed out', 'It is stored as fat', 'It turns into protein', 'It disappears'], 1),
          tf('q7', 'A very active teenager needs more energy from food than someone who sits still all day.', true),
          mcq('q8', 'Which food is mainly carbohydrate?', ['Chicken', 'Pasta', 'Butter', 'Eggs'], 1),
        ],
      },
      {
        id: 'bn-tests',
        title: 'Food tests',
        emoji: '🧪',
        learn: [
          card('🔵', 'Starch and sugar', 'Starch: add iodine solution. It turns from orange-brown to blue-black if starch is there. Sugar (glucose): add Benedict’s solution and heat in a water bath. It turns from blue to green, yellow or brick red if sugar is there.', ['iodine', 'Benedict’s']),
          card('🟣', 'Protein and fat', 'Protein: add biuret solution. It turns from blue to purple if protein is there. Fat (lipid): shake with ethanol, then add water. A cloudy white layer (an emulsion) means fat is there.', ['biuret', 'emulsion test']),
        ],
        questions: [
          match('q1', 'Match the test to what it detects', [
            ['Iodine solution', 'Starch'],
            ['Benedict’s solution', 'Sugar'],
            ['Biuret solution', 'Protein'],
            ['Ethanol emulsion test', 'Fat'],
          ]),
          mcq('q2', 'Iodine turns blue-black. What does the food contain?', ['Sugar', 'Protein', 'Starch', 'Fat'], 2),
          mcq('q3', 'What colour does biuret go if protein is present?', ['Purple', 'Brick red', 'Blue-black', 'Cloudy white'], 0),
          tf('q4', 'The Benedict’s test needs to be heated.', true, 'It only changes colour when warmed in a hot water bath.'),
          gap('q5', 'A positive Benedict’s test with lots of sugar goes ___ red.', ['brick', 'brick red'], undefined, 'It’s the colour of a house brick'),
          mcq('q6', 'In the ethanol test, what shows fat is present?', ['A purple colour', 'A cloudy white layer', 'Fizzing', 'A blue-black colour'], 1),
          tf('q7', 'Iodine solution starts off orange-brown.', true),
        ],
      },
      {
        id: 'bn-digestion',
        title: 'The digestive system',
        emoji: '🫃',
        learn: [
          card('🛤️', 'The journey', 'Mouth (teeth chew, saliva starts digesting starch) → oesophagus → stomach (acid kills bacteria, churns food) → small intestine (digestion finishes, nutrients absorbed into blood) → large intestine (water absorbed) → rectum → anus.', ['oesophagus', 'small intestine', 'large intestine']),
          card('✂️', 'Enzymes', 'Enzymes are biological catalysts that break big molecules into small ones. Carbohydrases (like amylase) break starch into sugars. Proteases break proteins into amino acids. Lipases break fats into fatty acids and glycerol.', ['enzyme', 'amylase', 'protease', 'lipase']),
          card('🌾', 'Villi', 'The small intestine is lined with millions of tiny finger-like villi. They give a huge surface area, have thin walls and a good blood supply, so nutrients are absorbed quickly. The liver makes bile, which breaks fat into small droplets.', ['villi', 'bile']),
        ],
        questions: [
          order('q1', 'Put the digestive system in order', ['Mouth', 'Oesophagus', 'Stomach', 'Small intestine', 'Large intestine']),
          mcq('q2', 'Where are most nutrients absorbed into the blood?', ['Stomach', 'Small intestine', 'Large intestine', 'Oesophagus'], 1),
          mcq('q3', 'What is the main job of the large intestine?', ['Absorbing water', 'Making bile', 'Digesting protein', 'Chewing food'], 0),
          match('q4', 'Match the enzyme to what it breaks down', [
            ['Amylase', 'Starch'],
            ['Protease', 'Protein'],
            ['Lipase', 'Fat'],
          ]),
          gap('q5', 'Proteins are broken down into ___ acids.', ['amino']),
          tf('q6', 'Villi increase the surface area of the small intestine.', true),
          mcq('q7', 'Why does the stomach contain acid?', ['To absorb water', 'To kill bacteria', 'To make bile', 'To store fat'], 1),
          mcq('q8', 'Which organ makes bile?', ['Pancreas', 'Liver', 'Stomach', 'Kidney'], 1),
        ],
      },
      {
        id: 'bn-drugs',
        title: 'Drugs, alcohol & smoking',
        emoji: '🚭',
        learn: [
          card('💊', 'Drugs', 'A drug is a chemical that changes how your body works. Medicinal drugs (like paracetamol or antibiotics) help the body. Recreational drugs are taken for enjoyment and can be harmful and addictive.', ['drug', 'addiction']),
          card('🍺', 'Alcohol', 'Alcohol is a depressant: it slows down the nervous system and reactions. Drinking too much over a long time damages the liver and brain. Drinking in pregnancy can harm the baby.', ['depressant']),
          card('🚬', 'Smoking', 'Nicotine is the addictive drug in cigarettes. Tar coats the lungs and causes cancer. Carbon monoxide takes the place of oxygen in red blood cells, so less oxygen reaches the body. Smoke also damages the cilia in the airways.', ['nicotine', 'tar', 'carbon monoxide']),
        ],
        questions: [
          match('q1', 'Match the chemical in cigarette smoke to its effect', [
            ['Nicotine', 'Addictive'],
            ['Tar', 'Causes cancer'],
            ['Carbon monoxide', 'Reduces oxygen carried by blood'],
          ]),
          tf('q2', 'Alcohol is a stimulant that speeds up reactions.', false, 'Alcohol is a depressant: it slows the nervous system down.'),
          mcq('q3', 'Which organ is especially damaged by drinking too much alcohol over many years?', ['Liver', 'Heart valves', 'Bones', 'Skin'], 0),
          gap('q4', 'The addictive drug in tobacco is ___.', ['nicotine']),
          mcq('q5', 'Which of these is a medicinal drug?', ['Nicotine', 'Antibiotics', 'Alcohol', 'Cannabis'], 1),
          tf('q6', 'Smoking damages the cilia that sweep mucus out of the airways.', true),
          mcq('q7', 'Why do smokers often get out of breath more easily?', ['Carbon monoxide reduces the oxygen their blood carries', 'Nicotine makes muscles bigger', 'Tar adds extra oxygen', 'Smoke cools the lungs'], 0),
        ],
      },
    ],
  },
  {
    id: 'bio-energy',
    title: 'Respiration & photosynthesis',
    stage: STAGE,
    description: 'How living things release energy, and how plants make food from light.',
    colour: '#2fa36b',
    lessons: [
      {
        id: 'be-aerobic',
        title: 'Aerobic respiration',
        emoji: '🏃',
        learn: [
          card('⚡', 'Releasing energy', 'Respiration is a chemical reaction in every living cell that releases energy from glucose. Aerobic respiration uses oxygen and happens in the mitochondria.', ['respiration', 'mitochondria']),
          card('📝', 'The word equation', 'glucose + oxygen → carbon dioxide + water. Energy is released (it isn’t a product you write in the equation, but it’s the point of the reaction!). The energy is used for movement, keeping warm, growth and more.', ['word equation']),
        ],
        questions: [
          gap('q1', 'glucose + ___ → carbon dioxide + water', ['oxygen']),
          mcq('q2', 'Where in the cell does aerobic respiration happen?', ['Nucleus', 'Mitochondria', 'Cell membrane', 'Vacuole'], 1),
          match('q3', 'Sort the substances in aerobic respiration', [
            ['Glucose', 'Reactant'],
            ['Carbon dioxide', 'Product'],
          ]),
          tf('q4', 'Only animals respire; plants don’t.', false, 'All living cells respire, including plant cells, all the time.'),
          mcq('q5', 'What are the products of aerobic respiration?', ['Glucose and oxygen', 'Carbon dioxide and water', 'Lactic acid', 'Oxygen and water'], 1),
          tf('q6', 'Respiration and breathing are the same thing.', false),
          mcq('q7', 'How does glucose get to muscle cells?', ['Carried in the blood', 'Through the lungs', 'Through the skin', 'It’s made in the muscle'], 0),
        ],
      },
      {
        id: 'be-anaerobic',
        title: 'Anaerobic respiration',
        emoji: '🍞',
        learn: [
          card('🥵', 'In muscles', 'During hard exercise muscles can’t get enough oxygen, so they respire anaerobically: glucose → lactic acid. It releases much less energy, and lactic acid causes cramp. Afterwards you breathe hard to pay back the oxygen debt.', ['anaerobic', 'lactic acid', 'oxygen debt']),
          card('🍺', 'In yeast: fermentation', 'Yeast respires anaerobically too: glucose → ethanol + carbon dioxide. This is fermentation. The carbon dioxide makes bread rise, and the ethanol is the alcohol in beer and wine.', ['fermentation', 'ethanol']),
        ],
        questions: [
          gap('q1', 'In muscles, anaerobic respiration turns glucose into ___ acid.', ['lactic']),
          tf('q2', 'Anaerobic respiration releases more energy than aerobic respiration.', false, 'It releases much less energy from each glucose molecule.'),
          mcq('q3', 'What are the products of fermentation by yeast?', ['Lactic acid', 'Ethanol and carbon dioxide', 'Oxygen and water', 'Glucose'], 1),
          mcq('q4', 'Why does bread dough rise?', ['Yeast makes carbon dioxide gas', 'Yeast makes oxygen', 'The flour melts', 'Lactic acid expands'], 0),
          match('q5', 'Match each type of respiration to its products', [
            ['Aerobic', 'Carbon dioxide and water'],
            ['Anaerobic in muscles', 'Lactic acid'],
            ['Anaerobic in yeast', 'Ethanol and carbon dioxide'],
          ]),
          mcq('q6', 'Why do you keep breathing hard after a sprint?', ['To repay the oxygen debt', 'To cool your lungs', 'To make glucose', 'To get rid of water'], 0),
          tf('q7', 'Anaerobic respiration does not need oxygen.', true),
        ],
      },
      {
        id: 'be-photosynthesis',
        title: 'Photosynthesis',
        emoji: '🌿',
        learn: [
          card('☀️', 'Making food', 'Plants make their own food by photosynthesis, in the chloroplasts. The green pigment chlorophyll absorbs light energy. The word equation is: carbon dioxide + water → glucose + oxygen.', ['photosynthesis', 'chlorophyll']),
          card('🍃', 'Leaves are adapted', 'Leaves are broad and flat to catch light, and thin so gases diffuse in quickly. Palisade cells near the top are packed with chloroplasts. Tiny pores called stomata on the underside let carbon dioxide in and oxygen out, opened and closed by guard cells.', ['stomata', 'guard cells']),
          card('🧪', 'Minerals', 'Plants also need minerals from the soil, taken in by root hair cells. Nitrates are needed to make proteins for growth. Magnesium is needed to make chlorophyll. Plants turn glucose into starch to store it.', ['nitrates', 'magnesium']),
        ],
        questions: [
          gap('q1', 'carbon dioxide + water → glucose + ___', ['oxygen']),
          mcq('q2', 'Where does photosynthesis happen?', ['Mitochondria', 'Chloroplasts', 'Nucleus', 'Root hair cells'], 1),
          mcq('q3', 'What absorbs the light energy?', ['Chlorophyll', 'Glucose', 'Starch', 'Cellulose'], 0),
          match('q4', 'Match the leaf part to its job', [
            ['Stomata', 'Let gases in and out'],
            ['Guard cells', 'Open and close stomata'],
            ['Palisade cells', 'Do most photosynthesis'],
          ]),
          tf('q5', 'Leaves are thin so gases can diffuse in and out quickly.', true),
          mcq('q6', 'Which mineral do plants need to make chlorophyll?', ['Nitrate', 'Magnesium', 'Iron', 'Calcium'], 1),
          mcq('q7', 'A plant with yellow leaves and poor growth might be short of…', ['Nitrates', 'Oxygen', 'Glucose', 'Starch'], 0),
          gap('q8', 'Plants store glucose as ___.', ['starch'], 'That’s why the iodine test on a leaf turns blue-black.'),
        ],
      },
    ],
  },
  {
    id: 'bio-genetics',
    title: 'Genetics & evolution',
    stage: STAGE,
    description: 'Variation, DNA and genes, and how species change over time.',
    colour: '#7c4dff',
    lessons: [
      {
        id: 'bg-variation',
        title: 'Variation',
        emoji: '👪',
        learn: [
          card('🧬', 'Causes of variation', 'Differences between living things are called variation. Inherited variation comes from your parents’ genes (like eye colour or blood group). Environmental variation comes from your surroundings (like scars, accent or a tan). Many features, like height and weight, are a mix of both.', ['inherited', 'environmental']),
          card('📊', 'Two kinds of data', 'Continuous variation can be any value in a range, like height or mass, and is shown in a histogram. Discontinuous variation falls into distinct groups, like blood group or tongue rolling, and is shown in a bar chart.', ['continuous', 'discontinuous']),
        ],
        questions: [
          match('q1', 'Is each feature inherited or environmental?', [
            ['Natural eye colour', 'Inherited'],
            ['A scar', 'Environmental'],
          ]),
          mcq('q2', 'Which is an example of continuous variation?', ['Blood group', 'Height', 'Tongue rolling', 'Eye colour'], 1),
          mcq('q3', 'Which is an example of discontinuous variation?', ['Mass', 'Hand span', 'Blood group', 'Height'], 2),
          tf('q4', 'Height is affected by both genes and the environment.', true, 'Genes set a range, and diet and health affect where you end up within it.'),
          mcq('q5', 'Which graph suits continuous data?', ['Bar chart', 'Histogram', 'Pie chart only', 'Pictogram'], 1),
          gap('q6', 'Differences between members of a species are called ___.', ['variation']),
          tf('q7', 'Identical twins can still have some differences.', true, 'They have the same genes, so any differences are environmental.'),
        ],
      },
      {
        id: 'bg-dna',
        title: 'DNA, genes & chromosomes',
        emoji: '🧬',
        learn: [
          card('📦', 'Packed in the nucleus', 'The nucleus contains chromosomes. Each chromosome is one very long molecule of DNA. A gene is a short section of DNA that carries the instructions for one characteristic.', ['chromosome', 'DNA', 'gene']),
          card('🔢', 'Numbers', 'Human body cells have 46 chromosomes in 23 pairs: one of each pair from each parent. Sex cells (eggs and sperm) have just 23, so when they join at fertilisation the baby has 46 again.', ['23 pairs']),
          card('🔬', 'Discovering DNA', 'In 1953 James Watson and Francis Crick worked out that DNA is a double helix. They used X-ray images taken by Rosalind Franklin and Maurice Wilkins.', ['double helix', 'Rosalind Franklin']),
        ],
        questions: [
          order('q1', 'Order from smallest to largest', ['Gene', 'Chromosome', 'Nucleus', 'Cell']),
          gap('q2', 'Human body cells have ___ chromosomes.', ['46']),
          mcq('q3', 'How many chromosomes are in a human egg cell?', ['46', '23', '92', '12'], 1),
          mcq('q4', 'What is a gene?', ['A whole chromosome', 'A section of DNA for one characteristic', 'A type of cell', 'A sex cell'], 1),
          gap('q5', 'DNA has the shape of a double ___.', ['helix']),
          mcq('q6', 'Whose X-ray photos helped reveal the structure of DNA?', ['Marie Curie', 'Rosalind Franklin', 'Charles Darwin', 'Isaac Newton'], 1),
          tf('q7', 'You get half your chromosomes from each parent.', true),
        ],
      },
      {
        id: 'bg-evolution',
        title: 'Natural selection',
        emoji: '🦒',
        learn: [
          card('🧠', 'Darwin’s idea', 'Charles Darwin explained evolution by natural selection: 1) members of a species vary; 2) they compete for food, mates and space; 3) those best adapted survive and reproduce; 4) they pass on their genes; 5) over many generations the species changes.', ['natural selection', 'Darwin']),
          card('🦤', 'Extinction', 'A species becomes extinct when there are no individuals left. Causes include changes to the environment, new diseases, new predators, competition and habitat destruction. Gene banks and seed banks store genetic material to protect species.', ['extinct', 'gene bank']),
        ],
        questions: [
          order('q1', 'Put natural selection in order', [
            'Individuals in a species vary',
            'They compete to survive',
            'The best adapted survive and reproduce',
            'Their genes are passed to offspring',
          ]),
          mcq('q2', 'Who came up with the theory of evolution by natural selection?', ['Charles Darwin', 'Isaac Newton', 'Albert Einstein', 'Gregor Mendel'], 0),
          tf('q3', 'An animal can choose to evolve a useful feature during its lifetime.', false, 'Evolution happens over many generations as better-adapted individuals pass on their genes.'),
          mcq('q4', 'Which of these could cause a species to become extinct?', ['A new disease', 'Lots of food', 'No predators', 'A mild climate'], 0),
          gap('q5', 'When no individuals of a species are left, it is ___.', ['extinct']),
          mcq('q6', 'What is a seed bank for?', ['Selling seeds', 'Storing seeds to protect plant species', 'Growing crops', 'Making new species'], 1),
          tf('q7', 'Bacteria becoming resistant to antibiotics is an example of natural selection.', true),
        ],
      },
    ],
  },
  {
    id: 'bio-ecosystems',
    title: 'Ecosystems',
    stage: STAGE,
    description: 'Food chains and webs, how living things depend on each other, and sampling.',
    colour: '#1aa0c8',
    lessons: [
      {
        id: 'bc-chains',
        title: 'Food chains & webs',
        emoji: '🦊',
        learn: [
          card('🌱', 'Food chains', 'A food chain starts with a producer (a plant, which makes its own food). Then come the primary consumer (eats the producer), the secondary consumer and the tertiary consumer. The arrows show the direction energy is transferred: from the thing eaten to the eater.', ['producer', 'consumer']),
          card('🕸️', 'Food webs', 'A food web shows lots of linked food chains. Herbivores eat plants, carnivores eat animals, omnivores eat both. Predators hunt prey.', ['herbivore', 'carnivore', 'omnivore', 'predator', 'prey']),
          card('☠️', 'Bioaccumulation', 'Some toxic chemicals, like pesticides, build up along a food chain. The top predators end up with the highest dose.', ['bioaccumulation']),
        ],
        questions: [
          order('q1', 'Put this food chain in order', ['Grass', 'Rabbit', 'Fox']),
          mcq('q2', 'What do the arrows in a food chain show?', ['Who eats whom', 'The direction energy is transferred', 'Which animal is biggest', 'Where animals live'], 1),
          mcq('q3', 'Grass → rabbit → fox. Which is the primary consumer?', ['Grass', 'Rabbit', 'Fox', 'The Sun'], 1),
          match('q4', 'Match the word to its meaning', [
            ['Producer', 'Makes its own food'],
            ['Herbivore', 'Eats only plants'],
            ['Omnivore', 'Eats plants and animals'],
            ['Predator', 'Hunts other animals'],
          ]),
          tf('q5', 'Almost every food chain starts with a plant or another producer.', true),
          mcq('q6', 'A pesticide builds up in a food chain. Which animal gets the highest dose?', ['The producer', 'The primary consumer', 'The top predator', 'They all get the same'], 2),
          gap('q7', 'The source of energy for almost all food chains is the ___.', ['sun']),
        ],
      },
      {
        id: 'bc-interdependence',
        title: 'Interdependence & adaptation',
        emoji: '🐻‍❄️',
        learn: [
          card('🔗', 'Depending on each other', 'Living things in an ecosystem depend on each other: this is interdependence. If one population changes, others in the food web change too. Fewer rabbits means less food for foxes, but more grass.', ['interdependence', 'population']),
          card('🐫', 'Adaptations', 'Adaptations help organisms survive where they live. Polar bears: thick fur, fat layer and small ears to keep heat in. Camels: wide feet for sand, can go a long time without drinking. Cacti: spines instead of leaves to reduce water loss, and deep or wide roots.', ['adaptation']),
          card('🥊', 'Competition', 'Animals compete for food, water, space and mates. Plants compete for light, water, space and minerals.', ['competition']),
        ],
        questions: [
          mcq('q1', 'Grass → rabbit → fox. If a disease kills most of the rabbits, what happens to the grass?', ['It decreases', 'It increases', 'It stays exactly the same', 'It dies'], 1),
          mcq('q2', 'And what happens to the foxes?', ['They increase', 'They decrease', 'No change', 'They become herbivores'], 1),
          match('q3', 'Match the adaptation to the organism', [
            ['Thick layer of fat', 'Polar bear'],
            ['Spines instead of leaves', 'Cactus'],
            ['Wide feet for walking on sand', 'Camel'],
          ]),
          mcq('q4', 'What do plants compete for?', ['Light, water, space and minerals', 'Food and mates', 'Prey', 'Oxygen only'], 0),
          tf('q5', 'Cacti have spines instead of leaves to reduce water loss.', true),
          gap('q6', 'Organisms in an ecosystem depending on each other is called ___.', ['interdependence']),
          mcq('q7', 'Why do polar bears have small ears?', ['To hear better', 'To lose less heat', 'To swim faster', 'To look scary'], 1),
        ],
      },
      {
        id: 'bc-sampling',
        title: 'Decomposers, pollinators & sampling',
        emoji: '🐝',
        learn: [
          card('🍄', 'Decomposers', 'Decomposers such as bacteria and fungi break down dead plants and animals. This recycles nutrients back into the soil for plants to use.', ['decomposer']),
          card('🐝', 'Pollinators', 'Insects like bees carry pollen between flowers so plants can make seeds. Many of our crops depend on them, so a fall in bee numbers can affect our food.', ['pollinator']),
          card('🟩', 'Quadrats', 'To estimate how many plants are in a field, place a quadrat (a square frame) at random positions many times and count what’s inside. Random placement avoids bias. Then scale up: average per quadrat × number of quadrats that would fit in the field.', ['quadrat', 'random sampling']),
        ],
        questions: [
          mcq('q1', 'Which of these are decomposers?', ['Bacteria and fungi', 'Foxes and owls', 'Grass and trees', 'Bees and wasps'], 0),
          tf('q2', 'Decomposers recycle nutrients back into the soil.', true),
          mcq('q3', 'Why is a fall in the number of bees a problem for farmers?', ['Bees eat crops', 'Fewer crops get pollinated', 'Bees make soil', 'Bees are decomposers'], 1),
          gap('q4', 'A square frame used to sample plants is called a ___.', ['quadrat']),
          mcq('q5', 'Why should quadrats be placed randomly?', ['To avoid bias', 'To find the most plants', 'Because it’s quicker', 'To scare animals away'], 0),
          gap('q6', 'An average of 4 daisies per quadrat, and 200 quadrats fit in the field. Estimated daisies = ___', ['800']),
          tf('q7', 'Using more quadrats gives a more reliable estimate.', true),
        ],
      },
    ],
  },
];
