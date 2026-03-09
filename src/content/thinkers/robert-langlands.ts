import type { Question } from '../types';

export const robertLanglandsQuestions: Question[] = [
  {
    id: 31570, topic: 'robert-langlands', difficulty: 'easy',
    question: 'Robert Langlands won the 2018 Abel Prize for the "Langlands Program." What is this program?',
    options: [
      'A vast web of conjectures connecting number theory, algebraic geometry, and representation theory — proposing deep correspondences between automorphic forms and Galois representations that unify seemingly unrelated areas of mathematics.',
      'A computational project to verify the Riemann Hypothesis by numerically computing the first trillion zeros of the zeta function.',
      'A systematic classification of all finite simple groups, completed in 2004 after decades of collaborative work.',
      'A formal axiom system for all of mathematics, extending Zermelo-Fraenkel set theory with large cardinal axioms.'
    ],
    correctIndex: 0,
    explanation: 'In a famous 1967 letter to André Weil, Langlands proposed that for every $n$-dimensional Galois representation $\\rho: \\text{Gal}(\\bar{\\mathbb{Q}}/\\mathbb{Q}) \\to GL_n(\\mathbb{C})$, there should exist a corresponding automorphic form on $GL_n$. This "Langlands correspondence" generalizes class field theory and connects arithmetic, geometry, and harmonic analysis.',
    realWorld: 'Andrew Wiles\' proof of Fermat\'s Last Theorem was essentially a proof of a special case of the Langlands Program (the modularity theorem for elliptic curves).',
    hint: 'It\'s a "grand unified theory" of mathematics — connecting number theory to representation theory.',
  },
  {
    id: 31571, topic: 'robert-langlands', difficulty: 'hard',
    question: 'The Langlands Program generalizes a classical result in number theory. What is the foundational correspondence it extends?',
    options: [
      'Class field theory — which establishes a correspondence between abelian extensions of a number field $K$ and characters of its idele class group $\\mathbb{A}_K^\\times / K^\\times$. Langlands generalizes this from $GL_1$ (abelian) to $GL_n$ (non-abelian).',
      'The prime number theorem — which relates the distribution of primes to the zeros of the Riemann zeta function. Langlands generalizes this to arbitrary $L$-functions.',
      'Quadratic reciprocity — which determines when $p$ is a quadratic residue mod $q$. Langlands generalizes this to higher-degree reciprocity laws.',
      'The Chinese Remainder Theorem — which reconstructs integers from their residues. Langlands generalizes this to the adelic ring of a number field.'
    ],
    correctIndex: 0,
    explanation: 'Class field theory (Artin, Tate, etc.) describes all abelian extensions of number fields via one-dimensional representations. Langlands\' revolutionary insight was that non-abelian extensions should correspond to higher-dimensional automorphic representations of $GL_n$ — a non-abelian generalization requiring entirely new mathematics.',
    realWorld: 'The geometric Langlands program, developed by Beilinson, Drinfeld, and others, has unexpected connections to quantum field theory and string theory, particularly via gauge theory dualities.',
    hint: 'Class field theory handles the abelian (commutative) case — Langlands tackles the non-abelian generalization.',
  },
  {
    id: 31572, topic: 'robert-langlands', difficulty: 'sota',
    question: 'A key conjecture in the Langlands Program is "functoriality." What does functoriality predict?',
    options: [
      'For any homomorphism $\\phi: {}^L G \\to {}^L H$ between Langlands dual groups, there should be a "transfer" of automorphic representations from $G$ to $H$. This predicts deep relationships between automorphic forms on different groups that have no classical explanation.',
      'Every automorphic $L$-function has a functional equation $L(s, \\pi) = \\epsilon(s, \\pi) L(1-s, \\tilde{\\pi})$ relating values at $s$ and $1-s$.',
      'The category of automorphic representations forms a Tannakian category whose fiber functor recovers the Langlands dual group.',
      'Every motif over $\\mathbb{Q}$ gives rise to an automorphic representation whose $L$-function matches the motivic $L$-function.'
    ],
    correctIndex: 0,
    explanation: 'Functoriality is the most far-reaching conjecture in the Langlands Program. Given a map between L-groups ${}^LG \\to {}^LH$, it predicts a corresponding "lifting" of automorphic representations. Special cases include base change, symmetric power liftings, and the Jacquet-Langlands correspondence. Proving functoriality in general would resolve many open problems in number theory.',
    realWorld: 'Partial functoriality results (e.g., Arthur\'s endoscopic classification for classical groups) have been among the deepest achievements in mathematics this century.',
    hint: 'A map between dual groups should "pull back" to a transfer of automorphic forms — the most ambitious conjecture in the program.',
  },
];
