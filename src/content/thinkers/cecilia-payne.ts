import type { Question } from '../types';

export const payneQuestions: Question[] = [
  {
    id: 20218, topic: 'cecilia-payne', difficulty: 'easy',
    question: 'Cecilia Payne-Gaposchkin discovered that stars are primarily composed of which two elements?',
    options: ['Hydrogen and helium', 'Iron and nickel', 'Carbon and oxygen', 'Nitrogen and silicon'],
    correctIndex: 0,
    explanation: 'Payne\'s 1925 PhD thesis showed that stars are overwhelmingly made of hydrogen and helium — overturning the assumption that they had the same composition as Earth.',
    realWorld: 'This discovery is fundamental to all of stellar astrophysics, nucleosynthesis, and our understanding of the universe\'s chemical evolution.',
    hint: 'These are the two lightest elements in the periodic table.',
  },
  {
    id: 20219, topic: 'cecilia-payne', difficulty: 'hard',
    question: 'Payne used which quantum mechanical theory to determine stellar composition from absorption spectra?',
    options: ['Saha ionization equation', 'Schrödinger equation', 'Boltzmann distribution alone', 'Planck radiation law'],
    correctIndex: 0,
    explanation: 'The Saha equation relates temperature, pressure, and ionization states to spectral line strengths, allowing Payne to deduce elemental abundances from stellar spectra.',
    realWorld: 'The Saha equation remains essential in spectroscopy — from analyzing distant galaxies to characterizing fusion plasmas in tokamaks.',
    hint: 'This equation, developed by an Indian physicist, connects ionization equilibrium to thermodynamic conditions.',
  },
  {
    id: 20220, topic: 'cecilia-payne', difficulty: 'sota',
    question: 'Who initially persuaded Payne to retract her hydrogen-helium conclusion, only to later publish the same result himself?',
    options: ['Henry Norris Russell', 'Arthur Eddington', 'Edwin Hubble', 'Subrahmanyan Chandrasekhar'],
    correctIndex: 0,
    explanation: 'Russell convinced Payne her result was "impossible." Four years later he reached the same conclusion and published it — receiving most of the credit for decades.',
    realWorld: 'This is one of astronomy\'s most cited cases of a woman\'s discovery being credited to a man, now widely recognized as the Matilda effect.',
    hint: 'This astronomer is best known for the Hertzsprung-___ diagram of stellar classification.',
  },
];
