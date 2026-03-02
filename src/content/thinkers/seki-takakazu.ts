import type { Question } from '../types';

export const sekiTakakazuQuestions: Question[] = [
  {
    id: 20534,
    topic: 'seki-takakazu',
    difficulty: 'hard',
    question: 'Seki Kōwa independently discovered the concept of determinants before Leibniz. His method, called "kigen shōhō," computed determinants of matrices up to what size?',
    options: ['5×5 matrices', '2×2 matrices', '3×3 matrices', '10×10 matrices'],
    correctIndex: 0,
    explanation: 'Seki developed systematic methods for computing determinants of matrices up to 5×5, anticipating Leibniz\'s 1693 work by about a decade.',
    realWorld: 'Determinants are fundamental to solving systems of linear equations in engineering, physics, and computer graphics.',
    hint: 'He went well beyond the trivial 2×2 and 3×3 cases.',
  },
  {
    id: 20535,
    topic: 'seki-takakazu',
    difficulty: 'sota',
    question: 'Seki developed "yenri" (circle principle), a method for computing areas and volumes using inscribed/circumscribed polygons. This is equivalent to which Western concept?',
    options: ['Integration by exhaustion (proto-calculus)', 'Fourier analysis', 'Projective geometry', 'Differential equations'],
    correctIndex: 0,
    explanation: 'Yenri systematically subdivided curved regions into polygonal approximations and took limits — essentially the method of exhaustion, independently paralleling European calculus.',
    realWorld: 'Japanese mathematics ("wasan") developed a rich, independent tradition that rivaled European math despite Japan\'s isolation during the Edo period.',
    hint: 'Approximating curves with finer and finer polygons and taking limits.',
  },
  {
    id: 20536,
    topic: 'seki-takakazu',
    difficulty: 'easy',
    question: 'Seki Kōwa developed his mathematics during which period of Japanese history, when the country was almost completely isolated?',
    options: ['The Edo period (1603–1868)', 'The Meiji Restoration', 'The Heian period', 'The Shōwa era'],
    correctIndex: 0,
    explanation: 'During the Edo period\'s "sakoku" (closed country) policy, Seki developed advanced mathematics completely independently of Western influence.',
    realWorld: 'His work proves that mathematical talent and discovery are universal, not dependent on cultural exchange.',
    hint: 'Japan\'s period of self-imposed isolation under the Tokugawa shogunate.',
  },
];
