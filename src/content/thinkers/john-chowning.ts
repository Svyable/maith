import type { Question } from '../types';

export const johnChowningQuestions: Question[] = [
  {
    id: 20700,
    topic: 'john-chowning',
    difficulty: 'hard',
    question: 'FM synthesis produces sidebands at frequencies $f_c \\pm nf_m$. The amplitudes of these sidebands are given by which special functions?',
    options: ['Bessel functions of the first kind $J_n(\\beta)$', 'Legendre polynomials', 'Hermite polynomials', 'Chebyshev polynomials'],
    correctIndex: 0,
    explanation: 'The spectrum of an FM signal is $\\sum J_n(\\beta)\\cos((f_c+nf_m)t)$, where $\\beta$ is the modulation index. Bessel functions control the energy distribution across harmonics.',
    realWorld: 'The Yamaha DX7 used this math to generate everything from electric pianos to brass — defining the sound of 1980s pop music.',
    hint: 'These functions also appear in cylindrical wave equations and drum vibration modes.',
  },
  {
    id: 420701,
    topic: 'john-chowning',
    difficulty: 'sota',
    question: 'In FM synthesis, increasing the modulation index $\\beta = \\Delta f / f_m$ beyond ~5 produces what spectral characteristic?',
    options: ['A dense, noise-like spectrum approaching Gaussian white noise', 'A pure sine wave', 'Only odd harmonics', 'A single sideband'],
    correctIndex: 0,
    explanation: 'High $\\beta$ spreads energy across many sidebands via Bessel functions, creating a dense quasi-noise spectrum — useful for metallic and bell-like timbres.',
    realWorld: 'This is how FM synthesis creates realistic bell and metallic percussion sounds — by exploiting high modulation indices.',
    hint: 'More sidebands = more spectral density. Push $\\beta$ high enough and it sounds like noise.',
  },
  {
    id: 420702,
    topic: 'john-chowning',
    difficulty: 'easy',
    question: 'Which iconic 1983 synthesizer used Chowning\'s FM synthesis algorithm, licensed from Stanford?',
    options: ['Yamaha DX7', 'Moog Minimoog', 'Roland TB-303', 'ARP Odyssey'],
    correctIndex: 0,
    explanation: 'The DX7 was the first affordable digital synthesizer and became the best-selling synth ever, generating over $1 billion for Yamaha.',
    realWorld: 'Stanford\'s licensing of FM synthesis to Yamaha was one of the most profitable university technology transfers in history.',
    hint: 'It defined the sound of 80s pop — think electric piano and bright brass patches.',
  },
];
