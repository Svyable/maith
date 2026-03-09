import type { Question } from '../types';

export const heitlerLondonQuestions: Question[] = [
  {
    id: 21701, topic: 'heitler-london', difficulty: 'easy',
    question: 'The Heitler-London (1927) treatment of the hydrogen molecule $\\text{H}_2$ was groundbreaking because:',
    options: ['It was the first quantum mechanical explanation of the covalent bond, showing that bonding arises from electron exchange', 'It predicted hydrogen\'s color', 'It explained nuclear fusion in stars', 'It proved hydrogen is a noble gas'],
    correctIndex: 0,
    explanation: 'Heitler and London applied quantum mechanics to H₂, showing that two hydrogen atoms bond because their electron wavefunctions can overlap and exchange — lowering the total energy. This was the birth of quantum chemistry.',
    realWorld: 'Every modern computational chemistry calculation (drug design, materials science, catalysis) descends from the conceptual framework Heitler and London established.',
    hint: 'Before 1927, nobody understood WHY atoms form bonds. They showed it\'s a quantum mechanical effect.',
  },
  {
    id: 21702, topic: 'heitler-london', difficulty: 'hard',
    question: 'In the Heitler-London approach (valence bond theory), the bonding wavefunction for $\\text{H}_2$ is:',
    options: ['$\\Psi_+ = \\psi_A(1)\\psi_B(2) + \\psi_A(2)\\psi_B(1)$, a symmetric spatial function paired with an antisymmetric spin singlet', '$\\Psi = \\psi_A(1)\\psi_B(2)$ — a simple product with no exchange', 'An antisymmetric spatial function with a triplet spin state', 'A purely ionic wavefunction $\\psi_A(1)\\psi_A(2)$'],
    correctIndex: 0,
    explanation: 'The symmetric spatial wavefunction allows electron density to accumulate between the nuclei (bonding). The Pauli exclusion principle requires this to pair with an antisymmetric spin singlet (↑↓ − ↓↑).',
    realWorld: 'Valence bond theory explains why chemical bonds have directional character — essential for understanding molecular geometry and reactivity.',
    hint: 'Exchange symmetry + Pauli exclusion determine whether the spatial part is bonding or antibonding.',
  },
  {
    id: 21703, topic: 'heitler-london', difficulty: 'sota',
    question: 'Fritz London\'s later work on intermolecular forces showed that even non-polar molecules attract each other via:',
    options: ['London dispersion forces — quantum mechanical fluctuations in electron density creating instantaneous dipoles: $E \\propto -\\frac{\\alpha^2 I}{r^6}$', 'Gravitational attraction between molecules', 'Permanent dipole-dipole interactions only', 'Magnetic forces between electron spins'],
    correctIndex: 0,
    explanation: 'London showed that quantum fluctuations create temporary dipoles that induce dipoles in neighboring molecules, producing an attractive $r^{-6}$ potential. These dispersion forces are universal — they exist between all molecules.',
    realWorld: 'London forces explain why noble gases liquefy, why geckos stick to walls, and why graphite layers slide — they\'re the universal "glue" of molecular interactions.',
    hint: 'Even perfectly symmetric molecules experience instantaneous asymmetries in their electron clouds.',
  },
];
