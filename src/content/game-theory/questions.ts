import type { Question } from '../types';

export const gameTheoryQuestions: Question[] = [
  {
    id: 40101, topic: 'game-theory', difficulty: 'easy',
    question: 'In the Prisoner\'s Dilemma, both players defecting is a Nash equilibrium because:',
    options: [
      'Neither player can improve their outcome by unilaterally changing strategy — even though mutual cooperation would be better for both',
      'Both players always cooperate in equilibrium',
      'The game has no equilibrium',
      'Players can communicate and coordinate freely',
    ],
    correctIndex: 0,
    explanation: 'A Nash equilibrium is a strategy profile where no player benefits from deviating alone. In the Prisoner\'s Dilemma, (Defect, Defect) is the unique Nash equilibrium despite (Cooperate, Cooperate) being Pareto superior.',
    realWorld: 'Arms races, climate agreements, and price wars are all Prisoner\'s Dilemmas — individually rational behavior leads to collectively suboptimal outcomes.',
    hint: 'Each player thinks: "No matter what they do, I\'m better off defecting."',
  },
  {
    id: 40102, topic: 'game-theory', difficulty: 'hard',
    question: 'The minimax theorem (von Neumann, 1928) proves that in two-player zero-sum games:',
    options: [
      'There always exists a mixed strategy equilibrium where max-min equals min-max — both players can guarantee a specific value regardless of the opponent\'s play',
      'One player always has a pure strategy that wins',
      'The game must end in a draw',
      'Players should always randomize uniformly',
    ],
    correctIndex: 0,
    explanation: 'The minimax theorem shows $\\max_x \\min_y x^T A y = \\min_y \\max_x x^T A y$. This "value" of the game can be achieved by both players through optimal mixed strategies. It\'s the foundation of game theory.',
    realWorld: 'Minimax drives poker AI (Libratus, Pluribus), chess engines, adversarial ML (GANs are minimax games), and military strategy optimization.',
    hint: 'The best you can guarantee equals the least your opponent can hold you to — they\'re the same number.',
  },
  {
    id: 40103, topic: 'game-theory', difficulty: 'sota',
    question: 'Mechanism design ("reverse game theory") asks:',
    options: [
      'How to design the rules of a game so that self-interested agents\' equilibrium behavior achieves a desired social outcome — incentive compatibility by construction',
      'How to find Nash equilibria in existing games faster',
      'How to eliminate all strategic behavior from markets',
      'How to prove that all games have pure strategy equilibria',
    ],
    correctIndex: 0,
    explanation: 'Mechanism design inverts game theory: instead of analyzing given games, design the game rules so the desired outcome IS the equilibrium. The Vickrey-Clarke-Groves (VCG) mechanism achieves truthful revelation in auctions.',
    realWorld: 'Google\'s ad auction (GSP), kidney exchange programs, spectrum auctions ($100B+), and matching markets (school choice, medical residencies) all use mechanism design.',
    hint: 'Don\'t analyze the game — design the game so players naturally do what you want.',
  },
];
