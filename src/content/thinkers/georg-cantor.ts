import type { Question } from '../types';

export const georgCantorQuestions: Question[] = [
  {
    id: 20201, topic: 'georg-cantor', difficulty: 'easy',
    question: 'Cantor proved that the real numbers are uncountable using:',
    options: ['The diagonal argument — any list of reals misses at least one', 'Induction on the natural numbers', 'The pigeonhole principle', 'Euler\'s identity'],
    correctIndex: 0,
    explanation: 'Cantor\'s 1891 diagonal argument: given any list of reals, construct a new real differing from the n-th entry in its n-th digit. This real is not in the list, so no enumeration is complete.',
    realWorld: 'The diagonal argument proves uncomputability of the halting problem (Turing) and incompleteness (Gödel) — the same technique shows there are more problems than programs.',
    hint: 'Flip each diagonal digit — the resulting number cannot appear anywhere in the list.',
  },
  {
    id: 20202, topic: 'georg-cantor', difficulty: 'hard',
    question: 'Cantor\'s theorem states that for any set $S$, its power set $\\mathcal{P}(S)$ satisfies:',
    options: ['$|\\mathcal{P}(S)| > |S|$ — no surjection from $S$ to $\\mathcal{P}(S)$ exists', '$|\\mathcal{P}(S)| = 2|S|$', '$|\\mathcal{P}(S)| = |S|$ for infinite sets', '$|\\mathcal{P}(S)| < |S|^2$'],
    correctIndex: 0,
    explanation: 'Cantor proved this via a diagonal-style argument: if f: S → P(S), consider T = {x ∈ S : x ∉ f(x)}. Then T ≠ f(s) for any s, so f is not surjective. This creates an infinite hierarchy of infinities.',
    realWorld: 'Cantor\'s hierarchy of infinities underpins set-theoretic foundations of mathematics and type theory in programming languages (System F, dependent types).',
    hint: 'Consider the set of elements that are NOT in their own image — Russell\'s paradox is a cousin of this argument.',
  },
  {
    id: 420203, topic: 'georg-cantor', difficulty: 'sota',
    question: 'The Continuum Hypothesis (CH) — that there is no set with cardinality strictly between $\\aleph_0$ and $2^{\\aleph_0}$ — was shown to be:',
    options: ['Independent of ZFC: consistent (Gödel 1940) and not provable (Cohen 1963, forcing)', 'True, proved by Gödel in 1940', 'False, disproved by Cohen in 1963', 'Equivalent to the Axiom of Choice'],
    correctIndex: 0,
    explanation: 'Gödel showed CH is consistent with ZFC (constructible universe L), and Cohen invented forcing to show ¬CH is also consistent. CH is thus undecidable in standard set theory — the first natural example of independence.',
    realWorld: 'Forcing — Cohen\'s technique — revolutionized mathematical logic and is now used to prove independence results throughout mathematics, from measure theory to combinatorics.',
    hint: 'Neither provable nor disprovable from standard axioms — you can assume it or deny it consistently.',
  },
];
