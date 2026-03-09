import type { Question } from '../types';

export const chenNingYangQuestions: Question[] = [
  {
    id: 10607,
    topic: 'chen-ning-yang',
    difficulty: 'easy',
    question: 'Yang and Lee\'s Nobel Prize-winning discovery showed that:',
    options: [
      'Parity (mirror symmetry) is violated in weak interactions',
      'Energy is always conserved in nuclear reactions',
      'The strong force is mediated by gluons',
      'Electrons orbit the nucleus in quantized shells',
    ],
    correctIndex: 0,
    explanation: 'In 1956, Yang and Lee proposed that the weak force does not respect parity symmetry — a left-right mirror image of a weak decay process does not occur with equal probability. Wu confirmed this experimentally in 1957.',
    realWorld: 'Parity violation explains why neutrinos are always left-handed — nature has a built-in handedness at the fundamental level.',
    hint: 'Think about whether the weak force treats left and right the same.',
  },
  {
    id: 10608,
    topic: 'chen-ning-yang',
    difficulty: 'hard',
    question: 'Yang-Mills theory describes:',
    options: [
      'Non-abelian gauge fields — the mathematical framework underlying the Standard Model',
      'Classical gravitational fields in curved spacetime',
      'Abelian gauge theory like electromagnetism only',
      'Thermodynamic phase transitions in magnetic materials',
    ],
    correctIndex: 0,
    explanation: 'Yang-Mills theory (1954) generalizes electromagnetism to non-abelian (non-commuting) symmetry groups. It is the foundation for both QCD (SU(3) color) and electroweak theory (SU(2)×U(1)).',
    realWorld: 'Proving that Yang-Mills theory has a "mass gap" is one of the seven Millennium Prize Problems worth $1 million.',
    hint: 'It generalizes Maxwell\'s equations to non-commuting gauge groups.',
  },
  {
    id: 10609,
    topic: 'chen-ning-yang',
    difficulty: 'sota',
    question: 'The Yang-Baxter equation $R_{12}R_{13}R_{23} = R_{23}R_{13}R_{12}$ is fundamental to:',
    options: [
      'Exactly solvable models in statistical mechanics and quantum groups',
      'Perturbative QCD calculations at high energy',
      'Classical orbital mechanics',
      'Shannon entropy in information theory',
    ],
    correctIndex: 0,
    explanation: 'The Yang-Baxter equation ensures consistency of particle scattering in 1+1D integrable models. It connects to quantum groups, knot theory, and topological quantum computation.',
    realWorld: 'Solutions to the Yang-Baxter equation are used in designing topological quantum error-correcting codes.',
    hint: 'It governs when scattering of three particles is consistent regardless of order.',
  },
];
