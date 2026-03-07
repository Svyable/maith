import type { GlossaryTerm } from './types';

export const diffGeometryTerms: GlossaryTerm[] = [
  {
    id: 'manifold', field: 'math', topic: 'differential-geometry',
    term: 'Manifold',
    definition: 'A topological space that locally resembles $\\mathbb{R}^n$. Smooth manifolds support calculus — tangent vectors, differential forms, and curvature.',
    example: 'The surface of a sphere is a 2-manifold; spacetime is a 4-manifold.',
    related: ['curvature-tensor', 'topology-def'],
    difficulty: 'intermediate',
  },
  {
    id: 'curvature-tensor', field: 'math', topic: 'differential-geometry',
    term: 'Riemann Curvature Tensor',
    definition: 'A $(1,3)$-tensor $R^\\rho_{\\sigma\\mu\\nu}$ measuring how much parallel transport around a loop rotates a vector. Zero curvature = flat space.',
    formula: '$R^\\rho_{\\sigma\\mu\\nu} = \\partial_\\mu\\Gamma^\\rho_{\\nu\\sigma} - \\partial_\\nu\\Gamma^\\rho_{\\mu\\sigma} + \\Gamma^\\rho_{\\mu\\lambda}\\Gamma^\\lambda_{\\nu\\sigma} - \\Gamma^\\rho_{\\nu\\lambda}\\Gamma^\\lambda_{\\mu\\sigma}$',
    latex: 'R^\\rho_{\\sigma\\mu\\nu} = \\partial_\\mu\\Gamma^\\rho_{\\nu\\sigma} - \\partial_\\nu\\Gamma^\\rho_{\\mu\\sigma} + \\Gamma^\\rho_{\\mu\\lambda}\\Gamma^\\lambda_{\\nu\\sigma} - \\Gamma^\\rho_{\\nu\\lambda}\\Gamma^\\lambda_{\\mu\\sigma}',
    symbolLinks: { 'Γ': 'gamma', 'ρ': 'rho', 'σ': 'sigma', 'μ': 'mu', 'ν': 'nu' },
    thinkerLinks: ['riemann'],
    related: ['manifold', 'gauss-bonnet-gloss'],
    difficulty: 'advanced',
  },
  {
    id: 'gauss-bonnet-gloss', field: 'math', topic: 'differential-geometry',
    term: 'Gauss–Bonnet Theorem',
    definition: 'Links geometry to topology: $\\int_M K\\,dA = 2\\pi\\chi(M)$ where $K$ is Gaussian curvature and $\\chi$ is the Euler characteristic.',
    formula: '$\\int_M K\\,dA = 2\\pi\\chi(M)$',
    latex: '\\int_M K\\,dA = 2\\pi\\chi(M)',
    symbolLinks: { 'χ': 'chi', 'π': 'pi' },
    thinkerLinks: ['gauss'],
    formulaLinks: ['gauss-bonnet'],
    related: ['curvature-tensor', 'topology-def'],
    difficulty: 'advanced',
  },
  {
    id: 'geodesic', field: 'math', topic: 'differential-geometry',
    term: 'Geodesic',
    definition: 'The shortest path between two points on a curved surface (or more generally, an autoparallel curve). Satisfies the geodesic equation $\\ddot{x}^\\mu + \\Gamma^\\mu_{\\alpha\\beta}\\dot{x}^\\alpha\\dot{x}^\\beta = 0$.',
    symbolLinks: { 'Γ': 'gamma' },
    example: 'Great circles are geodesics on a sphere; planets follow geodesics in spacetime.',
    related: ['manifold', 'curvature-tensor'],
    difficulty: 'intermediate',
  },
];
