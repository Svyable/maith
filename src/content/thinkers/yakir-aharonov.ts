import type { Question } from '../types';

export const yakirAharonovQuestions: Question[] = [
  {
    id: 307016,
    topic: 'yakir-aharonov',
    difficulty: 'easy',
    question: 'Yakir Aharonov is best known for co-discovering which quantum phenomenon?',
    options: [
      'The Aharonov-Bohm effect',
      'The Doppler effect',
      'The Zeeman effect',
      'The Mössbauer effect'
    ],
    correctIndex: 0,
    explanation: 'Aharonov co-discovered the Aharonov-Bohm effect, showing that electromagnetic potentials can affect quantum phases even in regions where the classical fields vanish.',
    realWorld: 'It changed how physicists think about gauge potentials, interference, and phase in quantum mechanics.',
    hint: 'Think quantum phase shifts around a confined magnetic flux.',
    symbolLinks: { 'ϕ': 'phi' },
    formulaLinks: ['aharonov-bohm-phase'],
    glossaryLinks: ['aharonov-bohm-effect', 'gauge-potential', 'quantum-phase'],
  },
  {
    id: 307017,
    topic: 'yakir-aharonov',
    difficulty: 'hard',
    question: 'What does the Aharonov-Bohm effect most directly show?',
    options: [
      'Electromagnetic potentials can have physically observable consequences in quantum mechanics',
      'Only electric and magnetic fields matter physically',
      'Quantum phases are never observable',
      'Gauge symmetry is broken in all experiments'
    ],
    correctIndex: 0,
    explanation: 'The Aharonov-Bohm effect shows that the vector potential can shift interference patterns through its effect on the wavefunction phase, even where the magnetic field is zero.',
    realWorld: 'It is central to gauge theory, topological phases, and interference experiments.',
    hint: 'The key word is potentials.',
    symbolLinks: { 'ϕ': 'phi' },
    formulaLinks: ['aharonov-bohm-phase'],
    glossaryLinks: ['vector-potential', 'gauge-potential', 'interference-pattern'],
  },
  {
    id: 307018,
    topic: 'yakir-aharonov',
    difficulty: 'sota',
    question: 'Why is Aharonov still influential in modern quantum foundations?',
    options: [
      'Because his work on phase, weak measurement, and time-symmetric formulations keeps reshaping how measurement and causality are discussed',
      'Because he replaced the Schrödinger equation',
      'Because he proved hidden variables are impossible in all theories',
      'Because he eliminated uncertainty from quantum mechanics'
    ],
    correctIndex: 0,
    explanation: 'Aharonov remained influential far beyond the Aharonov-Bohm effect, especially through weak values, weak measurement, and foundational work on time symmetry in quantum theory.',
    realWorld: 'His ideas appear in quantum optics, metrology, and ongoing debates about the meaning of measurement.',
    hint: 'Think foundations and measurement.',
    symbolLinks: {},
    formulaLinks: ['aharonov-bohm-phase', 'weak-value-formula'],
    glossaryLinks: ['weak-measurement', 'weak-value', 'quantum-foundations'],
  },
];
