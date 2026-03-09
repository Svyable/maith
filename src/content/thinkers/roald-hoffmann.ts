import type { Question } from '../types';

export const roaldHoffmannQuestions: Question[] = [
  {
    id: 50028,
    topic: 'roald-hoffmann',
    difficulty: 'easy',
    question: 'Roald Hoffmann shared the 1981 Nobel Prize with Fukui. What is the central principle of the Woodward-Hoffmann rules?',
    options: [
      'Conservation of orbital symmetry — pericyclic reactions are allowed only when the symmetry of reactant and product orbitals is preserved',
      'Conservation of mass — the total mass of reactants equals that of products',
      'Conservation of charge — no electrons are created or destroyed',
      'Conservation of spin — all reactions preserve total spin angular momentum'
    ],
    correctIndex: 0,
    explanation: 'The Woodward-Hoffmann rules classify pericyclic reactions (electrocyclic, cycloaddition, sigmatropic) as symmetry-"allowed" or "forbidden" based on the correlation of bonding orbital symmetry. Allowed reactions have low activation barriers; forbidden ones are kinetically inaccessible under thermal conditions.',
    realWorld: 'Synthetic chemists use these rules daily to predict whether a ring closure, [4+2] cycloaddition, or [1,5]-sigmatropic shift will proceed thermally or photochemically.',
    hint: 'Orbital symmetry must be preserved — reactions that violate this have high barriers.'
  },
  {
    id: 50029,
    topic: 'roald-hoffmann',
    difficulty: 'hard',
    question: 'Hoffmann developed the "isolobal analogy," a powerful tool in organometallic chemistry. Two molecular fragments are isolobal when they have:',
    options: [
      'Frontier orbitals of similar symmetry, shape, energy, and electron count — making them interchangeable in bonding',
      'Identical molecular weights and atomic compositions',
      'The same color in solution',
      'Equal numbers of lone pairs, regardless of orbital symmetry'
    ],
    correctIndex: 0,
    explanation: 'Hoffmann showed that fragments like $CH_3$ and $Mn(CO)_5$ are isolobal ($\\longleftrightarrow$): both have one frontier orbital with one electron available for bonding. This analogy predicts that $Mn_2(CO)_{10}$ should exist (like $C_2H_6$), and it does! The analogy extends to $CH_2 \\longleftrightarrow Fe(CO)_4$, $CH \\longleftrightarrow Co(CO)_3$, etc.',
    realWorld: 'The isolobal analogy allows chemists to predict the stability and structure of novel organometallic compounds and catalysts before synthesizing them.',
    hint: 'If two fragments have matching frontier orbitals, they are chemically interchangeable — "isolobal."'
  },
  {
    id: 50030,
    topic: 'roald-hoffmann',
    difficulty: 'sota',
    question: 'Hoffmann\'s extended Hückel theory (EHT) was a foundational computational method. What approximation distinguishes EHT from Hückel theory?',
    options: [
      'EHT includes all valence orbitals (s, p, d) and approximates off-diagonal Hamiltonian elements using the Wolfsberg-Helmholz formula: $H_{ij} = \\frac{K}{2}(H_{ii} + H_{jj})S_{ij}$',
      'EHT treats only π-electrons and ignores σ-bonding entirely',
      'EHT uses full electron correlation at the CCSD(T) level',
      'EHT solves the Dirac equation including relativistic spin-orbit coupling'
    ],
    correctIndex: 0,
    explanation: 'Extended Hückel theory includes all valence electrons (not just π), uses explicit overlap integrals $S_{ij}$, and approximates off-diagonal matrix elements with the Wolfsberg-Helmholz formula ($K \\approx 1.75$). Despite its simplicity (no electron-electron repulsion), EHT correctly predicts band structures, orbital symmetries, and qualitative bonding trends across the periodic table.',
    realWorld: 'EHT remains useful for qualitative understanding of band structures in solids, surface chemistry, and as a starting point for more sophisticated calculations in materials science.',
    hint: 'He extended Hückel from π-only to all valence orbitals, using overlap-weighted Hamiltonian elements.'
  }
];
