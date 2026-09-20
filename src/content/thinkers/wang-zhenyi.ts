import type { Question } from '../types';

export const wangZhenyiQuestions: Question[] = [
  {
    id: 9264007,
    topic: 'wang-zhenyi',
    difficulty: 'easy',
    question: 'Wang Zhenyi is remembered for work in which two technical subjects?',
    options: ['Astronomy and mathematics', 'Chemistry and anatomy', 'Geology and botany', 'Mechanics and acoustics'],
    correctIndex: 0,
    explanation: 'Wang Zhenyi studied and wrote about astronomy and mathematics in eighteenth-century Qing China.',
    realWorld: 'Her work joined mathematical explanation with observable astronomical phenomena such as eclipses.',
    hint: 'She studied calculation and the motion of celestial bodies.',
  },
  {
    id: 9264008,
    topic: 'wang-zhenyi',
    difficulty: 'hard',
    question: 'What phenomenon did Wang Zhenyi model with a lamp, mirror, and table?',
    options: ['Tidal resonance', 'Lunar eclipse', 'Planetary parallax', 'Atmospheric refraction'],
    correctIndex: 1,
    explanation: 'Wang used a simple physical demonstration involving a lamp, mirror, and table to explain the geometry of a lunar eclipse.',
    realWorld: 'Physical models can make geometric relationships in astronomy easier to test and communicate.',
    hint: 'The demonstration involved Earth blocking sunlight from reaching the Moon.',
  },
  {
    id: 9264009,
    topic: 'wang-zhenyi',
    difficulty: 'sota',
    question: 'What geometric condition produces a lunar eclipse?',
    options: [
      'The Moon passes through Earth’s shadow',
      'Earth passes through the Moon’s shadow',
      'The Sun passes between Earth and Moon',
      'The Moon reaches maximum declination',
    ],
    correctIndex: 0,
    explanation: 'A lunar eclipse occurs when Earth lies between the Sun and Moon closely enough that the Moon moves into Earth’s shadow.',
    realWorld: 'Eclipse prediction combines orbital geometry, timing, and the changing alignment of the Sun, Earth, and Moon.',
    hint: 'Ask which body casts the shadow seen on the Moon.',
    sources: [{ title: 'Wang Zhenyi', url: 'https://www.schoolsobservatory.org/learn/history/biographies/wang-zhenyi', publisher: 'The Schools’ Observatory' }],
    reviewedAt: '2026-09-20',
  },
];
