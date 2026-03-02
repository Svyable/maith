import type { Question } from '../types';

export const zieglerNattaQuestions: Question[] = [
  {
    id: 13315,
    topic: 'ziegler-natta',
    difficulty: 'easy',
    question:
      'Ziegler–Natta catalysis transformed polymer chemistry by enabling stereocontrolled polymerization of simple alkenes. Which pair of commodity polymers is most directly associated with this breakthrough?',
    options: [
      'Polyethylene (PE) and polypropylene (PP) via catalytic coordination–insertion polymerization',
      'PET and nylon-6,6 via step-growth condensation',
      'PVC and PTFE via radical chain transfer',
      'Polycarbonate and epoxy via ring-opening'
    ],
    correctIndex: 0,
    explanation:
      'Classic Ziegler–Natta systems (e.g., TiCl₄/TiCl₃ with Al-alkyl co-catalysts) catalyze olefin insertion into metal–carbon bonds, giving high-molecular-weight polyolefins efficiently and with microstructure control.',
    realWorld:
      'PP and PE dominate packaging, fibers, and consumer goods. Catalyst choice controls density, crystallinity, and mechanical properties.',
    hint: 'Think “polyolefins from ethylene/propylene.”'
  },
  {
    id: 13316,
    topic: 'ziegler-natta',
    difficulty: 'easy',
    question:
      'For polypropylene, “tacticity” describes stereochemical ordering along the chain. Which configuration corresponds to isotactic polypropylene (iPP)?',
    options: [
      'All methyl groups $(-CH_3)$ aligned on the same side of the polymer backbone (high stereoregularity)',
      'Methyl groups randomly oriented (amorphous, atactic)',
      'Alternating left-right methyl groups strictly (syndiotactic only)',
      'No methyl groups at all (that would be polyethylene)'
    ],
    correctIndex: 0,
    explanation:
      'Isotactic PP has repeating stereocenters of the same configuration, promoting crystallinity and higher melting temperature. Atactic PP is disordered and typically gummy.',
    realWorld:
      'Isotactic PP is used in rigid packaging and molded parts because crystallinity yields stiffness and heat resistance.',
    hint: '“Iso” = same orientation repeating.'
  },
  {
    id: 13317,
    topic: 'ziegler-natta',
    difficulty: 'hard',
    question:
      'Ziegler–Natta polymerization is often modeled as coordination–insertion. Which step best captures the “propagation” event at an active site?',
    options: [
      'Olefin coordinates to the metal center, then inserts into the metal–carbon bond to extend the chain by one monomer unit',
      'Monomer undergoes free-radical homolysis and attacks another radical chain end',
      'Two oligomers combine via condensation and release water',
      'Polymer grows by anionic ring-opening of cyclic monomers'
    ],
    correctIndex: 0,
    explanation:
      'In the coordination–insertion picture, the growing chain is bound to the metal (M–C). The monomer coordinates, then migratory insertion occurs:\n$$\\mathrm{M{-}CH_2{-}R} + \\mathrm{CH_2{=}CH_2} \\to \\mathrm{M{-}CH_2{-}CH_2{-}CH_2{-}R}.$$',
    realWorld:
      'This mechanism explains why catalysts can control stereochemistry and comonomer incorporation (e.g., ethylene/1-hexene copolymers).',
    hint: 'Not radical—think “monomer inserts into M–C.”'
  },
  {
    id: 13318,
    topic: 'ziegler-natta',
    difficulty: 'hard',
    question:
      'Metallocene catalysts are sometimes described as “single-site” compared to classical heterogeneous Ziegler–Natta catalysts. What product-level signature often reflects a single-site catalyst?',
    options: [
      'Narrower molecular weight distribution (lower dispersity $\\mathrm{Đ}=M_w/M_n$) and more uniform comonomer placement',
      'Guaranteed zero crystallinity in all products',
      'Always broader dispersity because uniform sites create chaos',
      'Only produces oligomers ($M_n<1000$) regardless of conditions'
    ],
    correctIndex: 0,
    explanation:
      'Uniform active sites tend to produce chains with more similar growth histories, giving narrower distributions and sharper control of branching/comonomer incorporation. Classical Z–N has multiple site types, often broadening $\\mathrm{Đ}$.',
    realWorld:
      'Film-grade polyolefins often benefit from uniformity (clarity/toughness), motivating single-site catalysts in specialty applications.',
    hint: '“Single-site” → “more uniform chains.”'
  },
  {
    id: 13319,
    topic: 'ziegler-natta',
    difficulty: 'sota',
    question:
      'In polymer characterization, crystallinity is often inferred from melting enthalpy. If a sample has measured $\\Delta H_m$ and the enthalpy of 100% crystalline polymer is $\\Delta H_m^{\\circ}$, the crystallinity $X_c$ is approximated by:',
    options: [
      '$X_c \\approx \\dfrac{\\Delta H_m}{\\Delta H_m^{\\circ}}$ (often reported as a percent)',
      '$X_c \\approx \\Delta H_m + \\Delta H_m^{\\circ}$',
      '$X_c \\approx \\dfrac{\\Delta H_m^{\\circ}}{\\Delta H_m}$ always > 1',
      '$X_c \\approx \\log(\\Delta H_m)$'
    ],
    correctIndex: 0,
    explanation:
      'A common DSC-based estimate assumes melting enthalpy scales with crystalline fraction:\n$$X_c = \\frac{\\Delta H_m}{\\Delta H_m^{\\circ}}.$$ \nCatalyst-controlled tacticity influences $X_c$ via packing efficiency and crystal formation.',
    realWorld:
      'Higher $X_c$ usually increases stiffness and heat resistance but can reduce impact toughness—designers tune it for packaging vs automotive.',
    hint: 'Crystalline fraction scales linearly with melting enthalpy (first-order approximation).'
  }
];