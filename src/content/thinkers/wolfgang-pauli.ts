import type { Question } from '../types';

export const pauliQuestions: Question[] = [
  {
    id: 31165,
    topic: 'wolfgang-pauli',
    difficulty: 'easy',
    question: 'Wolfgang Pauli fundamentally structured the periodic table by proposing the Pauli Exclusion Principle. What absolute quantum restriction does this principle mathematically enforce?',
    options: [
      'It dictates that no two identical fermions (like electrons) can simultaneously occupy the exact same quantum state defined by their quantum numbers $(n, l, m_l, m_s)$ within a given system.',
      'It proves that the continuous wavelength of an emitted photon strictly prevents any two adjacent atomic orbitals from mathematically overlapping in absolute three-dimensional space.',
      'It mathematically restricts the absolute kinetic energy of any free-moving boson to a strictly quantized scalar limit preventing infinite ultraviolet ultraviolet catastrophe.',
      'It establishes that the strong nuclear force strictly repels identical protons from physically fusing unless their localized geometric spin vectors are perfectly mathematically aligned.'
    ],
    correctIndex: 0,
    explanation: 'Pauli realized that electrons cannot sit on top of each other. If one electron in an orbital is spinning "up" ($+1/2$), the other must spin "down" ($-1/2$). Because a third electron has no unique spin states left, it is mathematically forced to jump to a higher energy shell.',
    realWorld: 'This simple quantum traffic law is the entire reason chemistry exists. If electrons could share the same state, every atom would just collapse into a tiny, chemically inert sphere, and molecules (and life) could not physically form.',
    hint: 'It is the ultimate cosmic eviction notice: two identical particles cannot sit in the exact same mathematical chair at the same time.',
  },
  {
    id: 31166,
    topic: 'wolfgang-pauli',
    difficulty: 'hard',
    question: 'The Pauli spin matrices ($\\sigma_x, \\sigma_y, \\sigma_z$) are strictly $2 \\times 2$ complex Hermitian matrices. What foundational continuous Lie algebra do these matrices mathematically generate?',
    options: [
      'The Lie algebra $\\mathfrak{su}(2)$, strictly defining the non-commutative rotations of quantum spin-1/2 particles satisfying $[\\sigma_i, \\sigma_j] = 2i\\epsilon_{ijk}\\sigma_k$.',
      'The non-compact Lorentz algebra $\\mathfrak{so}(3,1)$, algebraically mapping the absolute continuous Lorentz transformations of special relativity.',
      'The strictly abelian Lie algebra $\\mathfrak{u}(1)$, which mathematically governs the local phase rotations inherent strictly to quantum electrodynamics.',
      'The exceptional Lie algebra $\\mathfrak{g}_2$, perfectly representing the absolute geometric symmetries of the discrete Cayley octonions.'
    ],
    correctIndex: 0,
    explanation: 'The Pauli matrices are the mathematical engines of quantum spin. They generate the $SU(2)$ group, which means they physically rotate a quantum state in Hilbert space. Because they do not commute ($xy \\neq yx$), measuring spin on the X-axis completely destroys your knowledge of the spin on the Y-axis.',
    realWorld: 'These exact $2 \\times 2$ matrices are the fundamental mathematical code used by modern quantum computers to manipulate the quantum states of single qubits.',
    hint: 'They are the mathematical gears that physically rotate a quantum particle\'s internal arrow, adhering strictly to the non-commutative rules of 3D space.',
  },
  {
    id: 31167,
    topic: 'wolfgang-pauli',
    difficulty: 'sota',
    question: 'In 1940, Pauli derived the Spin-Statistics Theorem strictly from the axioms of relativistic quantum field theory. What profoundly rigid correlation does this theorem mathematically prove?',
    options: [
      'It strictly proves that particles with half-integer spin must obey Fermi-Dirac statistics (fermions), while particles with integer spin must obey Bose-Einstein statistics (bosons).',
      'It proves that the continuous spin vector of a highly charged particle strictly dictates the geometric trajectory of its absolute radioactive alpha decay emission.',
      'It mathematically dictates that the localized quantum spin of any massive particle exponentially decays into pure heat strictly proportional to its absolute thermodynamic entropy.',
      'It asserts that identically charged particles will naturally align their spin states in strict proportion to the ambient geometric density of the local Minkowski vacuum.'
    ],
    correctIndex: 0,
    explanation: 'This theorem is one of the deepest truths in physics. Pauli proved that if you merge relativity and quantum mechanics, particles mathematically fall into two strict camps: Fermions (matter, half-spin, hate each other) and Bosons (force carriers, integer spin, love to clump together).',
    realWorld: 'This mathematical theorem explains why lasers work (bosons clumping into a single beam) and why solid objects don\'t pass through each other (fermions refusing to occupy the same space).',
    hint: 'It proves that the "spin" number of a particle directly determines whether it acts like anti-social matter or hyper-social energy.',
  },
  {
    id: 31168,
    topic: 'wolfgang-pauli',
    difficulty: 'hard',
    question: 'To save the absolute laws of conservation of energy and momentum during beta decay, Pauli made a "desperate remedy." What physical entity did he mathematically propose the existence of in 1930?',
    options: [
      'The neutrino, an incredibly light, electrically neutral particle that silently carries away the missing geometric kinetic energy and angular momentum.',
      'The positron, a positively charged antimatter counterpart to the continuous electron that geometrically neutralizes the localized vacuum charge.',
      'The localized axion, a strictly theoretical massive scalar field excitation that rapidly binds the decaying nucleus into a stable topological state.',
      'The massive W-boson, strictly mediating the sudden discrete transmission of the weak nuclear force at heavily compressed relativistic scales.'
    ],
    correctIndex: 0,
    explanation: 'During radioactive beta decay, the energy of the emitted electron was totally random, seemingly violating the absolute law of conservation of energy. Refusing to accept that energy was being destroyed, Pauli mathematically invented an invisible, ghost-like particle that stole the missing energy. He called it the neutrino.',
    realWorld: 'Neutrinos were so elusive that Pauli famously bet a case of champagne they would never be detected. They were finally observed in 1956, proving his mathematical "desperation" was completely correct.',
    hint: 'He invented an invisible "ghost" particle just to balance the checkbook of conservation of energy.',
  },
  {
    id: 31169,
    topic: 'wolfgang-pauli',
    difficulty: 'easy',
    question: 'Despite his legendary brilliance as a theoretical mathematical physicist, Pauli was notoriously feared by experimental physicists due to the "Pauli Effect." What was this highly documented phenomenon?',
    options: [
      'Highly sensitive experimental equipment would inexplicably break, shatter, or completely malfunction the moment Pauli physically walked into the laboratory.',
      'He possessed an uncanny ability to instantly identify mathematical sign errors in massive chalk equations just by casually glancing at the blackboard from afar.',
      'Any complex mathematical model he touched would inevitably simplify into a trivial tautology, stripping the physical theory of all predictive value.',
      'He rigorously mathematically proved that highly calibrated experimental sensors naturally generate spontaneous quantum noise strictly to evade his measurements.'
    ],
    correctIndex: 0,
    explanation: 'The "Pauli Effect" was a running joke (and genuine superstition) among the greatest physicists of the 20th century. Pauli was such a pure theorist that his mere physical proximity seemed to destroy actual physical experiments. Once, a massive explosion in a lab in Göttingen was jokingly blamed on Pauli—who was later confirmed to be passing through the local train station at the exact time of the blast.',
    realWorld: 'Pauli\'s friend Otto Stern (who won a Nobel Prize for experimental physics) officially banned Pauli from ever entering his laboratory in Hamburg out of genuine fear for his expensive equipment.',
    hint: 'He was a theoretical genius, but a walking disaster for anything made of glass and wires.',
  }
];