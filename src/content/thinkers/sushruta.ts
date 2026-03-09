import type { Question } from '../types';

export const shushrutaQuestions: Question[] = [
  {
    id: 97100, topic: 'sushruta', difficulty: 'easy',
    question: 'Sushruta, the ancient Indian physician (~600 BCE), is considered the father of surgery primarily for:',
    options: ['Describing over 300 surgical procedures and 120 surgical instruments in the Sushruta Samhita, including rhinoplasty (nose reconstruction)', 'Discovering anesthesia', 'Inventing the microscope', 'Performing the first heart transplant'],
    correctIndex: 0,
    explanation: 'The Sushruta Samhita describes cataract surgery (couching), lithotomy (bladder stones), cesarean delivery, and the famous "Indian rhinoplasty" using a forehead flap — techniques still used in modified form today.',
    realWorld: 'The forehead flap rhinoplasty described by Sushruta was rediscovered by British surgeons in the 18th century and remains a standard reconstructive technique.',
    hint: 'He reconstructed noses using skin from the forehead — 2,600 years ago.',
  },
  {
    id: 97101, topic: 'sushruta', difficulty: 'hard',
    question: 'Sushruta\'s classification of diseases included a remarkably modern concept of:',
    options: ['Diabetes (madhumeha / "honey urine"), diagnosed by observing that ants are attracted to the patient\'s urine', 'Bacterial infection theory', 'Blood typing', 'Vaccination'],
    correctIndex: 0,
    explanation: 'Sushruta described 20 types of urinary disorders including madhumeha, noting sweet-tasting urine and its association with obesity and sedentary lifestyle — anticipating the metabolic syndrome concept by millennia.',
    realWorld: 'The observation that ants are attracted to diabetic urine was independently noted in multiple ancient medical traditions (Indian, Chinese, Greek).',
    hint: 'He noticed insects were attracted to some patients\' urine — a clue to high sugar.',
  },
  {
    id: 97102, topic: 'sushruta', difficulty: 'sota',
    question: 'Modern reconstructive surgery extends Sushruta\'s forehead flap. The subunit principle of nasal reconstruction involves:',
    options: ['Replacing entire aesthetic subunits (dorsum, sidewall, tip, alar, soft triangle) rather than patching only the defect, to minimize visible scarring at subunit boundaries', 'Replacing only the exact area of tissue loss', 'Using skin grafts exclusively instead of flaps', 'Reconstruction with synthetic materials only'],
    correctIndex: 0,
    explanation: 'Burget and Menick\'s subunit principle: if >50% of a nasal subunit is lost, replace the entire subunit. Flap design follows $\\text{Arc of rotation} = \\pi \\times r$, where $r$ is the pedicle length.',
    realWorld: 'Paramedian forehead flaps (Sushruta\'s technique refined) remain the gold standard for complex nasal reconstruction, with >95% flap survival rates.',
    hint: 'Replace the whole aesthetic unit, not just the hole — the scars hide better at natural boundaries.',
  },
];
