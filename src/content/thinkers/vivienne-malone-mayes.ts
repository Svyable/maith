import type { Question } from '../types';

export const vivienneMaloneMayesQuestions: Question[] = [
  {
    id: 9263028,
    topic: 'vivienne-malone-mayes',
    difficulty: 'easy',
    question: 'Where did Vivienne Malone-Mayes earn her PhD in mathematics?',
    options: ['Fisk University', 'University of Texas at Austin', 'Baylor University', 'Howard University'],
    correctIndex: 1,
    explanation: 'Malone-Mayes earned her doctorate from the University of Texas at Austin in 1966 with work in asymptotic analysis.',
    realWorld: 'She later joined Baylor University and became an important mathematician, educator, and advocate within the profession.',
    hint: 'She completed the degree in the same Texas city where she had faced segregation.',
  },
  {
    id: 9263029,
    topic: 'vivienne-malone-mayes',
    difficulty: 'hard',
    question: 'What was the focus named in Malone-Mayes’s doctoral dissertation?',
    options: [
      'A structure problem in asymptotic analysis',
      'A classification of finite simple groups',
      'A numerical theory of fluid turbulence',
      'A geometric model of crystal lattices',
    ],
    correctIndex: 0,
    explanation: 'Her dissertation was titled “A Structure Problem in Asymptotic Analysis,” reflecting her research interests in analysis.',
    realWorld: 'Asymptotic analysis helps describe how functions and systems behave in limiting regimes such as large time, large scale, or small parameters.',
    hint: 'The title concerns limiting behavior rather than exact finite formulas.',
  },
  {
    id: 9263030,
    topic: 'vivienne-malone-mayes',
    difficulty: 'sota',
    question: 'Which area best matches Malone-Mayes’s later mathematical research?',
    options: [
      'Algebraic topology and knot invariants',
      'Combinatorial game theory',
      'Analytic number theory of primes',
      'Functional analysis and summability methods',
    ],
    correctIndex: 3,
    explanation: 'Malone-Mayes worked in functional analysis, including questions involving summability methods, operators, sequence spaces, and asymptotic behavior.',
    realWorld: 'Functional analysis provides a framework for studying operators and infinite-dimensional spaces used throughout differential equations and applied mathematics.',
    hint: 'Think operators, sequence spaces, and limiting processes.',
    sources: [{ title: 'Vivienne Malone-Mayes', url: 'https://mathshistory.st-andrews.ac.uk/Biographies/Malone-Mayes/', publisher: 'MacTutor History of Mathematics' }],
    reviewedAt: '2026-09-20',
  },
];
