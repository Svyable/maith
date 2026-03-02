import type { Question } from '../types';

export const serreQuestions: Question[] = [
  {
    id: 31095,
    topic: 'jeanpierre-serre',
    difficulty: 'sota',
    question: 'In his revolutionary 1955 paper "Faisceaux Algébriques Cohérents" (FAC), Jean-Pierre Serre applied sheaf theory to algebraic geometry. What did Serre\'s Theorem A and Theorem B rigorously prove regarding an affine variety $X$ and a coherent sheaf $\\mathcal{F}$?',
    options: [
      'Theorem B states that all higher cohomology groups vanish: $H^i(X, \\mathcal{F}) = 0$ for all $i > 0$.',
      'Theorem A states that the geometric dimension of the sheaf $\\mathcal{F}$ strictly equals the Krull dimension of $X$.',
      'Theorem B proves that the sheaf $\\mathcal{F}$ can be globally decomposed into a finite number of exactly prime abelian ideals.',
      'Theorem A states that the integral over the affine space of any coherent sheaf results in a strictly rational algebraic integer.'
    ],
    correctIndex: 0,
    explanation: 'Serre\'s FAC completely rewrote algebraic geometry. Theorem B proved that on an affine variety, there are no topological obstructions to extending local algebraic sections into global ones, meaning all higher cohomology groups ($i > 0$) vanish entirely.',
    realWorld: 'This paper introduced the mathematical machinery that Alexander Grothendieck later used to completely rebuild all of algebraic geometry from scratch.',
    hint: 'It proves that for certain "flat" spaces, higher-level mathematical obstructions literally evaluate to zero.',
  },
  {
    id: 31096,
    topic: 'jeanpierre-serre',
    difficulty: 'hard',
    question: 'The "Serre spectral sequence" is an incredibly powerful tool in algebraic topology. What specific geometric relationship does this sequence allow mathematicians to algebraically relate and compute?',
    options: [
      'It relates the homology (or cohomology) of a total space $E$ to the homologies of its base space $B$ and its fiber $F$ in a fibration.',
      'It relates the differential curvature of a continuous Riemannian manifold to the discrete eigenvalues of its Laplacian operator.',
      'It allows the direct computation of transcendental roots in Galois extensions by factoring the sequence of prime ideals.',
      'It maps the chaotic trajectories of a non-linear dynamical system back to a perfectly stable, integrable Hamiltonian orbit.'
    ],
    correctIndex: 0,
    explanation: 'If you have a topological space built like a bundle (a total space $E$ projecting down to a base $B$ with fibers $F$), the Serre spectral sequence gives you an algorithmic way to compute the topology (cohomology) of the whole space $E$ if you only know the topology of $B$ and $F$.',
    realWorld: 'It is essentially a mathematical zipper, allowing topologists to calculate the "holes" in massive, multidimensional shapes by analyzing the simpler pieces they are built from.',
    hint: 'It takes a complex geometric bundle and breaks it into its "base" and "fiber" to calculate its topological properties.',
  },
  {
    id: 31097,
    topic: 'jeanpierre-serre',
    difficulty: 'easy',
    question: 'Jean-Pierre Serre remains the youngest person in history to win the Fields Medal, achieving it at age 27. What was the primary focus of the work that earned him this unparalleled honor?',
    options: [
      'Applying spectral sequences to compute the incredibly complex higher homotopy groups of spheres, $\\pi_k(S^n)$.',
      'Proving Fermat\'s Last Theorem for the specific prime exponent of 13 using newly developed modular arithmetic rings.',
      'Discovering a rigorous mathematical framework that completely unifies general relativity with quantum electrodynamics.',
      'Solving the Navier-Stokes equations for incompressible fluid flow in exactly two geometric dimensions.'
    ],
    correctIndex: 0,
    explanation: 'Calculating the "homotopy groups of spheres" (how a multi-dimensional sphere can be wrapped around another multi-dimensional sphere) was considered an impossibly chaotic problem. Serre used his newly developed spectral sequences to prove that most of these groups are actually finite.',
    realWorld: 'His work proved that algebraic topology could be rigorously computed, shifting the entire field from visual intuition into strict, powerful algebraic calculation.',
    hint: 'He figured out exactly how many ways you can wrap a higher-dimensional sphere around a lower-dimensional one.',
  },
  {
    id: 31098,
    topic: 'jeanpierre-serre',
    difficulty: 'sota',
    question: 'The "Serre conjecture" (later proven and renamed the Quillen-Suslin theorem) made a massive claim about projective modules. It conjectured that every finitely generated projective module over a polynomial ring $k[x_1, \\dots, x_n]$ is:',
    options: [
      'A free module, essentially meaning vector bundles over affine space must be completely mathematically trivial.',
      'A strictly torsion module, proving that multiplying by any polynomial eventually collapses the module to zero.',
      'An injective module, meaning it can perfectly absorb homomorphisms from any corresponding exterior algebraic structure.',
      'A non-commutative ring module, preventing standard algebraic division algorithms from terminating successfully.'
    ],
    correctIndex: 0,
    explanation: 'Geometrically, Serre conjectured that every algebraic vector bundle over an affine space must be "trivial" (a simple Cartesian product). Algebraically, this meant that every projective module over a polynomial ring over a field must be a free module. Quillen and Suslin independently proved it 20 years later.',
    realWorld: 'This resolved a major bottleneck in commutative algebra, proving that affine space contains no hidden topological "twists" when constructing algebraic vector bundles.',
    hint: 'It hypothesized that these specific mathematical structures have no hidden twists—they are completely unconstrained and "free."',
  },
  {
    id: 31099,
    topic: 'jeanpierre-serre',
    difficulty: 'hard',
    question: 'Serre\'s Modularity Conjecture served as a vital, foundational piece of the puzzle in modern number theory. What two vast, seemingly unrelated mathematical realms did this conjecture propose were fundamentally identical?',
    options: [
      'Odd, irreducible two-dimensional Galois representations over finite fields and the Fourier coefficients of modular forms.',
      'The discrete prime distribution embedded within the Riemann zeta function and the continuous eigenvalues of chaotic quantum billiards.',
      'The topological winding numbers of complex elliptic integrals and the rational point solutions of non-linear Diophantine equations.',
      'The fundamental group invariants of knot theory and the phase-state transition bounds in statistical physical mechanics.'
    ],
    correctIndex: 0,
    explanation: 'Serre boldly conjectured that every odd, irreducible, two-dimensional Galois representation over a finite field arises directly from a specific modular form. It was proven by Khare and Wintenberger in 2008.',
    realWorld: 'This conjecture was essentially a massively upgraded version of the Taniyama-Shimura conjecture. While Wiles used Taniyama-Shimura to prove Fermat\'s Last Theorem, Serre\'s conjecture provides the ultimate bridge between Galois symmetry and modular geometry.',
    hint: 'It connected the deeply abstract symmetries of polynomial roots to the geometric frequencies of highly symmetrical curved spaces.',
  }
];