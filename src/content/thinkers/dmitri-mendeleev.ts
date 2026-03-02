import type { Question } from '../types';

export const dmitriMendeleevQuestions: Question[] = [
  {
    id: 96010, topic: 'dmitri-mendeleev', difficulty: 'easy',
    question: 'Mendeleev arranged elements in his periodic table by:',
    options: ['Increasing atomic weight and recurring chemical properties', 'Alphabetical order', 'Date of discovery', 'Color and phase'],
    correctIndex: 0,
    explanation: 'Mendeleev organized elements by atomic weight and noticed that chemical properties recurred periodically — the key insight behind the periodic table.',
    realWorld: 'The periodic table is the most iconic organizing framework in all of science, used in every chemistry lab worldwide.',
    hint: 'He noticed that elements with similar properties appeared at regular intervals.',
  },
  {
    id: 96011, topic: 'dmitri-mendeleev', difficulty: 'hard',
    question: 'Mendeleev\'s periodic table was revolutionary because he:',
    options: ['Left gaps and predicted undiscovered elements with specific properties', 'Listed all known elements without gaps', 'Organized by atomic number', 'Used quantum mechanics to explain periodicity'],
    correctIndex: 0,
    explanation: 'Mendeleev boldly left gaps for undiscovered elements (eka-aluminum, eka-silicon) and predicted their atomic weights and properties — which were later confirmed.',
    realWorld: 'The discovery of gallium (1875) and germanium (1886) matched his predictions almost exactly, validating the entire framework.',
    hint: 'He predicted properties of elements that hadn\'t been found yet.',
  },
  {
    id: 96012, topic: 'dmitri-mendeleev', difficulty: 'sota',
    question: 'Modern periodic tables differ from Mendeleev\'s original by ordering elements by:',
    options: ['Atomic number (proton count) rather than atomic weight', 'Electron configuration only', 'Electronegativity', 'Ionization energy'],
    correctIndex: 0,
    explanation: 'Moseley (1913) showed that atomic number $Z$ (protons), not atomic weight, determines chemical identity. This resolved anomalies in Mendeleev\'s weight-based ordering.',
    realWorld: 'This insight explains why cobalt (Z=27) comes before nickel (Z=28) despite having higher atomic weight.',
    hint: 'A key property discovered by Henry Moseley using X-ray spectroscopy.',
  },
];
