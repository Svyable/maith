import type { Question } from '../types';

export const nicolausCopernicusQuestions: Question[] = [
  {
    id: 60040, topic: 'nicolaus-copernicus', difficulty: 'easy',
    question: 'Copernicus\'s heliocentric model placed at the center of the solar system:',
    options: [
      'The Sun — with Earth and other planets orbiting around it',
      'The Earth — with the Sun and planets orbiting around it',
      'Jupiter — as the largest body in the system',
      'Nothing — he proposed all bodies orbit each other equally',
    ],
    correctIndex: 0,
    explanation: 'In "De Revolutionibus Orbium Coelestium" (1543), Copernicus proposed that the Sun, not the Earth, sits at the center, with planets including Earth orbiting it. This overturned 1,400 years of Ptolemaic geocentrism.',
    realWorld: 'The Copernican Revolution is the paradigm shift that launched modern astronomy and inspired the "Copernican principle" — we don\'t occupy a privileged position in the universe.',
    hint: 'He literally moved the Earth out of the center of the universe.',
  },
  {
    id: 60041, topic: 'nicolaus-copernicus', difficulty: 'hard',
    question: 'A key advantage of Copernicus\'s heliocentric model over Ptolemy\'s was:',
    options: [
      'It naturally explained retrograde motion of planets as an apparent effect of Earth overtaking slower outer planets',
      'It perfectly predicted planetary positions without any adjustments',
      'It eliminated the need for circular orbits entirely',
      'It correctly predicted the phases of Venus (later confirmed by Galileo)',
    ],
    correctIndex: 0,
    explanation: 'In the geocentric model, retrograde motion (planets appearing to move backward) required complex epicycles. In the heliocentric model, it\'s simply an optical illusion: Earth overtakes Mars, making Mars appear to reverse against the background stars.',
    realWorld: 'Galileo\'s telescopic observation of Venus\'s full phases (1610) provided direct evidence for heliocentrism that the Ptolemaic model could not explain.',
    hint: 'When you pass a slower car on the highway, it appears to move backward relative to distant mountains.',
  },
  {
    id: 60042, topic: 'nicolaus-copernicus', difficulty: 'sota',
    question: 'Copernicus retained circular orbits, requiring epicycles. The final fix came from Kepler, who showed orbits are:',
    options: [
      'Ellipses with the Sun at one focus — $r = \\frac{a(1-e^2)}{1+e\\cos\\theta}$',
      'Perfect circles with the Sun at the center',
      'Parabolas open toward the Sun',
      'Hyperbolas for all bound orbits',
    ],
    correctIndex: 0,
    explanation: 'Copernicus\'s model still used circular orbits and needed epicycles for accuracy. Kepler\'s First Law (1609) showed planetary orbits are ellipses with eccentricity $e$, with the Sun at one focus — eliminating epicycles entirely.',
    realWorld: 'Kepler\'s elliptical orbits, combined with Newton\'s gravitational law $F = GMm/r^2$, form the basis of all orbital mechanics — from satellite launches to interplanetary navigation.',
    hint: 'The orbits are slightly squished circles, described by a conic section equation.',
  },
];
