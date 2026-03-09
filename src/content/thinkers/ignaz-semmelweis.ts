import type { Question } from '../types';

export const ignazSemmelweisQuestions: Question[] = [
  {
    id: 97080, topic: 'ignaz-semmelweis', difficulty: 'easy',
    question: 'Ignaz Semmelweis dramatically reduced puerperal (childbed) fever mortality by:',
    options: ['Requiring doctors to wash their hands with chlorinated lime solution before examining patients', 'Prescribing antibiotics to new mothers', 'Sterilizing surgical instruments with heat', 'Isolating infected patients in separate wards'],
    correctIndex: 0,
    explanation: 'In 1847, Semmelweis noticed that the doctor-staffed ward had 10–35% maternal mortality vs. 2% in the midwife ward. After his colleague died from a cadaver wound, he mandated handwashing — mortality dropped to ~1%.',
    realWorld: 'Despite clear evidence, his ideas were rejected by the medical establishment. He is now recognized as the pioneer of hospital infection control.',
    hint: 'Doctors were going straight from autopsies to delivering babies.',
  },
  {
    id: 97081, topic: 'ignaz-semmelweis', difficulty: 'hard',
    question: 'Semmelweis used statistical evidence to prove his handwashing intervention worked. His data showed:',
    options: ['Mortality dropped from ~10% to ~1% in the First Clinic after chlorine handwashing — a statistically significant difference even before formal hypothesis testing existed', 'A 50% reduction that was not statistically significant', 'Equal mortality rates in both clinics', 'Mortality increased initially before decreasing'],
    correctIndex: 0,
    explanation: 'Using a modern $\\chi^2$ test on Semmelweis\'s data: First Clinic pre-intervention ~10% vs. post ~1.3%, $p < 0.0001$. He was one of the earliest physicians to use mortality statistics as evidence for clinical intervention.',
    realWorld: 'The "Semmelweis reflex" — the tendency to reject new evidence that contradicts established norms — is named after the resistance he faced.',
    hint: 'A tenfold drop in deaths is hard to argue with — but they did.',
  },
  {
    id: 97082, topic: 'ignaz-semmelweis', difficulty: 'sota',
    question: 'Modern hospital-acquired infection (HAI) surveillance extends Semmelweis\'s work. The standardized infection ratio (SIR) is calculated as:',
    options: ['$SIR = \\frac{\\text{Observed infections}}{\\text{Expected infections}}$, where expected is derived from national baseline rates adjusted for facility risk factors', '$SIR = \\frac{\\text{Total infections}}{\\text{Total patients}} \\times 100$', '$SIR = \\frac{\\text{Infected patients}}{\\text{Hand hygiene compliance rate}}$', '$SIR = 1 - \\frac{\\text{Post-intervention rate}}{\\text{Pre-intervention rate}}$'],
    correctIndex: 0,
    explanation: 'SIR < 1.0 means fewer infections than the national baseline; SIR > 1.0 means more. CMS uses SIR for hospital payment adjustments: HAI penalties affect ~25% of US hospitals annually.',
    realWorld: 'WHO estimates that HAIs affect 7% of patients in developed countries and 10% in developing countries, causing ~100,000 deaths/year in the US alone.',
    hint: 'Observed divided by expected — like a standardized mortality ratio but for infections.',
  },
];
