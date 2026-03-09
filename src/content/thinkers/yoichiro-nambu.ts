import type { Question } from '../types';

export const yoichiroNambuQuestions: Question[] = [
  {
    id: 10637,
    topic: 'yoichiro-nambu',
    difficulty: 'easy',
    question: 'Nambu-Goldstone bosons arise when:',
    options: [
      'A continuous symmetry is spontaneously broken — one massless boson appears for each broken generator',
      'Particles collide at very high energies',
      'A discrete symmetry like parity is violated',
      'Electrons pair up in a superconductor',
    ],
    correctIndex: 0,
    explanation: 'When a continuous symmetry is spontaneously broken, Goldstone\'s theorem guarantees massless scalar bosons — one for each broken symmetry generator. Nambu pioneered this concept in particle physics.',
    realWorld: 'Pions in QCD are approximate Nambu-Goldstone bosons from chiral symmetry breaking. They\'re light (not massless) because the symmetry is only approximate.',
    hint: 'Breaking symmetry creates massless particles.',
  },
  {
    id: 10638,
    topic: 'yoichiro-nambu',
    difficulty: 'hard',
    question: 'In the Nambu-Jona-Lasinio model, chiral symmetry breaking generates:',
    options: [
      'Dynamical quark masses from strong interactions, even if bare masses are zero',
      'The mass of the W and Z bosons',
      'Gravitational attraction between hadrons',
      'The fine structure constant α',
    ],
    correctIndex: 0,
    explanation: 'The NJL model (1961) showed that strong attractive interactions between fermions can spontaneously break chiral symmetry, generating constituent quark masses (~300 MeV) from nearly massless current quarks (~5 MeV).',
    realWorld: 'This mechanism explains why protons and neutrons are heavy: most of their mass comes from chiral symmetry breaking, not the Higgs mechanism.',
    hint: 'Strong interactions can make light quarks act heavy.',
  },
  {
    id: 10639,
    topic: 'yoichiro-nambu',
    difficulty: 'sota',
    question: 'Nambu proposed that quarks carry a hidden quantum number called "color" to resolve:',
    options: [
      'The spin-statistics problem for baryons like Ω⁻ — allowing three identical strange quarks in a symmetric state',
      'Why protons are stable against decay',
      'The mass hierarchy between generations',
      'CP violation in kaon decays',
    ],
    correctIndex: 0,
    explanation: 'The Ω⁻ baryon (sss) has three identical strange quarks in a symmetric spin state, violating Fermi statistics. Nambu proposed color (three values) so the total wave function is antisymmetric: ψ_total = ψ_color × ψ_space,spin,flavor.',
    realWorld: 'Color charge became the foundation of QCD. The three colors (red, green, blue) and their anticolors are now fundamental to our understanding of the strong force.',
    hint: 'Three identical fermions need a hidden degree of freedom to obey quantum statistics.',
  },
];
