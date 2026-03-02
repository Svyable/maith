import type { Question } from '../types';

export const alkashiQuestions: Question[] = [
  {
    id: 11041,
    topic: 'al-kashi',
    difficulty: 'easy',
    question: 'Al-Kashi\'s $\\pi$ computation (1424) was based on what geometric method?',
    options: [
      'Inscribed and circumscribed regular polygons with a huge number of sides — achieving 16 correct decimal digits',
      'An infinite series for the area of a circle',
      'The volume of a sphere compared to its bounding cylinder',
      'Approximating the circumference using elliptic integrals',
    ],
    correctIndex: 0,
    explanation: 'Ghiyath al-Din al-Kashi used a $3 \\times 2^{28}$-sided polygon to compute $\\pi$ to 16 decimal places in his "Treatise on the Circumference" (1424). This was the world record for nearly 200 years and surpassed all European computations of the era.',
    realWorld: 'Al-Kashi\'s work at the Ulugh Beg Observatory in Samarkand was part of the Islamic Golden Age\'s contributions to mathematics that later transmitted to Europe.',
    hint: 'He used the same polygon approach as Archimedes but with far more sides and decimal arithmetic.',
  },
  {
    id: 11042,
    topic: 'al-kashi',
    difficulty: 'hard',
    question: 'Al-Kashi also developed an iterative algorithm for computing $n$th roots. His method anticipated:',
    options: [
      'The Ruffini–Horner method — systematically extracting root digits via polynomial evaluation, predating Horner by 400 years',
      'Newton\'s method for finding roots of equations',
      'The bisection method for root-finding',
      'Cardano\'s formula for cubic roots',
    ],
    correctIndex: 0,
    explanation: 'Al-Kashi\'s algorithm decomposes $\\sqrt[n]{N}$ digit-by-digit using the binomial expansion $(a+b)^n$, subtracting successive terms. This is essentially Horner\'s scheme applied to root extraction — centuries before Horner (1819) or Ruffini (1804).',
    realWorld: 'Al-Kashi computed $\\sin(1°)$ to 18 decimal places using this method — an extraordinary feat of precision arithmetic that enabled accurate astronomical tables.',
    hint: 'Extract the root one digit at a time by expanding $(a+b)^n$ and subtracting — systematic polynomial evaluation.',
  },
  {
    id: 11043,
    topic: 'al-kashi',
    difficulty: 'sota',
    question: 'Al-Kashi\'s precision in computing $\\pi$ and trigonometric values relied on his systematic use of:',
    options: [
      'Decimal fractions with positional notation — one of the earliest systematic uses, enabling arbitrary-precision computation',
      'Sexagesimal (base-60) arithmetic inherited from Babylonian astronomy',
      'Symbolic algebra with abstract variables',
      'Logarithmic tables to reduce multiplication to addition',
    ],
    correctIndex: 0,
    explanation: 'Al-Kashi\'s "Key of Arithmetic" (1427) systematically used decimal fractions with full positional notation, predating European adoption by over a century. This enabled his unprecedented computational precision — the key infrastructure for his $\\pi$ and trigonometric calculations.',
    realWorld: 'Decimal arithmetic, transmitted from Islamic mathematicians to Europe via Fibonacci and others, became the foundation of modern computation, accounting, and science.',
    hint: 'His computational infrastructure — the number system itself — was his secret weapon for precision.',
  },
];
