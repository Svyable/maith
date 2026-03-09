import type { Question } from '../types';

export const johnPopleQuestions: Question[] = [
  {
    id: 21801, topic: 'john-pople', difficulty: 'easy',
    question: 'John Pople\'s GAUSSIAN software package revolutionized chemistry by enabling:',
    options: ['Routine ab initio quantum chemical calculations of molecular properties on computers', 'Experimental measurement of bond lengths via X-ray', 'Automated chemical synthesis in the laboratory', 'Machine learning prediction of chemical reactions'],
    correctIndex: 0,
    explanation: 'Pople developed both the theoretical methods (basis sets, correlation methods) and the software (GAUSSIAN) that made quantum chemistry calculations accessible to non-specialists. Any chemist could now compute molecular properties.',
    realWorld: 'GAUSSIAN is cited in over 100,000 scientific papers. Pharmaceutical companies routinely use it to predict drug properties before synthesis.',
    hint: 'He turned quantum chemistry from pen-and-paper theory into a practical computational tool.',
  },
  {
    id: 21802, topic: 'john-pople', difficulty: 'hard',
    question: 'Pople\'s systematic hierarchy of methods uses basis sets like 6-31G*. In this notation, "6-31" refers to:',
    options: ['A split-valence basis: 6 Gaussians for core orbitals, and the valence split into 3+1 Gaussians', 'The molecular weight range of applicable compounds', 'Six atoms with 31 electrons', 'A convergence threshold of 6.31 × 10⁻⁴'],
    correctIndex: 0,
    explanation: 'In Pople\'s notation, core orbitals are described by 6 primitive Gaussian functions, while valence orbitals are split into two parts (3 + 1 primitives). The * adds polarization functions (d-orbitals on heavy atoms).',
    realWorld: 'Choosing the right basis set is the first decision in any quantum chemistry calculation — too small gives inaccurate results, too large makes computation prohibitive.',
    hint: 'The numbers describe how many mathematical functions are used to approximate each type of electron orbital.',
  },
  {
    id: 21803, topic: 'john-pople', difficulty: 'sota',
    question: 'Pople developed Møller-Plesset perturbation theory at second order (MP2) for treating electron correlation. MP2 adds corrections to Hartree-Fock by:',
    options: ['Summing double excitations from occupied to virtual orbitals: $E^{(2)} = \\sum_{i<j,a<b} \\frac{|\\langle ij||ab\\rangle|^2}{\\epsilon_i + \\epsilon_j - \\epsilon_a - \\epsilon_b}$', 'Adding relativistic corrections to electron masses', 'Ignoring electron-electron repulsion entirely', 'Using density functional approximations for exchange'],
    correctIndex: 0,
    explanation: 'MP2 treats electron correlation as a perturbation to the Hartree-Fock solution. The second-order energy correction involves summing over all double excitations, weighted by orbital energy differences. It captures ~80-90% of correlation energy at modest cost.',
    realWorld: 'MP2 is the workhorse method for systems too large for coupled cluster but needing better accuracy than DFT — used extensively in drug binding energy calculations.',
    hint: 'Hartree-Fock misses electron correlation. MP2 adds it back through a perturbative sum over excited configurations.',
  },
];
