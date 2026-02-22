import type { Question } from '../types';

export const hedyLamarrQuestions: Question[] = [
  {
    id: 96025, topic: 'hedy-lamarr', difficulty: 'easy',
    question: 'Hedy Lamarr co-invented frequency-hopping spread spectrum technology originally designed to:',
    options: ['Prevent radio-guided torpedoes from being jammed', 'Improve AM radio sound quality', 'Enable satellite television', 'Encrypt telephone conversations'],
    correctIndex: 0,
    explanation: 'During WWII, Lamarr and composer George Antheil patented a system where radio signals rapidly hopped between frequencies, making them nearly impossible to jam or intercept.',
    realWorld: 'Frequency hopping is the foundation of modern WiFi, Bluetooth, GPS, and military communications — worth billions today.',
    hint: 'Keep changing the radio frequency so the enemy can\'t lock on.',
  },
  {
    id: 96026, topic: 'hedy-lamarr', difficulty: 'hard',
    question: 'Lamarr\'s frequency-hopping system used a mechanism inspired by:',
    options: ['Player piano rolls to synchronize transmitter and receiver frequency changes', 'Radar pulse timing', 'Morse code dot-dash patterns', 'Vinyl record groove patterns'],
    correctIndex: 0,
    explanation: 'Antheil\'s expertise with player pianos led them to use synchronized piano-roll-like mechanisms at both ends to coordinate frequency hops — an elegant analog solution.',
    realWorld: 'Modern digital implementations use pseudorandom number generators instead of piano rolls, but the core principle of synchronized hopping remains identical.',
    hint: 'A musical instrument mechanism for synchronization.',
  },
  {
    id: 96027, topic: 'hedy-lamarr', difficulty: 'sota',
    question: 'Modern CDMA and OFDM wireless systems extend Lamarr\'s spread spectrum concept by:',
    options: ['Spreading signals across many frequencies simultaneously using orthogonal codes', 'Using a single fixed frequency with higher power', 'Transmitting only during specific time slots', 'Compressing all data into ultrasonic frequencies'],
    correctIndex: 0,
    explanation: 'CDMA spreads signals across the entire bandwidth using orthogonal codes (each user gets a unique code), while OFDM divides bandwidth into many narrow orthogonal subcarriers — both are descendants of spread spectrum.',
    realWorld: '4G LTE uses OFDM and 3G used CDMA — both trace their lineage to Lamarr\'s frequency-hopping patent. She was inducted into the National Inventors Hall of Fame in 2014.',
    hint: 'Multiple users share the same bandwidth without interfering.',
  },
];
