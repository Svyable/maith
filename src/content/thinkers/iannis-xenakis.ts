import type { Question } from '../types';

export const iannisXenakisQuestions: Question[] = [
  {
    id: 20710,
    topic: 'iannis-xenakis',
    difficulty: 'hard',
    question: 'Xenakis composed "Pithoprakta" (1956) by modeling each instrument\'s pitch and timing using which physical distribution?',
    options: ['Maxwell-Boltzmann velocity distribution (kinetic gas theory)', 'Poisson distribution', 'Uniform distribution', 'Zipf\'s law'],
    correctIndex: 0,
    explanation: 'He treated orchestral musicians like gas particles, assigning pitch glissandi according to the Maxwell-Boltzmann distribution — the math of molecular speeds.',
    realWorld: 'This was the birth of "stochastic music" — using probability theory as a compositional tool, now standard in algorithmic composition.',
    hint: 'He literally used the physics of gas molecules to distribute musical events.',
  },
  {
    id: 20711,
    topic: 'iannis-xenakis',
    difficulty: 'sota',
    question: 'Xenakis used Markov chains and game theory in his composition "Duel" (1959). Players (conductors) choose strategies — what determines the winner?',
    options: ['A payoff matrix evaluated by the audience\'s aesthetic response', 'Note accuracy', 'Speed of performance', 'Volume levels'],
    correctIndex: 0,
    explanation: 'Two conductors simultaneously choose from musical "tactics"; a payoff matrix determines points. It\'s a two-person zero-sum game played in real time with orchestras.',
    realWorld: 'This prefigured interactive and generative music systems now common in video games and AI-driven composition.',
    hint: 'It\'s literally a musical implementation of von Neumann\'s game theory.',
  },
  {
    id: 20712,
    topic: 'iannis-xenakis',
    difficulty: 'easy',
    question: 'Before becoming a composer, Xenakis worked as an architect alongside which famous modernist?',
    options: ['Le Corbusier', 'Frank Lloyd Wright', 'Mies van der Rohe', 'Zaha Hadid'],
    correctIndex: 0,
    explanation: 'Xenakis designed the Philips Pavilion at the 1958 Brussels World\'s Fair with Le Corbusier — its hyperbolic paraboloid shape was derived from his musical mathematics.',
    realWorld: 'He\'s one of the few people to have made world-class contributions to both architecture and music.',
    hint: 'The Swiss-French pioneer of modern architecture.',
  },
];
