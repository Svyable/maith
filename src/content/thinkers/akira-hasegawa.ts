import type { Question } from '../types';

export const hasegawaQuestions: Question[] = [
  {
    id: 9516,
    topic: 'akira-hasegawa',
    difficulty: 'sota',
    question: 'The Hasegawa-Mima equation $\\frac{\\partial}{\\partial t}(\\nabla^2\\phi - \\phi) + [\\phi, \\nabla^2\\phi] = 0$ describes:',
    options: [
      'Electrostatic drift wave turbulence in magnetized plasma',
      'Electromagnetic wave propagation in vacuum',
      'Sound waves in neutral gas',
      'Gravitational waves in spacetime',
    ],
    correctIndex: 0,
    explanation: 'The Hasegawa-Mima equation is a 2D model for drift wave turbulence in magnetized plasmas. The nonlinear term $[\\phi, \\nabla^2\\phi]$ captures E×B drift advection of vorticity.',
    realWorld: 'Drift wave turbulence is the primary cause of anomalous transport in fusion reactors like ITER — understanding it is crucial for achieving sustained nuclear fusion energy.',
    hint: 'This equation governs low-frequency fluctuations perpendicular to a magnetic field in plasma.',
  },
  {
    id: 9517,
    topic: 'akira-hasegawa',
    difficulty: 'sota',
    question: 'Hasegawa\'s optical soliton theory showed that in optical fibers, the nonlinear Schrödinger equation supports solitons when:',
    options: [
      'Group velocity dispersion and self-phase modulation balance exactly',
      'The fiber has zero loss',
      'The wavelength exceeds the cutoff frequency',
      'Multiple modes propagate simultaneously',
    ],
    correctIndex: 0,
    explanation: 'When anomalous dispersion ($\\beta_2 < 0$) balances the Kerr nonlinearity ($n_2 > 0$), pulses propagate as solitons without spreading — a self-reinforcing shape.',
    realWorld: 'Hasegawa and Tappert\'s 1973 prediction of optical solitons revolutionized telecommunications — modern undersea fiber cables use soliton-like pulses for transcontinental data transmission.',
    hint: 'A soliton requires two opposing effects to cancel — one spreads the pulse, one compresses it.',
  },
  {
    id: 9518,
    topic: 'akira-hasegawa',
    difficulty: 'sota',
    question: 'In the Hasegawa-Wakatani model extending Hasegawa-Mima, the additional coupling term represents:',
    options: [
      'Parallel electron dynamics along magnetic field lines',
      'Ion-neutral collisions in the plasma edge',
      'Radiation losses from bremsstrahlung',
      'Magnetic field line curvature effects',
    ],
    correctIndex: 0,
    explanation: 'The Hasegawa-Wakatani system couples vorticity and density equations through parallel resistivity $\\alpha(\\phi - n)$, capturing the adiabatic electron response along field lines that drives drift-wave instability.',
    realWorld: 'This model is essential for predicting edge plasma turbulence and the L-H transition in tokamak fusion devices, directly impacting ITER\'s confinement predictions.',
    hint: 'The extension adds electron motion along (not across) the magnetic field.',
  },
];
