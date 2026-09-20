import type { Question } from '../types';

export const evelynBoydGranvilleQuestions: Question[] = [
  {
    id: 9263010,
    topic: 'evelyn-boyd-granville',
    difficulty: 'easy',
    question: 'Where did Evelyn Boyd Granville earn her PhD in mathematics?',
    options: ['Princeton University', 'Yale University', 'Cornell University', 'Stanford University'],
    correctIndex: 1,
    explanation: 'Granville earned her doctorate from Yale University in 1949 with research in functional analysis.',
    realWorld: 'She later carried advanced mathematics into early scientific computing and the U.S. space program.',
    hint: 'Her doctoral university is in New Haven, Connecticut.',
  },
  {
    id: 9263011,
    topic: 'evelyn-boyd-granville',
    difficulty: 'hard',
    question: 'What kind of computing work did Granville perform during the early U.S. space program?',
    options: [
      'Designing analog radio antennas',
      'Building liquid-fuel rocket engines',
      'Programming weather satellites',
      'Writing programs to track spacecraft trajectories',
    ],
    correctIndex: 3,
    explanation: 'Granville worked on computer programs used to track the paths of vehicles in space, including orbit-related calculations for major U.S. space efforts.',
    realWorld: 'Trajectory software turns physical models into navigational predictions for launches, satellites, and crewed missions.',
    hint: 'The work connected numerical computing with orbital motion.',
  },
  {
    id: 9263012,
    topic: 'evelyn-boyd-granville',
    difficulty: 'sota',
    question: 'Which task best matches numerical orbital propagation?',
    options: [
      'Advancing equations of motion from a known initial state',
      'Factoring integers into prime numbers',
      'Sorting telemetry records alphabetically',
      'Compressing images without a physical model',
    ],
    correctIndex: 0,
    explanation: 'Orbital propagation numerically advances a spacecraft state forward in time using equations of motion and an initial position and velocity.',
    realWorld: 'Modern mission design still relies on numerical propagation for tracking, maneuver planning, conjunction analysis, and navigation.',
    hint: 'Start with position and velocity, then predict the next state.',
    sources: [{ title: 'Evelyn Boyd Granville', url: 'https://mathshistory.st-andrews.ac.uk/Biographies/Granville/', publisher: 'MacTutor History of Mathematics' }],
    reviewedAt: '2026-09-20',
  },
];
