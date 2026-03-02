import type { Question } from '../types';

export const kolmogorovQuestions: Question[] = [
  {
    id: 10161,
    topic: 'andrey-kolmogorov',
    difficulty: 'easy',
    question: 'Kolmogorov\'s axioms of probability (1933) formalize probability as:',
    options: [
      'A measure on a σ-algebra of events satisfying non-negativity, normalization, and countable additivity',
      'The ratio of favorable outcomes to total outcomes',
      'A subjective degree of belief updated by Bayes\' rule',
      'The frequency of an event in infinite trials',
    ],
    correctIndex: 0,
    explanation: 'Kolmogorov grounded probability theory in measure theory with three axioms: $P(A) \\geq 0$, $P(\\Omega) = 1$, and countable additivity for disjoint events. This unified all previous approaches.',
    realWorld: 'Every probabilistic algorithm, from Monte Carlo simulations to Bayesian neural networks, is built on Kolmogorov\'s axiomatic framework.',
    hint: 'He made probability rigorous by treating it as a mathematical measure.',
  },
  {
    id: 10162,
    topic: 'andrey-kolmogorov',
    difficulty: 'hard',
    question: 'Kolmogorov complexity $K(x)$ of a string $x$ is:',
    options: [
      'The length of the shortest program that outputs $x$ on a universal Turing machine',
      'The Shannon entropy of the probability distribution generating $x$',
      'The number of distinct symbols in $x$',
      'The time complexity of the fastest algorithm computing $x$',
    ],
    correctIndex: 0,
    explanation: 'Kolmogorov complexity measures the absolute information content of a string — how compressible it is. A random string has $K(x) \\approx |x|$; a structured string like "000...0" has $K(x) \\approx \\log |x|$.',
    realWorld: 'Kolmogorov complexity underlies data compression, anomaly detection, and the minimum description length principle in machine learning.',
    hint: 'The simplest program that prints a string measures how much pattern the string contains.',
  },
  {
    id: 10163,
    topic: 'andrey-kolmogorov',
    difficulty: 'sota',
    question: 'A fundamental result about Kolmogorov complexity is that it is:',
    options: [
      'Uncomputable — no algorithm can compute $K(x)$ for all strings $x$',
      'Always equal to Shannon entropy for stationary sources',
      'Efficiently approximable to within a constant factor',
      'Dependent on the choice of universal Turing machine',
    ],
    correctIndex: 0,
    explanation: 'If $K(x)$ were computable, we could construct a Berry paradox: "the smallest number not describable in $n$ symbols" — described in fewer than $n$ symbols. This contradiction proves uncomputability.',
    realWorld: 'Practical compression (gzip, zstd) provides upper bounds on $K(x)$, but we can never know the true minimum — a profound limit on knowledge.',
    hint: 'If you could compute the shortest description, you could solve the halting problem.',
  },
];
