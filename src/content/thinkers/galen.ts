import type { Question } from '../types';

export const galenQuestions: Question[] = [
  {
    id: 97030, topic: 'galen', difficulty: 'easy',
    question: 'Galen of Pergamon was the most influential physician of antiquity. His primary method of anatomical study was:',
    options: ['Dissection of animals (especially Barbary macaques and pigs) and extrapolation to human anatomy', 'Systematic human cadaver dissection', 'Pure philosophical reasoning without observation', 'Chemical analysis of body fluids'],
    correctIndex: 0,
    explanation: 'Roman law prohibited human dissection, so Galen dissected animals — leading to many errors (e.g., a five-lobed liver, porous interventricular septum) that persisted for 1,400 years until Vesalius.',
    realWorld: 'Galen\'s anatomical texts were the unchallenged authority in European and Islamic medicine until the Renaissance.',
    hint: 'He couldn\'t legally dissect humans, so he used the next best thing.',
  },
  {
    id: 97031, topic: 'galen', difficulty: 'hard',
    question: 'Galen demonstrated that arteries carry blood (not air) by:',
    options: ['Ligating arteries in living animals and showing they fill with blood, not pneuma', 'Observing arterial bleeding in gladiators', 'Using a microscope to examine arterial walls', 'Theoretical deduction from humoral theory'],
    correctIndex: 0,
    explanation: 'The prevailing view (from Erasistratus) was that arteries carry vital pneuma (air). Galen\'s vivisection experiments on animals proved arteries contain blood under pressure.',
    realWorld: 'This discovery was essential for understanding hemorrhage, arterial disease, and eventually blood pressure.',
    hint: 'He tied off arteries in living animals and observed what filled them.',
  },
  {
    id: 97032, topic: 'galen', difficulty: 'sota',
    question: 'Modern arterial hemodynamics uses the Windkessel model. The two-element model describes aortic pressure as:',
    options: ['$P(t) = P_0 e^{-t/(RC)}$ during diastole, where $R$ = peripheral resistance and $C$ = arterial compliance', '$P = \\rho g h$ (hydrostatic only)', '$P = F/A$ (static pressure)', '$\\Delta P = 8\\mu LQ / (\\pi r^4)$ (Poiseuille only)'],
    correctIndex: 0,
    explanation: 'The Windkessel captures how elastic arteries store energy during systole and release it during diastole: $C \\frac{dP}{dt} + \\frac{P}{R} = Q_{in}(t)$. The time constant $\\tau = RC$ determines diastolic decay.',
    realWorld: 'Windkessel models are used in pulse wave analysis, aortic stiffness assessment, and cardiovascular device design.',
    hint: 'The aorta acts like an air chamber (Windkessel) that smooths pulsatile flow.',
  },
];
