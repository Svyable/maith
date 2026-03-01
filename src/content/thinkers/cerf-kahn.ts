import type { Question } from '../types';

export const cerfKahnQuestions: Question[] = [
  {
    id: 31025,
    topic: 'cerf-kahn',
    difficulty: 'easy',
    question: 'Cerf and Kahn designed the TCP/IP protocol. What is the fundamental responsibility of IP (Internet Protocol) within this pair?',
    options: [
      'To route packets of data from the source to the correct physical destination address.',
      'To ensure that all packets arrive in the correct sequential order without errors.',
      'To dynamically encrypt data payloads preventing unauthorized network snooping.',
      'To assign human-readable domain names to complex numerical network addresses.'
    ],
    correctIndex: 0,
    explanation: 'IP is solely responsible for routing packets across the network to the correct IP address. It is a "best effort" protocol; it does not guarantee the packets will arrive, or that they will arrive in order.',
    realWorld: 'Think of IP as the mail carrier delivering an envelope to a specific address, totally unaware of what the letter inside says or if page 2 arrives before page 1.',
    hint: 'It acts exactly like the postal routing system, but makes absolutely no guarantees about successful delivery.',
  },
  {
    id: 31026,
    topic: 'cerf-kahn',
    difficulty: 'easy',
    question: 'If IP handles routing, what specific problem does TCP (Transmission Control Protocol) solve in Cerf and Kahn’s architecture?',
    options: [
      'It guarantees data integrity by reassembling packets in order and requesting lost ones.',
      'It physically encodes digital binary data into analog radio frequencies for transmission.',
      'It constantly negotiates bandwidth pricing between internet service providers.',
      'It creates strict graphical interfaces allowing browsers to render text properly.'
    ],
    correctIndex: 0,
    explanation: 'TCP operates on top of IP. It establishes a connection, numbers the packets, acknowledges receipt, and retransmits any packets that get dropped along the way, ensuring a perfectly reliable data stream.',
    realWorld: 'TCP is used for downloading files, loading web pages, and sending emails. (In contrast, UDP is used for video calls where dropping a frame is better than waiting for it).',
    hint: 'It is the obsessive manager that checks the receipts and demands you resend anything that went missing.',
  },
  {
    id: 31027,
    topic: 'cerf-kahn',
    difficulty: 'hard',
    question: 'A core philosophy of Cerf and Kahn’s network design was the "End-to-End Principle." What does this dictate about the internet’s infrastructure?',
    options: [
      'The network core should be completely "dumb," pushing all complex logic to the end devices.',
      'Every individual router must be deeply intelligent, inspecting and modifying packet contents.',
      'Connections can only be established if the physical wire length is strictly verified end-to-end.',
      'Data must be temporarily stored in massive central hubs before being forwarded to the user.'
    ],
    correctIndex: 0,
    explanation: 'The End-to-End principle states that the internal network (routers/switches) should only do the bare minimum to move data. All the "smart" stuff—error checking, encryption, reassembly—happens at the endpoints (your laptop or the server).',
    realWorld: 'This is why the internet scaled so massively; you don’t have to upgrade the entire global infrastructure every time you invent a new app or protocol.',
    hint: 'Keep the pipes simple, put the brains in the computers attached to the pipes.',
  },
  {
    id: 31028,
    topic: 'cerf-kahn',
    difficulty: 'sota',
    question: 'Before creating TCP/IP, Bob Kahn played a critical role in demonstrating ARPANET to the public in 1972. What exactly did he organize?',
    options: [
      'He orchestrated a live demonstration networking 40 different computers at a massive conference.',
      'He sent the first highly encrypted banking transaction across transatlantic submarine cables.',
      'He established a satellite link that successfully transmitted a live video feed to the Pentagon.',
      'He published the first open-source software manual directly via an FTP download link.'
    ],
    correctIndex: 0,
    explanation: 'At the International Computer Communication Conference (ICCC) in 1972, Kahn organized a spectacularly successful public demonstration of ARPANET, wiring together 40 terminals and proving packet switching wasn\'t just academic theory.',
    realWorld: 'This demonstration fundamentally convinced the telecom industry and the military that packet-switching was vastly superior to traditional circuit-switched phone lines.',
    hint: 'He threw a massive tech party to prove the network wouldn\'t crash under load.',
  },
  {
    id: 31029,
    topic: 'cerf-kahn',
    difficulty: 'hard',
    question: 'Vint Cerf has spent the last two decades working on the Interplanetary Internet. What fundamental issue prevents standard TCP/IP from working in deep space?',
    options: [
      'The speed of light causes massive latency and connection timeouts that break standard TCP.',
      'Cosmic radiation instantly corrupts the specific 32-bit checksums used in IPv4.',
      'Standard routers rely on Earth’s magnetic field for internal clock synchronization.',
      'Spacecraft lack the necessary electrical power to calculate IP routing tables.'
    ],
    correctIndex: 0,
    explanation: 'TCP relies on rapid "acknowledgment" packets to keep a connection open. If you ping Mars, it takes up to 24 minutes for a reply. Standard TCP interprets this delay as a dropped connection and cancels the transmission.',
    realWorld: 'Cerf helped design Delay-Tolerant Networking (DTN) and the Bundle Protocol, which use a "store-and-forward" method to handle massive communication delays in deep space.',
    hint: 'TCP gets highly impatient if it doesn\'t get a response back in a few milliseconds.',
  }
];