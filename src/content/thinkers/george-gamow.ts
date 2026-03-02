import type { Question } from '../types';

export const gamowQuestions: Question[] = [
  {
    id: 90801, topic: 'george-gamow', difficulty: 'sota',
    question: 'The Gamow peak determines the energy window for stellar nuclear reactions by balancing:',
    options: ['Coulomb barrier penetration and Maxwell-Boltzmann distribution', 'Gravity and radiation pressure', 'Strong and weak nuclear forces', 'Electron capture and beta decay'],
    correctIndex: 0,
    explanation: 'The Gamow peak is where the probability of quantum tunneling through the Coulomb barrier overlaps with the thermal energy distribution — only particles near this energy contribute significantly to fusion.',
    realWorld: 'Without quantum tunneling, the Sun\'s core temperature (~15 million K) would be far too low for hydrogen fusion — stars would not shine.',
    hint: 'Classical physics says the protons don\'t have enough energy — but quantum mechanics says they can tunnel through.',
  },
  {
    id: 90802, topic: 'george-gamow', difficulty: 'sota',
    question: 'Big Bang nucleosynthesis (BBN), which Gamow helped develop, predicts the primordial abundance of:',
    options: ['~75% hydrogen, ~25% helium by mass', '~50% hydrogen, ~50% helium', '~90% helium, ~10% hydrogen', 'Equal parts H, He, Li, Be'],
    correctIndex: 0,
    explanation: 'BBN occurred in the first 3 minutes after the Big Bang, producing ~75% H, ~25% He-4, with trace amounts of deuterium, He-3, and Li-7 — matching observations precisely.',
    realWorld: 'The deuterium abundance in the universe is a sensitive probe of the baryon density and one of the strongest confirmations of the Big Bang model.',
    hint: 'The universe was a nuclear reactor for about 3 minutes — mostly making the two lightest elements.',
  },
  {
    id: 90803, topic: 'george-gamow', difficulty: 'sota',
    question: 'Gamow and collaborators (Alpher-Bethe-Gamow "αβγ" paper) predicted:',
    options: ['A cosmic microwave background radiation from the early universe', 'Dark matter halos around galaxies', 'Gravitational wave detection', 'The accelerating expansion of the universe'],
    correctIndex: 0,
    explanation: 'The 1948 αβγ paper predicted that the cooling remnant radiation from the hot Big Bang should be observable as a microwave background at ~5 K — discovered in 1965 by Penzias and Wilson at ~2.7 K.',
    realWorld: 'Gamow added Hans Bethe\'s name to the paper purely for the pun (α, β, γ = Alpher, Bethe, Gamow) — Bethe had no involvement.',
    hint: 'If the universe started hot and dense, what happened to all that radiation as space expanded and cooled?',
  },
];
