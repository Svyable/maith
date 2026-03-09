import type { Question } from '../types';

export const kennethWilsonQuestions: Question[] = [
  {
    id: 10634,
    topic: 'kenneth-wilson',
    difficulty: 'easy',
    question: 'Kenneth Wilson\'s Nobel Prize was for developing:',
    options: [
      'The renormalization group theory for critical phenomena and phase transitions',
      'The Standard Model of particle physics',
      'String theory and extra dimensions',
      'The Big Bang nucleosynthesis model',
    ],
    correctIndex: 0,
    explanation: 'Wilson showed how physical systems look different at different length scales and developed a systematic way (the renormalization group) to connect microscopic physics to macroscopic behavior near phase transitions.',
    realWorld: 'Wilson\'s ideas explain universal behavior: why boiling water and demagnetizing iron share the same critical exponents despite being completely different systems.',
    hint: 'He explained how physics changes as you zoom in and out.',
  },
  {
    id: 10635,
    topic: 'kenneth-wilson',
    difficulty: 'hard',
    question: 'In Wilson\'s renormalization group, a "fixed point" corresponds to:',
    options: [
      'A scale-invariant theory — physics looks the same at all length scales (a critical point)',
      'A theory with exactly zero coupling constants',
      'The point where all particles have the same mass',
      'A theory that cannot be renormalized',
    ],
    correctIndex: 0,
    explanation: 'At a RG fixed point, the effective theory is unchanged by coarse-graining. This corresponds to a critical point (phase transition) where the correlation length diverges and the system becomes scale-invariant.',
    realWorld: 'Fixed points classify universality classes: systems flowing to the same fixed point share identical critical behavior, regardless of microscopic details.',
    hint: 'The theory looks identical no matter what scale you examine it at.',
  },
  {
    id: 10636,
    topic: 'kenneth-wilson',
    difficulty: 'sota',
    question: 'Wilson\'s lattice gauge theory discretizes spacetime to:',
    options: [
      'Enable non-perturbative computation of QCD — including confinement and hadron masses — via Monte Carlo simulation',
      'Prove that quantum gravity requires extra dimensions',
      'Show that all gauge theories are asymptotically free',
      'Derive the cosmological constant from first principles',
    ],
    correctIndex: 0,
    explanation: 'By placing gauge fields on the links of a spacetime lattice, Wilson made QCD amenable to numerical computation. Lattice QCD now produces ab initio predictions of hadron masses, decay constants, and the QCD phase diagram.',
    realWorld: 'Lattice QCD calculations on supercomputers have predicted the proton mass to within 2% from first principles — a triumph of computational physics.',
    hint: 'Putting QCD on a grid makes it computable by brute-force simulation.',
  },
];
