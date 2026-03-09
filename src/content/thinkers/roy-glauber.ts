import type { Question } from '../types';

export const royGlauberQuestions: Question[] = [
  {
    id: 31410,
    topic: 'roy-glauber',
    difficulty: 'easy',
    question: 'Roy Glauber won the 2005 Nobel Prize for his quantum theory of optical coherence. What fundamental concept did he introduce to distinguish quantum light from classical light?',
    options: [
      'Coherent states $|\\alpha\\rangle$ — quantum states of the electromagnetic field that most closely resemble classical light waves, forming an overcomplete basis for the photon Fock space.',
      'Squeezed vacuum states — quantum states where uncertainty in one quadrature is reduced below the shot noise limit at the expense of increased uncertainty in the conjugate quadrature.',
      'Photon antibunching — the purely quantum phenomenon where photons arrive more regularly spaced than a Poisson process, impossible for any classical light source.',
      'The Hong-Ou-Mandel effect — where two identical photons entering a beam splitter always exit together, never separately.'
    ],
    correctIndex: 0,
    explanation: 'Glauber showed that the coherent state $|\\alpha\\rangle = e^{-|\\alpha|^2/2} \\sum_n \\frac{\\alpha^n}{\\sqrt{n!}} |n\\rangle$ is the eigenstate of the annihilation operator $\\hat{a}|\\alpha\\rangle = \\alpha|\\alpha\\rangle$. These states have Poissonian photon statistics and minimum uncertainty, making them the quantum description of ideal laser light.',
    realWorld: 'Glauber\'s coherent states are the foundation of quantum optics, used in laser physics, quantum cryptography (QKD protocols), and homodyne detection in gravitational wave detectors like LIGO.',
    hint: 'These special quantum states are eigenstates of the photon annihilation operator and produce the most "classical-looking" light.',
  },
  {
    id: 31411,
    topic: 'roy-glauber',
    difficulty: 'hard',
    question: 'Glauber\'s theory introduced correlation functions to classify light. What does the normalized second-order correlation function $g^{(2)}(0)$ measure, and what value indicates coherent (laser) light?',
    options: [
      '$g^{(2)}(0) = \\langle \\hat{n}(\\hat{n}-1)\\rangle / \\langle \\hat{n}\\rangle^2$ measures photon number fluctuations. $g^{(2)}(0) = 1$ for coherent light, $> 1$ for thermal (bunched) light, $< 1$ for quantum (antibunched) light.',
      '$g^{(2)}(0) = |\\langle E^*(t) E(t+\\tau)\\rangle|^2 / \\langle |E|^2\\rangle^2$ measures field amplitude correlations. $g^{(2)}(0) = 0$ for coherent light, indicating perfect phase stability.',
      '$g^{(2)}(0) = \\langle \\hat{a}^\\dagger \\hat{a}^\\dagger \\hat{a} \\hat{a}\\rangle / \\langle \\hat{a}^\\dagger \\hat{a}\\rangle$ measures single-photon purity. $g^{(2)}(0) = 2$ for ideal laser light due to stimulated emission.',
      '$g^{(2)}(0) = \\text{Var}(n) / \\langle n \\rangle$ is the Fano factor. $g^{(2)}(0) = 1/2$ for coherent light, reflecting sub-Poissonian statistics.'
    ],
    correctIndex: 0,
    explanation: 'Glauber\'s $g^{(2)}(0)$ quantifies intensity-intensity correlations. Thermal light shows bunching ($g^{(2)}(0) = 2$) because photons tend to arrive in clusters. Coherent light has $g^{(2)}(0) = 1$ (Poissonian). Single-photon sources show antibunching ($g^{(2)}(0) < 1$), which is impossible classically.',
    realWorld: 'The Hanbury Brown–Twiss experiment (1956) measured $g^{(2)}$ classically; Glauber provided the full quantum framework. Today, $g^{(2)}(0)$ measurements are the standard test for single-photon sources used in quantum computing.',
    hint: 'It equals 1 for Poissonian photon statistics (laser light) and 2 for thermal (bunched) light.',
  },
  {
    id: 31412,
    topic: 'roy-glauber',
    difficulty: 'sota',
    question: 'Glauber introduced the $P$-representation for the density matrix of a quantum light field. What makes this representation uniquely powerful and problematic?',
    options: [
      'The density matrix is written as $\\hat{\\rho} = \\int P(\\alpha) |\\alpha\\rangle\\langle\\alpha| \\, d^2\\alpha$ where $P(\\alpha)$ is a quasiprobability distribution. For non-classical states, $P(\\alpha)$ becomes more singular than a delta function — it cannot be interpreted as a probability.',
      'The density matrix factorizes as $\\hat{\\rho} = \\sum_n P_n |n\\rangle\\langle n|$ in the Fock basis, where $P_n$ follows a negative binomial distribution for all non-classical states.',
      'The $P$-representation maps the infinite-dimensional Hilbert space onto a finite phase space using $P(q,p) = \\text{Tr}[\\hat{\\rho}\\, \\hat{\\Delta}(q,p)]$, always yielding a smooth, positive function.',
      'It represents $\\hat{\\rho}$ as a path integral over classical trajectories $\\alpha(t)$ weighted by $e^{iS[\\alpha]/\\hbar}$, showing that quantum optics reduces to classical optics in the $\\hbar \\to 0$ limit.'
    ],
    correctIndex: 0,
    explanation: 'The Glauber-Sudarshan $P$-representation expresses any quantum state as a diagonal expansion in coherent states. For classical states (thermal, coherent), $P(\\alpha)$ is a well-behaved probability distribution. For quantum states like squeezed or Fock states, $P(\\alpha)$ becomes highly singular (more singular than $\\delta$-functions), serving as a definitive test of non-classicality.',
    realWorld: 'The $P$-representation is used in quantum optics to classify states: if $P(\\alpha)$ fails to be a valid probability density, the light field is genuinely quantum. This criterion guides the design of non-classical light sources for quantum technologies.',
    hint: 'It expands the density matrix over coherent states, but the "weight function" can become unphysically singular for quantum states.',
  },
];
