import type { Question } from '../types';

export const ettaZuberFalconerQuestions: Question[] = [
  {
    id: 9263025,
    topic: 'etta-zuber-falconer',
    difficulty: 'easy',
    question: 'What area did Etta Zuber Falconer study for her mathematics doctorate?',
    options: ['Numerical weather prediction', 'Algebraic number theory', 'Differential geometry', 'Quasigroup theory'],
    correctIndex: 3,
    explanation: 'Falconer earned her PhD at Emory University with research on quasigroup identities and isotopy in abstract algebra.',
    realWorld: 'Quasigroups generalize familiar algebraic structures and appear in combinatorics, coding theory, and the study of nonassociative systems.',
    hint: 'Her dissertation studied a nonassociative algebraic structure.',
  },
  {
    id: 9263026,
    topic: 'etta-zuber-falconer',
    difficulty: 'hard',
    question: 'In quasigroup theory, what does an isotopy broadly allow?',
    options: [
      'Replacing every operation by ordinary addition',
      'Ignoring the multiplication law entirely',
      'Relating two operations through a triple of bijections',
      'Requiring the two structures to be identical',
    ],
    correctIndex: 2,
    explanation: 'An isotopy is weaker than an isomorphism and can relate quasigroup operations through three compatible bijections rather than one structure-preserving map.',
    realWorld: 'Weaker equivalence notions help mathematicians classify structures that share important behavior without being literally identical.',
    hint: 'It uses more flexibility than a single isomorphism.',
  },
  {
    id: 9263027,
    topic: 'etta-zuber-falconer',
    difficulty: 'sota',
    question: 'What best captures Falconer’s long-term institutional impact at Spelman College?',
    options: [
      'She strengthened mathematics and computing pathways while mentoring generations of Black women in STEM',
      'She replaced mathematics courses with engineering workshops',
      'She moved the college away from scientific research',
      'She limited advanced mathematics to graduate students',
    ],
    correctIndex: 0,
    explanation: 'Falconer combined mathematical research with decades of leadership, curriculum building, computing education, and mentorship at Spelman.',
    realWorld: 'Strong departments and mentoring pipelines can change who enters technical fields just as profoundly as a single research result.',
    hint: 'Her influence was both academic and institutional.',
    sources: [{ title: 'Etta Zuber Falconer', url: 'https://mathshistory.st-andrews.ac.uk/Biographies/Falconer/', publisher: 'MacTutor History of Mathematics' }],
    reviewedAt: '2026-09-20',
  },
];
