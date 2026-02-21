import type { Question } from '../types';

export const noetherQuestions: Question[] = [
  {
    id: 10141,
    topic: 'noether',
    difficulty: 'easy',
    question: 'Noether\'s theorem establishes a deep connection between:',
    options: [
      'Symmetries of a physical system and conservation laws',
      'Energy and mass via $E = mc^2$',
      'Wave-particle duality in quantum mechanics',
      'Entropy and the arrow of time',
    ],
    correctIndex: 0,
    explanation: 'Noether\'s theorem (1918) proves that every continuous symmetry of a physical system corresponds to a conserved quantity: time symmetry → energy conservation, spatial symmetry → momentum conservation, rotational symmetry → angular momentum.',
    realWorld: 'Every conservation law in physics (energy, momentum, charge) is a direct consequence of Noether\'s theorem — it unifies all of classical and modern physics.',
    hint: 'If the laws of physics don\'t change over time, what quantity is conserved?',
  },
  {
    id: 10142,
    topic: 'noether',
    difficulty: 'hard',
    question: 'Noether\'s contributions to abstract algebra include founding:',
    options: [
      'The modern theory of rings and ideals, establishing algebra as the study of abstract structures',
      'Group theory and the classification of finite groups',
      'Linear algebra and matrix decomposition',
      'Boolean algebra and propositional logic',
    ],
    correctIndex: 0,
    explanation: 'Noether revolutionized algebra by shifting focus from concrete computations to abstract structures. Her work on ideals, modules, and ascending chain conditions created the framework for all modern algebra.',
    realWorld: 'Modern algebraic geometry, coding theory, and cryptography all rely on the ring and ideal theory Noether pioneered.',
    hint: 'She moved algebra from solving specific equations to studying abstract structures.',
  },
  {
    id: 10143,
    topic: 'noether',
    difficulty: 'sota',
    question: 'Noether\'s second theorem addresses systems with:',
    options: [
      'Infinite-dimensional symmetry groups (gauge symmetries), implying dependencies among equations of motion',
      'Discrete symmetries like parity and time reversal',
      'Finite symmetry groups and their representations',
      'Broken symmetries and the Higgs mechanism',
    ],
    correctIndex: 0,
    explanation: 'While her first theorem links global symmetries to conservation laws, the second theorem shows that gauge (local) symmetries lead to identities between equations of motion — foundational for general relativity and gauge field theories.',
    realWorld: 'The Standard Model of particle physics and general relativity both rely on gauge symmetries described by Noether\'s second theorem.',
    hint: 'Local symmetries are more powerful than global ones — they constrain the theory itself.',
  },
];
