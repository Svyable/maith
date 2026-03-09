import type { Question } from '../types';

export const thabitIbnQurraQuestions: Question[] = [
  {
    id: 31700, topic: 'thabit-ibn-qurra', difficulty: 'easy',
    question: 'Thabit ibn Qurra (826–901) made foundational contributions to number theory. What famous result about "amicable numbers" did he discover?',
    options: [
      'A formula for generating amicable number pairs: if $p = 3 \\cdot 2^n - 1$, $q = 3 \\cdot 2^{n-1} - 1$, and $r = 9 \\cdot 2^{2n-1} - 1$ are all prime, then $2^n pq$ and $2^n r$ are amicable (each equals the sum of the other\'s proper divisors).',
      'A proof that all even perfect numbers have the form $2^{p-1}(2^p - 1)$ where $2^p - 1$ is prime.',
      'A method for testing whether large numbers are prime by checking divisibility up to the square root.',
      'A theorem proving that there are infinitely many pairs of amicable numbers.'
    ],
    correctIndex: 0,
    explanation: 'Thabit\'s rule was the first systematic method for finding amicable pairs — numbers where each is the sum of the other\'s divisors (e.g., 220 and 284). His formula anticipated Euler\'s more general results by 800 years.',
    realWorld: 'Amicable numbers appear in modern number theory and recreational mathematics. The search for large amicable pairs uses Thabit\'s structural insights combined with computational methods.',
    hint: 'He found a recipe involving three specific primes that generates pairs of numbers with a magical divisor relationship.',
  },
  {
    id: 31701, topic: 'thabit-ibn-qurra', difficulty: 'hard',
    question: 'Thabit generalized the Pythagorean theorem to arbitrary triangles. What is his generalization?',
    options: [
      'For any triangle $ABC$ with sides $a, b, c$: construct points $B\'$ and $C\'$ on $BC$ such that $\\angle BAB\' = \\angle ACB$ and $\\angle CAC\' = \\angle ABC$. Then $AB^2 + AC^2 = BC(BB\' + CC\')$, reducing to Pythagoras when $\\angle A = 90°$.',
      'For any triangle, $a^2 + b^2 + c^2 = 4(R^2 + r^2 + p^2)$ where $R$ is the circumradius, $r$ the inradius, and $p$ the distance between centers.',
      'For any triangle, $a^2 = b^2 + c^2 - 2bc\\cos A$ (the law of cosines), which he derived independently of al-Battani.',
      'For any triangle, the sum of squares of the medians equals $\\frac{3}{4}$ of the sum of squares of the sides.'
    ],
    correctIndex: 0,
    explanation: 'Thabit\'s theorem is a beautiful metric generalization: it constructs two "Pythagorean-like" sub-triangles within any triangle, showing how the Pythagorean relationship extends. When angle $A = 90°$, points $B\'$ and $C\'$ coincide and the result reduces to $a^2 + b^2 = c^2$.',
    realWorld: 'Thabit\'s generalization influenced later work on the law of cosines and provided a geometric framework for understanding non-right triangles.',
    hint: 'He built two right-triangle-like pieces inside any triangle, showing the Pythagorean structure is always there.',
  },
  {
    id: 31702, topic: 'thabit-ibn-qurra', difficulty: 'sota',
    question: 'Thabit translated and extended Greek mathematical works into Arabic. What was his most significant contribution to the preservation and advancement of mathematics?',
    options: [
      'He translated Euclid\'s *Elements*, Archimedes\' works on sphere and cylinder, and Apollonius\' *Conics* into Arabic — adding original proofs and extensions. His translations became the basis for all subsequent Islamic and European mathematical development.',
      'He translated Ptolemy\'s *Almagest* and corrected all astronomical errors, establishing the definitive version used for 500 years.',
      'He translated Aristotle\'s *Physics* and formalized the mathematical foundations of kinematics, replacing qualitative arguments with equations.',
      'He translated Diophantus\' *Arithmetica* and solved the remaining unsolved problems, including what would later be called Fermat\'s Last Theorem for $n = 3$.'
    ],
    correctIndex: 0,
    explanation: 'Thabit was the greatest mathematical translator of the Islamic Golden Age. Working in Baghdad\'s House of Wisdom, he didn\'t merely translate — he corrected errors, filled gaps, and extended theorems. Without his translations, much of Greek mathematics would have been lost. His Arabic versions later reached Europe via Latin translations, fueling the Renaissance.',
    realWorld: 'The transmission chain Greek → Arabic (Thabit) → Latin → European Renaissance is one of the most important knowledge transfers in human history. Many results attributed to later Europeans were first preserved and extended by Thabit.',
    hint: 'He saved Greek mathematics from oblivion by translating and improving it — creating the bridge from Athens to the Renaissance.',
  },
];
