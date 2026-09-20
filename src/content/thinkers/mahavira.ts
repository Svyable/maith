import type { Question } from '../types';

export const mahaviraQuestions: Question[] = [
  {
    id: 9264016,
    topic: 'mahavira',
    difficulty: 'easy',
    question: 'Which work is Mahāvīra best known for?',
    options: ['Ganita Sara Samgraha', 'Nine Chapters', 'Tantrasamgraha', 'Almagest'],
    correctIndex: 0,
    explanation: 'Mahāvīra’s Ganita Sara Samgraha, written around 850 CE, is his best-known mathematical work.',
    realWorld: 'Comprehensive mathematical handbooks preserve methods and examples that can be taught, adapted, and extended across generations.',
    hint: 'Its title is often translated as “The Entire Collection of Mathematics.”',
  },
  {
    id: 9264017,
    topic: 'mahavira',
    difficulty: 'hard',
    question: 'What is historically notable about the Ganita Sara Samgraha?',
    options: [
      'It is devoted entirely to mathematics',
      'It is the first surviving astronomy table',
      'It introduces complex analysis',
      'It proves the prime number theorem',
    ],
    correctIndex: 0,
    explanation: 'It is the earliest extant Indian text known to be devoted entirely to mathematics rather than embedding mathematics inside astronomy or another subject.',
    realWorld: 'Specialized textbooks can deepen a field by organizing methods around the subject itself rather than a single application.',
    hint: 'Its scope is mathematical from beginning to end.',
  },
  {
    id: 9264018,
    topic: 'mahavira',
    difficulty: 'sota',
    question: 'Which topic received explicit rules in Mahāvīra’s mathematics?',
    options: ['Permutations and combinations', 'Fourier transforms', 'Matrix eigenvalues', 'Non-Euclidean metrics'],
    correctIndex: 0,
    explanation: 'Mahāvīra gave rules for permutations and combinations, reflecting a substantial combinatorial tradition in Indian mathematics.',
    realWorld: 'Counting arrangements and selections is foundational to probability, algorithms, experimental design, and information theory.',
    hint: 'Think counting selections and arrangements.',
    sources: [{ title: 'Mahāvīra', url: 'https://mathshistory.st-andrews.ac.uk/Biographies/Mahavira/', publisher: 'MacTutor History of Mathematics' }],
    reviewedAt: '2026-09-20',
  },
];
