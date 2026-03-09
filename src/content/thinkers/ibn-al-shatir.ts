import type { Question } from '../types';

export const ibnAlShatirQuestions: Question[] = [
  {
    id: 31800, topic: 'ibn-al-shatir', difficulty: 'easy',
    question: 'Ibn al-Shatir (1304–1375) worked as the timekeeper of the Umayyad Mosque in Damascus. What mathematical achievement made him famous among historians of astronomy?',
    options: [
      'He developed planetary models using combinations of uniform circular motions that were mathematically equivalent to Copernicus\'s later heliocentric models — eliminating the physically objectionable equant point of Ptolemy without sacrificing accuracy.',
      'He was the first to propose that Earth orbits the Sun, presenting a fully heliocentric model 170 years before Copernicus.',
      'He built the largest sundial in the medieval world, accurate to within one minute of solar time.',
      'He calculated the distance from Earth to the Moon using parallax measurements during lunar eclipses.'
    ],
    correctIndex: 0,
    explanation: 'Ibn al-Shatir replaced Ptolemy\'s equant — a mathematical device that violated the principle of uniform circular motion — with a combination of epicycles that reproduced the same planetary paths. His lunar model and Mercury model are mathematically identical to those in Copernicus\'s *De Revolutionibus* (1543), strongly suggesting transmission.',
    realWorld: 'The striking similarity between Ibn al-Shatir\'s and Copernicus\'s mathematical models is one of the most debated topics in the history of science. It suggests that the Scientific Revolution had deep roots in Islamic astronomy.',
    hint: 'His planetary models were mathematically identical to Copernicus\'s — published 170 years earlier.',
  },
  {
    id: 31801, topic: 'ibn-al-shatir', difficulty: 'hard',
    question: 'Ibn al-Shatir used the "Tusi couple" (invented by Nasir al-Din al-Tusi) as a key building block. What does the Tusi couple achieve mathematically?',
    options: [
      'It converts uniform circular motion into linear oscillation: a small circle rolling inside a circle of twice its radius traces a straight-line diameter. Mathematically, $x(t) = R\\cos\\omega t$, $y(t) = 0$ — uniform rotation produces linear reciprocating motion.',
      'It combines two circular motions to produce an elliptical orbit, anticipating Kepler\'s first law.',
      'It generates epicycloidal curves that model retrograde planetary motion more accurately than Ptolemy\'s single epicycle.',
      'It produces a spiral trajectory that models the precession of the equinoxes over 26,000 years.'
    ],
    correctIndex: 0,
    explanation: 'The Tusi couple uses two uniform circular motions to generate linear motion — a remarkable kinematic result. If a circle of radius $r$ rolls inside a circle of radius $2r$, any point on the inner circle moves along a diameter of the outer circle. This allowed Islamic astronomers to build purely circular models that reproduced Ptolemy\'s non-circular effects.',
    realWorld: 'The Tusi couple is used in mechanical engineering (hypocycloid mechanisms) and appears in Copernicus\'s *De Revolutionibus* — another piece of evidence for the transmission of Islamic astronomical mathematics to Europe.',
    hint: 'A circle rolling inside a larger circle traces a straight line — turning circular motion into linear motion.',
  },
  {
    id: 31802, topic: 'ibn-al-shatir', difficulty: 'sota',
    question: 'The "Copernicus problem" in history of science asks whether Copernicus learned from Ibn al-Shatir. What is the strongest mathematical evidence for transmission?',
    options: [
      'Copernicus\'s lunar model uses exactly the same geometric configuration as Ibn al-Shatir\'s: a double-epicycle arrangement with the same radii ratios, producing identical predictions. The probability of independent discovery of this specific configuration is extremely low, and intermediate transmission routes through Byzantine Greek manuscripts have been identified.',
      'Copernicus cited Ibn al-Shatir by name in an early draft of *De Revolutionibus*, but removed the reference in the published version.',
      'Both used identical numerical values for planetary orbital parameters, despite living in different centuries and geographic locations.',
      'A copy of Ibn al-Shatir\'s manuscript with Latin annotations was found in Copernicus\'s personal library in Frombork.'
    ],
    correctIndex: 0,
    explanation: 'The mathematical models are not merely similar — they are structurally identical, with the same epicycle configurations and the same geometric tricks (Tusi couple). Historians have identified possible transmission routes via Byzantine Greek intermediaries (e.g., manuscripts in Padua, where Copernicus studied). While no "smoking gun" citation exists, the mathematical evidence is compelling.',
    realWorld: 'This case study challenges the Eurocentric narrative of the Scientific Revolution and highlights the crucial role of Islamic mathematical astronomy as a foundation for Copernican heliocentrism.',
    hint: 'The lunar models are structurally identical — same epicycles, same radii, same trick — across 170 years and 3,000 km.',
  },
];
