import type { GlossaryTerm } from '../types';

export const condensedMatterTerms: GlossaryTerm[] = [
  {
    id: 'band-gap', field: 'physics', topic: 'condensed-matter',
    term: 'Band Gap',
    definition: 'The energy range in a solid where no electron states exist, separating the valence and conduction bands. Determines if a material is a conductor, semiconductor, or insulator.',
    example: 'Silicon\'s 1.1 eV band gap makes it ideal for solar cells and transistors.',
    related: ['fermi-dirac', 'bloch-theorem'],
    difficulty: 'intro',
  },
  {
    id: 'bloch-theorem', field: 'physics', topic: 'condensed-matter',
    term: 'Bloch\'s Theorem',
    definition: 'In a periodic potential, electron wavefunctions take the form $\\psi_{nk}(r) = e^{ik\\cdot r} u_{nk}(r)$ where $u$ has the lattice periodicity.',
    formula: '$\\psi_{nk}(\\mathbf{r}) = e^{i\\mathbf{k}\\cdot\\mathbf{r}} u_{nk}(\\mathbf{r})$',
    latex: '\\psi_{nk}(\\mathbf{r}) = e^{i\\mathbf{k}\\cdot\\mathbf{r}} u_{nk}(\\mathbf{r})',
    symbolLinks: { 'ψ': 'psi', 'k': 'kappa' },
    related: ['band-gap'],
    difficulty: 'intermediate',
  },
  {
    id: 'bcs-theory', field: 'physics', topic: 'condensed-matter',
    term: 'BCS Theory',
    definition: 'Bardeen–Cooper–Schrieffer theory of superconductivity: electrons form Cooper pairs via phonon-mediated attraction, condensing into a macroscopic quantum state.',
    example: 'Explains why certain materials have zero electrical resistance below a critical temperature.',
    formulaLinks: ['bcs-gap-equation'],
    related: ['cooper-pair'],
    difficulty: 'advanced',
  },
  {
    id: 'cooper-pair', field: 'physics', topic: 'condensed-matter',
    term: 'Cooper Pair',
    definition: 'A bound state of two electrons with opposite spin and momentum, mediated by lattice vibrations (phonons). The pairing mechanism underlying conventional superconductivity.',
    example: 'Cooper pairs carry supercurrent without resistance in metals like aluminium below 1.2 K.',
    related: ['bcs-theory'],
    difficulty: 'intermediate',
  },
  {
    id: 'topological-insulator', field: 'physics', topic: 'condensed-matter',
    term: 'Topological Insulator',
    definition: 'A material that is insulating in the bulk but has conducting surface states protected by time-reversal symmetry and characterized by topological invariants.',
    example: 'Bi₂Se₃ hosts a single Dirac cone surface state used in spintronics research.',
    difficulty: 'advanced',
  },
];
