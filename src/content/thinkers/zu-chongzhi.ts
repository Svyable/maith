import type { Question } from '../types';

export const zuChongzhiQuestions: Question[] = [
  {
    id: 9264004,
    topic: 'zu-chongzhi',
    difficulty: 'easy',
    question: 'Which fraction did Zu Chongzhi give as a remarkably accurate approximation to π?',
    options: ['22/7', '355/113', '333/106', '104348/33215'],
    correctIndex: 1,
    explanation: 'Zu Chongzhi gave 355/113, an approximation to π that is correct to six decimal places.',
    realWorld: 'Good rational approximations let calculations use simple integer arithmetic while retaining high numerical accuracy.',
    hint: 'Its numerator is 355 and its denominator is just over one hundred.',
  },
  {
    id: 9264005,
    topic: 'zu-chongzhi',
    difficulty: 'hard',
    question: 'Zu Chongzhi’s mathematical and astronomical work strongly involved which practical task?',
    options: ['Calendar construction', 'Insurance pricing', 'Bridge truss design', 'Cryptographic coding'],
    correctIndex: 0,
    explanation: 'Zu worked in a family tradition of mathematics and astronomy where accurate calendar construction was an important court responsibility.',
    realWorld: 'Calendars require reliable models of periodic astronomical motion and careful numerical computation.',
    hint: 'Astronomical cycles had to be turned into an official schedule.',
  },
  {
    id: 9264006,
    topic: 'zu-chongzhi',
    difficulty: 'sota',
    question: 'Why is 355/113 especially notable among simple rational approximations of π?',
    options: [
      'It equals π exactly',
      'It uses only powers of two',
      'It is accurate to six decimal places',
      'It is the first decimal expansion',
    ],
    correctIndex: 2,
    explanation: 'The value 355/113 ≈ 3.14159292, agreeing with π through six digits after the decimal point.',
    realWorld: 'Continued-fraction ideas explain why some modest-size fractions approximate irrational numbers exceptionally well.',
    hint: 'Compare 3.14159292 with 3.14159265.',
    sources: [{ title: 'Zu Chongzhi', url: 'https://mathshistory.st-andrews.ac.uk/Biographies/Zu_Chongzhi/', publisher: 'MacTutor History of Mathematics' }],
    reviewedAt: '2026-09-20',
  },
];
