import { card, codeCard, gap, match, mcq, order, tf, withCode } from './helpers';
import type { Unit } from './types';

// Computing (Year 7, then Years 8-9 from the KS3 National Curriculum, then GCSE).
// Gosforth East teaches binary, e-safety, Logo, web code and Scratch, so the KS3
// units cover those ideas and go on to Python. The GCSE units cover topics common
// to OCR J277 and AQA 8525, since Gosforth Academy's board isn't confirmed.
// Code uses Python. Question ids are stored in progress data, so never change an existing id.

const Y7 = 'Year 7';
const Y89 = 'Years 8–9';
const GCSE = 'GCSE (OCR / AQA)';

export const computing: Unit[] = [
  {
    id: 'cs-safety',
    title: 'Staying safe online',
    stage: Y7,
    description: 'Strong passwords and privacy, spotting scams and phishing, and dealing with cyberbullying.',
    colour: '#0ea5e9',
    lessons: [
      {
        id: 'css-passwords',
        title: 'Passwords & privacy',
        emoji: '🔐',
        learn: [
          card('🔐', 'Strong passwords', 'A strong password is long and hard to guess. Three random words joined together, like PurpleKettleRocket, are strong and easy to remember. Never use your name, birthday or pet’s name, and use a different password for each important account.', ['strong password', 'three random words'], 'password-strength'),
          card('🕵️', 'Protecting your privacy', 'Personal information includes your full name, address, school, phone number and photos that show where you are. Keep accounts private, think before you post (it can stay online for ever), and turn on two-step verification, which needs a code as well as your password.', ['personal information', 'two-step verification']),
        ],
        questions: [
          mcq('q1', 'Which password is strongest?', ['PurpleKettleRocket', 'sam2012', 'password123', 'qwerty'], 0),
          tf('q2', 'It’s fine to use the same password for every account.', false, 'If one account is hacked, all the others are at risk.'),
          mcq('q3', 'Which is personal information you shouldn’t share publicly?', ['Your home address', 'Your favourite colour', 'Your favourite film', 'A joke'], 0),
          mcq('q4', 'What does two-step verification add?', ['A code as well as your password', 'A second username', 'A faster login', 'Nothing'], 0),
          tf('q5', 'Something you post online can stay there for ever.', true),
          mcq('q6', 'Which makes a good password?', ['Three random words joined together', 'Your pet’s name', 'Your birthday', '1234'], 0),
        ],
      },
      {
        id: 'css-scams',
        title: 'Spotting scams & phishing',
        emoji: '🎣',
        learn: [
          card('🎣', 'Phishing', 'Phishing messages pretend to be from someone you trust, like a bank, a game or a delivery company, to trick you into clicking a link or giving away a password. Warning signs: urgency (“act now!”), a prize you didn’t enter for, spelling mistakes, and odd sender addresses.', ['phishing', 'link'], 'phishing-signs'),
          card('🛑', 'What to do', 'Don’t click links or open attachments in messages you weren’t expecting. Go to the real website or app yourself instead. Never share passwords or codes, even with someone claiming to be from the company. If unsure, ask a trusted adult.', ['attachment', 'trusted adult']),
        ],
        questions: [
          mcq('q1', 'What is phishing?', ['A fake message trying to trick you into giving information', 'A video game', 'A type of virus scanner', 'Fishing for real'], 0),
          mcq('q2', 'Which is a warning sign of a scam?', ['“You’ve won! Claim your prize in the next 10 minutes!”', 'A message from a friend you were expecting', 'A school newsletter', 'A weather app alert'], 0),
          tf('q3', 'A real company might ask you to text them your password.', false, 'Real companies never ask for your password.'),
          mcq('q4', 'You get an unexpected link “from your bank”. What should you do?', ['Go to the real website yourself instead', 'Click it quickly', 'Reply with your details', 'Forward it to friends'], 0),
          tf('q5', 'Spelling mistakes can be a sign of a scam message.', true),
          gap('q6', 'Fake messages that try to steal your details are called ___.', ['phishing']),
        ],
      },
      {
        id: 'css-respect',
        title: 'Respect & cyberbullying',
        emoji: '🤝',
        learn: [
          card('🤝', 'Being kind online', 'Treat people online as you would face to face. Think before you post: would you say it to their face? Don’t share other people’s photos or messages without permission.', ['respect', 'permission']),
          card('🆘', 'If something goes wrong', 'Cyberbullying is bullying online: nasty messages, leaving people out, sharing embarrassing pictures. If it happens: don’t reply, screenshot the evidence, block and report the person, and tell a trusted adult. You can also contact Childline (0800 1111).', ['cyberbullying', 'block', 'report'], 'report-steps'),
        ],
        questions: [
          order('q1', 'Put these steps in a sensible order if you’re being bullied online', ['Don’t reply', 'Screenshot the evidence', 'Block and report', 'Tell a trusted adult']),
          tf('q2', 'It’s fine to share a friend’s photo without asking.', false),
          mcq('q3', 'Which is cyberbullying?', ['Sending nasty messages to someone again and again', 'Sending a birthday message', 'Sharing your own drawing', 'Asking for help with homework'], 0),
          mcq('q4', 'Why screenshot the messages?', ['To keep evidence', 'To share them around', 'To reply later', 'It doesn’t help'], 0),
          gap('q5', 'Childline’s phone number is 0800 ___', ['1111']),
          mcq('q6', 'A good test before posting is…', ['Would I say this to their face?', 'Will it get lots of likes?', 'Is it funny to me?', 'Is anyone watching?'], 0),
        ],
      },
    ],
  },
  {
    id: 'cs-binary',
    title: 'Binary & data',
    stage: Y7,
    description: 'Bits and bytes, converting between binary and denary, binary addition, and how text, pictures and sound become binary.',
    colour: '#6366f1',
    lessons: [
      {
        id: 'csb-numbers',
        title: 'Binary numbers',
        emoji: '🔢',
        learn: [
          card('💡', 'Why binary?', 'Computers are built from billions of tiny switches that are either off or on, so everything is stored as 0s and 1s: binary. One 0 or 1 is a bit. Eight bits make a byte.', ['binary', 'bit', 'byte']),
          card('🔢', 'Place values', 'In binary, each column is worth double the one to its right: 128, 64, 32, 16, 8, 4, 2, 1. To convert 00001101 to denary (normal numbers), add the columns with a 1: 8 + 4 + 1 = 13. A byte can hold 0 to 255.', ['place value', 'denary'], 'binary-columns'),
        ],
        questions: [
          gap('q1', 'One 0 or 1 is called a ___.', ['bit']),
          gap('q2', '8 bits make one ___.', ['byte']),
          gap('q3', 'Binary 00001101 in denary is ___', ['13']),
          gap('q4', 'Binary 00000110 in denary is ___', ['6']),
          mcq('q5', 'What is 5 in binary (8 bits)?', ['00000101', '00000110', '00000011', '00001010'], 0),
          gap('q6', 'The biggest number one byte can hold is ___', ['255']),
          mcq('q7', 'Why do computers use binary?', ['Their switches are either off or on', 'It’s shorter to write', 'It uses fewer numbers by law', 'It’s easier for people'], 0),
        ],
      },
      {
        id: 'csb-addition',
        title: 'Binary addition',
        emoji: '➕',
        learn: [
          card('➕', 'The four rules', '0 + 0 = 0. 0 + 1 = 1. 1 + 1 = 10 (write 0, carry 1). 1 + 1 + 1 = 11 (write 1, carry 1). Work from right to left, just like column addition.', ['carry'], 'binary-addition'),
          card('⚠️', 'Overflow', 'If the answer needs more bits than you have (more than 8 in a byte), the extra carry is lost: an overflow error. 11111111 + 1 doesn’t fit in 8 bits.', ['overflow']),
        ],
        questions: [
          gap('q1', '1 + 1 in binary = ___', ['10']),
          gap('q2', '1 + 1 + 1 in binary = ___', ['11']),
          gap('q3', '0101 + 0011 = ___ (4 bits)', ['1000']),
          gap('q4', '0010 + 0001 = ___ (4 bits)', ['0011', '11']),
          mcq('q5', 'What happens when an answer needs more bits than there are?', ['An overflow error', 'It rounds down', 'It turns into text', 'Nothing'], 0),
          tf('q6', 'Binary addition works from right to left.', true),
        ],
      },
      {
        id: 'csb-media',
        title: 'Text, pictures & sound',
        emoji: '🖼️',
        learn: [
          card('🔤', 'Text', 'Each character has a number code. In ASCII, “A” is 65, “B” is 66, and “a” is 97. Unicode extends this to cover every alphabet, plus emoji.', ['ASCII', 'Unicode', 'character set']),
          card('🖼️', 'Pictures', 'An image is a grid of pixels, and each pixel’s colour is stored as a binary number. More pixels (higher resolution) and more bits per pixel (colour depth) give a better picture, but a bigger file.', ['pixel', 'resolution', 'colour depth'], 'pixel-grid'),
          card('🔊', 'Sound', 'Sound is measured (sampled) thousands of times a second and each measurement is stored in binary. A higher sample rate gives better quality, but a bigger file.', ['sample rate']),
        ],
        questions: [
          gap('q1', 'In ASCII, “A” is ___', ['65']),
          mcq('q2', 'A tiny dot of colour in an image is a…', ['Pixel', 'Bit', 'Sample', 'Byte'], 0),
          mcq('q3', 'Increasing the resolution of an image makes the file…', ['Bigger', 'Smaller', 'The same', 'Disappear'], 0),
          tf('q4', 'Unicode can represent emoji.', true),
          mcq('q5', 'What does a higher sample rate do to a sound file?', ['Better quality, bigger file', 'Worse quality, smaller file', 'Nothing', 'Makes it silent'], 0),
          gap('q6', 'The number of bits used for each pixel’s colour is the colour ___.', ['depth']),
        ],
      },
    ],
  },
  {
    id: 'cs-thinking',
    title: 'Algorithms & thinking',
    stage: Y7,
    description: 'Computational thinking, algorithms, flowcharts, and sequence, selection and iteration.',
    colour: '#f59e0b',
    lessons: [
      {
        id: 'cst-thinking',
        title: 'Computational thinking',
        emoji: '🧠',
        learn: [
          card('🧠', 'Four skills', 'Decomposition: breaking a big problem into smaller ones. Pattern recognition: spotting similarities. Abstraction: ignoring details that don’t matter (a Tube map ignores real distances). Algorithms: step-by-step instructions to solve the problem.', ['decomposition', 'abstraction', 'pattern recognition', 'algorithm'], 'comp-thinking'),
          card('📝', 'Algorithms everywhere', 'A recipe, directions to school and the rules of a game are all algorithms. A good algorithm is precise and in the right order, so anyone (or any computer) following it gets the same result.', ['precise', 'order']),
        ],
        questions: [
          match('q1', 'Match the skill to its meaning', [
            ['Decomposition', 'Breaking a problem into smaller parts'],
            ['Abstraction', 'Ignoring details that don’t matter'],
            ['Algorithm', 'Step-by-step instructions'],
          ]),
          mcq('q2', 'A Tube map ignores real distances. This is an example of…', ['Abstraction', 'Decomposition', 'Iteration', 'Debugging'], 0),
          tf('q3', 'A recipe is an algorithm.', true),
          mcq('q4', 'Planning a party by splitting it into food, music and invitations is…', ['Decomposition', 'Abstraction', 'Selection', 'Binary'], 0),
          mcq('q5', 'Why must algorithms be precise?', ['So anyone following them gets the same result', 'To make them longer', 'So only experts understand', 'They don’t need to be'], 0),
          gap('q6', 'Spotting similarities between problems is pattern ___.', ['recognition']),
        ],
      },
      {
        id: 'cst-flowcharts',
        title: 'Flowcharts',
        emoji: '🔀',
        learn: [
          card('🔀', 'Flowchart symbols', 'Flowcharts show an algorithm as a diagram. Rounded box: start or end. Rectangle: a process (do something). Diamond: a decision with Yes and No branches. Parallelogram: input or output.', ['flowchart', 'decision', 'process'], 'flowchart-symbols'),
          card('🔁', 'Sequence, selection, iteration', 'Every program is built from three ideas. Sequence: steps in order. Selection: choosing a path with a decision (if it’s raining, take a coat). Iteration: repeating steps (stir until smooth).', ['sequence', 'selection', 'iteration']),
        ],
        questions: [
          match('q1', 'Match the flowchart shape to its job', [
            ['Diamond', 'A decision'],
            ['Rectangle', 'A process'],
            ['Parallelogram', 'Input or output'],
            ['Rounded box', 'Start or end'],
          ]),
          match('q2', 'Match the example to the idea', [
            ['If it’s raining, take a coat', 'Selection'],
            ['Stir until smooth', 'Iteration'],
            ['Put on socks, then shoes', 'Sequence'],
          ]),
          tf('q3', 'A decision box has two exits: Yes and No.', true),
          mcq('q4', 'Repeating steps is called…', ['Iteration', 'Selection', 'Sequence', 'Abstraction'], 0),
          mcq('q5', 'Which shape would you use for “Ask the user their age”?', ['Parallelogram', 'Diamond', 'Rectangle', 'Circle'], 0),
          gap('q6', 'Choosing a path using a decision is called ___.', ['selection']),
        ],
      },
      {
        id: 'cst-turtle',
        title: 'Instructions & debugging',
        emoji: '🐢',
        learn: [
          codeCard('🐢', 'Turtle instructions', 'In Logo (and Python’s turtle), you steer a turtle that draws as it moves. To draw a square, repeat 4 times: move forward, then turn right 90°. Using a loop is shorter than writing the steps out four times.', 'repeat 4:\n    forward 100\n    right 90', ['loop', 'repeat'], 'turtle-square'),
          card('🐞', 'Debugging', 'A bug is a mistake in a program; debugging is finding and fixing it. Test your program, compare what happens with what should happen, then check one step at a time. For any regular shape, the turtle turns a total of 360°, so each turn is 360 ÷ number of sides.', ['bug', 'debugging']),
        ],
        questions: [
          withCode('repeat 4:\n    forward 100\n    right 90', mcq('q1', 'What does this draw?', ['A square', 'A triangle', 'A circle', 'A straight line'], 0)),
          gap('q2', 'To draw a regular hexagon (6 sides), each turn is ___°', ['60']),
          gap('q3', 'To draw an equilateral triangle, the turtle turns ___° each time', ['120']),
          mcq('q4', 'What is a bug?', ['A mistake in a program', 'A type of computer', 'A virus that is always harmful', 'A fast loop'], 0),
          tf('q5', 'Using a loop makes the square program shorter.', true),
          withCode('repeat 3:\n    forward 50\n    right 90', mcq('q6', 'This was meant to draw a square. What is the bug?', ['It should repeat 4 times', 'It should turn 45°', 'It should go forward 90', 'Nothing is wrong'], 0)),
        ],
      },
    ],
  },
  {
    id: 'cs-python',
    title: 'Programming with Python',
    stage: Y89,
    description: 'Variables, input and output, if statements, loops, lists and functions in Python.',
    colour: '#16a34a',
    lessons: [
      {
        id: 'csp-variables',
        title: 'Variables, input & output',
        emoji: '📦',
        learn: [
          codeCard('📦', 'Variables', 'A variable is a named box that stores a value. The = sign stores (assigns) a value; it doesn’t mean “equals” as in maths. print() shows something on the screen.', 'score = 10\nscore = score + 5\nprint(score)   # shows 15', ['variable', 'assign', 'print'], 'variable-box'),
          codeCard('⌨️', 'Input and data types', 'input() asks the user to type something and always gives back text (a string). Use int() to turn it into a whole number. Common data types: integer (5), float (2.5), string ("hi") and Boolean (True/False).', 'name = input("What is your name? ")\nage = int(input("How old are you? "))\nprint("Hi " + name)', ['input', 'string', 'integer', 'Boolean']),
        ],
        questions: [
          withCode('x = 4\nx = x + 3\nprint(x)', gap('q1', 'What does this print? ___', ['7'])),
          withCode('a = 5\nb = a\na = 9\nprint(b)', gap('q2', 'What does this print? ___', ['5'])),
          match('q3', 'Match the value to its data type', [
            ['42', 'Integer'],
            ['3.14', 'Float'],
            ['"hello"', 'String'],
            ['True', 'Boolean'],
          ]),
          mcq('q4', 'What does input() always give back?', ['A string (text)', 'An integer', 'A float', 'A Boolean'], 0),
          withCode('name = "Sam"\nprint("Hi " + name)', mcq('q5', 'What does this print?', ['Hi Sam', 'Hi name', '"Hi " + name', 'Sam'], 0)),
          tf('q6', 'In Python, = means “store this value”.', true),
        ],
      },
      {
        id: 'csp-if',
        title: 'Selection: if statements',
        emoji: '🚦',
        learn: [
          codeCard('🚦', 'if, elif, else', 'An if statement runs code only when a condition is True. elif checks another condition, and else catches everything left over. The indented lines belong to that branch.', 'mark = 72\nif mark >= 70:\n    print("Grade A")\nelif mark >= 50:\n    print("Grade B")\nelse:\n    print("Keep going")', ['if', 'elif', 'else', 'condition'], 'if-branches'),
          card('⚖️', 'Comparison operators', '== equal to (two = signs!), != not equal to, < less than, > greater than, <= less than or equal, >= greater than or equal. Combine conditions with and, or and not.', ['==', '!=', 'and', 'or']),
        ],
        questions: [
          withCode('mark = 72\nif mark >= 70:\n    print("A")\nelif mark >= 50:\n    print("B")\nelse:\n    print("C")', gap('q1', 'What does this print? ___', ['A'])),
          withCode('mark = 55\nif mark >= 70:\n    print("A")\nelif mark >= 50:\n    print("B")\nelse:\n    print("C")', gap('q2', 'What does this print? ___', ['B'])),
          mcq('q3', 'Which operator checks if two things are equal?', ['==', '=', '!=', '=>'], 0),
          withCode('age = 12\nif age >= 13 and age <= 19:\n    print("teen")\nelse:\n    print("not a teen")', mcq('q4', 'What does this print?', ['not a teen', 'teen', 'Nothing', 'An error'], 0)),
          tf('q5', 'The else branch runs when none of the conditions above it are True.', true),
          gap('q6', '!= means not ___ to.', ['equal']),
        ],
      },
      {
        id: 'csp-loops',
        title: 'Loops',
        emoji: '🔁',
        learn: [
          codeCard('🔁', 'for loops', 'A for loop repeats a set number of times. range(5) gives 0, 1, 2, 3, 4: it starts at 0 and stops before 5. range(1, 4) gives 1, 2, 3.', 'for i in range(1, 4):\n    print(i)\n# prints 1, 2, 3', ['for loop', 'range'], 'loop-types'),
          codeCard('⏳', 'while loops', 'A while loop keeps repeating as long as its condition is True. Make sure something changes inside the loop, or it will never stop (an infinite loop).', 'count = 3\nwhile count > 0:\n    print(count)\n    count = count - 1\nprint("Lift off!")', ['while loop', 'infinite loop']),
        ],
        questions: [
          withCode('for i in range(3):\n    print("hi")', gap('q1', 'How many times is “hi” printed? ___', ['3'])),
          withCode('total = 0\nfor n in range(1, 5):\n    total = total + n\nprint(total)', gap('q2', 'What does this print? ___', ['10'])),
          mcq('q3', 'What numbers does range(5) give?', ['0, 1, 2, 3, 4', '1, 2, 3, 4, 5', '0 to 5', '5 only'], 0),
          withCode('count = 3\nwhile count > 0:\n    count = count - 1\nprint(count)', gap('q4', 'What does this print? ___', ['0'])),
          mcq('q5', 'Which loop is best when you don’t know how many times to repeat?', ['A while loop', 'A for loop', 'No loop', 'An if statement'], 0),
          tf('q6', 'A while loop whose condition never becomes False is an infinite loop.', true),
        ],
      },
      {
        id: 'csp-lists',
        title: 'Lists & functions',
        emoji: '🧺',
        learn: [
          codeCard('🧺', 'Lists', 'A list stores lots of values in one variable. Each item has an index, starting at 0. len() gives the number of items, and append() adds one to the end.', 'pets = ["cat", "dog", "fish"]\nprint(pets[0])    # cat\npets.append("rabbit")\nprint(len(pets))  # 4', ['list', 'index', 'append'], 'list-index'),
          codeCard('🧩', 'Functions', 'A function is a named block of code you can reuse. Parameters are the values you pass in, and return sends a result back. Functions keep programs tidy: write once, use many times.', 'def double(n):\n    return n * 2\n\nprint(double(6))  # 12', ['function', 'parameter', 'return']),
        ],
        questions: [
          withCode('pets = ["cat", "dog", "fish"]\nprint(pets[1])', gap('q1', 'What does this print? ___', ['dog'])),
          withCode('nums = [4, 8, 15]\nnums.append(16)\nprint(len(nums))', gap('q2', 'What does this print? ___', ['4'])),
          tf('q3', 'The first item in a list has index 1.', false, 'Indexes start at 0.'),
          withCode('def double(n):\n    return n * 2\n\nprint(double(7))', gap('q4', 'What does this print? ___', ['14'])),
          mcq('q5', 'In def area(w, h):, what are w and h?', ['Parameters', 'Lists', 'Loops', 'Strings'], 0),
          mcq('q6', 'Why use functions?', ['To reuse code and keep programs tidy', 'To make programs slower', 'Python needs exactly one', 'To store lists'], 0),
        ],
      },
    ],
  },
  {
    id: 'cs-search-sort',
    title: 'Searching & sorting',
    stage: Y89,
    description: 'Linear and binary search, bubble sort, merge and insertion sort, and comparing algorithms.',
    colour: '#db2777',
    lessons: [
      {
        id: 'csss-search',
        title: 'Searching',
        emoji: '🔍',
        learn: [
          card('🚶', 'Linear search', 'Check each item in turn, from the start, until you find the target or reach the end. It works on any list, sorted or not, but it’s slow for big lists: up to one check per item.', ['linear search'], 'search-compare'),
          card('✂️', 'Binary search', 'For a sorted list only. Look at the middle item. If it’s the target, stop. If the target is smaller, throw away the top half; if bigger, the bottom half. Repeat. Each check halves the list, so it’s very fast: 1,000 items take at most 10 checks.', ['binary search', 'sorted']),
        ],
        questions: [
          mcq('q1', 'Which search only works on a sorted list?', ['Binary search', 'Linear search', 'Both', 'Neither'], 0),
          mcq('q2', 'In a binary search, which item do you check first?', ['The middle one', 'The first one', 'The last one', 'A random one'], 0),
          tf('q3', 'A linear search checks items one by one from the start.', true),
          gap('q4', 'In a binary search, each check throws away ___ of the list.', ['half']),
          mcq('q5', 'For a large sorted list, which is usually faster?', ['Binary search', 'Linear search', 'They’re always the same', 'Neither works'], 0),
          mcq('q6', 'Binary search on [2, 5, 8, 12, 16, 23, 38] for 23. First check is 12. What next?', ['Search the half above 12', 'Search the half below 12', 'Stop: not found', 'Start again at 2'], 0),
        ],
      },
      {
        id: 'csss-bubble',
        title: 'Bubble sort',
        emoji: '🫧',
        learn: [
          card('🫧', 'How bubble sort works', 'Compare the first two items and swap them if they’re in the wrong order. Move along one place and repeat to the end: that’s one pass, and the biggest item has “bubbled” to the end. Keep doing passes until a whole pass makes no swaps.', ['bubble sort', 'pass', 'swap'], 'bubble-sort'),
          card('🐢', 'Pros and cons', 'Bubble sort is simple to understand and code, but slow for big lists because it makes lots of comparisons. It is fine for small lists, or ones that are nearly sorted already.', ['efficiency']),
        ],
        questions: [
          mcq('q1', 'In bubble sort, what do you compare?', ['Pairs of neighbouring items', 'The first and last items', 'Random items', 'Every item with the middle'], 0),
          mcq('q2', 'After the first pass of a bubble sort (smallest to largest), where is the biggest item?', ['At the end', 'At the start', 'In the middle', 'Anywhere'], 0),
          mcq('q3', 'One pass of bubble sort on [5, 3, 8, 1] gives…', ['[3, 5, 1, 8]', '[1, 3, 5, 8]', '[5, 3, 1, 8]', '[3, 1, 5, 8]'], 0),
          tf('q4', 'Bubble sort stops when a pass makes no swaps.', true),
          mcq('q5', 'A downside of bubble sort is that it is…', ['Slow for big lists', 'Impossible to code', 'Only for words', 'Always wrong'], 0),
          gap('q6', 'Going through the whole list once is called one ___.', ['pass']),
        ],
      },
      {
        id: 'csss-merge',
        title: 'Merge & insertion sort',
        emoji: '🧩',
        learn: [
          card('🧩', 'Merge sort', 'Split the list in half again and again until every item is on its own. Then merge the pieces back together in pairs, putting each merged list in order. It’s much faster than bubble sort for big lists, but uses more memory.', ['merge sort', 'divide and conquer'], 'merge-sort'),
          card('🃏', 'Insertion sort', 'Like sorting playing cards in your hand: take the next item and slide it back into the right place among the items already sorted. Simple and good for small or nearly sorted lists.', ['insertion sort']),
        ],
        questions: [
          mcq('q1', 'Merge sort starts by…', ['Splitting the list until each item is alone', 'Comparing neighbours and swapping', 'Checking the middle item', 'Picking a random item'], 0),
          mcq('q2', 'For a big list, which is usually fastest?', ['Merge sort', 'Bubble sort', 'Insertion sort', 'They’re the same'], 0),
          mcq('q3', 'Which sort is like ordering playing cards in your hand?', ['Insertion sort', 'Merge sort', 'Bubble sort', 'Binary search'], 0),
          tf('q4', 'Merge sort uses more memory than bubble sort.', true),
          mcq('q5', 'Merging [3, 7] and [2, 9] gives…', ['[2, 3, 7, 9]', '[3, 7, 2, 9]', '[2, 9, 3, 7]', '[9, 7, 3, 2]'], 0),
          gap('q6', 'Splitting a problem into smaller parts and combining the answers is “divide and ___”.', ['conquer']),
        ],
      },
    ],
  },
  {
    id: 'cs-systems',
    title: 'How computers work',
    stage: Y89,
    description: 'Hardware and the CPU, memory and storage, software and operating systems, and Boolean logic gates.',
    colour: '#475569',
    lessons: [
      {
        id: 'csy-hardware',
        title: 'Hardware & the CPU',
        emoji: '🖥️',
        learn: [
          card('🖥️', 'Hardware', 'Hardware is the physical parts of a computer. Input devices (keyboard, mouse, microphone) put data in. Output devices (screen, speakers, printer) show results. The CPU, memory and storage do the work inside.', ['hardware', 'input device', 'output device'], 'input-output'),
          card('⚙️', 'The CPU', 'The CPU (central processing unit) is the brain of the computer. It repeats the fetch–decode–execute cycle billions of times a second: fetch the next instruction from memory, decode it to work out what it means, then execute (do) it.', ['CPU', 'fetch–decode–execute']),
        ],
        questions: [
          match('q1', 'Input or output device?', [
            ['Keyboard', 'Input'],
            ['Speakers', 'Output'],
          ]),
          order('q2', 'Put the CPU cycle in order', ['Fetch', 'Decode', 'Execute']),
          gap('q3', 'CPU stands for central ___ unit.', ['processing']),
          mcq('q4', 'Which is hardware?', ['A graphics card', 'A web browser', 'An app', 'An operating system'], 0),
          tf('q5', 'The CPU fetches instructions from memory.', true),
          mcq('q6', 'Which is an input device?', ['Microphone', 'Monitor', 'Printer', 'Speaker'], 0),
        ],
      },
      {
        id: 'csy-memory',
        title: 'Memory & storage',
        emoji: '💾',
        learn: [
          card('💾', 'RAM and ROM', 'RAM holds the programs and data in use right now. It’s fast but volatile: everything is lost when the power goes off. ROM is non-volatile and holds the start-up instructions (the BIOS), which can’t usually be changed.', ['RAM', 'ROM', 'volatile'], 'memory-storage'),
          card('🗄️', 'Storage', 'Storage keeps files when the power is off. Hard disk drives (magnetic) are cheap with large capacity. Solid state drives (flash) are faster, quieter and tougher. Optical discs (CDs, DVDs) and cloud storage are other options.', ['storage', 'SSD', 'HDD']),
        ],
        questions: [
          mcq('q1', 'Which memory is lost when the power goes off?', ['RAM', 'ROM', 'A hard disk', 'A USB stick'], 0),
          mcq('q2', 'What does ROM store?', ['The start-up instructions', 'Your photos', 'Open web pages', 'Games you’re playing'], 0),
          match('q3', 'Match the storage to a feature', [
            ['Solid state drive', 'Fast, no moving parts'],
            ['Hard disk drive', 'Cheap, large capacity'],
            ['Cloud storage', 'Access files over the internet'],
          ]),
          gap('q4', 'Memory that loses its data without power is ___.', ['volatile']),
          tf('q5', 'Storage keeps your files when the computer is switched off.', true),
          mcq('q6', 'Why is an SSD good for a laptop?', ['It is fast, light and tough with no moving parts', 'It is magnetic', 'It is the cheapest per GB', 'It needs a DVD'], 0),
        ],
      },
      {
        id: 'csy-software',
        title: 'Software & operating systems',
        emoji: '🪟',
        learn: [
          card('🪟', 'System software', 'The operating system (like Windows, macOS, Android or iOS) manages the hardware, runs programs, handles files and memory, and provides the user interface. Utility software keeps the computer healthy: antivirus, backup and compression tools.', ['operating system', 'utility software'], 'software-types'),
          card('📱', 'Application software', 'Applications are programs for doing tasks: word processors, web browsers, games and photo editors. Open-source software lets anyone see and change the code; proprietary software keeps it secret.', ['application', 'open source', 'proprietary']),
        ],
        questions: [
          mcq('q1', 'Which is an operating system?', ['Android', 'Google Chrome', 'Minecraft', 'PowerPoint'], 0),
          match('q2', 'System or application software?', [
            ['Antivirus', 'System (utility)'],
            ['A web browser', 'Application'],
          ]),
          mcq('q3', 'Which is a job of the operating system?', ['Managing memory and files', 'Writing your essay', 'Taking photos for you', 'Charging the battery'], 0),
          tf('q4', 'Anyone can see and change the code of open-source software.', true),
          gap('q5', 'Programs like games and browsers are ___ software.', ['application']),
          mcq('q6', 'What does a backup utility do?', ['Copies files so they can be restored', 'Deletes old files', 'Speeds up the internet', 'Plays music'], 0),
        ],
      },
      {
        id: 'csy-logic',
        title: 'Boolean logic',
        emoji: '🔌',
        learn: [
          card('🔌', 'Logic gates', 'Computers make decisions with logic gates. AND outputs 1 only if both inputs are 1. OR outputs 1 if either (or both) input is 1. NOT flips its single input: 1 becomes 0 and 0 becomes 1.', ['AND', 'OR', 'NOT', 'logic gate'], 'logic-gates'),
          card('📋', 'Truth tables', 'A truth table lists every possible input and the output. With two inputs there are 4 rows: 00, 01, 10, 11. The same logic appears in code: if raining and cold: wear a coat.', ['truth table']),
        ],
        questions: [
          gap('q1', '1 AND 0 = ___', ['0']),
          gap('q2', '1 OR 0 = ___', ['1']),
          gap('q3', 'NOT 1 = ___', ['0']),
          mcq('q4', 'Which gate outputs 1 only when both inputs are 1?', ['AND', 'OR', 'NOT', 'All of them'], 0),
          gap('q5', 'A truth table with two inputs has ___ rows.', ['4']),
          tf('q6', '0 OR 0 = 1', false, 'OR needs at least one input to be 1.'),
        ],
      },
    ],
  },
  {
    id: 'cs-networks',
    title: 'Networks & the internet',
    stage: Y89,
    description: 'How networks connect, how the internet and the web work, HTML, and keeping systems secure.',
    colour: '#0891b2',
    lessons: [
      {
        id: 'csn-networks',
        title: 'Networks',
        emoji: '🌐',
        learn: [
          card('🌐', 'LANs and WANs', 'A network is two or more connected computers. A LAN (local area network) covers one site, like a school or home. A WAN (wide area network) covers a big area; the internet is the biggest WAN of all.', ['LAN', 'WAN', 'network'], 'network-map'),
          card('📡', 'Network hardware', 'A router sends data between networks, like your home and the internet. A switch connects devices within a LAN. Devices connect by cable (fast and reliable) or Wi-Fi (convenient but can be slower).', ['router', 'switch', 'Wi-Fi']),
        ],
        questions: [
          match('q1', 'LAN or WAN?', [
            ['A school network', 'LAN'],
            ['The internet', 'WAN'],
          ]),
          mcq('q2', 'What does a router do?', ['Sends data between networks', 'Stores files', 'Prints pages', 'Cools the computer'], 0),
          tf('q3', 'A cable connection is usually more reliable than Wi-Fi.', true),
          gap('q4', 'LAN stands for local ___ network.', ['area']),
          mcq('q5', 'Which connects devices within one LAN?', ['A switch', 'A satellite', 'A printer', 'A monitor'], 0),
          mcq('q6', 'Why connect computers in a network?', ['To share files, printers and the internet', 'To make them slower', 'To use more electricity', 'There is no reason'], 0),
        ],
      },
      {
        id: 'csn-web',
        title: 'The internet & the web',
        emoji: '🕸️',
        learn: [
          card('🕸️', 'Internet vs web', 'The internet is the worldwide network of connected computers. The World Wide Web is one service that runs on it: web pages linked together, invented by Tim Berners-Lee in 1989. Email and video calls also use the internet.', ['internet', 'World Wide Web']),
          codeCard('📄', 'How a web page arrives', 'Every device online has an IP address. When you type a web address, a DNS server looks up the site’s IP address, like a phone book. Your browser then requests the page, which is written in HTML.', '<h1>My page</h1>\n<p>Hello, world!</p>\n<a href="https://bbc.co.uk">BBC</a>', ['IP address', 'DNS', 'HTML'], 'dns-lookup'),
        ],
        questions: [
          tf('q1', 'The internet and the World Wide Web are the same thing.', false, 'The web is one service that runs on the internet.'),
          gap('q2', 'The web was invented by Tim Berners-___.', ['Lee']),
          mcq('q3', 'What does DNS do?', ['Turns web addresses into IP addresses', 'Stores web pages', 'Blocks viruses', 'Makes Wi-Fi'], 0),
          withCode('<h1>Welcome</h1>', mcq('q4', 'What does this HTML make?', ['A big heading', 'A link', 'A picture', 'A list'], 0)),
          mcq('q5', 'Web pages are written in…', ['HTML', 'Binary only', 'Excel', 'Morse code'], 0),
          withCode('<a href="https://bbc.co.uk">BBC</a>', mcq('q6', 'What does this HTML make?', ['A link to the BBC website', 'A heading', 'An image', 'A table'], 0)),
        ],
      },
      {
        id: 'csn-security',
        title: 'Cyber security',
        emoji: '🛡️',
        learn: [
          card('🦠', 'Threats', 'Malware is harmful software: viruses spread by attaching to files, ransomware locks your files and demands payment, and spyware secretly records what you do. Social engineering tricks people rather than computers: phishing is the most common.', ['malware', 'ransomware', 'social engineering'], 'security-threats'),
          card('🛡️', 'Defences', 'Keep software updated (updates fix security holes), use antivirus software and a firewall (which blocks unwanted network traffic), use strong passwords with two-step verification, and back up your files.', ['firewall', 'antivirus', 'updates']),
        ],
        questions: [
          match('q1', 'Match the malware to what it does', [
            ['Ransomware', 'Locks files and demands payment'],
            ['Spyware', 'Secretly records what you do'],
            ['Virus', 'Spreads by attaching to files'],
          ]),
          mcq('q2', 'What does a firewall do?', ['Blocks unwanted network traffic', 'Puts out fires', 'Speeds up Wi-Fi', 'Stores passwords'], 0),
          tf('q3', 'Software updates can fix security holes.', true),
          mcq('q4', 'Tricking a person into giving away information is…', ['Social engineering', 'Encryption', 'Compression', 'A firewall'], 0),
          mcq('q5', 'Why back up your files?', ['So you can get them back if they’re lost or locked', 'To make them bigger', 'To share them publicly', 'To slow the computer'], 0),
          gap('q6', 'Harmful software is called ___.', ['malware']),
        ],
      },
    ],
  },
  {
    id: 'g-cs-systems',
    title: 'Computer systems',
    stage: GCSE,
    description: 'CPU architecture and performance, hexadecimal and file sizes, networks and protocols, and ethics and the law.',
    colour: '#334155',
    lessons: [
      {
        id: 'gcs-cpu',
        title: 'CPU architecture',
        emoji: '⚙️',
        learn: [
          card('⚙️', 'Von Neumann architecture', 'Instructions and data are stored together in memory. Inside the CPU: the ALU does maths and logic, the control unit manages the fetch–decode–execute cycle, and registers like the program counter (address of the next instruction) and accumulator (results) hold values for quick use.', ['ALU', 'control unit', 'register', 'program counter'], 'cpu-parts'),
          card('🚀', 'Performance', 'Clock speed is how many cycles per second (3 GHz = 3 billion). More cores let it run tasks at the same time. Cache is tiny, very fast memory inside the CPU for frequently used data. Raising any of these can speed a computer up.', ['clock speed', 'cores', 'cache']),
        ],
        questions: [
          match('q1', 'Match the CPU part to its job', [
            ['ALU', 'Does calculations and logic'],
            ['Control unit', 'Manages the fetch–decode–execute cycle'],
            ['Program counter', 'Holds the address of the next instruction'],
          ]),
          gap('q2', 'A 3 GHz CPU runs ___ billion cycles per second.', ['3', 'three']),
          mcq('q3', 'What is cache?', ['Small, very fast memory inside the CPU', 'A type of hard disk', 'The power supply', 'A network cable'], 0),
          tf('q4', 'In von Neumann architecture, data and instructions share the same memory.', true),
          mcq('q5', 'Which would NOT directly speed up the CPU?', ['A bigger monitor', 'More cores', 'A higher clock speed', 'More cache'], 0),
          gap('q6', 'ALU stands for arithmetic logic ___.', ['unit']),
        ],
      },
      {
        id: 'gcs-data',
        title: 'Hexadecimal & file sizes',
        emoji: '🧮',
        learn: [
          card('🧮', 'Hexadecimal', 'Hex is base 16: digits 0–9 then A–F (A = 10, F = 15). One hex digit matches 4 bits (a nibble), so it’s a shorter way to write binary. 1111 1010 = FA. To convert hex to denary: 2F = 2 × 16 + 15 = 47.', ['hexadecimal', 'nibble'], 'hex-table'),
          card('📏', 'Units and file sizes', '1 kilobyte = 1,000 bytes, 1 MB = 1,000 KB, 1 GB = 1,000 MB, 1 TB = 1,000 GB. Image size in bits = width × height × colour depth. Sound = sample rate × bit depth × seconds. Compression shrinks files: lossy removes data (JPEG, MP3), lossless doesn’t (PNG, ZIP).', ['kilobyte', 'lossy', 'lossless']),
        ],
        questions: [
          gap('q1', 'Hex F in denary is ___', ['15']),
          gap('q2', 'Hex 2F in denary is ___', ['47']),
          gap('q3', 'Binary 1111 1010 in hex is ___', ['FA']),
          gap('q4', 'An image 10 × 10 pixels with 8-bit colour is ___ bits.', ['800']),
          match('q5', 'Lossy or lossless?', [
            ['MP3', 'Lossy'],
            ['ZIP', 'Lossless'],
          ]),
          mcq('q6', 'How many bits does one hex digit stand for?', ['4', '8', '2', '16'], 0),
        ],
      },
      {
        id: 'gcs-networks',
        title: 'Networks & protocols',
        emoji: '📶',
        learn: [
          card('📶', 'Topologies', 'In a star topology, every device connects to a central switch: if one cable fails, only that device is affected, but if the switch fails, everything stops. In a mesh, devices connect to many others, so data has several routes.', ['star topology', 'mesh topology'], 'topologies'),
          card('📜', 'Protocols', 'A protocol is a set of rules for communicating. TCP/IP splits data into packets and routes them. HTTP/HTTPS fetches web pages (HTTPS is encrypted). SMTP sends email; IMAP and POP fetch it. Protocols are organised in layers, so each can change without breaking the others.', ['protocol', 'TCP/IP', 'HTTPS', 'packet']),
        ],
        questions: [
          mcq('q1', 'In a star network, what happens if the central switch fails?', ['The whole network stops', 'Nothing', 'Only one device stops', 'It becomes a mesh'], 0),
          match('q2', 'Match the protocol to its job', [
            ['HTTPS', 'Secure web pages'],
            ['SMTP', 'Sending email'],
            ['TCP/IP', 'Splitting data into packets and routing them'],
          ]),
          gap('q3', 'A set of rules for communicating is a ___.', ['protocol']),
          tf('q4', 'HTTPS is encrypted; HTTP is not.', true),
          mcq('q5', 'Why are protocols arranged in layers?', ['So each layer can change without breaking the others', 'To make them slower', 'To use more cables', 'To confuse hackers'], 0),
          mcq('q6', 'Data sent across the internet is split into…', ['Packets', 'Pixels', 'Nibbles', 'Frames of film'], 0),
        ],
      },
      {
        id: 'gcs-ethics',
        title: 'Ethics, law & environment',
        emoji: '⚖️',
        learn: [
          card('⚖️', 'The law', 'The Data Protection Act 2018 (UK GDPR) says personal data must be used fairly, kept secure and accurate, and not kept longer than needed. The Computer Misuse Act 1990 makes hacking, and spreading malware, illegal. The Copyright, Designs and Patents Act 1988 protects people’s creative work, including software.', ['Data Protection Act', 'Computer Misuse Act', 'copyright'], 'cs-laws'),
          card('🌍', 'Ethics and the environment', 'Technology raises questions: privacy and surveillance, jobs replaced by automation, bias in AI, and a digital divide between people with and without access. E-waste contains toxic materials, and data centres use huge amounts of electricity.', ['ethics', 'digital divide', 'e-waste']),
        ],
        questions: [
          match('q1', 'Match the law to what it covers', [
            ['Computer Misuse Act', 'Hacking and malware'],
            ['Data Protection Act', 'Using personal data fairly'],
            ['Copyright Act', 'Protecting creative work'],
          ]),
          gap('q2', 'The Computer Misuse Act was passed in ___.', ['1990']),
          mcq('q3', 'What is the digital divide?', ['The gap between people with and without access to technology', 'A type of cable', 'Dividing a hard drive', 'A maths method'], 0),
          tf('q4', 'Old electronics (e-waste) can contain toxic materials.', true),
          mcq('q5', 'Copying and sharing a paid-for game without permission breaks…', ['Copyright law', 'The Data Protection Act', 'No law', 'The Computer Misuse Act only'], 0),
          mcq('q6', 'Which is an ethical issue with AI?', ['Bias in its decisions', 'Its screen size', 'Its colour', 'Its plug'], 0),
        ],
      },
    ],
  },
  {
    id: 'g-cs-programming',
    title: 'Algorithms & programming',
    stage: GCSE,
    description: 'Trace tables and pseudocode, defensive design and testing, Boolean expressions, and languages and translators.',
    colour: '#15803d',
    lessons: [
      {
        id: 'gcsp-trace',
        title: 'Trace tables',
        emoji: '📋',
        learn: [
          codeCard('📋', 'Tracing code', 'A trace table follows a program line by line, recording the value of each variable as it changes. It’s the best way to find out what code does, or where it goes wrong.', 'x = 1\nfor i in range(3):\n    x = x * 2\nprint(x)\n\n# i | x\n# - | 1\n# 0 | 2\n# 1 | 4\n# 2 | 8', ['trace table'], 'trace-table'),
          card('🔤', 'String handling', 'Programs often work with text. len("cat") is 3. Slicing takes part of a string: word[0] is the first letter, and word[0:3] gives the first three letters. .upper() makes capitals. Joining strings with + is concatenation.', ['string', 'concatenation', 'slicing']),
        ],
        questions: [
          withCode('x = 1\nfor i in range(3):\n    x = x * 2\nprint(x)', gap('q1', 'What does this print? ___', ['8'])),
          withCode('a = 3\nb = a + 2\na = b * 2\nprint(a)', gap('q2', 'What does this print? ___', ['10'])),
          withCode('word = "python"\nprint(word[0:3])', gap('q3', 'What does this print? ___', ['pyt'])),
          withCode('print(len("hello"))', gap('q4', 'What does this print? ___', ['5'])),
          mcq('q5', 'What is a trace table for?', ['Following how variables change as code runs', 'Drawing pictures', 'Storing passwords', 'Connecting to the internet'], 0),
          withCode('first = "Ali"\nlast = "yah"\nprint(first + last)', gap('q6', 'What does this print? ___', ['Aliyah'])),
        ],
      },
      {
        id: 'gcsp-testing',
        title: 'Defensive design & testing',
        emoji: '🧪',
        learn: [
          card('🛡️', 'Defensive design', 'Plan for users making mistakes or misusing a program. Input validation checks data is sensible (a range check: age between 0 and 120; a presence check: not left blank). Authentication (passwords) makes sure only the right people get in. Clear, commented code is easier to maintain.', ['validation', 'range check', 'authentication'], 'test-data'),
          card('🧪', 'Testing', 'Test with normal data (should work), boundary data (at the edges, like 0 and 120) and erroneous (invalid) data, which should be rejected. Syntax errors break the rules of the language so the code won’t run; logic errors run but give the wrong result.', ['normal data', 'boundary data', 'erroneous data', 'syntax error', 'logic error']),
        ],
        questions: [
          match('q1', 'Valid ages are 0 to 120. Match the test data to its type', [
            ['35', 'Normal'],
            ['120', 'Boundary'],
            ['"cat"', 'Erroneous'],
          ]),
          mcq('q2', 'Checking a value is between 1 and 10 is a…', ['Range check', 'Presence check', 'Syntax error', 'Password'], 0),
          match('q3', 'Syntax or logic error?', [
            ['print("hi"   (missing bracket)', 'Syntax error'],
            ['Using + instead of − in a calculation', 'Logic error'],
          ]),
          tf('q4', 'A program with a logic error still runs.', true),
          mcq('q5', 'What does authentication do?', ['Checks a user is who they say they are', 'Speeds up code', 'Adds comments', 'Sorts a list'], 0),
          gap('q6', 'Checking that a field hasn’t been left blank is a ___ check.', ['presence']),
        ],
      },
      {
        id: 'gcsp-boolean',
        title: 'Boolean expressions',
        emoji: '🔣',
        learn: [
          card('🔣', 'Combining gates', 'Real circuits combine gates. P = (A AND B) OR C is 1 if both A and B are 1, or if C is 1. Work through truth tables one column at a time: first the brackets, then the rest.', ['Boolean expression', 'truth table'], 'logic-circuit'),
          codeCard('💻', 'Boolean logic in code', 'Conditions in code use the same logic. Brackets control the order, just like in maths.', 'if (age >= 12 and has_ticket) or is_staff:\n    print("Come in")', ['and', 'or', 'not']),
        ],
        questions: [
          gap('q1', 'A = 1, B = 0, C = 1. (A AND B) OR C = ___', ['1']),
          gap('q2', 'A = 1, B = 1. NOT (A AND B) = ___', ['0']),
          gap('q3', 'A = 0, B = 1. A OR (NOT B) = ___', ['0']),
          withCode('age = 11\nhas_ticket = True\nis_staff = False\nif (age >= 12 and has_ticket) or is_staff:\n    print("in")\nelse:\n    print("out")', gap('q4', 'What does this print? ___', ['out'])),
          gap('q5', 'A truth table with three inputs has ___ rows.', ['8']),
          tf('q6', 'In a Boolean expression, you work out the brackets first.', true),
        ],
      },
      {
        id: 'gcsp-languages',
        title: 'Languages & translators',
        emoji: '🗣️',
        learn: [
          card('🗣️', 'High and low level', 'High-level languages (Python, Java) are close to English, easy to write, and work on many types of computer. Low-level languages (machine code and assembly) are close to what the CPU understands: harder to write, but fast and give direct control of the hardware.', ['high-level language', 'low-level language', 'machine code'], 'translators'),
          card('🔄', 'Translators and IDEs', 'Code must be translated into machine code. A compiler translates the whole program at once into a file that runs fast. An interpreter translates and runs one line at a time, which is easier for finding errors. An assembler translates assembly language. An IDE (like IDLE or VS Code) has an editor, error messages and run tools.', ['compiler', 'interpreter', 'assembler', 'IDE']),
        ],
        questions: [
          match('q1', 'Match the translator to what it does', [
            ['Compiler', 'Translates the whole program at once'],
            ['Interpreter', 'Translates one line at a time'],
            ['Assembler', 'Translates assembly language'],
          ]),
          mcq('q2', 'Which is a high-level language?', ['Python', 'Machine code', 'Assembly', 'Binary'], 0),
          tf('q3', 'Low-level languages give direct control of the hardware.', true),
          mcq('q4', 'Which translator makes a program that runs fastest each time?', ['Compiler', 'Interpreter', 'Neither', 'Both equally'], 0),
          gap('q5', 'A program with an editor, error messages and run tools is an ___.', ['IDE']),
          mcq('q6', 'Why is an interpreter handy while writing code?', ['It stops at the line with the error', 'It makes code secret', 'It needs no computer', 'It writes code for you'], 0),
        ],
      },
    ],
  },
];
