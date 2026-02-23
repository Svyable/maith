import type { Question } from '../types';

export const alJazariQuestions: Question[] = [
  {
    id: 20531,
    topic: 'al-jazari',
    difficulty: 'hard',
    question: 'Al-Jazari\'s "Book of Knowledge of Ingenious Mechanical Devices" (1206) described a water-powered automaton that is considered an early example of:',
    options: ['A programmable machine using interchangeable cams', 'An electric motor', 'A steam engine', 'A digital computer'],
    correctIndex: 0,
    explanation: 'His musical automaton used rotating cylindrical cams with pegs that could be rearranged to change the drum patterns — making it reprogrammable.',
    realWorld: 'The concept of interchangeable cams directly influenced European automata and eventually the Jacquard loom\'s punch cards — a precursor to computing.',
    hint: 'The key innovation was that the output sequence could be changed by rearranging physical components.',
  },
  {
    id: 20532,
    topic: 'al-jazari',
    difficulty: 'sota',
    question: 'Al-Jazari\'s "Elephant Clock" combined engineering traditions from five civilizations. It used which mechanism to achieve accurate timekeeping?',
    options: ['A perforated float sinking in water at a controlled rate', 'A pendulum mechanism', 'A spring-driven escapement', 'A sundial with mechanical correction'],
    correctIndex: 0,
    explanation: 'A hollow float with a small hole sank slowly in a water basin, pulling a string mechanism that triggered automata at regular intervals — an ingenious analog timer.',
    realWorld: 'His precision water mechanisms anticipated feedback control systems used in modern industrial automation.',
    hint: 'Water flows through a small hole at a constant rate — a principle used since ancient Egypt but refined here.',
  },
  {
    id: 20533,
    topic: 'al-jazari',
    difficulty: 'easy',
    question: 'Al-Jazari is often called the "father of robotics" for building what kind of devices in the 12th century?',
    options: ['Automata — mechanical devices that mimicked living creatures', 'Telescopes', 'Printing presses', 'Compasses'],
    correctIndex: 0,
    explanation: 'He designed over 100 mechanical devices including humanoid automata that could serve drinks, wash hands, and play music — 800 years before modern robotics.',
    realWorld: 'His designs influenced European clockmakers and automaton builders for centuries.',
    hint: 'Self-moving mechanical figures that performed tasks.',
  },
];
