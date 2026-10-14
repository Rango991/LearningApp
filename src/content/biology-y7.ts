import type { Unit } from './types';

// Year 7 Biology, following the KS3 National Curriculum and the order most
// schools teach it in: cells, then body systems, then reproduction.
// Question ids are stored in progress data, so never change an existing id.

export const biologyY7: Unit[] = [
    {
      id: 'cells',
      title: 'Cells: life’s building blocks',
      description: 'What makes something alive, what’s inside cells, and how we see them.',
      stage: 'Year 7',
      colour: '#22b07d',
      lessons: [
        {
          id: 'cells-living',
          title: 'Is it alive?',
          emoji: '🐸',
          learn: [
            {
              emoji: '🧠',
              title: 'MRS GREN',
              diagram: 'mrs-gren',
              body: 'Every living thing does all 7 life processes. Remember them with MRS GREN: Movement, Respiration, Sensitivity, Growth, Reproduction, Excretion, Nutrition.',
              keywords: ['MRS GREN', 'life processes'],
            },
            {
              emoji: '🔥',
              title: 'Tricky ones',
              body: 'Respiration is NOT breathing. It is a chemical reaction in cells that releases energy from food. Excretion means getting rid of waste made inside the body. Sensitivity means sensing and responding to changes around you.',
              keywords: ['respiration', 'excretion', 'sensitivity'],
            },
            {
              emoji: '🚗',
              title: 'Alive or not?',
              body: 'A car moves and needs fuel, but it can’t grow or reproduce, so it isn’t alive. A living thing has to do ALL seven processes.',
            },
          ],
          questions: [
            {
              type: 'mcq', id: 'cl1', prompt: 'What does the "R" in MRS GREN stand for first?',
              options: ['Running', 'Respiration', 'Recycling', 'Resting'], answer: 1,
              explain: 'M-R-S: Movement, Respiration, Sensitivity.',
            },
            {
              type: 'tf', id: 'cl2', prompt: 'Respiration means the same thing as breathing.', answer: false,
              explain: 'Respiration is a chemical reaction in cells that releases energy. Breathing just moves air in and out of the lungs.',
            },
            {
              type: 'match', id: 'cl3', prompt: 'Match each life process to what it means',
              pairs: [
                ['Excretion', 'Getting rid of waste'],
                ['Nutrition', 'Taking in food'],
                ['Sensitivity', 'Responding to changes'],
                ['Growth', 'Getting bigger'],
              ],
            },
            {
              type: 'gap', id: 'cl4', prompt: 'There are ___ life processes in MRS GREN.', accept: ['7', 'seven'],
            },
            {
              type: 'mcq', id: 'cl5', prompt: 'A car moves and uses fuel. Why is it NOT alive?',
              options: ['It is too big', 'It can’t grow or reproduce', 'It is made of metal', 'It makes noise'], answer: 1,
              explain: 'Living things must do all seven life processes.',
            },
            {
              type: 'tf', id: 'cl6', prompt: 'Plants are living things, so they carry out all seven life processes.', answer: true,
              explain: 'Plants move slowly (e.g. turning towards light), but they do all seven.',
            },
            {
              type: 'mcq', id: 'cl7', prompt: 'Which life process releases energy from food?',
              options: ['Excretion', 'Nutrition', 'Respiration', 'Growth'], answer: 2,
            },
            {
              type: 'gap', id: 'cl8', prompt: 'Getting rid of waste made inside the body is called ___.', accept: ['excretion'],
            },
          ],
        },
        {
          id: 'cells-structure',
          title: 'Animal & plant cells',
          emoji: '🔬',
          learn: [
            {
              emoji: '🐾',
              title: 'Animal cells',
              diagram: 'animal-cell',
              body: 'Nucleus: controls the cell and holds the genetic information (DNA). Cytoplasm: jelly where chemical reactions happen. Cell membrane: controls what goes in and out. Mitochondria: where respiration happens, releasing energy.',
              keywords: ['nucleus', 'cytoplasm', 'cell membrane', 'mitochondria'],
            },
            {
              emoji: '🌱',
              title: 'Plant cells have 3 extras',
              diagram: 'plant-cell',
              body: 'Cell wall: made of cellulose, strengthens and supports the cell. Chloroplasts: contain green chlorophyll and are where photosynthesis happens. Permanent vacuole: filled with cell sap, keeps the cell firm.',
              keywords: ['cell wall', 'chloroplast', 'vacuole'],
            },
            {
              emoji: '⚡',
              title: 'Powerhouse!',
              body: 'Mitochondria are often called the "powerhouse of the cell" because respiration happens there. Both plant AND animal cells have mitochondria.',
            },
          ],
          questions: [
            {
              type: 'mcq', id: 'cs1', prompt: 'Which part controls the cell and contains genetic information?',
              options: ['Cytoplasm', 'Nucleus', 'Cell membrane', 'Vacuole'], answer: 1,
            },
            {
              type: 'match', id: 'cs2', prompt: 'Match each part to its job',
              pairs: [
                ['Cell membrane', 'Controls what goes in and out'],
                ['Mitochondria', 'Where respiration happens'],
                ['Cytoplasm', 'Where chemical reactions happen'],
                ['Chloroplast', 'Where photosynthesis happens'],
              ],
            },
            {
              type: 'tf', id: 'cs3', prompt: 'Animal cells have a cell wall.', answer: false,
              explain: 'Only plant cells (and some others like fungi and bacteria) have a cell wall. Animal cells only have a cell membrane.',
            },
            {
              type: 'mcq', id: 'cs4', prompt: 'Which of these is found in plant cells but NOT in animal cells?',
              options: ['Nucleus', 'Mitochondria', 'Chloroplast', 'Cell membrane'], answer: 2,
            },
            {
              type: 'gap', id: 'cs5', prompt: 'The plant cell wall is made of ___.', accept: ['cellulose'],
            },
            {
              type: 'tf', id: 'cs6', prompt: 'Plant cells have mitochondria.', answer: true,
              explain: 'Plants respire too, so their cells need mitochondria as well as chloroplasts.',
            },
            {
              type: 'mcq', id: 'cs7', prompt: 'What does the permanent vacuole contain?',
              options: ['Cell sap', 'Chlorophyll', 'DNA', 'Air'], answer: 0,
              explain: 'Cell sap pushes against the cell wall to keep the cell firm.',
            },
            {
              type: 'gap', id: 'cs8', prompt: 'Chloroplasts contain a green substance called ___.', accept: ['chlorophyll'],
            },
            {
              type: 'mcq', id: 'cs9', prompt: 'Which part of a cell is called the "powerhouse"?',
              options: ['Nucleus', 'Vacuole', 'Mitochondria', 'Cell wall'], answer: 2,
            },
          ],
        },
        {
          id: 'cells-microscope',
          title: 'Using a microscope',
          emoji: '🔭',
          learn: [
            {
              emoji: '🔬',
              title: 'Microscope parts',
              diagram: 'microscope',
              body: 'Eyepiece lens: the one you look through. Objective lenses: the ones close to the slide. Stage: where the slide sits. Light source or mirror: lights up the sample. Coarse and fine focus knobs: make the image sharp.',
              keywords: ['eyepiece', 'objective lens', 'stage', 'focus'],
            },
            {
              emoji: '✖️',
              title: 'Magnification',
              diagram: 'magnification',
              body: 'Total magnification = eyepiece magnification × objective magnification. A ×10 eyepiece with a ×40 objective gives ×400.',
              keywords: ['magnification'],
            },
            {
              emoji: '🧪',
              title: 'Making a slide',
              diagram: 'slide-prep',
              body: 'Put a thin sample on the slide and add a stain so you can see the cells: iodine for onion (plant) cells, methylene blue for cheek (animal) cells. Lower the cover slip at an angle to stop air bubbles. Always start with the lowest-power objective lens.',
              keywords: ['stain', 'cover slip'],
            },
          ],
          questions: [
            {
              type: 'mcq', id: 'cm1', prompt: 'Eyepiece ×10, objective ×40. What is the total magnification?',
              options: ['×50', '×400', '×4', '×30'], answer: 1,
              explain: 'Multiply them: 10 × 40 = 400.',
            },
            {
              type: 'gap', id: 'cm2', prompt: 'Eyepiece ×10, objective ×10. Total magnification = ×___', accept: ['100'],
            },
            {
              type: 'match', id: 'cm3', prompt: 'Match the microscope part to its job',
              pairs: [
                ['Eyepiece lens', 'The lens you look through'],
                ['Stage', 'Where the slide sits'],
                ['Fine focus', 'Makes small adjustments to sharpen'],
                ['Light source', 'Lights up the sample'],
              ],
            },
            {
              type: 'tf', id: 'cm4', prompt: 'You should start with the highest-power objective lens.', answer: false,
              explain: 'Start on the lowest power to find the sample, then switch up.',
            },
            {
              type: 'mcq', id: 'cm5', prompt: 'Why do we lower the cover slip at an angle?',
              options: ['To stop air bubbles', 'To make it shiny', 'To add more stain', 'To kill the cells'], answer: 0,
            },
            {
              type: 'mcq', id: 'cm6', prompt: 'Which stain is used for onion cells?',
              options: ['Methylene blue', 'Iodine', 'Ink', 'Salt water'], answer: 1,
            },
            {
              type: 'order', id: 'cm7', prompt: 'Put the steps for looking at a slide in order',
              items: [
                'Place the slide on the stage',
                'Select the lowest-power objective lens',
                'Focus with the coarse focus knob',
                'Sharpen with the fine focus knob',
              ],
            },
            {
              type: 'gap', id: 'cm8', prompt: 'We add a ___ to make cells easier to see.', accept: ['stain', 'dye'],
            },
          ],
        },
        {
          id: 'cells-specialised',
          title: 'Specialised cells',
          emoji: '🦸',
          learn: [
            {
              emoji: '🩸',
              title: 'Animal specialists',
              diagram: 'specialised-cells',
              body: 'Red blood cell: no nucleus, so there’s more room for haemoglobin to carry oxygen. Nerve cell: long with branched ends, carries electrical impulses. Sperm cell: tail to swim and lots of mitochondria for energy. Egg cell: large, with food stored in its cytoplasm.',
              keywords: ['red blood cell', 'nerve cell', 'sperm', 'egg'],
            },
            {
              emoji: '🌿',
              title: 'Plant specialists',
              body: 'Root hair cell: long "hair" gives a big surface area to absorb water and minerals, and it has no chloroplasts because it’s underground. Palisade cell: packed with chloroplasts near the top of a leaf for photosynthesis.',
              keywords: ['root hair cell', 'palisade cell'],
            },
            {
              emoji: '🧹',
              title: 'Ciliated cells',
              body: 'Ciliated cells line your airways. Their tiny hairs (cilia) sweep mucus and trapped dirt away from your lungs.',
              keywords: ['cilia'],
            },
          ],
          questions: [
            {
              type: 'match', id: 'csp1', prompt: 'Match each cell to its special feature',
              pairs: [
                ['Red blood cell', 'No nucleus'],
                ['Sperm cell', 'Tail for swimming'],
                ['Root hair cell', 'Large surface area for water'],
                ['Palisade cell', 'Lots of chloroplasts'],
              ],
            },
            {
              type: 'mcq', id: 'csp2', prompt: 'Why does a red blood cell have no nucleus?',
              options: ['It is dead', 'More room to carry oxygen', 'So it can swim', 'To make it heavier'], answer: 1,
            },
            {
              type: 'tf', id: 'csp3', prompt: 'Root hair cells have lots of chloroplasts.', answer: false,
              explain: 'They’re underground with no light, so chloroplasts would be useless.',
            },
            {
              type: 'mcq', id: 'csp4', prompt: 'Which cell carries electrical impulses around the body?',
              options: ['Egg cell', 'Nerve cell', 'Ciliated cell', 'Palisade cell'], answer: 1,
            },
            {
              type: 'mcq', id: 'csp5', prompt: 'Why do sperm cells have lots of mitochondria?',
              options: ['To store food', 'To release energy for swimming', 'To make them green', 'To carry oxygen'], answer: 1,
            },
            {
              type: 'gap', id: 'csp6', prompt: 'The tiny hairs on ciliated cells are called ___.', accept: ['cilia'],
            },
            {
              type: 'tf', id: 'csp7', prompt: 'Egg cells contain a store of food in their cytoplasm.', answer: true,
            },
            {
              type: 'mcq', id: 'csp8', prompt: 'Where are palisade cells found?',
              options: ['In roots', 'Near the top of leaves', 'In flowers', 'In the stem only'], answer: 1,
            },
          ],
        },
        {
          id: 'cells-diffusion',
          title: 'Diffusion & single cells',
          emoji: '🦠',
          learn: [
            {
              emoji: '💨',
              title: 'Diffusion',
              diagram: 'diffusion',
              body: 'Diffusion is the movement of particles from an area of high concentration to an area of low concentration. It’s how oxygen gets into cells and carbon dioxide gets out. Diffusion is faster when it’s warmer.',
              keywords: ['diffusion', 'concentration'],
            },
            {
              emoji: '1️⃣',
              title: 'Unicellular organisms',
              body: 'Some living things are just one cell! Amoeba: moves by changing shape and engulfs its food. Euglena: has chloroplasts to make food, plus a flagellum (tail) to swim and an eyespot to detect light. Yeast: a single-celled fungus used to make bread rise.',
              keywords: ['unicellular', 'amoeba', 'euglena', 'yeast'],
            },
          ],
          questions: [
            {
              type: 'mcq', id: 'cd1', prompt: 'In diffusion, particles move from…',
              options: ['Low to high concentration', 'High to low concentration', 'Only into cells', 'Only in liquids'], answer: 1,
            },
            {
              type: 'tf', id: 'cd2', prompt: 'Oxygen enters cells by diffusion.', answer: true,
            },
            {
              type: 'mcq', id: 'cd3', prompt: 'What makes diffusion happen faster?',
              options: ['A colder temperature', 'A warmer temperature', 'Darkness', 'Less space'], answer: 1,
              explain: 'Warmer particles have more energy and move faster.',
            },
            {
              type: 'gap', id: 'cd4', prompt: 'An organism made of only one cell is called ___.', accept: ['unicellular', 'single-celled', 'single celled'],
            },
            {
              type: 'match', id: 'cd5', prompt: 'Match the organism to its feature',
              pairs: [
                ['Amoeba', 'Changes shape to move'],
                ['Euglena', 'Has an eyespot'],
                ['Yeast', 'Used to make bread rise'],
              ],
            },
            {
              type: 'mcq', id: 'cd6', prompt: 'What does euglena use its chloroplasts for?',
              options: ['Swimming', 'Making food by photosynthesis', 'Detecting light', 'Getting rid of waste'], answer: 1,
            },
            {
              type: 'tf', id: 'cd7', prompt: 'Yeast is a type of fungus.', answer: true,
            },
            {
              type: 'mcq', id: 'cd8', prompt: 'Which gas diffuses OUT of cells as a waste product?',
              options: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Helium'], answer: 1,
            },
          ],
        },
      ],
    },
    {
      id: 'body',
      title: 'Body systems',
      description: 'From cells to organisms, plus your skeleton, muscles and lungs.',
      stage: 'Year 7',
      colour: '#ff8a3d',
      lessons: [
        {
          id: 'body-levels',
          title: 'Levels of organisation',
          emoji: '🧱',
          learn: [
            {
              emoji: '🪜',
              title: 'Small to big',
              diagram: 'organisation',
              body: 'Cell → tissue → organ → organ system → organism. A tissue is a group of similar cells working together. An organ is made of different tissues. An organ system is a group of organs working together.',
              keywords: ['tissue', 'organ', 'organ system'],
            },
            {
              emoji: '🫀',
              title: 'Example',
              body: 'Muscle cells → muscle tissue → heart (organ) → circulatory system → you! Other systems: digestive (stomach, intestines), respiratory (lungs), nervous (brain, nerves), skeletal (bones).',
            },
          ],
          questions: [
            {
              type: 'order', id: 'bl1', prompt: 'Put these in order from smallest to biggest',
              items: ['Cell', 'Tissue', 'Organ', 'Organ system', 'Organism'],
            },
            {
              type: 'mcq', id: 'bl2', prompt: 'What is a tissue?',
              options: ['One single cell', 'A group of similar cells working together', 'A group of organs', 'A whole animal'], answer: 1,
            },
            {
              type: 'mcq', id: 'bl3', prompt: 'Which of these is an organ?',
              options: ['Heart', 'Muscle cell', 'Blood', 'Human'], answer: 0,
            },
            {
              type: 'match', id: 'bl4', prompt: 'Match each organ to its system',
              pairs: [
                ['Lungs', 'Respiratory system'],
                ['Stomach', 'Digestive system'],
                ['Brain', 'Nervous system'],
                ['Heart', 'Circulatory system'],
              ],
            },
            {
              type: 'tf', id: 'bl5', prompt: 'An organ is made of several different tissues.', answer: true,
            },
            {
              type: 'gap', id: 'bl6', prompt: 'A group of organs working together is an organ ___.', accept: ['system'],
            },
            {
              type: 'mcq', id: 'bl7', prompt: 'Which system includes your bones?',
              options: ['Nervous', 'Skeletal', 'Digestive', 'Respiratory'], answer: 1,
            },
          ],
        },
        {
          id: 'body-skeleton',
          title: 'The skeleton',
          emoji: '💀',
          learn: [
            {
              emoji: '🦴',
              title: '4 jobs of the skeleton',
              diagram: 'skeleton-jobs',
              body: 'Support (holds you up), Protection (of organs), Movement (with muscles), and Making blood cells (in the bone marrow). An adult has 206 bones.',
              keywords: ['support', 'protection', 'movement', 'bone marrow'],
            },
            {
              emoji: '🛡️',
              title: 'Bones that protect',
              body: 'The skull protects the brain. The ribcage protects the heart and lungs. The vertebrae (backbone) protect the spinal cord. The femur (thigh bone) is the longest bone in your body.',
              keywords: ['skull', 'ribcage', 'vertebrae', 'femur'],
            },
          ],
          questions: [
            {
              type: 'mcq', id: 'bs1', prompt: 'How many bones does an adult human have?',
              options: ['106', '206', '306', '26'], answer: 1,
            },
            {
              type: 'match', id: 'bs2', prompt: 'Match the bone to what it protects',
              pairs: [
                ['Skull', 'Brain'],
                ['Ribcage', 'Heart and lungs'],
                ['Vertebrae', 'Spinal cord'],
              ],
            },
            {
              type: 'gap', id: 'bs3', prompt: 'Blood cells are made in the bone ___.', accept: ['marrow'],
            },
            {
              type: 'mcq', id: 'bs4', prompt: 'Which is the longest bone in the body?',
              options: ['Skull', 'Femur', 'Rib', 'Humerus'], answer: 1,
            },
            {
              type: 'tf', id: 'bs5', prompt: 'One job of the skeleton is to digest food.', answer: false,
              explain: 'Its jobs are support, protection, movement and making blood cells.',
            },
            {
              type: 'mcq', id: 'bs6', prompt: 'Which of these is NOT a job of the skeleton?',
              options: ['Support', 'Protection', 'Making blood cells', 'Pumping blood'], answer: 3,
              explain: 'Pumping blood is the heart’s job.',
            },
            {
              type: 'gap', id: 'bs7', prompt: 'The bones of your backbone are called ___.', accept: ['vertebrae', 'vertebra'],
            },
          ],
        },
        {
          id: 'body-muscles',
          title: 'Joints & muscles',
          emoji: '💪',
          learn: [
            {
              emoji: '🚪',
              title: 'Joints',
              diagram: 'joints',
              body: 'Hinge joints (elbow, knee) move in one direction, like a door. Ball and socket joints (hip, shoulder) move in lots of directions. Fixed joints (skull) don’t move. Cartilage covers the ends of bones to stop them rubbing.',
              keywords: ['hinge joint', 'ball and socket', 'cartilage'],
            },
            {
              emoji: '🔗',
              title: 'Tendons & ligaments',
              body: 'Tendons join muscle to bone. Ligaments join bone to bone. (Tip: Ligaments Link bones.)',
              keywords: ['tendon', 'ligament'],
            },
            {
              emoji: '↔️',
              title: 'Antagonistic pairs',
              diagram: 'antagonistic',
              body: 'Muscles can only pull (contract), they can’t push. So they work in pairs. To bend your arm the biceps contracts and the triceps relaxes. To straighten it, the triceps contracts and the biceps relaxes.',
              keywords: ['antagonistic', 'biceps', 'triceps'],
            },
          ],
          questions: [
            {
              type: 'match', id: 'bm1', prompt: 'Match the joint to an example',
              pairs: [
                ['Hinge joint', 'Elbow'],
                ['Ball and socket joint', 'Hip'],
                ['Fixed joint', 'Skull'],
              ],
            },
            {
              type: 'mcq', id: 'bm2', prompt: 'What do tendons connect?',
              options: ['Bone to bone', 'Muscle to bone', 'Muscle to muscle', 'Skin to bone'], answer: 1,
            },
            {
              type: 'gap', id: 'bm3', prompt: '___ connect bone to bone.', accept: ['ligaments', 'ligament'],
            },
            {
              type: 'tf', id: 'bm4', prompt: 'Muscles can push as well as pull.', answer: false,
              explain: 'Muscles can only contract (pull). That’s why they work in antagonistic pairs.',
            },
            {
              type: 'mcq', id: 'bm5', prompt: 'To BEND your arm, which muscle contracts?',
              options: ['Triceps', 'Biceps', 'Both', 'Neither'], answer: 1,
            },
            {
              type: 'mcq', id: 'bm6', prompt: 'What does cartilage do at a joint?',
              options: ['Joins muscle to bone', 'Stops bones rubbing together', 'Makes blood cells', 'Sends nerve signals'], answer: 1,
            },
            {
              type: 'gap', id: 'bm7', prompt: 'Muscles that work in pairs are called ___ pairs.', accept: ['antagonistic'],
            },
            {
              type: 'tf', id: 'bm8', prompt: 'Your shoulder is a ball and socket joint.', answer: true,
            },
          ],
        },
        {
          id: 'body-breathing',
          title: 'Breathing & gas exchange',
          emoji: '🫁',
          learn: [
            {
              emoji: '🌬️',
              title: 'Air’s journey',
              diagram: 'airways',
              body: 'Nose/mouth → trachea (windpipe) → bronchi → bronchioles → alveoli. Alveoli are tiny air sacs where gas exchange happens.',
              keywords: ['trachea', 'bronchi', 'bronchioles', 'alveoli'],
            },
            {
              emoji: '🔄',
              title: 'Gas exchange',
              body: 'Oxygen diffuses from the alveoli into the blood. Carbon dioxide diffuses from the blood into the alveoli to be breathed out. Alveoli are great at this: thin walls, a huge surface area, and lots of blood capillaries.',
              keywords: ['gas exchange', 'capillaries'],
            },
            {
              emoji: '🎈',
              title: 'Breathing in',
              diagram: 'breathing',
              body: 'The diaphragm contracts and flattens, the ribs move up and out, the chest gets bigger, the pressure inside drops, and air rushes in. Breathing out is the reverse.',
              keywords: ['diaphragm', 'inhale', 'exhale'],
            },
          ],
          questions: [
            {
              type: 'order', id: 'bb1', prompt: 'Put the airways in order, starting from the nose',
              items: ['Trachea', 'Bronchi', 'Bronchioles', 'Alveoli'],
            },
            {
              type: 'mcq', id: 'bb2', prompt: 'Where does gas exchange happen?',
              options: ['Trachea', 'Alveoli', 'Diaphragm', 'Stomach'], answer: 1,
            },
            {
              type: 'tf', id: 'bb3', prompt: 'Oxygen moves from the alveoli into the blood by diffusion.', answer: true,
            },
            {
              type: 'mcq', id: 'bb4', prompt: 'What happens to the diaphragm when you breathe IN?',
              options: ['It relaxes and moves up', 'It contracts and flattens', 'It disappears', 'Nothing'], answer: 1,
            },
            {
              type: 'gap', id: 'bb5', prompt: 'The windpipe is also called the ___.', accept: ['trachea'],
            },
            {
              type: 'mcq', id: 'bb6', prompt: 'Which of these does NOT help alveoli with gas exchange?',
              options: ['Thin walls', 'Large surface area', 'Good blood supply', 'Thick walls'], answer: 3,
            },
            {
              type: 'tf', id: 'bb7', prompt: 'Breathed-out air contains more carbon dioxide than breathed-in air.', answer: true,
            },
            {
              type: 'mcq', id: 'bb8', prompt: 'When you breathe in, the pressure inside your chest…',
              options: ['Goes up', 'Goes down', 'Stays the same', 'Disappears'], answer: 1,
              explain: 'A bigger chest means lower pressure, so air flows in.',
            },
          ],
        },
      ],
    },
    {
      id: 'repro',
      title: 'Reproduction',
      description: 'How humans and plants make new life.',
      stage: 'Year 7',
      colour: '#e2559b',
      lessons: [
        {
          id: 'repro-systems',
          title: 'Reproductive systems',
          emoji: '🧬',
          learn: [
            {
              emoji: '♂️',
              title: 'Male system',
              diagram: 'repro-organs',
              body: 'Testes: make sperm and the hormone testosterone. Scrotum: bag of skin holding the testes. Sperm duct: carries sperm to the urethra. Glands: add fluid to make semen. Urethra: tube that carries semen (or urine) out through the penis.',
              keywords: ['testes', 'sperm duct', 'urethra'],
            },
            {
              emoji: '♀️',
              title: 'Female system',
              body: 'Ovaries: contain eggs; one egg is released about every month. Oviduct (fallopian tube): carries the egg to the uterus, and is where fertilisation happens. Uterus (womb): where a baby develops. Cervix: ring of muscle at the entrance to the uterus. Vagina: leads from the cervix to outside the body.',
              keywords: ['ovary', 'oviduct', 'uterus', 'cervix'],
            },
          ],
          questions: [
            {
              type: 'match', id: 'rs1', prompt: 'Match each part to its job',
              pairs: [
                ['Testes', 'Make sperm'],
                ['Ovaries', 'Contain eggs'],
                ['Uterus', 'Where a baby develops'],
                ['Oviduct', 'Where fertilisation happens'],
              ],
            },
            {
              type: 'mcq', id: 'rs2', prompt: 'Where does fertilisation usually happen?',
              options: ['Uterus', 'Oviduct', 'Ovary', 'Cervix'], answer: 1,
            },
            {
              type: 'gap', id: 'rs3', prompt: 'Another name for the uterus is the ___.', accept: ['womb'],
            },
            {
              type: 'tf', id: 'rs4', prompt: 'An egg is usually released about once a month.', answer: true,
            },
            {
              type: 'mcq', id: 'rs5', prompt: 'What is the cervix?',
              options: ['A tube carrying sperm', 'A ring of muscle at the entrance to the uterus', 'Where eggs are made', 'A gland'], answer: 1,
            },
            {
              type: 'mcq', id: 'rs6', prompt: 'Which hormone do the testes make?',
              options: ['Oestrogen', 'Testosterone', 'Insulin', 'Adrenaline'], answer: 1,
            },
            {
              type: 'gap', id: 'rs7', prompt: 'Sperm mixed with fluid from glands is called ___.', accept: ['semen'],
            },
          ],
        },
        {
          id: 'repro-puberty',
          title: 'Puberty & periods',
          emoji: '🌸',
          learn: [
            {
              emoji: '📈',
              title: 'Puberty',
              body: 'Puberty is when your body changes from a child’s to an adult’s, usually somewhere between about 9 and 16. It’s caused by hormones: oestrogen in girls and testosterone in boys. Everyone starts at a different time, and that’s normal.',
              keywords: ['puberty', 'hormones', 'oestrogen', 'testosterone'],
            },
            {
              emoji: '🔁',
              title: 'Changes',
              body: 'Both: growth spurt, hair under arms and around genitals, body odour, emotional changes. Girls: breasts develop, hips widen, periods start. Boys: voice deepens, facial hair grows, shoulders widen, testes start making sperm.',
            },
            {
              emoji: '📅',
              title: 'Menstrual cycle',
              diagram: 'menstrual-cycle',
              body: 'The cycle takes about 28 days. The uterus lining thickens, and an egg is released around day 14 (ovulation). If the egg isn’t fertilised, the lining breaks down and leaves the body. This is a period (menstruation), which lasts about 3 to 7 days.',
              keywords: ['menstrual cycle', 'ovulation', 'menstruation'],
            },
          ],
          questions: [
            {
              type: 'mcq', id: 'rp1', prompt: 'What causes the changes at puberty?',
              options: ['Bacteria', 'Hormones', 'Exercise', 'Food'], answer: 1,
            },
            {
              type: 'mcq', id: 'rp2', prompt: 'Roughly how long is the menstrual cycle?',
              options: ['7 days', '14 days', '28 days', '90 days'], answer: 2,
            },
            {
              type: 'gap', id: 'rp3', prompt: 'The release of an egg from an ovary is called ___.', accept: ['ovulation'],
            },
            {
              type: 'tf', id: 'rp4', prompt: 'Everyone starts puberty at exactly the same age.', answer: false,
              explain: 'It varies a lot from person to person, and that’s completely normal.',
            },
            {
              type: 'match', id: 'rp5', prompt: 'Which group does each change happen in?',
              pairs: [
                ['Voice deepens', 'Boys'],
                ['Breasts develop', 'Girls'],
                ['Growth spurt', 'Both'],
              ],
            },
            {
              type: 'mcq', id: 'rp6', prompt: 'What happens during a period?',
              options: ['An egg is fertilised', 'The uterus lining breaks down and leaves the body', 'The ovaries grow', 'Sperm are made'], answer: 1,
            },
            {
              type: 'gap', id: 'rp7', prompt: 'The main female sex hormone is ___.', accept: ['oestrogen', 'estrogen'],
            },
            {
              type: 'tf', id: 'rp8', prompt: 'Ovulation happens around day 14 of the cycle.', answer: true,
            },
          ],
        },
        {
          id: 'repro-pregnancy',
          title: 'Pregnancy & birth',
          emoji: '👶',
          learn: [
            {
              emoji: '✨',
              title: 'Fertilisation',
              body: 'Fertilisation is when the nucleus of a sperm cell joins with the nucleus of an egg cell. The fertilised egg divides into a ball of cells called an embryo, which implants in the lining of the uterus.',
              keywords: ['fertilisation', 'embryo', 'implantation'],
            },
            {
              emoji: '🔗',
              title: 'Life support',
              diagram: 'pregnancy',
              body: 'Placenta: passes oxygen and nutrients from the mother’s blood to the fetus, and takes away waste like carbon dioxide. Umbilical cord: connects the fetus to the placenta. Amniotic fluid: cushions and protects the fetus.',
              keywords: ['placenta', 'umbilical cord', 'amniotic fluid'],
            },
            {
              emoji: '🗓️',
              title: 'Gestation & birth',
              body: 'Gestation (pregnancy) in humans lasts about 9 months (around 40 weeks). Harmful things like alcohol and nicotine can cross the placenta. At birth, the cervix widens and the muscles of the uterus contract to push the baby out.',
              keywords: ['gestation', 'fetus'],
            },
          ],
          questions: [
            {
              type: 'mcq', id: 'rpg1', prompt: 'What is fertilisation?',
              options: ['When the egg is released', 'When the sperm and egg nuclei join', 'When the baby is born', 'When the embryo implants'], answer: 1,
            },
            {
              type: 'match', id: 'rpg2', prompt: 'Match each part to its job',
              pairs: [
                ['Placenta', 'Passes oxygen and nutrients to the fetus'],
                ['Umbilical cord', 'Connects the fetus to the placenta'],
                ['Amniotic fluid', 'Cushions and protects the fetus'],
              ],
            },
            {
              type: 'mcq', id: 'rpg3', prompt: 'How long is human gestation?',
              options: ['About 3 months', 'About 6 months', 'About 9 months', 'About 12 months'], answer: 2,
            },
            {
              type: 'tf', id: 'rpg4', prompt: 'Alcohol and nicotine can cross the placenta and harm the fetus.', answer: true,
            },
            {
              type: 'order', id: 'rpg5', prompt: 'Put these in order',
              items: ['Fertilisation', 'Embryo forms', 'Implantation in the uterus', 'Fetus develops', 'Birth'],
            },
            {
              type: 'gap', id: 'rpg6', prompt: 'A fertilised egg divides to form a ball of cells called an ___.', accept: ['embryo'],
            },
            {
              type: 'mcq', id: 'rpg7', prompt: 'What happens during birth?',
              options: ['The placenta grows', 'The uterus muscles contract', 'Ovulation happens', 'The embryo implants'], answer: 1,
            },
          ],
        },
        {
          id: 'repro-plants',
          title: 'Flowers & pollination',
          emoji: '🌻',
          learn: [
            {
              emoji: '🌼',
              title: 'Parts of a flower',
              diagram: 'flower',
              body: 'Male part = stamen: the anther (makes pollen) on a filament. Female part = carpel: the stigma (sticky, catches pollen), the style, and the ovary (contains ovules). Petals attract insects. Sepals protect the flower when it’s a bud.',
              keywords: ['stamen', 'anther', 'carpel', 'stigma', 'ovary'],
            },
            {
              emoji: '🐝',
              title: 'Pollination',
              body: 'Pollination is the transfer of pollen from an anther to a stigma. Insect-pollinated flowers have bright petals, scent and nectar. Wind-pollinated flowers have small dull petals, anthers hanging outside, and lots of light pollen.',
              keywords: ['pollination'],
            },
            {
              emoji: '🌰',
              title: 'Fertilisation & seeds',
              diagram: 'seed-dispersal',
              body: 'A pollen tube grows down the style to an ovule, and fertilisation happens. The ovule becomes a seed and the ovary becomes the fruit. Seeds are dispersed (spread) by wind, animals, water or by exploding pods, which reduces competition with the parent plant.',
              keywords: ['pollen tube', 'seed dispersal'],
            },
          ],
          questions: [
            {
              type: 'match', id: 'rf1', prompt: 'Match the flower part to its job',
              pairs: [
                ['Anther', 'Makes pollen'],
                ['Stigma', 'Catches pollen'],
                ['Petals', 'Attract insects'],
                ['Sepals', 'Protect the bud'],
              ],
            },
            {
              type: 'mcq', id: 'rf2', prompt: 'What is pollination?',
              options: ['Pollen moving from anther to stigma', 'A seed growing', 'A fruit forming', 'Water entering roots'], answer: 0,
            },
            {
              type: 'tf', id: 'rf3', prompt: 'Wind-pollinated flowers usually have big, brightly coloured petals.', answer: false,
              explain: 'They don’t need to attract insects, so their petals are small and dull.',
            },
            {
              type: 'gap', id: 'rf4', prompt: 'After fertilisation, the ovule becomes a ___.', accept: ['seed'],
            },
            {
              type: 'mcq', id: 'rf5', prompt: 'After fertilisation, the ovary becomes the…',
              options: ['Seed', 'Fruit', 'Petal', 'Pollen'], answer: 1,
            },
            {
              type: 'mcq', id: 'rf6', prompt: 'Why do plants disperse their seeds?',
              options: ['To look pretty', 'To reduce competition for light, water and nutrients', 'To attract insects', 'To make pollen'], answer: 1,
            },
            {
              type: 'match', id: 'rf7', prompt: 'How is each seed dispersed?',
              pairs: [
                ['Dandelion', 'Wind'],
                ['Blackberry', 'Animals eating the fruit'],
                ['Coconut', 'Water'],
              ],
            },
            {
              type: 'gap', id: 'rf8', prompt: 'The male part of a flower is called the ___.', accept: ['stamen', 'stamens'],
            },
          ],
        },
      ],
    },
];
