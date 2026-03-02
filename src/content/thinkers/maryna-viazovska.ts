import type { Question } from '../types';

export const viazovskaQuestions: Question[] = [
  {
    id: 21240, topic: 'maryna-viazovska', difficulty: 'sota',
    question: 'Viazovska proved the optimal sphere packing in 8 dimensions uses which lattice?',
    options: ['The $E_8$ lattice', 'The Leech lattice', 'The $D_8$ lattice', 'The Barnes-Wall lattice'],
    correctIndex: 0,
    explanation: 'In 2016, Viazovska proved that the $E_8$ lattice achieves the densest sphere packing in 8 dimensions, with density $\\pi^4/384 \\approx 0.2537$. She found a magical modular form that serves as the auxiliary function in the linear programming bound.',
    realWorld: '$E_8$ packing appears in error-correcting codes used in deep space communications and quantum computing lattice codes.',
    hint: 'This exceptional Lie group lattice has 240 nearest neighbors per sphere.',
  },
  {
    id: 21241, topic: 'maryna-viazovska', difficulty: 'sota',
    question: 'Shortly after her $E_8$ result, Viazovska and collaborators solved sphere packing in which other dimension?',
    options: ['24 dimensions (Leech lattice)', '16 dimensions', '32 dimensions', '12 dimensions'],
    correctIndex: 0,
    explanation: 'Within a week of her $E_8$ proof, Viazovska collaborated with Cohn, Kumar, Miller, and Radchenko to prove the Leech lattice is optimal in 24 dimensions — the only other dimension where the exact answer is known (besides 1, 2, 3).',
    realWorld: 'The Leech lattice connects to the Monster group, moonshine, and string theory — some of the deepest structures in mathematics.',
    hint: 'This lattice was discovered by John Leech and has remarkable connections to sporadic groups.',
  },
  {
    id: 21242, topic: 'maryna-viazovska', difficulty: 'sota',
    question: 'Viazovska\'s proof technique relies on finding a special function from which mathematical theory?',
    options: ['Modular forms (quasimodular Eisenstein series)', 'Algebraic K-theory', 'Morse theory', 'Category theory'],
    correctIndex: 0,
    explanation: 'The key breakthrough was constructing a specific radial Schwartz function whose Fourier transform satisfies precise sign conditions — Viazovska found it using quasimodular forms, a connection no one had anticipated.',
    realWorld: 'Her technique opened new connections between analytic number theory and discrete geometry, inspiring solutions to other optimization problems.',
    hint: 'These are functions on the upper half-plane with special transformation properties under $SL_2(\\mathbb{Z})$.',
  },
];
