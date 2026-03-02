import type { Question } from '../types';

export const goeppertMayerQuestions: Question[] = [
  {
    id: 20221, topic: 'maria-goeppert-mayer', difficulty: 'easy',
    question: 'Maria Goeppert Mayer won the Nobel Prize for developing which model of the atomic nucleus?',
    options: ['Nuclear shell model', 'Liquid drop model', 'Quark model', 'Bag model'],
    correctIndex: 0,
    explanation: 'Goeppert Mayer developed the nuclear shell model explaining "magic numbers" — certain numbers of protons or neutrons that make nuclei exceptionally stable.',
    realWorld: 'The shell model explains why certain isotopes are abundant in nature and predicts nuclear stability — essential for nuclear energy and medicine.',
    hint: 'This model is analogous to electron shells in atomic physics, but for nucleons.',
  },
  {
    id: 20222, topic: 'maria-goeppert-mayer', difficulty: 'hard',
    question: 'The "magic numbers" that Goeppert Mayer\'s shell model explains are:',
    options: ['2, 8, 20, 28, 50, 82, 126', '1, 2, 3, 5, 8, 13, 21', '2, 4, 6, 8, 10, 12, 14', '3, 7, 11, 19, 23, 29, 31'],
    correctIndex: 0,
    explanation: 'Nuclei with 2, 8, 20, 28, 50, 82, or 126 protons or neutrons are exceptionally stable — analogous to noble gas electron configurations.',
    realWorld: 'Lead-208 (82 protons, 126 neutrons — doubly magic) is the heaviest stable nucleus, which is why lead is the end product of radioactive decay chains.',
    hint: 'These correspond to closed shells of protons or neutrons, not the Fibonacci sequence.',
  },
  {
    id: 20223, topic: 'maria-goeppert-mayer', difficulty: 'sota',
    question: 'Goeppert Mayer also predicted which nonlinear optical process in her 1931 doctoral thesis?',
    options: ['Two-photon absorption', 'Stimulated emission', 'Raman scattering', 'Cherenkov radiation'],
    correctIndex: 0,
    explanation: 'Her thesis predicted that atoms could absorb two photons simultaneously — confirmed experimentally only after the invention of the laser 30 years later.',
    realWorld: 'Two-photon microscopy revolutionized biological imaging — it allows deep tissue imaging with reduced photodamage, critical for neuroscience research.',
    hint: 'This process requires extremely high photon densities, only achievable with coherent light sources.',
  },
];
