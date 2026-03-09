import type { Question } from '../types';

export const charlesHermiteQuestions: Question[] = [
  {
    id: 31790, topic: 'charles-hermite', difficulty: 'easy',
    question: 'Charles Hermite proved a foundational result about the number $e$. What did he show?',
    options: [
      'He proved that $e = \\sum_{n=0}^\\infty 1/n!$ is transcendental — it is not a root of any polynomial equation with integer coefficients: there is no polynomial $p(x) = a_n x^n + \\cdots + a_0$ with $a_i \\in \\mathbb{Z}$ such that $p(e) = 0$.',
      'He proved that $e$ is irrational but algebraic of degree 2 over $\\mathbb{Q}$.',
      'He computed $e$ to 1,000 decimal places using his continued fraction expansion.',
      'He proved that $e^\\pi$ is rational, contradicting Euler\'s conjecture.'
    ],
    correctIndex: 0,
    explanation: 'Hermite\'s 1873 proof was the first transcendence result for a "naturally occurring" number. He used a clever integral identity: constructing a polynomial $P(x)$ such that $\\int_0^\\infty P(x) e^{-x} dx$ simultaneously approximates $e$ well and is demonstrably nonzero. This method was later generalized by Lindemann to prove $\\pi$ is transcendental.',
    realWorld: 'The transcendence of $e$ implies that $e$ cannot be constructed with compass and straightedge. Hermite\'s technique is the foundation of the Lindemann-Weierstrass theorem, which proved the impossibility of squaring the circle.',
    hint: 'He proved $e$ can\'t satisfy any polynomial equation with integer coefficients — it\'s "beyond algebra."',
    formulaLinks: ['transcendence'],
  },
  {
    id: 31791, topic: 'charles-hermite', difficulty: 'hard',
    question: 'Hermite polynomials $H_n(x)$ are fundamental in quantum mechanics. What are they and what orthogonality do they satisfy?',
    options: [
      'The Hermite polynomials are defined by $H_n(x) = (-1)^n e^{x^2} \\frac{d^n}{dx^n} e^{-x^2}$ (Rodrigues formula) and satisfy: $$\\int_{-\\infty}^{\\infty} H_m(x) H_n(x) e^{-x^2} dx = \\sqrt{\\pi} \\, 2^n \\, n! \\, \\delta_{mn}$$ They form a complete orthogonal basis for $L^2(\\mathbb{R}, e^{-x^2}dx)$.',
      'The Hermite polynomials are $H_n(x) = \\binom{2n}{n} x^n$ and are orthogonal on $[0, 1]$ with weight $w(x) = 1$.',
      'The Hermite polynomials satisfy $H_n(x) = T_n(x/2)$ where $T_n$ are Chebyshev polynomials, orthogonal with weight $(1-x^2)^{-1/2}$.',
      'The Hermite polynomials are $H_n(x) = x^n - n(n-1)x^{n-2}/2 + \\cdots$ with orthogonality on the unit circle.'
    ],
    correctIndex: 0,
    explanation: 'The first few are $H_0 = 1$, $H_1 = 2x$, $H_2 = 4x^2 - 2$, $H_3 = 8x^3 - 12x$. The Gaussian weight $e^{-x^2}$ is essential. The recurrence $H_{n+1}(x) = 2xH_n(x) - 2nH_{n-1}(x)$ enables efficient computation. The generating function is $\\sum H_n(x) t^n/n! = e^{2xt - t^2}$.',
    realWorld: 'Hermite polynomials give the eigenstates of the quantum harmonic oscillator: $\\psi_n(x) \\propto H_n(x) e^{-x^2/2}$. Every quantum mechanics textbook uses them. They also appear in probability theory (Hermite expansion of Gaussian random variables).',
    hint: 'Differentiate $e^{-x^2}$ repeatedly, then multiply by $e^{x^2}$ — you get orthogonal polynomials.',
    formulaLinks: ['hermite-polynomials', 'quantum-harmonic-oscillator'],
  },
  {
    id: 31792, topic: 'charles-hermite', difficulty: 'sota',
    question: 'Hermite\'s normal form decomposes any matrix into a canonical form. What is the Hermite Normal Form (HNF) and why is it important?',
    options: [
      'Every integer matrix $A \\in \\mathbb{Z}^{m \\times n}$ of rank $r$ can be transformed by left-multiplication by a unimodular matrix $U \\in \\text{GL}_m(\\mathbb{Z})$ into Hermite Normal Form $H = UA$ where $H$ is upper triangular with: (1) $h_{ii} > 0$ for $1 \\leq i \\leq r$, (2) $0 \\leq h_{ij} < h_{ii}$ for $j > i$, and (3) $h_{ij} = 0$ for $i > r$. The HNF $H$ is unique.',
      'Every square matrix over $\\mathbb{C}$ can be written as $A = UHU^*$ where $H$ is Hermitian and $U$ is unitary.',
      'Every matrix over $\\mathbb{R}$ has a unique decomposition $A = HO$ where $H$ is positive definite Hermitian and $O$ is orthogonal.',
      'Every matrix $A \\in \\mathbb{Z}^{n \\times n}$ with $\\det A \\neq 0$ satisfies $A = H \\cdot D$ where $H$ is a Hadamard matrix and $D$ is diagonal.'
    ],
    correctIndex: 0,
    explanation: 'HNF is the integer analog of row echelon form. Unlike Gaussian elimination (which uses arbitrary real operations), HNF uses only integer row operations (unimodular transformations). The uniqueness of HNF means it gives a canonical representative for the lattice $\\Lambda = A\\mathbb{Z}^n$, solving the lattice equivalence problem.',
    realWorld: 'HNF is fundamental in computational number theory, cryptanalysis (lattice-based cryptography, LLL algorithm), integer programming, and the Smith Normal Form algorithm for computing homology groups.',
    hint: 'The integer version of row echelon form — unique and computed using only integer operations.',
    formulaLinks: ['hermite-normal-form'],
  },
];
