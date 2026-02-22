import type { Question } from '../types';

export const shockleyQuestions: Question[] = [
  {
    id: 11131,
    topic: 'shockley',
    difficulty: 'easy',
    question: 'The transistor, invented at Bell Labs in 1947, replaced vacuum tubes because:',
    options: [
      'Transistors are smaller, faster, more reliable, use less power, and generate less heat — enabling practical electronic computers',
      'Transistors could amplify signals while vacuum tubes could only switch',
      'Vacuum tubes required rare earth elements while transistors use abundant silicon',
      'Transistors were cheaper to manufacture from the very beginning',
    ],
    correctIndex: 0,
    explanation: 'Bardeen, Brattain, and Shockley\'s transistor replaced bulky, hot, fragile vacuum tubes. ENIAC (1945) used 17,468 tubes and filled a room. A modern chip contains billions of transistors in a few cm². The transistor is arguably the most important invention of the 20th century.',
    realWorld: 'Every electronic device — phones, computers, cars, medical equipment — contains transistors. Global semiconductor revenue exceeds $500 billion annually.',
    hint: 'Think about what made computers go from room-sized to pocket-sized.',
  },
  {
    id: 11132,
    topic: 'shockley',
    difficulty: 'hard',
    question: 'In a semiconductor, the band gap $E_g$ determines:',
    options: [
      'The minimum energy a photon must have to excite an electron from the valence to conduction band — controlling conductivity, absorption, and emission wavelength',
      'The maximum current the material can carry before breakdown',
      'The speed at which electrons travel through the crystal lattice',
      'The thermal conductivity of the material',
    ],
    correctIndex: 0,
    explanation: 'Silicon has $E_g \\approx 1.1$ eV (infrared), GaAs has $E_g \\approx 1.4$ eV (near-IR), GaN has $E_g \\approx 3.4$ eV (UV/blue). LEDs emit photons with energy $\\approx E_g$ — that\'s why different semiconductors produce different colours. At $T > 0$, thermal excitation creates carriers: $n_i \\propto e^{-E_g/(2k_BT)}$.',
    realWorld: 'Solar cells are optimised for band gaps matching the solar spectrum (~1.3 eV ideal). Blue LEDs required wide-gap GaN — Nakamura\'s breakthrough won the 2014 Nobel Prize and enabled white LED lighting.',
    hint: 'The gap between valence and conduction bands is the key energy scale — it controls everything.',
  },
  {
    id: 11133,
    topic: 'shockley',
    difficulty: 'sota',
    question: 'The Shockley diode equation $I = I_0\\left(e^{qV/(nk_BT)} - 1\\right)$ describes current through a p-n junction. The ideality factor $n$ deviates from 1 because:',
    options: [
      'Recombination in the depletion region (not just at the junction edges) adds current with $n \\approx 2$, and surface states, tunnelling, and high-injection effects further modify the ideal behaviour',
      'The equation assumes zero series resistance, which is never true in practice',
      'Quantum tunnelling across the junction always dominates at room temperature',
      'The built-in potential varies with applied voltage due to dopant redistribution',
    ],
    correctIndex: 0,
    explanation: 'Ideal diodes ($n = 1$) assume recombination only outside the depletion region. In reality, Shockley-Read-Hall recombination within the depletion region gives $n \\approx 2$, and the measured $n$ is between 1 and 2. At high currents, series resistance and high-injection effects dominate.',
    realWorld: 'Solar cell efficiency depends critically on $n$: higher ideality factors reduce open-circuit voltage. Understanding recombination mechanisms drives the push toward >30% efficient perovskite and multi-junction cells.',
    hint: 'The ideal model ignores recombination inside the depletion zone — real junctions have it, pushing $n$ toward 2.',
  },
];
