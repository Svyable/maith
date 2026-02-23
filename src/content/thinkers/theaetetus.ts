import type { Question } from '../types';

export const theaetetusQuestions: Question[] = [
  {
    id: 21210, topic: 'theaetetus', difficulty: 'sota',
    question: 'Theaetetus proved that $\\sqrt{n}$ is irrational for all non-square integers up to which value?',
    options: ['17', '10', '5', '100'],
    correctIndex: 0,
    explanation: 'Theaetetus systematically proved the irrationality of $\\sqrt{3}, \\sqrt{5}, \\ldots, \\sqrt{17}$, generalizing the Pythagorean proof for $\\sqrt{2}$ using an infinite descent argument.',
    realWorld: 'His systematic approach to irrationality proofs laid the foundation for algebraic number theory, essential to modern cryptography.',
    hint: 'His teacher Theodorus proved cases up to $\\sqrt{17}$ but could not generalize — Theaetetus found the universal method.',
  },
  {
    id: 21211, topic: 'theaetetus', difficulty: 'sota',
    question: 'Theaetetus is credited with the classification of which geometric solids that appear in Euclid\'s Book XIII?',
    options: ['The five Platonic solids (regular polyhedra)', 'The 13 Archimedean solids', 'The Kepler-Poinsot polyhedra', 'The Johnson solids'],
    correctIndex: 0,
    explanation: 'Theaetetus proved there are exactly five regular convex polyhedra (tetrahedron, cube, octahedron, dodecahedron, icosahedron) — a result often attributed to Plato but mathematically due to Theaetetus.',
    realWorld: 'The Platonic solids appear in viral capsid geometry (icosahedral symmetry), crystal structures, and the classification of molecular orbitals.',
    hint: 'These five solids have identical regular polygon faces and equal vertex angles.',
  },
  {
    id: 21212, topic: 'theaetetus', difficulty: 'sota',
    question: 'Theaetetus\'s proof technique for irrationality pioneered which fundamental method of mathematical proof?',
    options: ['Proof by infinite descent (a form of strong induction)', 'Proof by contradiction using limits', 'Proof by exhaustion (proto-integration)', 'Proof by construction'],
    correctIndex: 0,
    explanation: 'Theaetetus used a method equivalent to infinite descent: assuming $\\sqrt{n} = p/q$ in lowest terms leads to a smaller fraction with the same property — an impossibility. This anticipated Fermat\'s descent method by 2000 years.',
    realWorld: 'Infinite descent remains a core technique in number theory; Wiles\'s proof of Fermat\'s Last Theorem uses sophisticated variants.',
    hint: 'If a ratio is in lowest terms, you should not be able to find an even lower equivalent.',
  },
];
