import type { Question } from '../types';

export const muhammadAlKhwarizmiQuestions: Question[] = [
  {
    id: 10121,
    topic: 'muhammad-al-khwarizmi',
    difficulty: 'easy',
    question: 'Al-Khwarizmi\'s book "Al-Jabr" introduced:',
    options: [
      'Systematic methods for solving linear and quadratic equations — the foundation of algebra',
      'The concept of zero and negative numbers',
      'Trigonometric functions for astronomical calculations',
      'The decimal place-value number system',
    ],
    correctIndex: 0,
    explanation: 'Al-Khwarizmi\'s 9th-century treatise "Al-Kitab al-Mukhtasar fi Hisab al-Jabr wal-Muqabala" gave us the word "algebra" (from al-jabr, meaning "completion") and systematic equation-solving methods.',
    realWorld: 'The word "algorithm" itself derives from the Latin form of Al-Khwarizmi\'s name — he literally invented the concept.',
    hint: 'The word "algebra" comes directly from the title of his book.',
  },
  {
    id: 10122,
    topic: 'muhammad-al-khwarizmi',
    difficulty: 'hard',
    question: 'Al-Khwarizmi solved quadratic equations using:',
    options: [
      'Geometric completion of squares — literally completing a geometric square',
      'The modern quadratic formula with discriminant',
      'Factoring over the rationals',
      'Newton\'s method of successive approximation',
    ],
    correctIndex: 0,
    explanation: 'Al-Khwarizmi used geometric reasoning: to solve $x^2 + 10x = 39$, he drew a square of side $x$, added rectangles of width 5, then "completed" the figure into a larger square, reading off $x = 3$.',
    realWorld: 'The geometric "completing the square" technique is still taught today and is the foundation for deriving the quadratic formula.',
    hint: 'He literally drew squares and rectangles to visualize the algebra.',
  },
  {
    id: 10123,
    topic: 'muhammad-al-khwarizmi',
    difficulty: 'sota',
    question: 'Al-Khwarizmi\'s transmission of the Hindu-Arabic numeral system to the Islamic world ultimately:',
    options: [
      'Replaced Roman numerals in Europe, enabling positional arithmetic and modern computation',
      'Introduced irrational numbers to Western mathematics',
      'Created the first mechanical calculator',
      'Established the foundations of calculus',
    ],
    correctIndex: 0,
    explanation: 'Al-Khwarizmi\'s "On the Calculation with Hindu Numerals" introduced the decimal place-value system (0-9) to the Islamic world, which then spread to Europe via Fibonacci, replacing cumbersome Roman numeral arithmetic.',
    realWorld: 'Every computer, phone, and calculator uses the positional number system Al-Khwarizmi popularized — without it, modern computation is unthinkable.',
    hint: 'Think about what number system we use today and how it reached Europe.',
  },
];
