import type { Question } from '../types';

export const abuKamilShujaQuestions: Question[] = [
  {
    id: 31780, topic: 'abu-kamil-shuja', difficulty: 'easy',
    question: 'Abu Kamil Shuja (850–930) is sometimes called the "Egyptian algebraist." How did he extend al-Khwarizmi\'s algebra?',
    options: [
      'He solved systems of equations with irrational coefficients (like $\\sqrt{2}$ and $\\sqrt{3}$), proved that irrational numbers obey the same algebraic rules as rationals, and solved indeterminate equations with multiple unknowns — directly influencing Fibonacci\'s *Liber Abaci*.',
      'He invented the equals sign "=" and standardized algebraic notation for equations.',
      'He proved that every quadratic equation has exactly two roots (counting complex roots).',
      'He applied algebra to probability theory, computing the odds of winning dice games.'
    ],
    correctIndex: 0,
    explanation: 'Al-Khwarizmi avoided irrationals; Abu Kamil embraced them. He showed that expressions like $\\sqrt{2} + \\sqrt{3}$ could be manipulated algebraically just like integers. He also solved indeterminate equations (Diophantine problems) and systems with multiple unknowns — going far beyond al-Khwarizmi\'s six equation types.',
    realWorld: 'Fibonacci learned algebra primarily from Abu Kamil\'s work (translated into Latin). Through Fibonacci, Abu Kamil\'s methods entered European mathematics, eventually leading to modern algebra.',
    hint: 'He treated irrational numbers as legitimate algebraic objects — not just geometric lengths — and solved equations with multiple unknowns.',
  },
  {
    id: 31781, topic: 'abu-kamil-shuja', difficulty: 'hard',
    question: 'Abu Kamil solved a famous combinatorial problem. How many different ways can one distribute 10 dirhams among 5 items if each can cost 1, 2, or 3 dirhams?',
    options: [
      'He systematically enumerated the solutions to the indeterminate equation $x_1 + x_2 + x_3 + x_4 + x_5 = 10$ with $1 \\leq x_i \\leq 3$ for each $i$, finding exactly 51 solutions — one of the earliest examples of systematic combinatorial enumeration.',
      'He found 100 solutions using a generating function approach.',
      'He proved there are infinitely many solutions by allowing fractional amounts.',
      'He found exactly 10 solutions by a pigeonhole argument.'
    ],
    correctIndex: 0,
    explanation: 'Abu Kamil\'s systematic enumeration of constrained partitions was centuries ahead of its time. He organized the solutions methodically, essentially performing a constrained integer programming search. This is one of the earliest known examples of systematic combinatorial problem-solving in mathematics.',
    realWorld: 'Constrained integer partition problems appear everywhere: scheduling, resource allocation, cryptographic key generation, and combinatorial optimization in operations research.',
    hint: 'He carefully listed every way to split a sum into bounded parts — early combinatorics by exhaustive but systematic enumeration.',
  },
  {
    id: 31782, topic: 'abu-kamil-shuja', difficulty: 'sota',
    question: 'Abu Kamil used algebraic methods to solve geometric problems that the Greeks handled purely geometrically. What was his key methodological innovation?',
    options: [
      'He translated geometric problems into algebraic equations, solved the equations using al-Khwarizmi\'s methods, and then translated back — creating a systematic pipeline from geometry to algebra and back. He applied this to find sides, diagonals, and areas of regular polygons (pentagons, decagons) using nested radicals.',
      'He proved that all geometric constructions with compass and straightedge can be expressed as solutions to quadratic equations.',
      'He developed analytic geometry by assigning coordinates to geometric figures and deriving their equations.',
      'He used algebraic methods to prove that squaring the circle is impossible.'
    ],
    correctIndex: 0,
    explanation: 'Abu Kamil\'s "algebraicization of geometry" was groundbreaking. For a regular pentagon with side $s$ inscribed in a circle of radius $r$, he derived $s = r\\sqrt{\\frac{5 - \\sqrt{5}}{2}}$ — a nested radical expression obtained by setting up and solving algebraic equations, not by geometric construction. This bridging method is the ancestor of analytic geometry.',
    realWorld: 'This translation between geometry and algebra is exactly what Descartes formalized 700 years later in his analytic geometry — the foundation of coordinate geometry, calculus, and all of modern mathematics.',
    hint: 'Translate geometry into equations → solve the equations → translate back. A systematic bridge between two worlds.',
  },
];
