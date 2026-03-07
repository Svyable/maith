import type { GlossaryTerm } from './types';

export const quantumGravityTerms: GlossaryTerm[] = [
  {
    id: 'ads-cft', field: 'physics', topic: 'quantum-gravity',
    term: 'AdS/CFT Correspondence',
    definition: 'Maldacena\'s conjecture that a gravitational theory in anti-de Sitter space is dual to a conformal field theory on its boundary — a realization of the holographic principle.',
    example: 'Used to compute quark-gluon plasma viscosity, matching RHIC experiments.',
    thinkerLinks: ['maldacena'],
    related: ['holographic-principle', 'black-hole-entropy'],
    difficulty: 'advanced',
  },
  {
    id: 'holographic-principle', field: 'physics', topic: 'quantum-gravity',
    term: 'Holographic Principle',
    definition: 'The maximum entropy of a region scales with its boundary area, not volume: $S \\leq A/(4G\\hbar)$. Information in 3D space is encoded on a 2D surface.',
    formula: '$S \\leq \\frac{A}{4G\\hbar}$',
    latex: 'S \\leq \\frac{A}{4G\\hbar}',
    thinkerLinks: ['thooft', 'susskind'],
    related: ['ads-cft', 'black-hole-entropy'],
    difficulty: 'advanced',
  },
  {
    id: 'black-hole-entropy', field: 'physics', topic: 'quantum-gravity',
    term: 'Bekenstein–Hawking Entropy',
    definition: 'A black hole\'s entropy is proportional to its event horizon area: $S_{BH} = \\frac{k_B c^3 A}{4G\\hbar}$.',
    formula: '$S_{BH} = \\frac{k_B c^3 A}{4G\\hbar}$',
    latex: 'S_{BH} = \\frac{k_B c^3 A}{4G\\hbar}',
    thinkerLinks: ['hawking'],
    formulaLinks: ['bekenstein-hawking'],
    related: ['holographic-principle'],
    difficulty: 'advanced',
  },
];
