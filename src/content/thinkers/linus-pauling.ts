import type { Question } from '../types';

export const linusPaulingQuestions: Question[] = [
  {
    id: 496030, topic: 'linus-pauling', difficulty: 'easy',
    question: 'Linus Pauling\'s concept of electronegativity describes:',
    options: ['An atom\'s tendency to attract shared electrons in a bond', 'The total number of electrons in an atom', 'The energy released during nuclear fission', 'The speed of electron orbit'],
    correctIndex: 0,
    explanation: 'Pauling defined electronegativity as the power of an atom in a molecule to attract electrons to itself, creating the famous Pauling scale used universally.',
    realWorld: 'Electronegativity predicts bond polarity, solubility, and reactivity — essential for drug design and materials science.',
    hint: 'Fluorine has the highest value on this scale.',
  },
  {
    id: 96031, topic: 'linus-pauling', difficulty: 'hard',
    question: 'Pauling\'s hybridization theory explains molecular geometry by:',
    options: ['Mixing atomic orbitals to form equivalent hybrid orbitals (sp, sp², sp³)', 'Counting total electron pairs only', 'Using relativistic corrections to Schrödinger\'s equation', 'Applying molecular orbital theory exclusively'],
    correctIndex: 0,
    explanation: 'Pauling proposed that atomic orbitals (s, p, d) can mix to form hybrid orbitals that explain observed geometries — sp³ gives tetrahedral, sp² gives trigonal planar.',
    realWorld: 'Carbon\'s sp³ hybridization explains why methane is tetrahedral and why diamond is so hard.',
    hint: 'Carbon in methane uses four equivalent orbitals arranged tetrahedrally.',
  },
  {
    id: 96032, topic: 'linus-pauling', difficulty: 'sota',
    question: 'Pauling\'s prediction of the protein α-helix was confirmed by:',
    options: ['X-ray diffraction patterns matching his model\'s predicted repeat distance of 5.4 Å', 'NMR spectroscopy of amino acids', 'Electron microscopy of denatured proteins', 'Mass spectrometry of peptide fragments'],
    correctIndex: 0,
    explanation: 'Pauling and Corey predicted the α-helix (1951) using model building and chemical principles. X-ray crystallography confirmed the 5.4 Å repeat distance, establishing structural biology.',
    realWorld: 'The α-helix is found in virtually all proteins, from keratin in hair to hemoglobin in blood.',
    hint: 'He built physical models of amino acid chains to find stable conformations.',
  },
];
