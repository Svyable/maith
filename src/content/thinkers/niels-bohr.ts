import type { Question } from '../types';

export const bohrQuestions: Question[] = [
  {
    id: 96501, topic: 'niels-bohr', difficulty: 'easy',
    question: 'Niels Bohr\'s atomic model proposed that electrons:',
    options: ['Orbit the nucleus only at specific quantized energy levels, emitting photons when jumping between them', 'Move in continuous spirals around the nucleus', 'Are embedded in a "plum pudding" of positive charge', 'Have no defined position or orbit at any time'],
    correctIndex: 0,
    explanation: 'Bohr\'s 1913 model postulated that electrons occupy discrete orbits with angular momentum L = nℏ. When an electron transitions from level n to level m, it emits a photon with energy E = hν = 13.6 eV(1/m² − 1/n²), perfectly matching the observed hydrogen spectrum.',
    realWorld: 'Bohr\'s model explained the Balmer series of hydrogen and launched the old quantum theory, paving the way for full quantum mechanics.',
    hint: 'Only certain orbits are allowed — and light is emitted in jumps between them.',
  },
  {
    id: 96502, topic: 'niels-bohr', difficulty: 'hard',
    question: 'Bohr\'s principle of complementarity states that:',
    options: ['Quantum objects exhibit wave or particle behavior depending on the experimental setup — both descriptions are necessary but mutually exclusive in any single measurement', 'Waves and particles are the same thing in all circumstances', 'The uncertainty principle can be violated with precise enough instruments', 'Classical physics is always a special case of quantum mechanics'],
    correctIndex: 0,
    explanation: 'Complementarity, central to the Copenhagen interpretation, holds that wave and particle are complementary aspects of quantum reality. A double-slit experiment shows interference (wave), but detecting which slit destroys interference (particle). Both views are needed for completeness.',
    realWorld: 'Complementarity remains foundational to quantum mechanics interpretation and influences quantum computing error correction and measurement theory.',
    hint: 'You can see a wave pattern or detect a particle — never both at once.',
  },
  {
    id: 96503, topic: 'niels-bohr', difficulty: 'sota',
    question: 'The Bohr–Einstein debates (1927–1935) centered on whether quantum mechanics is complete. Bohr defended the Copenhagen interpretation against Einstein\'s EPR argument by showing:',
    options: ['The EPR criterion of "physical reality" is inapplicable because measurement of one property fundamentally disturbs the complementary property — there is no simultaneous reality for non-commuting observables', 'Einstein\'s thought experiments contained mathematical errors', 'Hidden variables must exist but cannot be detected', 'Quantum entanglement violates special relativity'],
    correctIndex: 0,
    explanation: 'Einstein, Podolsky, and Rosen argued that if a measurement on one particle predicts a distant particle\'s value with certainty, that value must be "real" before measurement. Bohr countered that the entire experimental context defines what\'s real — you cannot simultaneously define position and momentum reality.',
    realWorld: 'Bell\'s theorem (1964) and subsequent experiments (Aspect 1982, CHSH violations) confirmed that quantum mechanics violates local realism — vindicating Bohr over Einstein on completeness.',
    hint: 'The debate was about whether unmeasured quantities have definite values.',
  },
];
