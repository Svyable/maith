import type { Question } from '../types';

export const danielKahnemanQuestions: Question[] = [
  {
    id: 96080, topic: 'daniel-kahneman', difficulty: 'easy',
    question: 'Kahneman\'s "System 1" and "System 2" describe:',
    options: ['Fast intuitive thinking vs. slow deliberate reasoning', 'Left brain vs. right brain', 'Conscious vs. unconscious memory', 'Short-term vs. long-term memory'],
    correctIndex: 0,
    explanation: 'System 1 is fast, automatic, and prone to biases. System 2 is slow, effortful, and logical. Most decisions use System 1, which is why cognitive biases are so pervasive.',
    realWorld: 'This framework is used in UX design, marketing, public policy (nudge theory), and behavioral finance.',
    hint: 'Think of the difference between catching a ball (automatic) and solving 17 × 24 (effortful).',
  },
  {
    id: 96081, topic: 'daniel-kahneman', difficulty: 'hard',
    question: 'Kahneman and Tversky\'s Prospect Theory shows that people:',
    options: ['Feel losses roughly twice as strongly as equivalent gains (loss aversion)', 'Are perfectly rational utility maximizers', 'Always prefer certain outcomes over gambles', 'Value money linearly regardless of context'],
    correctIndex: 0,
    explanation: 'Prospect Theory (1979) demonstrated that the value function is concave for gains and convex for losses, with losses weighted ~2x more than gains — violating expected utility theory.',
    realWorld: 'Loss aversion explains why investors hold losing stocks too long and sell winners too early (the disposition effect).',
    hint: 'Losing $100 hurts more than gaining $100 feels good.',
  },
  {
    id: 96082, topic: 'daniel-kahneman', difficulty: 'sota',
    question: 'Kahneman\'s "noise" research (with Sibony and Sunstein) reveals that:',
    options: ['Unwanted variability in human judgment is often larger than bias, yet largely invisible', 'All judgment errors come from cognitive biases', 'AI eliminates all decision-making noise', 'Noise only affects novice decision-makers'],
    correctIndex: 0,
    explanation: 'In "Noise" (2021), Kahneman showed that identical cases receive wildly different judgments from different judges, doctors, and underwriters — this "noise" is often a bigger problem than systematic bias.',
    realWorld: 'Insurance companies found that underwriters varied by 55% on the same case. Noise audits are now standard in many organizations.',
    hint: 'Two judges seeing the same case can give very different sentences.',
  },
];
