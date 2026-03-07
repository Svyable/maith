import type { GlossaryTerm } from '../types';

export const plasmaPhysicsTerms: GlossaryTerm[] = [
  {
    id: 'debye-length', field: 'physics', topic: 'plasma-physics',
    term: 'Debye Length',
    definition: 'The characteristic screening distance $\\lambda_D = \\sqrt{\\varepsilon_0 k_B T / n_e e^2}$ over which electric fields are shielded in a plasma.',
    formula: '$\\lambda_D = \\sqrt{\\frac{\\varepsilon_0 k_B T}{n_e e^2}}$',
    latex: '\\lambda_D = \\sqrt{\\frac{\\varepsilon_0 k_B T}{n_e e^2}}',
    symbolLinks: { 'λ': 'lambda', 'ε': 'epsilon' },
    example: 'In the solar corona, the Debye length is about 0.07 m.',
    difficulty: 'intermediate',
  },
  {
    id: 'magnetohydrodynamics', field: 'physics', topic: 'plasma-physics',
    term: 'Magnetohydrodynamics (MHD)',
    definition: 'The study of electrically conducting fluids (plasmas, liquid metals) in magnetic fields, combining Navier–Stokes with Maxwell\'s equations.',
    example: 'MHD governs solar flares, tokamak stability, and Earth\'s dynamo.',
    related: ['alfven-wave'],
    difficulty: 'intermediate',
  },
  {
    id: 'alfven-wave', field: 'physics', topic: 'plasma-physics',
    term: 'Alfvén Wave',
    definition: 'A transverse MHD wave propagating along magnetic field lines at the Alfvén speed $v_A = B/\\sqrt{\\mu_0 \\rho}$.',
    formula: '$v_A = \\frac{B}{\\sqrt{\\mu_0 \\rho}}$',
    latex: 'v_A = \\frac{B}{\\sqrt{\\mu_0 \\rho}}',
    symbolLinks: { 'μ': 'mu', 'ρ': 'rho' },
    thinkerLinks: ['alfven'],
    related: ['magnetohydrodynamics'],
    difficulty: 'intermediate',
  },
];
