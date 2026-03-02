// levin.ts
import type { Question } from '../types';

export const leonidLevinQuestions: Question[] = [
  {
    id: 67040,
    topic: 'leonid-levin',
    difficulty: 'easy',
    question:
      'Leonid Levin independently developed NP-completeness around the same time as Cook. What is the Cook–Levin theorem’s core claim (Levin’s parallel result)?',
    options: [
      'SAT is NP-complete (every NP problem reduces to satisfiability)',
      'P = NP',
      'All NP problems are undecidable',
      'Graph coloring is in P'
    ],
    correctIndex: 0,
    explanation:
      'Levin’s work in the USSR paralleled Cook’s: SAT is NP-complete under polynomial-time reductions.',
    realWorld:
      'This anchors the entire NP-completeness theory used in modern algorithms and cryptography.',
    hint:
      'Same flagship result: SAT is the first NP-complete problem.'
  },
  {
    id: 67041,
    topic: 'leonid-levin',
    difficulty: 'hard',
    question:
      'Levin is also associated with “Levin search” (universal search). What is the main idea?',
    options: [
      'Dovetail over programs, allocating time proportional to $2^{-|p|}$ so shorter candidate programs get exponentially more resources',
      'Run the longest program first because it is more expressive',
      'Use gradient descent to search program space',
      'Only search proofs, never algorithms'
    ],
    correctIndex: 0,
    explanation:
      'Universal search enumerates candidate programs and runs them in an interleaved schedule biased toward short descriptions, achieving near-optimal time up to multiplicative constants for solvable problems.',
    realWorld:
      'Informs theoretical views of automated discovery and relates to Solomonoff induction / algorithmic probability.',
    hint:
      'Try all programs, but favor short ones heavily.'
  },
  {
    id: 67042,
    topic: 'leonid-levin',
    difficulty: 'hard',
    question:
      'Levin helped formalize average-case complexity. What is the key difference between worst-case NP-hardness and average-case hardness?',
    options: [
      'Worst-case: some inputs are hard; average-case: typical inputs drawn from a distribution are hard with non-negligible probability',
      'Average-case means the algorithm is randomized',
      'Worst-case means inputs are random; average-case means inputs are adversarial',
      'They are identical concepts'
    ],
    correctIndex: 0,
    explanation:
      'Worst-case hardness doesn’t guarantee that random instances are hard. Average-case theory asks hardness under a specified distribution over instances.',
    realWorld:
      'Cryptography cares about average-case hardness: if random keys are easy, security fails even if some rare instances are hard.',
    hint:
      'Average-case depends on a distribution.'
  },
  {
    id: 67043,
    topic: 'leonid-levin',
    difficulty: 'sota',
    question:
      'Levin is one of the names behind “Karp reductions” vs “Levin reductions” in complexity theory discussions. In broad strokes, why do reductions matter?',
    options: [
      'They transfer algorithms and hardness: if $A\\le_p B$, then solving $B$ efficiently implies $A$ can be solved efficiently too',
      'They make all problems solvable in polynomial time',
      'They eliminate the need for proofs of correctness',
      'They only compare memory usage, not time'
    ],
    correctIndex: 0,
    explanation:
      'Reductions are the main tool for comparing problems: they preserve (in)tractability and let us classify large families of problems.',
    realWorld:
      'Used constantly in theory and practice: showing scheduling, routing, and planning variants inherit NP-hardness from known cores.',
    hint:
      'A reduction is a translator between problems.'
  },
  {
    id: 67044,
    topic: 'leonid-levin',
    difficulty: 'sota',
    question:
      'Levin also contributed to algorithmic information theory. Which expression is the rough idea of (prefix-free) Kolmogorov complexity $K(x)$?',
    options: [
      '$K(x)=\\min\\{|p|: U(p)=x\\}$, the length of the shortest program $p$ producing $x$ on a fixed universal machine $U$',
      '$K(x)=\\max\\{|p|: U(p)=x\\}$, the longest program producing $x$',
      '$K(x)=\\log_2(\\#\\text{characters in }x)$',
      '$K(x)$ is always computable exactly by exhaustive search'
    ],
    correctIndex: 0,
    explanation:
      'Kolmogorov complexity measures description length: how compressible $x$ is. Levin contributed to related notions (e.g., Levin complexity / Kt) tying description length to computation time.',
    realWorld:
      'Provides a formal lens on compression, randomness, and “Occam’s razor” in learning theory.',
    hint:
      'Shortest program that outputs the string.'
  }
];