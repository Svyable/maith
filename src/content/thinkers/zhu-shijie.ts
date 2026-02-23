import type { Question } from '../types';

export const zhuShijieQuestions: Question[] = [
  {
    id: 9607,
    topic: 'zhu-shijie',
    difficulty: 'sota',
    question: 'Zhu Shijie\'s tiān yuán shù (天元术) system for four unknowns arranged variables in:',
    options: [
      'A cross/diamond pattern: x up, y down, z left, w right from the constant term',
      'A simple left-to-right linear sequence',
      'Matrix rows and columns like modern linear algebra',
      'A hierarchical tree structure',
    ],
    correctIndex: 0,
    explanation: 'The "four elements method" placed coefficients on a 2D grid with the constant at center, and four unknowns along cardinal directions. This spatial arrangement allowed systematic elimination — a proto-symbolic algebra.',
    realWorld: 'This spatial coefficient method anticipated the systematic approach of modern computer algebra systems that manipulate multivariate polynomials by tracking coefficient positions.',
    hint: 'Think of a compass rose with the constant at the center and each unknown assigned a cardinal direction.',
  },
  {
    id: 9608,
    topic: 'zhu-shijie',
    difficulty: 'sota',
    question: 'Zhu Shijie\'s Jade Mirror of the Four Unknowns (1303) contains a triangular array of binomial coefficients. This is equivalent to:',
    options: [
      'Pascal\'s triangle — published 350 years before Pascal',
      'Fibonacci\'s sequence arranged in rows',
      'A multiplication table rotated 45°',
      'Euler\'s totient function values',
    ],
    correctIndex: 0,
    explanation: 'The "Gǔ Fǎ Qī Chéng Fāng Tú" in Jade Mirror displays $\\binom{n}{k}$ in triangular form, with the binomial theorem for $(a+b)^n$ — three centuries before Blaise Pascal\'s Traité (1654).',
    realWorld: 'Pascal\'s triangle appears in probability theory, combinatorics, fractal geometry (Sierpinski triangle mod 2), and polynomial expansion — one of the most useful structures in mathematics.',
    hint: 'Each entry is the sum of the two entries above it — a pattern that generates binomial coefficients.',
  },
  {
    id: 9609,
    topic: 'zhu-shijie',
    difficulty: 'sota',
    question: 'Zhu Shijie\'s summation formulas included the result $\\sum_{k=1}^{n} k^2 =$:',
    options: [
      '$\\frac{n(n+1)(2n+1)}{6}$',
      '$\\frac{n(n+1)}{2}$',
      '$\\frac{n^2(n+1)^2}{4}$',
      '$n^3/3$',
    ],
    correctIndex: 0,
    explanation: 'Zhu derived formulas for sums of consecutive powers (1st through 4th) using finite differences — the same results Euler and Bernoulli would formalize centuries later with Bernoulli numbers.',
    realWorld: 'Power sum formulas are essential in statistics (computing variance), physics (moment of inertia calculations), and computer science (algorithm analysis).',
    hint: 'This is the well-known formula for the sum of squares — a cubic polynomial in $n$.',
  },
];
