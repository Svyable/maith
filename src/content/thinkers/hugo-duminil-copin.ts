import type { Question } from '../types';

export const hugoDuminilCopinQuestions: Question[] = [
  {
    id: 31620, topic: 'hugo-duminil-copin', difficulty: 'easy',
    question: 'Hugo Duminil-Copin won the 2022 Fields Medal for his work on which area of mathematical physics?',
    options: [
      'Statistical physics phase transitions — proving the critical point of percolation on the triangular lattice is $p_c = 1/2$ and establishing conformal invariance properties of the Ising model.',
      'Quantum field theory renormalization — proving that QED is perturbatively finite to all orders.',
      'String theory compactification — classifying all Calabi-Yau threefolds with Hodge numbers $h^{1,1} \\leq 500$.',
      'Turbulence modeling — proving Kolmogorov\'s $-5/3$ power law for the energy spectrum in 3D Navier-Stokes.'
    ],
    correctIndex: 0,
    explanation: 'Duminil-Copin\'s work centers on understanding phase transitions rigorously. In percolation, each edge of a lattice is open with probability $p$. At $p_c$, an infinite connected cluster first appears. He proved $p_c = 1/2$ for the triangular lattice and established sharp threshold phenomena.',
    realWorld: 'Percolation theory models disease spread, forest fire propagation, and the connectivity of porous materials. Understanding $p_c$ precisely enables accurate predictions of when systems undergo catastrophic transitions.',
    hint: 'At what probability does an infinite connected path first appear in a random lattice?',
    formulaLinks: ['percolation'],
  },
  {
    id: 31621, topic: 'hugo-duminil-copin', difficulty: 'hard',
    question: 'Duminil-Copin proved a key result about the connective constant of the honeycomb lattice for self-avoiding walks. What is the exact value?',
    options: [
      'The connective constant $\\mu$ of the honeycomb lattice is: $$\\mu = \\sqrt{2 + \\sqrt{2}} \\approx 1.84776$$ meaning the number of self-avoiding walks of length $n$ grows as $c_n \\sim A \\mu^n n^{\\gamma - 1}$ where $\\gamma = 43/32$.',
      'The connective constant is $\\mu = \\phi = \\frac{1+\\sqrt{5}}{2}$ (the golden ratio) for all regular lattices.',
      'The connective constant equals $\\mu = e^{1/\\pi}$ due to conformal mapping arguments.',
      'The connective constant is irrational but transcendental, with $\\mu = 2\\sin(\\pi/18)$.'
    ],
    correctIndex: 0,
    explanation: 'Duminil-Copin and Smirnov proved this using a parafermionic observable — a complex-valued function $F(z) = \\sum_{\\gamma: A \\to z} e^{-i\\sigma \\cdot W(\\gamma)} x^{|\\gamma|}$ defined on self-avoiding walks, where $W(\\gamma)$ is the winding angle. At the critical fugacity $x_c = 1/\\mu$, this observable satisfies discrete holomorphicity.',
    realWorld: 'Self-avoiding walks model polymer chains in solution. The connective constant determines the entropy of long polymer configurations and is crucial in materials science.',
    hint: 'A "parafermionic" observable becomes holomorphic at exactly the right value of $\\mu$.',
    formulaLinks: ['self-avoiding-walk'],
  },
  {
    id: 31622, topic: 'hugo-duminil-copin', difficulty: 'sota',
    question: 'Duminil-Copin proved the sharpness of the phase transition for Bernoulli percolation and the Ising model in all dimensions. What does "sharpness" mean here?',
    options: [
      'Below $p_c$, the connection probability decays exponentially: $\\mathbb{P}_p(0 \\leftrightarrow \\partial B_n) \\leq e^{-cn}$ for some $c(p) > 0$. At $p_c$, it decays at most polynomially. There is no intermediate regime — the transition from exponential decay to percolation is sharp, with the correlation length diverging as: $$\\xi(p) \\sim |p - p_c|^{-\\nu}$$',
      'Sharpness means the critical exponents are rational numbers: $\\beta = 1/8$, $\\gamma = 7/4$, $\\nu = 1$ in all dimensions.',
      'Sharpness means the phase transition occurs at a single temperature with no coexistence region in the pressure-temperature plane.',
      'Sharpness means the free energy $f(\\beta)$ is infinitely differentiable everywhere except at $\\beta_c$, where it has a jump discontinuity.'
    ],
    correctIndex: 0,
    explanation: 'Duminil-Copin (with Raoufi and Tassion) gave a new proof of sharpness valid in all dimensions $d \\geq 2$ using a differential inequality: if $\\theta(p) = \\mathbb{P}_p(|\\mathcal{C}_0| = \\infty)$, then for $p > p_c$, $\\frac{d\\theta}{dp} \\geq \\frac{\\theta(1-\\theta)}{p(1-p)}$. This bootstrapping argument replaced the earlier Aizenman-Barsky/Menshikov proofs with a simpler, more general framework.',
    realWorld: 'Sharpness results are essential for understanding critical phenomena in materials — they guarantee that near-critical behavior (diverging correlation lengths, power-law correlations) occurs only at $p_c$, not in a neighborhood.',
    hint: 'Either clusters are exponentially small (subcritical) or infinite (supercritical) — there\'s nothing in between.',
    formulaLinks: ['percolation', 'correlation-length'],
  },
];
