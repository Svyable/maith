import type { Question } from '../types';

export const waltherNernstQuestions: Question[] = [
  {
    id: 97201, topic: 'walther-nernst', difficulty: 'easy',
    question: 'The Nernst equation $E = E^\\circ - \\frac{RT}{nF} \\ln Q$ relates the cell potential to:',
    options: ['The reaction quotient Q — predicting voltage under non-standard conditions', 'Temperature only', 'The mass of the electrodes', 'The volume of the electrolyte'],
    correctIndex: 0,
    explanation: 'The Nernst equation adjusts the standard cell potential $E^\\circ$ for actual concentrations via the reaction quotient $Q$. At equilibrium ($Q = K$), $E = 0$ and the cell is "dead."',
    realWorld: 'The Nernst equation predicts the voltage of every battery, fuel cell, and biological ion channel. It explains why neurons can fire and why pH meters work.',
    hint: 'When concentrations are at standard conditions ($Q = 1$), the equation reduces to $E = E^\\circ$.',
  },
  {
    id: 97202, topic: 'walther-nernst', difficulty: 'hard',
    question: 'Nernst\'s heat theorem (third law of thermodynamics) states that as $T \\to 0$:',
    options: ['The entropy of a perfect crystal approaches zero — $\\lim_{T \\to 0} S = 0$', 'Energy becomes infinite', 'All reactions become spontaneous', 'Heat capacity diverges'],
    correctIndex: 0,
    explanation: 'The third law establishes an absolute reference for entropy. A perfect crystal at 0 K has exactly one microstate ($\\Omega = 1$, so $S = k_B \\ln 1 = 0$). This makes absolute entropy calculations possible.',
    realWorld: 'The third law explains why absolute zero is unattainable (reaching it would require infinite steps) and enables calculation of absolute entropies used in chemical thermodynamics.',
    hint: 'At absolute zero, there is only one way to arrange the particles — perfect order.',
  },
  {
    id: 97203, topic: 'walther-nernst', difficulty: 'sota',
    question: 'In biological systems, the Nernst equation determines the equilibrium potential for an ion across a membrane. For K⁺ with $[K^+]_{in} = 140$ mM and $[K^+]_{out} = 5$ mM at 37°C:',
    options: ['$E_K \\approx -90$ mV — explaining why neurons have a negative resting potential', '$E_K \\approx +90$ mV', '$E_K \\approx 0$ mV', '$E_K \\approx -30$ mV'],
    correctIndex: 0,
    explanation: '$E_K = \\frac{RT}{zF} \\ln \\frac{[K^+]_{out}}{[K^+]_{in}} = \\frac{26.7 \\text{ mV}}{1} \\ln \\frac{5}{140} \\approx -90$ mV. The large concentration gradient drives K⁺ outward, making the cell interior negative. This is the dominant contributor to the resting membrane potential.',
    realWorld: 'The Goldman equation extends Nernst to multiple ions, explaining action potentials, cardiac rhythms, and how anesthetics work by altering ion channel conductances.',
    hint: 'More K⁺ inside than outside → K⁺ flows out → inside becomes negative.',
  },
];
