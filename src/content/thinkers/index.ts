import type { Question } from "../types";

// Modern / foundational
import { hintonQuestions } from "./geoffrey-hinton";
import { turingQuestions } from "./alan-turing";
import { shannonQuestions } from "./claude-shannon";
import { poincareQuestions } from "./henri-poincare";
import { riemannQuestions } from "./bernhard-riemann";
import { feynmanQuestions } from "./richard-feynman";
import { vonNeumannQuestions } from "./john-von-neumann";
import { pearlQuestions } from "./judea-pearl";
import { simonsQuestions } from "./jim-simons";
import { ramanujanQuestions } from "./srinivasa-ramanujan";

// Ancient thinkers
import { euclidQuestions } from "./euclid-of-alexandria";
import { archimedесQuestions } from "./archimedes-of-syracuse";
import { newtonQuestions } from "./isaac-newton";
import { eulerQuestions } from "./leonhard-euler";
import { pythagorasQuestions } from "./pythagoras-of-samos";
import { gaussQuestions } from "./carl-friedrich-gauss";

// New ancient thinkers
import { leibnizQuestions } from "./gottfried-wilhelm-leibniz";
import { fermatQuestions } from "./pierre-de-fermat";
import { alkhwarizmiQuestions } from "./muhammad-al-khwarizmi";
import { lovelaceQuestions } from "./ada-lovelace";
import { noetherQuestions } from "./emmy-noether";
import { curieQuestions } from "./marie-curie";

// Modern thinkers
import { bengioQuestions } from "./yoshua-bengio";
import { lecunQuestions } from "./yann-lecun";
import { suttonQuestions } from "./richard-sutton";
import { goodfellowQuestions } from "./ian-goodfellow";
import { vapnikQuestions } from "./vladimir-vapnik";
import { einsteinQuestions } from "./albert-einstein";
import { godelQuestions } from "./kurt-godel";
import { diracQuestions } from "./paul-dirac";
import { kolmogorovQuestions } from "./andrey-kolmogorov";
import { hawkingQuestions } from "./stephen-hawking";

// Contemporary thinkers
import { hassabisQuestions } from "./demis-hassabis";
import { vaswaniQuestions } from "./ashish-vaswani";
import { karpathyQuestions } from "./andrej-karpathy";
import { altmanQuestions } from "./sam-altman";
import { amodeiQuestions } from "./dario-amodei";
import { ngQuestions } from "./andrew-ng";
import { lifeiQuestions } from "./fei-fei-li";
import { ilyaQuestions } from "./ilya-sutskever";

// Global MasterMinds
import { taoQuestions } from "./terence-tao";
import { erdosQuestions } from "./paul-erdos";
import { ramanQuestions } from "./chandrasekhara-v-raman";
import { mirzakhaniQuestions } from "./maryam-mirzakhani";
import { chernQuestions } from "./shiing-shen-chern";
import { zhangQuestions } from "./zhang-yitang";
import { goldwasserQuestions } from "./shafi-goldwasser";
import { kashiwaraQuestions } from "./masaki-kashiwara";
import { birkarQuestions } from "./caucher-birkar";
import { grothendieckQuestions } from "./alexander-grothendieck";
import { kovalevskayaQuestions } from "./sofia-kovalevskaya";

// New additions
import { jeffDeanQuestions } from "./jeff-dean";
import { kaiFuLeeQuestions } from "./kai-fu-lee";
import { schmidhuberQuestions } from "./juergen-schmidhuber";
import { linnainmaaQuestions } from "./seppo-linnainmaa";
import { kozyrkovQuestions } from "./cassie-kozyrkov";
import { suleymanQuestions } from "./mustafa-suleyman";
import { hilbertQuestions } from "./david-hilbert";
import { gebruQuestions } from "./timnit-gebru";

// Prodigies
import { pascalQuestions } from "./blaise-pascal";
import { galoisQuestions } from "./evariste-galois";
import { hamiltonWRQuestions } from "./william-rowan-hamilton";
import { abelQuestions } from "./niels-henrik-abel";
import { scholzeQuestions } from "./peter-scholze";
import { venkateshQuestions } from "./akshay-venkatesh";
import { deviQuestions } from "./shakuntala-devi";
import { demaineQuestions } from "./erik-demaine";

// Earth & Space thinkers
import { carlSaganQuestions } from "./carl-sagan";
import { wegenerQuestions } from "./alfred-wegener";
import { veraRubinQuestions } from "./vera-rubin";

// Economics thinkers
import { adamSmithQuestions } from "./adam-smith";
import { johnNashQuestions } from "./john-nash";
import { keynesQuestions } from "./john-maynard-keynes";

// Engineering thinkers
import { nikolaTeslaQuestions } from "./nikola-tesla";
import { vonBraunQuestions } from "./wernher-von-braun";
import { hedyLamarrQuestions } from "./hedy-lamarr";

