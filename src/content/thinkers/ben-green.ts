import type { Question } from '../types';

export const benGreenQuestions: Question[] = [
  {
    id: 21260,
    topic: 'ben-green',
    difficulty: 'sota',
    question: 'The Green-Tao theorem proves what about prime numbers and arithmetic progressions?',
    options: [
      'The primes contain arbitrarily long arithmetic progressions',
      'Every arithmetic progression contains infinitely many primes',
      'The largest gap between consecutive primes is bounded by log²(n)',
      'There are infinitely many twin primes'
    ],
    correctIndex: 0,
    explanation: 'Green and Tao proved that for every k, there exist k prime numbers forming an arithmetic progression. This was a landmark result combining additive combinatorics with analytic number theory.',
    realWorld: 'The techniques developed for this proof advanced pseudorandomness theory, which is fundamental to cryptographic security and randomized algorithms.',
    hint: 'For k=3: {3,5,7}. For k=5: {5,11,17,23,29}. The theorem says this never stops.'
  },
  {
    id: 21261,
    topic: 'ben-green',
    difficulty: 'sota',
    question: 'Green-Tao\'s proof crucially relies on a generalization of which combinatorial theorem?',
    options: [
      'Szemerédi\'s theorem on arithmetic progressions in dense sets',
      'Ramsey\'s theorem on monochromatic subgraphs',
      'The Hales-Jewett theorem on combinatorial lines',
      'Van der Waerden\'s theorem on coloring integers'
    ],
    correctIndex: 0,
    explanation: 'Szemerédi\'s theorem states that any set of integers with positive upper density contains arbitrarily long arithmetic progressions. Green and Tao extended this to work for the primes, which have density zero, using a transference principle.',
    realWorld: 'The transference principle technique has since been applied broadly in additive combinatorics and theoretical computer science.',
    hint: 'Primes have density 0, so the classical theorem doesn\'t apply directly — a transfer principle bridges the gap.'
  },
  {
    id: 21262,
    topic: 'ben-green',
    difficulty: 'sota',
    question: 'What is the "transference principle" that Green and Tao developed?',
    options: [
      'A method to transfer density results from dense sets to sparse pseudorandom sets',
      'A technique to convert additive problems into multiplicative ones',
      'A way to move between p-adic and real analysis',
      'A functor between algebraic and topological categories'
    ],
    correctIndex: 0,
    explanation: 'The transference principle shows that if a sparse set (like the primes) is "pseudorandom" relative to a dense majorant, then combinatorial results that hold for dense sets also hold for the sparse set.',
    realWorld: 'This principle has become a general tool in combinatorics, applicable to problems far beyond prime numbers.',
    hint: 'The primes are sparse but "well-distributed" enough to inherit properties of dense sets.'
  },
];
