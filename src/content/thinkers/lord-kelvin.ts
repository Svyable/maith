import type { Question } from '../types';

export const lordKelvinQuestions: Question[] = [
  {
    id: 97401, topic: 'lord-kelvin', difficulty: 'easy',
    question: 'Lord Kelvin established the absolute temperature scale. The key insight is that:',
    options: ['$T = 0$ K (absolute zero) is the lower limit where molecular motion ceases — $T(K) = T(°C) + 273.15$', 'Temperature can be negative in Kelvin', 'The Kelvin scale starts at the freezing point of water', '0 K is easily achievable in a laboratory'],
    correctIndex: 0,
    explanation: 'Kelvin recognized that temperature has a natural zero point where entropy reaches its minimum. The Kelvin scale makes thermodynamic equations clean: Carnot efficiency $\\eta = 1 - T_C/T_H$ requires absolute temperatures.',
    realWorld: 'All of thermodynamics, from engine efficiency to the cosmic microwave background temperature (2.725 K), uses the Kelvin scale.',
    hint: 'Absolute zero is -273.15°C — you can approach it but never reach it (third law).',
  },
  {
    id: 97402, topic: 'lord-kelvin', difficulty: 'hard',
    question: 'The Kelvin-Planck statement of the second law says:',
    options: ['No cyclic process can convert heat entirely into work — some heat must be rejected to a cold reservoir', 'Energy can be created from nothing', 'Entropy can decrease in isolated systems', 'Perfect refrigerators exist'],
    correctIndex: 0,
    explanation: 'The Kelvin-Planck statement forbids perfect heat engines. Combined with the Clausius statement (heat doesn\'t spontaneously flow cold to hot), they are equivalent formulations of the second law.',
    realWorld: 'This is why every power plant needs a cooling system — a coal plant typically wastes 60% of its heat energy to the environment.',
    hint: 'A perfect engine ($\\eta = 1$) would violate this — you always need a cold reservoir.',
  },
  {
    id: 97403, topic: 'lord-kelvin', difficulty: 'sota',
    question: 'Kelvin estimated the age of the Earth at 20-400 million years based on cooling calculations. This was wrong because:',
    options: ['He didn\'t know about radioactive decay — an internal heat source that keeps the Earth warm far longer', 'His math was incorrect', 'He assumed the Earth was flat', 'He used the wrong temperature scale'],
    correctIndex: 0,
    explanation: 'Kelvin modeled Earth as a cooling sphere and calculated rigorously — but without knowledge of radioactivity (discovered 1896), he missed the dominant heat source. The actual age is 4.54 billion years. This is a famous example of a correct calculation from an incomplete model.',
    realWorld: 'This controversy between Kelvin and geologists/biologists (who needed more time for evolution) was resolved by the discovery of radioactivity — showing that even brilliant physicists can be wrong when missing a key piece of physics.',
    hint: 'His thermodynamics was correct — but he was missing a heat source that hadn\'t been discovered yet.',
  },
];
