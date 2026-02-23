import type { Question } from '../types';

export const katherineJohnsonQuestions: Question[] = [
  {
    id: 20112, topic: 'katherine-johnson', difficulty: 'easy',
    question: 'Katherine Johnson performed critical trajectory calculations for which NASA mission?',
    options: ['Mercury-Atlas 6 (John Glenn)', 'Apollo 13', 'Gemini 4', 'Voyager 1'],
    correctIndex: 0,
    explanation: 'Johnson calculated the orbital trajectory for John Glenn\'s mission — Glenn personally requested that she verify the electronic computer\'s calculations.',
    realWorld: 'Her story was dramatized in the film "Hidden Figures" (2016), inspiring a new generation of women in STEM.',
    hint: 'This was the first American orbital spaceflight, and the astronaut trusted her math over the computer.',
  },
  {
    id: 20113, topic: 'katherine-johnson', difficulty: 'hard',
    question: 'What trajectory approach did Johnson help develop for the Apollo 11 lunar mission?',
    options: ['Lunar orbit rendezvous', 'Hohmann transfer orbit', 'Direct ascent', 'Earth orbit rendezvous'],
    correctIndex: 0,
    explanation: 'Johnson co-authored the paper on lunar orbit rendezvous — the approach that made the Apollo 11 moon landing feasible with available technology.',
    realWorld: 'Lunar orbit rendezvous saved weight by leaving the command module in orbit, making a single Saturn V launch sufficient.',
    hint: 'This approach separates into two vehicles: one stays in lunar orbit while the other descends.',
  },
  {
    id: 20114, topic: 'katherine-johnson', difficulty: 'sota',
    question: 'Johnson\'s trajectory analysis relied on which orbital mechanics concept for Earth-Moon transfers?',
    options: ['Patched conic approximation', 'N-body simulation', 'Lagrange interpolation', 'Monte Carlo sampling'],
    correctIndex: 0,
    explanation: 'The patched conic approximation breaks a trajectory into segments dominated by one gravitational body at a time — essential for hand calculation of cislunar trajectories.',
    realWorld: 'Modern missions still use patched conics for initial trajectory design before refining with full numerical integration.',
    hint: 'Each segment of the trajectory is treated as a two-body problem with the dominant gravitational source.',
  },
];
