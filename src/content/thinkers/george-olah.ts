import type { Question } from '../types';

export const georgeOlahQuestions: Question[] = [
  {
    id: 22001, topic: 'george-olah', difficulty: 'easy',
    question: 'George Olah won the 1994 Nobel Prize for his work on carbocations. He was able to observe these reactive intermediates by:',
    options: ['Stabilizing them in superacid media (like SbF₅/FSO₃H) at low temperatures, enabling NMR study', 'Trapping them in solid crystals at room temperature', 'Using high-pressure gas-phase experiments', 'Observing them only computationally'],
    correctIndex: 0,
    explanation: 'Superacids (billions of times stronger than sulfuric acid) protonate even weak bases and stabilize carbocations long enough for spectroscopic observation. Olah used "Magic Acid" (FSO₃H·SbF₅) to generate persistent carbocations.',
    realWorld: 'Understanding carbocation intermediates improved catalytic cracking in petroleum refining — the process that produces gasoline from crude oil.',
    hint: 'Extremely strong acids can protonate almost anything, making fleeting intermediates long-lived enough to study.',
  },
  {
    id: 22002, topic: 'george-olah', difficulty: 'hard',
    question: 'Olah demonstrated the existence of non-classical carbocations, such as the norbornyl cation. What makes it "non-classical"?',
    options: ['It features a three-center two-electron (3c-2e) bond where positive charge is delocalized over a bridging structure', 'It has an unusually large number of hydrogens', 'It is negatively charged despite being called a cation', 'It only exists in the gas phase'],
    correctIndex: 0,
    explanation: 'The norbornyl cation has a σ-bridged structure where two carbon atoms and one hydrogen share two electrons in a 3c-2e bond. This non-classical bonding creates a symmetrically bridged ion with delocalized positive charge.',
    realWorld: 'Non-classical ions helped chemists understand hyperconjugation, neighboring group participation, and rearrangement reactions in organic synthesis.',
    hint: 'In "classical" ions, charge sits on one carbon. In "non-classical" ions, charge is shared over a bridge.',
  },
  {
    id: 22003, topic: 'george-olah', difficulty: 'sota',
    question: 'Olah\'s "methanol economy" proposal advocates replacing fossil fuels by:',
    options: ['Catalytically reducing atmospheric CO₂ with hydrogen to produce methanol: $\\text{CO}_2 + 3\\text{H}_2 \\rightarrow \\text{CH}_3\\text{OH} + \\text{H}_2\\text{O}$', 'Burning more coal to produce methanol', 'Extracting methanol from seawater', 'Fermenting cellulose exclusively'],
    correctIndex: 0,
    explanation: 'Olah proposed using renewable energy to produce H₂ (electrolysis), then combining it with captured CO₂ to make methanol — a liquid fuel and chemical feedstock. This creates a carbon-neutral cycle.',
    realWorld: 'Iceland\'s Carbon Recycling International operates a commercial CO₂-to-methanol plant using geothermal energy — a direct implementation of Olah\'s vision.',
    hint: 'Take CO₂ from the air, add green hydrogen, and you get a liquid fuel that closes the carbon cycle.',
  },
];
