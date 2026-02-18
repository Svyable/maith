// Topics now come from config constants, not DB
import { TOPICS, type TopicMeta } from '@/config/constants';

export type TopicRecord = TopicMeta;

export function useTopics() {
  // Topics are static config — no DB fetch needed
  return { topics: TOPICS, loading: false };
}
