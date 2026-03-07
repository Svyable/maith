import type { Question } from '../types';

export const georgeBirkhoffQuestions: Question[] = [
  {
    id: 307001,
    topic: 'george-birkhoff',
    difficulty: 'easy',
    question: 'George Birkhoff is best known in dynamical systems for proving which major result?',
    options: [
      'The ergodic theorem',
      'The prime number theorem',
      'The central limit theorem',
      'The Hahn–Banach theorem'
    ],
    correctIndex: 0,
    explanation: 'Birkhoff’s ergodic theorem showed that time averages along trajectories converge under suitable conditions, making long-run behavior mathematically tractable.',
    realWorld: 'It helps justify using long-run averages in statistical mechanics, simulation, and complex dynamical models.',
    hint: 'Think “time averages” in dynamical systems.',
    symbolLinks: { 'μ': 'mu' },
    formulaLinks: ['birkhoff-ergodic-theorem'],
    glossaryLinks: ['ergodic-theorem', 'measure-preserving-transformation', 'ergodicity'],
  },
  {
    id: 307002,
    topic: 'george-birkhoff',
    difficulty: 'hard',
    question: 'What does the Poincaré–Birkhoff theorem guarantee for an area-preserving twist map of an annulus?',
    options: [
      'At least two fixed points',
      'Exactly one fixed point',
      'No periodic points',
      'A unique invariant measure'
    ],
    correctIndex: 0,
    explanation: 'The theorem guarantees at least two fixed points under the twist and area-preserving assumptions.',
    realWorld: 'This matters in Hamiltonian dynamics and celestial mechanics, where periodic or recurrent motion is studied geometrically.',
    hint: 'It guarantees a minimum number of fixed points.',
    symbolLinks: {},
    formulaLinks: ['poincare-birkhoff-theorem'],
    glossaryLinks: ['twist-map', 'fixed-point', 'hamiltonian-system'],
  },
  {
    id: 307003,
    topic: 'george-birkhoff',
    difficulty: 'sota',
    question: 'Why does Birkhoff’s ergodic theorem still matter in modern computational science?',
    options: [
      'It helps justify estimating expectations from long trajectories instead of inaccessible full ensembles',
      'It proves every optimizer converges globally',
      'It guarantees neural networks are interpretable',
      'It removes all sampling error'
    ],
    correctIndex: 0,
    explanation: 'In simulation and stochastic modeling, one often estimates averages using trajectories rather than complete state-space information.',
    realWorld: 'This appears in MCMC intuition, statistical physics, and long-horizon simulation workflows.',
    hint: 'Think trajectory averages.',
    symbolLinks: { 'μ': 'mu' },
    formulaLinks: ['birkhoff-ergodic-theorem'],
    glossaryLinks: ['ergodicity', 'time-average', 'invariant-measure'],
  },
];
