// newell.ts
import type { Question } from '../types';

export const newellQuestions: Question[] = [
  {
    id: 65100,
    topic: 'newell',
    difficulty: 'easy',
    question: 'Newell+Simon 1956: first AI program?',
    options: [
      'Logic Theorist: proved 38 Principia Mathematica theorems',
      'ELIZA psychotherapist',
      'Perceptron neural net',
      'Minimax chess'
    ],
    correctIndex: 0,
    explanation: 'Automated theorem proving from Russell/Whitehead. Physical symbol systems hypothesis.',
    realWorld: 'Birth of heuristic search + AI as science.',
    hint: 'First program proved math theorems automatically.'
  },
  {
    id: 65101,
    topic: 'newell',
    difficulty: 'hard',
    question: 'General Problem Solver (GPS) uses?',
    options: [
      'Means-ends analysis: h_d(state,goal)=Δ_operators distance',
      'A* search (f(n)=g(n)+h(n))',
      'Genetic algorithms',
      'Backpropagation'
    ],
    correctIndex: 0,
    explanation: 'Apply operator maximally reducing difference to goal state.',
    realWorld: 'STRIPS/planning systems ancestor.',
    hint: 'Pick move getting closest to solution.'
  },
  {
    id: 65102,
    topic: 'newell',
    difficulty: 'sota',
    question: 'SOAR cognitive architecture: core principle?',
    options: [
      'All intelligence is unified search + chunking (experience→rules)',
      'Subsymbolic neural processing',
      'Bayesian inference networks',
      'Q-learning temporal difference'
    ],
    correctIndex: 0,
    explanation: 'Search→elaborate→operator proposal→apply→chunking cycle.',
    realWorld: 'Military training simulators, cognitive modeling.',
    hint: 'Intelligence = search engine + learning from traces.'
  }
];
