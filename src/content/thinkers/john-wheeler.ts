import type { Question } from '../types';

export const johnWheelerQuestions: Question[] = [
  {
    id: 21130,
    topic: 'john-wheeler',
    difficulty: 'sota',
    question: 'John Archibald Wheeler coined which term for a gravitationally collapsed star from which nothing can escape?',
    options: ['Black hole', 'Neutron star', 'Quasar', 'Pulsar'],
    correctIndex: 0,
    explanation: 'Wheeler popularized the term "black hole" in 1967, replacing the cumbersome "gravitationally completely collapsed object." The catchy name helped make the concept accessible to the public and other scientists.',
    realWorld: 'The term became one of the most iconic in all of science, recognized universally across cultures.',
    hint: 'He replaced a long technical description with a vivid two-word metaphor.',
  },
  {
    id: 21131,
    topic: 'john-wheeler',
    difficulty: 'sota',
    question: 'Wheeler\'s "It from Bit" doctrine proposes that the universe is fundamentally made of what?',
    options: ['Information — every physical quantity derives from binary yes/no questions', 'Energy fields pervading spacetime', 'Vibrating strings in higher dimensions', 'Discrete atoms of spacetime'],
    correctIndex: 0,
    explanation: 'Wheeler argued that the physical world ("It") emerges from informational acts of observation ("Bit"), making information more fundamental than matter or energy.',
    realWorld: 'This philosophy directly influenced the development of quantum information theory, quantum computing, and the holographic principle.',
    hint: 'The material world emerges from answers to yes/no questions.',
  },
  {
    id: 21132,
    topic: 'john-wheeler',
    difficulty: 'sota',
    question: 'Wheeler\'s "delayed choice" thought experiment demonstrates which counterintuitive quantum principle?',
    options: ['The measurement choice made after a photon enters an interferometer determines its past behavior', 'Entangled particles communicate faster than light', 'Quantum states cannot be cloned', 'The vacuum contains infinite energy'],
    correctIndex: 0,
    explanation: 'Wheeler showed that deciding whether to measure "which path" or "interference" after a photon has already entered the apparatus retroactively determines whether it behaved as a particle or wave — as if the future affects the past.',
    realWorld: 'This experiment has been confirmed with single photons, atoms, and even molecules, and is central to quantum eraser experiments.',
    hint: 'A decision made now seems to reach back in time to determine what already happened.',
  },
];
