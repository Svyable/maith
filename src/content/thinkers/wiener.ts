import type { Question } from '../types';

export const wienerQuestions: Question[] = [
  {
    id: 19101, topic: 'wiener', difficulty: 'easy',
    question: 'Norbert Wiener founded the field of cybernetics, which studies:',
    options: ['Control and communication in animals and machines', 'Cyber attacks on computer systems', 'Virtual reality environments', 'Database management systems'],
    correctIndex: 0,
    explanation: 'Cybernetics (from Greek "kybernetes" = steersman) studies feedback, control, and communication in both biological and artificial systems. Wiener coined the term in 1948.',
    realWorld: 'Cybernetics inspired modern control theory, AI, cognitive science, and systems biology.',
    hint: 'It is about feedback loops — how systems self-regulate, whether biological or mechanical.',
  },
  {
    id: 19102, topic: 'wiener', difficulty: 'hard',
    question: 'The Wiener filter is the optimal linear filter for:',
    options: ['Extracting a signal from additive noise by minimizing mean squared error', 'Maximizing signal amplitude', 'Removing DC offset', 'Compressing data losslessly'],
    correctIndex: 0,
    explanation: 'The Wiener filter $H(f) = \\frac{S_{xy}(f)}{S_{xx}(f)}$ minimizes the MSE between the estimated and true signal. It is the frequency-domain optimal linear estimator.',
    realWorld: 'Image deblurring, audio noise reduction, and MRI reconstruction all use Wiener filtering.',
    hint: 'It uses the power spectral density of signal and noise to find the optimal frequency response.',
  },
  {
    id: 19103, topic: 'wiener', difficulty: 'sota',
    question: 'The Wiener process (standard Brownian motion) has the property that its paths are:',
    options: ['Continuous everywhere but differentiable nowhere (almost surely)', 'Smooth and infinitely differentiable', 'Piecewise linear', 'Discontinuous with jumps'],
    correctIndex: 0,
    explanation: 'Wiener proved that Brownian motion paths are a.s. continuous but nowhere differentiable — they are infinitely "jagged." This made rigorous the mathematical foundation for stochastic calculus.',
    realWorld: 'This non-differentiability is why Itô calculus is needed for finance — ordinary calculus fails on Brownian paths.',
    hint: 'The paths look like fractals — continuous but infinitely rough at every scale.',
  },
];
