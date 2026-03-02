import type { Question } from '../types';

export const vieteQuestions: Question[] = [
  {
    id: 11001,
    topic: 'francois-viete',
    difficulty: 'easy',
    question: 'Viète\'s formula expresses $2/\\pi$ as what type of infinite expression?',
    options: [
      'A nested radicals product: $\\frac{2}{\\pi} = \\frac{\\sqrt{2}}{2} \\cdot \\frac{\\sqrt{2+\\sqrt{2}}}{2} \\cdot \\frac{\\sqrt{2+\\sqrt{2+\\sqrt{2}}}}{2} \\cdots$',
      'An infinite sum of reciprocal odd numbers',
      'A continued fraction with alternating signs',
      'A Fourier series expansion of a square wave',
    ],
    correctIndex: 0,
    explanation: 'Viète (1593) gave the first exact analytic formula for $\\pi$: an infinite product of nested square roots. Each factor uses $a_1 = \\sqrt{2}$, $a_{k+1} = \\sqrt{2 + a_k}$, and $\\frac{2}{\\pi} = \\prod_{k=1}^{\\infty} \\frac{a_k}{2}$. It was the earliest infinite product in mathematics.',
    realWorld: 'Viète\'s formula showed that $\\pi$ could be captured by a systematic algebraic process — a conceptual breakthrough that predated calculus by nearly a century.',
    hint: 'Each factor involves a square root nested inside the previous one — it\'s radicals all the way down.',
  },
  {
    id: 11002,
    topic: 'francois-viete',
    difficulty: 'hard',
    question: 'Viète derived his product for $\\pi$ by inscribing regular polygons in a circle. The key trigonometric identity he exploited was:',
    options: [
      'The half-angle formula: $\\cos(\\theta/2) = \\sqrt{(1 + \\cos\\theta)/2}$, applied recursively to double the polygon\'s sides',
      'The angle addition formula: $\\sin(\\alpha + \\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$',
      'The double angle formula: $\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta$',
      'The product-to-sum identity: $2\\cos\\alpha\\cos\\beta = \\cos(\\alpha-\\beta) + \\cos(\\alpha+\\beta)$',
    ],
    correctIndex: 0,
    explanation: 'Starting with $\\sin\\theta = 2\\sin(\\theta/2)\\cos(\\theta/2)$ applied repeatedly gives $\\frac{\\sin\\theta}{\\theta} = \\prod_{k=1}^{\\infty}\\cos(\\theta/2^k)$. Setting $\\theta = \\pi/2$ and using $\\cos(\\pi/4) = \\sqrt{2}/2$ yields Viète\'s nested radical product.',
    realWorld: 'This recursive doubling technique became a standard method in computational mathematics and directly influenced Euler\'s later product formulas.',
    hint: 'Each polygon doubling halves the angle — the cosine half-angle formula builds the nesting.',
  },
  {
    id: 11003,
    topic: 'francois-viete',
    difficulty: 'sota',
    question: 'Viète\'s product converges to $2/\\pi$ at what rate?',
    options: [
      'Linearly — each additional factor provides roughly one additional bit of accuracy ($O(2^{-n})$ error after $n$ terms)',
      'Quadratically — each term doubles the number of correct digits',
      'Logarithmically — accuracy grows as $O(\\log n)$ after $n$ terms',
      'Cubically — each term triples the number of correct digits, similar to Newton\'s method',
    ],
    correctIndex: 0,
    explanation: 'The partial products converge geometrically with ratio $\\approx 1/2$. After $n$ factors, the error is $O(2^{-n})$: about one binary digit per term. This is far slower than Ramanujan\'s series (~8 decimal digits per term) but was revolutionary for 1593.',
    realWorld: 'Comparing convergence rates: Viète (1 bit/term, 1593) → Wallis (very slow, 1655) → Gregory–Leibniz (very slow, 1671) → Machin (faster, 1706) → Ramanujan (8 digits/term, 1914) → Chudnovsky (14 digits/term, 1989).',
    hint: 'Each nested radical factor adds about one binary digit of precision — linear convergence.',
  },
];
