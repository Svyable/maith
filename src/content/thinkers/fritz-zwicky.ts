import type { Question } from '../types';

export const fritzZwickyQuestions: Question[] = [
  {
    id: 4491001, topic: 'fritz-zwicky', difficulty: 'sota',
    question: 'Zwicky\'s 1933 observation of the Coma Cluster led him to propose "dark matter" because:',
    options: ['Galaxy velocities implied 400x more mass than visible matter', 'Galaxies were changing color', 'The cluster was shrinking', 'X-rays were detected from the cluster'],
    correctIndex: 0,
    explanation: 'Using the virial theorem, Zwicky calculated that the Coma Cluster\'s velocity dispersion required ~400× more mass than the visible galaxies contained, coining "dunkle Materie" (dark matter).',
    realWorld: 'Zwicky was right but largely ignored for 40 years until Vera Rubin\'s galaxy rotation curves confirmed the missing mass problem in the 1970s.',
    hint: 'He applied the virial theorem: if galaxies move too fast, there must be unseen mass holding the cluster together.',
  },
  {
    id: 4491002, topic: 'fritz-zwicky', difficulty: 'sota',
    question: 'Zwicky and Baade coined the term "supernova" and predicted that supernovae produce:',
    options: ['Neutron stars as compact remnants', 'White dwarfs', 'Black holes exclusively', 'New planetary systems'],
    correctIndex: 0,
    explanation: 'In their 1934 paper, Baade and Zwicky proposed that supernovae represent the transition from ordinary stars to neutron stars, releasing the gravitational binding energy as the observed explosion — confirmed 33 years later with the discovery of pulsars.',
    realWorld: 'The 1967 discovery of pulsars (rotating neutron stars) by Jocelyn Bell Burnell vindicated Zwicky\'s 1934 prediction.',
    hint: 'They predicted an entirely new type of stellar object would be left behind after the explosion.',
  },
  {
    id: 4491003, topic: 'fritz-zwicky', difficulty: 'sota',
    question: 'Zwicky\'s "morphological analysis" method contributed to science by:',
    options: ['Systematically exploring all possible solutions in a problem space', 'Classifying galaxy shapes by visual inspection only', 'Using neural networks for pattern recognition', 'Measuring stellar distances via parallax'],
    correctIndex: 0,
    explanation: 'Morphological analysis is a structured creativity method: list all parameters of a problem, enumerate all possible values, and systematically explore every combination — Zwicky used it to predict gravitational lenses, jet engines, and more.',
    realWorld: 'NASA, military planners, and product designers still use Zwicky\'s morphological box for systematic innovation and scenario planning.',
    hint: 'A structured method for exploring every combination of parameters — brute-force creativity.',
  },
];
