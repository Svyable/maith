import type { Question } from '../types';

export const robertBunsenQuestions: Question[] = [
  {
    id: 21601, topic: 'robert-bunsen', difficulty: 'easy',
    question: 'Robert Bunsen and Gustav Kirchhoff pioneered spectroscopy by showing that:',
    options: ['Each element produces a unique set of spectral emission lines when heated in a flame', 'All elements emit the same color when burned', 'Spectral lines are caused by impurities only', 'Flame color depends solely on temperature, not composition'],
    correctIndex: 0,
    explanation: 'Bunsen and Kirchhoff demonstrated that every element has a unique spectral fingerprint — specific wavelengths of light emitted when its atoms are excited. This enabled chemical identification at a distance.',
    realWorld: 'Emission spectroscopy is how we know the composition of stars, detect contaminants in metals, and analyze forensic evidence.',
    hint: 'Just as fingerprints identify people, spectral lines identify elements.',
  },
  {
    id: 21602, topic: 'robert-bunsen', difficulty: 'hard',
    question: 'Using their new spectroscopic method, Bunsen and Kirchhoff discovered two new elements in 1860–1861:',
    options: ['Cesium (sky-blue spectral lines) and rubidium (deep red spectral lines)', 'Sodium and potassium', 'Helium and argon', 'Oxygen and nitrogen'],
    correctIndex: 0,
    explanation: 'Cesium (Latin caesius = "sky blue") was named for its bright blue spectral lines; rubidium (Latin rubidus = "deep red") for its red lines. Both were detected in mineral water residues that showed unknown spectral lines.',
    realWorld: 'Cesium is used in atomic clocks (GPS timing accuracy of ~1 ns) and rubidium in magnetometers and quantum computing research.',
    hint: 'They named the elements after the colors of their most prominent spectral lines.',
  },
  {
    id: 21603, topic: 'robert-bunsen', difficulty: 'sota',
    question: 'The Bunsen burner was designed to produce a non-luminous flame specifically because:',
    options: ['A soot-free, colorless flame was needed so that only the spectral emission of the sample would be visible', 'Luminous flames are hotter and would melt equipment', 'Non-luminous flames consume less gas', 'Luminous flames produce toxic fumes'],
    correctIndex: 0,
    explanation: 'The Bunsen burner premixes gas with air, producing complete combustion and a nearly invisible flame. This was essential for spectroscopy — any soot or flame color would contaminate the emission spectrum being analyzed.',
    realWorld: 'The Bunsen burner remains standard in every chemistry lab worldwide. Its design principle (premixed combustion) is also used in gas turbines and catalytic converters.',
    hint: 'If your goal is to see the color an element produces, you need a flame that has no color of its own.',
  },
];
