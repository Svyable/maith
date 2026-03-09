import type { Question } from '../types';

export const stanislavSmirnovQuestions: Question[] = [
  {
    id: 31830, topic: 'stanislav-smirnov', difficulty: 'easy',
    question: 'Stanislav Smirnov won the 2010 Fields Medal for proving conformal invariance in which statistical physics model?',
    options: [
      'Critical percolation on the triangular lattice — he proved that crossing probabilities converge to Cardy\'s formula as the lattice spacing $\\to 0$: $$\\mathbb{P}(\\text{left-right crossing of } \\Omega) \\to \\frac{\\Gamma(2/3)}{\\Gamma(1/3)\\Gamma(4/3)} \\, {}_2F_1\\left(\\frac{1}{3}, \\frac{2}{3}; \\frac{4}{3}; z\\right)$$ confirming conformal invariance at criticality.',
      'The 3D Ising model at the critical temperature — proving conformal invariance of spin correlations.',
      'Brownian motion on Riemannian manifolds — proving conformal invariance of the heat kernel.',
      'The Potts model for $q = 4$ — proving first-order phase transition with conformal symmetry.'
    ],
    correctIndex: 0,
    explanation: 'Smirnov proved that critical site percolation on the triangular lattice has a conformally invariant scaling limit. His key tool was identifying a discrete holomorphic observable — a function on the percolation configuration that satisfies discrete Cauchy-Riemann equations and converges to a conformal map in the continuum limit.',
    realWorld: 'Conformal invariance at criticality is a foundational prediction of theoretical physics (CFT). Smirnov gave the first rigorous proof for a non-trivial lattice model, validating decades of physics predictions.',
    hint: 'At the critical point, the percolation pattern looks the same at all scales — and respects conformal symmetry.',
    formulaLinks: ['percolation', 'conformal-invariance'],
  },
  {
    id: 31831, topic: 'stanislav-smirnov', difficulty: 'hard',
    question: 'Smirnov also proved conformal invariance for the 2D Ising model. What specific result did he establish?',
    options: [
      'At the critical temperature $T_c = 2J/\\ln(1+\\sqrt{2})$, the scaling limit of the energy density field of the Ising model on the square lattice converges to a conformal field theory with central charge $c = 1/2$. The fermionic observable $f(z) = \\mathbb{E}[\\sigma(z) e^{i\\text{winding}/2}]$ satisfies discrete holomorphicity: $\\bar{\\partial}_{\\text{disc}} f = 0$.',
      'The Ising model magnetization $\\langle \\sigma_0 \\rangle$ at $T_c$ equals $1/\\sqrt{2}$ exactly.',
      'The correlation length $\\xi(T)$ diverges as $|T - T_c|^{-1}$ with exponent $\\nu = 1$ exactly.',
      'The partition function of the Ising model is a modular form of weight $1/2$ at $T_c$.'
    ],
    correctIndex: 0,
    explanation: 'Smirnov (with Chelkak) introduced fermionic observables — functions on edges of the lattice that transform like spinors and satisfy discrete holomorphicity at criticality. In the scaling limit, these converge to free fermion correlators in a $c = 1/2$ CFT. This rigorously confirmed predictions from the 1970s-80s by Belavin-Polyakov-Zamolodchikov and others.',
    realWorld: 'The Ising model at criticality is the simplest non-trivial CFT ($c = 1/2$). Smirnov\'s proof validates the CFT approach to phase transitions used throughout condensed matter physics.',
    hint: 'A discrete version of a "spinor field" becomes holomorphic at exactly the critical temperature.',
    formulaLinks: ['ising-model', 'conformal-invariance'],
  },
  {
    id: 31832, topic: 'stanislav-smirnov', difficulty: 'sota',
    question: 'Smirnov\'s proof of Cardy\'s formula uses discrete complex analysis. What is the key "discrete holomorphic observable"?',
    options: [
      'For critical percolation on the triangular lattice in domain $\\Omega$, define on each edge $e$ the exploration process observable: $$H_\\Omega(e) = \\mathbb{E}\\left[e^{i \\sigma \\cdot W(\\gamma, e)}\\right]$$ where $\\gamma$ is the exploration path, $W$ is the winding angle, and $\\sigma = 2\\pi/3$ for the triangular lattice. Smirnov proved $H_\\Omega$ satisfies discrete Cauchy-Riemann equations on the medial lattice and converges to $\\phi\'(z)^{1/3}$ where $\\phi$ is the conformal map $\\Omega \\to \\mathbb{H}$.',
      'The observable is $H(z) = \\mathbb{P}(z \\text{ is in the infinite cluster})$, which is harmonic at $p_c$.',
      'The observable is the characteristic function of the cluster size: $H(z) = \\mathbb{E}[e^{it|\\mathcal{C}_z|}]$ at $t = 2\\pi/3$.',
      'The observable is the discrete Green\'s function $G(z, w) = \\mathbb{E}[\\text{\\# visits to } w \\text{ by random walk from } z]$.'
    ],
    correctIndex: 0,
    explanation: 'The winding angle $W(\\gamma, e)$ measures how much the exploration interface has turned when it reaches edge $e$. The phase $\\sigma = 2\\pi/3$ is special to the triangular lattice (with its 3-fold symmetry). Smirnov\'s insight was that this particular observable satisfies a discrete version of the Cauchy-Riemann equations, which forces convergence to a conformal map derivative in the scaling limit.',
    realWorld: 'This technique of "finding the right discrete holomorphic observable" has become a paradigm in mathematical physics, applied to FK-percolation, random cluster models, and the dimer model.',
    hint: 'The winding of the exploration interface, weighted by a phase factor, becomes holomorphic — on the medial lattice.',
    formulaLinks: ['percolation', 'cauchy-riemann'],
  },
];
