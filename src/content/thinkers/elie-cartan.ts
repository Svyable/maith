import type { Question } from '../types';

export const cartanQuestions: Question[] = [
  {
    id: 31120,
    topic: 'elie-cartan',
    difficulty: 'sota',
    question: 'Élie Cartan mathematically discovered "spinors" in 1913 using pure geometry, years before physicists realized they were real. Under what specific mathematical group do spinors continuously transform?',
    options: [
      'The double cover of the special orthogonal group, $\\text{Spin}(n)$, requiring a $720^\\circ$ rotation to return to their absolute original state.',
      'The fundamental projective linear group $\\text{PGL}(n, \\mathbb{C})$, heavily mapping lines in infinite-dimensional complex projective space.',
      'The strictly finite simple alternating group $A_5$, possessing the exact rotational symmetries of a discrete geometric icosahedron.',
      'The infinitely compact symplectic group $\\text{Sp}(n)$, preserving the absolute volume of purely continuous non-degenerate two-forms.'
    ],
    correctIndex: 0,
    explanation: 'Spinors are bizarre geometric objects. If you rotate a normal vector by $360^\\circ$, it returns to normal. Cartan discovered that spinors require a $720^\\circ$ rotation to return to their original state, meaning they transform under the "Spin group" (the double cover of the rotation group $SO(n)$).',
    realWorld: 'Decades after Cartan\'s geometric discovery, Paul Dirac found that the electrons in quantum mechanics are mathematically spinors—you literally have to rotate an electron twice to return it to its original quantum phase.',
    hint: 'They are objects that mathematically do not recognize they have completed a full circle until they have spun around twice.',
  },
  {
    id: 31121,
    topic: 'elie-cartan',
    difficulty: 'hard',
    question: 'Cartan massively advanced differential geometry by inventing the "method of moving frames" (repère mobile). How are the foundational structure equations expressed in this powerful geometric method?',
    options: [
      'Using a basis of highly abstract differential forms $\\omega^i$ and connection forms $\\omega^i_j$, satisfying the equation $d\\omega^i + \\omega^i_j \\wedge \\omega^j = \\Omega^i$.',
      'Using purely discrete, non-continuous tensor indices wrapped in strictly non-commutative summation notation, satisfying $R^i_{jkl} = \\partial_k \\Gamma^i_{jl} - \\dots$',
      'Using exclusively complex holomorphic variables integrated over closed singular chains to eliminate arbitrary local coordinate dependence.',
      'Using localized Taylor series expansions evaluated strictly at the topological singularities of the underlying pseudo-Riemannian metric.'
    ],
    correctIndex: 0,
    explanation: 'Instead of using fixed coordinates (like latitude and longitude), Cartan attached a completely independent "frame" of basis vectors to every single point on the manifold that "moves" and rotates as you slide across the surface. He then used his newly invented exterior calculus (differential forms $\\omega$ and wedge products $\\wedge$) to map how these frames twist.',
    realWorld: 'This completely replaced the insanely messy, index-heavy tensor calculus of early geometry, providing the exact, elegant mathematical language physicists needed to define Gauge Theory and Yang-Mills fields.',
    hint: 'It uses exterior derivatives ($d$) and wedge products ($\\wedge$) instead of massive lists of indexed tensors.',
  },
  {
    id: 31122,
    topic: 'elie-cartan',
    difficulty: 'easy',
    question: 'Cartan completed the monumental task of classifying all complex simple Lie algebras, expanding on Wilhelm Killing\'s work. He classified them into four continuous families ($A_n, B_n, C_n, D_n$) and exactly how many "exceptional" algebras?',
    options: [
      'Five exceptional algebras: $\\mathfrak{g}_2, \\mathfrak{f}_4, \\mathfrak{e}_6, \\mathfrak{e}_7, \\mathfrak{e}_8$.',
      'Three exceptional algebras: $\\mathfrak{p}_1, \\mathfrak{q}_2, \\mathfrak{r}_3$.',
      'Seven exceptional algebras corresponding perfectly to the imaginary units of the discrete split-octonions.',
      'An infinitely countable set of exceptional algebras bound strictly by the prime distribution of the Galois fields.'
    ],
    correctIndex: 0,
    explanation: 'Lie algebras are the mathematical DNA of continuous symmetries. Cartan rigorously proved that there are exactly four infinite families of these symmetries (related to rotating matrices), plus exactly five bizarre, incredibly complex "exceptional" symmetries that do not fit into any family.',
    realWorld: 'The largest of these exceptional symmetries, $E_8$, is a 248-dimensional monster that is currently being heavily investigated by string theorists as a possible unified mathematical framework for all fundamental forces in the universe.',
    hint: 'There are exactly five of these mathematical oddities, ending with the massive $E_8$.',
  },
  {
    id: 31123,
    topic: 'elie-cartan',
    difficulty: 'sota',
    question: 'Albert Einstein and Élie Cartan collaborated to extend General Relativity into "Einstein-Cartan theory." What critical geometric property did Cartan introduce to spacetime to couple it with the quantum spin of matter?',
    options: [
      'Torsion, allowing the underlying geometry of spacetime to actively "twist" in addition to curving.',
      'Non-orientability, utilizing localized Möbius-strip topologies to perfectly trap highly charged subatomic particles.',
      'Fractional dimensionality, allowing spacetime to mathematically compress below four dimensions at massive high-energy Planck scales.',
      'Strictly invariant Euclidean flatness, completely isolating the propagation of electromagnetic waves from the massive gravitational metric.'
    ],
    correctIndex: 0,
    explanation: 'Einstein\'s original relativity assumed spacetime can bend (curvature), but cannot twist (it has zero torsion). Cartan realized that since subatomic particles have inherent "spin," the spacetime they inhabit must geometrically twist to conserve angular momentum.',
    realWorld: 'While standard General Relativity ignores torsion (because it is invisibly small at macroscopic scales), Einstein-Cartan theory is currently the leading candidate for explaining how matter behaves inside the extreme density of a black hole, potentially preventing singularities from forming.',
    hint: 'He added a mathematical "twisting" motion to the fabric of the universe.',
  },
  {
    id: 31124,
    topic: 'elie-cartan',
    difficulty: 'hard',
    question: 'In the vast structural theory of Lie algebras, a "Cartan subalgebra" ($\\mathfrak{h}$) plays a massively central role. How is this highly specific subalgebra algebraically defined?',
    options: [
      'It is a strictly nilpotent subalgebra that is mathematically equal to its own normalizer within the greater Lie algebra $\\mathfrak{g}$.',
      'It is the absolute largest completely abelian ideal hiding within the structural bounds of the given Lie algebra.',
      'It is a unique associative center that fully commutes perfectly with every single element inside the continuous algebraic group.',
      'It is the exclusively compact geometric quotient generated directly by integrating over the totally non-degenerate Killing form.'
    ],
    correctIndex: 0,
    explanation: 'The Cartan subalgebra is the maximum set of matrices (elements) inside the algebra that all mutually commute with each other (or act nilpotently), acting as a "coordinate system" for the rest of the algebra. Its dimension dictates the "rank" of the algebra.',
    realWorld: 'Finding the Cartan subalgebra is the absolute first step computers take when algorithmically calculating the quantum states (root systems) of complex subatomic particle interactions.',
    hint: 'It is a self-normalizing space where all the algebraic elements play nicely and commute with each other.',
  }
];