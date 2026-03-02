import type { Question } from '../types';

export const szilardQuestions: Question[] = [
  {
    id: 21120,
    topic: 'szilard',
    difficulty: 'sota',
    question: 'Szilard conceived the idea of a nuclear chain reaction while crossing a street in which city in 1933?',
    options: ['London', 'Berlin', 'Budapest', 'New York'],
    correctIndex: 0,
    explanation: 'While waiting at a traffic light on Southampton Row in London, Szilard realized that if a neutron could trigger the release of two or more neutrons from an atom, a self-sustaining chain reaction would be possible.',
    realWorld: 'This sidewalk epiphany led directly to the atomic age — Szilard patented the chain reaction concept in 1934.',
    hint: 'He had recently fled Nazi Germany to this European capital.',
  },
  {
    id: 21121,
    topic: 'szilard',
    difficulty: 'sota',
    question: 'Szilard\'s famous 1939 letter to President Roosevelt, signed by Einstein, warned about the potential for which development?',
    options: ['Germany developing an atomic bomb using uranium fission', 'Japan acquiring nuclear materials', 'The Soviet Union\'s nuclear program', 'The dangers of civilian nuclear power'],
    correctIndex: 0,
    explanation: 'Szilard drafted the letter and convinced Einstein to sign it, warning that recent fission discoveries could enable extremely powerful bombs and that Germany might be pursuing them. This directly led to the Manhattan Project.',
    realWorld: 'The Einstein–Szilard letter is one of the most consequential letters in human history.',
    hint: 'The letter warned about a specific country\'s potential weapons program.',
  },
  {
    id: 21122,
    topic: 'szilard',
    difficulty: 'sota',
    question: 'Szilard\'s thought experiment about "Maxwell\'s demon" contributed to establishing which fundamental connection?',
    options: ['The link between information and thermodynamic entropy', 'The uncertainty principle in quantum mechanics', 'The equivalence of mass and energy', 'The wave-particle duality of light'],
    correctIndex: 0,
    explanation: 'Szilard showed that the demon must acquire information to sort molecules, and this information acquisition has an entropy cost — establishing that information is physical and has thermodynamic consequences.',
    realWorld: 'This insight is foundational to Landauer\'s principle and the thermodynamics of computation, directly relevant to the energy costs of modern computing.',
    hint: 'He proved that the act of measurement itself has an irreducible energy cost.',
  },
];
