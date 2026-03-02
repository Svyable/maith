// koch.ts
import type { Question } from '../types';

export const robertKochQuestions: Question[] = [
  {
    id: 50020,
    topic: 'robert-koch',
    difficulty: 'easy',
    question: 'Koch isolated causative agent of?',
    options: [
      'Tuberculosis (Mycobacterium tuberculosis)',
      'Plague (Yersinia pestis)',
      'Syphilis (Treponema pallidum)',
      'Cholera (Vibrio cholerae)'
    ],
    correctIndex: 0,
    explanation: '1882 pure culture from lung tissue; Koch\'s postulates established.',
    realWorld: 'TB kills 1.5M/year; still major killer.',
    hint: 'Waxy acid-fast bacillus in lungs.',
  },
  {
    id: 50021,
    topic: 'robert-koch',
    difficulty: 'hard',
    question: 'Koch\'s Postulates require?',
    options: [
      '1. Found in all cases 2. Pure culture causes disease 3. Re-isolate same organism',
      'Antibody response',
      'PCR detection',
      '16S rRNA sequencing'
    ],
    correctIndex: 0,
    explanation: '$\\text{Agent} \\rightarrow \\text{healthy} \\rightarrow \\text{disease} \\rightarrow \\text{same agent}$',
    realWorld: 'Gold standard causality (with molecular updates).',
    hint: 'Prove germ causes disease systematically.',
  },
  {
    id: 50022,
    topic: 'robert-koch',
    difficulty: 'sota',
    question: 'Koch\'s TB inoculation experiments?',
    options: [
      '$10^2$ guinea pigs; $10^6$ bacilli = 100% mortality in 5 weeks',
      'Human volunteers',
      'Cell culture',
      'Antibiotic treatment'
    ],
    correctIndex: 0,
    explanation: 'Dose-response: $LD_{50} \\approx 10^4$ bacilli; pure culture fulfills postulates.',
    realWorld: 'Quantified infectious dose concept.',
    hint: 'Infected animals with precise bacteria counts.',
  }
];
