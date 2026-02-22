import type { Question } from '../types';

export const johnNashQuestions: Question[] = [
  {
    id: 96013, topic: 'john-nash', difficulty: 'easy',
    question: 'A Nash Equilibrium is a state where:',
    options: ['No player can improve their outcome by unilaterally changing strategy', 'All players cooperate perfectly', 'One player dominates all others', 'The game has a single optimal solution'],
    correctIndex: 0,
    explanation: 'At a Nash Equilibrium, each player\'s strategy is the best response to every other player\'s strategy — no one benefits from changing alone.',
    realWorld: 'Nash Equilibria explain everything from pricing wars between companies to arms races between nations.',
    hint: 'Think: no one wants to deviate if everyone else stays put.',
  },
  {
    id: 96014, topic: 'john-nash', difficulty: 'hard',
    question: 'Nash\'s existence theorem proves that every finite game has at least one Nash Equilibrium, possibly in:',
    options: ['Mixed strategies (probability distributions over pure strategies)', 'Pure strategies only', 'Dominant strategies', 'Correlated strategies'],
    correctIndex: 0,
    explanation: 'Nash used Kakutani\'s fixed-point theorem to prove that allowing players to randomize (mixed strategies) guarantees at least one equilibrium exists in any finite game.',
    realWorld: 'This proof earned him the Nobel Prize and made game theory applicable to virtually every strategic interaction in economics, biology, and political science.',
    hint: 'Players may need to randomize to find balance.',
  },
  {
    id: 96015, topic: 'john-nash', difficulty: 'sota',
    question: 'Nash\'s embedding theorem in differential geometry proves that every Riemannian manifold can be:',
    options: ['Isometrically embedded in some Euclidean space ℝⁿ', 'Flattened to 2D without distortion', 'Described by a single coordinate chart', 'Decomposed into flat pieces'],
    correctIndex: 0,
    explanation: 'Nash proved that any abstract Riemannian manifold can be realized as a submanifold of Euclidean space preserving all distances — a stunning result that required solving systems of PDEs.',
    realWorld: 'This theorem bridges abstract and concrete geometry and is foundational in general relativity and modern geometric analysis.',
    hint: 'Any curved space fits inside a flat (but possibly very high-dimensional) space.',
  },
];
