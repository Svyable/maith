import type { Question } from '../types';

export const shenKuoQuestions: Question[] = [
  {
    id: 9264028,
    topic: 'shen-kuo',
    difficulty: 'easy',
    question: 'Shen Kuo discussed which navigational phenomenon involving magnetic compasses?',
    options: ['Magnetic declination', 'Radio refraction', 'Tidal locking', 'Gyroscopic drift'],
    correctIndex: 0,
    explanation: 'Shen Kuo described magnetic declination: the difference between magnetic north indicated by a compass and true north.',
    realWorld: 'Navigation systems must account for reference directions and local magnetic-field variation when using a compass.',
    hint: 'A compass needle does not always point exactly toward geographic north.',
  },
  {
    id: 9264029,
    topic: 'shen-kuo',
    difficulty: 'hard',
    question: 'What evidence led Shen Kuo to reason that landscapes change over long periods?',
    options: [
      'Marine fossils found far inland',
      'Daily changes in cloud cover',
      'Variations in musical pitch',
      'Differences between coin weights',
    ],
    correctIndex: 0,
    explanation: 'Shen observed marine fossils in inland rock layers and reasoned that erosion, deposition, and landscape change had transformed the region.',
    realWorld: 'Inferring past environments from geological evidence remains central to Earth science and paleoclimate research.',
    hint: 'He found remains of sea life where there was no sea.',
  },
  {
    id: 9264030,
    topic: 'shen-kuo',
    difficulty: 'sota',
    question: 'Why must a navigator distinguish magnetic north from true north?',
    options: [
      'They can differ by a location-dependent angle',
      'True north changes every hour',
      'Magnetic north is always due east',
      'Compasses measure geographic latitude directly',
    ],
    correctIndex: 0,
    explanation: 'Magnetic declination varies with location and time, so a magnetic bearing can differ from a bearing referenced to geographic true north.',
    realWorld: 'Surveying and navigation apply declination corrections when magnetic measurements must align with geographic maps.',
    hint: 'The correction is an angle between two north directions.',
    sources: [{ title: 'Shen Kuo', url: 'https://mathshistory.st-andrews.ac.uk/Biographies/Shen_Kua/', publisher: 'MacTutor History of Mathematics' }],
    reviewedAt: '2026-09-20',
  },
];
