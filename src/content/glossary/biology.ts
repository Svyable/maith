import type { GlossaryTerm } from './types';

export const biologyTerms: GlossaryTerm[] = [
  // ══════════════════════════════════════════════════════════
  // FOUNDATIONAL
  // ══════════════════════════════════════════════════════════
  { id: 'crispr', field: 'biology', term: 'CRISPR-Cas9', definition: 'A gene-editing tool that uses a guide RNA to direct the Cas9 enzyme to cut DNA at a precise location, enabling targeted genetic modifications.', example: 'Used to develop disease-resistant crops and experimental gene therapies.' },
  { id: 'mitosis', field: 'biology', term: 'Mitosis', definition: 'Cell division producing two genetically identical daughter cells, each with the same chromosome count as the parent.', example: 'Wound healing relies on mitosis to replace damaged cells.' },
  { id: 'natural-selection', field: 'biology', term: 'Natural Selection', definition: 'The process by which organisms with traits better suited to their environment tend to survive and reproduce more successfully.', example: 'Antibiotic-resistant bacteria emerge through natural selection.' },
  { id: 'homeostasis', field: 'biology', term: 'Homeostasis', definition: 'The tendency of biological systems to maintain stable internal conditions (temperature, pH, glucose) despite external changes.', example: 'Sweating cools the body to maintain a core temperature of ~37°C.' },
  { id: 'central-dogma', field: 'biology', term: 'Central Dogma', definition: 'The flow of genetic information: DNA → (transcription) → RNA → (translation) → Protein. Information flows one direction.', example: 'mRNA vaccines work by providing the RNA step directly.' },
  { id: 'atp', field: 'biology', term: 'ATP (Adenosine Triphosphate)', definition: 'The primary energy currency of cells. Hydrolysis of ATP to ADP releases energy that powers cellular processes.', example: 'Muscle contraction requires ATP for every cross-bridge cycle.' },
  { id: 'enzyme', field: 'biology', term: 'Enzyme', definition: 'A biological catalyst (usually a protein) that accelerates chemical reactions by lowering activation energy without being consumed.', example: 'Lactase breaks down lactose; people without it are lactose intolerant.' },
  {
    id: 'endosymbiosis', field: 'biology', topic: 'cell-biology',
    term: 'Endosymbiosis',
    definition: 'The theory that mitochondria and chloroplasts originated as free-living bacteria engulfed by ancestral eukaryotic cells, forming a permanent mutualistic relationship.',
    example: 'Mitochondria retain their own circular DNA and 70S ribosomes — relics of their bacterial past.',
    thinkerLinks: ['ivan-wallin', 'lynn-margulis'],
    related: ['mitosis', 'natural-selection'],
    difficulty: 'intro',
  },
  {
    id: 'mitochondria', field: 'biology', topic: 'cell-biology',
    term: 'Mitochondria',
    definition: 'Double-membraned organelles that produce ATP via oxidative phosphorylation. They possess their own genome (~16.5 kb in humans) of alpha-proteobacterial origin.',
    formula: '$\\text{NADH} + \\text{O}_2 \\xrightarrow{\\text{ETC}} \\text{ATP} + \\text{H}_2\\text{O}$',
    example: 'A single human cell contains 1,000–2,000 mitochondria; muscle cells have even more.',
    thinkerLinks: ['ivan-wallin', 'lynn-margulis'],
    related: ['endosymbiosis', 'atp'],
    difficulty: 'intro',
  },

  // ══════════════════════════════════════════════════════════
  // MOLECULAR & CELLULAR BIOLOGY
  // ══════════════════════════════════════════════════════════
  {
    id: 'protein-folding', field: 'biology', topic: 'molecular-cellular',
    term: 'Protein Folding',
    definition: 'The process by which a polypeptide chain acquires its native 3D structure. Governed by the energy landscape funnel — the protein searches for the minimum free energy conformation among astronomically many possibilities (Levinthal\'s paradox).',
    formula: '$\\Delta G_{\\text{fold}} = \\Delta H - T\\Delta S$',
    example: 'AlphaFold2 solved the protein structure prediction problem, predicting 3D shapes from sequence alone with near-experimental accuracy.',
    related: ['enzyme', 'central-dogma'],
    difficulty: 'intermediate',
  },
  {
    id: 'levinthal-paradox', field: 'biology', topic: 'molecular-cellular',
    term: 'Levinthal\'s Paradox',
    definition: 'A protein with 100 residues has ~$3^{100} \\approx 5 \\times 10^{47}$ conformations. Even at $10^{13}$ trials/sec, exhaustive search would take longer than the age of the universe — yet proteins fold in milliseconds.',
    example: 'The resolution is the energy funnel: proteins don\'t search randomly but follow a biased landscape toward the native state.',
    related: ['protein-folding'],
    difficulty: 'intermediate',
  },
  {
    id: 'gene-regulation', field: 'biology', topic: 'molecular-cellular',
    term: 'Gene Regulation',
    definition: 'The mechanisms controlling when, where, and how much of a gene product is made. Includes transcription factors, enhancers, silencers, epigenetic marks (methylation, acetylation), and post-transcriptional control (miRNA, splicing).',
    example: 'The lac operon (Jacob & Monod, 1961 Nobel) was the first gene regulatory circuit described — it controls lactose metabolism in E. coli.',
    related: ['central-dogma', 'crispr', 'genetic-circuits'],
    difficulty: 'intro',
  },
  {
    id: 'cell-signaling', field: 'biology', topic: 'molecular-cellular',
    term: 'Cell Signaling',
    definition: 'Communication between cells via signaling molecules (ligands) binding receptors, triggering intracellular cascades (MAPK, PI3K/Akt, Wnt, Notch). Signal transduction converts extracellular signals into cellular responses.',
    example: 'Insulin binding its receptor activates a PI3K/Akt cascade that promotes glucose uptake — disruption causes diabetes.',
    related: ['homeostasis', 'enzyme'],
    difficulty: 'intermediate',
  },
  {
    id: 'michaelis-menten', field: 'biology', topic: 'molecular-cellular',
    term: 'Michaelis–Menten Kinetics',
    definition: 'The rate of enzyme-catalyzed reactions: $v = \\frac{V_{\\max}[S]}{K_M + [S]}$. At $[S] = K_M$, the rate is half-maximal. Lineweaver–Burk ($1/v$ vs $1/[S]$) linearizes the equation.',
    formula: '$v = \\frac{V_{\\max}[S]}{K_M + [S]}$',
    latex: 'v = \\frac{V_{\\max}[S]}{K_M + [S]}',
    example: 'Drug design targets enzymes by finding inhibitors that alter $K_M$ (competitive) or $V_{\\max}$ (non-competitive).',
    related: ['enzyme', 'dose-response'],
    difficulty: 'intro',
  },
  {
    id: 'hill-equation-bio', field: 'biology', topic: 'molecular-cellular',
    term: 'Hill Equation',
    definition: 'Models cooperative binding: $\\theta = \\frac{[L]^n}{K_d^n + [L]^n}$, where $n$ is the Hill coefficient. $n > 1$ = positive cooperativity (ultrasensitive switch), $n < 1$ = negative cooperativity.',
    formula: '$\\theta = \\frac{[L]^n}{K_d^n + [L]^n}$',
    latex: '\\theta = \\frac{[L]^n}{K_d^n + [L]^n}',
    example: 'Hemoglobin binding oxygen has $n \\approx 2.8$, creating a sigmoidal curve that enables efficient O₂ loading in lungs and unloading in tissues.',
    related: ['michaelis-menten', 'dose-response'],
    difficulty: 'intermediate',
  },

  // ══════════════════════════════════════════════════════════
  // GENETICS & EVOLUTION
  // ══════════════════════════════════════════════════════════
  {
    id: 'hardy-weinberg', field: 'biology', topic: 'population-genetics',
    term: 'Hardy–Weinberg Equilibrium',
    definition: 'In a non-evolving population: genotype frequencies $p^2 + 2pq + q^2 = 1$ remain stable across generations. Deviations indicate selection, drift, mutation, migration, or non-random mating.',
    formula: '$p^2 + 2pq + q^2 = 1$',
    example: 'GWAS studies use Hardy–Weinberg departure as a quality control filter for genotyping errors.',
    related: ['natural-selection', 'genetic-drift'],
    difficulty: 'intro',
  },
  {
    id: 'genetic-drift', field: 'biology', topic: 'population-genetics',
    term: 'Genetic Drift',
    definition: 'Random changes in allele frequency due to finite population size. Stronger in small populations. Modeled by the Wright–Fisher process: $p\' \\sim \\text{Binomial}(2N, p) / (2N)$.',
    example: 'Founder effects (e.g., high frequency of Ellis–van Creveld syndrome among the Amish) are extreme drift events.',
    related: ['hardy-weinberg', 'effective-population-size'],
    difficulty: 'intermediate',
  },
  {
    id: 'effective-population-size', field: 'biology', topic: 'population-genetics',
    term: 'Effective Population Size ($N_e$)',
    definition: 'The size of an idealized Wright–Fisher population that experiences the same rate of drift as the actual population. Always ≤ census size due to variance in reproductive success, unequal sex ratios, and population fluctuations.',
    formula: '$N_e = \\frac{4N_m N_f}{N_m + N_f}$',
    example: 'Humans have $N_e \\approx 10{,}000$ despite a census of 8 billion — reflecting ancient population bottlenecks.',
    related: ['genetic-drift', 'hardy-weinberg'],
    difficulty: 'intermediate',
  },
  {
    id: 'coalescent-theory', field: 'biology', topic: 'population-genetics',
    term: 'Coalescent Theory',
    definition: 'A retrospective model tracing gene lineages backward in time to their most recent common ancestor. The expected coalescence time for $n$ lineages in a population of $N_e$ is $E[T_n] = \\frac{2N_e}{\\binom{n}{2}}$.',
    example: 'Coalescent methods estimate when the mitochondrial Eve lived (~200,000 years ago) from modern mtDNA sequences.',
    related: ['effective-population-size', 'phylogenetics-gloss'],
    difficulty: 'advanced',
  },
  {
    id: 'quantitative-genetics', field: 'biology', topic: 'quantitative-genetics',
    term: 'Breeder\'s Equation',
    definition: 'Predicts response to selection: $R = h^2 S$, where $h^2$ is narrow-sense heritability and $S$ is the selection differential. Foundation of artificial selection and evolutionary quantitative genetics.',
    formula: '$R = h^2 S$',
    example: 'Dairy cow milk yield increased ~4× in 50 years through selective breeding predicted by this equation.',
    related: ['hardy-weinberg', 'natural-selection'],
    difficulty: 'intermediate',
  },
  {
    id: 'phylogenetics-gloss', field: 'biology', topic: 'phylogenetics',
    term: 'Phylogenetics',
    definition: 'Reconstruction of evolutionary relationships (trees) from molecular sequences (DNA, protein) or morphological data. Methods: maximum likelihood, Bayesian inference (MrBayes, BEAST), maximum parsimony.',
    example: 'Phylogenetic analysis of SARS-CoV-2 genomes tracked the spread and evolution of COVID-19 variants in real time.',
    related: ['coalescent-theory', 'natural-selection'],
    difficulty: 'intermediate',
  },
  {
    id: 'molecular-clock', field: 'biology', topic: 'phylogenetics',
    term: 'Molecular Clock',
    definition: 'The hypothesis that mutations accumulate at a roughly constant rate over evolutionary time, allowing divergence times to be estimated from sequence differences: $d = 2\\mu t$.',
    formula: '$d = 2\\mu t$',
    example: 'Molecular clocks date the human–chimpanzee divergence to ~6–7 million years ago.',
    related: ['phylogenetics-gloss', 'coalescent-theory'],
    difficulty: 'intermediate',
  },

  // ══════════════════════════════════════════════════════════
  // ECOLOGY & SYSTEMS BIOLOGY
  // ══════════════════════════════════════════════════════════
  {
    id: 'lotka-volterra-gloss', field: 'biology', topic: 'population-dynamics',
    term: 'Lotka–Volterra Equations',
    definition: 'Coupled ODEs modeling predator–prey dynamics: $\\dot{x} = \\alpha x - \\beta xy$, $\\dot{y} = \\delta xy - \\gamma y$. Predicts oscillating populations with predator lagging prey.',
    formula: '$\\dot{x} = \\alpha x - \\beta xy, \\quad \\dot{y} = \\delta xy - \\gamma y$',
    example: 'The classic lynx–hare cycle in the Canadian fur trade data follows Lotka–Volterra dynamics.',
    thinkerLinks: ['alfred-lotka'],
    related: ['logistic-growth', 'network-ecology'],
    difficulty: 'intro',
  },
  {
    id: 'logistic-growth', field: 'biology', topic: 'population-dynamics',
    term: 'Logistic Growth',
    definition: 'Population growth with carrying capacity: $\\frac{dN}{dt} = rN\\left(1 - \\frac{N}{K}\\right)$. S-shaped curve: exponential at low $N$, saturating at $K$. The discrete version produces chaos.',
    formula: '$\\frac{dN}{dt} = rN\\left(1 - \\frac{N}{K}\\right)$',
    thinkerLinks: ['pierre-verhulst'],
    related: ['lotka-volterra-gloss'],
    difficulty: 'intro',
  },
  {
    id: 'network-ecology', field: 'biology', topic: 'network-ecology',
    term: 'Ecological Networks',
    definition: 'Food webs, mutualistic networks (pollination), and parasitoid networks analyzed via graph theory. Metrics: connectance, nestedness, modularity. Robustness depends on degree distribution.',
    example: 'Pollination networks are nested — specialist pollinators visit a subset of the flowers visited by generalists, conferring robustness.',
    related: ['lotka-volterra-gloss', 'metagenomics-gloss'],
    difficulty: 'intermediate',
  },
  {
    id: 'metagenomics-gloss', field: 'biology', topic: 'metagenomics',
    term: 'Metagenomics',
    definition: 'Sequencing all DNA/RNA in an environmental sample (soil, ocean, gut) without culturing organisms. Reveals microbial community composition, function, and dynamics. Key tools: 16S rRNA, shotgun sequencing.',
    example: 'The Human Microbiome Project revealed that the gut contains ~38 trillion bacteria — roughly as many as human cells.',
    related: ['network-ecology', 'phylogenetics-gloss'],
    difficulty: 'intermediate',
  },

  // ══════════════════════════════════════════════════════════
  // NEUROSCIENCE
  // ══════════════════════════════════════════════════════════
  {
    id: 'hodgkin-huxley', field: 'biology', topic: 'computational-neuroscience',
    term: 'Hodgkin–Huxley Model',
    definition: 'Conductance-based model of the action potential: $C_m\\frac{dV}{dt} = -g_{Na}m^3h(V-E_{Na}) - g_K n^4(V-E_K) - g_L(V-E_L) + I_{\\text{ext}}$. Won 1963 Nobel Prize.',
    formula: '$C_m\\frac{dV}{dt} = -\\bar{g}_{Na}m^3h(V-E_{Na}) - \\bar{g}_K n^4(V-E_K) - g_L(V-E_L) + I$',
    example: 'The model explains the shape, threshold, and refractory period of neural action potentials from first principles.',
    related: ['fitzhugh-nagumo', 'connectomics-gloss'],
    difficulty: 'advanced',
  },
  {
    id: 'fitzhugh-nagumo', field: 'biology', topic: 'computational-neuroscience',
    term: 'FitzHugh–Nagumo Model',
    definition: 'A two-variable simplification of Hodgkin–Huxley: $\\dot{v} = v - v^3/3 - w + I$, $\\dot{w} = \\varepsilon(v + a - bw)$. Captures excitability and oscillation in a phase plane.',
    formula: '$\\dot{v} = v - v^3/3 - w + I, \\quad \\dot{w} = \\varepsilon(v + a - bw)$',
    thinkerLinks: ['richard-fitzhugh'],
    related: ['hodgkin-huxley'],
    difficulty: 'intermediate',
  },
  {
    id: 'hebbian-learning', field: 'biology', topic: 'computational-neuroscience',
    term: 'Hebbian Learning',
    definition: '"Neurons that fire together wire together." Synaptic weight change: $\\Delta w_{ij} \\propto x_i x_j$. The basis of associative memory, LTP, and neural network learning rules.',
    formula: '$\\Delta w_{ij} = \\eta \\, x_i \\, x_j$',
    example: 'Long-term potentiation (LTP) in the hippocampus implements Hebbian plasticity and is critical for memory formation.',
    related: ['hodgkin-huxley', 'connectomics-gloss'],
    difficulty: 'intro',
  },
  {
    id: 'connectomics-gloss', field: 'biology', topic: 'connectomics',
    term: 'Connectomics',
    definition: 'Mapping all neural connections (the connectome) at various scales — from C. elegans (302 neurons, complete) to the human brain (~86 billion neurons, ongoing). Combines electron microscopy, diffusion MRI, and graph theory.',
    example: 'The C. elegans connectome (White et al., 1986) remains the only complete nervous system wiring diagram.',
    related: ['hodgkin-huxley', 'hebbian-learning'],
    difficulty: 'intermediate',
  },
  {
    id: 'integrate-fire', field: 'biology', topic: 'computational-neuroscience',
    term: 'Leaky Integrate-and-Fire Neuron',
    definition: 'Simplified neuron model: $\\tau_m \\frac{dV}{dt} = -(V - V_{\\text{rest}}) + R_m I(t)$. When $V$ reaches threshold, the neuron fires and resets. Balances biological plausibility with computational tractability.',
    formula: '$\\tau_m \\frac{dV}{dt} = -(V - V_{\\text{rest}}) + R_m I$',
    example: 'Used in large-scale brain simulations (e.g., the Human Brain Project) where Hodgkin–Huxley is too expensive.',
    related: ['hodgkin-huxley', 'fitzhugh-nagumo'],
    difficulty: 'intro',
  },

  // ══════════════════════════════════════════════════════════
  // EPIDEMIOLOGY
  // ══════════════════════════════════════════════════════════
  {
    id: 'sir-model', field: 'biology', topic: 'compartmental-models',
    term: 'SIR Compartmental Model',
    definition: 'Divides a population into Susceptible, Infected, and Recovered: $\\dot{S} = -\\beta SI/N$, $\\dot{I} = \\beta SI/N - \\gamma I$, $\\dot{R} = \\gamma I$. The basic reproduction number $R_0 = \\beta/\\gamma$ determines outbreak potential.',
    formula: '$R_0 = \\frac{\\beta}{\\gamma}$',
    example: 'COVID-19 had $R_0 \\approx 2.5$; measles has $R_0 \\approx 12–18$, requiring ~95% vaccination for herd immunity.',
    related: ['seir-model', 'spatial-epi'],
    difficulty: 'intro',
  },
  {
    id: 'seir-model', field: 'biology', topic: 'compartmental-models',
    term: 'SEIR Model',
    definition: 'Extends SIR with an Exposed (latent) compartment: individuals are infected but not yet infectious. Adds incubation dynamics: $\\dot{E} = \\beta SI/N - \\sigma E$, $\\dot{I} = \\sigma E - \\gamma I$.',
    example: 'SEIR models captured COVID-19 dynamics better than SIR because of the ~5-day incubation period.',
    related: ['sir-model'],
    difficulty: 'intermediate',
  },
  {
    id: 'spatial-epi', field: 'biology', topic: 'spatial-epidemics',
    term: 'Spatial Epidemiology',
    definition: 'Models disease spread across geographic space using reaction-diffusion equations, gravity models, or network-based transmission. Captures how mobility, population density, and travel networks shape outbreaks.',
    example: 'The gravity model predicted COVID-19 arrival times in US cities from Wuhan seeding with remarkable accuracy.',
    related: ['sir-model', 'network-ecology'],
    difficulty: 'intermediate',
  },
  {
    id: 'stochastic-epi', field: 'biology', topic: 'stochastic-epidemics',
    term: 'Stochastic Epidemics',
    definition: 'When populations are small, random fluctuations matter: an outbreak with $R_0 > 1$ can still die out by chance. The probability of a major outbreak from a single case is approximately $1 - 1/R_0$.',
    formula: '$P(\\text{outbreak}) \\approx 1 - \\frac{1}{R_0}$',
    example: 'Ebola introductions to countries often failed to spark outbreaks despite $R_0 \\approx 2$ — consistent with stochastic extinction.',
    related: ['sir-model'],
    difficulty: 'intermediate',
  },

  // ══════════════════════════════════════════════════════════
  // PHARMACOKINETICS & PHARMACOLOGY
  // ══════════════════════════════════════════════════════════
  {
    id: 'one-compartment-pk', field: 'biology', topic: 'compartmental-pk',
    term: 'One-Compartment PK Model',
    definition: 'The simplest PK model: the body is a single well-mixed compartment. After IV bolus: $C(t) = C_0 e^{-k_e t}$, where $k_e = \\text{CL}/V_d$. Half-life: $t_{1/2} = \\ln 2 / k_e$.',
    formula: '$C(t) = C_0 e^{-k_e t}, \\quad t_{1/2} = \\frac{\\ln 2}{k_e}$',
    example: 'Caffeine follows one-compartment kinetics with $t_{1/2} \\approx 5$ hours.',
    related: ['dose-response', 'population-pk'],
    difficulty: 'intro',
  },
  {
    id: 'dose-response', field: 'biology', topic: 'dose-response',
    term: 'Dose–Response Curve',
    definition: 'Sigmoidal relationship between drug concentration and effect: $E = \\frac{E_{\\max}[C]^n}{EC_{50}^n + [C]^n}$ (Hill-type). EC₅₀ is the concentration producing 50% maximal effect; $n$ = Hill coefficient.',
    formula: '$E = \\frac{E_{\\max}[C]^n}{EC_{50}^n + [C]^n}$',
    example: 'A drug with low EC₅₀ is potent; a drug with high E_max is efficacious. Both matter for clinical utility.',
    related: ['hill-equation-bio', 'one-compartment-pk'],
    difficulty: 'intro',
  },
  {
    id: 'population-pk', field: 'biology', topic: 'population-pk',
    term: 'Population Pharmacokinetics',
    definition: 'Nonlinear mixed-effects modeling (NLME) to characterize PK variability across patients. Uses random effects for inter-individual variability (IIV) and covariates (weight, renal function) to personalize dosing.',
    example: 'Population PK models for vancomycin adjust dosing based on creatinine clearance and body weight, reducing toxicity.',
    related: ['one-compartment-pk', 'dose-response'],
    difficulty: 'advanced',
  },

  // ══════════════════════════════════════════════════════════
  // BIOSTATISTICS
  // ══════════════════════════════════════════════════════════
  {
    id: 'kaplan-meier', field: 'biology', topic: 'survival-analysis',
    term: 'Kaplan–Meier Estimator',
    definition: 'Non-parametric estimator of the survival function: $\\hat{S}(t) = \\prod_{t_i \\leq t} \\left(1 - \\frac{d_i}{n_i}\\right)$. Handles right-censored data (patients who haven\'t yet experienced the event).',
    formula: '$\\hat{S}(t) = \\prod_{t_i \\leq t} \\left(1 - \\frac{d_i}{n_i}\\right)$',
    example: 'Every oncology clinical trial reports Kaplan–Meier curves for overall survival and progression-free survival.',
    related: ['cox-proportional-hazards', 'clinical-trials-gloss'],
    difficulty: 'intermediate',
  },
  {
    id: 'cox-proportional-hazards', field: 'biology', topic: 'survival-analysis',
    term: 'Cox Proportional Hazards Model',
    definition: 'Semi-parametric model: $h(t|X) = h_0(t)\\exp(\\beta^T X)$. The hazard ratio $\\exp(\\beta_j)$ is the multiplicative effect of covariate $j$ on the instantaneous risk, independent of the baseline hazard shape.',
    formula: '$h(t|X) = h_0(t)\\exp(\\boldsymbol{\\beta}^T \\mathbf{X})$',
    example: 'A hazard ratio of 0.7 for a treatment means 30% reduction in the instantaneous risk of death at any time point.',
    related: ['kaplan-meier'],
    difficulty: 'intermediate',
  },
  {
    id: 'causal-inference-bio', field: 'biology', topic: 'causal-inference',
    term: 'Causal Inference',
    definition: 'Methods to estimate causal effects from observational data: propensity score matching, instrumental variables, difference-in-differences, regression discontinuity, and Mendelian randomization (using genetic variants as instruments).',
    example: 'Mendelian randomization showed that LDL cholesterol causally increases heart disease risk, confirming statin benefit.',
    related: ['clinical-trials-gloss'],
    difficulty: 'advanced',
  },
  {
    id: 'clinical-trials-gloss', field: 'biology', topic: 'clinical-trials',
    term: 'Clinical Trials',
    definition: 'Phased experiments testing medical interventions. Phase I: safety/dosing (n~30). Phase II: efficacy signals (n~100). Phase III: definitive efficacy vs control (n~1000+). Phase IV: post-marketing surveillance. RCTs with blinding are the gold standard.',
    example: 'The Pfizer-BioNTech COVID-19 vaccine Phase III trial enrolled 43,548 participants and showed 95% efficacy.',
    related: ['kaplan-meier', 'causal-inference-bio'],
    difficulty: 'intro',
  },
  {
    id: 'multiple-testing', field: 'biology', topic: 'biostatistics',
    term: 'Multiple Testing Correction',
    definition: 'When testing many hypotheses simultaneously (e.g., 20,000 genes), false positives accumulate. Bonferroni ($\\alpha/m$) controls family-wise error rate; Benjamini–Hochberg controls false discovery rate (FDR).',
    formula: '$\\text{FDR threshold: } p_{(k)} \\leq \\frac{k}{m}\\alpha$',
    example: 'GWAS studies test ~1 million SNPs; genome-wide significance requires $p < 5 \\times 10^{-8}$ (Bonferroni-like threshold).',
    related: ['kaplan-meier'],
    difficulty: 'intermediate',
  },

  // ══════════════════════════════════════════════════════════
  // SYSTEMS PHARMACOLOGY & DRUG DESIGN
  // ══════════════════════════════════════════════════════════
  {
    id: 'qsar-modeling', field: 'biology', topic: 'qsar-modeling',
    term: 'QSAR Modeling',
    definition: 'Quantitative Structure–Activity Relationships: predict biological activity from molecular descriptors (logP, molecular weight, H-bond donors/acceptors). Lipinski\'s Rule of Five (MW < 500, logP < 5, HBD ≤ 5, HBA ≤ 10) predicts oral bioavailability.',
    example: 'Lipinski\'s Rule of Five filters out ~90% of failed drug candidates at the earliest design stage.',
    related: ['protein-ligand', 'dose-response'],
    difficulty: 'intermediate',
  },
  {
    id: 'protein-ligand', field: 'biology', topic: 'protein-ligand',
    term: 'Protein–Ligand Binding',
    definition: 'The affinity of a drug for its target: $K_d = \\frac{[P][L]}{[PL]}$. Lower $K_d$ = tighter binding. Free energy: $\\Delta G_{\\text{bind}} = -RT\\ln K_a$. Modern methods: molecular docking, FEP, cryo-EM.',
    formula: '$\\Delta G_{\\text{bind}} = -RT\\ln K_a$',
    example: 'Imatinib (Gleevec) binds BCR-ABL kinase with $K_d \\approx 1$ nM, revolutionizing CML treatment.',
    related: ['michaelis-menten', 'qsar-modeling'],
    difficulty: 'intermediate',
  },
  {
    id: 'drug-design', field: 'biology', topic: 'drug-design',
    term: 'Rational Drug Design',
    definition: 'Structure-based approach: use 3D protein structure (X-ray, cryo-EM, AlphaFold) to design molecules that fit the active site. Includes virtual screening, pharmacophore modeling, and lead optimization.',
    example: 'HIV protease inhibitors (saquinavir, ritonavir) were among the first drugs designed using protein crystal structures.',
    related: ['protein-ligand', 'protein-folding'],
    difficulty: 'intermediate',
  },

  // ══════════════════════════════════════════════════════════
  // SYNTHETIC BIOLOGY
  // ══════════════════════════════════════════════════════════
  {
    id: 'genetic-circuits', field: 'biology', topic: 'genetic-circuits',
    term: 'Genetic Circuits',
    definition: 'Engineered gene regulatory networks that implement logical functions (AND, OR, NOT gates), oscillators (repressilator), toggle switches, and feedback controllers in living cells.',
    example: 'The repressilator (Elowitz & Leibler, 2000) — three mutually repressing genes — produces oscillations in E. coli, like a biological clock.',
    related: ['gene-regulation', 'metabolic-engineering'],
    difficulty: 'intermediate',
  },
  {
    id: 'metabolic-engineering', field: 'biology', topic: 'metabolic-engineering',
    term: 'Metabolic Engineering',
    definition: 'Redirecting cellular metabolism for chemical production using genetic modifications. Flux Balance Analysis (FBA) optimizes yields: maximize $Z = c^T v$ subject to $Sv = 0$ and bounds on $v$.',
    formula: '$\\max \\; c^T v \\quad \\text{s.t.} \\; Sv = 0, \\; v_{\\min} \\leq v \\leq v_{\\max}$',
    example: 'Engineered yeast produces artemisinin (antimalarial drug) at scale — replacing unreliable plant extraction.',
    related: ['genetic-circuits', 'crn-design'],
    difficulty: 'advanced',
  },
  {
    id: 'crn-design', field: 'biology', topic: 'crn-design',
    term: 'Chemical Reaction Networks (CRNs)',
    definition: 'Formal models of interacting chemical species with defined stoichiometry and kinetics. CRN theory (Feinberg, Horn, Jackson) characterizes steady states, multistability, and oscillations from network topology alone.',
    example: 'DNA strand displacement CRNs can implement arbitrary computations — Turing-complete chemistry.',
    related: ['genetic-circuits', 'metabolic-engineering'],
    difficulty: 'advanced',
  },
];
