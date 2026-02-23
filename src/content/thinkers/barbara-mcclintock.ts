import type { Question } from '../types';

export const mcclintockQuestions: Question[] = [
  {
    id: 20118, topic: 'mcclintock', difficulty: 'easy',
    question: 'Barbara McClintock discovered which genetic phenomenon in maize?',
    options: ['Transposable elements (jumping genes)', 'Genetic linkage', 'Polyploidy', 'Gene silencing'],
    correctIndex: 0,
    explanation: 'McClintock discovered transposable elements — segments of DNA that can move within the genome — decades before molecular biology confirmed her findings.',
    realWorld: 'Transposons are now used as tools in genetics research for mutagenesis and gene delivery in gene therapy.',
    hint: 'These genetic elements can change their position within the genome.',
  },
  {
    id: 20119, topic: 'mcclintock', difficulty: 'hard',
    question: 'What did McClintock name the two-element control system she discovered in maize transposition?',
    options: ['Ac/Ds (Activator/Dissociation)', 'Promoter/Enhancer', 'Operon/Operator', 'Intron/Exon'],
    correctIndex: 0,
    explanation: 'The Ac (Activator) element encodes a transposase, while Ds (Dissociation) is a non-autonomous element requiring Ac to move.',
    realWorld: 'The Ac/Ds system is still used as a genetic tool in plant biology for insertional mutagenesis and gene tagging.',
    hint: 'One element provides the enzyme; the other is the mobile element that depends on it.',
  },
  {
    id: 20120, topic: 'mcclintock', difficulty: 'sota',
    question: 'What fraction of the human genome is estimated to derive from transposable elements?',
    options: ['~45%', '~10%', '~2%', '~80%'],
    correctIndex: 0,
    explanation: 'About 45% of the human genome consists of transposable element sequences, making them one of the most important forces in genome evolution.',
    realWorld: 'CRISPR-Cas systems evolved from transposable elements, connecting McClintock\'s discovery to the most transformative biotech tool of the 21st century.',
    hint: 'Far more than the ~1.5% that codes for proteins.',
  },
];
