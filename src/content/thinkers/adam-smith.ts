import type { Question } from '../types';

export const adamSmithQuestions: Question[] = [
  {
    id: 96010, topic: 'adam-smith', difficulty: 'easy',
    question: 'Adam Smith\'s concept of the "invisible hand" suggests that:',
    options: ['Individual self-interest can lead to collective economic benefit', 'Government must direct all economic activity', 'Markets always fail without regulation', 'Monopolies are the natural market outcome'],
    correctIndex: 0,
    explanation: 'Smith argued that when individuals pursue their own self-interest in competitive markets, they are "led by an invisible hand" to promote the public good — even without intending to.',
    realWorld: 'This concept underpins free-market economics and remains central to debates about regulation, trade policy, and economic freedom.',
    hint: 'No central planner needed — the market organizes itself.',
  },
  {
    id: 96011, topic: 'adam-smith', difficulty: 'hard',
    question: 'Smith\'s pin factory example in "The Wealth of Nations" demonstrated that division of labor increases productivity because:',
    options: ['Specialization increases skill, saves time, and enables tool innovation', 'Workers compete against each other for wages', 'Factories can hire fewer workers at lower cost', 'Machines replace all manual labor'],
    correctIndex: 0,
    explanation: 'Smith showed that 10 workers making pins together (each specializing in one step) could produce 48,000 pins/day vs. ~10 pins/day each working alone — a 4,800x increase.',
    realWorld: 'Division of labor became the foundation of industrial manufacturing, assembly lines, and modern supply chains.',
    hint: 'Each worker does one thing extremely well.',
  },
  {
    id: 96012, topic: 'adam-smith', difficulty: 'sota',
    question: 'Smith\'s lesser-known "Theory of Moral Sentiments" introduced the concept of the "impartial spectator," which means:',
    options: ['An internalized moral judge that evaluates our own behavior from an outsider\'s perspective', 'A government regulator overseeing markets', 'An AI system for ethical decision-making', 'A neutral arbitrator in trade disputes'],
    correctIndex: 0,
    explanation: 'The impartial spectator is our internal conscience — we imagine how a fair, informed outsider would judge our actions. Smith saw this as the foundation of moral behavior.',
    realWorld: 'Modern behavioral economics and AI alignment research draw on this concept when designing systems that must evaluate fairness impartially.',
    hint: 'It\'s not an external person — it\'s inside your own mind.',
  },
];
