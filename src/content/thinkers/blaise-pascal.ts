import type { Question } from '../types';

export const pascalQuestions: Question[] = [
  {
    id: 12201,
    topic: 'blaise-pascal',
    difficulty: 'easy',
    question: 'Blaise Pascal built a mechanical calculator at age 19. What was it called and what could it do?',
    options: [
      'The Pascaline — it could add and subtract using interlocking gears',
      'The Difference Engine — it computed polynomial functions',
      'The Arithmometer — it performed all four arithmetic operations',
      'The Abacus Mechanica — it used sliding beads on rails',
    ],
    correctIndex: 0,
    explanation: 'Pascal invented the Pascaline in 1642 to help his tax-collector father. It used interlocking gears where each gear had 10 teeth, carrying over to the next digit automatically.',
    realWorld: 'The Pascaline was the ancestor of all mechanical calculators. The carry mechanism Pascal invented is the same principle used in car odometers and analog counters today.',
    hint: 'He built it to help his father with tedious tax calculations in Rouen.',
  },
  {
    id: 12202,
    topic: 'blaise-pascal',
    difficulty: 'hard',
    question: 'Pascal\'s triangle has a remarkable property: the entries in row n give the coefficients of (a+b)^n. What deeper pattern connects it to probability?',
    options: [
      'Row n, entry k equals C(n,k) — the number of ways to choose k items from n, forming the binomial distribution',
      'Each row sums to a prime number, linking it to prime distribution',
      'The diagonals encode Fibonacci numbers which model population growth',
      'The triangle generates all possible permutations of n elements',
    ],
    correctIndex: 0,
    explanation: 'C(n,k) = n!/(k!(n-k)!) counts combinations. In probability, if you flip a fair coin n times, the probability of exactly k heads is C(n,k)/2^n — the binomial distribution emerges directly from Pascal\'s triangle.',
    realWorld: 'Binomial coefficients underpin quality control (defect rates), genetics (allele combinations), options pricing (binomial tree models), and A/B testing in tech.',
    hint: 'Think about flipping coins — how many ways can you get exactly k heads in n flips?',
  },
  {
    id: 12203,
    topic: 'blaise-pascal',
    difficulty: 'sota',
    question: 'Pascal\'s "wager" applied expected value reasoning to theology. In modern decision theory, this argument structure is most closely related to:',
    options: [
      'Maximin under Knightian uncertainty — choosing the action whose worst-case payoff is best when probabilities are unknown',
      'Bayesian updating with strong priors dominating weak evidence',
      'Nash equilibrium in infinite repeated games',
      'Arrow\'s impossibility theorem applied to collective beliefs',
    ],
    correctIndex: 0,
    explanation: 'Pascal argued that even a tiny probability of infinite reward (heaven) makes belief the dominant strategy. Modern decision theorists recognize this as reasoning under deep uncertainty where maximin or expected utility with unbounded payoffs creates paradoxes (similar to the St. Petersburg paradox).',
    realWorld: 'Pascal\'s wager structure appears in climate policy (small probability of catastrophe), AI safety (tiny chance of existential risk), and insurance (rare but devastating events).',
    hint: 'When the stakes are infinite but the probability is unknown, standard expected value breaks down.',
  },
];
