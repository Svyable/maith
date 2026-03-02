import type { Question } from '../types';

export const subhashKhotQuestions: Question[] = [
  {
    id: 421200,
    topic: 'subhash-khot',
    difficulty: 'sota',
    question: 'What does Khot\'s Unique Games Conjecture (UGC) assert about the hardness of approximating MAX-CUT?',
    options: [
      'The Goemans-Williamson ratio ≈ 0.878 is optimal unless P=NP',
      'MAX-CUT can be approximated within 0.99 in polynomial time',
      'MAX-CUT is solvable exactly in quasi-polynomial time',
      'SDP relaxations always achieve ratio 1 for MAX-CUT'
    ],
    correctIndex: 0,
    explanation: 'The UGC implies that the Goemans-Williamson semidefinite programming algorithm achieves the best possible approximation ratio for MAX-CUT (~0.878), and no polynomial-time algorithm can do better.',
    realWorld: 'This hardness result affects network design, VLSI circuit layout, and any optimization problem reducible to graph cuts.',
    hint: 'Think about what SDP-based algorithms achieve and whether that ceiling is fundamental.'
  },
  {
    id: 4421201,
    topic: 'subhash-khot',
    difficulty: 'sota',
    question: 'In the Unique Games problem, what structural property distinguishes it from general Label Cover?',
    options: [
      'Each constraint is a bijection (permutation) between label sets',
      'All constraints are linear equations over GF(2)',
      'The constraint graph must be bipartite and planar',
      'Labels are restricted to binary values'
    ],
    correctIndex: 0,
    explanation: 'In a Unique Game, every constraint between two variables is a permutation (bijection) on the label set. This "uniqueness" property is what makes the conjecture so powerful and the problem structurally special.',
    realWorld: 'Understanding this structure informs the design of error-correcting codes and probabilistically checkable proofs.',
    hint: 'The word "unique" refers to how each label maps to exactly one satisfying partner.'
  },
  {
    id: 4421202,
    topic: 'subhash-khot',
    difficulty: 'sota',
    question: 'Which major consequence does the Unique Games Conjecture have for the Vertex Cover problem?',
    options: [
      'It is NP-hard to approximate Vertex Cover within any factor better than 2',
      'Vertex Cover becomes solvable in linear time',
      'The LP relaxation integrality gap drops to 1',
      'Vertex Cover reduces to 2-SAT'
    ],
    correctIndex: 0,
    explanation: 'Assuming UGC, Khot and Regev showed that it is NP-hard to approximate Minimum Vertex Cover within any constant factor better than 2, matching the trivial 2-approximation algorithm.',
    realWorld: 'Vertex Cover approximation limits impact network security (minimum monitoring sets) and bioinformatics (protein interaction coverage).',
    hint: 'There is a simple 2-approximation for Vertex Cover. The conjecture asks: can you ever beat it?'
  },
];
