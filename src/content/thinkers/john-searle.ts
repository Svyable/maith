import type { Question } from '../types';

export const searleQuestions: Question[] = [
  {
    id: 13320,
    topic: 'john-searle',
    difficulty: 'easy',
    question:
      'Searle’s “Chinese Room” targets “Strong AI.” What claim is he trying to refute by imagining a person manipulating symbols using a rulebook?',
    options: [
      'That implementing the right program is sufficient for genuine understanding/semantics (not just syntactic symbol manipulation)',
      'That computers can process symbols at all',
      'That language requires sound (phonetics) rather than text',
      'That humans can learn Chinese from textbooks'
    ],
    correctIndex: 0,
    explanation:
      'The thought experiment argues: from the outside, outputs may look fluent, but inside there may be only syntactic rule-following without semantic grasp. Searle concludes “syntax is not sufficient for semantics.”',
    realWorld:
      'It’s invoked in debates about whether LLMs “understand” meaning or merely approximate next-token distributions $p(w_t\\mid w_{<t})$.',
    hint: 'He’s attacking the idea “program = mind.”'
  },
  {
    id: 13321,
    topic: 'john-searle',
    difficulty: 'easy',
    question:
      'Searle often contrasts “syntax” and “semantics.” Which pairing best matches his usage?',
    options: [
      'Syntax = formal symbol rules; Semantics = meaning/intentional content (aboutness)',
      'Syntax = truth; Semantics = grammar',
      'Syntax = brain chemistry; Semantics = computer hardware',
      'Syntax = emotions; Semantics = memory'
    ],
    correctIndex: 0,
    explanation:
      'Syntax concerns structure and manipulation rules; semantics concerns meaning, reference, and intentionality. Searle claims pure syntax can’t generate semantics by itself.',
    realWorld:
      'In NLP, models optimize likelihood $\\max_\\theta \\sum_t \\log p_\\theta(w_t\\mid w_{<t})$—a syntactic/statistical objective that may not guarantee grounded meaning.',
    hint: 'Rules vs meaning.'
  },
  {
    id: 13322,
    topic: 'john-searle',
    difficulty: 'hard',
    question:
      'Searle’s “speech act” theory emphasizes illocutionary force. Which example is closest to a *performative* utterance where saying it (under the right conditions) constitutes doing it?',
    options: [
      '"I hereby pronounce you married" (said by an authorized official in a ceremony)',
      '"The sky is blue" (a descriptive claim)',
      '"I like pizza" (a report of preference)',
      '"There are 7 continents" (a factual statement)'
    ],
    correctIndex: 0,
    explanation:
      'A performative can change social reality when felicity conditions hold (authority, context, procedure). It is not merely describing a marriage; it enacts it.',
    realWorld:
      'Contracts, court rulings, and formal declarations function because institutions assign force to utterances.',
    hint: 'Some sentences *make* a fact rather than report one.'
  },
  {
    id: 13323,
    topic: 'john-searle',
    difficulty: 'hard',
    question:
      'Searle’s account of “institutional facts” often uses the schema “$X$ counts as $Y$ in context $C$.” Which is the best illustration?',
    options: [
      'A printed rectangle (X) counts as money (Y) within a legal/economic system (C)',
      'A rock counts as heavier than a feather everywhere',
      'Water counts as H₂O in any universe',
      'A triangle counts as having three sides by definition'
    ],
    correctIndex: 0,
    explanation:
      'Institutional facts depend on collective acceptance and constitutive rules. Money, property, and offices exist because social systems treat certain physical tokens as having status functions.',
    realWorld:
      'Digital credentials and platform “badges” are modern examples: bits (X) count as verified identity (Y) in a platform context (C).',
    hint: 'Status functions require social rules, not just physics.'
  },
  {
    id: 13324,
    topic: 'john-searle',
    difficulty: 'sota',
    question:
      'A modern “Searle-ish” critique of LLMs points out that next-token prediction optimizes a distribution like $p_\\theta(w_t\\mid w_{<t})$. Why might Searle argue this is insufficient for understanding?',
    options: [
      'Because optimizing syntax/statistical regularities does not by itself supply intentionality or grounded semantics (aboutness) tied to the world',
      'Because probability theory is logically inconsistent',
      'Because any system using $\\log$ is incapable of meaning',
      'Because transformers cannot represent grammar'
    ],
    correctIndex: 0,
    explanation:
      'From a Searlean view, internal symbol processing—even if extremely competent—may lack intrinsic intentionality. Grounding (perception/action), social practices, or biological bases are often proposed as missing ingredients.',
    realWorld:
      'This motivates multimodal grounding, robotics, tool use, and agent-environment loops as ways to connect symbols to world states and consequences.',
    hint: 'He’d say: “you can model language form without acquiring meaning.”'
  }
];