// Biology thinkers
import { darwinQuestions } from "./charles-darwin";
import { rosalindFranklinQuestions } from "./rosalind-franklin";
import { doudnaQuestions } from "./jennifer-doudna";

// Chemistry thinkers
import { mendeleevQuestions } from "./dmitri-mendeleev";
import { lavoisierQuestions } from "./antoine-lavoisier";
import { paulingQuestions } from "./linus-pauling";

// Medical thinkers
import { flemingQuestions } from "./alexander-fleming";
import { jennerQuestions } from "./edward-jenner";

// Quant thinkers
import { fischerBlackQuestions } from "./fischer-black";
import { edThorpQuestions } from "./edward-thorp";

// Human Sciences thinkers
import { kahnemanQuestions } from "./daniel-kahneman";
import { pavlovQuestions } from "./ivan-pavlov";

// Data Science thinkers
import { tukeyQuestions } from "./john-tukey";

// π Pioneers & Trigonometry
import { vieteQuestions } from "./francois-viete";
import { wallisQuestions } from "./john-wallis";
import { gregoryQuestions } from "./james-gregory";
import { vanCeulenQuestions } from "./ludolph-van-ceulen";
import { alkashiQuestions as alkashiPiQuestions } from "./jamshid-al-kashi";
import { ptolemyQuestions } from "./claudius-ptolemy";
import { hipparchusQuestions } from "./hipparchus-of-nicaea";
import { tusiQuestions } from "./nasir-al-din-al-tusi";

// Cryptography Pioneers
import { satoshiQuestions } from "./satoshi-nakamoto";
import { diffieQuestions } from "./whitfield-diffie";
import { shamirQuestions } from "./adi-shamir";
import { kirchhoffQuestions } from "./auguste-kirchhoff";
import { merkleQuestions } from "./ralph-merkle";
import { rivestQuestions } from "./ron-rivest";

// Applied Sciences: Optics, Comms, Semiconductors, Materials
import { alhazenQuestions } from "./ibn-al-haytham";
import { maxwellQuestions } from "./james-clerk-maxwell";
import { marconiQuestions } from "./guglielmo-marconi";
import { shockleyQuestions } from "./william-shockley";
import { kilbyQuestions } from "./jack-kilby";
import { hookeQuestions } from "./robert-hooke";
import { hubbleQuestions } from "./edwin-hubble";
import { georgeGreenQuestions } from "./george-green";
import { faradayQuestions } from "./michael-faraday";
import { planckQuestions } from "./max-planck";
import { bohrQuestions } from "./niels-bohr";

// New thinkers: Engineering, Economics, Quant, CS
import { kalmanQuestions } from "./rudolf-kalman";
import { wienerQuestions } from "./norbert-wiener";
import { thalerQuestions } from "./richard-thaler";
import { senQuestions } from "./amartya-sen";
import { mertonRobertQuestions } from "./robert-merton";
import { markowitzQuestions } from "./harry-markowitz";
import { lamportQuestions } from "./leslie-lamport";
import { martinLofQuestions } from "./per-martin-lof";

// New thinkers: Math, Physics, CS, Statistics
import { laplaceQuestions } from "./pierre-simon-laplace";
import { bayesQuestions } from "./thomas-bayes";
import { cantorQuestions } from "./georg-cantor";
import { cauchyQuestions } from "./augustin-louis-cauchy";
import { fourierQuestions } from "./joseph-fourier";
import { schrodingerQuestions } from "./erwin-schrodinger";
import { heisenbergQuestions } from "./werner-heisenberg";
import { fermiQuestions } from "./enrico-fermi";
import { knuthQuestions } from "./donald-knuth";
import { dijkstraQuestions } from "./edsger-dijkstra";
import { mccarthyQuestions } from "./john-mccarthy";
import { hopperQuestions } from "./grace-hopper";
import { fisherQuestions } from "./ronald-fisher";
import { pearsonQuestions } from "./karl-pearson";

// Female thinkers additions
import { hypatiaQuestions } from "./hypatia-of-alexandria";
import { nightingaleQuestions } from "./florence-nightingale";
import { meitnerQuestions } from "./lise-meitner";
import { wuQuestions } from "./chien-shiung-wu";
import { katherineJohnsonQuestions } from "./katherine-johnson";
import { hodgkinQuestions } from "./dorothy-hodgkin";
import { mcclintockQuestions } from "./barbara-mcclintock";
import { uhlenbeckQuestions } from "./karen-uhlenbeck";
import { dresselhausQuestions } from "./mildred-dresselhaus";
import { cartwrightQuestions } from "./mary-cartwright";

// Female thinkers batch 2
import { pandrosionQuestions } from "./pandrosion-of-alexandria";
import { duchateletQuestions } from "./emilie-du-chatelet";
import { agnesiQuestions } from "./maria-gaetana-agnesi";
import { vaughanQuestions } from "./dorothy-vaughan";
import { robinsonQuestions } from "./julia-robinson";
import { germainQuestions } from "./sophie-germain";
import { payneQuestions } from "./cecilia-payne";
import { goeppertMayerQuestions } from "./maria-goeppert-mayer";
import { leavittQuestions } from "./henrietta-leavitt";
import { daubechiesQuestions } from "./ingrid-daubechies";

