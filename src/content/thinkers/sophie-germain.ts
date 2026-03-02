import type { Question } from '../types';

export const sophieGermainQuestions: Question[] = [
  {
    id: 20215, topic: 'sophie-germain', difficulty: 'easy',
    question: 'Sophie Germain made major contributions to which area of mathematical physics?',
    options: ['Elasticity theory (vibrating plates)', 'Fluid dynamics', 'Thermodynamics', 'Electromagnetism'],
    correctIndex: 0,
    explanation: 'Germain developed the theory of elastic vibrations in plates, winning the Paris Academy prize for her work on Chladni figures — patterns formed by vibrating surfaces.',
    realWorld: 'Elastic plate theory is fundamental to structural engineering — from skyscraper design to smartphone screen durability testing.',
    hint: 'She studied the mathematical patterns formed when sand on metal plates rearranges under vibration.',
  },
  {
    id: 20216, topic: 'sophie-germain', difficulty: 'hard',
    question: '"Sophie Germain primes" are primes $p$ where $2p+1$ is also prime. Which famous theorem did she make significant progress on using these?',
    options: ['Fermat\'s Last Theorem', 'Goldbach\'s Conjecture', 'Twin Prime Conjecture', 'Riemann Hypothesis'],
    correctIndex: 0,
    explanation: 'Germain proved a special case of Fermat\'s Last Theorem: if $p$ is a Sophie Germain prime, then $x^p + y^p = z^p$ has no solutions where $p$ divides none of $x, y, z$.',
    realWorld: 'Sophie Germain primes are used in cryptography — they help generate safe primes for Diffie-Hellman key exchange.',
    hint: 'This theorem states $x^n + y^n = z^n$ has no positive integer solutions for $n > 2$.',
  },
  {
    id: 20217, topic: 'sophie-germain', difficulty: 'sota',
    question: 'Germain had to adopt which male pseudonym to correspond with Gauss and submit work to the École Polytechnique?',
    options: ['Monsieur LeBlanc', 'Monsieur Dupont', 'Monsieur Lambert', 'Monsieur Laplace'],
    correctIndex: 0,
    explanation: 'Germain used "Monsieur LeBlanc" because women were barred from universities. When Gauss discovered her true identity, he praised her talent even more highly.',
    realWorld: 'Her story illustrates the systematic barriers women faced in academia — many had to use pseudonyms or work through male colleagues.',
    hint: 'She borrowed the name from a male student who had dropped out of the institution.',
  },
];
