import type { Question } from '../types';

export const louisDeBroglieQuestions: Question[] = [
  {
    id: 10613,
    topic: 'louis-de-broglie',
    difficulty: 'easy',
    question: 'De Broglie\'s hypothesis states that:',
    options: [
      'All matter has an associated wavelength given by λ = h/p',
      'Light is purely a wave with no particle properties',
      'Electrons can only exist in circular orbits',
      'Energy is continuous, not quantized',
    ],
    correctIndex: 0,
    explanation: 'In 1924, de Broglie proposed that every particle has a wave nature with wavelength λ = h/p, where h is Planck\'s constant and p is momentum. This wave-particle duality is foundational to quantum mechanics.',
    realWorld: 'Electron microscopes exploit de Broglie wavelengths: fast electrons have tiny wavelengths, allowing imaging at atomic resolution.',
    hint: 'He extended wave-particle duality from light to all matter.',
  },
  {
    id: 10614,
    topic: 'louis-de-broglie',
    difficulty: 'hard',
    question: 'De Broglie\'s matter waves were first confirmed experimentally by:',
    options: [
      'Davisson and Germer observing electron diffraction from a nickel crystal',
      'Rutherford\'s gold foil scattering experiment',
      'The Michelson-Morley interferometer',
      'Compton scattering of X-rays',
    ],
    correctIndex: 0,
    explanation: 'In 1927, Davisson and Germer accidentally observed electron diffraction patterns from a nickel crystal that perfectly matched de Broglie\'s predicted wavelength, confirming matter waves.',
    realWorld: 'This experiment opened the door to electron diffraction as a structural analysis tool, now used routinely in materials science.',
    hint: 'Electrons bouncing off a crystal showed interference patterns.',
  },
  {
    id: 10615,
    topic: 'louis-de-broglie',
    difficulty: 'sota',
    question: 'De Broglie\'s pilot wave theory (later developed by Bohm) differs from standard quantum mechanics in that:',
    options: [
      'Particles have definite positions at all times, guided by a real wave function — making it deterministic',
      'It predicts different experimental outcomes than the Copenhagen interpretation',
      'It eliminates the need for a wave function entirely',
      'It requires faster-than-light communication between particles',
    ],
    correctIndex: 0,
    explanation: 'The de Broglie-Bohm pilot wave theory is a deterministic, hidden-variable interpretation where particles always have definite positions guided by the wave function via the "guiding equation." It reproduces all predictions of standard QM.',
    realWorld: 'Pilot wave theory has influenced modern work on quantum foundations and inspired "walking droplet" experiments that show classical analogs of quantum behavior.',
    hint: 'It restores determinism by adding hidden variables (particle positions) to QM.',
  },
];
