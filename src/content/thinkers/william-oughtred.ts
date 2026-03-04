import type { Question } from '../types';

export const williamOughtredQuestions: Question[] = [
  {
    id: 80801, topic: 'william-oughtred', difficulty: 'easy',
    question: 'William Oughtred introduced which mathematical symbol that is still universally used today?',
    options: ['The × symbol for multiplication', 'The + symbol for addition', 'The = symbol for equality', 'The ÷ symbol for division'],
    correctIndex: 0,
    explanation: 'In his 1631 work "Clavis Mathematicae" (The Key of Mathematics), Oughtred introduced the × symbol for multiplication. Leibniz later objected, preferring · to avoid confusion with x.',
    realWorld: 'The × symbol remains standard in arithmetic worldwide, though programming languages use * and higher mathematics often prefers · or juxtaposition.',
    hint: 'This symbol looks like a rotated + sign and is one of the four basic arithmetic symbols children learn.',
  },
  {
    id: 80802, topic: 'william-oughtred', difficulty: 'hard',
    question: 'Oughtred is also credited with inventing which computational device that was used by engineers until the 1970s?',
    options: ['The slide rule (using logarithmic scales for multiplication)', 'The abacus', 'The mechanical calculator', 'The planimeter'],
    correctIndex: 0,
    explanation: 'Around 1622, Oughtred created the first slide rule by placing two logarithmic scales side by side. By sliding them relative to each other, multiplication reduces to addition of lengths — a physical implementation of $\\log(ab) = \\log a + \\log b$.',
    realWorld: 'Engineers used slide rules to design everything from the Empire State Building to the Apollo spacecraft. Electronic calculators only replaced them in the mid-1970s.',
    hint: 'This analog computing device uses Napier\'s logarithms in physical form.',
  },
  {
    id: 80803, topic: 'william-oughtred', difficulty: 'sota',
    question: 'Oughtred\'s "Clavis Mathematicae" introduced over 150 mathematical symbols. Why is compact notation considered transformative for mathematical progress?',
    options: [
      'It reduces cognitive load, enabling manipulation of abstract structures without re-deriving meaning — notation becomes a tool for thought',
      'It makes papers shorter and cheaper to print',
      'It prevents non-mathematicians from reading proofs',
      'It eliminates the need for definitions',
    ],
    correctIndex: 0,
    explanation: 'As Whitehead noted, "By relieving the brain of all unnecessary work, a good notation sets it free to concentrate on more advanced problems." Oughtred\'s symbolic revolution helped transform mathematics from rhetorical proofs to algebraic manipulation.',
    realWorld: 'Modern programming follows the same principle: good abstractions (functions, types, modules) reduce cognitive load and enable building complex systems.',
    hint: 'Think about how variable names in code serve the same purpose as mathematical symbols — they let you manipulate ideas without holding all details in working memory.',
  },
];
