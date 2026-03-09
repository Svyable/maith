import type { Question } from '../types';

export const alainAspectQuestions: Question[] = [
  {
    id: 10658,
    topic: 'alain-aspect',
    difficulty: 'easy',
    question: 'Aspect\'s experiments tested Bell inequalities, which distinguish:',
    options: [
      'Quantum entanglement from local hidden variable theories',
      'Wave behavior from particle behavior',
      'Classical mechanics from special relativity',
      'Strong force from weak force',
    ],
    correctIndex: 0,
    explanation: 'Bell inequalities set limits on correlations possible with local hidden variables. Quantum mechanics predicts stronger correlations. Aspect\'s experiments showed violations of Bell inequalities, ruling out local realism.',
    realWorld: 'These results are foundational for quantum cryptography: entanglement-based security relies on the impossibility of local hidden variable explanations.',
    hint: 'His experiments showed correlations too strong to be explained classically.',
  },
  {
    id: 10659,
    topic: 'alain-aspect',
    difficulty: 'hard',
    question: 'Aspect\'s 1982 experiment improved on earlier Bell tests by:',
    options: [
      'Using rapid, random switching of polarizer angles during photon flight — closing the locality loophole',
      'Using electrons instead of photons',
      'Achieving perfect detector efficiency',
      'Cooling the apparatus to absolute zero',
    ],
    correctIndex: 0,
    explanation: 'Earlier experiments kept polarizers fixed, allowing a loophole: the source could "know" the settings in advance. Aspect used acousto-optic switches to change polarizer angles in ~10 ns, faster than light travel time between detectors.',
    realWorld: 'This "delayed choice" approach inspired later loophole-free Bell tests (2015) that closed both locality and detection loopholes simultaneously.',
    hint: 'The polarizers changed orientation while the photons were in flight.',
  },
  {
    id: 10660,
    topic: 'alain-aspect',
    difficulty: 'sota',
    question: 'The CHSH inequality bounds the correlation parameter S for local hidden variables as:',
    options: [
      '$|S| \\leq 2$, but quantum mechanics allows $|S| \\leq 2\\sqrt{2} \\approx 2.83$ (Tsirelson bound)',
      '$|S| \\leq 4$ classically, and quantum mechanics gives the same',
      '$|S| = 0$ for all theories',
      '$|S| \\leq 1$ classically, $|S| \\leq 2$ quantum mechanically',
    ],
    correctIndex: 0,
    explanation: 'The CHSH inequality $|S| = |E(a,b) - E(a,b\') + E(a\',b) + E(a\',b\')| \\leq 2$ bounds local hidden variable theories. Quantum mechanics achieves $S = 2\\sqrt{2}$ for maximally entangled states — the Tsirelson bound.',
    realWorld: 'Modern Bell tests routinely measure S ≈ 2.7, decisively violating the classical bound and approaching the quantum maximum.',
    hint: 'Quantum correlations exceed the classical limit by a factor of √2.',
  },
];
