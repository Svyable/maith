import type { Question } from '../types';

export const addyProssQuestions: Question[] = [
  {
    id: 307004,
    topic: 'addy-pross',
    difficulty: 'easy',
    question: 'What concept is most strongly associated with Addy Pross’s work on the origin of life?',
    options: [
      'Dynamic kinetic stability',
      'Noether symmetry',
      'Renormalization flow',
      'Geodesic completeness'
    ],
    correctIndex: 0,
    explanation: 'Pross is known for dynamic kinetic stability, a framework for understanding how replicating systems persist through ongoing processes rather than static equilibrium.',
    realWorld: 'It helps explain why living systems persist only while matter and energy keep flowing through them.',
    hint: 'It is a type of stability, but not equilibrium.',
    symbolLinks: {},
    formulaLinks: ['dynamic-kinetic-stability'],
    glossaryLinks: ['dynamic-kinetic-stability', 'replicator', 'abiogenesis'],
  },
  {
    id: 307005,
    topic: 'addy-pross',
    difficulty: 'hard',
    question: 'In Pross’s framework, what distinguishes a dynamically kinetically stable system from a thermodynamically stable one?',
    options: [
      'It persists through turnover and replication rather than by resting at equilibrium',
      'It contains no chemical reactions',
      'It always minimizes entropy locally',
      'It can exist without energy flow'
    ],
    correctIndex: 0,
    explanation: 'Dynamic kinetic stability is about persistence through continual driven regeneration, unlike thermodynamic stability which is associated with equilibrium or low free energy.',
    realWorld: 'Cells and replicating chemical networks persist because they are continuously maintained, not because they are inert.',
    hint: 'One is active stability, one is passive stability.',
    symbolLinks: { 'ΔG': 'delta' },
    formulaLinks: ['dynamic-kinetic-stability'],
    glossaryLinks: ['thermodynamic-stability', 'dynamic-kinetic-stability', 'dissipative-system'],
  },
  {
    id: 307006,
    topic: 'addy-pross',
    difficulty: 'sota',
    question: 'Why is Addy Pross frequently cited in systems chemistry and origin-of-life research?',
    options: [
      'Because his framework links chemistry, replication, and selection into a unified account of lifelike emergence',
      'Because he disproved Darwinian evolution',
      'Because he showed equilibrium chemistry fully explains biology',
      'Because he replaced kinetics with pure information theory'
    ],
    correctIndex: 0,
    explanation: 'Pross is influential because he connects chemical replication, persistence, and selection in a way that bridges chemistry and biology.',
    realWorld: 'His ideas appear in discussions of autocatalysis, protocells, and prebiotic evolution.',
    hint: 'Think chemistry plus selection.',
    symbolLinks: {},
    formulaLinks: ['dynamic-kinetic-stability', 'replicator-growth-equation'],
    glossaryLinks: ['systems-chemistry', 'autocatalysis', 'dynamic-kinetic-stability'],
  },
];
