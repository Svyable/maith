import type { Question } from '../types';

export const ibrahimIbnSinanQuestions: Question[] = [
  {
    id: 31770, topic: 'ibrahim-ibn-sinan', difficulty: 'easy',
    question: 'Ibrahim ibn Sinan (908–946), grandson of Thabit ibn Qurra, died at just 38 but made lasting contributions. What was his most important mathematical work?',
    options: [
      'He developed new methods for computing areas under curves — particularly the area of a parabolic segment — using geometric decomposition techniques that anticipated integral calculus by 700 years.',
      'He proved the infinitude of prime numbers using a method different from Euclid\'s.',
      'He discovered the formula for the volume of a torus by revolving a circle around an external axis.',
      'He solved the general quartic equation using geometric constructions involving conics.'
    ],
    correctIndex: 0,
    explanation: 'Ibrahim ibn Sinan simplified Archimedes\' proof for the area of a parabolic segment. Where Archimedes used an exhaustion argument with inscribed triangles, Ibn Sinan developed a more elegant affine transformation method that mapped the parabola to a standard form, making the area calculation direct and transparent.',
    realWorld: 'His methods of using transformations to simplify area calculations anticipate the change-of-variables technique in integration — a fundamental tool in calculus.',
    hint: 'He found areas under parabolas more elegantly than Archimedes — using geometric transformations instead of exhaustion.',
  },
  {
    id: 31771, topic: 'ibrahim-ibn-sinan', difficulty: 'hard',
    question: 'Ibrahim ibn Sinan studied the geometry of shadows and sundials. What mathematical problem did this lead him to solve?',
    options: [
      'The problem of drawing conic sections (ellipses, parabolas, hyperbolas) continuously point by point — he developed the first systematic method for constructing conics as the locus of points satisfying a distance condition, going beyond the Greek "slicing a cone" approach.',
      'The problem of computing the length of a shadow at any time of day, which he solved using the tangent function.',
      'The problem of designing a sundial that tells correct time at any latitude, using stereographic projection.',
      'The problem of determining the curvature of a lens surface needed to focus parallel light to a single point.'
    ],
    correctIndex: 0,
    explanation: 'Ibn Sinan\'s treatise on shadow instruments led him to study how shadows trace conic sections as the sun moves. He then developed methods to construct conics as curves defined by metric conditions (focus-directrix properties), independent of the cone-slicing definition — a more analytic approach that anticipated coordinate geometry.',
    realWorld: 'The focus-directrix definition of conics is the standard definition used in modern mathematics and is fundamental to orbital mechanics (Kepler\'s laws) and antenna/reflector design.',
    hint: 'Shadows trace curves — and he found how to construct those curves using distance properties, not by cutting cones.',
  },
  {
    id: 31772, topic: 'ibrahim-ibn-sinan', difficulty: 'sota',
    question: 'Ibrahim ibn Sinan wrote a remarkable philosophical treatise on mathematical methodology. What was his key insight about mathematical proof?',
    options: [
      'He argued that analysis (working backward from the desired result to known truths) and synthesis (working forward from axioms to the result) are complementary methods, and that analysis is essential for mathematical discovery — even though only synthesis provides rigorous proof.',
      'He argued that all mathematical truths can be derived from exactly five axioms, anticipating Hilbert\'s axiomatization program.',
      'He argued that mathematical objects exist only as mental constructions, anticipating Brouwer\'s intuitionism.',
      'He argued that mathematical truth is established by consensus of authorities, not by individual proof.'
    ],
    correctIndex: 0,
    explanation: 'Ibn Sinan\'s methodological treatise distinguishes between the "art of finding" (analysis/heuristics) and the "art of proving" (synthesis/rigor). He advocated that mathematicians should first discover results by working backward (analysis), then present them rigorously by working forward (synthesis) — a methodology still taught today as "analysis-synthesis" in problem-solving.',
    realWorld: 'This analysis-synthesis methodology is the standard approach in mathematical research: explore freely (analysis), then formalize (synthesis). It\'s also the basis of Pólya\'s "How to Solve It."',
    hint: 'He said: discover by working backward, but prove by working forward — separating creativity from rigor.',
  },
];
