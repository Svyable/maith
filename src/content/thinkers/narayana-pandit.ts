import type { Question } from '../types';

export const narayanaPanditQuestions: Question[] = [
  {
    id: 9264025,
    topic: 'narayana-pandit',
    difficulty: 'easy',
    question: 'What is the title of Narayana Pandit’s major 1356 work on arithmetic?',
    options: ['Ganita Kaumudi', 'Lilavati', 'Aryabhatiya', 'Bijaganita'],
    correctIndex: 0,
    explanation: 'Narayana Pandit wrote the Ganita Kaumudi in 1356, a substantial work on arithmetic and related mathematical topics.',
    realWorld: 'Organized algorithmic texts help standardize calculation methods and make them teachable across communities.',
    hint: 'Its title is often translated as “Moonlight of Mathematics.”',
  },
  {
    id: 9264026,
    topic: 'narayana-pandit',
    difficulty: 'hard',
    question: 'Which recreational structure did Narayana study systematically?',
    options: ['Magic squares', 'Knot diagrams', 'Fractal sets', 'Sudoku grids'],
    correctIndex: 0,
    explanation: 'Narayana developed rules and constructions involving magic squares and relationships with arithmetic progressions.',
    realWorld: 'Magic-square questions connect recreational mathematics with combinatorics, symmetry, and algorithmic construction.',
    hint: 'Rows, columns, and diagonals share a common total.',
  },
  {
    id: 9264027,
    topic: 'narayana-pandit',
    difficulty: 'sota',
    question: 'What condition defines the magic constant of a normal magic square?',
    options: [
      'Every row, column, and main diagonal has the same sum',
      'Every entry is a prime number',
      'All neighboring entries differ by one',
      'The determinant of the square is zero',
    ],
    correctIndex: 0,
    explanation: 'A magic square is arranged so each row, each column, and the two main diagonals have the same total, called the magic constant.',
    realWorld: 'Constraint-based constructions like magic squares are useful examples for combinatorial search and algorithm design.',
    hint: 'The defining property is equality of several line sums.',
    sources: [{ title: 'Narayana Pandit', url: 'https://mathshistory.st-andrews.ac.uk/Biographies/Narayana/', publisher: 'MacTutor History of Mathematics' }],
    reviewedAt: '2026-09-20',
  },
];
