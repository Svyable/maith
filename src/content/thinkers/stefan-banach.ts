import type { Question } from '../types';

export const banachTarskiQuestions: Question[] = [
  {
    id: 20640,
    topic: 'stefan-banach',
    difficulty: 'hard',
    question: 'The Banach-Tarski paradox decomposes a sphere into pieces and reassembles them into two identical spheres. What is the minimum number of pieces required?',
    options: ['5', '3', '7', '12'],
    correctIndex: 0,
    explanation: 'Five pieces suffice (one can be a single point). The pieces are non-measurable sets — they have no well-defined volume, which is how "volume is created."',
    realWorld: 'This result shows that the Axiom of Choice has deeply counterintuitive consequences, informing debates about mathematical foundations.',
    hint: 'It\'s fewer than you\'d expect — the minimum has been proven exactly.',
  },
  {
    id: 20641,
    topic: 'stefan-banach',
    difficulty: 'sota',
    question: 'The Banach-Tarski paradox relies critically on which axiom of set theory?',
    options: ['The Axiom of Choice', 'The Axiom of Infinity', 'The Axiom of Regularity', 'The Axiom of Pairing'],
    correctIndex: 0,
    explanation: 'The Axiom of Choice allows selecting elements from infinitely many sets simultaneously, enabling the construction of non-measurable sets that defy Lebesgue measure.',
    realWorld: 'Without the Axiom of Choice, many "obvious" theorems fail (e.g., every vector space has a basis). Mathematics faces a deep philosophical choice.',
    hint: 'This axiom lets you make infinitely many simultaneous choices — but the consequences are wild.',
  },
  {
    id: 20642,
    topic: 'stefan-banach',
    difficulty: 'easy',
    question: 'The Banach-Tarski paradox is often summarized as: you can cut a pea into pieces and reassemble it into what?',
    options: ['A sphere the size of the Sun', 'Two peas', 'A cube', 'A line'],
    correctIndex: 0,
    explanation: 'The paradox works for any two bounded sets with non-empty interior in 3D — so yes, a pea can theoretically become the Sun.',
    realWorld: 'This is purely mathematical — the "pieces" are so infinitely complex they cannot exist physically.',
    hint: 'The popular version uses a dramatic size comparison.',
  },
];
