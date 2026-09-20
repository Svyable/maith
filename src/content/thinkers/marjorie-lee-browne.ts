import type { Question } from '../types';

export const marjorieLeeBrowneQuestions: Question[] = [
  {
    id: 9263007,
    topic: 'marjorie-lee-browne',
    difficulty: 'easy',
    question: 'At which university did Marjorie Lee Browne complete her doctorate in mathematics?',
    options: [
      'University of Michigan',
      'Howard University',
      'Yale University',
      'University of Chicago',
    ],
    correctIndex: 0,
    explanation: 'Browne completed the requirements for her mathematics doctorate at the University of Michigan, making her one of the first Black women in the United States to earn the degree.',
    realWorld: 'Her academic career later helped build advanced mathematics education at North Carolina Central University.',
    hint: 'It is a major public research university in Ann Arbor.',
  },
  {
    id: 9263008,
    topic: 'marjorie-lee-browne',
    difficulty: 'hard',
    question: 'What mathematical structures were central to Browne’s doctoral thesis?',
    options: [
      'Markov chains and martingales',
      'Prime numbers and zeta functions',
      'One-parameter subgroups in topological and matrix groups',
      'Spline bases and wavelet transforms',
    ],
    correctIndex: 2,
    explanation: 'Her thesis studied one-parameter subgroups in certain topological and matrix groups, placing her work in modern algebra and topology.',
    realWorld: 'One-parameter groups appear in continuous symmetries, matrix exponentials, differential equations, and mathematical physics.',
    hint: 'Think continuous families of symmetry transformations.',
  },
  {
    id: 9263009,
    topic: 'marjorie-lee-browne',
    difficulty: 'sota',
    question: 'Which identity characterizes a one-parameter subgroup g(t)?',
    options: [
      'g(t + s) = g(t)g(s)',
      'g(t + s) = g(t) + g(s)',
      'g(ts) = g(t) + g(s)',
      'g(t - s) = g(t)g(s)',
    ],
    correctIndex: 0,
    explanation: 'A one-parameter subgroup is a homomorphism from an additive parameter group into another group, so g(t+s)=g(t)g(s).',
    realWorld: 'This structure describes continuous symmetries and underlies matrix exponentials used in dynamics, robotics, and quantum mechanics.',
    hint: 'Addition in the parameter should correspond to composition in the group.',
    sources: [{ title: 'Marjorie Lee Browne', url: 'https://mathshistory.st-andrews.ac.uk/Biographies/Browne/', publisher: 'MacTutor History of Mathematics' }],
    reviewedAt: '2026-09-20',
  },
];