// Prodigies batch 2
import { landauQuestions } from "./lev-landau";
import { feffermanQuestions } from "./charles-fefferman";
import { elkiesQuestions } from "./noam-elkies";
import { ruthLawrenceQuestions } from "./ruth-lawrence";
import { alissaCransQuestions } from "./alissa-crans";
import { juneHuhQuestions } from "./june-huh";
import { rudnickQuestions } from "./zeev-rudnick";

// Foundational Architects, Chaos/Complexity, Neural Net pioneers, Scale
import { booleQuestions } from "./george-boole";
import { markovQuestions } from "./andrey-markov";
import { lorenzQuestions } from "./edward-lorenz";
import { mandelbrotQuestions } from "./benoit-mandelbrot";
import { hopfieldQuestions } from "./john-hopfield";
import { rosenblattQuestions } from "./frank-rosenblatt";
import { margaretHamiltonQuestions } from "./margaret-hamilton";
import { mooreQuestions } from "./gordon-moore";
import { wolframQuestions } from "./stephen-wolfram";

// Global Pioneers & Non-Western Titans
import { perlmanQuestions } from "./radia-perlman";
import { easleyQuestions } from "./annie-easley";
import { saruhashiQuestions } from "./katsuko-saruhashi";
import { madhavaQuestions } from "./madhava-of-sangamagrama";
import { brahmaguptaQuestions } from "./brahmagupta";
import { boseQuestions } from "./satyendra-bose";
import { alJazariQuestions } from "./al-jazari";
import { sekiQuestions } from "./seki-takakazu";

// Paradox Masters & Foundational Logicians
import { zenoQuestions } from "./zeno-of-elea";
import { eubulidesQuestions } from "./eubulides-of-miletus";
import { torricelliQuestions } from "./evangelista-torricelli";
import { russellQuestions } from "./bertrand-russell";
import { banachTarskiQuestions } from "./stefan-banach";
import { brouwerQuestions } from "./l-e-j-brouwer";
import { quineQuestions } from "./w-v-o-quine";

// Synthesists, Morphologists, Market Physicists
import { chowningQuestions } from "./john-chowning";
import { xenakisQuestions } from "./iannis-xenakis";
import { helmholtzQuestions } from "./hermann-von-helmholtz";
import { keplerQuestions } from "./johannes-kepler";
import { thompsonDarcyQuestions } from "./william-thompson";
import { conwayQuestions } from "./john-conway";
import { fibonacciQuestions } from "./leonardo-fibonacci";
import { mendelQuestions } from "./gregor-mendel";
import { itoQuestions } from "./kiyosi-ito";
import { bachelierQuestions } from "./louis-bachelier";
import { shapleyQuestions } from "./lloyd-shapley";

// Market Architects & Strategic Minds
import { arrowQuestions } from "./kenneth-arrow";
import { solowQuestions } from "./robert-solow";
import { ostromQuestions } from "./elinor-ostrom";
import { kantorovichQuestions } from "./leonid-kantorovich";
import { blackwellQuestions } from "./david-blackwell";
import { dufloQuestions } from "./esther-duflo";
import { debreuQuestions } from "./gerard-debreu";
import { adelmanQuestions } from "./leonard-adleman";
import { goldinQuestions } from "./claudia-goldin";
import { schellingQuestions } from "./thomas-schelling";

// Pure Math Final Bosses
import { perelmanQuestions } from "./grigori-perelman";
import { wilesQuestions } from "./andrew-wiles";
import { penroseQuestions } from "./roger-penrose";

// Digital Architects
import { ritchieQuestions } from "./dennis-ritchie";
import { bernersLeeQuestions } from "./tim-berners-lee";
import { joanClarkeQuestions } from "./joan-clarke";

// Risk, Physics, and Markets
import { talebQuestions } from "./nassim-taleb";
import { samuelsonQuestions } from "./paul-samuelson";
import { wittenQuestions } from "./edward-witten";
import { bellBurnellQuestions } from "./jocelyn-bell-burnell";

// Nuclear Age
import { oppenheimerQuestions } from "./j-robert-oppenheimer";
import { ulamQuestions } from "./stanislaw-ulam";
import { szilardQuestions } from "./leo-szilard";
import { wheelerQuestions } from "./john-wheeler";
import { betheQuestions } from "./hans-bethe";

// Santa Fe Institute / Complexity Masters
import { farmerQuestions } from "./j-doyne-farmer";
import { brianArthurQuestions } from "./w-brian-arthur";
import { hollandQuestions } from "./john-holland";
import { gellMannQuestions } from "./murray-gell-mann";
import { geoffreyWestQuestions } from "./geoffrey-west";
import { melanieMitchellQuestions } from "./melanie-mitchell";

