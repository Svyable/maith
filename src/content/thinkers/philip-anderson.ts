import type { Question } from '../types';

export const philipAndersonQuestions: Question[] = [
  {
    id: 10628,
    topic: 'philip-anderson',
    difficulty: 'easy',
    question: 'Philip Anderson\'s famous essay "More Is Different" argues that:',
    options: [
      'Complex systems exhibit emergent properties that cannot be reduced to their fundamental components',
      'Particle physics is the only true fundamental science',
      'All of biology can be derived from quantum mechanics',
      'Reductionism is always the best scientific approach',
    ],
    correctIndex: 0,
    explanation: 'Anderson argued that at each level of complexity, entirely new properties appear (emergence) that require their own fundamental concepts — chemistry isn\'t just applied physics, biology isn\'t just applied chemistry.',
    realWorld: 'This philosophy influenced condensed matter physics, complex systems science, and even AI research on emergent capabilities in large models.',
    hint: 'He championed emergence over reductionism.',
  },
  {
    id: 10629,
    topic: 'philip-anderson',
    difficulty: 'hard',
    question: 'Anderson localization describes:',
    options: [
      'The absence of wave diffusion in a disordered medium — waves become trapped by randomness',
      'The localization of electrons in a magnetic field (Landau levels)',
      'Particles becoming confined inside hadrons',
      'The focusing of light by a gravitational lens',
    ],
    correctIndex: 0,
    explanation: 'In a sufficiently disordered system, quantum interference between multiple scattering paths causes wave functions to decay exponentially — electrons (or light, sound) become localized and cannot propagate.',
    realWorld: 'Anderson localization has been observed with light in disordered photonic lattices, ultracold atoms in optical speckle patterns, and sound waves in random media.',
    hint: 'Disorder can trap waves through destructive interference of scattered paths.',
  },
  {
    id: 10630,
    topic: 'philip-anderson',
    difficulty: 'sota',
    question: 'Anderson\'s mechanism for mass generation in condensed matter (1963) is:',
    options: [
      'The condensed-matter analog of the Higgs mechanism — showing that gauge bosons acquire mass via symmetry breaking',
      'A mechanism for generating magnetic monopoles',
      'A method for cooling atoms to absolute zero',
      'The theory of Cooper pair formation in superconductors',
    ],
    correctIndex: 0,
    explanation: 'Anderson showed that in a superconductor, the photon effectively acquires mass (the Meissner effect). This was the key insight that Higgs, Englert, and Brout generalized to relativistic gauge theories — the Higgs mechanism.',
    realWorld: 'Anderson\'s priority claim to the Higgs mechanism remains debated. The Nobel committee awarded the 2013 prize to Englert and Higgs for the relativistic generalization.',
    hint: 'Superconductors expel magnetic fields because the photon becomes massive inside them.',
  },
];
