import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useTheme } from '@/hooks/useTheme';
import { QuizHeader } from '@/components/QuizHeader';
import { TOPICS, TOPIC_MAP } from '@/config/constants';
import { t } from '@/i18n';

type Tab = 'all-time' | 'weekly' | 'topics';

interface LeaderboardRow {
  user_id: string;
  username: string;
  display_name: string;
  avatar_url: string | null;
  score_total: number;
  total_answered: number;
  correct_answered: number;
  accuracy_percent: number;
  best_streak: number;
}

interface WeeklyRow {
  user_id: string;
  username: string;
  display_name: string;
  avatar_url: string | null;
  score_total_week: number;
  total_answered_week: number;
  correct_answered_week: number;
  accuracy_percent_week: number;
  best_streak_week: number;
}

interface TopicRow {
  user_id: string;
  username: string;
  display_name: string;
  avatar_url: string | null;
  topic: string;
  total_answered: number;
  correct_answered: number;
  accuracy_percent: number;
}

function normalizeRow(r: LeaderboardRow) {
  return { userId: r.user_id, name: r.display_name || r.username, score: r.score_total, accuracy: r.accuracy_percent, streak: r.best_streak, answered: r.total_answered };
}

function normalizeWeekly(r: WeeklyRow) {
  return { userId: r.user_id, name: r.display_name || r.username, score: r.score_total_week, accuracy: r.accuracy_percent_week, streak: r.best_streak_week, answered: r.total_answered_week };
}

function normalizeTopicRow(r: TopicRow) {
  return { userId: r.user_id, name: r.display_name || r.username, score: r.correct_answered, accuracy: r.accuracy_percent ?? 0, streak: 0, answered: r.total_answered };
}

export default function Leaderboard() {
  const { user } = useAuth();
  const { isDark, toggle: toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [tab, setTab] = useState<Tab>('all-time');
  const [allTime, setAllTime] = useState<LeaderboardRow[]>([]);
  const [weekly, setWeekly] = useState<WeeklyRow[]>([]);
  const [topicData, setTopicData] = useState<TopicRow[]>([]);
  const [selectedTopic, setSelectedTopic] = useState<string>(TOPICS[0]?.slug ?? '');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      setLoading(true);
      const [atRes, wRes, tRes] = await Promise.all([
        supabase.from('leaderboard_all_time').select('*').limit(50),
        supabase.from('leaderboard_weekly').select('*').limit(50),
        supabase.from('leaderboard_by_topic' as any).select('*').limit(500),
      ]);
      if (atRes.data) setAllTime(atRes.data as LeaderboardRow[]);
      if (wRes.data) setWeekly(wRes.data as WeeklyRow[]);
      if (tRes.data) setTopicData(tRes.data as unknown as TopicRow[]);
      setLoading(false);
    }
    fetch();
  }, []);

  const filteredTopicRows = useMemo(() =>
    topicData
      .filter((r) => r.topic === selectedTopic)
      .sort((a, b) => b.correct_answered - a.correct_answered)
      .slice(0, 50),
    [topicData, selectedTopic]
  );

  // Get topics that have data
  const topicsWithData = useMemo(() => {
    const set = new Set(topicData.map((r) => r.topic));
    return TOPICS.filter((t) => set.has(t.slug));
  }, [topicData]);

  const rows = tab === 'all-time'
    ? allTime.map(normalizeRow)
    : tab === 'weekly'
      ? weekly.map(normalizeWeekly)
      : filteredTopicRows.map(normalizeTopicRow);

  const tabs: { key: Tab; label: string }[] = [
    { key: 'all-time', label: t('leaderboard.allTime') },
    { key: 'weekly', label: t('leaderboard.weekly') },
    { key: 'topics', label: '📊 Topics' },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <QuizHeader streak={0} showStreak={false} isDark={isDark} onToggleTheme={toggleTheme} onHome={() => navigate('/')} />

      <main className="flex-1 px-4 py-6 max-w-lg mx-auto w-full space-y-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <div className="text-center">
            <div className="text-5xl mb-2">🏆</div>
            <h2 className="text-2xl font-display font-bold text-foreground">{t('leaderboard.title')}</h2>
          </div>

          {/* Tab toggle */}
          <div className="flex rounded-lg bg-secondary p-1">
            {tabs.map((tb) => (
              <button
                key={tb.key}
                onClick={() => setTab(tb.key)}
                className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
                  tab === tb.key
                    ? 'bg-card text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tb.label}
              </button>
            ))}
          </div>

          {/* Topic picker for topic tab */}
          {tab === 'topics' && (
            <div className="flex flex-wrap gap-1.5">
              {(topicsWithData.length > 0 ? topicsWithData : TOPICS.slice(0, 10)).map((tp) => (
                <button
                  key={tp.slug}
                  onClick={() => setSelectedTopic(tp.slug)}
                  className={`px-2.5 py-1 text-xs rounded-full border transition-all ${
                    selectedTopic === tp.slug
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-card border-border text-muted-foreground hover:text-foreground hover:border-foreground/30'
                  }`}
                >
                  {tp.emoji} {tp.label}
                </button>
              ))}
            </div>
          )}

          {loading ? (
            <div className="space-y-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-16 rounded-xl bg-secondary animate-pulse" />
              ))}
            </div>
          ) : rows.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <div className="text-4xl mb-2">🏜️</div>
              <p>{t('leaderboard.empty')}</p>
            </div>
          ) : (
            <div className="space-y-2">
              {rows.map((row, i) => {
                const isMe = row.userId === user?.id;
                const medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `#${i + 1}`;
                return (
                  <motion.div
                    key={`${row.userId}-${i}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03 }}
                    className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${
                      isMe
                        ? 'bg-primary/10 border-primary/30'
                        : 'bg-card border-border'
                    }`}
                  >
                    <div className="w-8 text-center text-lg font-bold">
                      {typeof medal === 'string' && medal.startsWith('#')
                        ? <span className="text-sm text-muted-foreground font-mono">{medal}</span>
                        : medal}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-foreground truncate">
                        {row.name} {isMe && <span className="text-xs text-primary">(you)</span>}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {row.accuracy}% accuracy{row.streak > 0 && ` · 🔥${row.streak}`} · {row.answered} answered
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold font-mono text-foreground">{row.score}</div>
                      <div className="text-[10px] text-muted-foreground">{tab === 'topics' ? 'correct' : 'pts'}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
}
