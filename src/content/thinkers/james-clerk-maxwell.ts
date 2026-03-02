import type { Question } from '../types';

export const jamesClerkMaxwellQuestions: Question[] = [
  {
    id: 11111,
    topic: 'james-clerk-maxwell',
    difficulty: 'easy',
    question: 'Maxwell\'s equations unified electricity, magnetism, and light by showing that:',
    options: [
      'Changing electric fields create magnetic fields and vice versa — producing self-propagating electromagnetic waves travelling at speed $c$',
      'Electric and magnetic forces are both inverse-square laws like gravity',
      'All matter contains equal amounts of positive and negative charge',
      'Light is a longitudinal wave in the luminiferous aether',
    ],
    correctIndex: 0,
    explanation: 'Maxwell added the displacement current term $\\mu_0\\epsilon_0 \\frac{\\partial \\mathbf{E}}{\\partial t}$ to Ampère\'s law, completing the four equations. The resulting wave equation gives speed $c = 1/\\sqrt{\\mu_0\\epsilon_0} \\approx 3 \\times 10^8$ m/s — matching the measured speed of light. Light is an electromagnetic wave.',
    realWorld: 'Every wireless technology — radio, WiFi, Bluetooth, 5G, satellite comms — exists because Maxwell proved electromagnetic waves propagate through space.',
    hint: 'A changing $\\mathbf{E}$ field creates $\\mathbf{B}$, which creates $\\mathbf{E}$, which creates $\\mathbf{B}$ — it propagates itself.',
  },
  {
    id: 11112,
    topic: 'james-clerk-maxwell',
    difficulty: 'hard',
    question: 'The Maxwell–Boltzmann distribution $f(v) = 4\\pi n \\left(\\frac{m}{2\\pi k_BT}\\right)^{3/2} v^2 e^{-mv^2/(2k_BT)}$ describes:',
    options: [
      'The probability distribution of molecular speeds in an ideal gas at thermal equilibrium',
      'The energy spectrum of photons emitted by a black body',
      'The distribution of electron energies in a metal at absolute zero',
      'The angular distribution of scattered particles in Rutherford scattering',
    ],
    correctIndex: 0,
    explanation: 'Maxwell derived this in 1860 — the first statistical law in physics. The $v^2$ factor comes from the density of states in velocity space; the exponential is the Boltzmann factor. The most probable speed is $v_{mp} = \\sqrt{2k_BT/m}$, not the mean or RMS speed.',
    realWorld: 'This distribution governs gas dynamics, chemical reaction rates (only molecules above activation energy react), atmospheric escape (light gases like H₂ escape Earth), and semiconductor carrier velocities.',
    hint: 'It combines a $v^2$ phase space factor with an exponential energy decay — giving a peaked distribution.',
  },
  {
    id: 11113,
    topic: 'james-clerk-maxwell',
    difficulty: 'sota',
    question: 'Maxwell\'s equations in differential form include $\\nabla \\times \\mathbf{B} = \\mu_0\\mathbf{J} + \\mu_0\\epsilon_0\\frac{\\partial \\mathbf{E}}{\\partial t}$. The displacement current term $\\epsilon_0\\frac{\\partial \\mathbf{E}}{\\partial t}$ was Maxwell\'s key addition because:',
    options: [
      'Without it, $\\nabla \\cdot (\\nabla \\times \\mathbf{B}) = \\mu_0 \\nabla \\cdot \\mathbf{J} \\neq 0$ for time-varying fields, violating charge conservation',
      'It explains why light bends around massive objects',
      'It accounts for magnetic monopoles in the equations',
      'It predicts that the speed of light varies with frequency (dispersion)',
    ],
    correctIndex: 0,
    explanation: 'Since $\\nabla \\cdot (\\nabla \\times \\mathbf{B}) = 0$ always, Ampère\'s law $\\nabla \\times \\mathbf{B} = \\mu_0\\mathbf{J}$ requires $\\nabla \\cdot \\mathbf{J} = 0$ — but the continuity equation says $\\nabla \\cdot \\mathbf{J} = -\\frac{\\partial \\rho}{\\partial t}$. Adding $\\epsilon_0\\frac{\\partial \\mathbf{E}}{\\partial t}$ fixes this via Gauss\'s law: $\\nabla \\cdot \\mathbf{E} = \\rho/\\epsilon_0$.',
    realWorld: 'This mathematical consistency argument — demanding charge conservation — led to the prediction of electromagnetic waves. It\'s one of the most consequential theoretical insights in physics history.',
    hint: 'The divergence of a curl is always zero — but without the extra term, charge conservation would be violated.',
  },
];
