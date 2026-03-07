import type { GlossaryTerm } from '../types';

export const manyBodyTerms: GlossaryTerm[] = [
  {
    id: 'dft-gloss', field: 'physics', topic: 'many-body-physics',
    term: 'Density Functional Theory',
    definition: 'A quantum mechanical method where the many-electron problem is reformulated in terms of the electron density $n(\\mathbf{r})$ rather than the many-body wavefunction.',
    example: 'DFT calculations predicted the crystal structure of high-pressure hydrogen.',
    thinkerLinks: ['kohn'],
    formulaLinks: ['kohn-sham'],
    related: ['hubbard-model'],
    difficulty: 'advanced',
  },
  {
    id: 'hubbard-model', field: 'physics', topic: 'many-body-physics',
    term: 'Hubbard Model',
    definition: 'A lattice model with hopping $t$ and on-site repulsion $U$: $H = -t\\sum_{\\langle ij \\rangle} c_i^\\dagger c_j + U\\sum_i n_{i\\uparrow}n_{i\\downarrow}$. Captures the interplay of itinerancy and strong correlations.',
    formula: '$H = -t\\sum_{\\langle ij \\rangle} c_i^\\dagger c_j + U\\sum_i n_{i\\uparrow}n_{i\\downarrow}$',
    latex: 'H = -t\\sum_{\\langle ij \\rangle} c_i^\\dagger c_j + U\\sum_i n_{i\\uparrow}n_{i\\downarrow}',
    example: 'Believed to capture the essential physics of high-temperature superconductors.',
    related: ['dft-gloss', 'bcs-theory'],
    difficulty: 'advanced',
  },
  {
    id: 'second-quantization', field: 'physics', topic: 'many-body-physics',
    term: 'Second Quantization',
    definition: 'A formalism promoting fields to operators satisfying canonical (anti-)commutation relations, enabling natural treatment of identical particles.',
    example: 'Creation and annihilation operators $a^\\dagger, a$ elegantly handle photon counting in quantum optics.',
    related: ['path-integral-gloss'],
    difficulty: 'intermediate',
  },
];
