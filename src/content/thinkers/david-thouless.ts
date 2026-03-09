import type { Question } from '../types';

export const davidThoulessQuestions: Question[] = [
  {
    id: 10652,
    topic: 'david-thouless',
    difficulty: 'easy',
    question: 'The Kosterlitz-Thouless (KT) transition describes:',
    options: [
      'A phase transition in 2D systems driven by vortex unbinding, with no symmetry breaking',
      'The transition from liquid to solid in 3D',
      'Spontaneous magnetization in 2D ferromagnets',
      'Bose-Einstein condensation',
    ],
    correctIndex: 0,
    explanation: 'The KT transition (1973) is topological: at low T, vortex-antivortex pairs are bound; above T_KT, they unbind, destroying quasi-long-range order. There\'s no local order parameter that changes — it\'s a new type of phase transition.',
    realWorld: 'KT transitions occur in 2D superconductors, superfluid helium films, and 2D Bose gases — confirmed in ultracold atom experiments.',
    hint: 'Vortices pair up at low temperature and separate at high temperature.',
  },
  {
    id: 10653,
    topic: 'david-thouless',
    difficulty: 'hard',
    question: 'The TKNN invariant (Thouless, Kohmoto, Nightingale, den Nijs) characterizes:',
    options: [
      'The integer quantum Hall effect — it is the Chern number of the occupied Bloch bands',
      'The superfluid density in helium-4',
      'The order parameter for superconductivity',
      'The specific heat of a Fermi liquid',
    ],
    correctIndex: 0,
    explanation: 'TKNN showed (1982) that the Hall conductance is $\\sigma_{xy} = \\frac{e^2}{h}\\sum_n C_n$, where $C_n = \\frac{1}{2\\pi}\\int_{BZ} F_n$ is the Chern number (Berry curvature integral) of each filled band — a topological invariant.',
    realWorld: 'The TKNN paper launched the field of topological phases, leading to topological insulators, Weyl semimetals, and topological quantum computing.',
    hint: 'It\'s an integral of Berry curvature over the Brillouin zone.',
  },
  {
    id: 10654,
    topic: 'david-thouless',
    difficulty: 'sota',
    question: 'Thouless pumping refers to the quantized transport of charge when:',
    options: [
      'A 1D system is adiabatically cycled through a periodic potential — exactly one electron is pumped per cycle',
      'A voltage is applied to a superconductor',
      'Electrons tunnel through a quantum dot',
      'A magnetic field is ramped up quickly',
    ],
    correctIndex: 0,
    explanation: 'Thouless showed (1983) that adiabatic cycling of a 1D Hamiltonian through a family of gapped states pumps charge Q = Ce where C is the Chern number of the parameter space. This is topologically quantized.',
    realWorld: 'Thouless pumps have been demonstrated with ultracold atoms in optical lattices, achieving quantized charge transport with 99% accuracy.',
    hint: 'Slow parameter cycling moves exactly integer charges — no more, no less.',
  },
];
