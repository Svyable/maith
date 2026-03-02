import type { Question } from '../types';

export const leslieLamportQuestions: Question[] = [
  {
    id: 19601, topic: 'leslie-lamport', difficulty: 'easy',
    question: 'Leslie Lamport is best known for creating:',
    options: ['LaTeX typesetting system and foundational distributed systems theory', 'The Linux kernel', 'The Python programming language', 'The TCP/IP protocol'],
    correctIndex: 0,
    explanation: 'Lamport created LaTeX (the standard for scientific publishing) and made foundational contributions to distributed systems: logical clocks, Byzantine fault tolerance, and the Paxos consensus algorithm.',
    realWorld: 'Every scientific paper in math/CS/physics is written in LaTeX. Every cloud database uses Lamport\'s ideas.',
    hint: 'He won the 2013 Turing Award — the highest honor in computer science.',
  },
  {
    id: 19602, topic: 'leslie-lamport', difficulty: 'hard',
    question: 'Lamport\'s logical clocks solve the problem of:',
    options: ['Ordering events in a distributed system without synchronized physical clocks', 'Speeding up computation', 'Encrypting messages', 'Compressing data for transmission'],
    correctIndex: 0,
    explanation: 'Lamport\'s "happens-before" relation and logical timestamps (1978) provide a causal ordering of events in distributed systems where physical clocks can\'t be perfectly synchronized.',
    realWorld: 'Amazon DynamoDB, Apache Cassandra, and every distributed database use vector clocks based on Lamport\'s work.',
    hint: 'If event A could have caused event B, then A\'s timestamp must be less than B\'s.',
  },
  {
    id: 19603, topic: 'leslie-lamport', difficulty: 'sota',
    question: 'TLA+ (Temporal Logic of Actions), designed by Lamport, is used to:',
    options: ['Formally specify and verify concurrent and distributed systems', 'Write high-performance code', 'Design user interfaces', 'Optimize database queries'],
    correctIndex: 0,
    explanation: 'TLA+ uses temporal logic to specify system behavior, then the TLC model checker exhaustively verifies properties. It catches subtle concurrency bugs that testing cannot.',
    realWorld: 'Amazon Web Services uses TLA+ to verify critical infrastructure including S3, DynamoDB, and EBS. It found bugs that would have caused data loss.',
    hint: 'It is a formal specification language — you describe what the system should do, then prove it does.',
  },
];
