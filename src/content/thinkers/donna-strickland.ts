import type { Question } from '../types';

export const donnaStricklandQuestions: Question[] = [
  {
    id: 10619,
    topic: 'donna-strickland',
    difficulty: 'easy',
    question: 'Donna Strickland won the Nobel Prize for developing:',
    options: [
      'Chirped pulse amplification (CPA) for generating ultra-intense laser pulses',
      'The first working laser in 1960',
      'Fiber optic communication systems',
      'Quantum cryptography protocols',
    ],
    correctIndex: 0,
    explanation: 'CPA (1985) works by stretching a short laser pulse in time, amplifying it safely at low peak power, then compressing it back — achieving intensities that would destroy the amplifier otherwise.',
    realWorld: 'CPA enables LASIK eye surgery, precision manufacturing, and is used in particle accelerators. Millions of people have had their vision corrected thanks to this technique.',
    hint: 'Stretch, amplify, compress — that\'s the key sequence.',
  },
  {
    id: 10620,
    topic: 'donna-strickland',
    difficulty: 'hard',
    question: 'In chirped pulse amplification, "chirping" a pulse means:',
    options: [
      'Spreading its frequency components in time so different colors arrive at different times',
      'Increasing its repetition rate',
      'Focusing it to a smaller spot size',
      'Converting it from infrared to ultraviolet',
    ],
    correctIndex: 0,
    explanation: 'A chirped pulse has its frequency varying with time — like a bird chirp. A diffraction grating stretches the pulse so red arrives before blue (or vice versa), reducing peak intensity during amplification.',
    realWorld: 'The same chirping principle is used in radar systems (chirped radar) and in optical fiber communications to manage dispersion.',
    hint: 'Think of spreading a rainbow across time.',
  },
  {
    id: 10621,
    topic: 'donna-strickland',
    difficulty: 'sota',
    question: 'CPA-based petawatt lasers achieve intensities exceeding $10^{22}$ W/cm². At such intensities:',
    options: [
      'The vacuum itself becomes nonlinear — virtual electron-positron pairs can be ripped from the quantum vacuum',
      'Light travels faster than c',
      'Gravity becomes the dominant force',
      'Photons acquire rest mass',
    ],
    correctIndex: 0,
    explanation: 'Near the Schwinger limit (~$10^{29}$ V/m), the electric field is strong enough to create real electron-positron pairs from the vacuum. Current petawatt lasers approach regimes where nonlinear QED effects like vacuum birefringence become observable.',
    realWorld: 'Facilities like ELI (Extreme Light Infrastructure) in Europe aim to probe this "boiling vacuum" regime within the next decade.',
    hint: 'At extreme intensities, empty space itself responds nonlinearly to light.',
  },
];
