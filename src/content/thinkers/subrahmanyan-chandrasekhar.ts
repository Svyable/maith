import type { Question } from '../types';

export const subrahmanyanChandrasekharQuestions: Question[] = [
  {
    id: 90901, topic: 'subrahmanyan-chandrasekhar', difficulty: 'sota',
    question: 'The Chandrasekhar limit ($\\approx 1.4 M_\\odot$) is derived from the balance between:',
    options: ['Electron degeneracy pressure and gravitational collapse', 'Radiation pressure and gravity', 'Nuclear fusion energy and neutrino cooling', 'Magnetic pressure and thermal pressure'],
    correctIndex: 0,
    explanation: 'White dwarfs are supported by electron degeneracy pressure (Pauli exclusion principle). Above ~1.4 M☉, relativistic effects weaken this support and gravity wins, leading to neutron star formation or Type Ia supernova.',
    realWorld: 'Chandrasekhar derived this at age 19 on a ship from India to England — and was publicly ridiculed by Eddington for the result.',
    hint: 'Quantum mechanics (Pauli exclusion) fights gravity — but relativity tips the balance at high mass.',
    glossaryLinks: ['fermi-dirac'],
  },
  {
    id: 90902, topic: 'subrahmanyan-chandrasekhar', difficulty: 'sota',
    question: 'Chandrasekhar\'s work on radiative transfer introduced the concept of:',
    options: ['Discrete ordinates method for solving the transfer equation', 'Blackbody radiation formula', 'Stellar nucleosynthesis pathways', 'Gravitational lensing geometry'],
    correctIndex: 0,
    explanation: 'His 1950 book "Radiative Transfer" developed the discrete ordinates (S_N) method, transforming the integro-differential transfer equation into a solvable system of ODEs.',
    realWorld: 'The discrete ordinates method is still used in nuclear reactor design, atmospheric modeling, and computer graphics (ray tracing).',
    hint: 'He discretized angles to turn an impossible integral equation into something computable.',
  },
  {
    id: 90903, topic: 'subrahmanyan-chandrasekhar', difficulty: 'sota',
    question: 'Chandrasekhar\'s study of rotating fluid masses (Chandrasekhar-Friedman-Schutz instability) is relevant to:',
    options: ['Gravitational wave emission from rapidly rotating neutron stars', 'Solar flare prediction', 'Planetary ring formation', 'Comet trajectory calculation'],
    correctIndex: 0,
    explanation: 'The CFS instability causes rapidly rotating neutron stars to emit gravitational waves by coupling fluid oscillation modes to gravitational radiation, spinning the star down.',
    realWorld: 'LIGO searches for continuous gravitational waves from spinning neutron stars are directly testing Chandrasekhar\'s instability predictions.',
    hint: 'A spinning star that wobbles can radiate energy as ripples in spacetime.',
    glossaryLinks: ['stochastic-process'],
  },
  {
    id: 90904, topic: 'subrahmanyan-chandrasekhar', difficulty: 'hard',
    question: 'Chandrasekhar recognized and expanded upon the stochastic process methods pioneered by:',
    options: ['Marian Smoluchowski', 'Albert Einstein alone', 'Max Planck', 'Niels Bohr'],
    correctIndex: 0,
    explanation: 'In his influential 1943 Reviews of Modern Physics article on stochastic problems, Chandrasekhar explicitly credited Smoluchowski as a co-founder (with Einstein) of the theory of Brownian motion and stochastic processes.',
    realWorld: 'Chandrasekhar\'s review article unified Smoluchowski\'s and Einstein\'s approaches and became one of the most cited physics reviews of the 20th century.',
    hint: 'Two physicists independently explained Brownian motion — Chandrasekhar unified their work.',
    glossaryLinks: ['brownian-motion', 'stochastic-process', 'diffusion'],
  },
];
