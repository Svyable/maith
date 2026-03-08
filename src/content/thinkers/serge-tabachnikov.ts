import type { Question } from '../types';

export const sergeTabachnikovQuestions: Question[] = [
  {
    id: 307031,
    topic: 'serge-tabachnikov',
    difficulty: 'easy',
    question: 'Serge Tabachnikov’s contribution here is best described as a collection of open problems in what area?',
    options: [
      'Billiards, symplectic billiards, and related geometric optics',
      'Algebraic statistics only',
      'Category theory only',
      'Numerical linear algebra only'
    ],
    correctIndex: 0,
    explanation: 'His section ranges widely across projective billiards, symplectic billiards, optical transformations, wave fronts, and Ivrii-type conjectures.',
    realWorld: 'These problems connect geometry, optics, Hamiltonian systems, symbolic dynamics, and convexity.',
    hint: 'Think many flavors of billiards.',
    symbolLinks: { 'p': 'pi' },
    formulaLinks: ['projective-billiard-reflection-law', 'complexity-function', 'optical-symplectic-transformation'],
    glossaryLinks: ['projective-billiard', 'symplectic-billiard', 'complexity-function'],
  },
  {
    id: 307032,
    topic: 'serge-tabachnikov',
    difficulty: 'hard',
    question: 'One of Tabachnikov’s major questions asks when a projective billiard has what additional structure?',
    options: [
      'An invariant symplectic form and a variational description',
      'A unique fixed point at the center',
      'A Euclidean metric of constant curvature',
      'No periodic trajectories at all'
    ],
    correctIndex: 0,
    explanation: 'He asks when projective billiards admit invariant symplectic forms and, relatedly, variational formulations.',
    realWorld: 'That would place projective billiards much closer to the classical Hamiltonian billiard framework.',
    hint: 'Think symplectic and variational.',
    symbolLinks: {},
    formulaLinks: ['projective-billiard-reflection-law'],
    glossaryLinks: ['projective-billiard', 'variational-principle', 'invariant-symplectic-form'],
  },
  {
    id: 307033,
    topic: 'serge-tabachnikov',
    difficulty: 'sota',
    question: 'Why do Tabachnikov’s problems matter broadly across dynamics and geometry?',
    options: [
      'Because they link billiards to symplectic topology, optical geometry, symbolic complexity, convex approximation, and measure-zero periodic-orbit conjectures',
      'Because they reduce all billiards to circles',
      'Because they show every optical map is realized by one mirror',
      'Because they remove the need for symplectic structures'
    ],
    correctIndex: 0,
    explanation: 'His problems are unifying: they connect invariant forms, complexity growth, optical symplectic maps, approximation theory, and Ivrii-type measure questions.',
    realWorld: 'This is exactly the kind of cross-pollination that makes billiards a hub subject in modern geometry and dynamics.',
    hint: 'The breadth is the point.',
    symbolLinks: {},
    formulaLinks: ['complexity-function', 'ivrii-conjecture-outer-symplectic-billiards', 'optical-symplectic-transformation'],
    glossaryLinks: ['ivrii-conjecture', 'outer-symplectic-billiard', 'space-of-oriented-lines'],
  },
];
