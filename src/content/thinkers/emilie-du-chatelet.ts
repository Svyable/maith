import type { Question } from '../types';

export const duchateletQuestions: Question[] = [
  {
    id: 20203, topic: 'emilie-du-chatelet', difficulty: 'easy',
    question: 'Émilie du Châtelet translated which foundational physics work into French, adding her own commentary?',
    options: ['Newton\'s Principia Mathematica', 'Galileo\'s Two New Sciences', 'Descartes\' Principles of Philosophy', 'Leibniz\'s Monadology'],
    correctIndex: 0,
    explanation: 'Du Châtelet\'s 1749 French translation of Newton\'s Principia remains the standard French edition to this day. She added extensive commentary and mathematical supplements.',
    realWorld: 'Scientific translation with expert commentary remains crucial — du Châtelet\'s work made Newtonian physics accessible to the French-speaking world.',
    hint: 'This was the masterwork of the man famous for falling apples and universal gravitation.',
  },
  {
    id: 20204, topic: 'emilie-du-chatelet', difficulty: 'hard',
    question: 'Du Châtelet proved that kinetic energy is proportional to $mv^2$ rather than $mv$ as Newton and Descartes believed. What experiment supported her?',
    options: ['Brass balls dropped into soft clay (\'s Gravesande)', 'Pendulum timing experiments', 'Cannon recoil measurements', 'Inclined plane rolling'],
    correctIndex: 0,
    explanation: 'Willem \'s Gravesande dropped brass balls into clay and showed penetration depth scaled with $v^2$, not $v$. Du Châtelet used this to argue for $\\frac{1}{2}mv^2$ as the true measure of "living force" (vis viva).',
    realWorld: 'The vis viva controversy was resolved as kinetic energy $\\frac{1}{2}mv^2$ — fundamental to all of mechanics and engineering.',
    hint: 'Doubling the speed quadrupled the impression depth in the soft material.',
  },
  {
    id: 20205, topic: 'emilie-du-chatelet', difficulty: 'sota',
    question: 'Du Châtelet\'s insight about $\\frac{1}{2}mv^2$ anticipated which fundamental theorem connecting force, work, and kinetic energy?',
    options: ['Work-energy theorem', 'Noether\'s theorem', 'Virial theorem', 'Equipartition theorem'],
    correctIndex: 0,
    explanation: 'The work-energy theorem states $W = \\Delta(\\frac{1}{2}mv^2)$ — the net work on an object equals its change in kinetic energy. Du Châtelet\'s vis viva argument was the conceptual precursor.',
    realWorld: 'Every car crash analysis, roller coaster design, and ballistics calculation uses the work-energy theorem du Châtelet helped establish.',
    hint: 'Net force times displacement equals the change in this scalar quantity.',
  },
];
