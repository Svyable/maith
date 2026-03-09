import type { Question } from '../types';

export const virginiaApgarQuestions: Question[] = [
  {
    id: 97120, topic: 'virginia-apgar', difficulty: 'easy',
    question: 'Virginia Apgar developed the Apgar score to:',
    options: ['Rapidly assess newborn health at 1 and 5 minutes after birth using five criteria: Appearance, Pulse, Grimace, Activity, and Respiration', 'Measure maternal blood loss during delivery', 'Predict fetal genetic disorders', 'Evaluate premature infant lung development'],
    correctIndex: 0,
    explanation: 'Each criterion scored 0–2, total 0–10. Score ≥7 = normal, 4–6 = requires attention, <4 = critical. It was the first standardized neonatal assessment (1952) and reduced newborn mortality by enabling rapid intervention.',
    realWorld: 'The Apgar score is used on virtually every baby born worldwide — over 130 million times per year.',
    hint: 'Her name became a convenient mnemonic for the five things to check on a newborn.',
  },
  {
    id: 97121, topic: 'virginia-apgar', difficulty: 'hard',
    question: 'The Apgar score\'s predictive validity for neonatal outcomes shows:',
    options: ['A 5-minute Apgar score of 0–3 is associated with significantly increased neonatal mortality (relative risk ~50–200× compared to score 7–10)', 'The 1-minute score is more predictive than the 5-minute score', 'Scores above 7 guarantee no complications', 'The score correlates poorly with actual outcomes'],
    correctIndex: 0,
    explanation: 'Casey et al. (2001): 5-min Apgar 0–3 → neonatal mortality 244/1000 vs. 0.2/1000 for score 7–10 in term infants. The 5-minute score is the stronger predictor: $RR \\approx 180$ ($95\\%$ CI: 130–250).',
    realWorld: 'Despite its simplicity, the 5-minute Apgar remains one of the most powerful predictors of neonatal survival — an elegant example of clinical scoring.',
    hint: 'The score taken at 5 minutes matters more than the one at 1 minute.',
  },
  {
    id: 97122, topic: 'virginia-apgar', difficulty: 'sota',
    question: 'Modern neonatal resuscitation extends Apgar\'s rapid assessment. The NRP (Neonatal Resuscitation Program) algorithm is guided by:',
    options: ['A sequential decision tree: warmth/stimulation → airway/PPV (within 60 sec) → chest compressions (3:1 ratio) → epinephrine, evaluated by heart rate response at each step', 'Immediate intubation for all newborns', 'Apgar score alone without further intervention', 'Delayed cord clamping as the sole intervention'],
    correctIndex: 0,
    explanation: 'The "Golden Minute": effective ventilation must begin within 60 seconds. ~10% of newborns need some assistance, ~1% need extensive resuscitation. Heart rate >100 bpm is the primary indicator of adequate resuscitation.',
    realWorld: 'NRP training has been shown to reduce neonatal mortality by 30–50% in low-resource settings — Apgar\'s legacy in action.',
    hint: 'The first 60 seconds after birth are called the "Golden Minute."',
  },
];
