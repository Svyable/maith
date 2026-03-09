import type { Question } from '../types';

export const alQalasadiQuestions: Question[] = [
  {
    id: 31810, topic: 'al-qalasadi', difficulty: 'easy',
    question: 'Al-Qalasadi (1412–1486) is often credited with an important innovation in mathematical notation. What did he introduce?',
    options: [
      'Algebraic symbolism using Arabic letters — including symbols for the unknown ($x$), square ($x^2$), equality, and arithmetic operations. His notation was a direct precursor of modern symbolic algebra.',
      'The modern decimal point notation for separating whole numbers from fractions.',
      'The use of parentheses to group terms in algebraic expressions.',
      'The superscript notation for exponents ($x^n$) as used today.'
    ],
    correctIndex: 0,
    explanation: 'Al-Qalasadi used Arabic letters as algebraic symbols: "shay" (ش) for the unknown, "mal" (م) for the square, "kab" (ك) for the cube. He also used symbols for equality, arithmetic operations, and roots. While rhetorical (word-based) algebra dominated before him, his symbolic shorthand anticipated the notation revolution of Viète and Descartes by 200 years.',
    realWorld: 'The development of symbolic notation is one of the most important advances in the history of mathematics — it\'s what makes modern algebra, calculus, and computer programming possible.',
    hint: 'He replaced algebra\'s words with letter symbols — making equations shorter and easier to manipulate.',
  },
  {
    id: 31811, topic: 'al-qalasadi', difficulty: 'hard',
    question: 'Al-Qalasadi worked on continued fractions and numerical algorithms. What computational method did he refine for extracting square roots?',
    options: [
      'An iterative algorithm equivalent to the Babylonian method (Heron\'s method): $x_{n+1} = \\frac{1}{2}\\left(x_n + \\frac{S}{x_n}\\right)$ for computing $\\sqrt{S}$, with each step doubling the number of correct digits (quadratic convergence).',
      'A table-lookup method using pre-computed squares of all integers up to 10,000.',
      'A geometric construction using compass and straightedge to find the side of a square with given area.',
      'A method based on the Taylor expansion $\\sqrt{1+x} \\approx 1 + x/2 - x^2/8 + \\cdots$ for small $x$.'
    ],
    correctIndex: 0,
    explanation: 'Al-Qalasadi refined the iterative square root algorithm known since Babylonian times. Starting from an initial guess $x_0$, each iteration averages $x_n$ with $S/x_n$, converging quadratically to $\\sqrt{S}$. He provided clear algorithmic descriptions suitable for computation — essentially writing pseudocode for medieval calculators.',
    realWorld: 'This algorithm is still used in modern computing. The "fast inverse square root" hack in Quake III Arena is a variation of this ancient method, using a clever initial guess followed by one Newton-Raphson iteration.',
    hint: 'Average your guess with the number divided by your guess — repeat until convergence. Each step doubles the accuracy.',
  },
  {
    id: 31812, topic: 'al-qalasadi', difficulty: 'sota',
    question: 'Al-Qalasadi represents the culmination of the North African (Maghreb) mathematical tradition. What was historically significant about this tradition?',
    options: [
      'The Maghreb school developed algebraic symbolism independently of the eastern Islamic tradition, transmitted it to Al-Andalus (Islamic Spain), and from there it passed to European mathematicians (Fibonacci, later the Italian algebraists) — making it a crucial link in the chain from al-Khwarizmi to Viète and Descartes.',
      'The Maghreb school discovered calculus independently of Newton and Leibniz, using infinitesimal methods for area and volume calculations.',
      'The Maghreb school proved all five of Euclid\'s postulates from the other four, resolving the parallel postulate problem.',
      'The Maghreb school developed a complete theory of complex numbers, including the formula $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$.'
    ],
    correctIndex: 0,
    explanation: 'The Maghreb mathematical tradition (Ibn al-Banna, al-Hassar, al-Qalasadi) developed in relative isolation from the eastern Islamic centers. They independently advanced notation, combinatorics, and numerical methods. Their proximity to Al-Andalus and Christian Spain made them the primary channel through which Islamic algebra reached Europe — one of the most consequential knowledge transfers in history.',
    realWorld: 'The fraction bar $\\frac{a}{b}$ we use today comes directly from al-Hassar\'s notation in the Maghreb tradition. So does much of the algebraic language ("algebra" from al-jabr, "algorithm" from al-Khwarizmi).',
    hint: 'This North African school was the bridge — Islamic algebra flowed through them to Spain, then to Fibonacci and the rest of Europe.',
  },
];
