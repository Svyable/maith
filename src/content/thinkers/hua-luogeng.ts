import type { Question } from '../types';

export const huaLuogengQuestions: Question[] = [
  {
    id: 21230, topic: 'hua-luogeng', difficulty: 'sota',
    question: 'Hua Luogeng made major contributions to which area involving representing numbers as sums of primes and powers?',
    options: ['Additive number theory (Waring\'s problem and Goldbach-type conjectures)', 'Algebraic K-theory', 'Spectral graph theory', 'Ergodic theory'],
    correctIndex: 0,
    explanation: 'Hua\'s most celebrated work improved Vinogradov\'s bounds on Waring\'s problem, showing that every sufficiently large integer can be written as a sum of at most $s$ $k$-th powers, with the sharpest known bounds for many $k$.',
    realWorld: 'Additive number theory underpins hash function design and pseudorandom number generation in computer science.',
    hint: 'Waring asked: can every integer be written as a sum of a fixed number of $k$-th powers?',
  },
  {
    id: 21231, topic: 'hua-luogeng', difficulty: 'sota',
    question: 'Hua\'s inequality is a fundamental result in which branch of mathematics?',
    options: ['Several complex variables and harmonic analysis', 'Algebraic topology', 'Combinatorial optimization', 'Differential geometry'],
    correctIndex: 0,
    explanation: 'Hua\'s inequality provides sharp bounds for sums of powers of complex numbers and is a key tool in the theory of several complex variables. It generalizes classical inequalities to higher-dimensional settings.',
    realWorld: 'Several complex variables theory is essential in quantum field theory, string theory, and signal processing.',
    hint: 'His inequality extends results from one complex variable to multiple complex dimensions.',
  },
  {
    id: 21232, topic: 'hua-luogeng', difficulty: 'sota',
    question: 'Despite becoming China\'s leading mathematician, Hua Luogeng was largely self-taught because:',
    options: ['He had no university degree — family poverty forced him to leave school at 15', 'He was expelled for political reasons', 'He trained as an engineer first', 'He studied abroad exclusively'],
    correctIndex: 0,
    explanation: 'Hua contracted typhoid at 18, leaving him with a permanent limp and no degree. He taught himself mathematics from textbooks and was discovered by a professor who read his papers in a journal. He went on to become the father of modern Chinese mathematics.',
    realWorld: 'Hua later pioneered "popularization of mathematics" campaigns, traveling across China teaching optimization to factory workers — applied math for the masses.',
    hint: 'Like Ramanujan, his talent was discovered through published papers despite lacking formal training.',
  },
];
