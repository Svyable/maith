import type { Question } from '../types';

export const davidBohmQuestions: Question[] = [
  {
    id: 307019,
    topic: 'david-bohm',
    difficulty: 'easy',
    question: 'David Bohm is most associated with which interpretation of quantum mechanics?',
    options: [
      'The pilot-wave interpretation',
      'The many-worlds interpretation',
      'The Copenhagen interpretation',
      'The ensemble interpretation'
    ],
    correctIndex: 0,
    explanation: 'Bohm developed the pilot-wave or de Broglie-Bohm interpretation, in which particles have definite trajectories guided by a wavefunction.',
    realWorld: 'It remains one of the best-known realist alternatives to standard Copenhagen-style interpretations.',
    hint: 'Think hidden variables and trajectories.',
    symbolLinks: { 'ψ': 'psi' },
    formulaLinks: ['bohm-guidance-equation'],
    glossaryLinks: ['pilot-wave-theory', 'hidden-variables', 'wavefunction'],
  },
  {
    id: 307020,
    topic: 'david-bohm',
    difficulty: 'hard',
    question: 'In Bohmian mechanics, what plays the guiding role for particle motion?',
    options: [
      'The wavefunction',
      'The electric field alone',
      'A random noise source',
      'Classical action without phase'
    ],
    correctIndex: 0,
    explanation: 'In Bohmian mechanics, the wavefunction guides particle trajectories through the guidance equation.',
    realWorld: 'This gives a deterministic formulation of quantum mechanics at the hidden-variable level.',
    hint: 'It is the same object used in standard quantum mechanics.',
    symbolLinks: { 'ψ': 'psi' },
    formulaLinks: ['bohm-guidance-equation', 'quantum-potential'],
    glossaryLinks: ['pilot-wave-theory', 'guidance-equation', 'quantum-potential'],
  },
  {
    id: 307021,
    topic: 'david-bohm',
    difficulty: 'sota',
    question: 'Why does Bohm remain important in modern quantum foundations?',
    options: [
      'Because Bohmian mechanics provides a concrete nonlocal hidden-variable model that reproduces quantum predictions and sharpens debates about measurement and realism',
      'Because Bohm proved quantum mechanics is local',
      'Because Bohm replaced gauge theory with trajectory theory',
      'Because Bohm removed the need for wavefunctions'
    ],
    correctIndex: 0,
    explanation: 'Bohm remains central because Bohmian mechanics is an explicit realist interpretation that reproduces standard predictions while making nonlocality and ontology unusually clear.',
    realWorld: 'His work matters in foundations, quantum nonlocality, and philosophical debates about realism.',
    hint: 'Think realism, trajectories, and nonlocality.',
    symbolLinks: {},
    formulaLinks: ['bohm-guidance-equation', 'quantum-potential'],
    glossaryLinks: ['quantum-foundations', 'nonlocality', 'pilot-wave-theory'],
  },
];
