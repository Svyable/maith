import type { Question } from '../types';

export const melanieMitchellQuestions: Question[] = [
  {
    id: 21200,
    topic: 'melanie-mitchell',
    difficulty: 'sota',
    question: 'Melanie Mitchell\'s "Copycat" program, developed with Douglas Hofstadter, models which cognitive process?',
    options: ['Analogy-making through fluid concept slippage', 'Logical deduction from axioms', 'Statistical pattern matching on large datasets', 'Symbolic rule-based reasoning'],
    correctIndex: 0,
    explanation: 'Copycat models how humans make analogies by allowing concepts to "slip" fluidly between different contexts — e.g., recognizing that "abc → abd" is analogous to "ijk → ijl" by abstracting the "successor" relationship.',
    realWorld: 'Analogy is considered by many cognitive scientists to be the core of human cognition, yet it remains one of the hardest capabilities for AI to replicate.',
    hint: 'The program solves letter-string analogy puzzles by letting concepts flexibly adapt.',
  },
  {
    id: 21201,
    topic: 'melanie-mitchell',
    difficulty: 'sota',
    question: 'Mitchell argues that modern deep learning systems lack which fundamental capability that humans use effortlessly?',
    options: ['Abstraction and transfer — understanding concepts independent of specific examples', 'Processing speed and memory capacity', 'The ability to learn from large datasets', 'Pattern recognition in images'],
    correctIndex: 0,
    explanation: 'Mitchell emphasizes that while LLMs excel at pattern matching, they struggle with genuine abstraction — understanding the underlying concept well enough to apply it in truly novel situations, as humans do naturally.',
    realWorld: 'This critique explains why AI systems can fail spectacularly on simple variations of problems they appear to "understand."',
    hint: 'Humans can learn a concept from one example and apply it anywhere; current AI often cannot.',
  },
  {
    id: 21202,
    topic: 'melanie-mitchell',
    difficulty: 'sota',
    question: 'Mitchell\'s work on complexity science at the Santa Fe Institute focuses on understanding which phenomenon in complex systems?',
    options: ['How simple rules produce emergent computation in cellular automata and networks', 'How to build faster traditional computers', 'How to optimize database queries', 'How to compress data more efficiently'],
    correctIndex: 0,
    explanation: 'Mitchell studies how complex, intelligent behavior can emerge from simple components following simple rules — with cellular automata, genetic algorithms, and network dynamics as key model systems.',
    realWorld: 'Understanding emergence is crucial for explaining how consciousness arises from neurons, how economies self-organize, and how to build more robust AI.',
    hint: 'Complexity from simplicity — the central mystery of the Santa Fe Institute\'s research program.',
  },
];
