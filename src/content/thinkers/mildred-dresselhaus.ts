import type { Question } from '../types';

export const mildredDresselhausQuestions: Question[] = [
  {
    id: 20124, topic: 'mildred-dresselhaus', difficulty: 'easy',
    question: 'Mildred Dresselhaus is known as the "Queen of" which material?',
    options: ['Carbon', 'Silicon', 'Graphene', 'Steel'],
    correctIndex: 0,
    explanation: 'Dresselhaus was nicknamed the "Queen of Carbon Science" for her pioneering research into carbon\'s electronic properties.',
    realWorld: 'Her work laid the foundation for graphene research, carbon nanotubes, and modern nanomaterials engineering.',
    hint: 'This element forms diamonds, graphite, fullerenes, and nanotubes.',
  },
  {
    id: 20125, topic: 'mildred-dresselhaus', difficulty: 'hard',
    question: 'Dresselhaus\'s predictions about carbon nanotubes focused on what key property?',
    options: ['Chirality-dependent electronic behavior', 'Room temperature superconductivity', 'Magnetic ordering', 'Optical transparency'],
    correctIndex: 0,
    explanation: 'Dresselhaus predicted that a carbon nanotube could be metallic or semiconducting depending on its chirality (rolling angle of the graphene sheet).',
    realWorld: 'Chirality-sorted carbon nanotubes are used in next-generation transistors, flexible displays, and ultra-strong composites.',
    hint: 'The angle at which the graphene sheet is rolled determines the electronic band structure.',
  },
  {
    id: 20126, topic: 'mildred-dresselhaus', difficulty: 'sota',
    question: 'Dresselhaus made major contributions to thermoelectrics. What dimensionless figure of merit measures thermoelectric efficiency?',
    options: ['ZT', 'Q-factor', 'Reynolds number', 'Carnot efficiency'],
    correctIndex: 0,
    explanation: '$ZT = S^2\\sigma T / \\kappa$ where $S$ is the Seebeck coefficient, $\\sigma$ electrical conductivity, $T$ temperature, and $\\kappa$ thermal conductivity.',
    realWorld: 'Dresselhaus proposed using nanostructures to enhance ZT, enabling waste heat recovery in vehicles and industrial processes.',
    hint: 'It combines electrical conductivity, thermal conductivity, and the Seebeck coefficient into a single performance metric.',
  },
];
