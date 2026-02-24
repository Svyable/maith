// ── Vault Registry — Humanity's Greatest Classified Secrets ──────────

export interface VaultEntry {
  id: string;
  rank: number;
  name: string;
  codename?: string;
  classifiedYear: string;
  declassifiedYear: string;
  agency: string;
  field: string;
  domain: string;
  domainEmoji: string;
  summary: string;
  fullStory: string;
  keyFigures: string[];
  significance: string;
  legacy: string;
  /** Related quiz topic slug */
  relatedTopic: string;
  /** Secrecy rating 1–10 */
  secrecyLevel: number;
  /** Impact on modern world 1–10 */
  impact: number;
}

export const VAULT_ENTRIES: VaultEntry[] = [
  {
    id: 'gchq-rsa',
    rank: 1,
    name: 'The GCHQ RSA Equations',
    codename: 'Non-Secret Encryption',
    classifiedYear: '1973',
    declassifiedYear: '1997',
    agency: 'GCHQ',
    field: 'Public-Key Cryptography',
    domain: 'Cryptography',
    domainEmoji: '🔐',
    summary: 'Clifford Cocks invented RSA encryption at GCHQ in 1973 — four years before Rivest, Shamir, and Adleman published it publicly.',
    fullStory: 'In the summer of 1973, GCHQ mathematician Clifford Cocks was briefed on a problem posed by his colleague James Ellis: could two parties establish a shared secret over an insecure channel without prior contact? Cocks solved it the same afternoon by recognizing that the mathematical hardness of factoring the product of two large primes could serve as a trapdoor function. He wrote a classified internal memo describing what is now known as RSA encryption. Malcolm Williamson independently invented the equivalent of Diffie-Hellman key exchange the following year. All three discoveries were immediately classified. GCHQ was reportedly approached after Diffie and Hellman published their 1976 paper and Rivest, Shamir, and Adleman published RSA in 1978, but declined to acknowledge priority. James Ellis, who had conceived the foundational idea of "non-secret encryption" in 1970, died on November 25, 1997 — exactly 23 days before the announcement that would have given him public credit.',
    keyFigures: ['Clifford Cocks', 'James Ellis', 'Malcolm Williamson'],
    significance: 'The inventors of the mathematical foundations of internet security died in public obscurity, having been forbidden for 24 years to claim their own discovery.',
    legacy: 'RSA secures every HTTPS connection, digital signature, and cryptocurrency transaction on Earth. The irony: the man who invented it couldn\'t tell anyone.',
    relatedTopic: 'cryptography',
    secrecyLevel: 9,
    impact: 10,
  },
  {
    id: 'des-sbox',
    rank: 2,
    name: 'DES S-Box Differential Resistance',
    codename: 'IBM T-Attack',
    classifiedYear: '1974',
    declassifiedYear: '1994',
    agency: 'NSA / IBM',
    field: 'Block Cipher Design',
    domain: 'Cryptography',
    domainEmoji: '🔐',
    summary: 'IBM discovered differential cryptanalysis in 1974 and engineered DES S-boxes to resist it — then the NSA asked them to keep it secret for 16 years.',
    fullStory: 'In 1974, IBM\'s cryptography team — led by Horst Feistel and including Walter Tuchman and Don Coppersmith — discovered what they called "differential cryptanalysis": a method of attacking block ciphers by analyzing how specific differences in plaintext pairs produce differences in ciphertext pairs. They applied this to design the S-boxes (substitution tables) in DES such that differential characteristics had uniformly low probability, making the cipher resistant to an attack that the public cryptography community would not independently discover for sixteen years. The NSA asked IBM to keep the technique classified. IBM agreed. In 1990, Israeli cryptographers Eli Biham and Adi Shamir independently discovered differential cryptanalysis and published it. Don Coppersmith published IBM\'s original design criteria in 1994, confirming the S-boxes were intentionally engineered to resist the attack.',
    keyFigures: ['Don Coppersmith', 'Horst Feistel', 'Eli Biham', 'Adi Shamir'],
    significance: 'The most consequential deliberate suppression of a mathematical technique in civilian cryptography history.',
    legacy: 'Differential cryptanalysis became a foundational tool for evaluating all modern ciphers. AES candidates were specifically tested against it.',
    relatedTopic: 'cybersecurity',
    secrecyLevel: 8,
    impact: 9,
  },
  {
    id: 'skipjack',
    rank: 3,
    name: 'The Skipjack Block Cipher',
    codename: 'Clipper Chip',
    classifiedYear: '1987',
    declassifiedYear: '1998',
    agency: 'NSA',
    field: 'Block Cipher Design',
    domain: 'Cryptography',
    domainEmoji: '🔐',
    summary: 'The only NSA-designed block cipher ever publicly released. An 80-bit key, 32-round Feistel network deployed in the controversial Clipper chip.',
    fullStory: 'Skipjack was developed by the NSA around 1987 and deployed in the Clipper chip — the government\'s controversial key-escrow encryption system for telephone communications. The NSA refused to publish the algorithm, allowing only a panel of five civilian cryptographers to review it under non-disclosure. They pronounced it sound. The public cryptography community was deeply skeptical: any algorithm whose security relied on secrecy rather than mathematical rigor violated Kerckhoffs\'s principle. The Clipper chip program collapsed largely because no one would trust a classified cipher from an intelligence agency. Under pressure, NSA declassified Skipjack on June 24, 1998. Within one day, Biham and Shamir had found an attack against 16 of 32 rounds. Within months, they extended it to 31 of 32 rounds. The declassification revealed that Skipjack\'s structure dated to building blocks developed as early as 1940 — confirming a classified 40+ year cryptographic research program.',
    keyFigures: ['NSA Cryptographic Division', 'Eli Biham', 'Adi Shamir'],
    significance: 'Demonstrated that classified algorithms violate Kerckhoffs\'s principle and that government backdoors erode public trust in cryptographic standards.',
    legacy: 'The Clipper chip\'s failure established the precedent that public cryptographic standards must be openly reviewed. This principle directly shaped AES selection.',
    relatedTopic: 'cybersecurity',
    secrecyLevel: 9,
    impact: 8,
  },
  {
    id: 'enigma',
    rank: 4,
    name: 'The Enigma Decryption',
    codename: 'Ultra',
    classifiedYear: '1940',
    declassifiedYear: '1974',
    agency: 'GC&CS (Bletchley Park)',
    field: 'Cryptanalysis',
    domain: 'Cryptography',
    domainEmoji: '🔐',
    summary: 'Alan Turing and the Bletchley Park team broke the Enigma cipher, shortening WWII by an estimated 2 years. Kept secret for 29 years after the war ended.',
    fullStory: 'Building on Polish breakthroughs by Marian Rejewski, the British codebreakers at Bletchley Park — led by Alan Turing and Gordon Welchman — developed the Bombe, an electromechanical device that exploited the Enigma machine\'s mathematical weaknesses. The key insight was that Enigma never encrypted a letter as itself, providing a critical constraint. Turing\'s probabilistic approach (Banburismus) reduced the search space for naval Enigma, enabling the Allies to read U-boat communications and win the Battle of the Atlantic. Churchill called the Bletchley Park staff "the geese that laid the golden egg and never cackled." The entire operation — codenamed Ultra — remained classified until 1974, when F.W. Winterbotham published "The Ultra Secret." For 29 years after the war, the thousands who had worked at Bletchley Park kept total silence.',
    keyFigures: ['Alan Turing', 'Gordon Welchman', 'Marian Rejewski', 'Dilly Knox'],
    significance: 'Historians estimate Ultra shortened WWII by 2 years and saved 14 million lives. Turing\'s theoretical work on computability directly led to modern computer science.',
    legacy: 'The conceptual foundation of modern computing was born from wartime cryptanalysis. Turing\'s persecution and death remain a profound moral stain on British history.',
    relatedTopic: 'cryptography',
    secrecyLevel: 10,
    impact: 10,
  },
  {
    id: 'venona',
    rank: 5,
    name: 'The VENONA Decryptions',
    codename: 'VENONA / BRIDE',
    classifiedYear: '1943',
    declassifiedYear: '1995',
    agency: 'US Army SIS / NSA',
    field: 'One-Time Pad Cryptanalysis',
    domain: 'Cryptography',
    domainEmoji: '🔐',
    summary: 'The US secretly broke Soviet one-time pad messages — supposedly unbreakable — by exploiting key reuse. Kept classified for 52 years.',
    fullStory: 'In 1943, the US Army\'s Signal Intelligence Service began a secret program to decrypt Soviet diplomatic communications. One-time pads are theoretically unbreakable (Shannon proved this in 1949), but wartime Soviet manufacturing errors caused some key pages to be duplicated and reused. Cryptanalyst Meredith Gardner exploited these "depth" collisions, eventually decrypting roughly 3,000 messages that revealed the scope of Soviet espionage in the Manhattan Project. VENONA identified Klaus Fuchs, the Rosenbergs, and dozens of other spies. The program was so secret that even President Truman was reportedly not briefed. VENONA was not declassified until 1995 — 52 years after it began — making it one of the longest-running classified intelligence programs in US history.',
    keyFigures: ['Meredith Gardner', 'Cecil Phillips', 'Gene Grabeel'],
    significance: 'Proved that even "perfect" cryptographic systems fail when implementation is flawed. The gap between theoretical security and operational security remains the central problem of cryptography.',
    legacy: 'VENONA reshaped Cold War historiography. The decryptions definitively settled decades of debate about the extent of Soviet espionage in the US.',
    relatedTopic: 'cryptography',
    secrecyLevel: 10,
    impact: 9,
  },
  {
    id: 'dual-ec',
    rank: 6,
    name: 'Dual_EC_DRBG Backdoor',
    codename: 'BULLRUN',
    classifiedYear: '2004',
    declassifiedYear: '2013',
    agency: 'NSA',
    field: 'Random Number Generation',
    domain: 'Cryptography',
    domainEmoji: '🔐',
    summary: 'The NSA inserted a mathematical backdoor into a NIST-standardized random number generator, undermining global cryptographic infrastructure.',
    fullStory: 'In 2004, NIST published Special Publication 800-90A, standardizing four pseudorandom number generators. One of them — Dual_EC_DRBG — was championed by the NSA. In 2007, cryptographers Dan Shumow and Niels Ferguson demonstrated at a rump session of CRYPTO that the algorithm contained what appeared to be a backdoor: the relationship between two elliptic curve points (P and Q) could allow anyone who knew the discrete logarithm between them to predict all future outputs. Despite this, Dual_EC remained a NIST and ISO standard. RSA Security made it the default in their BSAFE library (reportedly after receiving $10 million from the NSA). In 2013, Edward Snowden\'s documents revealed the NSA\'s BULLRUN program, which sought to "insert vulnerabilities into commercial encryption systems." NIST withdrew the standard. RSA Security advised customers to stop using it.',
    keyFigures: ['Dan Shumow', 'Niels Ferguson', 'Edward Snowden'],
    significance: 'The most significant known case of a government deliberately compromising a public cryptographic standard. Shattered trust in NIST standardization processes.',
    legacy: 'Led to complete reform of NIST\'s cryptographic standardization process. The post-quantum cryptography competition was explicitly designed with transparency to prevent a repeat.',
    relatedTopic: 'cybersecurity',
    secrecyLevel: 9,
    impact: 10,
  },
  {
    id: 'manhattan-implosion',
    rank: 7,
    name: 'The Implosion Lens Equations',
    codename: 'Manhattan Project — Fat Man',
    classifiedYear: '1944',
    declassifiedYear: '1960s (partial)',
    agency: 'Los Alamos / US DoE',
    field: 'Shaped Charge Physics',
    domain: 'Physics',
    domainEmoji: '⚛️',
    summary: 'The mathematical equations for spherical implosion lenses that compress plutonium to supercriticality — the hardest engineering problem of the atomic age.',
    fullStory: 'The gun-type uranium bomb (Little Boy) was straightforward. The plutonium bomb (Fat Man) required solving a far harder problem: simultaneously detonating 32 explosive lenses to produce a perfectly spherical converging shockwave that would compress a plutonium core from subcritical to supercritical in microseconds. The mathematics — hydrodynamic equations governing converging detonation waves in heterogeneous explosive charges — was solved by John von Neumann, who also co-invented the Monte Carlo method at Los Alamos specifically to numerically simulate the implosion process. The lens equations remained classified for decades because they represent the core "secret" of nuclear weapons: the geometry of implosion.',
    keyFigures: ['John von Neumann', 'Seth Neddermeyer', 'George Kistiakowsky'],
    significance: 'Von Neumann\'s work at Los Alamos led to both nuclear weapons and the birth of computational science. The Monte Carlo method, invented to model implosion, now underpins all of computational statistics.',
    legacy: 'Every thermonuclear weapon, every Monte Carlo simulation in finance, every MCMC chain in Bayesian ML — all trace lineage to classified equations written in a New Mexico desert.',
    relatedTopic: 'quantum-mechanics',
    secrecyLevel: 10,
    impact: 10,
  },
  {
    id: 'public-key-knapsack',
    rank: 8,
    name: 'NSA Suite A Algorithms',
    codename: 'Suite A',
    classifiedYear: '~1960s',
    declassifiedYear: 'Still classified',
    agency: 'NSA',
    field: 'Classified Cryptographic Algorithms',
    domain: 'Cryptography',
    domainEmoji: '🔐',
    summary: 'The NSA\'s Suite A — a family of classified algorithms for TOP SECRET and above — has never been publicly described. We know they exist. We know nothing else.',
    fullStory: 'The NSA maintains two tiers of cryptographic algorithms: Suite B (public algorithms like AES-256, SHA-384, ECDSA P-384) for SECRET and below, and Suite A for TOP SECRET/SCI and above. Suite A algorithms have never been publicly described — not their names, not their structures, not their key sizes, not their mathematical foundations. The only public knowledge is that they exist, that they are implemented in Type 1 cryptographic equipment, and that they require clearance to access. In 2016, the NSA announced it was transitioning away from Suite B\'s elliptic curve algorithms (due to quantum computing concerns), raising the question of what Suite A has used all along — and whether the NSA\'s classified mathematicians solved the post-quantum problem decades before NIST began its public competition.',
    keyFigures: ['Unknown — NSA cryptographers with no public identity'],
    significance: 'Suite A represents the outer boundary of known unknown cryptography — algorithms that protect the most sensitive intelligence on Earth, designed by mathematicians who cannot publish.',
    legacy: 'The existence of Suite A is a permanent reminder that the publicly known frontier of cryptography may be decades behind the classified frontier.',
    relatedTopic: 'cryptography',
    secrecyLevel: 10,
    impact: 8,
  },
];

export const VAULT_AGENCIES = [...new Set(VAULT_ENTRIES.map((e) => e.agency))];
export const VAULT_DOMAINS = [...new Set(VAULT_ENTRIES.map((e) => e.domain))];
