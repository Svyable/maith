import type { Question } from '../types';

export const arrheniusQuestions: Question[] = [
  {
    id: 90601, topic: 'arrhenius', difficulty: 'sota',
    question: 'The Arrhenius equation $k = A e^{-E_a/RT}$ predicts that reaction rate:',
    options: ['Increases exponentially with temperature', 'Decreases linearly with temperature', 'Is independent of activation energy', 'Doubles every 100°C exactly'],
    correctIndex: 0,
    explanation: 'The exponential dependence $e^{-E_a/RT}$ means small temperature increases dramatically increase the fraction of molecules with sufficient energy to react.',
    realWorld: 'Food spoils faster at room temperature because biochemical reaction rates roughly double for every 10°C increase.',
    hint: 'The exponential term contains T in the denominator — what happens as T grows?',
  },
  {
    id: 90602, topic: 'arrhenius', difficulty: 'sota',
    question: 'In 1896, Arrhenius calculated that doubling atmospheric CO₂ would raise global temperature by approximately:',
    options: ['5–6°C', '1–2°C', '10–15°C', '0.1–0.5°C'],
    correctIndex: 0,
    explanation: 'Using a radiative balance model with infrared absorption data, Arrhenius estimated ~5–6°C warming from CO₂ doubling — remarkably close to modern high-end estimates of equilibrium climate sensitivity.',
    realWorld: 'His 1896 paper is the first quantitative climate model — predating modern climate science by 60+ years.',
    hint: 'His estimate was surprisingly close to current IPCC upper bounds for climate sensitivity.',
  },
  {
    id: 90603, topic: 'arrhenius', difficulty: 'sota',
    question: 'The pre-exponential factor $A$ in the Arrhenius equation represents:',
    options: ['The collision frequency and orientation factor', 'The equilibrium constant', 'The activation energy barrier', 'The reaction enthalpy'],
    correctIndex: 0,
    explanation: 'The pre-exponential factor $A$ (frequency factor) accounts for the rate of molecular collisions and the probability that collisions have the correct geometric orientation for reaction.',
    realWorld: 'Enzymes work by increasing the effective A factor — aligning substrates perfectly to dramatically increase reaction rates.',
    hint: 'Not all collisions lead to reactions — molecules need to hit each other the right way.',
  },
];
