import type { Question } from '../types';

export const bhaskaraIQuestions: Question[] = [
  {
    id: 9264013,
    topic: 'bhaskara-i',
    difficulty: 'easy',
    question: 'Bhāskara I is especially known for commentaries on the work of which mathematician?',
    options: ['Brahmagupta', 'Aryabhata I', 'Mahāvīra', 'Bhāskara II'],
    correctIndex: 1,
    explanation: 'Bhāskara I was an important follower and commentator of Aryabhata I and helped preserve and explain Aryabhata’s mathematical astronomy.',
    realWorld: 'Commentaries transmit algorithms and clarify ideas so that technical knowledge survives beyond its original text.',
    hint: 'His predecessor wrote the Aryabhatiya.',
  },
  {
    id: 9264014,
    topic: 'bhaskara-i',
    difficulty: 'hard',
    question: 'Bhāskara I is famous for a rational approximation to which function?',
    options: ['Natural logarithm', 'Sine', 'Gamma function', 'Bessel function'],
    correctIndex: 1,
    explanation: 'Bhāskara I gave a striking rational approximation for the sine function that was accurate enough for astronomical calculation.',
    realWorld: 'Approximating transcendental functions efficiently remains essential in numerical libraries, embedded systems, and simulation.',
    hint: 'It is a basic trigonometric function used in astronomy.',
  },
  {
    id: 9264015,
    topic: 'bhaskara-i',
    difficulty: 'sota',
    question: 'Why are rational approximations useful in numerical computation?',
    options: [
      'They replace every irrational number exactly',
      'They can approximate functions using arithmetic operations',
      'They require no coefficients to store',
      'They always converge in one evaluation',
    ],
    correctIndex: 1,
    explanation: 'Rational approximations represent a function as a ratio of polynomials, allowing efficient evaluation using basic arithmetic.',
    realWorld: 'Modern math libraries often use carefully optimized polynomial or rational approximations for elementary functions.',
    hint: 'Think ratios of polynomials instead of evaluating an infinite process directly.',
    sources: [{ title: 'Bhaskara I', url: 'https://mathshistory.st-andrews.ac.uk/Biographies/Bhaskara_I/', publisher: 'MacTutor History of Mathematics' }],
    reviewedAt: '2026-09-20',
  },
];
