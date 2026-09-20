import type { Question } from '../types';

export const jiaXianQuestions: Question[] = [
  {
    id: 9264022,
    topic: 'jia-xian',
    difficulty: 'easy',
    question: 'Jia Xian used an early form of which triangular array?',
    options: ['Pascal’s triangle', 'Cayley table', 'Young diagram', 'Latin square'],
    correctIndex: 0,
    explanation: 'Jia Xian used a triangular arrangement of binomial coefficients centuries before Pascal.',
    realWorld: 'Binomial coefficients count combinations and appear in probability, polynomial expansion, and discrete mathematics.',
    hint: 'Each interior entry is formed from two entries above it.',
  },
  {
    id: 9264023,
    topic: 'jia-xian',
    difficulty: 'hard',
    question: 'What computational problem did Jia Xian generalize beyond square and cube roots?',
    options: ['Finding nth roots', 'Sorting integer lists', 'Factoring primes', 'Integrating polynomials'],
    correctIndex: 0,
    explanation: 'Jia Xian generalized root-extraction procedures to nth roots and related polynomial equations.',
    realWorld: 'Root finding remains a central numerical task in engineering, science, optimization, and computational mathematics.',
    hint: 'He extended a procedure from powers two and three to arbitrary powers.',
  },
  {
    id: 9264024,
    topic: 'jia-xian',
    difficulty: 'sota',
    question: 'Jia Xian’s root-extraction method is historically related to which later algorithm?',
    options: ['Ruffini–Horner method', 'Dijkstra algorithm', 'Fast Fourier transform', 'Simplex method'],
    correctIndex: 0,
    explanation: 'Historians identify Jia Xian’s additive-multiplicative root procedure as essentially the method later associated with Ruffini and Horner.',
    realWorld: 'Horner-style evaluation efficiently computes polynomials and supports numerical root-finding routines.',
    hint: 'It is a nested polynomial-evaluation scheme.',
    sources: [{ title: 'Jia Xian', url: 'https://mathshistory.st-andrews.ac.uk/Biographies/Jia_Xian/', publisher: 'MacTutor History of Mathematics' }],
    reviewedAt: '2026-09-20',
  },
];
