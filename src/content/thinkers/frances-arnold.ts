import type { Question } from '../types';

export const francesArnoldQuestions: Question[] = [
  {
    id: 9263019,
    topic: 'frances-arnold',
    difficulty: 'easy',
    question: 'What work earned Frances Arnold half of the 2018 Nobel Prize in Chemistry?',
    options: [
      'Discovery of graphene',
      'Development of lithium batteries',
      'Synthesis of buckminsterfullerene',
      'Directed evolution of enzymes',
    ],
    correctIndex: 3,
    explanation: 'Arnold received half of the 2018 Nobel Prize in Chemistry for pioneering the directed evolution of enzymes.',
    realWorld: 'Directed evolution has produced enzymes for pharmaceuticals, cleaner chemical manufacturing, renewable fuels, and new-to-nature reactions.',
    hint: 'She adapted the logic of biological evolution to laboratory protein engineering.',
  },
  {
    id: 9263020,
    topic: 'frances-arnold',
    difficulty: 'hard',
    question: 'What cycle best describes directed evolution in the laboratory?',
    options: [
      'Mutate variants, screen or select them, then repeat',
      'Solve a protein structure once, then stop',
      'Heat a protein until only one sequence remains',
      'Translate every gene without measuring function',
    ],
    correctIndex: 0,
    explanation: 'Directed evolution iterates mutation and selection or screening, retaining improved variants and using them as parents for later rounds.',
    realWorld: 'The method is useful when the mapping from protein sequence to desired function is too complex for reliable direct design.',
    hint: 'It mirrors variation and selection across repeated generations.',
  },
  {
    id: 9263021,
    topic: 'frances-arnold',
    difficulty: 'sota',
    question: 'Why can directed evolution outperform purely rational protein design?',
    options: [
      'It guarantees the globally optimal protein in one round',
      'It experimentally searches sequence space under selection',
      'It removes the need to measure protein function',
      'It restricts mutations to residues already understood',
    ],
    correctIndex: 1,
    explanation: 'Directed evolution can discover beneficial sequence combinations experimentally even when protein structure-function relationships are too complex to predict accurately in advance.',
    realWorld: 'This makes it powerful for engineering catalysts that work in unusual solvents, temperatures, substrates, or industrial processes.',
    hint: 'The method can search before theory can fully predict.',
    sources: [{ title: 'Frances H. Arnold – Facts – 2018', url: 'https://www.nobelprize.org/prizes/chemistry/2018/arnold/facts/', publisher: 'Nobel Prize Outreach' }],
    reviewedAt: '2026-09-20',
  },
];