// New Modern AI & Math thinkers
import { khotQuestions } from "./subhash-khot";
import { candesQuestions } from "./emmanuel-candes";
import { aroraQuestions } from "./sanjeev-arora";
import { villaniQuestions } from "./cedric-villani";
import { michaelJordanMLQuestions } from "./michael-jordan";
import { alexandrWangQuestions } from "./alexandr-wang";
import { benGreenQuestions } from "./ben-green";

// Thermodynamics & Physics thinkers
import { boltzmannQuestions } from "./ludwig-boltzmann";
import { danielBernoulliQuestions } from "./daniel-bernoulli";
import { nernstQuestions } from "./walther-nernst";
import { rayleighQuestions } from "./lord-rayleigh";
import { kelvinQuestions } from "./lord-kelvin";

// Earth & Space thinkers batch 2
import { arrheniusQuestions } from "./svante-arrhenius";
import { friedmannQuestions } from "./alexander-friedmann";
import { gamowQuestions } from "./george-gamow";
import { chandrasekharQuestions } from "./subrahmanyan-chandrasekhar";
import { zwickyQuestions } from "./fritz-zwicky";

// Pure Math Titans batch
import { jacobiQuestions } from "./carl-jacobi";
import { liouvilleQuestions } from "./joseph-liouville";
import { kleinQuestions } from "./felix-klein";
import { eisensteinQuestions } from "./gotthold-eisenstein";
import { borelQuestions } from "./emile-borel";
import { churchQuestions } from "./alonzo-church";

// Electromagnetism & Optics Pioneers
import { olbersQuestions } from "./heinrich-olbers";
import { huygensQuestions } from "./christiaan-huygens";
import { thomasYoungQuestions } from "./thomas-young";
import { coulombQuestions } from "./charles-coulomb";
import { ampereQuestions } from "./andre-marie-ampere";
import { lenzQuestions } from "./heinrich-lenz";
import { biotSavartQuestions } from "./jean-baptiste-biot";
import { ehrenfestQuestions } from "./paul-ehrenfest";

// Population, Mechanics, Numerical, Astro, Plasma, Neuro, StatPhys, Chemistry, Drag, Weather
import { lotkaQuestions } from "./alfred-lotka";
import { verhulstQuestions } from "./pierre-verhulst";
import { stokesQuestions } from "./george-stokes";
import { rungeQuestions } from "./carl-runge";
import { emdenQuestions } from "./robert-emden";
import { hasegawaQuestions } from "./akira-hasegawa";
import { fitzhughQuestions } from "./richard-fitzhugh";
import { kardarQuestions } from "./mehran-kardar";
import { prigogineQuestions } from "./ilya-prigogine";
import { batemanQuestions } from "./harry-bateman";
import { richardsonQuestions } from "./lewis-fry-richardson";

// Non-Western & Global Mathematicians batch 2
import { bhaskaraQuestions } from "./bhaskara-ii";
import { qinJiushaoQuestions } from "./qin-jiushao";
import { zhuShijieQuestions } from "./zhu-shijie";
import { khayyamQuestions } from "./omar-khayyam";
import { alKarajiQuestions } from "./abu-bakr-al-karaji";
import { takebeQuestions } from "./takebe-katahiro";

// Ancient & Global thinkers batch 3
import { yajnavalkyaQuestions } from "./yajnavalkya";
import { theaetetusQuestions } from "./theaetetus";
import { diophantusQuestions } from "./diophantus-of-alexandria";
import { huaLuogengQuestions } from "./hua-luogeng";
import { viazovskaQuestions } from "./maryna-viazovska";

// Prediction Markets & Market Microstructure
import { hansonQuestions } from "./robin-hanson";
import { avellanedaQuestions } from "./marco-avellaneda";
import { glostenMilgromQuestions } from "./lawrence-glosten";


// The Code & Logic Pioneers (CS, AI & Systems)
import { babbageQuestions } from "./charles-babbage";
import { minskyQuestions } from "./marvin-minsky";
import { coddQuestions } from "./edgar-codd";
import { kenThompsonQuestions } from "./ken-thompson";
import { torvaldsQuestions } from "./linus-torvalds";
import { cerfKahnQuestions } from "./cerf-kahn";
import { backusQuestions } from "./john-backus";
import { hoareQuestions } from "./tony-hoare";
import { liskovQuestions } from "./barbara-liskov";
import { cookQuestions } from "./stephen-cook";
import { karpQuestions } from "./richard-karp";
import { levinQuestions } from "./leonid-levin";
import { francesAllenQuestions } from "./frances-allen";
import { engelbartQuestions } from "./douglas-engelbart";
import { sutherlandQuestions } from "./ivan-sutherland";
import { alanKayQuestions } from "./alan-kay";
import { emilPostQuestions } from "./emil-post";
import { chomskyQuestions } from "./noam-chomsky";
import { newellQuestions } from "./allen-newell";
import { dantzigQuestions } from "./george-dantzig";

