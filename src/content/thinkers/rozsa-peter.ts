import type { Question } from '../types';

export const rozsaPeterQuestions: Question[] = [
  {
    id: 9262007,
    topic: 'rozsa-peter',
    difficulty: 'easy',
    question: 'Rózsa Péter is remembered as a founder of which mathematical field?',
    options: [
      'Algebraic topology',
      'Stochastic calculus',
      'Projective geometry',
      'Recursive function theory',
    ],
    correctIndex: 3,
    explanation: 'Péter was a Hungarian mathematician and logician who became one of the founders of recursive function theory.',
    realWorld: 'Recursive function theory helped formalize what it means for a procedure to be computable, a foundation of theoretical computer science.',
    hint: 'The field studies functions defined through effective step-by-step rules.',
  },
  {
    id: 9262008,
    topic: 'rozsa-peter',
    difficulty: 'hard',
    question: 'What is the defining pattern of a recursive mathematical definition?',
    options: [
      'Every value is chosen independently from a probability distribution',
      'New values are specified using previously defined, simpler cases',
      'Every formula must be expressible as a finite polynomial',
      'The function is evaluated only by geometric construction',
    ],
    correctIndex: 1,
    explanation: 'Recursive definitions specify base cases and rules for obtaining more complex values from simpler ones. Péter helped turn such ideas into a systematic mathematical theory.',
    realWorld: 'Recursion underlies algorithms for trees, divide-and-conquer methods, parsers, proof systems, and functional programming.',
    hint: 'Think base case plus a rule that reuses earlier results.',
  },
  {
    id: 9262009,
    topic: 'rozsa-peter',
    difficulty: 'sota',
    question: 'Why is recursive function theory important to the foundations of computer science?',
    options: [
      'It proves that every mathematical question has an algorithmic solution',
      'It replaces data structures with continuous differential equations',
      'It gives precise mathematical models for effectively computable functions and their limits',
      'It guarantees that recursive programs always terminate',
    ],
    correctIndex: 2,
    explanation: 'Recursive function theory provides formal classes of computable functions and makes it possible to prove that some problems lie beyond algorithmic computation.',
    realWorld: 'The distinction between computable and non-computable problems shapes programming-language theory, verification, complexity, and automated reasoning.',
    hint: 'The key issue is defining what an algorithm can—and cannot—compute.',
    sources: [{ title: 'Rózsa Péter', url: 'https://mathshistory.st-andrews.ac.uk/Biographies/Peter/', publisher: 'MacTutor History of Mathematics' }],
    reviewedAt: '2026-09-20',
  },
];
