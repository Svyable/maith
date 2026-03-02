import type { Question } from '../types';

export const eubulidesQuestions: Question[] = [
  {
    id: 20610,
    topic: 'eubulides-of-miletus',
    difficulty: 'hard',
    question: 'Eubulides\' Liar Paradox ("This statement is false") demonstrates which property of self-referential systems?',
    options: ['They can produce undecidable propositions', 'They always converge', 'They are always consistent', 'They can be resolved by adding axioms'],
    correctIndex: 0,
    explanation: 'Self-referential statements can be neither true nor false — they are undecidable within the system. This directly prefigures Gödel\'s Incompleteness Theorem.',
    realWorld: 'The Halting Problem in computer science is essentially the Liar Paradox applied to programs: "Does this program halt?" is undecidable.',
    hint: 'If it\'s true, it\'s false. If it\'s false, it\'s true. What is it?',
  },
  {
    id: 20611,
    topic: 'eubulides-of-miletus',
    difficulty: 'sota',
    question: 'The Sorites Paradox ("paradox of the heap") challenges which property of classical logic?',
    options: ['The law of the excluded middle (bivalence) when applied to vague predicates', 'The law of non-contradiction', 'Modus ponens', 'De Morgan\'s laws'],
    correctIndex: 0,
    explanation: 'Classical logic demands every proposition be true or false, but "is it a heap?" has no sharp boundary. This motivated fuzzy logic and supervaluationism.',
    realWorld: 'Fuzzy logic, developed to handle vagueness, powers washing machine controllers, auto-focus cameras, and medical diagnosis systems.',
    hint: 'When does a heap stop being a heap? There\'s no crisp true/false boundary.',
  },
  {
    id: 20612,
    topic: 'eubulides-of-miletus',
    difficulty: 'easy',
    question: 'Eubulides\' "Sorites Paradox" asks: if you remove one grain of sand from a heap, is it still a heap? This is a paradox about:',
    options: ['Vagueness — where exactly is the boundary?', 'Counting errors', 'Sand physics', 'Gravity'],
    correctIndex: 0,
    explanation: 'The paradox exposes that natural-language predicates like "heap" lack sharp boundaries — a fundamental problem for logic and philosophy.',
    realWorld: 'This problem is everywhere: When is someone "tall"? When is a market "crashed"? Vagueness is inescapable in human reasoning.',
    hint: 'No single grain makes the difference, yet removing enough grains destroys the heap.',
  },
];
