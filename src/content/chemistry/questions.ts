import type { Question } from '../types';

export const chemistryQuestions: Question[] = [
  // ── Physical Chemistry ──────────────────────────────────────
  {
    id: 40001, topic: 'physical-chemistry', difficulty: 'easy',
    question: 'The ideal gas law is expressed as:',
    options: ['$PV = nRT$', '$PV = nR/T$', '$P = nRT/V^2$', '$PV^2 = nRT$'],
    correctIndex: 0,
    explanation: 'The ideal gas law $PV = nRT$ relates pressure, volume, amount, and temperature of an ideal gas.',
    realWorld: 'Used in engineering to design pressurized containers, HVAC systems, and chemical reactors.',
    hint: 'Each variable represents a fundamental thermodynamic quantity of a gas.',
  },
  {
    id: 40002, topic: 'physical-chemistry', difficulty: 'hard',
    question: 'The Clausius-Clapeyron equation relates:',
    options: ['Vapor pressure and temperature during phase transitions', 'Reaction rate and concentration', 'Entropy and enthalpy at equilibrium', 'Diffusion rate and molecular weight'],
    correctIndex: 0,
    explanation: 'The Clausius-Clapeyron equation $\\frac{dP}{dT} = \\frac{\\Delta H_{vap}}{T \\Delta V}$ describes how vapor pressure changes with temperature.',
    realWorld: 'Essential for weather prediction, distillation processes, and understanding boiling points at altitude.',
    hint: 'Think about what happens to boiling point when you change altitude (pressure).',
  },
  {
    id: 40003, topic: 'physical-chemistry', difficulty: 'sota',
    question: 'In transition state theory, the rate constant $k$ is given by $k = \\frac{k_B T}{h} e^{-\\Delta G^\\ddagger / RT}$. What does $\\Delta G^\\ddagger$ represent?',
    options: ['Gibbs free energy of activation', 'Enthalpy of the products', 'Entropy of the universe', 'Kinetic energy of reactants'],
    correctIndex: 0,
    explanation: 'The Eyring equation uses the Gibbs free energy of activation $\\Delta G^\\ddagger$, which is the energy barrier between reactants and the transition state.',
    realWorld: 'Pharmaceutical companies use this to predict drug stability and optimize catalytic reaction conditions.',
    hint: 'The double dagger symbol ‡ denotes the transition state in chemical kinetics.',
  },
  // ── Organic Chemistry ──────────────────────────────────────
  {
    id: 40004, topic: 'organic-chemistry', difficulty: 'easy',
    question: 'What type of reaction is the addition of HBr to an alkene?',
    options: ['Electrophilic addition', 'Nucleophilic substitution', 'Elimination', 'Free radical substitution'],
    correctIndex: 0,
    explanation: 'HBr adds across the double bond of an alkene via electrophilic addition, following Markovnikov\'s rule.',
    realWorld: 'Electrophilic additions are key steps in polymer synthesis and pharmaceutical manufacturing.',
    hint: 'The electron-rich double bond attacks the electrophile (H⁺).',
  },
  {
    id: 40005, topic: 'organic-chemistry', difficulty: 'hard',
    question: 'In an SN2 reaction, the stereochemistry of the product is:',
    options: ['Inverted (Walden inversion)', 'Retained', 'Racemized', 'Randomly assigned'],
    correctIndex: 0,
    explanation: 'SN2 reactions proceed via backside attack, leading to complete inversion of stereochemistry at the carbon center.',
    realWorld: 'Understanding stereochemistry is critical in drug design — the wrong enantiomer can be inactive or harmful.',
    hint: 'The nucleophile attacks from behind the leaving group, like flipping an umbrella.',
  },
  {
    id: 40006, topic: 'organic-chemistry', difficulty: 'sota',
    question: 'The Woodward-Hoffmann rules predict the stereochemical outcome of pericyclic reactions based on:',
    options: ['Conservation of orbital symmetry', 'Thermodynamic stability of products', 'Steric hindrance', 'Solvent polarity'],
    correctIndex: 0,
    explanation: 'The Woodward-Hoffmann rules use frontier molecular orbital theory to predict whether pericyclic reactions proceed suprafacially or antarafacially.',
    realWorld: 'These rules guide the synthesis of complex natural products like vitamin B12 (Woodward\'s landmark synthesis).',
    hint: 'Think about HOMO-LUMO interactions and whether the reaction is thermally or photochemically allowed.',
  },
  // ── Inorganic Chemistry ──────────────────────────────────────
  {
    id: 40007, topic: 'inorganic-chemistry', difficulty: 'easy',
    question: 'Crystal field theory predicts that octahedral d⁶ complexes with strong-field ligands are:',
    options: ['Low-spin (diamagnetic)', 'High-spin (paramagnetic)', 'Always colored', 'Always tetrahedral'],
    correctIndex: 0,
    explanation: 'Strong-field ligands cause a large crystal field splitting $\\Delta_o$, making it energetically favorable to pair electrons rather than occupy higher orbitals.',
    realWorld: 'Fe²⁺ in hemoglobin is a low-spin d⁶ complex when O₂ binds, which is why oxygenated blood is bright red.',
    hint: 'Strong field = large splitting = electrons prefer to pair up in lower orbitals.',
  },
  {
    id: 40008, topic: 'inorganic-chemistry', difficulty: 'hard',
    question: 'In Wade\'s rules, a closo borane cluster $B_nH_n^{2-}$ has how many skeletal electron pairs?',
    options: ['$n + 1$', '$n$', '$n + 2$', '$2n$'],
    correctIndex: 0,
    explanation: 'Wade\'s rules state that closo clusters have $n + 1$ skeletal electron pairs, forming a closed deltahedron with $n$ vertices.',
    realWorld: 'Wade\'s rules predict structures of borane clusters used in boron neutron capture therapy for cancer treatment.',
    hint: 'Closo = closed polyhedron. Count the bonding pairs needed for the cage.',
  },
  {
    id: 40009, topic: 'inorganic-chemistry', difficulty: 'sota',
    question: 'The isolobal analogy relates organometallic fragments to main-group species based on:',
    options: ['Similar frontier orbital symmetry and electron count', 'Identical atomic radii', 'Same oxidation states', 'Equal electronegativity'],
    correctIndex: 0,
    explanation: 'Hoffmann\'s isolobal analogy states that molecular fragments with similar frontier orbital properties (symmetry, energy, electron count) are isolobal and can substitute for each other.',
    realWorld: 'Used to predict the stability of novel organometallic catalysts in industrial chemistry.',
    hint: 'Roald Hoffmann showed that CH₃ and Mn(CO)₅ have analogous frontier orbitals.',
  },
  // ── Chemistry expansion wave 1 ─────────────────────────────
  {
      "id": 40010,
      "topic": "physical-chemistry",
      "difficulty": "easy",
      "question": "For a reversible process, the thermodynamic definition of an infinitesimal entropy change is:",
      "options": [
        "$dS = \\delta q_{rev}/T$",
        "$dS = \\delta q_{rev}T$",
        "$dS = \\delta w_{rev}/T$",
        "$dS = C_pT$"
      ],
      "correctIndex": 0,
      "explanation": "For a reversible path, entropy is defined by $dS = \\delta q_{rev}/T$. Entropy is a state function even though the reversible heat used to evaluate the change depends on the chosen reversible path.",
      "realWorld": "Entropy balances are used to quantify irreversibility in power cycles, refrigeration systems, batteries, and chemical separations.",
      "hint": "Entropy change connects reversible heat transfer to absolute temperature.",
      "reviewedAt": "2026-09-19"
    },
    {
      "id": 40011,
      "topic": "physical-chemistry",
      "difficulty": "easy",
      "question": "At constant temperature for a fixed amount of an ideal gas, Boyle’s law states that:",
      "options": [
        "Pressure is inversely proportional to volume",
        "Pressure is directly proportional to volume",
        "Volume is inversely proportional to temperature",
        "Pressure is independent of volume"
      ],
      "correctIndex": 0,
      "explanation": "From the ideal gas law $PV=nRT$, holding $n$ and $T$ constant gives $PV=\\text{constant}$, so doubling the volume halves the pressure.",
      "realWorld": "Boyle’s law underlies syringe operation, piston compression, breathing mechanics, and pressure-volume calibration.",
      "hint": "Hold $nRT$ fixed in $PV=nRT$.",
      "reviewedAt": "2026-09-19"
    },
    {
      "id": 40012,
      "topic": "physical-chemistry",
      "difficulty": "hard",
      "question": "For a chemical reaction at constant temperature and pressure, equilibrium is reached when:",
      "options": [
        "The reaction Gibbs energy satisfies $\\Delta_r G = 0$",
        "The standard Gibbs energy satisfies $\\Delta_r G^\\circ = 0$ for every reaction",
        "The enthalpy change is zero",
        "All reactant and product concentrations are equal"
      ],
      "correctIndex": 0,
      "explanation": "At equilibrium the reaction Gibbs energy is zero: $\\Delta_r G = \\Delta_r G^\\circ + RT\\ln Q = 0$, which implies $Q=K$. The standard Gibbs energy generally is not zero; it determines the equilibrium constant.",
      "realWorld": "This relation is the basis for predicting equilibrium compositions in reactors, electrochemical cells, geochemical systems, and atmospheric chemistry.",
      "hint": "At equilibrium there is no net thermodynamic driving force for the reaction.",
      "reviewedAt": "2026-09-19"
    },
    {
      "id": 40013,
      "topic": "physical-chemistry",
      "difficulty": "hard",
      "question": "In the Debye–Hückel limiting law for dilute electrolyte solutions, the leading dependence of an ion’s activity coefficient is:",
      "options": [
        "$\\log \\gamma_i \\propto -z_i^2\\sqrt{I}$",
        "$\\log \\gamma_i \\propto +z_i I^2$",
        "$\\gamma_i = 1+z_iI$ exactly at all concentrations",
        "$\\log \\gamma_i \\propto -I/z_i^2$"
      ],
      "correctIndex": 0,
      "explanation": "The Debye–Hückel limiting law gives $\\log_{10}\\gamma_i=-A z_i^2\\sqrt{I}$ at sufficiently low ionic strength $I$. The stronger dependence on charge magnitude reflects electrostatic interactions with the ionic atmosphere.",
      "realWorld": "Activity corrections matter in electrochemistry, seawater chemistry, pharmaceutical formulations, and equilibrium calculations for ionic solutions.",
      "hint": "The limiting law scales with charge squared and the square root of ionic strength.",
      "reviewedAt": "2026-09-19"
    },
    {
      "id": 40014,
      "topic": "physical-chemistry",
      "difficulty": "sota",
      "question": "Why is E(3)-equivariance useful in neural-network interatomic potentials such as NequIP?",
      "options": [
        "It makes predicted scalar energies invariant while vector and tensor features transform consistently under rotations, reflections, and translations",
        "It forces every atom to have the same chemical identity",
        "It removes all angular information from the local atomic environment",
        "It guarantees exact quantum-mechanical energies without training data"
      ],
      "correctIndex": 0,
      "explanation": "Molecular energies should not change when a structure is rigidly translated or rotated, while forces and geometric features should transform in the corresponding way. E(3)-equivariant architectures build those physical symmetries into the model rather than learning them from data augmentation alone.",
      "realWorld": "Equivariant interatomic potentials can approach ab-initio accuracy with much lower computational cost, enabling longer and larger molecular-dynamics simulations.",
      "hint": "Ask which physical quantities should stay unchanged under a rigid rotation and which should rotate with the molecule.",
      "sources": [
        {
          "title": "E(3)-equivariant graph neural networks for data-efficient and accurate interatomic potentials",
          "url": "https://doi.org/10.1038/s41467-022-29939-5",
          "publisher": "Nature Communications",
          "year": 2022
        }
      ],
      "reviewedAt": "2026-09-19",
      "factualAsOf": "2026-09-19"
    },
    {
      "id": 40015,
      "topic": "physical-chemistry",
      "difficulty": "sota",
      "question": "The main architectural idea behind MACE interatomic potentials is to:",
      "options": [
        "Represent higher-order many-body correlations with equivariant messages rather than relying only on repeated pairwise message passing",
        "Replace atomic coordinates with one-hot element labels and discard geometry",
        "Fit a separate neural network for every molecule with no shared parameters",
        "Predict only total energy and never atomic forces"
      ],
      "correctIndex": 0,
      "explanation": "MACE extends equivariant message-passing models with higher-order messages that encode many-body correlations directly. This increases expressivity while allowing fewer message-passing iterations than architectures that build many-body information only through repeated two-body interactions.",
      "realWorld": "Higher-order equivariant force fields are increasingly used to accelerate atomistic simulation in chemistry and materials science while retaining physically correct rotational behavior.",
      "hint": "The advance is not simply more layers; it is richer many-body information inside each equivariant message.",
      "sources": [
        {
          "title": "MACE: Higher Order Equivariant Message Passing Neural Networks for Fast and Accurate Force Fields",
          "url": "https://papers.neurips.cc/paper_files/paper/2022/hash/4a36c3c51af11ed9f34615b81edb5bbc-Abstract-Conference.html",
          "publisher": "NeurIPS",
          "year": 2022
        }
      ],
      "reviewedAt": "2026-09-19",
      "factualAsOf": "2026-09-19"
    },
    {
      "id": 40016,
      "topic": "organic-chemistry",
      "difficulty": "easy",
      "question": "A planar, cyclic, fully conjugated molecule is aromatic under Hückel’s rule when it contains:",
      "options": [
        "$4n+2$ π electrons",
        "$4n$ π electrons",
        "Exactly 2 π electrons regardless of ring size",
        "An even number of sigma bonds"
      ],
      "correctIndex": 0,
      "explanation": "Hückel aromaticity requires a planar cyclic conjugated π system containing $4n+2$ π electrons, where $n$ is a non-negative integer. Systems with $4n$ π electrons are antiaromatic if they remain planar and fully conjugated.",
      "realWorld": "Aromaticity helps explain the stability, spectra, and reactivity of benzene, heteroaromatics, pharmaceuticals, dyes, and conducting organic materials.",
      "hint": "Benzene has six π electrons; fit that number to the rule.",
      "reviewedAt": "2026-09-19"
    },
    {
      "id": 40017,
      "topic": "organic-chemistry",
      "difficulty": "easy",
      "question": "Why is the carbon atom of a carbonyl group typically electrophilic?",
      "options": [
        "The C=O bond is polarized toward oxygen, leaving partial positive charge on carbon",
        "Carbon is always more electronegative than oxygen",
        "The carbonyl π bond contains no electrons",
        "Oxygen donates all of its lone-pair density permanently to carbon"
      ],
      "correctIndex": 0,
      "explanation": "Oxygen is more electronegative than carbon, so the C=O bond is polarized. Resonance descriptions also place positive character on carbon, making the carbonyl carbon susceptible to nucleophilic attack.",
      "realWorld": "Carbonyl electrophilicity underlies aldehyde and ketone additions, acyl substitutions, carbohydrate chemistry, and many steps in pharmaceutical synthesis.",
      "hint": "Compare the electronegativities of carbon and oxygen.",
      "reviewedAt": "2026-09-19"
    },
    {
      "id": 40018,
      "topic": "organic-chemistry",
      "difficulty": "hard",
      "question": "Which conditions most strongly favor formation of the kinetic enolate of an unsymmetrical ketone?",
      "options": [
        "A strong bulky base such as LDA at low temperature under irreversible conditions",
        "A small weak base at high temperature with long equilibration",
        "Strong acid in water followed by heating",
        "A radical initiator under oxygen"
      ],
      "correctIndex": 0,
      "explanation": "The kinetic enolate forms fastest by removing the more accessible proton. A strong bulky base such as LDA at low temperature suppresses equilibration, so the less substituted enolate can dominate even if it is not the most thermodynamically stable.",
      "realWorld": "Kinetic versus thermodynamic enolate control is central to regioselective C–C bond formation in complex-molecule and pharmaceutical synthesis.",
      "hint": "Kinetic control favors the proton that can be removed fastest, before equilibration occurs.",
      "reviewedAt": "2026-09-19"
    },
    {
      "id": 40019,
      "topic": "organic-chemistry",
      "difficulty": "hard",
      "question": "A defining stereochemical feature of the Diels–Alder reaction is that it is:",
      "options": [
        "Stereospecific: relative substituent geometry in the diene and dienophile is transferred predictably to the cyclohexene product",
        "A stepwise radical process that completely scrambles stereochemistry",
        "Restricted to antiaromatic reactants",
        "Always thermodynamically controlled and therefore always gives the exo product"
      ],
      "correctIndex": 0,
      "explanation": "The Diels–Alder reaction is a concerted pericyclic cycloaddition. Because bonds reorganize through a cyclic transition state without freely rotating intermediates, the relative stereochemistry of substituents is predictably retained in the product.",
      "realWorld": "Its stereospecificity makes the Diels–Alder reaction a powerful way to build six-membered rings and multiple stereocenters in natural-product and drug synthesis.",
      "hint": "There is no long-lived intermediate in which the reacting fragments can freely rotate.",
      "reviewedAt": "2026-09-19"
    },
    {
      "id": 40020,
      "topic": "organic-chemistry",
      "difficulty": "sota",
      "question": "What makes an excited-state photoredox catalyst chemically different from the same catalyst in its ground state?",
      "options": [
        "Photoexcitation changes its redox potentials, allowing single-electron oxidation or reduction pathways that may be inaccessible in the ground state",
        "Photoexcitation permanently changes the catalyst into a different element",
        "The excited catalyst can transfer only two electrons at a time",
        "Visible light removes the need for any thermodynamic driving force"
      ],
      "correctIndex": 0,
      "explanation": "Absorbing a photon creates an electronically excited state with different free energy and therefore different oxidation and reduction potentials. That can enable selective single-electron transfer and access radical intermediates under comparatively mild conditions.",
      "realWorld": "Modern photoredox chemistry enables late-stage functionalization, cross-coupling, radical relay chemistry, and reactions driven by visible or increasingly lower-energy light.",
      "hint": "An absorbed photon changes the energy of the catalyst before electron transfer occurs.",
      "sources": [
        {
          "title": "Low-energy photoredox catalysis",
          "url": "https://doi.org/10.1038/s41570-024-00663-6",
          "publisher": "Nature Reviews Chemistry",
          "year": 2025
        }
      ],
      "reviewedAt": "2026-09-19",
      "factualAsOf": "2026-09-19"
    },
    {
      "id": 40021,
      "topic": "organic-chemistry",
      "difficulty": "sota",
      "question": "Why can combining electrochemistry with photoredox catalysis broaden the range of accessible organic transformations?",
      "options": [
        "The electrode can supply or remove redox equivalents while photoexcitation creates highly reactive excited states, reducing reliance on extreme chemical oxidants or reductants",
        "The electrode converts every reaction into a thermal pericyclic process",
        "The photocatalyst prevents all radical intermediates from forming",
        "The combination makes solvent polarity irrelevant to reaction design"
      ],
      "correctIndex": 0,
      "explanation": "Photoelectrochemical strategies split the energetic task between an electrode and a photoexcited catalyst. Electrochemical control supplies redox equivalents, while the excited state opens high-energy single-electron pathways, often allowing milder and more tunable reaction conditions.",
      "realWorld": "Photoelectrochemical methods are being explored for late-stage functionalization and scalable synthesis where stoichiometric redox reagents create waste or poor selectivity.",
      "hint": "One component controls electron flow; the other uses photon energy to access a reactive excited state.",
      "sources": [
        {
          "title": "Synergistic Photoredox and Electrochemical Catalysis in Organic Synthesis and Late-Stage Functionalizations",
          "url": "https://doi.org/10.1002/cctc.202301537",
          "publisher": "ChemCatChem",
          "year": 2024
        }
      ],
      "reviewedAt": "2026-09-19",
      "factualAsOf": "2026-09-19"
    },
    {
      "id": 40022,
      "topic": "inorganic-chemistry",
      "difficulty": "easy",
      "question": "What is the oxidation state of iron in $[Fe(CN)_6]^{4-}$?",
      "options": [
        "+2",
        "+3",
        "0",
        "-2"
      ],
      "correctIndex": 0,
      "explanation": "Each cyanide ligand is $-1$, so six contribute $-6$. If the complex has charge $-4$, iron must contribute $+2$: $x-6=-4$, giving $x=+2$.",
      "realWorld": "Oxidation-state bookkeeping helps predict redox chemistry, magnetic behavior, and electron transfer in coordination compounds.",
      "hint": "Let the oxidation state be $x$ and sum it with six $CN^-$ ligands to equal the overall charge.",
      "reviewedAt": "2026-09-19"
    },
    {
      "id": 40023,
      "topic": "inorganic-chemistry",
      "difficulty": "easy",
      "question": "What is the coordination number of cobalt in $[Co(NH_3)_6]^{3+}$?",
      "options": [
        "6",
        "3",
        "9",
        "12"
      ],
      "correctIndex": 0,
      "explanation": "Each ammonia molecule is a monodentate ligand that donates one lone pair to cobalt. Six ammonia ligands therefore give cobalt a coordination number of six.",
      "realWorld": "Coordination number is a first step toward predicting complex geometry, ligand-field splitting, reactivity, and substitution pathways.",
      "hint": "Count the donor atoms directly bonded to the metal center.",
      "reviewedAt": "2026-09-19"
    },
    {
      "id": 40024,
      "topic": "inorganic-chemistry",
      "difficulty": "hard",
      "question": "Why do many octahedral Cu(II) complexes show a pronounced Jahn–Teller distortion?",
      "options": [
        "The d9 electron configuration leaves uneven occupancy of degenerate $e_g$ orbitals, so distortion lowers the electronic energy",
        "Cu(II) has a completely filled d shell that cannot support octahedral symmetry",
        "All six-coordinate complexes must become tetrahedral at room temperature",
        "The distortion is caused only by ligand mass, not electronic structure"
      ],
      "correctIndex": 0,
      "explanation": "Octahedral Cu(II) is d9, giving unequal occupation of the degenerate $d_{x^2-y^2}$ and $d_{z^2}$-derived $e_g$ orbitals. A tetragonal elongation or compression removes the degeneracy and lowers the total electronic energy.",
      "realWorld": "Jahn–Teller distortions influence spectra, EPR signatures, ligand exchange, battery materials, and copper enzyme active sites.",
      "hint": "Look for a degenerate set of orbitals that is occupied asymmetrically.",
      "reviewedAt": "2026-09-19"
    },
    {
      "id": 40025,
      "topic": "inorganic-chemistry",
      "difficulty": "hard",
      "question": "Using neutral electron counting, how many valence electrons are assigned to $Fe(CO)_5$?",
      "options": [
        "18",
        "8",
        "10",
        "20"
      ],
      "correctIndex": 0,
      "explanation": "Neutral Fe contributes 8 valence electrons, and each of five neutral CO ligands donates 2 electrons. The total is $8+5\\times2=18$, consistent with the 18-electron rule for many low-spin organometallic complexes.",
      "realWorld": "Electron counting is used to rationalize the stability and reactivity of organometallic catalysts for carbonylation, hydrogenation, olefin polymerization, and cross-coupling.",
      "hint": "Count 8 electrons from Fe and 2 from each CO ligand.",
      "reviewedAt": "2026-09-19"
    },
    {
      "id": 40026,
      "topic": "inorganic-chemistry",
      "difficulty": "sota",
      "question": "Why do some diamine-appended metal–organic frameworks show step-shaped CO₂ adsorption isotherms?",
      "options": [
        "CO₂ insertion into metal–amine bonds can propagate cooperatively to form ammonium carbamate chains, producing a threshold-like adsorption transition",
        "The framework irreversibly collapses after the first CO₂ molecule enters",
        "CO₂ is converted directly into elemental carbon inside every pore",
        "The adsorption step is caused only by capillary condensation of liquid CO₂ at room temperature"
      ],
      "correctIndex": 0,
      "explanation": "In diamine-appended frameworks such as variants of $M_2(dobpdc)$, CO₂ can insert into metal–amine bonds and reorganize the amines into chains of ammonium carbamate. The cooperative mechanism produces a sharp adsorption step whose pressure can be tuned by framework chemistry.",
      "realWorld": "Cooperative adsorption is attractive for carbon capture because large working capacities can be accessed over comparatively small pressure or temperature swings.",
      "hint": "The key word is cooperative: one binding event makes neighboring binding events more favorable.",
      "sources": [
        {
          "title": "Cooperative insertion of CO2 in diamine-appended metal-organic frameworks",
          "url": "https://doi.org/10.1038/nature14327",
          "publisher": "Nature",
          "year": 2015
        }
      ],
      "reviewedAt": "2026-09-19",
      "factualAsOf": "2026-09-19"
    },
    {
      "id": 40027,
      "topic": "inorganic-chemistry",
      "difficulty": "sota",
      "question": "In Fe–N–C single-atom catalysts for the oxygen reduction reaction, why is the local coordination environment around Fe a major design variable?",
      "options": [
        "Neighboring N atoms and heteroatom dopants tune the Fe center’s electronic structure and adsorption energies of oxygenated intermediates",
        "The Fe atom behaves identically regardless of its ligands or support",
        "Catalytic activity depends only on the total mass of iron in the sample",
        "Single-atom sites cannot participate in electron-transfer reactions"
      ],
      "correctIndex": 0,
      "explanation": "An atomically dispersed Fe center is strongly influenced by its first and second coordination shells. Changing N coordination or nearby heteroatoms shifts electronic structure and the binding energetics of ORR intermediates, which can alter activity and selectivity.",
      "realWorld": "Single-atom catalyst design aims to use nearly every metal atom as an active site while tuning the surrounding coordination chemistry for fuel cells and other electrocatalytic processes.",
      "hint": "At the single-atom limit, the surrounding ligands effectively become part of the active site.",
      "sources": [
        {
          "title": "Rational Design of Heteroatom-Doped Fe–N–C Single-Atom Catalysts for Oxygen Reduction Reaction via Simple Descriptor",
          "url": "https://doi.org/10.1021/acscatal.4c01377",
          "publisher": "ACS Catalysis",
          "year": 2024
        }
      ],
      "reviewedAt": "2026-09-19",
      "factualAsOf": "2026-09-19"
    }
];
