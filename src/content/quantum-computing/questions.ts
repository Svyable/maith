import type { Question } from '../types';

export const quantumComputingQuestions: Question[] = [
  {
    id: 40001, topic: 'quantum-computing', difficulty: 'easy',
    question: 'A qubit differs from a classical bit because it can:',
    options: [
      'Exist in a superposition of 0 and 1 simultaneously, represented as $|\\psi\\rangle = \\alpha|0\\rangle + \\beta|1\\rangle$',
      'Store exactly two classical bits of information',
      'Only take the value 0',
      'Operate without any energy consumption',
    ],
    correctIndex: 0,
    explanation: 'A qubit\'s state is a unit vector in a 2D complex Hilbert space. The amplitudes α and β are complex numbers with |α|²+|β|²=1, allowing quantum parallelism.',
    realWorld: 'Google\'s Sycamore processor uses 53 superconducting qubits. IBM\'s Eagle chip has 127. Superposition enables quantum algorithms like Shor\'s factoring.',
    hint: 'Classical bits are 0 OR 1. Qubits can be both — until measured.',
  },
  {
    id: 40002, topic: 'quantum-computing', difficulty: 'hard',
    question: 'Quantum entanglement enables quantum advantage because:',
    options: [
      'Measuring one entangled qubit instantly determines the other\'s state, creating correlations impossible with classical bits (violating Bell inequalities)',
      'It allows faster-than-light communication',
      'It doubles the number of available qubits',
      'It eliminates all quantum noise and decoherence',
    ],
    correctIndex: 0,
    explanation: 'Entangled qubits share a joint state that cannot be described as a product of individual states. Bell\'s theorem proves these correlations exceed any classical explanation, enabling quantum teleportation and superdense coding.',
    realWorld: 'Quantum key distribution (QKD) uses entanglement for provably secure communication. China\'s Micius satellite demonstrated entanglement over 1,200 km.',
    hint: 'Einstein called it "spooky action at a distance" — but it\'s real and experimentally verified.',
  },
  {
    id: 40003, topic: 'quantum-computing', difficulty: 'sota',
    question: 'Quantum error correction faces the threshold theorem challenge because:',
    options: [
      'Physical qubits have error rates ~0.1-1%, but fault-tolerant computation requires logical qubits built from thousands of physical qubits using surface codes with error rates below a threshold',
      'Quantum computers cannot make errors',
      'Error correction is identical to classical error correction',
      'Only one type of quantum error exists',
    ],
    correctIndex: 0,
    explanation: 'The threshold theorem states that if physical error rates are below ~1%, arbitrary-length quantum computation is possible using concatenated or surface codes. Current best: Google achieved below-threshold error correction with their Willow chip.',
    realWorld: 'Google\'s 2024 Willow experiment demonstrated that adding more qubits to a surface code REDUCES logical error rates — crossing the break-even point for the first time.',
    hint: 'You need many noisy physical qubits to simulate one perfect logical qubit — and the error rate must be low enough.',
  },
];