// The Quants & Probabilists (Economics, Finance & Stats)
import { kellyQuestions } from "./john-kelly";
import { scholesQuestions } from "./myron-scholes";
import { famaQuestions } from "./eugene-fama";
import { sharpeQuestions } from "./william-sharpe";
import { rossQuestions } from "./stephen-ross";
import { dermanQuestions } from "./emanuel-derman";
import { carrQuestions } from "./peter-carr";
import { wilmottQuestions } from "./paul-wilmott";
import { shreveQuestions } from "./steven-shreve";
import { levyQuestions } from "./haim-levy";
import { fellerQuestions } from "./william-feller";
import { coxQuestions } from "./john-cox";
import { hotellingQuestions } from "./harold-hotelling";
import { grangerQuestions } from "./clive-granger";
import { engleQuestions } from "./robert-engle";
import { boxQuestions } from "./george-box";
import { jenkinsQuestions } from "./gwilym-jenkins";
import { ramseyQuestions } from "./frank-ramsey";
import { muthQuestions } from "./john-muth";
import { shiryaevQuestions } from "./albert-shiryaev";

// The Masters of Form & Infinity (Pure & Applied Math)
import { descartesQuestions } from "./rene-descartes";
import { cardanoQuestions } from "./gerolamo-cardano";
import { napierQuestions } from "./john-napier";
import { brookTaylorQuestions } from "./brook-taylor";
import { maclaurinQuestions } from "./colin-maclaurin";
import { mongeQuestions } from "./gaspard-monge";
import { cayleyQuestions } from "./arthur-cayley";
import { sylvesterQuestions } from "./james-sylvester";
import { lebesgueQuestions } from "./henri-lebesgue";
import { weierstrassQuestions } from "./karl-weierstrass";
import { dedekindQuestions } from "./richard-dedekind";
import { weylQuestions } from "./hermann-weyl";
import { arnoldQuestions } from "./vladimir-arnold";
import { serreQuestions } from "./jeanpierre-serre";
import { atiyahQuestions } from "./michael-atiyah";
import { singerQuestions } from "./isadore-singer";
import { chebyshevQuestions } from "./pafnuty-chebyshev";
import { lyapunovQuestions } from "./aleksandr-lyapunov";
import { cartanQuestions } from "./elie-cartan";
import { hausdorffQuestions } from "./felix-hausdorff";

// The Architects of the Physical World (Physics & Chemistry)
import { galileoQuestions } from "./galileo-galilei";
import { carnotQuestions } from "./sadi-carnot";
import { gibbsQuestions } from "./willard-gibbs";
import { rutherfordQuestions } from "./ernest-rutherford";
import { jjthomsonQuestions } from "./jj-thomson";
import { lorentzQuestions } from "./hendrik-lorentz";
import { minkowskiQuestions } from "./hermann-minkowski";
import { pauliQuestions } from "./wolfgang-pauli";
import { bornQuestions } from "./max-born";
import { schwingerQuestions } from "./julian-schwinger";
import { dysonQuestions } from "./freeman-dyson";
import { johnbellQuestions } from "./john-bell";
import { thorneQuestions } from "./kip-thorne";
import { lemaitreQuestions } from "./georges-lemaitre";
import { eddingtonQuestions } from "./arthur-eddington";
import { avogadroQuestions } from "./amedeo-avogadro";
import { berzeliusQuestions } from "./jons-berzelius";
import { davyQuestions } from "./humphry-davy";
import { michelsonQuestions } from "./albert-michelson";
import { wolfeQuestions } from "./george-wolfe";
import { farkasQuestions } from "./julius-farkas";
import { gomoryQuestions } from "./ralph-gomory";
import { bendersQuestions } from "./jacques-benders";

// The System Thinkers (Biology, Engineering & Philosophy)
import { leeuwenhoekQuestions } from "./antonie-leeuwenhoek";
import { pasteurQuestions } from "./louis-pasteur";
import { kochQuestions } from "./robert-koch";
import { watsoncrickQuestions } from "./watson-crick";
import { sangerQuestions } from "./frederick-sanger";
import { mullisQuestions } from "./kary-mullis";
import { salkQuestions } from "./jonas-salk";
import { claudeBernardQuestions } from "./claude-bernard";
import { huntmorganQuestions } from "./thomas-morgan";
import { heavisideQuestions } from "./oliver-heaviside";
import { nyquistQuestions } from "./harry-nyquist";
import { dieselQuestions } from "./rudolf-diesel";
import { ottoQuestions } from "./nikolaus-otto";
import { zieglerNattaQuestions } from "./ziegler-natta";
import { searleQuestions } from "./john-searle";
import { popperQuestions } from "./karl-popper";
import { kuhnQuestions } from "./thomas-kuhn";
import { fullerQuestions } from "./buckminster-fuller";
import { herbertSimonQuestions } from "./herbert-simon";
import { coaseQuestions } from "./ronald-coase";

