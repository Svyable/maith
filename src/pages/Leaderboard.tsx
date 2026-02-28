import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

import { QuizHeader } from '@/components/QuizHeader';
import { FloatingBackground } from '@/components/FloatingBackground';
import { Footer } from '@/components/Footer';
import { TOPICS } from '@/config/constants';
import { t } from '@/i18n';

type Tab = 'all-time' | 'weekly' | 'topics';

/* ── XP Level System ── */
const LEVELS = [
  { nameKey: 'leaderboard.levelNovice', emoji: '🌱', min: 0 },
  { nameKey: 'leaderboard.levelApprentice', emoji: '📘', min: 50 },
  { nameKey: 'leaderboard.levelScholar', emoji: '🎓', min: 200 },
  { nameKey: 'leaderboard.levelAdept', emoji: '⚡', min: 500 },
  { nameKey: 'leaderboard.levelExpert', emoji: '🔥', min: 1000 },
  { nameKey: 'leaderboard.levelMaster', emoji: '👑', min: 2500 },
  { nameKey: 'leaderboard.levelGrandmaster', emoji: '💎', min: 5000 },
  { nameKey: 'leaderboard.levelLegend', emoji: '🏆', min: 10000 },
];

function getLevel(xp: number) {
  let level = LEVELS[0];
  for (const l of LEVELS) {
    if (xp >= l.min) level = l;
  }
  const idx = LEVELS.indexOf(level);
  const next = LEVELS[idx + 1];
  const progress = next
    ? ((xp - level.min) / (next.min - level.min)) * 100
    : 100;
  return { ...level, progress: Math.min(progress, 100), next };
}

function formatDate(dateStr: string | null) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
}

function timeAgo(dateStr: string | null) {
  if (!dateStr) return '';
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return 'today';
  if (days === 1) return 'yesterday';
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  return `${months}mo ago`;
}

