import type { Question } from '../types';

export const thompsonDarcyQuestions: Question[] = [
  {
    id: 20740,
    topic: 'thompson-darcy',
    difficulty: 'hard',
    question: 'D\'Arcy Thompson\'s "theory of transformations" showed that the shapes of related species could be mapped to each other using:',
    options: ['Coordinate grid deformations (affine and projective transformations)', 'Genetic mutation rates', 'Phylogenetic trees', 'Fourier series'],
    correctIndex: 0,
    explanation: 'He drew species on coordinate grids and showed that one species\' form could be transformed into another by stretching, shearing, or bending the grid — pure geometry.',
    realWorld: 'Modern computational morphometrics and medical image registration use the same geometric transformation principles.',
    hint: 'Draw one fish on a grid, deform the grid, and you get a different species of fish.',
  },
  {
    id: 20741,
    topic: 'thompson-darcy',
    difficulty: 'sota',
    question: 'Thompson argued that many biological forms (cell shapes, bone structures) are primarily determined by physical forces, not natural selection alone. This anticipated which modern field?',
    options: ['Mechanobiology — the study of how physical forces shape biological development', 'Epigenetics', 'Systems biology', 'Synthetic biology'],
    correctIndex: 0,
    explanation: 'He showed that soap bubbles, splash patterns, and cell division share mathematical forms because they minimize surface tension — physics constrains biology.',
    realWorld: 'Tissue engineering now uses Thompson\'s insight: scaffold geometry and mechanical forces guide stem cell differentiation.',
    hint: 'The idea that physical forces, not just genes, determine biological form.',
  },
  {
    id: 20742,
    topic: 'thompson-darcy',
    difficulty: 'easy',
    question: 'D\'Arcy Thompson\'s 1917 masterpiece "On Growth and Form" argued that biological shapes are governed by:',
    options: ['Mathematics and physical forces', 'Pure natural selection', 'Divine design', 'Random mutation only'],
    correctIndex: 0,
    explanation: 'He showed that logarithmic spirals in shells, hexagonal honeycombs, and branching patterns all follow mathematical laws of physics.',
    realWorld: 'His work inspired architects, artists, and biologists alike — Alan Turing cited it when developing his own theory of biological pattern formation.',
    hint: 'He viewed organisms through the lens of geometry and mechanics.',
  },
];
