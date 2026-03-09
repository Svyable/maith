import type { Question } from '../types';

export const williamRamsayQuestions: Question[] = [
  {
    id: 21501, topic: 'william-ramsay', difficulty: 'easy',
    question: 'William Ramsay discovered the noble gases by identifying a whole missing group in the periodic table. The first noble gas he isolated (with Lord Rayleigh) was:',
    options: ['Argon — detected because atmospheric nitrogen was denser than chemically-produced nitrogen', 'Helium — found in the Sun\'s spectrum', 'Neon — discovered in liquid air', 'Xenon — the heaviest stable noble gas'],
    correctIndex: 0,
    explanation: 'Rayleigh noticed atmospheric N₂ was 0.5% denser than N₂ from chemical sources. Ramsay removed all known gases from air and found the residual inert gas — argon (Greek: "lazy").',
    realWorld: 'Argon is used in welding, light bulbs, and as a protective atmosphere for growing semiconductor crystals.',
    hint: 'The density discrepancy in nitrogen samples hinted that air contained an unknown, heavier gas.',
  },
  {
    id: 21502, topic: 'william-ramsay', difficulty: 'hard',
    question: 'Ramsay isolated neon, krypton, and xenon in 1898 by:',
    options: ['Fractional distillation of liquid air, separating gases by their different boiling points', 'Chemical reactions that selectively absorbed each gas', 'Mass spectrometry of atmospheric samples', 'Spectroscopic identification without physical isolation'],
    correctIndex: 0,
    explanation: 'After liquefying air, Ramsay and Travers carefully distilled fractions at different temperatures. Neon (bp −246°C), krypton (bp −153°C), and xenon (bp −108°C) each appeared as new spectral signatures in different fractions.',
    realWorld: 'Neon signs, krypton lasers, and xenon ion propulsion engines all use these gases that Ramsay was the first to isolate.',
    hint: 'Different boiling points mean different fractions of liquid air contain different noble gases.',
  },
  {
    id: 21503, topic: 'william-ramsay', difficulty: 'sota',
    question: 'The noble gases were problematic for Mendeleev\'s periodic table because:',
    options: ['They had zero valence and formed no compounds, requiring an entirely new group (Group 0/18) to be added', 'They were too heavy to fit in the table', 'They had the same atomic weights as existing elements', 'Their spectra were identical to known elements'],
    correctIndex: 0,
    explanation: 'Mendeleev\'s table was organized by chemical properties (valence). Gases with no chemical reactivity had no natural place. Ramsay and Mendeleev agreed to place them in a new Group 0 — validating the periodic law by showing it could accommodate entirely new families.',
    realWorld: 'Neil Bartlett\'s 1962 synthesis of XePtF₆ showed that "noble" gases aren\'t truly inert — xenon compounds are now used in medical imaging and anesthesia.',
    hint: 'If elements are sorted by chemical behavior, where do you put elements that don\'t react at all?',
  },
];
