import type { Question } from '../types';

export const wallisQuestions: Question[] = [
  {
    id: 11011,
    topic: 'john-wallis',
    difficulty: 'easy',
    question: 'Wallis\'s product formula for $\\pi/2$ is:',
    options: [
      '$\\frac{\\pi}{2} = \\prod_{n=1}^{\\infty} \\frac{4n^2}{4n^2 - 1} = \\frac{2}{1}\\cdot\\frac{2}{3}\\cdot\\frac{4}{3}\\cdot\\frac{4}{5}\\cdot\\frac{6}{5}\\cdot\\frac{6}{7}\\cdots$',
      '$\\frac{\\pi}{2} = 1 + \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4} + \\cdots$',
      '$\\frac{\\pi}{2} = \\sqrt{2} \\cdot \\sqrt{2+\\sqrt{2}} \\cdot \\sqrt{2+\\sqrt{2+\\sqrt{2}}} \\cdots$',
      '$\\frac{\\pi}{2} = 1 - \\frac{1}{3} + \\frac{1}{5} - \\frac{1}{7} + \\cdots$',
    ],
    correctIndex: 0,
    explanation: 'Wallis (1655) discovered this product using interpolation of $\\int_0^1 x^n(1-x)^n dx$. Unlike Viète\'s nested radicals, Wallis\'s product uses only rational numbers. It converges very slowly but was the first expression of $\\pi$ as a limit of rational arithmetic.',
    realWorld: 'Wallis\'s product inspired Euler to develop his own product formulas and led to the Gamma function and Beta function — cornerstones of mathematical analysis.',
    hint: 'Each factor is a ratio of consecutive even and odd squared numbers.',
  },
  {
    id: 11012,
    topic: 'john-wallis',
    difficulty: 'hard',
    question: 'The key difference between Viète\'s and Wallis\'s products for $\\pi$ is:',
    options: [
      'Viète uses nested square roots (irrational factors), while Wallis uses only rational number ratios',
      'Viète converges faster than Wallis by an exponential factor',
      'Wallis\'s formula is derived from geometry while Viète\'s is purely algebraic',
      'Wallis\'s formula requires complex numbers while Viète\'s is purely real',
    ],
    correctIndex: 0,
    explanation: 'Viète: $\\frac{2}{\\pi} = \\frac{\\sqrt{2}}{2} \\cdot \\frac{\\sqrt{2+\\sqrt{2}}}{2} \\cdots$ (irrational). Wallis: $\\frac{\\pi}{2} = \\frac{2\\cdot2}{1\\cdot3}\\cdot\\frac{4\\cdot4}{3\\cdot5}\\cdots$ (rational). Wallis is historically important because it showed $\\pi$ could emerge from pure arithmetic without geometric constructions.',
    realWorld: 'This distinction foreshadowed the 1882 proof that $\\pi$ is transcendental (Lindemann) — $\\pi$ cannot be constructed geometrically, yet rational products capture it.',
    hint: 'One product involves $\\sqrt{2+\\sqrt{2+\\cdots}}$, the other involves ratios like $\\frac{4}{3} \\cdot \\frac{4}{5}$.',
  },
  {
    id: 11013,
    topic: 'john-wallis',
    difficulty: 'sota',
    question: 'Wallis derived his product by computing $\\int_0^{\\pi/2} \\sin^n(x)\\,dx$ for integer $n$. The recursion for these integrals yields:',
    options: [
      '$I_n = \\frac{n-1}{n}I_{n-2}$, and the ratio $I_{2n}/I_{2n+1} \\to 1$ gives the Wallis product via the squeeze theorem',
      'A closed form $I_n = \\pi/(2n+1)$ for all odd $n$',
      'A connection to Stirling\'s approximation for $n!$ that directly gives the product',
      'A Fourier coefficient identity that equates $I_n$ to $\\pi/2$ for all even $n$',
    ],
    correctIndex: 0,
    explanation: 'Using integration by parts: $I_n = \\frac{n-1}{n}I_{n-2}$ with $I_0 = \\pi/2$, $I_1 = 1$. Since $I_{2n+1} \\leq I_{2n} \\leq I_{2n-1}$ (by $\\sin^{2n+1} \\leq \\sin^{2n} \\leq \\sin^{2n-1}$), the ratio $I_{2n}/I_{2n+1} \\to 1$, giving $\\frac{\\pi}{2} = \\lim \\prod \\frac{(2k)(2k)}{(2k-1)(2k+1)}$.',
    realWorld: 'This technique of bounding integrals via monotonicity and squeeze became a standard proof method in analysis — used extensively in asymptotic analysis and probability theory.',
    hint: 'Integration by parts gives a two-step recursion; the sandwich theorem does the rest.',
  },
];
