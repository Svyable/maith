import type { Question } from '../types';

export const yajnavalkyaQuestions: Question[] = [
  {
    id: 4421200, topic: 'yajnavalkya', difficulty: 'sota',
    question: 'Yajnavalkya\'s astronomical text describes the length of the lunar synodic month. What is the modern accepted value he approximated?',
    options: ['≈29.53 days', '≈27.32 days', '≈30.00 days', '≈28.00 days'],
    correctIndex: 0,
    explanation: 'The Shatapatha Brahmana attributed to Yajnavalkya describes a 29.5-day lunar cycle, remarkably close to the modern value of 29.53059 days — achieved without telescopes.',
    realWorld: 'Lunar calendars remain the basis of religious observance in Islam, Judaism, and Hinduism, affecting billions of people annually.',
    hint: 'The synodic month measures new moon to new moon — slightly longer than the sidereal month.',
  },
  {
    id: 44421201, topic: 'yajnavalkya', difficulty: 'sota',
    question: 'Yajnavalkya is credited with early heliocentric ideas in which ancient Indian text?',
    options: ['Shatapatha Brahmana', 'Rigveda', 'Arthashastra', 'Surya Siddhanta'],
    correctIndex: 0,
    explanation: 'The Shatapatha Brahmana contains passages suggesting the Sun as the center of the planetary system and describes the Earth as spherical — millennia before Copernicus.',
    realWorld: 'Multiple ancient civilizations independently reasoned about heliocentrism, showing that scientific thinking transcends cultural boundaries.',
    hint: 'This Brahmana text is one of the largest ritual texts of Vedic literature.',
  },
  {
    id: 44421202, topic: 'yajnavalkya', difficulty: 'sota',
    question: 'Yajnavalkya\'s astronomical calculations included an estimate of Earth\'s circumference. How does this compare to the modern value?',
    options: ['Within ~10% of the true value', 'Within ~1% of the true value', 'Off by a factor of 2', 'Off by a factor of 10'],
    correctIndex: 0,
    explanation: 'Ancient Indian astronomers in Yajnavalkya\'s tradition estimated Earth\'s diameter with surprising accuracy, within roughly 10% — using shadow observations and geometric reasoning.',
    realWorld: 'Eratosthenes in Greece later made a famous ~2% estimate using similar shadow methods, but Indian traditions may have preceded him by centuries.',
    hint: 'Shadow-based geometric methods can give reasonable estimates without sophisticated instruments.',
  },
];
