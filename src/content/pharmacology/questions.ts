import type { Question } from '../types';

export const pharmacologyQuestions: Question[] = [
  {
    id: 41501, topic: 'pharmacology', difficulty: 'easy',
    question: 'Drug-receptor binding follows the law of mass action, where potency is measured by:',
    options: [
      'EC₅₀ — the drug concentration producing 50% of maximum effect; lower EC₅₀ means higher potency',
      'The color of the pill',
      'How quickly the drug dissolves in water',
      'The molecular weight of the drug',
    ],
    correctIndex: 0,
    explanation: 'The dose-response curve relates drug concentration to biological effect. EC₅₀ (half-maximal effective concentration) quantifies potency. Efficacy (maximum achievable effect) and potency are independent properties.',
    realWorld: 'Fentanyl has an EC₅₀ ~100× lower than morphine — it\'s 100× more potent. AI drug discovery (AlphaFold + molecular docking) predicts EC₅₀ computationally, reducing the need for animal testing.',
    hint: 'The dose that gives you half the maximum effect — lower means the drug works at smaller amounts.',
  },
  {
    id: 41502, topic: 'pharmacology', difficulty: 'hard',
    question: 'Pharmacokinetics follows the ADME model, which describes:',
    options: [
      'Absorption (how drug enters blood), Distribution (where it goes), Metabolism (how liver transforms it), Excretion (how kidneys remove it) — determining drug concentration over time',
      'The four stages of drug approval by the FDA',
      'Four types of drug side effects',
      'The four main drug manufacturing steps',
    ],
    correctIndex: 0,
    explanation: 'ADME determines the drug\'s concentration-time profile. First-pass metabolism (liver processes oral drugs before systemic circulation) explains why oral and IV doses differ. Half-life ($t_{1/2} = \\ln 2 / k_e$) determines dosing frequency.',
    realWorld: 'ML models now predict ADME properties from molecular structure alone, reducing drug development time from 10-15 years. Poor ADME is the #1 reason drugs fail in clinical trials.',
    hint: 'Four steps: how does the drug get in, spread around, get processed, and get removed?',
  },
  {
    id: 41503, topic: 'pharmacology', difficulty: 'sota',
    question: 'AI-driven drug discovery using diffusion models (RFDiffusion, DiffDock) works by:',
    options: [
      'Generating novel protein structures or predicting ligand binding poses by iteratively denoising random 3D coordinates — learning the distribution of physically valid molecular conformations',
      'Randomly trying every possible molecule until one works',
      'Using only 2D molecular fingerprints without 3D information',
      'Replacing all wet-lab experiments with simulations',
    ],
    correctIndex: 0,
    explanation: 'Diffusion models learn the distribution of valid 3D molecular structures by training to denoise corrupted atomic coordinates. RFDiffusion generates novel protein binders; DiffDock predicts how drugs dock into protein pockets.',
    realWorld: 'RFDiffusion designed novel protein binders for flu, COVID, and cancer targets that worked in the lab on the first try — a process that previously took years of experimental iteration.',
    hint: 'Start with random atomic positions and gradually refine them into physically realistic molecules — like a sculptor emerging from noise.',
  },
];
