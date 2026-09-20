import type { Question } from '../types';

export const sridharaQuestions: Question[] = [
  {
    id: 9264019,
    topic: 'sridhara',
    difficulty: 'easy',
    question: 'Śrīdhara is remembered for an early rule for solving which equations?',
    options: ['Quadratic equations', 'Quintic equations', 'Wave equations', 'Matrix equations'],
    correctIndex: 0,
    explanation: 'Śrīdhara is among the early mathematicians credited with a rule for solving quadratic equations.',
    realWorld: 'Quadratic equations model trajectories, optimization problems, geometry, and countless elementary physical systems.',
    hint: 'Their highest power is two.',
  },
  {
    id: 9264020,
    topic: 'sridhara',
    difficulty: 'hard',
    question: 'Which mathematical activity appears prominently in Śrīdhara’s Patiganita?',
    options: [
      'Arithmetic algorithms and root extraction',
      'Topology of high-dimensional manifolds',
      'Stochastic differential equations',
      'Symbolic logic and model theory',
    ],
    correctIndex: 0,
    explanation: 'The Patiganita presents practical arithmetic algorithms including operations, powers, and square- and cube-root extraction.',
    realWorld: 'Reliable arithmetic algorithms are the historical ancestors of procedures implemented in calculators and numerical software.',
    hint: 'Think practical procedures for computing with numbers.',
  },
  {
    id: 9264021,
    topic: 'sridhara',
    difficulty: 'sota',
    question: 'For ax² + bx + c = 0, what does the discriminant b² − 4ac determine?',
    options: [
      'The number and type of real roots',
      'The degree of the polynomial',
      'The leading coefficient only',
      'The sum of all coefficients',
    ],
    correctIndex: 0,
    explanation: 'The sign of b²−4ac distinguishes two real roots, one repeated real root, or a complex-conjugate pair.',
    realWorld: 'The discriminant is a compact diagnostic used throughout algebra, geometry, and numerical equation solving.',
    hint: 'Its sign tells you what kind of roots to expect.',
    sources: [{ title: 'Sridhara', url: 'https://mathshistory.st-andrews.ac.uk/Biographies/Sridhara/', publisher: 'MacTutor History of Mathematics' }],
    reviewedAt: '2026-09-20',
  },
];
