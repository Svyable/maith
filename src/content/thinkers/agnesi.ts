import type { Question } from '../types';

export const agnesiQuestions: Question[] = [
  {
    id: 20206, topic: 'agnesi', difficulty: 'easy',
    question: 'Maria Gaetana Agnesi is best known for writing the first comprehensive textbook on which subject?',
    options: ['Calculus (Instituzioni analitiche)', 'Algebra', 'Geometry', 'Number theory'],
    correctIndex: 0,
    explanation: 'Agnesi\'s "Instituzioni analitiche" (1748) was the first textbook to cover both differential and integral calculus in a systematic, accessible way.',
    realWorld: 'Her textbook was translated into French and English, becoming a standard reference and helping spread calculus across Europe.',
    hint: 'This branch of mathematics deals with derivatives and integrals.',
  },
  {
    id: 20207, topic: 'agnesi', difficulty: 'hard',
    question: 'The "Witch of Agnesi" is the curve defined by which equation?',
    options: ['$y = \\frac{8a^3}{x^2 + 4a^2}$', '$y = \\frac{1}{x^2+1}$', '$y = e^{-x^2}$', '$y = \\frac{\\sin x}{x}$'],
    correctIndex: 0,
    explanation: 'The curve (versiera) $y = \\frac{8a^3}{x^2 + 4a^2}$ is bell-shaped. The name "witch" is a mistranslation of the Italian "versiera" (turning curve) as "avversiera" (witch/she-devil).',
    realWorld: 'The Witch of Agnesi approximates spectral line shapes (Lorentzian/Cauchy distribution) in physics and the probability density function of the Cauchy distribution.',
    hint: 'The name comes from a famous mistranslation from Italian to English.',
  },
  {
    id: 20208, topic: 'agnesi', difficulty: 'sota',
    question: 'The Witch of Agnesi curve is mathematically equivalent to which probability distribution\'s density function?',
    options: ['Cauchy (Lorentzian) distribution', 'Gaussian distribution', 'Poisson distribution', 'Exponential distribution'],
    correctIndex: 0,
    explanation: 'The Cauchy distribution $f(x) = \\frac{1}{\\pi}\\frac{\\gamma}{(x-x_0)^2+\\gamma^2}$ has the same bell shape as Agnesi\'s curve. Unlike the Gaussian, it has no defined mean or variance.',
    realWorld: 'The Cauchy/Lorentzian appears in resonance phenomena, spectral line broadening, and as a pathological example in statistics (undefined moments).',
    hint: 'This distribution is famous for having undefined mean and variance despite having a clear peak.',
  },
];
