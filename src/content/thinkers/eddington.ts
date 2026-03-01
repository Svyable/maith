import type { Question } from '../types';

export const eddingtonQuestions: Question[] = [
  {
    id: 31200,
    topic: 'eddington',
    difficulty: 'easy',
    question: 'What proved General Relativity in 1919?',
    options: [
      'Starlight deflection around the Sun during solar eclipse on Príncipe',
      'Uranium decay measured time dilation in vacuum chamber',
      'Transatlantic pendulum clocks proved rotational time slowing', 
      'CMB radiation mapped universe expansion from singularity'
    ],
    correctIndex: 0,
    explanation: 'Einstein predicted gravity bends light. While in Príncipe Eddington photographed stars behind the eclipsed Sun, measuring exact $1.75$ arcsecond deflection.',
    realWorld: 'Einstein instant global fame. Newtonian physics dethroned.',
    hint: 'Moon blocks Sun → photograph stars "behind" it → measure position shift.',
  },
  {
    id: 31201,
    topic: 'eddington',
    difficulty: 'hard',
    question: 'Eddington Limit $L_\\text{Edd}} = \\frac{4πGMm_pc}{σ_T}$ balances what forces?',
    options: [
      'Radiation pressure vs. gravitational collapse',
      'Fusion explosion vs. electron degeneracy',
      'Angular momentum vs. magnetic binding',
      'Positron repulsion vs. spacetime curvature'
    ],
    correctIndex: 0,
    explanation: 'Maximum stellar luminosity where photon momentum equals gravitational force per unit mass. Exceed = star violently ejects outer layers.',
    realWorld: 'Also limits black hole accretion: too bright → blows food away.',
    hint: 'Light pressure strong enough to overcome gravity.',
  },
  {
    id: 31202,
    topic: 'eddington',
    difficulty: 'sota',
    question: 'Eddington-Finkelstein coordinates eliminate what at $r_s = \\frac{2GM}{c^2}$?',
    options: [
      'Coordinate singularity (math infinity) at event horizon',
      'Physical singularity at black hole center',
      'Magnetic monopoles at ergosphere edge',
      'Spatial dimensions becoming imaginary inside',
    ],
    correctIndex: 0,
    explanation: 'Schwarzschild coordinates diverge at horizon ($t→∞$). New coordinates show smooth crossing for infalling observers.',
    realWorld: 'Proved horizons smooth, not "broken physics."',
    hint: 'Bad coordinates = map with North Pole problem.',
  },
  {
    id: 31203,
    topic: 'eddington',
    difficulty: 'hard',
    question: 'Mass-luminosity $L∝M^{3.5}$ means what for stellar lifetimes?',
    options: [
      '$10×$ mass star shines $3000×$ brighter, dies $300×$ faster',
      'Heavier stars burn slower via heat shielding',
      'Neutron stars fuse forever',
      'Stars halt fusion at $2×$ initial mass'
    ],
    correctIndex: 0,
    explanation: '$10M_⊙$ star has $10×$ fuel but $10^{3.5}≈3162×$ luminosity. Lifespan scales as $τ∝M/F∝M^{-2.5}$.',
    realWorld: 'Red dwarfs trillions years; blue giants few million years.',
    hint: 'Big engines + big gas tank = still burns out fast.',
  },
  {
    id: 31204,
    topic: 'eddington',
    difficulty: 'hard',
    question: 'Eddington obsessively derived exact value of what constant?',
    options: [
      'Fine-structure constant: "proved" $\\alpha=1/136$ then $1/137$',
      'Gravitational $G$ from CMB expansion',
      'Speed of light $c$ from irrational $\\pi$ digits',
      'Higgs mass from Riemann zeta zeros'
    ],
    correctIndex: 0,
    explanation: 'Claimed $\\alpha$ must be pure integer fraction. Experiments showed $1/137$; he adjusted math. Nicknamed "Arthur Adding-One."',
    realWorld: 'Actual: $\\alpha≈1/137.035999$.',
    hint: 'Tried forcing messy physics into elegant integer.',
  }
];
