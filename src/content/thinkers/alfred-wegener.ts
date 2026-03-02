import type { Question } from '../types';

export const wegenerQuestions: Question[] = [
  {
    id: 96004, topic: 'alfred-wegener', difficulty: 'easy',
    question: 'Alfred Wegener proposed that all continents were once joined in a supercontinent called:',
    options: ['Pangaea', 'Gondwana', 'Laurasia', 'Rodinia'],
    correctIndex: 0,
    explanation: 'Wegener named this supercontinent Pangaea (meaning "all lands") and proposed it broke apart over millions of years — the theory of continental drift.',
    realWorld: 'Continental drift was vindicated by plate tectonics in the 1960s and explains earthquakes, mountain formation, and species distribution.',
    hint: 'The name means "all Earth" in Greek.',
  },
  {
    id: 96005, topic: 'alfred-wegener', difficulty: 'hard',
    question: 'Wegener\'s continental drift hypothesis was rejected for decades primarily because he could not explain:',
    options: ['The mechanism that moves continents', 'Why fossils matched across oceans', 'The shape of continental coastlines', 'Rock type similarities between continents'],
    correctIndex: 0,
    explanation: 'While Wegener had compelling evidence (fossil, geological, and shape matching), he couldn\'t explain what force moved entire continents. Mantle convection wasn\'t understood until the 1960s.',
    realWorld: 'This is a classic case in the history of science where correct conclusions were rejected because the mechanism was unknown.',
    hint: 'His evidence was strong, but the "engine" was missing.',
  },
  {
    id: 96006, topic: 'alfred-wegener', difficulty: 'sota',
    question: 'Modern GPS measurements confirm that tectonic plates move at rates of approximately:',
    options: ['2–10 cm per year, comparable to fingernail growth', '2–10 meters per year', '2–10 mm per century', '2–10 km per million years'],
    correctIndex: 0,
    explanation: 'GPS satellite measurements confirm plate velocities of 2–10 cm/yr, consistent with seafloor spreading rates from magnetic anomaly data — directly vindicating Wegener\'s drift hypothesis.',
    realWorld: 'These measurements allow precise earthquake hazard forecasting and explain why the Atlantic Ocean widens by about 2.5 cm each year.',
    hint: 'About as fast as your fingernails grow.',
  },
];
