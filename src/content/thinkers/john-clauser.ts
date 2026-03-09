import type { Question } from '../types';

export const johnClauserQuestions: Question[] = [
  {
    id: 31420,
    topic: 'john-clauser',
    difficulty: 'easy',
    question: 'John Clauser shared the 2022 Nobel Prize for experiments with entangled photons. What fundamental inequality did he experimentally test for the first time?',
    options: [
      'Bell\'s inequality — specifically the CHSH form $|S| \\leq 2$, which any local hidden-variable theory must satisfy. Clauser\'s experiment showed $S > 2$, proving quantum entanglement is real.',
      'Heisenberg\'s uncertainty principle — proving that $\\Delta x \\cdot \\Delta p \\geq \\hbar/2$ holds exactly for entangled photon pairs measured simultaneously.',
      'The no-cloning theorem — demonstrating that it is physically impossible to create an identical copy of an unknown quantum state.',
      'The Tsirelson bound — showing that quantum mechanics allows correlations up to $S = 2\\sqrt{2}$, exactly as predicted by the abstract $C^*$-algebra framework.'
    ],
    correctIndex: 0,
    explanation: 'In 1972, Clauser and Freedman performed the first experimental test of Bell\'s inequality using entangled photons from calcium atoms. They measured polarization correlations and found violations of the classical bound $|S| \\leq 2$, confirming that no local hidden-variable theory can explain quantum correlations.',
    realWorld: 'Clauser\'s pioneering Bell test opened the door to quantum information science. Today, Bell inequality violations are used to certify quantum key distribution (QKD) systems and verify genuine quantum advantage in quantum computing.',
    hint: 'It is a mathematical bound that limits how correlated measurements can be if reality is "locally real" — and quantum mechanics violates it.',
  },
  {
    id: 31421,
    topic: 'john-clauser',
    difficulty: 'hard',
    question: 'Clauser, Horne, Shimony, and Holt (CHSH) reformulated Bell\'s inequality into an experimentally testable form. What is the CHSH inequality and its quantum mechanical maximum?',
    options: [
      '$S = |E(a,b) - E(a,b\') + E(a\',b) + E(a\',b\')| \\leq 2$ classically. Quantum mechanics allows up to $S = 2\\sqrt{2} \\approx 2.828$ (the Tsirelson bound) for maximally entangled states.',
      '$S = |\\langle AB\\rangle + \\langle A\'B\\rangle + \\langle AB\'\\rangle - \\langle A\'B\'\\rangle| \\leq 4$ classically. Quantum mechanics predicts exactly $S = \\pi$ for Bell states.',
      '$P(a,b) + P(a,b\') + P(a\',b) - P(a\',b\') \\leq 1$ classically. Quantum mechanics violates this to reach $P_{\\max} = 3/2$ using GHZ states.',
      '$|C(\\theta)| \\leq \\cos\\theta$ classically. Quantum mechanics predicts $C(\\theta) = -\\cos\\theta$ for all angles, violating the bound at $\\theta = \\pi/4$.'
    ],
    correctIndex: 0,
    explanation: 'The CHSH inequality combines four correlation measurements between two parties with two measurement settings each. The classical limit of 2 follows from assuming local realism. The Tsirelson bound $2\\sqrt{2}$ is achieved by maximally entangled Bell states $|\\Phi^+\\rangle$ with optimal measurement angles separated by $\\pi/8$.',
    realWorld: 'The CHSH inequality is now the workhorse of quantum information: it certifies entanglement in device-independent quantum key distribution, randomness certification, and self-testing of quantum devices.',
    hint: 'It involves four correlation terms with a classical limit of 2, and quantum mechanics can reach $2\\sqrt{2}$.',
  },
  {
    id: 31422,
    topic: 'john-clauser',
    difficulty: 'sota',
    question: 'Clauser\'s original 1972 experiment had a significant "loophole" that later experiments by Aspect, Zeilinger, and others worked to close. What was the primary loophole?',
    options: [
      'The "locality loophole" — the measurement settings were chosen before the photons were emitted, so in principle a local hidden-variable signal could travel between detectors. Space-like separation of the choice events was not enforced.',
      'The "detection loophole" — only a fraction of emitted photon pairs were detected, so a local hidden-variable theory could exploit the undetected pairs to fake quantum correlations.',
      'The "freedom-of-choice loophole" — the random number generators used to select measurement settings could have been correlated with the hidden variables since the Big Bang.',
      'The "coincidence loophole" — the time window for identifying coincident photon detections was too wide, allowing accidental coincidences to inflate the measured correlations.'
    ],
    correctIndex: 0,
    explanation: 'In Clauser\'s experiment, the polarizer orientations were fixed before each run. A hypothetical hidden-variable signal traveling at the speed of light could "inform" one detector of the other\'s setting. Alain Aspect\'s 1982 experiment addressed this by switching polarizer settings while the photons were in flight.',
    realWorld: 'The quest to close all loopholes simultaneously culminated in 2015 "loophole-free" Bell tests by Hensen et al. (Delft), Giustina et al. (Vienna), and Shalm et al. (NIST), definitively ruling out local hidden-variable theories.',
    hint: 'The measurement settings were pre-selected, so information could theoretically travel between the two detectors before the measurements.',
  },
];
