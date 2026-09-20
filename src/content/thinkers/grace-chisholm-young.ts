import type { Question } from '../types';

export const graceChisholmYoungQuestions: Question[] = [
  {
    id: 9263001,
    topic: 'grace-chisholm-young',
    difficulty: 'easy',
    question: 'Who supervised Grace Chisholm Young’s doctorate at the University of Göttingen?',
    options: ['David Hilbert', 'Felix Klein', 'Georg Cantor', 'Karl Weierstrass'],
    correctIndex: 1,
    explanation: 'Grace Chisholm Young completed her doctorate at Göttingen in 1895 under Felix Klein, one of the leading geometers of the period.',
    realWorld: 'Her path illustrates how international study opened research opportunities that British universities still denied many women.',
    hint: 'Her supervisor was a major figure in geometry and the Erlangen program.',
  },
  {
    id: 9263002,
    topic: 'grace-chisholm-young',
    difficulty: 'hard',
    question: 'What was the subject of Grace Chisholm Young’s doctoral thesis?',
    options: [
      'Measure theory on real intervals',
      'Prime ideals in algebraic fields',
      'Algebraic groups in spherical trigonometry',
      'Boundary-value problems for heat flow',
    ],
    correctIndex: 2,
    explanation: 'Her thesis studied algebraic-group-theoretic questions arising in spherical trigonometry, extending ideas associated with Klein.',
    realWorld: 'Spherical geometry underlies navigation, astronomy, geodesy, and any computation performed on curved surfaces.',
    hint: 'Think geometry on a sphere combined with group structure.',
  },
  {
    id: 9263003,
    topic: 'grace-chisholm-young',
    difficulty: 'sota',
    question: 'Which topic featured prominently in Grace Chisholm Young’s later independent research?',
    options: [
      'Derivatives and differentials of real functions',
      'Spectral theory of random matrices',
      'Elliptic curves over finite fields',
      'Statistical mechanics of spin glasses',
    ],
    correctIndex: 0,
    explanation: 'Young published a series of papers on derivatives and differentials, contributing to the development of real-variable analysis.',
    realWorld: 'Fine properties of derivatives remain important in analysis, optimization, differential equations, and mathematical modeling.',
    hint: 'It concerns how real-valued functions change locally.',
    sources: [{ title: 'Grace Chisholm Young', url: 'https://mathshistory.st-andrews.ac.uk/Biographies/Chisholm_Young/', publisher: 'MacTutor History of Mathematics' }],
    reviewedAt: '2026-09-20',
  },
];
