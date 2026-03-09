import type { Question } from '../types';

export const elizabethGarrettAndersonQuestions: Question[] = [
  {
    id: 97090, topic: 'elizabeth-garrett-anderson', difficulty: 'easy',
    question: 'Elizabeth Garrett Anderson\'s primary historical significance is:',
    options: ['She was the first woman to qualify as a physician and surgeon in Britain (1865), opening medicine to women', 'She discovered a new antibiotic', 'She invented the stethoscope', 'She performed the first successful heart surgery'],
    correctIndex: 0,
    explanation: 'After being denied entry to medical schools, she qualified through the Society of Apothecaries (which had no gender bar in its charter). She co-founded the London School of Medicine for Women in 1874.',
    realWorld: 'Her persistence opened the medical profession to women across Britain and inspired similar movements globally.',
    hint: 'She found a loophole in a medical society\'s rules that didn\'t mention gender.',
  },
  {
    id: 97091, topic: 'elizabeth-garrett-anderson', difficulty: 'hard',
    question: 'Garrett Anderson established the New Hospital for Women (1872) which was significant because:',
    options: ['It was staffed entirely by women physicians and served as a training ground for female medical students', 'It was the first hospital to use antiseptic techniques', 'It specialized exclusively in pediatric care', 'It was the first hospital to have electricity'],
    correctIndex: 0,
    explanation: 'The hospital (later renamed the Elizabeth Garrett Anderson Hospital) provided clinical training opportunities for women who were barred from other teaching hospitals, creating a pipeline for female physicians.',
    realWorld: 'By 2024, women constitute >50% of medical school students in most Western countries — a transformation that began with pioneers like Garrett Anderson.',
    hint: 'Women needed their own hospital to get clinical training because they were excluded from others.',
  },
  {
    id: 97092, topic: 'elizabeth-garrett-anderson', difficulty: 'sota',
    question: 'Modern gender equity research in medicine reveals that physician gender affects patient outcomes. A landmark 2017 JAMA Internal Medicine study found:',
    options: ['Patients of female internists had significantly lower 30-day mortality ($OR = 0.96$, $p < 0.001$) and readmission rates compared to those of male internists', 'No measurable difference in outcomes between male and female physicians', 'Male physicians had better surgical outcomes', 'Gender effects disappeared after adjusting for specialty'],
    correctIndex: 0,
    explanation: 'Tsugawa et al. (2017) analyzed 1.5 million Medicare hospitalizations: adjusted 30-day mortality was 11.07% for female vs. 11.49% for male physicians — a small but significant difference at population scale.',
    realWorld: 'If male physicians achieved the same outcomes as female physicians, approximately 32,000 fewer patients would die annually in the US.',
    hint: 'A massive Medicare study found a small but statistically significant survival advantage.',
  },
];
