import type { Question } from '../types';

export const hippocratesQuestions: Question[] = [
  {
    id: 97020, topic: 'hippocrates', difficulty: 'easy',
    question: 'Hippocrates is called the "Father of Medicine" primarily because he:',
    options: ['Separated medicine from superstition by attributing diseases to natural causes rather than divine punishment', 'Discovered antibiotics', 'Invented surgical instruments', 'Mapped the human genome'],
    correctIndex: 0,
    explanation: 'In "On the Sacred Disease" (epilepsy), Hippocrates argued that all diseases have natural causes — not curses or divine wrath — establishing medicine as a rational discipline.',
    realWorld: 'The Hippocratic Oath, still sworn by physicians today, established ethical standards for medical practice.',
    hint: 'He said epilepsy was a brain disease, not a curse from the gods.',
  },
  {
    id: 97021, topic: 'hippocrates', difficulty: 'hard',
    question: 'The Hippocratic theory of the four humors proposed that health depends on the balance of:',
    options: ['Blood, phlegm, yellow bile, and black bile — each linked to a temperament and season', 'Fire, water, earth, and air in the body', 'Yin and yang energies', 'Acid and base in the blood'],
    correctIndex: 0,
    explanation: 'Humoralism dominated Western medicine for ~2,000 years: blood (sanguine/spring), phlegm (phlegmatic/winter), yellow bile (choleric/summer), black bile (melancholic/autumn). Treatment aimed to restore balance.',
    realWorld: 'Though scientifically superseded, humoral thinking influenced modern concepts of homeostasis and temperament psychology.',
    hint: 'Four body fluids, four seasons, four personality types.',
  },
  {
    id: 97022, topic: 'hippocrates', difficulty: 'sota',
    question: 'Modern evidence-based medicine (EBM) extends Hippocrates\' empirical approach. The hierarchy of evidence places at the top:',
    options: ['Systematic reviews and meta-analyses of randomized controlled trials (RCTs)', 'Individual RCTs alone', 'Cohort studies', 'Expert opinion and case reports'],
    correctIndex: 0,
    explanation: 'The evidence pyramid: systematic reviews/meta-analyses > RCTs > cohort studies > case-control > case series > expert opinion. Effect sizes are pooled using $\\hat{\\theta} = \\frac{\\sum w_i \\theta_i}{\\sum w_i}$ where $w_i = 1/\\sigma_i^2$.',
    realWorld: 'Cochrane Reviews are the gold standard for clinical decision-making, synthesizing evidence from thousands of trials.',
    hint: 'Combining multiple high-quality trials gives the strongest evidence.',
  },
];
