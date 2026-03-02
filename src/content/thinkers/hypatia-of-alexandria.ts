import type { Question } from '../types';

export const hypatiaQuestions: Question[] = [
  {
    id: 20100, topic: 'hypatia-of-alexandria', difficulty: 'easy',
    question: 'What city was Hypatia primarily associated with as a center of learning?',
    options: ['Alexandria', 'Athens', 'Rome', 'Carthage'],
    correctIndex: 0,
    explanation: 'Hypatia was the head of the Neoplatonic school at Alexandria, the greatest center of learning in the ancient world.',
    realWorld: 'The Library of Alexandria model inspired the modern concept of research universities combining teaching and scholarship.',
    hint: 'This Egyptian city housed the most famous ancient library.',
  },
  {
    id: 20101, topic: 'hypatia-of-alexandria', difficulty: 'hard',
    question: 'Hypatia is known to have written commentaries on which ancient mathematical text?',
    options: ["Apollonius' Conics", "Euclid's Optics", "Archimedes' Sand Reckoner", "Ptolemy's Syntaxis"],
    correctIndex: 0,
    explanation: "Hypatia wrote a commentary on Apollonius' Conics, helping preserve and clarify the theory of conic sections for future generations.",
    realWorld: 'Conic sections (ellipses, parabolas, hyperbolas) are essential in orbital mechanics — every satellite orbit is a conic section.',
    hint: 'This work studied curves formed by slicing a cone at different angles.',
  },
  {
    id: 20102, topic: 'hypatia-of-alexandria', difficulty: 'sota',
    question: 'Which instrument, used for astronomical measurement, is Hypatia credited with improving?',
    options: ['Astrolabe', 'Sextant', 'Orrery', 'Armillary sphere'],
    correctIndex: 0,
    explanation: 'Hypatia is credited with improving the design of the astrolabe, a sophisticated instrument for solving problems in astronomy and navigation.',
    realWorld: 'The astrolabe was the smartphone of the medieval world — used for timekeeping, surveying, navigation, and even casting horoscopes.',
    hint: 'This flat disc instrument could model the celestial sphere through stereographic projection.',
  },
];
