import type { Question } from '../types';

export const kenichiFukuiQuestions: Question[] = [
  {
    id: 50025,
    topic: 'kenichi-fukui',
    difficulty: 'easy',
    question: 'Kenichi Fukui shared the 1981 Nobel Prize for developing frontier molecular orbital (FMO) theory. What are the "frontier orbitals"?',
    options: [
      'The highest occupied molecular orbital (HOMO) and the lowest unoccupied molecular orbital (LUMO)',
      'The 1s core orbitals of all atoms in a molecule',
      'The d-orbitals of transition metal complexes only',
      'Any antibonding orbital regardless of energy'
    ],
    correctIndex: 0,
    explanation: 'Fukui showed that chemical reactivity is dominated by the HOMO (electron donor) and LUMO (electron acceptor). The HOMO-LUMO interaction determines regioselectivity, reaction rates, and stereochemistry — not the total electron density.',
    realWorld: 'FMO theory guides drug design (predicting where molecules react), catalyst development, and materials science (tuning HOMO-LUMO gaps for semiconductors and OLEDs).',
    hint: 'The two orbitals at the "frontier" between filled and empty energy levels.'
  },
  {
    id: 50026,
    topic: 'kenichi-fukui',
    difficulty: 'hard',
    question: 'In FMO theory, the Diels-Alder reaction between a diene and a dienophile is governed by which orbital interaction?',
    options: [
      'HOMO$_{\\text{diene}}$ interacting with LUMO$_{\\text{dienophile}}$ — a normal electron-demand Diels-Alder reaction',
      'LUMO$_{\\text{diene}}$ interacting with LUMO$_{\\text{dienophile}}$ — both accepting electrons',
      'Core 1s orbitals of carbon overlapping during bond formation',
      'HOMO$_{\\text{dienophile}}$ interacting with HOMO$_{\\text{diene}}$ — both donating electrons'
    ],
    correctIndex: 0,
    explanation: 'In a normal-demand Diels-Alder, electron-donating groups on the diene raise its HOMO, and electron-withdrawing groups on the dienophile lower its LUMO, shrinking the HOMO-LUMO gap and accelerating the reaction. The coefficient matching between HOMO and LUMO predicts regiochemistry (ortho/para selectivity).',
    realWorld: 'The Diels-Alder reaction is one of the most powerful C–C bond-forming reactions in synthetic chemistry, used in the synthesis of steroids, terpenes, and polymers.',
    hint: 'The electron-rich diene donates from its HOMO; the electron-poor dienophile accepts into its LUMO.'
  },
  {
    id: 50027,
    topic: 'kenichi-fukui',
    difficulty: 'sota',
    question: 'Fukui introduced "Fukui functions" $f(\\mathbf{r})$ in conceptual DFT as reactivity descriptors. The Fukui function for nucleophilic attack is defined as:',
    options: [
      '$f^+(\\mathbf{r}) = \\rho_{N+1}(\\mathbf{r}) - \\rho_N(\\mathbf{r})$, the electron density change upon adding one electron',
      '$f^-(\\mathbf{r}) = \\rho_N(\\mathbf{r}) + \\rho_{N-1}(\\mathbf{r})$, the sum of two densities',
      '$f^0(\\mathbf{r}) = \\nabla^2 \\rho_N(\\mathbf{r})$, the Laplacian of electron density',
      '$f(\\mathbf{r}) = |\\psi_{HOMO}(\\mathbf{r})|^2$ exactly, independent of the number of electrons'
    ],
    correctIndex: 0,
    explanation: 'Fukui functions measure local reactivity:\n- $f^+(\\mathbf{r}) = \\rho_{N+1} - \\rho_N$: susceptibility to nucleophilic attack (where does an added electron go?)\n- $f^-(\\mathbf{r}) = \\rho_N - \\rho_{N-1}$: susceptibility to electrophilic attack\n- $f^0 = (f^+ + f^-)/2$: radical attack\n\nIn the frozen-orbital approximation, $f^+ \\approx |\\psi_{LUMO}|^2$ and $f^- \\approx |\\psi_{HOMO}|^2$, recovering the original FMO picture.',
    realWorld: 'Computational chemists calculate Fukui functions to predict reactive sites on complex molecules, guiding regioselective synthesis and catalyst design in pharmaceutical R&D.',
    hint: 'It measures how electron density changes when you add or remove an electron — a finite-difference derivative of $\\rho$ with respect to $N$.'
  }
];
