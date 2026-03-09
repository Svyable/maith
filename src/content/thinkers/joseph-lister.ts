import type { Question } from '../types';

export const josephListerQuestions: Question[] = [
  {
    id: 97050, topic: 'joseph-lister', difficulty: 'easy',
    question: 'Joseph Lister pioneered antiseptic surgery by:',
    options: ['Using carbolic acid (phenol) to sterilize surgical instruments, wounds, and dressings, dramatically reducing post-operative infections', 'Inventing the autoclave', 'Discovering penicillin', 'Introducing handwashing with chlorinated lime'],
    correctIndex: 0,
    explanation: 'Inspired by Pasteur\'s germ theory, Lister applied carbolic acid spray during surgeries in 1867, reducing surgical mortality from ~45% to ~15% in his ward.',
    realWorld: 'His antiseptic principles evolved into modern aseptic technique — the foundation of safe surgery worldwide. Listerine mouthwash was named after him.',
    hint: 'A strong-smelling acid spray used during Victorian-era surgeries.',
  },
  {
    id: 97051, topic: 'joseph-lister', difficulty: 'hard',
    question: 'Lister\'s antiseptic method worked because phenol ($C_6H_5OH$):',
    options: ['Denatures bacterial proteins and disrupts cell membranes by intercalating into the lipid bilayer', 'Acts as an antibiotic inhibiting DNA replication', 'Stimulates the immune system to fight infections', 'Physically removes bacteria by dissolution'],
    correctIndex: 0,
    explanation: 'Phenol disrupts the tertiary structure of proteins and permeabilizes bacterial membranes. Its bactericidal activity follows a concentration-time relationship: $C^n \\times t = k$ (concentration exponent $n \\approx 6$ for phenol).',
    realWorld: 'The phenol coefficient is still used as a standard reference for comparing disinfectant efficacy.',
    hint: 'It destroys the structural integrity of bacterial proteins and membranes.',
  },
  {
    id: 97052, topic: 'joseph-lister', difficulty: 'sota',
    question: 'Modern surgical site infection (SSI) prevention extends Lister\'s work. The CDC SSI risk classification uses:',
    options: ['The NNIS/NHSN risk index combining wound class (clean/contaminated/dirty), ASA score (≥3), and operation duration (>T₇₅ percentile)', 'Only antibiotic prophylaxis timing', 'Surgeon experience level alone', 'Operating room temperature and humidity'],
    correctIndex: 0,
    explanation: 'SSI risk = f(wound class, patient health, operative duration). Clean surgeries: SSI rate ~1–2%; dirty surgeries: ~20–40%. Risk-stratified surveillance enables meaningful comparison across hospitals.',
    realWorld: 'Modern SSI bundles (antibiotic timing, normothermia, glycemic control) have reduced infection rates to <1% for clean procedures.',
    hint: 'Three factors combined predict infection risk after surgery.',
  },
];
