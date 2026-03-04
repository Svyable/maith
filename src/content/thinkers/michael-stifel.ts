import type { Question } from '../types';

export const michaelStifelQuestions: Question[] = [
  {
    id: 80901, topic: 'michael-stifel', difficulty: 'easy',
    question: 'Michael Stifel\'s "Arithmetica integra" (1544) introduced which important mathematical term?',
    options: ['"Exponent" — the power to which a number is raised', '"Variable" — a letter representing an unknown', '"Function" — a mapping between sets', '"Matrix" — a rectangular array of numbers'],
    correctIndex: 0,
    explanation: 'Stifel was the first to use the word "exponent" and to systematically treat powers of numbers as a unified concept. He connected geometric and arithmetic sequences through their exponents.',
    realWorld: 'Exponential notation is foundational to all of modern science — from compound interest ($A = Pe^{rt}$) to radioactive decay to computational complexity ($O(2^n)$).',
    hint: 'This term describes the superscript number in expressions like $2^3 = 8$.',
  },
  {
    id: 80902, topic: 'michael-stifel', difficulty: 'hard',
    question: 'Stifel\'s "Arithmetica integra" pioneered which notational convention in European mathematics?',
    options: [
      'Multiplication by juxtaposition — writing $ab$ instead of $a \\times b$',
      'Using parentheses for grouping expressions',
      'The decimal point for fractions',
      'Subscript notation for sequences',
    ],
    correctIndex: 0,
    explanation: 'Stifel was the first European mathematician to systematically denote multiplication by simply placing terms next to each other (juxtaposition). This convention remains standard in algebra: $3x$ means $3 \\times x$.',
    realWorld: 'Every algebra textbook, physics equation ($F = ma$, $E = mc^2$), and programming expression implicitly inherits this notational convention.',
    hint: 'In $F = ma$, how do you know that $m$ and $a$ are multiplied? There\'s no explicit operator.',
  },
  {
    id: 80903, topic: 'michael-stifel', difficulty: 'sota',
    question: 'Stifel recognized that the laws of exponents ($a^m \\cdot a^n = a^{m+n}$) create a correspondence between which two types of sequences?',
    options: [
      'Geometric sequences (multiplication) and arithmetic sequences (addition) — foreshadowing logarithms',
      'Fibonacci sequences and prime sequences',
      'Convergent and divergent series',
      'Rational and irrational number sequences',
    ],
    correctIndex: 0,
    explanation: 'Stifel observed that multiplying terms in a geometric sequence corresponds to adding their exponents — an arithmetic operation. This insight, $a^m \\cdot a^n = a^{m+n}$, is precisely the principle that Napier would later formalize as logarithms (1614).',
    realWorld: 'Logarithms transformed computation for 400 years. The slide rule, decibel scale, Richter scale, and pH scale all exploit this geometric↔arithmetic correspondence.',
    hint: 'If powers multiply by adding exponents, then there\'s a map from multiplication to addition. What is that map called?',
  },
];
