import type { Question } from '../types';

export const bernersLeeQuestions: Question[] = [
  {
    id: 21040,
    topic: 'berners-lee',
    difficulty: 'sota',
    question: 'Tim Berners-Lee\'s original 1989 proposal at CERN described the World Wide Web as a system based on which three core technologies?',
    options: ['HTML, HTTP, and URLs', 'TCP/IP, FTP, and DNS', 'SGML, Gopher, and Telnet', 'XML, SOAP, and REST'],
    correctIndex: 0,
    explanation: 'Berners-Lee designed the Web around three pillars: HTML (document markup), HTTP (transfer protocol), and URLs (universal addressing). This triad remains the foundation of the modern web.',
    realWorld: 'Every website you visit still uses these three technologies, essentially unchanged in their core design.',
    hint: 'A markup language, a transfer protocol, and an addressing scheme.',
  },
  {
    id: 21041,
    topic: 'berners-lee',
    difficulty: 'sota',
    question: 'What was Berners-Lee\'s primary motivation for creating the World Wide Web?',
    options: ['Helping CERN physicists share research documents', 'Creating a commercial internet platform', 'Building a social networking system', 'Replacing email with a better protocol'],
    correctIndex: 0,
    explanation: 'The Web was born from a practical frustration: CERN had thousands of physicists using incompatible document systems. Berners-Lee wanted a universal way to link and share research.',
    realWorld: 'The Web\'s academic origins explain its open, decentralized design — it was never meant to be controlled by any single entity.',
    hint: 'Particle physicists needed to share papers across incompatible computer systems.',
  },
  {
    id: 21042,
    topic: 'berners-lee',
    difficulty: 'sota',
    question: 'Berners-Lee\'s Solid project aims to solve which fundamental problem with the current Web?',
    options: ['Giving users control over their own data', 'Making the Web faster with HTTP/3', 'Replacing HTML with a new markup language', 'Decentralizing DNS'],
    correctIndex: 0,
    explanation: 'Solid (Social Linked Data) is Berners-Lee\'s attempt to re-decentralize the Web by letting users store their data in personal "pods" and grant apps selective access, rather than surrendering data to platforms.',
    realWorld: 'Solid represents a philosophical return to the Web\'s original vision of user empowerment over corporate data silos.',
    hint: 'It involves personal data stores called "pods."',
  },
];
