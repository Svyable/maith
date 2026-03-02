import type { Question } from '../types';

export const edwinHubbleQuestions: Question[] = [
  {
    id: 96101, topic: 'edwin-hubble', difficulty: 'easy',
    question: 'Edwin Hubble\'s most revolutionary discovery was that:',
    options: ['The universe is expanding — galaxies are moving away from us, with velocity proportional to distance', 'The Milky Way is the only galaxy in the universe', 'Stars are powered by nuclear fusion', 'The speed of light is constant in all reference frames'],
    correctIndex: 0,
    explanation: 'Hubble observed that galaxies show redshifts proportional to their distance (Hubble\'s Law: v = H₀d), proving the universe is expanding — overthrowing the static universe model.',
    realWorld: 'The expanding universe is the observational foundation of Big Bang cosmology and led to the discovery of dark energy in 1998.',
    hint: 'The farther away a galaxy is, the faster it recedes.',
  },
  {
    id: 96102, topic: 'edwin-hubble', difficulty: 'hard',
    question: 'Hubble proved that "spiral nebulae" were actually separate galaxies by identifying:',
    options: ['Cepheid variable stars in the Andromeda Nebula, showing it was far beyond the Milky Way', 'Radio waves emanating from spiral structures', 'Spectral lines matching our Sun in distant objects', 'Gravitational lensing effects predicted by Einstein'],
    correctIndex: 0,
    explanation: 'Using the 100-inch Hooker telescope at Mt. Wilson, Hubble resolved individual Cepheid variables in M31 (Andromeda) in 1924. Their period-luminosity relation gave a distance of ~900,000 light-years — far outside the Milky Way, proving galaxies exist beyond our own.',
    realWorld: 'This discovery expanded the known universe from one galaxy to billions, fundamentally changing humanity\'s place in the cosmos.',
    hint: 'These stars pulsate with a period directly related to their true brightness.',
  },
  {
    id: 96103, topic: 'edwin-hubble', difficulty: 'sota',
    question: 'The Hubble constant H₀ relates recession velocity to distance via v = H₀d. Modern measurements show a "Hubble tension" because:',
    options: ['The value measured from the local distance ladder (~73 km/s/Mpc) disagrees with the CMB prediction (~67 km/s/Mpc) at >5σ significance', 'Different telescopes give inconsistent redshift measurements', 'The Hubble Space Telescope\'s optics distort distance calculations', 'General relativity breaks down at cosmological scales'],
    correctIndex: 0,
    explanation: 'Local measurements (Cepheids + Type Ia supernovae) give H₀ ≈ 73 km/s/Mpc, while Planck CMB data predicts H₀ ≈ 67.4 km/s/Mpc assuming ΛCDM. This 5σ+ discrepancy may point to new physics beyond the standard cosmological model.',
    realWorld: 'The Hubble tension is one of the biggest open problems in cosmology today, potentially hinting at new particles, modified gravity, or early dark energy.',
    hint: 'Two independent methods of measuring the same constant give statistically incompatible results.',
  },
];
