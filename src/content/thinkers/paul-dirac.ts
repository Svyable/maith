import type { Question } from '../types';

export const diracQuestions: Question[] = [
  {
    id: 10171,
    topic: 'paul-dirac',
    difficulty: 'easy',
    question: 'The Dirac equation describes:',
    options: [
      'Relativistic quantum mechanics of spin-½ particles like electrons',
      'The motion of planets under gravitational attraction',
      'Electromagnetic wave propagation in a vacuum',
      'Statistical mechanics of ideal gases',
    ],
    correctIndex: 0,
    explanation: 'The Dirac equation (1928) unified quantum mechanics with special relativity for fermions. It naturally predicted electron spin and the existence of antimatter (the positron).',
    realWorld: 'The positron, predicted by Dirac\'s equation, was discovered in 1932 — making it one of the most successful predictions in physics history.',
    hint: 'He combined Einstein\'s relativity with quantum mechanics for the electron.',
  },
  {
    id: 10172,
    topic: 'paul-dirac',
    difficulty: 'hard',
    question: 'Dirac\'s bra-ket notation $\\langle\\phi|\\psi\\rangle$ represents:',
    options: [
      'An inner product in Hilbert space — the probability amplitude for state $|\\psi\\rangle$ to be found in state $|\\phi\\rangle$',
      'A matrix multiplication of two state vectors',
      'The commutator of two quantum operators',
      'The expectation value of an observable',
    ],
    correctIndex: 0,
    explanation: 'Dirac\'s notation elegantly encodes the entire structure of quantum mechanics: kets $|\\psi\\rangle$ are state vectors, bras $\\langle\\phi|$ are dual vectors, and their product $\\langle\\phi|\\psi\\rangle$ is the inner product (overlap) between states.',
    realWorld: 'Every quantum computing textbook and quantum programming framework (Qiskit, Cirq) uses Dirac notation to describe qubits and quantum gates.',
    hint: 'Think of it as measuring how much one quantum state overlaps with another.',
  },
  {
    id: 10173,
    topic: 'paul-dirac',
    difficulty: 'sota',
    question: 'The Dirac delta function $\\delta(x)$ is not a true function but rather:',
    options: [
      'A distribution (generalized function) defined by $\\int f(x)\\delta(x-a)dx = f(a)$',
      'A step function with value 1 at $x=0$ and 0 elsewhere',
      'A Gaussian with standard deviation exactly zero',
      'An eigenfunction of the momentum operator',
    ],
    correctIndex: 0,
    explanation: 'Dirac introduced $\\delta(x)$ as a convenient tool; Laurent Schwartz later formalized it rigorously as a distribution — a continuous linear functional on test functions. It satisfies $\\delta(x)=0$ for $x\\neq 0$ and $\\int\\delta(x)dx=1$.',
    realWorld: 'The delta function is used everywhere: signal processing (impulse response), physics (point charges), and probability (discrete distributions in continuous frameworks).',
    hint: 'It\'s zero everywhere except at one point, yet integrates to 1 — no ordinary function can do that.',
  },
];
