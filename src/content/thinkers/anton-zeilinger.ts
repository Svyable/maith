import type { Question } from '../types';

export const antonZeilingerQuestions: Question[] = [
  {
    id: 31430,
    topic: 'anton-zeilinger',
    difficulty: 'easy',
    question: 'Anton Zeilinger shared the 2022 Nobel Prize for his pioneering experiments with entangled photons. What spectacular quantum phenomenon did he first demonstrate experimentally?',
    options: [
      'Quantum teleportation — transferring the complete quantum state of a photon to a distant photon using entanglement and classical communication, without physically sending the original photon.',
      'Quantum cloning — creating a perfect duplicate of an unknown quantum state using a universal quantum copying machine.',
      'Quantum tunneling of photons through macroscopic barriers — demonstrating that photons can traverse centimeter-thick lead shields via evanescent wave coupling.',
      'Quantum erasure of gravitational effects — showing that entangled photons in free fall exhibit no gravitational redshift.'
    ],
    correctIndex: 0,
    explanation: 'In 1997, Zeilinger\'s group performed the first experimental quantum teleportation, confirming the 1993 Bennett et al. protocol. By sharing an entangled Bell pair and performing a Bell-state measurement on one photon and the input state, the quantum state was reconstructed at the distant location using only 2 classical bits of information.',
    realWorld: 'Quantum teleportation is a cornerstone of quantum networks. Zeilinger\'s group later demonstrated teleportation across the Danube river (2004) and via the Micius satellite (2017), paving the way for a global quantum internet.',
    hint: 'The quantum state disappears at one location and reappears at another — but no faster-than-light communication occurs because classical bits must also be sent.',
  },
  {
    id: 31431,
    topic: 'anton-zeilinger',
    difficulty: 'hard',
    question: 'Zeilinger demonstrated "entanglement swapping" — a key protocol for quantum repeaters. How does entanglement swapping work mathematically?',
    options: [
      'Two pairs of entangled particles $(1,2)$ and $(3,4)$ are created independently. A Bell-state measurement on particles 2 and 3 projects the never-interacted particles 1 and 4 into an entangled Bell state, extending entanglement across a relay.',
      'A single entangled pair is split by a beam splitter, creating four entangled particles from two. The additional entanglement is "swapped" from the beam splitter\'s vacuum fluctuations.',
      'An entangled pair $(1,2)$ interacts with a coherent laser field, swapping the entanglement from the photon pair to the laser mode and an ancilla photon.',
      'Two classically correlated pairs are combined, and post-selection on coincidence measurements creates apparent entanglement that violates Bell\'s inequality only statistically.'
    ],
    correctIndex: 0,
    explanation: 'Entanglement swapping exploits the structure of the Bell basis. The joint state $|\\Phi^+\\rangle_{12} \\otimes |\\Phi^+\\rangle_{34}$ can be rewritten as a superposition of Bell states in the $(2,3)$ and $(1,4)$ partitions. Measuring particles 2 and 3 in the Bell basis collapses 1 and 4 into a definite Bell state — even though they never interacted.',
    realWorld: 'Entanglement swapping is the key operation in quantum repeaters, which are needed to extend quantum communication beyond the ~100 km fiber loss limit. It enables the future quantum internet architecture.',
    hint: 'A measurement on two "middle" particles from independent pairs forces the two "outer" particles into an entangled state.',
  },
  {
    id: 31432,
    topic: 'anton-zeilinger',
    difficulty: 'sota',
    question: 'Zeilinger\'s group performed the first "loophole-free" Bell test with photons in 2015. What mathematical requirement makes a Bell test "loophole-free"?',
    options: [
      'Three conditions must be simultaneously satisfied: (1) space-like separation of measurement events (locality), (2) detection efficiency $\\eta > \\frac{2}{1+\\sqrt{2}} \\approx 82.8\\%$ for CHSH (fair sampling), and (3) settings chosen by a random process independent of the photon source (freedom of choice).',
      'The experiment must achieve $S > 2\\sqrt{2}$ (the Tsirelson bound), proving that the correlations exceed even the quantum mechanical prediction and ruling out super-quantum theories.',
      'The Bell inequality must be violated for at least 5 standard deviations across three mutually unbiased measurement bases, ensuring the result is statistically significant in all complementary observables.',
      'The entire experiment must be completed within a single coherence time $\\tau_c$ of the photon source, preventing decoherence from mimicking classical correlations.'
    ],
    correctIndex: 0,
    explanation: 'The locality loophole requires that Alice\'s measurement is completed before any light-speed signal from Bob\'s setting choice could arrive (and vice versa). The detection loophole requires high enough efficiency that the detected subset cannot be biased. The freedom-of-choice loophole requires genuinely random, independent setting choices. Closing all three simultaneously is extraordinarily challenging.',
    realWorld: 'The 2015 Giustina et al. experiment (Zeilinger\'s group) used high-efficiency superconducting nanowire detectors ($\\eta > 75\\%$) and 30-meter fiber delays to close all major loopholes, providing the strongest evidence against local realism.',
    hint: 'Three loopholes must be closed at once: locality (space-like separation), detection (high efficiency), and freedom of choice (random settings).',
  },
];
