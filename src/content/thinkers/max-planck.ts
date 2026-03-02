import type { Question } from '../types';

export const planckQuestions: Question[] = [
  {
    id: 96401, topic: 'planck', difficulty: 'easy',
    question: 'Max Planck\'s quantum hypothesis proposed that energy is:',
    options: ['Emitted and absorbed in discrete packets (quanta) of energy E = hν', 'Continuously distributed like a classical wave', 'Only found in atomic nuclei', 'Always conserved in chemical reactions but not in nuclear ones'],
    correctIndex: 0,
    explanation: 'In 1900, Planck resolved the ultraviolet catastrophe in blackbody radiation by postulating that energy is quantized: E = hν, where h ≈ 6.626 × 10⁻³⁴ J·s is Planck\'s constant. This launched quantum physics.',
    realWorld: 'Planck\'s constant appears in every quantum mechanical equation. It sets the scale at which classical physics breaks down and quantum effects dominate.',
    hint: 'Energy comes in packets, not continuous streams.',
  },
  {
    id: 96402, topic: 'planck', difficulty: 'hard',
    question: 'Planck\'s radiation law gives the spectral radiance of a blackbody as $B(\\nu,T) = \\frac{2h\\nu^3}{c^2} \\frac{1}{e^{h\\nu/k_BT}-1}$. This resolved the "ultraviolet catastrophe" because:',
    options: ['The exponential denominator suppresses high-frequency modes, giving finite total energy — unlike the classical Rayleigh-Jeans law which diverges', 'It predicts that blackbodies only emit visible light', 'It shows that temperature is independent of radiation frequency', 'It eliminates the need for statistical mechanics'],
    correctIndex: 0,
    explanation: 'The classical Rayleigh-Jeans law (∝ ν²) predicts infinite energy at high frequencies. Planck\'s exponential cutoff e^{hν/k_BT} ensures that high-frequency modes are exponentially suppressed, giving a finite spectral peak at ν_max ∝ T (Wien\'s law).',
    realWorld: 'Planck\'s law is used in astrophysics to determine stellar temperatures, in thermal imaging, and in the calibration of the cosmic microwave background.',
    hint: 'At high frequencies, the exponential term dominates and kills the divergence.',
  },
  {
    id: 96403, topic: 'planck', difficulty: 'sota',
    question: 'The Planck scale defines fundamental limits of physics. The Planck length $\\ell_P = \\sqrt{\\hbar G/c^3} \\approx 1.6 \\times 10^{-35}$ m is significant because:',
    options: ['Below this scale, quantum gravitational effects dominate and our current theories of spacetime break down', 'It is the smallest length that can be measured with any telescope', 'It is the radius of the smallest known atom', 'It defines the wavelength of the most energetic gamma rays observed'],
    correctIndex: 0,
    explanation: 'The Planck length combines ℏ (quantum), G (gravity), and c (relativity) into a single length scale where all three frameworks become equally important. General relativity and quantum mechanics cannot both be correct at this scale — a theory of quantum gravity is needed.',
    realWorld: 'String theory, loop quantum gravity, and other quantum gravity proposals all operate at or near the Planck scale. It represents the deepest frontier of fundamental physics.',
    hint: 'When gravity, quantum mechanics, and relativity all matter equally, something new must emerge.',
  },
];
