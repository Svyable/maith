// watsoncrick.ts
import type { Question } from '../types';

export const watsonCrickQuestions: Question[] = [
  {
    id: 50030,
    topic: 'watson-crick',
    difficulty: 'easy',
    question: 'Watson-Crick model: DNA = ?',
    options: [
      'Double helix ($B$-form, $10.4bp/turn$, $3.4nm$ pitch)',
      'Z-DNA left-handed helix',
      'A-form RNA helix',
      'Triple helix'
    ],
    correctIndex: 0,
    explanation: 'Chargaff ($A=T$, $G=C$) + X-ray ($3.4\\AA$ spacing) → antiparallel right-handed helix.',
    realWorld: 'Central dogma foundation.',
    hint: '$A=T$, $G=C$ base pairs twist.',
  },
  {
    id: 50031,
    topic: 'watson-crick',
    difficulty: 'hard',
    question: 'DNA major/minor grooves from?',
    options: [
      'Asymmetric base pairs ($A-T=2H$, $G-C=3H$) create unequal grooves',
      'Helix pitch variation',
      'Sugar pucker (C2\' endo)',
      'Phosphate backbone twist'
    ],
    correctIndex: 0,
    explanation: '$\\text{major: }22\\AA$, $\\text{minor: }12\\AA$. Transcription factors bind major groove.',
    realWorld: 'Protein-DNA recognition specificity.',
    hint: 'Base pair geometry creates binding pockets.',
  },
  {
    id: 50032,
    topic: 'watson-crick',
    difficulty: 'sota',
    question: 'B-DNA helical parameters?',
    options: [
      '$\\alpha=36^\\circ/bp$, $h=3.4\\AA/bp$, $P=34nm/10bp$',
      '$28^\\circ/bp$, $2.3\\AA/bp$ (A-DNA)',
      '$60^\\circ/bp$, $5.9\\AA/bp$ (Z-DNA)',
      '$18^\\circ/bp$, $1.7\\AA/bp$'
    ],
    correctIndex: 0,
    explanation: 'Rosalind Franklin\'s Photo 51 gave exact rise/rotation measurements.',
    realWorld: 'Structural biology standard.',
    hint: '$10bp/turn$, $34\\AA$ pitch.',
  }
];
