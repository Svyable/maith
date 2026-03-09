import type { Question } from '../types';

export const alBattaniQuestions: Question[] = [
  {
    id: 31730, topic: 'al-battani', difficulty: 'easy',
    question: 'Al-Battani (858–929) is considered one of the greatest astronomers of the Islamic Golden Age. What was his most important mathematical innovation in astronomy?',
    options: [
      'He replaced the Greek chord function with the sine function as the primary tool for astronomical calculations, making trigonometric computations far more efficient and accurate.',
      'He invented the telescope and used it to observe the moons of Jupiter.',
      'He proposed a heliocentric model of the solar system 600 years before Copernicus.',
      'He discovered the precession of the equinoxes by comparing star positions across centuries.'
    ],
    correctIndex: 0,
    explanation: 'Ptolemy used chords (effectively $2\\sin(\\theta/2)$), which required cumbersome conversions. Al-Battani adopted the Indian sine function directly, and also introduced the cosine and tangent into astronomical calculations. This made solving spherical triangles far simpler and more elegant.',
    realWorld: 'Al-Battani\'s astronomical tables (*Zij al-Sabi*) were translated into Latin and used by Copernicus, Kepler, and Galileo. His measurement of the solar year (365 days, 5 hours, 46 minutes, 24 seconds) is only 2 minutes off the modern value.',
    hint: 'He switched from the clumsy Greek chord function to the elegant Indian sine — simplifying all of astronomy.',
  },
  {
    id: 31731, topic: 'al-battani', difficulty: 'hard',
    question: 'Al-Battani derived a formula relating the sine function to the cotangent. Which key trigonometric identity did he establish?',
    options: [
      '$\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}$ and the identity $1 + \\cot^2\\theta = \\csc^2\\theta$, which he used to solve spherical triangles for determining the qibla direction (toward Mecca).',
      '$\\sin^2\\theta + \\cos^2\\theta = 1$, the fundamental Pythagorean identity.',
      '$\\tan(\\theta/2) = \\frac{\\sin\\theta}{1+\\cos\\theta}$, the half-angle tangent formula.',
      '$\\sin 3\\theta = 3\\sin\\theta - 4\\sin^3\\theta$, the triple angle formula.'
    ],
    correctIndex: 0,
    explanation: 'Al-Battani formalized the cotangent function and proved $1 + \\cot^2\\theta = \\csc^2\\theta$ (equivalent to dividing the Pythagorean identity by $\\sin^2\\theta$). He applied this to the practical problem of finding the qibla — the direction from any location on Earth to Mecca — which requires solving a spherical triangle.',
    realWorld: 'The qibla problem drove the development of spherical trigonometry throughout the Islamic world. Today the same mathematics is used in GPS navigation and great-circle route calculation.',
    hint: 'He used a cotangent identity to solve the practical Islamic problem of finding the direction to Mecca from anywhere on Earth.',
  },
  {
    id: 31732, topic: 'al-battani', difficulty: 'sota',
    question: 'Al-Battani improved the measurement of the obliquity of the ecliptic — the tilt of Earth\'s axis. What was his measurement and how does it compare to the modern value?',
    options: [
      'He measured $\\varepsilon = 23°35\'$ using precise observations of the Sun\'s maximum and minimum noon altitude over a full year. The modern value is $\\varepsilon \\approx 23°26\'$ — al-Battani was within 9 arcminutes, an extraordinary achievement for the 9th century.',
      'He measured $\\varepsilon = 24°00\'$ by observing lunar eclipses at the equinoxes, matching Ptolemy\'s earlier value exactly.',
      'He measured $\\varepsilon = 23°00\'$ using a 30-meter gnomon, achieving arcsecond precision unprecedented before the telescope.',
      'He measured $\\varepsilon = 22°50\'$ by tracking the motion of the North Celestial Pole over 30 years.'
    ],
    correctIndex: 0,
    explanation: 'Al-Battani\'s measurement improved on Ptolemy\'s $23°51\'$ by nearly 16 arcminutes. He achieved this by carefully measuring the Sun\'s altitude at the summer and winter solstices in Raqqa (Syria) over many years. The obliquity actually decreases slowly (~47\"/century), so his value was correct for his era.',
    realWorld: 'Precise knowledge of the obliquity is essential for calendar construction, predicting seasons, and understanding long-term climate cycles (Milankovitch cycles). Al-Battani\'s tables were used in Europe for 500+ years.',
    hint: 'He measured the tilt angle to within 9 arcminutes of today\'s value — using only the Sun\'s shadow.',
  },
];
