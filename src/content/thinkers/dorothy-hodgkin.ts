import type { Question } from '../types';

export const dorothyHodgkinQuestions: Question[] = [
  {
    id: 20115, topic: 'dorothy-hodgkin', difficulty: 'easy',
    question: 'Dorothy Hodgkin won the Nobel Prize in Chemistry for her work using which technique?',
    options: ['X-ray crystallography', 'NMR spectroscopy', 'Mass spectrometry', 'Electron microscopy'],
    correctIndex: 0,
    explanation: 'Hodgkin used X-ray crystallography to determine the 3D structures of penicillin, vitamin B12, and insulin.',
    realWorld: 'X-ray crystallography remains the gold standard for determining protein structures, with over 200,000 structures in the PDB.',
    hint: 'Crystals diffract electromagnetic radiation to reveal atomic positions.',
  },
  {
    id: 20116, topic: 'dorothy-hodgkin', difficulty: 'hard',
    question: 'Which molecule\'s structure took Hodgkin 35 years to solve, completed in 1969?',
    options: ['Insulin', 'Penicillin', 'Vitamin B12', 'Cholesterol'],
    correctIndex: 0,
    explanation: 'Hodgkin began working on insulin in 1934 and finally determined its full 3D structure in 1969 — requiring advances in computing.',
    realWorld: 'Understanding insulin\'s structure enabled engineering of fast-acting and long-acting insulin analogs for diabetes treatment.',
    hint: 'This hormone regulates blood sugar and was the first protein to be sequenced.',
  },
  {
    id: 20117, topic: 'dorothy-hodgkin', difficulty: 'sota',
    question: 'In solving vitamin B12\'s structure, Hodgkin applied which technique to resolve the crystallographic phase problem?',
    options: ['Isomorphous replacement', 'Direct methods', 'Molecular replacement', 'Anomalous dispersion'],
    correctIndex: 0,
    explanation: 'Hodgkin used isomorphous replacement — comparing diffraction patterns with and without heavy atoms — to solve the phase problem for B12.',
    realWorld: 'AlphaFold now predicts protein structures computationally, but experimental crystallography with phase solution methods remains essential for validation.',
    hint: 'Heavy atoms are introduced into the crystal to create measurable differences in diffraction intensities.',
  },
  {
    id: 20121, topic: 'dorothy-hodgkin', difficulty: 'hard',
    question: 'Hodgkin\'s crystallography relied on Bragg\'s law, the fundamental equation of X-ray diffraction. What is Bragg\'s law?',
    options: [
      '$n\\lambda = 2d\\sin\\theta$ — constructive interference occurs when the path difference between X-rays reflected from parallel crystal planes equals an integer multiple of the wavelength.',
      '$E = hf$ — the energy of the diffracted X-ray equals Planck\'s constant times its frequency, determining which reflections are allowed.',
      '$\\Delta x \\cdot \\Delta p \\geq \\hbar/2$ — the uncertainty principle limits the resolution of crystal structure determination.',
      '$I \\propto |F(\\mathbf{h})|^2 / V^2$ — the intensity is proportional to the structure factor squared, with no angular dependence.'
    ],
    correctIndex: 0,
    explanation: 'Bragg\'s law states that X-rays reflected from crystal planes with spacing $d$ produce constructive interference at angle $\\theta$ when $n\\lambda = 2d\\sin\\theta$. Each diffraction spot corresponds to a set of parallel planes, and the pattern encodes the 3D arrangement of atoms.',
    realWorld: 'Bragg\'s law enabled Hodgkin to determine interatomic distances with sub-angstrom precision, resolving the positions of every non-hydrogen atom in penicillin and B12.',
    hint: 'The path difference between waves reflecting off adjacent crystal planes must equal a whole number of wavelengths.',
  },
  {
    id: 20122, topic: 'dorothy-hodgkin', difficulty: 'sota',
    question: 'The "phase problem" that Hodgkin solved for vitamin B12 arises because X-ray detectors measure only intensities $I(\\mathbf{h}) = |F(\\mathbf{h})|^2$. What information is lost and why is it critical?',
    options: [
      'The complex phase $\\phi(\\mathbf{h})$ of the structure factor $F(\\mathbf{h}) = |F|e^{i\\phi}$ is lost. Without phases, the electron density $\\rho(\\mathbf{r}) = \\frac{1}{V}\\sum_{\\mathbf{h}} F(\\mathbf{h})e^{-2\\pi i \\mathbf{h}\\cdot\\mathbf{r}}$ cannot be computed from intensities alone.',
      'The polarization state of the diffracted X-ray is lost, making it impossible to distinguish between left-handed and right-handed crystal enantiomers.',
      'The time-dependent oscillation frequency of each atom is lost, preventing determination of thermal displacement parameters (B-factors).',
      'The coherence length of the incident X-ray beam is lost, limiting resolution to no better than the beam\'s temporal coherence length.'
    ],
    correctIndex: 0,
    explanation: 'The electron density is reconstructed via an inverse Fourier transform of the structure factors $F(\\mathbf{h})$. Since detectors record only $|F|^2$, the phase $\\phi$ — which encodes the positions of atoms — is missing. Hodgkin\'s isomorphous replacement method recovered phases by comparing crystals with and without heavy atoms.',
    realWorld: 'The phase problem remains central to structural biology. Modern solutions include molecular replacement (using known homologous structures), anomalous dispersion (MAD/SAD), and direct methods for small molecules.',
    hint: 'Detectors measure how bright each spot is, but not the wave\'s crest/trough alignment — yet that alignment encodes atom positions.',
  },
  {
    id: 20123, topic: 'dorothy-hodgkin', difficulty: 'easy',
    question: 'Hodgkin determined the structure of penicillin in 1945, settling a fierce debate in chemistry. What structural feature did she reveal that surprised organic chemists?',
    options: [
      'A strained four-membered β-lactam ring — a structure so unusual that leading chemists like Robert Robinson refused to believe it existed.',
      'A triple bond between carbon and nitrogen — unprecedented in biological molecules at the time.',
      'A metal center coordinating six amino acid residues — making penicillin the first known metalloenzyme.',
      'A fully planar aromatic ring system — showing penicillin was a derivative of benzene.'
    ],
    correctIndex: 0,
    explanation: 'Hodgkin\'s crystal structure proved that penicillin contains a β-lactam ring — a highly strained 4-membered ring with a nitrogen atom. Robert Robinson, then the most eminent organic chemist alive, had argued this was chemically impossible. The β-lactam ring is precisely what gives penicillin its antibiotic activity.',
    realWorld: 'Every β-lactam antibiotic (penicillins, cephalosporins, carbapenems) works by the same mechanism Hodgkin\'s structure revealed: the strained ring acylates a serine in bacterial transpeptidase, blocking cell wall synthesis.',
    hint: 'A ring so small and strained that the leading organic chemist of the era said it couldn\'t exist in nature.',
  },
];
