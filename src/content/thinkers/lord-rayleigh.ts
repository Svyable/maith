import type { Question } from '../types';

export const lordRayleighQuestions: Question[] = [
  {
    id: 97301, topic: 'lord-rayleigh', difficulty: 'easy',
    question: 'Rayleigh scattering explains why the sky is blue. The scattering intensity scales as:',
    options: ['$I \\propto 1/\\lambda^4$ — shorter wavelengths scatter much more than longer ones', '$I \\propto \\lambda$ — longer wavelengths scatter more', '$I \\propto 1/\\lambda$ — linear inverse relationship', '$I$ is independent of wavelength'],
    correctIndex: 0,
    explanation: 'Rayleigh scattering occurs when light interacts with particles much smaller than its wavelength. The $1/\\lambda^4$ dependence means blue light ($\\lambda \\approx 450$ nm) scatters ~5.5× more than red light ($\\lambda \\approx 700$ nm).',
    realWorld: 'Blue sky during the day, red/orange sunsets (blue light scattered away), and why distant mountains look blue are all Rayleigh scattering.',
    hint: 'The fourth power makes the difference dramatic — blue scatters 5-10× more than red.',
  },
  {
    id: 97302, topic: 'lord-rayleigh', difficulty: 'hard',
    question: 'The Rayleigh-Jeans law $B(\\nu, T) = \\frac{2\\nu^2 k_BT}{c^2}$ correctly describes blackbody radiation at:',
    options: ['Low frequencies only — at high frequencies it diverges to infinity (the "ultraviolet catastrophe")', 'All frequencies', 'High frequencies only', 'Only at absolute zero'],
    correctIndex: 0,
    explanation: 'The Rayleigh-Jeans law applies classical equipartition to electromagnetic modes and works at $h\\nu \\ll k_BT$. At high frequencies, it predicts infinite energy — the ultraviolet catastrophe that Planck resolved with quantization.',
    realWorld: 'The failure of classical physics to explain blackbody radiation was one of the key problems that led directly to quantum mechanics.',
    hint: 'Classical physics assigns $k_BT$ energy to every mode — but there are infinitely many high-frequency modes.',
  },
  {
    id: 97303, topic: 'lord-rayleigh', difficulty: 'sota',
    question: 'The Rayleigh criterion for angular resolution states that two sources are just resolved when separated by $\\theta = 1.22 \\lambda/D$. This limits:',
    options: ['The resolving power of telescopes and microscopes — larger apertures see finer detail', 'The brightness of an image', 'The color accuracy of a lens', 'The magnification of an eyepiece'],
    correctIndex: 0,
    explanation: 'Diffraction creates an Airy disk pattern. Two sources are "just resolved" when the central maximum of one falls on the first minimum of the other. The factor 1.22 comes from the first zero of $J_1(x)/x$ (Bessel function).',
    realWorld: 'The Rayleigh criterion drove the design of the James Webb Space Telescope (6.5m mirror) and explains why radio telescopes need to be enormous to achieve useful resolution.',
    hint: 'Bigger aperture $D$ or shorter wavelength $\\lambda$ → better resolution (smaller $\\theta$).',
  },
];
