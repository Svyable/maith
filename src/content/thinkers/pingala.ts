import type { Question } from '../types';

export const pingalaQuestions: Question[] = [
  {
    id: 9264001,
    topic: 'pingala',
    difficulty: 'easy',
    question: 'Pingala’s Chandaḥsūtra analyzed patterns in what subject?',
    options: ['Sanskrit poetic meter', 'Planetary epicycles', 'Land surveying', 'Commercial arithmetic'],
    correctIndex: 0,
    explanation: 'Pingala studied Sanskrit prosody, classifying meters built from combinations of short and long syllables.',
    realWorld: 'Encoding two kinds of syllables into systematic patterns creates an early setting for combinatorial enumeration.',
    hint: 'His mathematics grew from the structure of verse.',
  },
  {
    id: 9264002,
    topic: 'pingala',
    difficulty: 'hard',
    question: 'In Pingala’s prosodic framework, what does prastāra do?',
    options: [
      'Approximates a square root',
      'Lists all metrical patterns',
      'Measures an eclipse',
      'Solves a cubic equation',
    ],
    correctIndex: 1,
    explanation: 'Prastāra is a systematic procedure for laying out all possible patterns of long and short syllables for a fixed meter length.',
    realWorld: 'Systematic enumeration is a core idea in combinatorics, exhaustive search, coding, and algorithm design.',
    hint: 'Think complete enumeration of two-state patterns.',
  },
  {
    id: 9264003,
    topic: 'pingala',
    difficulty: 'sota',
    question: 'How many long-short patterns exist for a meter with n syllable positions?',
    options: ['n squared', 'n factorial', '2 to the nth power', 'two times n'],
    correctIndex: 2,
    explanation: 'Each syllable position has two choices, so the multiplication principle gives 2ⁿ possible patterns.',
    realWorld: 'The same counting rule appears in bit strings, Boolean assignments, binary codes, and exhaustive search spaces.',
    hint: 'Multiply two choices once for each of n positions.',
    sources: [{ title: 'Counting on the Past: The Birth of Combinatorics in Classical India', url: 'https://doi.org/10.1137/25M180634X', publisher: 'SIAM' }],
    reviewedAt: '2026-09-20',
  },
];
