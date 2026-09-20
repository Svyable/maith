import type { Question } from '../types';

export const nilakanthaSomayajiQuestions: Question[] = [
  {
    id: 9264010,
    topic: 'nilakantha-somayaji',
    difficulty: 'easy',
    question: 'What is the title of Nilakantha Somayaji’s major astronomical treatise completed in 1501?',
    options: ['Aryabhatiya', 'Tantrasamgraha', 'Lilavati', 'Ganita Kaumudi'],
    correctIndex: 1,
    explanation: 'Nilakantha’s Tantrasamgraha is a major Kerala-school work on mathematical astronomy completed in 1501.',
    realWorld: 'Astronomical treatises combined numerical algorithms, geometry, trigonometry, and models of planetary motion.',
    hint: 'Its title means roughly “collection of systems.”',
  },
  {
    id: 9264011,
    topic: 'nilakantha-somayaji',
    difficulty: 'hard',
    question: 'Nilakantha belonged to which mathematical tradition?',
    options: ['Kerala school', 'Alexandrian school', 'Bourbaki group', 'Vienna Circle'],
    correctIndex: 0,
    explanation: 'Nilakantha was a leading figure of the Kerala school of mathematics and astronomy in southern India.',
    realWorld: 'The Kerala tradition developed sophisticated infinite-series and astronomical techniques centuries before modern calculus notation.',
    hint: 'The school is named for a region of southwest India.',
  },
  {
    id: 9264012,
    topic: 'nilakantha-somayaji',
    difficulty: 'sota',
    question: 'What mathematical theme appears in Nilakantha’s work alongside planetary astronomy?',
    options: ['Infinite series', 'Graph coloring', 'Tensor categories', 'Linear programming'],
    correctIndex: 0,
    explanation: 'Nilakantha’s mathematical astronomy sits within a Kerala-school tradition that developed and used infinite-series expansions.',
    realWorld: 'Infinite series provide controlled approximations for constants and functions and are central to numerical computation.',
    hint: 'Think repeated terms that continue without a final one.',
    sources: [{ title: 'Nilakantha Somayaji', url: 'https://mathshistory.st-andrews.ac.uk/Biographies/Nilakantha/', publisher: 'MacTutor History of Mathematics' }],
    reviewedAt: '2026-09-20',
  },
];
