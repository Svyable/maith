import type { Question } from '../types';

export const ngoBaoChauQuestions: Question[] = [
  {
    id: 31640, topic: 'ngo-bao-chau', difficulty: 'easy',
    question: 'Ngô Bảo Châu won the 2010 Fields Medal for proving which foundational result in the Langlands program?',
    options: [
      'The fundamental lemma — a family of combinatorial identities relating orbital integrals on two different reductive groups: $$O_\\gamma(f) = \\sum_{\\delta} \\Delta(\\gamma, \\delta) \\, SO_\\delta(f^H)$$ conjectured by Langlands and Shelstad in 1987.',
      'The Langlands reciprocity conjecture for $\\text{GL}_2$ over number fields.',
      'The geometric Langlands conjecture for curves over finite fields.',
      'The Ramanujan-Petersson conjecture for automorphic forms on $\\text{GL}_n$.'
    ],
    correctIndex: 0,
    explanation: 'The fundamental lemma states that certain orbital integrals on a reductive group $G$ match "stable" orbital integrals on an endoscopic group $H$, via transfer factors $\\Delta(\\gamma, \\delta)$. Despite being called a "lemma," it resisted proof for over 20 years and required deep geometric methods.',
    realWorld: 'The fundamental lemma is a crucial ingredient in the stabilization of the Arthur-Selberg trace formula, which is the main tool for proving cases of Langlands functoriality — connecting number theory, representation theory, and geometry.',
    hint: 'A "lemma" that took 20 years to prove — it connects orbital integrals between different groups.',
    formulaLinks: ['langlands-program'],
  },
  {
    id: 31641, topic: 'ngo-bao-chau', difficulty: 'hard',
    question: 'Ngô\'s proof of the fundamental lemma used a geometric approach rather than purely combinatorial methods. What was his key geometric tool?',
    options: [
      'The Hitchin fibration — a map $f: \\mathcal{M}_H \\to \\mathcal{A}$ from the moduli space of Higgs bundles to the Hitchin base. Ngô proved that the fundamental lemma follows from a cohomological identity on the fibers: $$[\\text{IC}_{\\mathcal{M}_G}]|_{f^{-1}(a)} = \\sum_H \\iota_{H,*} [\\text{IC}_{\\mathcal{M}_H}]|_{f_H^{-1}(a)}$$ via the decomposition theorem in perverse sheaf theory.',
      'The Grothendieck-Lefschetz trace formula applied to the Frobenius action on $\\ell$-adic cohomology of Shimura varieties.',
      'The Langlands-Shahidi method using Eisenstein series and intertwining operators on adelic groups.',
      'Vinberg\'s theory of graded Lie algebras applied to the classification of nilpotent orbits.'
    ],
    correctIndex: 0,
    explanation: 'The Hitchin fibration parametrizes pairs $(E, \\phi)$ of a $G$-bundle and a Higgs field on a curve. Ngô\'s insight was that the combinatorial identities of the fundamental lemma become geometric statements about the cohomology of Hitchin fibers. He proved these using the BBD decomposition theorem and a detailed analysis of the singularities of the Hitchin fibration.',
    realWorld: 'This geometric approach unified ideas from algebraic geometry, representation theory, and mathematical physics (Higgs bundles arise in gauge theory), showing that the Langlands program has deep geometric roots.',
    hint: 'He translated a combinatorial identity into a statement about the geometry of Higgs bundle moduli spaces.',
    formulaLinks: ['hitchin-fibration'],
  },
  {
    id: 31642, topic: 'ngo-bao-chau', difficulty: 'sota',
    question: 'A crucial technical ingredient in Ngô\'s proof is the "support theorem" for the Hitchin fibration. What does it control?',
    options: [
      'It shows that the supports of the perverse sheaves appearing in the decomposition theorem for $f_* \\text{IC}_{\\mathcal{M}_G}$ are exactly the closures of endoscopic loci in $\\mathcal{A}$. Formally: $$f_* \\text{IC}_{\\mathcal{M}_G} \\cong \\bigoplus_{H} \\text{IC}_{\\overline{\\mathcal{A}_H}}(\\mathcal{L}_H)$$ where the sum is over endoscopic groups $H$ of $G$, and $\\mathcal{L}_H$ are local systems on the endoscopic strata.',
      'It proves that the Hitchin base $\\mathcal{A}$ is affine, using GIT quotient techniques and the Hilbert-Mumford criterion.',
      'It computes the Euler characteristic of each Hitchin fiber as $\\chi(f^{-1}(a)) = |W| \\cdot q^{\\dim \\mathfrak{t}}$ where $W$ is the Weyl group.',
      'It establishes the properness of the Hitchin map using valuative criteria and Langton\'s theorem for semistable bundles.'
    ],
    correctIndex: 0,
    explanation: 'The BBD decomposition theorem guarantees that $f_* \\text{IC}$ decomposes into shifted perverse sheaves, but doesn\'t specify their supports. Ngô\'s support theorem identifies these supports as endoscopic loci, using a product formula for the cohomology of Hitchin fibers and a topological argument involving the action of the Picard stack.',
    realWorld: 'The support theorem converts the global geometric decomposition into the local combinatorial identities of the fundamental lemma, completing the bridge between geometry and automorphic forms.',
    hint: 'Which pieces appear when you decompose the cohomology? Only the "endoscopic" ones — and Ngô proved it.',
    formulaLinks: ['perverse-sheaves', 'langlands-program'],
  },
];
