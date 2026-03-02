import type { Question } from '../types';

export const evangelistaTorricelliQuestions: Question[] = [
  {
    id: 20620,
    topic: 'evangelista-torricelli',
    difficulty: 'hard',
    question: 'Torricelli\'s "Gabriel\'s Horn" (the solid of revolution of $y=1/x$ for $x \\geq 1$) has finite volume but infinite surface area. What is the volume?',
    options: ['$\\pi$', '$2\\pi$', '$\\infty$', '$1$'],
    correctIndex: 0,
    explanation: '$V = \\pi \\int_1^{\\infty} (1/x)^2 dx = \\pi[-1/x]_1^{\\infty} = \\pi$. Yet $A = 2\\pi \\int_1^{\\infty} (1/x)\\sqrt{1+1/x^4}\\,dx = \\infty$.',
    realWorld: 'This paradox illustrates that intuitions about finite/infinite break down in higher dimensions — crucial for understanding convergence in physics.',
    hint: 'Integrate $\\pi/x^2$ from 1 to infinity.',
  },
  {
    id: 20621,
    topic: 'evangelista-torricelli',
    difficulty: 'sota',
    question: 'Gabriel\'s Horn can be "filled with paint" (finite volume) but not "painted" (infinite surface area). This apparent paradox assumes:',
    options: ['Paint has zero thickness — real paint has finite thickness, resolving the paradox', 'Paint is infinitely compressible', 'Surface area is poorly defined', 'The horn is not a valid solid'],
    correctIndex: 0,
    explanation: 'Real paint has finite thickness. If you pour paint into the horn, the paint itself coats the interior surface with decreasing thickness — the paradox is purely about mathematical idealization.',
    realWorld: 'This teaches the critical distinction between mathematical idealization and physical reality — essential in engineering modeling.',
    hint: 'Physical paint is 3-dimensional, not a 2D coating.',
  },
  {
    id: 20622,
    topic: 'evangelista-torricelli',
    difficulty: 'easy',
    question: 'Besides Gabriel\'s Horn, Torricelli is famous for inventing which scientific instrument?',
    options: ['The barometer (mercury barometer)', 'The telescope', 'The thermometer', 'The microscope'],
    correctIndex: 0,
    explanation: 'In 1643, Torricelli filled a glass tube with mercury and inverted it, discovering atmospheric pressure — inventing the barometer and creating the first artificial vacuum.',
    realWorld: 'Barometers remain essential for weather forecasting and aviation altitude measurement.',
    hint: 'He used mercury in a tube to measure something invisible.',
  },
];
