import type { Question } from '../types';

export const williamJonesQuestions: Question[] = [
  {
    id: 80701, topic: 'william-jones', difficulty: 'easy',
    question: 'William Jones is credited with introducing which famous mathematical symbol in 1706?',
    options: ['The Greek letter π for the ratio of circumference to diameter', 'The ∞ symbol for infinity', 'The Σ symbol for summation', 'The ∫ symbol for integration'],
    correctIndex: 0,
    explanation: 'In his 1706 work "Synopsis Palmariorum Matheseos," Jones was the first to use the Greek letter π to represent the ratio of a circle\'s circumference to its diameter. Euler later popularized it.',
    realWorld: 'Every math, physics, and engineering textbook in the world uses π — arguably the most recognized mathematical symbol after = and +.',
    hint: 'This symbol represents the most famous irrational number, approximately 3.14159…',
  },
  {
    id: 80702, topic: 'william-jones', difficulty: 'hard',
    question: 'Before Jones introduced π, how did mathematicians typically refer to the circle ratio?',
    options: [
      'Verbose phrases like "the quantity which, when the diameter is multiplied by it, yields the circumference"',
      'They used the letter C consistently',
      'They used the Hebrew letter aleph',
      'They had no concept of the ratio at all',
    ],
    correctIndex: 0,
    explanation: 'Before compact notation, mathematicians wrote lengthy descriptions. Jones\'s single-symbol innovation was part of a broader trend toward concise mathematical notation that accelerated mathematical progress.',
    realWorld: 'Good notation doesn\'t just abbreviate — it enables new thinking. Leibniz\'s calculus notation won over Newton\'s precisely because it was more expressive and composable.',
    hint: 'Imagine writing out "that ratio" every time you needed it in a proof.',
  },
  {
    id: 80703, topic: 'william-jones', difficulty: 'sota',
    question: 'Jones\'s "Synopsis Palmariorum Matheseos" (1706) contained an approximation of π derived from which mathematician\'s infinite series?',
    options: [
      'John Machin\'s rapidly converging arctangent formula: $\\frac{\\pi}{4} = 4\\arctan\\frac{1}{5} - \\arctan\\frac{1}{239}$',
      'Leibniz\'s slowly converging series: $\\frac{\\pi}{4} = 1 - \\frac{1}{3} + \\frac{1}{5} - \\cdots$',
      'Euler\'s product formula over primes',
      'Ramanujan\'s rapidly converging series',
    ],
    correctIndex: 0,
    explanation: 'Jones published Machin\'s formula, which converges far faster than the Leibniz series. Machin used it to compute π to 100 decimal places — a record that stood for decades.',
    realWorld: 'Machin-like formulas remained the primary method for computing π digits until the 20th century. Modern algorithms like Chudnovsky\'s converge even faster.',
    hint: 'This formula uses arctangent identities with specific fractions to accelerate convergence.',
  },
];
