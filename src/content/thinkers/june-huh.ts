import type { Question } from '../types';

export const juneHuhQuestions: Question[] = [
  {
    id: 22050,
    topic: 'june-huh',
    difficulty: 'hard',
    question: 'June Huh\'s Fields Medal work proved the Rota–Welsh conjecture. What does this conjecture assert about the coefficients of the characteristic polynomial of a matroid?',
    options: [
      'They form a log-concave sequence',
      'They are all positive',
      'They alternate in sign with increasing magnitude',
      'They satisfy a Riemann hypothesis analogue',
    ],
    correctIndex: 0,
    explanation: 'Huh proved that the absolute values of the coefficients of the characteristic polynomial of any matroid form a log-concave sequence: $a_k^2 \\geq a_{k-1} a_{k+1}$.',
    realWorld: 'Log-concavity of chromatic polynomial coefficients constrains graph colouring counts used in scheduling algorithms.',
    hint: 'Log-concavity is a condition on consecutive terms: the square of each term dominates the product of its neighbours.',
  },
  {
    id: 22051,
    topic: 'june-huh',
    difficulty: 'sota',
    question: 'Huh\'s proof strategy imports techniques from algebraic geometry into combinatorics. Which key geometric concept did he adapt to the combinatorial setting?',
    options: [
      'Hodge theory (hard Lefschetz and Hodge–Riemann relations)',
      'Étale cohomology and the Weil conjectures',
      'Mori\'s bend-and-break technique',
      'Intersection theory on moduli spaces',
    ],
    correctIndex: 0,
    explanation: 'Huh, with Adiprasito and Katz, developed a combinatorial Hodge theory for matroids, proving analogues of the hard Lefschetz theorem and Hodge–Riemann bilinear relations without an underlying algebraic variety.',
    realWorld: 'This "geometry without geometry" approach has opened new bridges between combinatorics and algebraic geometry.',
    hint: 'The key insight was that Hodge-theoretic structures can exist purely combinatorially.',
  },
  {
    id: 22052,
    topic: 'june-huh',
    difficulty: 'sota',
    question: 'Before mathematics, Huh studied poetry and only entered research math at age 24. His early work with Hironaka concerned which polynomial invariant of hypersurface complements?',
    options: [
      'The Milnor number and its relation to the topological Euler characteristic',
      'The Alexander polynomial of the knot group',
      'The Hilbert polynomial of the coordinate ring',
      'The Kazhdan–Lusztig polynomial',
    ],
    correctIndex: 0,
    explanation: 'Huh\'s first result showed that the Milnor numbers of projective hypersurfaces satisfy log-concavity, establishing the pattern that would lead to his matroid breakthroughs.',
    realWorld: 'Milnor numbers measure singularity complexity and are central to singularity theory in algebraic geometry.',
    hint: 'His earliest log-concavity results were for invariants of singular points on algebraic varieties.',
  },
];
