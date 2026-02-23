import type { Question } from '../types';

export const dijkstraQuestions: Question[] = [
  {
    id: 20901, topic: 'dijkstra', difficulty: 'easy',
    question: 'Dijkstra\'s algorithm finds:',
    options: ['The shortest path from a source to all vertices in a weighted graph with non-negative edges', 'The minimum spanning tree of a graph', 'All cycles in a directed graph', 'The maximum flow through a network'],
    correctIndex: 0,
    explanation: 'Dijkstra\'s algorithm greedily selects the unvisited vertex with smallest tentative distance, then relaxes its neighbors. With a binary heap, it runs in O((V+E) log V).',
    realWorld: 'Google Maps, GPS navigation, and network routing protocols (OSPF) all use Dijkstra\'s algorithm or its A* extension to find shortest paths.',
    hint: 'Always expand the closest unvisited node — greedy works here because all edge weights are non-negative.',
  },
  {
    id: 20902, topic: 'dijkstra', difficulty: 'hard',
    question: 'Dijkstra famously argued against the GOTO statement because:',
    options: ['It makes program correctness nearly impossible to reason about — structured programming with loops/conditionals is provably sufficient', 'It is slower than function calls', 'Modern CPUs cannot execute GOTO instructions', 'It wastes memory'],
    correctIndex: 0,
    explanation: '"Go To Statement Considered Harmful" (1968) argued that unstructured jumps create spaghetti code. The Böhm-Jacopini theorem proves any algorithm can be expressed with sequence, selection, and iteration.',
    realWorld: 'Every modern programming language restricts control flow to structured constructs (if/else, for, while) — a direct result of Dijkstra\'s advocacy.',
    hint: 'If you can jump anywhere, you can\'t reason about what the program does at any given point.',
  },
  {
    id: 20903, topic: 'dijkstra', difficulty: 'sota',
    question: 'Dijkstra\'s concept of "separation of concerns" and his work on THE multiprogramming system pioneered:',
    options: ['Layered software architecture with semaphores for concurrent process synchronization', 'Object-oriented programming with inheritance', 'Functional programming with monads', 'Microservices architecture with REST APIs'],
    correctIndex: 0,
    explanation: 'THE system (1968) introduced software layers with strict abstraction boundaries and semaphores for mutual exclusion. Dijkstra also formulated the dining philosophers problem to illustrate deadlock.',
    realWorld: 'Operating system kernels (Linux, Windows) use semaphores and layered architecture directly inspired by Dijkstra\'s work. The dining philosophers problem remains a standard CS education tool.',
    hint: 'Concurrent processes sharing resources need synchronization — Dijkstra invented the mechanism (semaphores) and the classic problem (dining philosophers).',
  },
];
