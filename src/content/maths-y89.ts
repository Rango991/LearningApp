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
];