export const allThinkerQuestions: Question[] = [
  // Original 10
  ...hintonQuestions,
  ...turingQuestions,
  ...shannonQuestions,
  ...poincareQuestions,
  ...riemannQuestions,
  ...feynmanQuestions,
  ...vonNeumannQuestions,
  ...pearlQuestions,
  ...simonsQuestions,
  ...ramanujanQuestions,
  // Ancient thinkers
  ...euclidQuestions,
  ...archimedесQuestions,
  ...newtonQuestions,
  ...eulerQuestions,
  ...pythagorasQuestions,
  ...gaussQuestions,
  // New ancient
  ...leibnizQuestions,
  ...fermatQuestions,
  ...alkhwarizmiQuestions,
  ...lovelaceQuestions,
  ...noetherQuestions,
  ...curieQuestions,
  // Modern
  ...bengioQuestions,
  ...lecunQuestions,
  ...suttonQuestions,
  ...goodfellowQuestions,
  ...vapnikQuestions,
  ...einsteinQuestions,
  ...godelQuestions,
  ...diracQuestions,
  ...kolmogorovQuestions,
  ...hawkingQuestions,
  // Contemporary
  ...hassabisQuestions,
  ...vaswaniQuestions,
  ...karpathyQuestions,
  ...altmanQuestions,
  ...amodeiQuestions,
  ...ngQuestions,
  ...lifeiQuestions,
  ...ilyaQuestions,
  // Global MasterMinds
  ...taoQuestions,
  ...erdosQuestions,
  ...ramanQuestions,
  ...mirzakhaniQuestions,
  ...chernQuestions,
  ...zhangQuestions,
  ...goldwasserQuestions,
  ...kashiwaraQuestions,
  ...birkarQuestions,
  ...grothendieckQuestions,
  ...kovalevskayaQuestions,
  // New additions
  ...jeffDeanQuestions,
  ...kaiFuLeeQuestions,
  ...schmidhuberQuestions,
  ...linnainmaaQuestions,
  ...kozyrkovQuestions,
  ...suleymanQuestions,
  ...hilbertQuestions,
  ...gebruQuestions,
  // Prodigies
  ...pascalQuestions,
  ...galoisQuestions,
  ...hamiltonWRQuestions,
  ...abelQuestions,
  ...scholzeQuestions,
  ...venkateshQuestions,
  ...deviQuestions,
  ...demaineQuestions,
  // Earth & Space
  ...carlSaganQuestions,
  ...wegenerQuestions,
  ...veraRubinQuestions,
  // Economics
  ...adamSmithQuestions,
  ...johnNashQuestions,
  ...keynesQuestions,
  // Engineering
  ...nikolaTeslaQuestions,
  ...vonBraunQuestions,
  ...hedyLamarrQuestions,
  // Biology
  ...darwinQuestions,
  ...rosalindFranklinQuestions,
  ...doudnaQuestions,
  // Chemistry
  ...mendeleevQuestions,
  ...lavoisierQuestions,
  ...paulingQuestions,
  // Medical
  ...flemingQuestions,
  ...jennerQuestions,
  // Quant
  ...fischerBlackQuestions,
  ...edThorpQuestions,
  // Human Sciences
  ...kahnemanQuestions,
  ...pavlovQuestions,
  // Data Science
  ...tukeyQuestions,
  // π Pioneers & Trigonometry
  ...vieteQuestions,
  ...wallisQuestions,
  ...gregoryQuestions,
  ...vanCeulenQuestions,
  ...alkashiPiQuestions,
  ...ptolemyQuestions,
  ...hipparchusQuestions,
  ...tusiQuestions,
  // Cryptography Pioneers
  ...satoshiQuestions,
  ...diffieQuestions,
  ...shamirQuestions,
  ...kirchhoffQuestions,
  ...merkleQuestions,
  ...rivestQuestions,
  // Applied Sciences
  ...alhazenQuestions,
  ...maxwellQuestions,
  ...marconiQuestions,
  ...shockleyQuestions,
  ...kilbyQuestions,
  ...hookeQuestions,
  // New thinkers
  ...hubbleQuestions,
  ...georgeGreenQuestions,
  ...faradayQuestions,
  ...planckQuestions,
  ...bohrQuestions,
  // New thinkers
  ...kalmanQuestions,
  ...wienerQuestions,
  ...thalerQuestions,
  ...senQuestions,
  ...mertonRobertQuestions,
  ...markowitzQuestions,
  ...lamportQuestions,
  ...martinLofQuestions,
  // New thinkers: Math, Physics, CS, Statistics
  ...laplaceQuestions,
  ...bayesQuestions,
  ...cantorQuestions,
  ...cauchyQuestions,
  ...fourierQuestions,
  ...schrodingerQuestions,
  ...heisenbergQuestions,
  ...fermiQuestions,
  ...knuthQuestions,
  ...dijkstraQuestions,
  ...mccarthyQuestions,
  ...hopperQuestions,
  ...fisherQuestions,
  ...pearsonQuestions,
  // Female thinkers
  ...hypatiaQuestions,
  ...nightingaleQuestions,
  ...meitnerQuestions,
  ...wuQuestions,
  ...katherineJohnsonQuestions,
  ...hodgkinQuestions,
  ...mcclintockQuestions,
  ...uhlenbeckQuestions,
  ...dresselhausQuestions,
  ...cartwrightQuestions,
  // Female thinkers batch 2
  ...pandrosionQuestions,
  ...duchateletQuestions,
  ...agnesiQuestions,
  ...vaughanQuestions,
  ...robinsonQuestions,
  ...germainQuestions,
  ...payneQuestions,
  ...goeppertMayerQuestions,
  ...leavittQuestions,
  ...daubechiesQuestions,
  // Prodigies batch 2
  ...landauQuestions,
  ...feffermanQuestions,
  ...elkiesQuestions,
  ...ruthLawrenceQuestions,
  ...alissaCransQuestions,
  ...juneHuhQuestions,
  ...rudnickQuestions,
  // Foundational Architects, Chaos, Neural Nets, Scale
  ...booleQuestions,
  ...markovQuestions,
  ...lorenzQuestions,
  ...mandelbrotQuestions,
  ...hopfieldQuestions,
  ...rosenblattQuestions,
  ...margaretHamiltonQuestions,
  ...mooreQuestions,
  ...wolframQuestions,
  // Global Pioneers & Non-Western Titans
  ...perlmanQuestions,
  ...easleyQuestions,
  ...saruhashiQuestions,
  ...madhavaQuestions,
  ...brahmaguptaQuestions,
  ...boseQuestions,
  ...alJazariQuestions,
  ...sekiQuestions,
  // Paradox Masters & Foundational Logicians
  ...zenoQuestions,
  ...eubulidesQuestions,
  ...torricelliQuestions,
  ...russellQuestions,
  ...banachTarskiQuestions,
  ...brouwerQuestions,
  ...quineQuestions,
  // Synthesists, Morphologists, Market Physicists
  ...chowningQuestions,
  ...xenakisQuestions,
  ...helmholtzQuestions,
  ...keplerQuestions,
  ...thompsonDarcyQuestions,
  ...conwayQuestions,
  ...fibonacciQuestions,
  ...mendelQuestions,
  ...itoQuestions,
  ...bachelierQuestions,
  ...shapleyQuestions,
  // Market Architects & Strategic Minds
  ...arrowQuestions,
  ...solowQuestions,
  ...ostromQuestions,
  ...kantorovichQuestions,
  ...blackwellQuestions,
  ...dufloQuestions,
  ...debreuQuestions,
  ...adelmanQuestions,
  ...goldinQuestions,
  ...schellingQuestions,
  // Pure Math Final Bosses
  ...perelmanQuestions,
  ...wilesQuestions,
  ...penroseQuestions,
  // Digital Architects
  ...ritchieQuestions,
  ...bernersLeeQuestions,
  ...joanClarkeQuestions,
  // Risk, Physics, and Markets
  ...talebQuestions,
  ...samuelsonQuestions,
  ...wittenQuestions,
  ...bellBurnellQuestions,
  // Nuclear Age
  ...oppenheimerQuestions,
  ...ulamQuestions,
  ...szilardQuestions,
  ...wheelerQuestions,
  ...betheQuestions,
  // Santa Fe Institute / Complexity Masters
  ...farmerQuestions,
  ...brianArthurQuestions,
  ...hollandQuestions,
  ...gellMannQuestions,
  ...geoffreyWestQuestions,
  ...melanieMitchellQuestions,
  // New Modern AI & Math thinkers
  ...khotQuestions,
  ...candesQuestions,
  ...aroraQuestions,
  ...villaniQuestions,
  ...michaelJordanMLQuestions,
  ...alexandrWangQuestions,
  ...benGreenQuestions,
  // Thermodynamics & Physics thinkers
  ...boltzmannQuestions,
  ...danielBernoulliQuestions,
  ...nernstQuestions,
  ...rayleighQuestions,
  ...kelvinQuestions,
  // Earth & Space thinkers batch 2
  ...arrheniusQuestions,
  ...friedmannQuestions,
  ...gamowQuestions,
  ...chandrasekharQuestions,
  ...zwickyQuestions,
  // Pure Math Titans batch
  ...jacobiQuestions,
  ...liouvilleQuestions,
  ...kleinQuestions,
  ...eisensteinQuestions,
  ...borelQuestions,
  ...churchQuestions,
  // Electromagnetism & Optics Pioneers
  ...olbersQuestions,
  ...huygensQuestions,
  ...thomasYoungQuestions,
  ...coulombQuestions,
  ...ampereQuestions,
  ...lenzQuestions,
  ...biotSavartQuestions,
  ...ehrenfestQuestions,
  // Population, Mechanics, Numerical, Astro, Plasma, Neuro, StatPhys, Chemistry, Drag, Weather
  ...lotkaQuestions,
  ...verhulstQuestions,
  ...stokesQuestions,
  ...rungeQuestions,
  ...emdenQuestions,
  ...hasegawaQuestions,
  ...fitzhughQuestions,
  ...kardarQuestions,
  ...prigogineQuestions,
  ...batemanQuestions,
  ...richardsonQuestions,
  // Non-Western & Global Mathematicians batch 2
  ...bhaskaraQuestions,
  ...qinJiushaoQuestions,
  ...zhuShijieQuestions,
  ...khayyamQuestions,
  ...alKarajiQuestions,
  ...takebeQuestions,
  // Ancient & Global thinkers batch 3
  ...yajnavalkyaQuestions,
  ...theaetetusQuestions,
  ...diophantusQuestions,
  ...huaLuogengQuestions,
  ...viazovskaQuestions,
  // Prediction Markets & Market Microstructure
  ...hansonQuestions,
  ...avellanedaQuestions,
  ...glostenMilgromQuestions,

  // The Code & Logic Pioneers (CS, AI & Systems)
  ...babbageQuestions,
  ...minskyQuestions,
  ...coddQuestions,
  ...kenThompsonQuestions,
  ...torvaldsQuestions,
  ...cerfKahnQuestions,
  ...backusQuestions,
  ...hoareQuestions,
  ...liskovQuestions,
  ...cookQuestions,
  ...karpQuestions,
  ...levinQuestions,
  ...francesAllenQuestions,
  ...engelbartQuestions,
  ...sutherlandQuestions,
  ...alanKayQuestions,
  ...emilPostQuestions,
  ...chomskyQuestions,
  ...newellQuestions,
  ...dantzigQuestions,

  // The Quants & Probabilists (Economics, Finance & Stats)
  ...kellyQuestions,
  ...scholesQuestions,
  ...famaQuestions,
  ...sharpeQuestions,
  ...rossQuestions,
  ...dermanQuestions,
  ...carrQuestions,
  ...wilmottQuestions,
  ...shreveQuestions,
  ...levyQuestions,
  ...fellerQuestions,
  ...coxQuestions,
  ...hotellingQuestions,
  ...grangerQuestions,
  ...engleQuestions,
  ...boxQuestions,
  ...jenkinsQuestions,
  ...ramseyQuestions,
  ...muthQuestions,
  ...shiryaevQuestions,

  // The Masters of Form & Infinity (Pure & Applied Math)
  ...descartesQuestions,
  ...cardanoQuestions,
  ...napierQuestions,
  ...brookTaylorQuestions,
  ...maclaurinQuestions,
  ...mongeQuestions,
  ...cayleyQuestions,
  ...sylvesterQuestions,
  ...lebesgueQuestions,
  ...weierstrassQuestions,
  ...dedekindQuestions,
  ...weylQuestions,
  ...arnoldQuestions,
  ...serreQuestions,
  ...atiyahQuestions,
  ...singerQuestions,
  ...chebyshevQuestions,
  ...lyapunovQuestions,
  ...cartanQuestions,
  ...hausdorffQuestions,

  // The Architects of the Physical World (Physics & Chemistry)
  ...galileoQuestions,
  ...carnotQuestions,
  ...gibbsQuestions,
  ...rutherfordQuestions,
  ...jjthomsonQuestions,
  ...lorentzQuestions,
  ...minkowskiQuestions,
  ...pauliQuestions,
  ...bornQuestions,
  ...schwingerQuestions,
  ...dysonQuestions,
  ...johnbellQuestions,
  ...thorneQuestions,
  ...lemaitreQuestions,
  ...eddingtonQuestions,
  ...avogadroQuestions,
  ...berzeliusQuestions,
  ...davyQuestions,
  ...michelsonQuestions,
  ...wolfeQuestions,
  ...farkasQuestions,
  ...gomoryQuestions,
  ...bendersQuestions,

  // The System Thinkers (Biology, Engineering & Philosophy)
  ...leeuwenhoekQuestions,
  ...pasteurQuestions,
  ...kochQuestions,
  ...watsoncrickQuestions,
  ...sangerQuestions,
  ...mullisQuestions,
  ...salkQuestions,
  ...claudeBernardQuestions,
  ...huntmorganQuestions,
  ...heavisideQuestions,
  ...nyquistQuestions,
  ...dieselQuestions,
  ...ottoQuestions,
  ...zieglerNattaQuestions,
  ...searleQuestions,
  ...popperQuestions,
  ...kuhnQuestions,
  ...fullerQuestions,
  ...herbertSimonQuestions,
  ...coaseQuestions,
];
export function getThinkerQuestions(slug: string): Question[] {
  return allThinkerQuestions.filter((q) => q.topic === slug);
}
