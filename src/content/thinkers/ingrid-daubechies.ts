import type { Question } from '../types';

export const daubechiesQuestions: Question[] = [
  {
    id: 20227, topic: 'daubechies', difficulty: 'easy',
    question: 'Ingrid Daubechies is best known for her pioneering work on which mathematical tool?',
    options: ['Wavelets', 'Fractals', 'Neural networks', 'Fourier series'],
    correctIndex: 0,
    explanation: 'Daubechies created the first family of compactly supported orthonormal wavelets (Daubechies wavelets), revolutionizing signal and image processing.',
    realWorld: 'JPEG 2000 image compression uses wavelets, and the FBI\'s fingerprint database uses wavelet compression to store millions of prints efficiently.',
    hint: 'These localized oscillating functions analyze signals at multiple scales simultaneously.',
  },
  {
    id: 20228, topic: 'daubechies', difficulty: 'hard',
    question: 'What key property of Daubechies wavelets makes them superior to Haar wavelets for signal processing?',
    options: ['Compact support with smoothness (vanishing moments)', 'Infinite frequency resolution', 'Perfect time localization', 'Orthogonality to all polynomials'],
    correctIndex: 0,
    explanation: 'Daubechies wavelets have compact support (finite duration) AND smoothness controlled by vanishing moments — Haar wavelets are compact but discontinuous.',
    realWorld: 'More vanishing moments mean better compression of smooth signals — critical for audio, image, and video codecs.',
    hint: 'The number of vanishing moments controls how many terms of a Taylor expansion the wavelet annihilates.',
  },
  {
    id: 20229, topic: 'daubechies', difficulty: 'sota',
    question: 'Daubechies recently applied wavelet-inspired techniques to which unexpected domain?',
    options: ['Art authentication and restoration (canvas analysis)', 'Cryptocurrency mining', 'Protein folding', 'Quantum computing gate design'],
    correctIndex: 0,
    explanation: 'Daubechies developed mathematical tools to analyze brushstrokes, canvas weave, and paint layers — helping art historians authenticate and virtually restore masterpieces.',
    realWorld: 'Her team has worked with major museums to analyze works by Van Gogh, Gauguin, and other masters using signal processing on high-resolution scans.',
    hint: 'Multi-resolution analysis of texture and material patterns in visual art.',
  },
];
