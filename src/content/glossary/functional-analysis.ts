import type { GlossaryTerm } from './types';

export const functionalAnalysisTerms: GlossaryTerm[] = [
  {
    id: 'hilbert-space', field: 'math', topic: 'functional-analysis',
    term: 'Hilbert Space',
    definition: 'A complete inner product space generalizing Euclidean geometry to infinite dimensions. The inner product $\\langle f, g \\rangle$ induces a norm and metric.',
    example: 'Quantum states live in a Hilbert space; $L^2$ functions form one.',
    symbolLinks: { 'L': 'lambda' },
    thinkerLinks: ['hilbert'],
    related: ['banach-space', 'superposition'],
    difficulty: 'intermediate',
  },
  {
    id: 'banach-space', field: 'math', topic: 'functional-analysis',
    term: 'Banach Space',
    definition: 'A complete normed vector space — every Cauchy sequence converges. Hilbert spaces are Banach spaces with the additional structure of an inner product.',
    example: '$L^p$ spaces for $p \\neq 2$ are Banach but not Hilbert.',
    thinkerLinks: ['banach'],
    related: ['hilbert-space'],
    difficulty: 'intermediate',
  },
  {
    id: 'spectral-theorem-gloss', field: 'math', topic: 'functional-analysis',
    term: 'Spectral Theorem',
    definition: 'Self-adjoint operators on a Hilbert space can be "diagonalized" via a projection-valued measure, generalizing eigendecomposition to infinite dimensions.',
    example: 'Underlies the measurement postulate of quantum mechanics: observables have real eigenvalues.',
    symbolLinks: { 'λ': 'lambda' },
    related: ['hilbert-space', 'eigenvalue'],
    difficulty: 'advanced',
  },
  {
    id: 'compact-operator', field: 'math', topic: 'functional-analysis',
    term: 'Compact Operator',
    definition: 'A bounded linear operator that maps bounded sets to relatively compact sets. Compact operators have discrete spectra accumulating only at 0.',
    example: 'Integral operators with square-integrable kernels are compact (Hilbert–Schmidt).',
    related: ['spectral-theorem-gloss', 'banach-space'],
    difficulty: 'advanced',
  },
];
