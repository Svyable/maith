import type { Question } from '../types';

export const josephFourierQuestions: Question[] = [
  {
    id: 420401, topic: 'joseph-fourier', difficulty: 'easy',
    question: 'Fourier\'s key insight was that any periodic function can be represented as:',
    options: ['A sum of sines and cosines (a Fourier series)', 'A polynomial of degree n', 'A product of exponentials', 'A single sinusoid with varying amplitude'],
    correctIndex: 0,
    explanation: 'Fourier showed that $f(x) = a_0/2 + \\sum_{n=1}^\\infty (a_n\\cos nx + b_n\\sin nx)$, decomposing any periodic function into harmonic components. This was initially met with skepticism from Lagrange.',
    realWorld: 'MP3 compression, JPEG images, and speech recognition all decompose signals into frequency components using Fourier\'s idea.',
    hint: 'Any shape that repeats can be built from pure tones — add enough sine waves together.',
  },
  {
    id: 420402, topic: 'joseph-fourier', difficulty: 'hard',
    question: 'The Discrete Fourier Transform (DFT) of a signal $x[n]$ of length $N$ is:',
    options: ['$X[k] = \\sum_{n=0}^{N-1} x[n]\\, e^{-2\\pi i kn/N}$', '$X[k] = \\int_{-\\infty}^\\infty x(t) e^{-2\\pi i kt}\\,dt$', '$X[k] = x[k] * h[k]$ (convolution)', '$X[k] = \\sum_{n=0}^{N-1} x[n]\\cos(2\\pi kn)$'],
    correctIndex: 0,
    explanation: 'The DFT samples the frequency spectrum at N equally-spaced points. The FFT computes it in O(N log N) instead of O(N²). Convolution in time becomes multiplication in frequency — the key to fast filtering.',
    realWorld: 'Every WiFi/5G device performs millions of FFTs per second for OFDM modulation — Fourier\'s 200-year-old idea enables modern wireless communication.',
    hint: 'Project the signal onto N complex exponential basis functions — each gives one frequency bin.',
  },
  {
    id: 420403, topic: 'joseph-fourier', difficulty: 'sota',
    question: 'The uncertainty principle in Fourier analysis states that a function and its Fourier transform cannot both be:',
    options: ['Sharply localized — $\\Delta t \\cdot \\Delta \\omega \\geq 1/2$ (time-frequency uncertainty)', 'Real-valued simultaneously', 'Continuous and differentiable', 'Periodic with the same period'],
    correctIndex: 0,
    explanation: 'This is the mathematical basis for Heisenberg\'s uncertainty principle. A signal concentrated in time must be spread in frequency, and vice versa. Gabor (1946) showed the Gaussian achieves the minimum uncertainty product.',
    realWorld: 'Wavelet transforms (used in JPEG 2000) trade off time vs. frequency resolution adaptively — short wavelets for high frequencies, long ones for low — optimally navigating the uncertainty principle.',
    hint: 'A sharp click has all frequencies; a pure tone lasts forever. You can\'t have both sharp in time AND sharp in frequency.',
  },
];
