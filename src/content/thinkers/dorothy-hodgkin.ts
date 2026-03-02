import type { Question } from '../types';

export const hodgkinQuestions: Question[] = [
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
];
