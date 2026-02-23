import type { Question } from '../types';

export const khayyamQuestions: Question[] = [
  {
    id: 9610,
    topic: 'khayyam',
    difficulty: 'sota',
    question: 'Omar Khayyam solved cubic equations geometrically by finding intersections of:',
    options: [
      'Two conic sections (e.g., a circle and a parabola)',
      'Two straight lines',
      'A line and an ellipse',
      'Three concurrent circles',
    ],
    correctIndex: 0,
    explanation: 'Khayyam\'s Treatise on Algebra (1070) systematically classified all cubic types and solved each by intersecting specific pairs of conics — parabola with circle, hyperbola with circle, etc. He found real roots geometrically.',
    realWorld: 'This geometric approach to algebraic equations anticipated analytic geometry and showed that algebra and geometry are deeply intertwined — a theme central to modern algebraic geometry.',
    hint: 'A cubic can have up to 3 real roots — each corresponds to an intersection point of two curves.',
  },
  {
    id: 9611,
    topic: 'khayyam',
    difficulty: 'sota',
    question: 'Khayyam\'s classification of cubic equations enumerated how many distinct types (excluding those reducible to lower degree)?',
    options: [
      '14 types with positive coefficients (19 total including reducible)',
      '3 types',
      '7 types',
      '25 types',
    ],
    correctIndex: 0,
    explanation: 'Since negative numbers weren\'t accepted, each arrangement of positive terms gave a different "type." Khayyam identified 14 irreducible cubic forms and provided geometric constructions for each.',
    realWorld: 'This systematic classification approach — enumerating all cases before solving each — became the template for mathematical problem-solving that persists in modern algebra and computer science.',
    hint: 'Without negative coefficients, $x^3 + ax = b$ and $x^3 = ax + b$ are different problems.',
  },
  {
    id: 9612,
    topic: 'khayyam',
    difficulty: 'sota',
    question: 'Khayyam\'s reform of the Persian calendar achieved an accuracy of one day error in approximately:',
    options: [
      '5,000 years (more accurate than the Gregorian calendar)',
      '100 years',
      '500 years',
      '1,582 years (same as Gregorian)',
    ],
    correctIndex: 0,
    explanation: 'The Jalālī calendar (1079 CE) used a complex leap year cycle producing a mean year of 365.24219858 days — closer to the tropical year than the Gregorian calendar\'s 365.2425 days introduced 500 years later.',
    realWorld: 'The Solar Hijri calendar used in Iran and Afghanistan today is based on Khayyam\'s reform and remains one of the most astronomically accurate calendars in use.',
    hint: 'Compare: Gregorian calendar drifts 1 day in ~3,236 years. Khayyam\'s calendar does better.',
  },
];
