import { card, gap, match, mcq, order, tf } from './helpers';
import type { Unit } from './types';

// More KS3 Maths for Years 8-9 (National Curriculum), filling gaps found by
// checking the app against Gosforth East Middle School's Year 7-8 maths plans.
// Column vectors are written (x, y) here: top number first.
// Question ids are stored in progress data, so never change an existing id.

const Y89 = 'Years 8–9';

export const mathsY89: Unit[] = [
  {
    id: 'maths-transform',
    title: 'Transformations & bearings',
    stage: Y89,
    description: 'Reflections, translations, rotations and enlargements, scale drawings and bearings, and constructions.',
    colour: '#f0703a',
    lessons: [
      {
        id: 'mt-reflect',
        title: 'Reflection & translation',
        emoji: '🪞',
        learn: [
          card('🪞', 'Reflection', 'A reflection flips a shape in a mirror line. Every point ends up the same distance from the line, on the other side. The image is the same size and shape (congruent), but it faces the other way. Reflect in the y-axis and the x-coordinate changes sign: (3, 2) → (−3, 2).', ['reflection', 'mirror line', 'congruent'], 'reflect-translate'),
          card('➡️', 'Translation', 'A translation slides a shape without turning or flipping it. We describe it with a column vector, written here as (x, y): the top number moves it right (+) or left (−), the bottom number up (+) or down (−). The vector (3, −2) means 3 right and 2 down.', ['translation', 'column vector']),
        ],
        questions: [
          tf('q1', 'A reflected shape is the same size as the original.', true),
          mcq('q2', 'The vector (3, −2) moves a shape…', ['3 right and 2 down', '3 left and 2 up', '2 right and 3 down', '3 up and 2 right'], 0),
          gap('q3', 'The point (2, 5) is translated by the vector (4, 1). Its new x-coordinate is ___', ['6']),
          mcq('q4', 'Reflect the point (3, 2) in the y-axis. Where does it go?', ['(−3, 2)', '(3, −2)', '(−3, −2)', '(2, 3)'], 0),
          mcq('q5', 'Reflect the point (4, 1) in the x-axis. Where does it go?', ['(4, −1)', '(−4, 1)', '(1, 4)', '(−4, −1)'], 0),
          gap('q6', 'To translate a shape 5 left and 3 up, the vector is (−5, ___)', ['3']),
          tf('q7', 'A translation turns the shape around.', false, 'It only slides; the shape stays the same way round.'),
        ],
      },
      {
        id: 'mt-rotate',
        title: 'Rotation & enlargement',
        emoji: '🔄',
        learn: [
          card('🔄', 'Rotation', 'A rotation turns a shape about a fixed point, the centre of rotation. To describe one, give the angle (like 90° or 180°), the direction (clockwise or anticlockwise) and the centre. A 180° turn is the same either way. Tracing paper helps: trace the shape, pin the centre, and turn.', ['rotation', 'centre of rotation']),
          card('🔍', 'Enlargement', 'An enlargement changes a shape’s size. Every length is multiplied by the scale factor: scale factor 2 doubles every side. The angles stay the same, so the new shape is similar to the old one. Lines from the centre of enlargement through each corner show where the new corners go.', ['enlargement', 'scale factor', 'similar'], 'enlargement'),
        ],
        questions: [
          mcq('q1', 'To describe a rotation you need…', ['An angle, a direction and a centre', 'Only an angle', 'A vector', 'A mirror line'], 0),
          gap('q2', 'A triangle with sides 3, 4 and 5 cm is enlarged by scale factor 2. The longest side is now ___ cm', ['10']),
          tf('q3', 'A rotation of 90° clockwise is the same as 270° anticlockwise.', true),
          mcq('q4', 'A shape is enlarged by scale factor 3. Its angles…', ['Stay the same', 'Are multiplied by 3', 'Are divided by 3', 'Add up to more'], 0),
          gap('q5', 'A 4 cm line is enlarged to 12 cm. Scale factor = ___', ['3']),
          mcq('q6', 'Which transformation changes the size of a shape?', ['Enlargement', 'Rotation', 'Reflection', 'Translation'], 0),
          match('q7', 'Match the movement to the transformation', [
            ['Flip', 'Reflection'],
            ['Turn', 'Rotation'],
            ['Slide', 'Translation'],
            ['Resize', 'Enlargement'],
          ]),
        ],
      },
      {
        id: 'mt-bearings',
        title: 'Scale drawings & bearings',
        emoji: '🧭',
        learn: [
          card('🗺️', 'Scale', 'A scale shows how a drawing or map compares with real life. “1 cm to 5 km” means every 1 cm on the map is 5 km on the ground. A scale written as a ratio, like 1 : 100, means 1 cm on the plan is 100 cm (1 m) in real life.', ['scale', 'ratio']),
          card('🧭', 'Bearings', 'A bearing gives a direction as an angle measured clockwise from north. It always has three figures: east is 090°, south is 180°, west is 270°, and 45° is written 045°. To find the bearing back the other way, add or subtract 180°.', ['bearing', 'clockwise', 'north'], 'bearings'),
        ],
        questions: [
          gap('q1', 'On a map, 1 cm represents 5 km. 4 cm represents ___ km', ['20']),
          gap('q2', 'A plan has a scale of 1 : 100. A 3 cm line on the plan is ___ cm in real life', ['300']),
          mcq('q3', 'Bearings are measured…', ['Clockwise from north', 'Anticlockwise from north', 'Clockwise from east', 'From any direction'], 0),
          mcq('q4', 'How is a bearing of 45° written?', ['045°', '45°', '450°', '4.5°'], 0),
          gap('q5', 'The bearing of due south is ___°', ['180']),
          gap('q6', 'B is on a bearing of 070° from A. The bearing of A from B is ___°', ['250']),
          mcq('q7', 'Which bearing points due west?', ['270°', '090°', '180°', '360°'], 0),
        ],
      },
      {
        id: 'mt-construct',
        title: 'Constructions',
        emoji: '📐',
        learn: [
          card('📐', 'Constructing triangles', 'To draw a triangle when you know all three sides, draw the longest side with a ruler. Then set your compasses to each of the other two lengths and draw an arc from each end. Where the arcs cross is the third corner. Leave the arcs showing: they prove your method.', ['construction', 'compasses', 'arc']),
          card('✂️', 'Bisectors', 'A perpendicular bisector cuts a line in half at right angles: from each end, draw equal arcs above and below, then join the two crossing points. An angle bisector cuts an angle in half: draw an arc across both arms, then equal arcs from those two points, and join the corner to where they cross.', ['perpendicular bisector', 'angle bisector'], 'bisectors'),
        ],
        questions: [
          order('q1', 'Put the steps for constructing a triangle with sides 7 cm, 5 cm and 4 cm in order', ['Draw the 7 cm side with a ruler', 'Draw a 5 cm arc from one end', 'Draw a 4 cm arc from the other end', 'Join both ends to where the arcs cross']),
          mcq('q2', 'Which tool do you use to draw arcs?', ['Compasses', 'A protractor', 'A calculator', 'A set square'], 0),
          tf('q3', 'A perpendicular bisector meets the line at 90°.', true),
          mcq('q4', 'What should you do with your construction arcs?', ['Leave them so the method shows', 'Rub them out', 'Colour them in', 'Draw over them in pen'], 0),
          gap('q5', 'An angle bisector splits a 70° angle into two angles of ___°', ['35']),
          mcq('q6', 'Every point on the perpendicular bisector of AB is…', ['The same distance from A and B', 'Closer to A', 'Closer to B', 'On the line AB'], 0),
        ],
      },
    ],
  },
  {
    id: 'maths-money-risk',
    title: 'Money, inequalities & risk',
    stage: Y89,
    description: 'Percentage change and interest, inequalities, Venn diagrams and frequency trees, and surface area and prisms.',
    colour: '#2a9d8f',
    lessons: [
      {
        id: 'mm-percent',
        title: 'Percentage change & interest',
        emoji: '💷',
        learn: [
          card('✖️', 'Multipliers', 'To increase by a percentage, multiply by 1 + the percentage as a decimal: up 20% means × 1.2. To decrease, multiply by 1 − it: down 15% means × 0.85. Percentage change = change ÷ original amount × 100. From £50 to £60 is a change of £10, and 10 ÷ 50 × 100 = 20%.', ['multiplier', 'percentage change']),
          card('🏦', 'Simple and compound interest', 'Simple interest is the same amount every year: £100 at 10% earns £10 a year. Compound interest is added on each year, so next year you earn interest on the interest too: £100 → £110 → £121 → £133.10. Savings accounts and loans usually use compound interest.', ['simple interest', 'compound interest'], 'interest-bars'),
        ],
        questions: [
          gap('q1', 'Increase £80 by 25%. New amount = £___', ['100']),
          gap('q2', 'Decrease £60 by 10%. New amount = £___', ['54']),
          gap('q3', 'A price rises from £50 to £60. Percentage increase = ___%', ['20']),
          mcq('q4', 'Which multiplier increases an amount by 15%?', ['1.15', '0.15', '0.85', '15'], 0),
          gap('q5', '£200 at 5% simple interest for 3 years earns £___ of interest', ['30']),
          gap('q6', '£100 at 10% compound interest for 2 years grows to £___', ['121']),
          tf('q7', 'With compound interest you also earn interest on the interest.', true),
        ],
      },
      {
        id: 'mm-inequalities',
        title: 'Inequalities',
        emoji: '⚖️',
        learn: [
          card('↔️', 'Inequality symbols', '< means less than and > means greater than. ≤ means less than or equal to, and ≥ means greater than or equal to. x > 3 means x could be any number bigger than 3, like 3.5 or 100, but not 3 itself.', ['inequality', 'less than', 'greater than']),
          card('📏', 'Number lines', 'Show an inequality on a number line with a circle and an arrow. An open circle means the number is not included (< or >); a filled circle means it is (≤ or ≥). The arrow points to all the other values that work.', ['number line'], 'inequality-line'),
          card('🧮', 'Solving', 'Solve inequalities just like equations, doing the same to both sides. 2x + 1 < 9 → 2x < 8 → x < 4. (If you ever multiply or divide both sides by a negative number, flip the sign round.)', ['solve']),
        ],
        questions: [
          match('q1', 'Match the symbol to its meaning', [
            ['<', 'Less than'],
            ['>', 'Greater than'],
            ['≤', 'Less than or equal to'],
            ['≥', 'Greater than or equal to'],
          ]),
          mcq('q2', 'Which whole numbers satisfy x > 3?', ['4, 5, 6…', '3, 4, 5…', '1, 2, 3', '0, 1, 2'], 0),
          gap('q3', 'Solve 2x + 1 < 9. x < ___', ['4']),
          gap('q4', 'Solve 3x − 2 ≥ 10. x ≥ ___', ['4']),
          mcq('q5', 'On a number line, x ≤ 2 has…', ['A filled circle at 2 and an arrow to the left', 'An open circle at 2 and an arrow to the left', 'A filled circle at 2 and an arrow to the right', 'An open circle at 2 and an arrow to the right'], 0),
          gap('q6', 'How many whole numbers n satisfy 1 < n < 5? ___', ['3']),
          tf('q7', 'x = 5 satisfies x < 5.', false, '5 is not less than 5. It would satisfy x ≤ 5.'),
        ],
      },
      {
        id: 'mm-venn',
        title: 'Venn diagrams & frequency trees',
        emoji: '⭕',
        learn: [
          card('⭕', 'Venn diagrams', 'A Venn diagram sorts things into overlapping circles. The overlap holds things in both groups; the space outside the circles holds things in neither. In a class of 30, if 13 like football, 12 like tennis and 5 like both, then 8 like football only, 7 like tennis only, and 10 like neither.', ['Venn diagram', 'overlap'], 'venn-example'),
          card('🌳', 'Frequency trees', 'A frequency tree splits a total into groups, then splits each group again. The numbers on each pair of branches add up to the number they came from. It’s a quick way to organise information like “of 50 students, 30 walk to school…”.', ['frequency tree']),
          card('🎯', 'Expected outcomes', 'Expected number = probability × number of trials. Flip a fair coin 50 times and you expect 25 heads. If the chance of rain is 0.3, over 30 days you’d expect rain on 9 of them. Real results will usually be close, but not exact.', ['expected outcome', 'probability']),
        ],
        questions: [
          gap('q1', 'In a class, 13 like football, 12 like tennis, and 5 like both. How many like football only? ___', ['8']),
          gap('q2', 'In that class of 30, how many like neither sport? ___', ['10']),
          mcq('q3', 'The overlap of a Venn diagram shows…', ['Things in both groups', 'Things in neither group', 'Only the first group', 'Everything'], 0),
          gap('q4', 'A fair coin is flipped 50 times. Expected number of heads = ___', ['25']),
          gap('q5', 'P(rain) = 0.3. In 30 days, you’d expect rain on ___ days', ['9']),
          tf('q6', 'In a frequency tree, each pair of branches adds up to the number they came from.', true),
          gap('q7', 'Of 50 students, 30 walk to school. How many don’t walk? ___', ['20']),
        ],
      },
      {
        id: 'mm-surface',
        title: 'Surface area & prisms',
        emoji: '📦',
        learn: [
          card('📦', 'Surface area', 'Surface area is the total area of all the faces of a 3D shape. A cuboid has 6 faces in 3 matching pairs, so add the three different areas and double it. A cuboid 2 cm × 3 cm × 4 cm has faces of 6, 8 and 12 cm², so its surface area is 2 × 26 = 52 cm². A net (the shape unfolded) helps you see every face.', ['surface area', 'net', 'face'], 'cuboid-net'),
          card('🔺', 'Prisms and cylinders', 'A prism has the same cross-section all the way along. Volume of a prism = area of cross-section × length. A cylinder is a circular prism, so its volume = π × radius² × height. A cylinder with radius 2 cm and height 10 cm has a volume of π × 4 × 10 = 40π ≈ 126 cm³.', ['prism', 'cross-section', 'cylinder']),
        ],
        questions: [
          gap('q1', 'A cube has sides of 3 cm. Surface area = ___ cm²', ['54']),
          gap('q2', 'A cuboid is 2 cm × 5 cm × 10 cm. Surface area = ___ cm²', ['160']),
          gap('q3', 'A prism has a cross-section of 12 cm² and a length of 10 cm. Volume = ___ cm³', ['120']),
          mcq('q4', 'How many faces does a cuboid have?', ['6', '4', '8', '12'], 0),
          gap('q5', 'A triangular prism has a cross-section of 6 cm² and a length of 5 cm. Volume = ___ cm³', ['30']),
          mcq('q6', 'The volume of a cylinder is…', ['π × radius² × height', '2 × π × radius', 'π × diameter', 'radius × height'], 0),
          gap('q7', 'A cylinder has radius 3 cm and height 2 cm. Volume = ___π cm³', ['18']),
        ],
      },
    ],
  },
  {
    id: 'maths-number-mastery',
    title: 'Number mastery',
    stage: Y89,
    description: 'Prime factors, HCF and LCM, negative numbers, and powers and roots: the number skills everything else builds on.',
    colour: '#e05d5d',
    lessons: [
      {
        id: 'mnm-primes',
        title: 'Prime factors, HCF & LCM',
        emoji: '🌳',
        learn: [
          card('🌳', 'Prime factor trees', 'Every whole number above 1 is either prime or a product of primes. Split it into any two factors, and keep splitting until every branch ends in a prime. 60 = 2 × 2 × 3 × 5, which you can write as 2² × 3 × 5.', ['prime factor', 'product of primes'], 'factor-tree'),
          card('🤝', 'HCF and LCM', 'The HCF (highest common factor) is the biggest number that divides into both. The LCM (lowest common multiple) is the smallest number both divide into. For 4 and 6: factors of 4 are 1, 2, 4 and of 6 are 1, 2, 3, 6, so the HCF is 2. Multiples of 4 are 4, 8, 12… and of 6 are 6, 12…, so the LCM is 12.', ['HCF', 'LCM'], 'hcf-venn'),
          card('🧠', 'Quick checks', 'The LCM is never smaller than the bigger number, and the HCF is never bigger than the smaller number. If one number divides into the other, the HCF is the smaller one and the LCM is the bigger one: for 5 and 20, the HCF is 5 and the LCM is 20.', ['check']),
        ],
        questions: [
          gap('q1', 'LCM of 4 and 6 = ___', ['12']),
          gap('q2', 'HCF of 12 and 18 = ___', ['6']),
          mcq('q3', 'Which is 60 written as a product of primes?', ['2 × 2 × 3 × 5', '2 × 30', '6 × 10', '4 × 15'], 0),
          tf('q4', '51 is a prime number.', false, '51 = 3 × 17.'),
          gap('q5', 'LCM of 3 and 5 = ___', ['15']),
          gap('q6', 'HCF of 8 and 20 = ___', ['4']),
          mcq('q7', 'Buses leave every 4 minutes and every 6 minutes. Both leave at 9:00. When do they next leave together?', ['9:12', '9:24', '9:10', '9:02'], 0, 'The LCM of 4 and 6 is 12.'),
        ],
      },
      {
        id: 'mnm-negatives',
        title: 'Negative numbers mastery',
        emoji: '🌡️',
        learn: [
          card('📏', 'Adding and subtracting', 'Picture a number line. Adding a positive moves right; subtracting a positive moves left. For −6 − 4, start at −6 and move 4 left, to −10. Subtracting a negative is the same as adding: 3 − (−5) = 3 + 5 = 8.', ['number line'], 'negative-line'),
          card('✖️', 'Multiplying and dividing', 'Same signs give a positive answer; different signs give a negative. −3 × −4 = 12. −12 ÷ 3 = −4. 5 × −2 = −10. Squaring a negative gives a positive: (−3)² = 9.', ['signs']),
        ],
        questions: [
          gap('q1', '−6 − 4 = ___', ['-10']),
          gap('q2', '3 − (−5) = ___', ['8']),
          gap('q3', '−3 × −4 = ___', ['12']),
          gap('q4', '−12 ÷ 3 = ___', ['-4']),
          mcq('q5', 'It is −2 °C and the temperature falls by 5 degrees. Now it is…', ['−7 °C', '3 °C', '−3 °C', '7 °C'], 0),
          gap('q6', '(−3)² = ___', ['9']),
          mcq('q7', 'Which is the biggest?', ['−1', '−5', '−10', '−100'], 0),
        ],
      },
      {
        id: 'mnm-powers',
        title: 'Powers & roots',
        emoji: '🔢',
        learn: [
          card('🔢', 'Powers', 'A power says how many times to multiply a number by itself. 2⁵ = 2 × 2 × 2 × 2 × 2 = 32. Learn the squares (1, 4, 9, 16, 25, 36, 49, 64, 81, 100) and cubes (1, 8, 27, 64, 125).', ['power', 'index', 'square', 'cube']),
          card('📐', 'Index laws', 'When multiplying powers of the same number, add the powers: 3² × 3⁴ = 3⁶. When dividing, subtract them: 5⁷ ÷ 5³ = 5⁴. Anything to the power 0 is 1.', ['index laws'], 'index-laws'),
          card('🌱', 'Roots', 'A square root undoes squaring: √49 = 7, because 7² = 49. A cube root undoes cubing: ∛125 = 5. You can estimate roots that aren’t whole numbers: √50 is just over 7.', ['square root', 'cube root']),
        ],
        questions: [
          gap('q1', '2⁵ = ___', ['32']),
          gap('q2', '√81 = ___', ['9']),
          mcq('q3', '3² × 3⁴ = ?', ['3⁶', '3⁸', '9⁶', '3²'], 0),
          mcq('q4', '5⁷ ÷ 5³ = ?', ['5⁴', '5¹⁰', '1⁴', '5²¹'], 0),
          gap('q5', '7⁰ = ___', ['1']),
          gap('q6', '∛64 = ___', ['4']),
          mcq('q7', '√50 is between…', ['7 and 8', '6 and 7', '8 and 9', '25 and 26'], 0),
        ],
      },
    ],
  },
  {
    id: 'maths-problem-solving',
    title: 'Problem solving',
    stage: Y89,
    description: 'Best buys and proportion, area and perimeter problems, and multi-step problems with time and money.',
    colour: '#3a86c8',
    lessons: [
      {
        id: 'mp-best-buy',
        title: 'Best buys & proportion',
        emoji: '🛒',
        learn: [
          card('🛒', 'Best buys', 'To compare deals, find the price of one item (the unit price). 6 cans for £3 is 50p a can. 10 cans for £4.50 is 45p a can, so the 10-pack is the better buy.', ['unit price', 'best buy'], 'best-buy'),
          card('🍳', 'Recipes and proportion', 'If a recipe for 4 people needs 200 g of flour, find the amount for 1 person first (50 g), then multiply: 6 people need 300 g. This is the unitary method.', ['unitary method', 'proportion']),
        ],
        questions: [
          gap('q1', '6 cans cost £3. One can costs ___p', ['50']),
          mcq('q2', 'Which is the best buy?', ['10 for £4.50', '6 for £3', '2 for £1.10', '1 for 60p'], 0),
          gap('q3', 'A recipe for 4 people uses 200 g of flour. For 6 people you need ___ g', ['300']),
          gap('q4', '5 pens cost £2. 8 pens cost £___', ['3.20']),
          gap('q5', 'A car uses 6 litres of fuel for 100 km. For 250 km it uses ___ litres', ['15']),
          mcq('q6', 'Which method finds the cost of one item first?', ['The unitary method', 'Rounding', 'Estimating', 'Factorising'], 0),
        ],
      },
      {
        id: 'mp-area',
        title: 'Area & perimeter problems',
        emoji: '🏡',
        learn: [
          card('🏡', 'Compound shapes', 'Split an L-shape into rectangles, find each area and add them up, checking you haven’t counted any part twice. For the perimeter, go all the way round, working out any missing side lengths first.', ['compound shape', 'perimeter'], 'compound-shape'),
          card('🎨', 'Real-life problems', 'Read carefully what is being asked. A wall 4 m by 2.5 m has an area of 10 m². If a tin of paint covers 6 m², you need 2 tins: you can’t buy 1.67 tins, so round up.', ['round up']),
        ],
        questions: [
          gap('q1', 'An L-shape is made of a 6 × 4 rectangle and a 2 × 3 rectangle. Total area = ___', ['30']),
          gap('q2', 'A square has a perimeter of 20 cm. Each side is ___ cm', ['5']),
          gap('q3', 'A wall is 4 m by 2.5 m. Its area is ___ m²', ['10']),
          gap('q4', 'One tin covers 6 m². To paint 10 m² you need ___ tins', ['2']),
          mcq('q5', 'A rectangle is 8 cm by 3 cm. Its perimeter is…', ['22 cm', '24 cm', '11 cm', '24 cm²'], 0),
          gap('q6', 'A garden is 10 m by 6 m with a 2 m by 3 m pond. The lawn covers ___ m²', ['54']),
        ],
      },
      {
        id: 'mp-multi',
        title: 'Multi-step problems',
        emoji: '🧩',
        learn: [
          card('🧩', 'A plan for word problems', 'Read the question twice and underline what you’re asked. Pick out the numbers you need. Decide the steps. Calculate, showing your working. Then check: is the answer sensible, with the right units?', ['plan'], 'problem-steps'),
          card('⏰', 'Time and money', 'Time isn’t decimal: 1.5 hours is 1 hour 30 minutes, not 1 hour 50. To find a time gap, count on in steps: 09:45 to 11:20 is 15 minutes + 1 hour + 20 minutes = 1 hour 35 minutes. With money, line up the pounds and pence.', ['time', 'money']),
        ],
        questions: [
          gap('q1', 'A film starts at 18:45 and lasts 1 hour 50 minutes. It ends at ___', ['20:35', '8:35']),
          mcq('q2', '1.5 hours is…', ['1 hour 30 minutes', '1 hour 50 minutes', '1 hour 5 minutes', '150 minutes'], 0),
          gap('q3', 'Tickets cost £7.50 each. 4 tickets and a £3 programme cost £___', ['33']),
          gap('q4', 'From 09:45 to 11:20 is 1 hour ___ minutes', ['35']),
          mcq('q5', '3 hours of homework is spread over 4 days. How long is it each day?', ['45 minutes', '1 hour 15 minutes', '40 minutes', '30 minutes'], 0),
          tf('q6', 'After solving a problem, you should check the answer is sensible.', true),
        ],
      },
    ],
  },
];