/* ── Types ── */
interface AllTimeRow {
  user_id: string;
  username: string;
  display_name: string;
  avatar_url: string | null;
  score_total: number;
  total_answered: number;
  correct_answered: number;
  accuracy_percent: number;
  best_streak: number;
  updated_at: string;
  games_played: number;
  member_since: string;
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
  games_played_week: number;
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

/* ── XP Progress Bar ── */
function XpBar({ xp }: { xp: number }) {
  const level = getLevel(xp);
  return (
    <div className="flex items-center gap-1.5 min-w-0">
      <span className="text-xs" title={t(level.nameKey)}>{level.emoji}</span>
      <div className="flex-1 h-1.5 rounded-full bg-secondary overflow-hidden min-w-[40px]">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
          initial={{ width: 0 }}
          animate={{ width: `${level.progress}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </div>
      {level.next && (
        <span className="text-[9px] text-muted-foreground font-mono whitespace-nowrap">
          {level.next.emoji}{level.next.min - xp}
        </span>
      )}
    </div>
  );
}

/* ── Leaderboard Row Card ── */
function LeaderRow({
  rank,
  name,
  score,
  accuracy,
  streak,
  answered,
  gamesPlayed,
  date,
  isMe,
  tab,
  index,
}: {
  rank: number;
  name: string;
  score: number;
  accuracy: number;
  streak: number;
  answered: number;
  gamesPlayed: number;
  date: string;
  isMe: boolean;
  tab: Tab;
  index: number;
}) {
  const medal = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : null;
  const level = getLevel(score);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03 }}
      className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${
        isMe
          ? 'bg-primary/10 border-primary/30 ring-1 ring-primary/20'
          : rank <= 3
            ? 'bg-card border-accent/20'
            : 'bg-card border-border'
      }`}
    >
      {/* Rank */}
      <div className="w-8 text-center text-lg font-bold flex-shrink-0">
        {medal ?? <span className="text-sm text-muted-foreground font-mono">#{rank}</span>}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0 space-y-1">
        <div className="flex items-center gap-1.5">
          <span className="text-sm font-semibold text-foreground truncate">
            {name}
          </span>
          {isMe && <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-primary/20 text-primary font-bold">{t('leaderboard.you')}</span>}
          <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-secondary text-muted-foreground font-medium" title={t(level.nameKey)}>
            {level.emoji} {t(level.nameKey)}
          </span>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-[11px] text-muted-foreground">
          <span>{t('leaderboard.acc', { value: accuracy })}</span>
          {streak > 0 && <span>🔥{streak}</span>}
          <span>📝{answered}</span>
          {gamesPlayed > 0 && <span>🎮{gamesPlayed}</span>}
          {date && <span>📅{date}</span>}
        </div>

        {/* XP bar */}
        <XpBar xp={score} />
      </div>

      {/* Score */}
      <div className="text-right flex-shrink-0">
        <div className="text-base font-bold font-mono text-foreground">{score.toLocaleString()}</div>
        <div className="text-[10px] text-muted-foreground">{tab === 'topics' ? t('leaderboard.correct') : t('leaderboard.xp')}</div>
      </div>
    </motion.div>
  );
}

/* ── Main ── */
export default function Leaderboard() {
  const { user } = useAuth();
  const [tab, setTab] = useState<Tab>('all-time');
  const [allTime, setAllTime] = useState<AllTimeRow[]>([]);
  const [weekly, setWeekly] = useState<WeeklyRow[]>([]);
  const [topicData, setTopicData] = useState<TopicRow[]>([]);
  const [selectedTopic, setSelectedTopic] = useState<string>(TOPICS[0]?.slug ?? '');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const [atRes, wRes, tRes] = await Promise.all([
        supabase.from('leaderboard_all_time').select('*').limit(50),
        supabase.from('leaderboard_weekly').select('*').limit(50),
        supabase.from('leaderboard_by_topic' as any).select('*').limit(500),
      ]);
      if (atRes.data) setAllTime(atRes.data as unknown as AllTimeRow[]);
      if (wRes.data) setWeekly(wRes.data as unknown as WeeklyRow[]);
      if (tRes.data) setTopicData(tRes.data as unknown as TopicRow[]);
      setLoading(false);
    }
    load();
  }, []);

  const filteredTopicRows = useMemo(() =>
    topicData
      .filter((r) => r.topic === selectedTopic)
      .sort((a, b) => b.correct_answered - a.correct_answered)
      .slice(0, 50),
    [topicData, selectedTopic]
  );

  const topicsWithData = useMemo(() => {
    const set = new Set(topicData.map((r) => r.topic));
    return TOPICS.filter((t) => set.has(t.slug));
  }, [topicData]);

  const tabs: { key: Tab; label: string; emoji: string }[] = [
    { key: 'all-time', label: t('leaderboard.allTime'), emoji: '🏆' },
    { key: 'weekly', label: t('leaderboard.weekly'), emoji: '📅' },
    { key: 'topics', label: t('leaderboard.topics'), emoji: '📊' },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col relative">
      <FloatingBackground />
      <QuizHeader streak={0} showStreak={false} />

      <main className="relative z-10 flex-1 px-4 py-6 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto w-full space-y-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          {/* Hero */}
          <div className="text-center">
            <div className="text-5xl mb-2">🏆</div>
            <h1 className="text-2xl font-display font-bold text-foreground">{t('leaderboard.title')}</h1>
            <p className="text-sm text-muted-foreground mt-1">{t('leaderboard.subtitle')}</p>
          </div>

          {/* Level legend */}
          <div className="flex flex-wrap justify-center gap-1.5">
            {LEVELS.map((l) => (
              <span
                key={l.nameKey}
                className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground"
                title={`${l.min}+ XP`}
              >
                {l.emoji} {t(l.nameKey)} ({l.min}+)
              </span>
            ))}
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
                {tb.emoji} {tb.label}
              </button>
            ))}
          </div>

          {/* Topic picker */}
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

          {/* Content */}
          {loading ? (
            <div className="space-y-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-20 rounded-xl bg-secondary animate-pulse" />
              ))}
            </div>
          ) : tab === 'all-time' && allTime.length === 0 ? (
            <EmptyState message={t('leaderboard.empty')} />
          ) : tab === 'weekly' && weekly.length === 0 ? (
            <EmptyState message={t('leaderboard.emptyWeekly')} />
          ) : tab === 'topics' && filteredTopicRows.length === 0 ? (
            <EmptyState message={t('leaderboard.emptyTopic')} />
          ) : (
            <div className="space-y-2">
              {tab === 'all-time' && allTime.map((row, i) => (
                <LeaderRow
                  key={row.user_id}
                  rank={i + 1}
                  name={row.display_name || row.username}
                  score={row.score_total}
                  accuracy={row.accuracy_percent}
                  streak={row.best_streak}
                  answered={row.total_answered}
                  gamesPlayed={row.games_played}
                  date={timeAgo(row.updated_at)}
                  isMe={row.user_id === user?.id}
                  tab={tab}
                  index={i}
                />
              ))}
              {tab === 'weekly' && weekly.map((row, i) => (
                <LeaderRow
                  key={row.user_id}
                  rank={i + 1}
                  name={row.display_name || row.username}
                  score={row.score_total_week}
                  accuracy={row.accuracy_percent_week}
                  streak={row.best_streak_week}
                  answered={row.total_answered_week}
                  gamesPlayed={row.games_played_week}
                  date=""
                  isMe={row.user_id === user?.id}
                  tab={tab}
                  index={i}
                />
              ))}
              {tab === 'topics' && filteredTopicRows.map((row, i) => (
                <LeaderRow
                  key={row.user_id}
                  rank={i + 1}
                  name={row.display_name || row.username}
                  score={row.correct_answered}
                  accuracy={row.accuracy_percent ?? 0}
                  streak={0}
                  answered={row.total_answered}
                  gamesPlayed={0}
                  date=""
                  isMe={row.user_id === user?.id}
                  tab={tab}
                  index={i}
                />
              ))}
            </div>
          )}
        </motion.div>
      </main>
      <div className="relative z-10"><Footer /></div>
    </div>
  );
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="text-center py-12 text-muted-foreground">
      <div className="text-4xl mb-2">🏜️</div>
      <p>{message}</p>
    </div>
  );
}
