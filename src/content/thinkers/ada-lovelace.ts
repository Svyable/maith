import type { Question } from '../types';

export const adaLovelaceQuestions: Question[] = [
  {
    id: 10131,
    topic: 'ada-lovelace',
    difficulty: 'easy',
    question: 'Ada Lovelace is recognized as the first person to:',
    options: [
      'Write an algorithm intended for a machine — the first computer program',
      'Build a mechanical calculator',
      'Prove that machines can solve any mathematical problem',
      'Design an electronic stored-program computer',
    ],
    correctIndex: 0,
    explanation: 'In 1843, Lovelace wrote detailed notes on Babbage\'s Analytical Engine, including an algorithm to compute Bernoulli numbers — widely regarded as the first computer program ever written.',
    realWorld: 'The Ada programming language (used in aviation and defense systems) is named in her honor.',
    hint: 'She wrote instructions for a machine that hadn\'t been built yet.',
  },
  {
    id: 10132,
    topic: 'ada-lovelace',
    difficulty: 'hard',
    question: 'Lovelace\'s key insight beyond Babbage\'s vision was:',
    options: [
      'The Analytical Engine could manipulate symbols, not just numbers — enabling general computation',
      'Mechanical computers would be faster than human calculators',
      'Gears and levers could perform addition and subtraction',
      'Punch cards could store numerical data',
    ],
    correctIndex: 0,
    explanation: 'While Babbage saw his engine as a number cruncher, Lovelace recognized it could manipulate any symbols according to rules — music, text, logic — anticipating the concept of general-purpose computation.',
    realWorld: 'This insight predates Turing\'s universal machine by nearly a century and captures the essence of modern computing.',
    hint: 'She saw beyond arithmetic to something much more general.',
  },
  {
    id: 10133,
    topic: 'ada-lovelace',
    difficulty: 'sota',
    question: '"Lady Lovelace\'s Objection," as discussed by Turing, claims:',
    options: [
      'A machine can only do what we know how to order it to perform — it cannot originate anything',
      'Machines cannot perform arithmetic faster than humans',
      'Mechanical devices cannot store programs internally',
      'Binary logic is insufficient for mathematical reasoning',
    ],
    correctIndex: 0,
    explanation: 'Lovelace argued the Analytical Engine "has no pretensions to originate anything" — it can only follow instructions. Turing addressed this in his 1950 paper, arguing that learning machines could surprise their creators.',
    realWorld: 'Modern LLMs that generate novel poetry and proofs challenge Lovelace\'s objection — though whether they truly "originate" remains debated.',
    hint: 'Can a machine be truly creative, or only follow its programming?',
  },
];
