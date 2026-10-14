import { card, gap, match, mcq, order, tf } from './helpers';
import type { Unit } from './types';

// AQA GCSE Mathematics (8300): Foundation and crossover content, with some Higher.
// Number answers are marked by value, so 0.5, .5 and 1/2 all count.
// Question ids are stored in progress data, so never change an existing id.

const STAGE = 'GCSE (AQA)';

export const gcseMaths: Unit[] = [
  {
    id: 'g-maths-number',
    title: 'Number',
    stage: STAGE,
    description: 'Index laws, standard form calculations, surds, bounds, significant figures and recurring decimals.',
    colour: '#ff8a3d',
    lessons: [
      {
        id: 'gm-indices',
        title: 'Index laws & standard form',
        emoji: '🔢',
        learn: [
          card('📐', 'Index laws', 'Multiply: add powers (aᵐ × aⁿ = aᵐ⁺ⁿ). Divide: subtract powers. Power of a power: multiply ((aᵐ)ⁿ = aᵐⁿ). Anything to the power 0 is 1. A negative power means a reciprocal: 2⁻³ = 1/2³ = 1/8. A fractional power means a root: 16^½ = √16 = 4, 27^⅓ = 3, and 8^⅔ = (∛8)² = 4.', ['index laws', 'reciprocal'], 'index-laws'),
          card('🔭', 'Calculating in standard form', 'Multiply or divide the numbers, then use index laws for the powers of 10. (2 × 10³) × (3 × 10⁴) = 6 × 10⁷. (8 × 10⁶) ÷ (2 × 10²) = 4 × 10⁴. If the first number isn’t between 1 and 10, adjust: 15 × 10⁴ = 1.5 × 10⁵.', ['standard form']),
        ],
        questions: [
          gap('q1', '2⁻³ = ___', ['1/8']),
          gap('q2', '5⁰ = ___', ['1']),
          gap('q3', '16^½ = ___', ['4']),
          gap('q4', '8^⅔ = ___', ['4']),
          mcq('q5', '(x³)⁴ = ?', ['x¹²', 'x⁷', 'x⁸¹', '4x³'], 0),
          mcq('q6', '(2 × 10³) × (3 × 10⁴) = ?', ['6 × 10⁷', '6 × 10¹²', '5 × 10⁷', '6 × 10⁶'], 0),
          mcq('q7', '(8 × 10⁶) ÷ (2 × 10²) = ?', ['4 × 10⁴', '4 × 10³', '6 × 10⁴', '4 × 10⁸'], 0),
          mcq('q8', '15 × 10⁴ in standard form is…', ['1.5 × 10⁵', '1.5 × 10³', '15 × 10⁴', '0.15 × 10⁶'], 0),
        ],
      },
      {
        id: 'gm-surds',
        title: 'Surds, bounds & rounding',
        emoji: '🎯',
        learn: [
          card('🌱', 'Surds', 'A surd is a root that can’t be simplified to a whole number, like √2. Simplify by finding a square factor: √12 = √4 × √3 = 2√3. √a × √b = √(ab), so √2 × √8 = √16 = 4. (√3)² = 3.', ['surd', 'simplify']),
          card('🎯', 'Rounding and bounds', 'Significant figures start at the first non-zero digit: 0.04567 to 3 s.f. is 0.0457; 2,345 to 2 s.f. is 2,300. A length of 3.7 cm to 1 d.p. could be anything from 3.65 (lower bound) up to, but not including, 3.75 (upper bound): 3.65 ≤ x < 3.75.', ['significant figures', 'bounds', 'error interval'], 'bounds'),
          card('🧮', 'Estimating', 'Estimate by rounding each number to 1 significant figure first. 48.7 × 3.1 ≈ 50 × 3 = 150.', ['estimate']),
        ],
        questions: [
          mcq('q1', 'Simplify √12', ['2√3', '3√2', '4√3', '6'], 0),
          mcq('q2', 'Simplify √50', ['5√2', '2√5', '25√2', '10√5'], 0),
          gap('q3', '√2 × √8 = ___', ['4']),
          gap('q4', '0.04567 to 3 significant figures = ___', ['0.0457']),
          gap('q5', '2,345 to 2 significant figures = ___', ['2300']),
          gap('q6', 'A length is 3.7 cm to 1 d.p. Its lower bound is ___ cm', ['3.65']),
          gap('q7', 'Estimate 48.7 × 3.1 by rounding to 1 s.f.: ___', ['150']),
          tf('q8', '(√5)² = 5', true),
        ],
      },
      {
        id: 'gm-recurring',
        title: 'Recurring decimals & fractions',
        emoji: '🔁',
        learn: [
          card('🔁', 'Recurring decimals', 'A recurring decimal repeats forever: 1/3 = 0.333…, written 0.3̇. To convert to a fraction: let x = 0.272727…, so 100x = 27.2727…, and subtracting gives 99x = 27, so x = 27/99 = 3/11.', ['recurring decimal'], 'recurring'),
          card('🧩', 'Terminating or recurring?', 'A fraction in its simplest form gives a terminating decimal only if the denominator’s only prime factors are 2 and 5. So 3/8 terminates (0.375) but 2/3 recurs.', ['terminating']),
        ],
        questions: [
          gap('q1', '0.333… as a fraction = ___', ['1/3']),
          gap('q2', '0.272727… as a fraction in simplest form = ___', ['3/11']),
          gap('q3', '3/8 as a decimal = ___', ['0.375']),
          mcq('q4', 'Which fraction gives a recurring decimal?', ['2/3', '1/4', '3/5', '7/20'], 0),
          mcq('q5', 'To convert 0.272727…, you multiply x by…', ['100', '10', '1,000', '27'], 0, 'Two digits repeat, so multiply by 10² = 100.'),
          tf('q6', '1/20 gives a terminating decimal.', true, '20 = 2² × 5, so it terminates: 0.05.'),
        ],
      },
    ],
  },
  {
    id: 'g-maths-algebra',
    title: 'Algebra',
    stage: STAGE,
    description: 'Quadratics, simultaneous equations, inequalities and straight-line and quadratic graphs.',
    colour: '#4f7cf7',
    lessons: [
      {
        id: 'gm-quadratics',
        title: 'Quadratics',
        emoji: '📈',
        learn: [
          card('🔓', 'Factorising', 'To factorise x² + bx + c, find two numbers that multiply to c and add to b. x² + 5x + 6 = (x + 2)(x + 3) because 2 × 3 = 6 and 2 + 3 = 5. Difference of two squares: x² − 9 = (x + 3)(x − 3).', ['factorise', 'difference of two squares']),
          card('🎯', 'Solving', 'Rearrange to = 0, factorise, then set each bracket to zero. x² + 5x + 6 = 0 → (x + 2)(x + 3) = 0 → x = −2 or x = −3. These are the roots: where the graph crosses the x-axis. If it won’t factorise, use the quadratic formula.', ['roots', 'quadratic formula'], 'quadratic-roots'),
        ],
        questions: [
          mcq('q1', 'Factorise x² + 5x + 6', ['(x + 2)(x + 3)', '(x + 1)(x + 6)', '(x − 2)(x − 3)', '(x + 5)(x + 1)'], 0),
          mcq('q2', 'Factorise x² − 9', ['(x + 3)(x − 3)', '(x − 3)²', '(x + 9)(x − 1)', 'x(x − 9)'], 0),
          mcq('q3', 'Factorise x² + x − 12', ['(x + 4)(x − 3)', '(x − 4)(x + 3)', '(x + 6)(x − 2)', '(x + 12)(x − 1)'], 0),
          mcq('q4', 'Solve x² − 7x + 10 = 0', ['x = 2 or x = 5', 'x = −2 or x = −5', 'x = 7 or x = 10', 'x = 1 or x = 10'], 0),
          gap('q5', 'x² = 49, and x is positive. x = ___', ['7']),
          tf('q6', 'The roots of a quadratic are where its graph crosses the x-axis.', true),
          mcq('q7', 'Expand (x − 4)²', ['x² − 8x + 16', 'x² − 16', 'x² + 16', 'x² − 8x − 16'], 0),
          order('q8', 'Put the steps for solving a quadratic in order', ['Rearrange so it equals 0', 'Factorise', 'Set each bracket to 0', 'Solve each one']),
        ],
      },
      {
        id: 'gm-simultaneous',
        title: 'Simultaneous equations',
        emoji: '⚖️',
        learn: [
          card('➕', 'Elimination', 'Add or subtract the equations to eliminate one letter. x + y = 10 and x − y = 4: adding gives 2x = 14, so x = 7, then y = 3. If no coefficients match, multiply one equation first. Always check your answer in both equations.', ['simultaneous equations', 'elimination']),
          card('📈', 'Graphically', 'The solution is where the two lines cross. x + y = 10 and x − y = 4 cross at (7, 3).', ['intersection'], 'simultaneous-graph'),
        ],
        questions: [
          gap('q1', 'x + y = 10, x − y = 4. x = ___', ['7']),
          gap('q2', 'x + y = 10, x − y = 4. y = ___', ['3']),
          gap('q3', '2x + y = 11, x + y = 7. x = ___', ['4']),
          gap('q4', '3x + 2y = 16, x + 2y = 8. x = ___', ['4']),
          gap('q5', '3x + 2y = 16, x + 2y = 8. y = ___', ['2']),
          mcq('q6', 'On a graph, the solution to simultaneous equations is…', ['Where the lines cross', 'Where a line meets the y-axis', 'The steepest line', 'The origin'], 0),
        ],
      },
      {
        id: 'gm-inequalities',
        title: 'Inequalities',
        emoji: '↔️',
        learn: [
          card('↔️', 'Solving inequalities', 'Solve like an equation: 2x + 3 < 11 → 2x < 8 → x < 4. But if you multiply or divide by a negative number, flip the sign: −2x > 6 → x < −3.', ['inequality']),
          card('⚪', 'Number lines and integers', 'On a number line, an open circle means not included (< or >); a filled circle means included (≤ or ≥). The integers that satisfy −2 < n ≤ 3 are −1, 0, 1, 2 and 3.', ['integer'], 'inequality-line'),
        ],
        questions: [
          mcq('q1', 'Solve 2x + 3 < 11', ['x < 4', 'x > 4', 'x < 7', 'x < 8'], 0),
          mcq('q2', 'Solve 3x − 2 ≥ 10', ['x ≥ 4', 'x ≤ 4', 'x ≥ 8/3', 'x > 12'], 0),
          gap('q3', 'How many integers satisfy −2 < n ≤ 3? ___', ['5']),
          mcq('q4', 'Solve −2x > 6', ['x < −3', 'x > −3', 'x > 3', 'x < 3'], 0),
          mcq('q5', 'What does a filled circle on a number line mean?', ['The value is included', 'The value is not included', 'Infinity', 'Zero'], 0),
          gap('q6', 'The smallest integer that satisfies x > 2.5 is ___', ['3']),
        ],
      },
      {
        id: 'gm-graphs',
        title: 'Straight lines & curves',
        emoji: '📉',
        learn: [
          card('📏', 'Parallel and perpendicular', 'Parallel lines have the same gradient: y = 3x + 1 and y = 3x − 5 are parallel. Perpendicular gradients multiply to −1: a line perpendicular to gradient 3 has gradient −1/3.', ['parallel', 'perpendicular'], 'parallel-perp'),
          card('📍', 'Finding an equation', 'Find the gradient (change in y ÷ change in x), then the y-intercept. Through (0, 2) and (2, 8): gradient = 6 ÷ 2 = 3, intercept = 2, so y = 3x + 2.', ['gradient', 'y-intercept']),
          card('🥣', 'Graph shapes', 'y = x² is a U-shaped parabola. y = x³ is an S-shaped cubic. y = 1/x is a reciprocal curve in two parts.', ['parabola', 'cubic', 'reciprocal']),
        ],
        questions: [
          gap('q1', 'A line parallel to y = 3x + 1 has gradient ___', ['3']),
          gap('q2', 'A line perpendicular to y = 2x + 1 has gradient ___', ['-1/2', '-0.5']),
          mcq('q3', 'The line through (0, 2) and (2, 8) is…', ['y = 3x + 2', 'y = 2x + 3', 'y = 4x + 2', 'y = 3x + 8'], 0),
          match('q4', 'Match the equation to its shape', [
            ['y = x²', 'U-shaped parabola'],
            ['y = x³', 'S-shaped cubic'],
            ['y = 1/x', 'Two-part curve'],
          ]),
          tf('q5', 'y = 5 − 2x has a negative gradient.', true),
          gap('q6', 'y = 4x − 7 crosses the y-axis at y = ___', ['-7']),
        ],
      },
    ],
  },
  {
    id: 'g-maths-ratio',
    title: 'Ratio, proportion & rates of change',
    stage: STAGE,
    description: 'Compound interest, reverse percentages, direct and inverse proportion, and compound measures.',
    colour: '#ef5b5b',
    lessons: [
      {
        id: 'gm-percent',
        title: 'Compound & reverse percentages',
        emoji: '💷',
        learn: [
          card('📈', 'Compound interest and depreciation', 'Use a multiplier to the power of the number of years. £1,000 at 5% compound interest for 2 years: 1,000 × 1.05² = £1,102.50. A £10,000 car losing 10% a year for 2 years: 10,000 × 0.9² = £8,100.', ['compound interest', 'depreciation'], 'compound-interest'),
          card('↩️', 'Reverse percentages', 'To find the original amount, divide by the multiplier. A price after 20% off is £40, so the original was 40 ÷ 0.8 = £50. After a 25% increase it’s £75, so the original was 75 ÷ 1.25 = £60.', ['reverse percentage', 'original value']),
        ],
        questions: [
          gap('q1', '£1,000 at 5% compound interest for 2 years = £___', ['1102.50', '1102.5']),
          gap('q2', 'A £10,000 car depreciates 10% a year. After 2 years it’s worth £___', ['8100']),
          gap('q3', 'A sale price after 20% off is £40. The original price was £___', ['50']),
          gap('q4', 'After a 25% increase, a price is £75. The original price was £___', ['60']),
          mcq('q5', 'The multiplier for 3 years of 2% compound growth is…', ['1.02³', '1.06', '1.2³', '0.02³'], 0),
          tf('q6', 'To undo a 20% decrease, you increase by 20%.', false, 'You divide by 0.8, which is a 25% increase.'),
        ],
      },
      {
        id: 'gm-proportion',
        title: 'Proportion & compound measures',
        emoji: '📊',
        learn: [
          card('📈', 'Direct and inverse proportion', 'Direct proportion: y = kx, a straight line through the origin; double x, double y. Inverse proportion: y = k/x; double x, halve y. Find k from a given pair, then use it. If y ∝ x and y = 12 when x = 3, then k = 4, so when x = 5, y = 20.', ['direct proportion', 'inverse proportion'], 'proportion-graphs'),
          card('🏎️', 'Compound measures', 'Speed = distance ÷ time. Density = mass ÷ volume. Pressure = force ÷ area. Watch the units: 90 km/h = 25 m/s.', ['speed', 'density', 'pressure']),
        ],
        questions: [
          gap('q1', 'y ∝ x, y = 12 when x = 3. When x = 5, y = ___', ['20']),
          gap('q2', 'y ∝ 1/x, y = 6 when x = 4. When x = 8, y = ___', ['3']),
          mcq('q3', 'The graph of direct proportion is…', ['A straight line through the origin', 'A curve', 'A horizontal line', 'A U shape'], 0),
          gap('q4', '150 km in 2.5 hours. Average speed = ___ km/h', ['60']),
          gap('q5', 'Mass 600 g, volume 200 cm³. Density = ___ g/cm³', ['3']),
          gap('q6', '90 km/h = ___ m/s', ['25']),
          tf('q7', 'If y is inversely proportional to x, doubling x halves y.', true),
        ],
      },
    ],
  },
  {
    id: 'g-maths-geometry',
    title: 'Geometry & measures',
    stage: STAGE,
    description: 'Trigonometry, volumes of 3D shapes, transformations and circle theorems.',
    colour: '#16a6a0',
    lessons: [
      {
        id: 'gm-trig',
        title: 'Trigonometry (SOHCAHTOA)',
        emoji: '📐',
        learn: [
          card('📐', 'SOHCAHTOA', 'In a right-angled triangle, label the sides from the angle θ: hypotenuse (longest), opposite (across from θ), adjacent (next to θ). sin θ = O/H, cos θ = A/H, tan θ = O/A.', ['hypotenuse', 'opposite', 'adjacent', 'SOHCAHTOA'], 'sohcahtoa'),
          card('🧮', 'Using it', 'To find a side: hypotenuse 10, angle 30°, find the opposite: O = H × sin 30° = 10 × 0.5 = 5. To find an angle, use the inverse: if tan θ = 1, θ = tan⁻¹(1) = 45°. Exact values: sin 30° = 0.5, cos 60° = 0.5, tan 45° = 1, sin 90° = 1.', ['inverse', 'exact values']),
        ],
        questions: [
          gap('q1', 'sin 30° = ___', ['0.5', '1/2']),
          gap('q2', 'tan 45° = ___', ['1']),
          gap('q3', 'Hypotenuse 10, angle 30°. Opposite = ___', ['5']),
          gap('q4', 'Hypotenuse 8, angle 60°. Adjacent = ___', ['4'], 'A = H × cos 60° = 8 × 0.5 = 4.'),
          mcq('q5', 'Which ratio uses opposite and adjacent?', ['tan', 'sin', 'cos'], 0),
          gap('q6', 'tan θ = 1, so θ = ___°', ['45']),
          mcq('q7', 'Which side is opposite the right angle?', ['Hypotenuse', 'Opposite', 'Adjacent'], 0),
        ],
      },
      {
        id: 'gm-volumes',
        title: 'Arcs, sectors & 3D shapes',
        emoji: '🧊',
        learn: [
          card('🍕', 'Arcs and sectors', 'A sector is a fraction of a circle: angle ÷ 360. Arc length = (θ/360) × πd. Sector area = (θ/360) × πr². A quarter circle of radius 10 has an arc of 5π and area 25π.', ['arc', 'sector']),
          card('🥫', 'Volumes', 'Cylinder: πr²h. Cone: ⅓πr²h. Sphere: (4/3)πr³. A cylinder with r = 3 and h = 10 has volume 90π. A sphere of radius 3 has volume 36π. A cone with r = 3 and h = 4 has volume 12π.', ['cylinder', 'cone', 'sphere'], 'volumes-3d'),
        ],
        questions: [
          mcq('q1', 'Volume of a cylinder, r = 3, h = 10', ['90π', '30π', '60π', '9π'], 0),
          mcq('q2', 'Volume of a sphere, r = 3', ['36π', '12π', '27π', '108π'], 0),
          mcq('q3', 'Volume of a cone, r = 3, h = 4', ['12π', '36π', '4π', '9π'], 0),
          mcq('q4', 'Arc length of a quarter circle, radius 10', ['5π', '10π', '20π', '2.5π'], 0),
          mcq('q5', 'Area of a semicircle, radius 4', ['8π', '16π', '4π', '2π'], 0),
          tf('q6', 'A cone has one third of the volume of a cylinder with the same base and height.', true),
        ],
      },
      {
        id: 'gm-transform',
        title: 'Transformations & similarity',
        emoji: '🔄',
        learn: [
          card('🔄', 'Four transformations', 'Translation: slide by a vector, e.g. (3, −2) moves 3 right and 2 down. Reflection: flip in a mirror line. Rotation: turn by an angle, in a direction, about a centre. Enlargement: change size by a scale factor from a centre.', ['translation', 'reflection', 'rotation', 'enlargement'], 'transformations'),
          card('🔍', 'Similar and congruent', 'Congruent shapes are identical in shape and size. Similar shapes have the same angles and their sides are in the same ratio. If lengths are multiplied by k, areas are multiplied by k² and volumes by k³.', ['congruent', 'similar', 'scale factor']),
        ],
        questions: [
          mcq('q1', '(1, 1) translated by the vector (3, −2) goes to…', ['(4, −1)', '(−2, 3)', '(4, 3)', '(3, −2)'], 0),
          mcq('q2', '(2, 5) reflected in the y-axis goes to…', ['(−2, 5)', '(2, −5)', '(5, 2)', '(−2, −5)'], 0),
          mcq('q3', '(3, 4) rotated 180° about the origin goes to…', ['(−3, −4)', '(4, 3)', '(−4, 3)', '(3, −4)'], 0),
          mcq('q4', '(2, 3) enlarged by scale factor 2 from the origin goes to…', ['(4, 6)', '(4, 3)', '(2, 6)', '(1, 1.5)'], 0),
          gap('q5', 'Lengths are multiplied by 3. Areas are multiplied by ___', ['9']),
          tf('q6', 'Congruent shapes are exactly the same shape and size.', true),
          mcq('q7', 'To describe a rotation fully you need…', ['Angle, direction and centre', 'Just the angle', 'A vector', 'A scale factor'], 0),
        ],
      },
      {
        id: 'gm-circle-theorems',
        title: 'Circle theorems',
        emoji: '⭕',
        learn: [
          card('⭕', 'Key theorems', 'The angle in a semicircle is 90°. The angle at the centre is twice the angle at the circumference. Angles in the same segment are equal. Opposite angles in a cyclic quadrilateral add to 180°. A tangent meets a radius at 90°.', ['circle theorems', 'cyclic quadrilateral', 'tangent'], 'circle-theorems'),
        ],
        questions: [
          gap('q1', 'The angle in a semicircle is ___°', ['90']),
          gap('q2', 'The angle at the circumference is 35°. The angle at the centre is ___°', ['70']),
          gap('q3', 'In a cyclic quadrilateral, one angle is 110°. The opposite angle is ___°', ['70']),
          gap('q4', 'A tangent and a radius meet at ___°', ['90']),
          tf('q5', 'Angles in the same segment are equal.', true),
          gap('q6', 'The angle at the centre is 140°. The angle at the circumference is ___°', ['70']),
        ],
      },
    ],
  },
  {
    id: 'g-maths-probability',
    title: 'Probability',
    stage: STAGE,
    description: 'Tree diagrams, independent events, with and without replacement, and Venn diagrams.',
    colour: '#a259d9',
    lessons: [
      {
        id: 'gm-trees',
        title: 'Tree diagrams',
        emoji: '🌳',
        learn: [
          card('🌳', 'Tree diagrams', 'Each branch shows a probability, and branches from one point add to 1. Multiply along the branches for “and”; add the end results for “or”. Two coins: P(heads, heads) = ½ × ½ = ¼.', ['tree diagram', 'independent'], 'tree-diagram'),
          card('🎱', 'With and without replacement', 'A bag has 3 red and 2 blue balls. With replacement: P(red, red) = 3/5 × 3/5 = 9/25. Without replacement the second probability changes: 3/5 × 2/4 = 6/20 = 3/10. “At least one” = 1 − P(none): P(at least one six with two dice) = 1 − 25/36 = 11/36.', ['with replacement', 'without replacement']),
        ],
        questions: [
          gap('q1', 'P(heads then heads) with a fair coin = ___', ['1/4']),
          gap('q2', '3 red, 2 blue, with replacement. P(red, red) = ___', ['9/25']),
          gap('q3', '3 red, 2 blue, without replacement. P(red, red) = ___', ['3/10']),
          gap('q4', 'P(at least one six when rolling two dice) = ___', ['11/36']),
          tf('q5', 'Probabilities on branches from the same point add up to 1.', true),
          mcq('q6', 'For “A and then B” on a tree diagram you…', ['Multiply', 'Add', 'Subtract', 'Divide'], 0),
        ],
      },
      {
        id: 'gm-venn',
        title: 'Venn diagrams & sets',
        emoji: '⭕',
        learn: [
          card('⭕', 'Venn diagrams', 'Overlapping circles show which items are in each set. Fill in the overlap first. In a class of 30, 18 like football, 12 like tennis and 5 like both: football only = 13, tennis only = 7, neither = 30 − (13 + 5 + 7) = 5.', ['Venn diagram'], 'venn-sets'),
          card('🔣', 'Set notation', 'A ∩ B (intersection) means in A and B. A ∪ B (union) means in A or B or both. A′ means not in A. ξ is the universal set: everything.', ['intersection', 'union']),
        ],
        questions: [
          gap('q1', '30 pupils: 18 football, 12 tennis, 5 both. Football only = ___', ['13']),
          gap('q2', 'Same class: how many like neither? ___', ['5']),
          match('q3', 'Match the notation', [
            ['A ∩ B', 'In A and B'],
            ['A ∪ B', 'In A or B or both'],
            ['A′', 'Not in A'],
          ]),
          gap('q4', 'Same class: P(likes tennis only) = ___', ['7/30']),
          mcq('q5', 'What does ξ mean?', ['The universal set', 'The empty set', 'The intersection', 'The union'], 0),
          tf('q6', 'When filling in a Venn diagram, start with the overlap.', true),
        ],
      },
    ],
  },
  {
    id: 'g-maths-stats',
    title: 'Statistics',
    stage: STAGE,
    description: 'Averages from tables, scatter graphs and correlation, and box plots.',
    colour: '#0f8b8d',
    lessons: [
      {
        id: 'gm-freq',
        title: 'Averages from tables',
        emoji: '🧾',
        learn: [
          card('🧾', 'Frequency tables', 'Mean = total of (value × frequency) ÷ total frequency. Goals 0, 1, 2, 3 with frequencies 4, 3, 2, 1: total = 0 + 3 + 4 + 3 = 10 goals from 10 matches, so the mean is 1. The median is the ((n + 1) ÷ 2)th value. The mode has the highest frequency.', ['frequency table', 'mean'], 'freq-table'),
          card('📦', 'Grouped data', 'For grouped data, use the midpoint of each class to estimate the mean. The modal class is the class with the highest frequency.', ['midpoint', 'modal class']),
        ],
        questions: [
          gap('q1', 'Goals 0, 1, 2, 3 with frequencies 4, 3, 2, 1. Mean = ___', ['1']),
          gap('q2', 'Same table. Mode = ___', ['0']),
          gap('q3', 'Same table. Median = ___', ['1']),
          gap('q4', 'With 21 values, the median is the ___th value.', ['11']),
          mcq('q5', 'To estimate the mean of grouped data you use…', ['The midpoint of each class', 'The highest value', 'The lowest value', 'The class width'], 0),
          mcq('q6', 'The class with the highest frequency is the…', ['Modal class', 'Median class', 'Mean class', 'Range'], 0),
        ],
      },
      {
        id: 'gm-scatter',
        title: 'Scatter graphs & box plots',
        emoji: '📉',
        learn: [
          card('📈', 'Correlation', 'Positive correlation: as one goes up, so does the other. Negative: as one goes up, the other goes down. No correlation: no pattern. A line of best fit can be used to estimate values (interpolation is more reliable than extrapolation). Correlation does not prove one thing causes the other.', ['correlation', 'line of best fit', 'outlier'], 'scatter'),
          card('📦', 'Box plots', 'A box plot shows the minimum, lower quartile (Q1), median, upper quartile (Q3) and maximum. Interquartile range (IQR) = Q3 − Q1, the spread of the middle half. If Q1 = 10 and Q3 = 24, the IQR is 14.', ['box plot', 'quartiles', 'interquartile range']),
        ],
        questions: [
          match('q1', 'Match the correlation', [
            ['Temperature and ice cream sales', 'Positive'],
            ['Car age and value', 'Negative'],
            ['Shoe size and IQ', 'None'],
          ]),
          gap('q2', 'Q1 = 10, Q3 = 24. IQR = ___', ['14']),
          tf('q3', 'Correlation proves that one thing causes the other.', false),
          mcq('q4', 'A point far away from the rest is an…', ['Outlier', 'Average', 'Axis', 'Intercept'], 0),
          mcq('q5', 'Which is more reliable?', ['Interpolation (within the data)', 'Extrapolation (beyond the data)'], 0),
          mcq('q6', 'What does a box plot’s box show?', ['The middle 50% of the data', 'All the data', 'The mean', 'The mode'], 0),
        ],
      },
    ],
  },
];
