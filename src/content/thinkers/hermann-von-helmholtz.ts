import type { Question } from '../types';

export const helmholtzQuestions: Question[] = [
  {
    id: 20720,
    topic: 'hermann-von-helmholtz',
    difficulty: 'hard',
    question: 'Helmholtz showed that the perceived timbre of a sound depends on its harmonic spectrum. His resonators physically performed which mathematical operation?',
    options: ['Fourier analysis — isolating individual frequency components', 'Laplace transform', 'Wavelet decomposition', 'Z-transform'],
    correctIndex: 0,
    explanation: 'Each Helmholtz resonator was tuned to a specific frequency and would vibrate sympathetically only at that frequency — mechanically extracting Fourier coefficients.',
    realWorld: 'Modern audio equalizers and spectrum analyzers are the digital descendants of his physical resonators.',
    hint: 'He decomposed complex sounds into pure tones — the definition of a certain famous transform.',
  },
  {
    id: 20721,
    topic: 'hermann-von-helmholtz',
    difficulty: 'sota',
    question: 'Helmholtz\'s "On the Sensations of Tone" (1863) proposed that the basilar membrane performs frequency analysis via:',
    options: ['Resonance — different positions respond to different frequencies (place theory)', 'Temporal coding of neural firing rates', 'Amplitude detection only', 'Phase-locked oscillation'],
    correctIndex: 0,
    explanation: 'His "place theory" proposed the cochlea acts as a bank of tuned resonators — vindicated by Georg von Békésy\'s Nobel Prize-winning experiments in 1961.',
    realWorld: 'Cochlear implants are engineered based on place theory, stimulating different electrode positions for different frequencies.',
    hint: 'Different positions along the membrane respond to different pitches.',
  },
  {
    id: 20722,
    topic: 'hermann-von-helmholtz',
    difficulty: 'easy',
    question: 'Helmholtz is also famous for formulating which fundamental law of physics about energy?',
    options: ['Conservation of energy (first law of thermodynamics)', 'Conservation of momentum', 'The second law of thermodynamics', 'The ideal gas law'],
    correctIndex: 0,
    explanation: 'He provided the first rigorous mathematical formulation of the conservation of energy in 1847, unifying heat, mechanics, and electromagnetism.',
    realWorld: 'Every engineering calculation from bridge design to rocket propulsion relies on energy conservation.',
    hint: 'Energy can neither be created nor destroyed.',
  },
];
