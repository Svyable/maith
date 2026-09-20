import type { Question } from '../types';

export const elbertFrankCoxQuestions: Question[] = [
  {
    id: 9263004,
    topic: 'elbert-frank-cox',
    difficulty: 'easy',
    question: 'What historic milestone did Elbert Frank Cox reach in 1925?',
    options: [
      'He founded the first U.S. mathematics journal',
      'He became the first Black college president',
      'He joined the National Academy of Sciences',
      'He became the first African American to earn a PhD in mathematics',
    ],
    correctIndex: 3,
    explanation: 'Cox earned his mathematics doctorate from Cornell University in 1925, becoming the first African American known to receive a PhD in mathematics.',
    realWorld: 'His achievement helped widen the visible path into advanced mathematical research for later generations of Black mathematicians.',
    hint: 'The milestone concerned the highest academic degree in mathematics.',
  },
  {
    id: 9263005,
    topic: 'elbert-frank-cox',
    difficulty: 'hard',
    question: 'What was the topic of Elbert Frank Cox’s doctoral dissertation?',
    options: [
      'Geodesics on curved surfaces',
      'Polynomial solutions of difference equations',
      'Integral transforms for wave equations',
      'Finite groups acting on manifolds',
    ],
    correctIndex: 1,
    explanation: 'Cox’s dissertation was titled “Polynomial Solutions of Difference Equations,” a topic in discrete mathematical analysis.',
    realWorld: 'Difference equations model step-by-step change in algorithms, economics, population models, control systems, and numerical simulation.',
    hint: 'The equations evolve in discrete steps rather than continuously.',
  },
  {
    id: 9263006,
    topic: 'elbert-frank-cox',
    difficulty: 'sota',
    question: 'Which description best distinguishes a difference equation from a differential equation?',
    options: [
      'It describes only geometric constructions',
      'It applies only to random variables',
      'It relates values at discrete indices or steps',
      'It must always have polynomial solutions',
    ],
    correctIndex: 2,
    explanation: 'Difference equations relate values such as x_n and x_{n+1} at discrete indices, while differential equations describe change through derivatives.',
    realWorld: 'Discrete-time control, digital signal processing, numerical methods, and many economic models are naturally written as difference equations.',
    hint: 'Think sequence updates rather than infinitesimal change.',
    sources: [{ title: 'Elbert Cox', url: 'https://mathshistory.st-andrews.ac.uk/Biographies/Cox_Elbert/', publisher: 'MacTutor History of Mathematics' }],
    reviewedAt: '2026-09-20',
  },
];
