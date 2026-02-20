import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { TOPICS, TOPIC_MAP } from '@/config/constants';
import { TopicHeatmap } from '@/components/TopicHeatmap';
import { useTheme } from '@/hooks/useTheme';
import { QuizHeader } from '@/components/QuizHeader';
import { t } from '@/i18n';

interface UserStats {
  score_total: number;
  total_answered: number;
  correct_answered: number;
  best_streak: number;
}

interface TopicStat {
  topic: string;
  total_answered: number;
  correct_answered: number;
}

interface RecentSession {
  id: string;
  created_at: string;
  difficulty: string;
  score: number;
  total_answered: number;
  correct_answered: number;
  best_streak: number;
  topics: string[];
}

export default function Profile() {
  const { user, loading: authLoading, signOut } = useAuth();
  const navigate = useNavigate();
  const { isDark, toggle: toggleTheme } = useTheme();
  const [stats, setStats] = useState<UserStats | null>(null);
  const [topicStats, setTopicStats] = useState<TopicStat[]>([]);
  const [recentSessions, setRecentSessions] = useState<RecentSession[]>([]);
  const [displayName, setDisplayName] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authLoading) return;
    if (!user) { navigate('/auth'); return; }

    async function fetchData() {
      setLoading(true);
      const [profileRes, statsRes, topicRes, sessionsRes] = await Promise.all([
        supabase.from('profiles').select('display_name, username').eq('id', user!.id).maybeSingle(),
        supabase.from('user_stats').select('*').eq('user_id', user!.id).maybeSingle(),
        supabase.from('user_topic_stats').select('*').eq('user_id', user!.id),
        supabase.from('quiz_sessions').select('*').eq('user_id', user!.id).order('created_at', { ascending: false }).limit(10),
      ]);

      setDisplayName(profileRes.data?.display_name || profileRes.data?.username || null);
      if (statsRes.data) setStats(statsRes.data as UserStats);
      if (topicRes.data) setTopicStats(topicRes.data as TopicStat[]);
      if (sessionsRes.data) setRecentSessions(sessionsRes.data as RecentSession[]);
      setLoading(false);
    }

    fetchData();
  }, [user, authLoading, navigate]);

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <QuizHeader streak={0} showStreak={false} isDark={isDark} onToggleTheme={toggleTheme} onHome={() => navigate('/')} />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-muted-foreground animate-pulse">{t('profile.loading')}</div>
        </div>
      </div>
    );
  }

  const accuracy = stats && stats.total_answered > 0
    ? Math.round((stats.correct_answered / stats.total_answered) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <QuizHeader streak={0} showStreak={false} isDark={isDark} onToggleTheme={toggleTheme} onHome={() => navigate('/')} />

      <main className="flex-1 px-4 py-6 max-w-lg mx-auto w-full space-y-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          {/* Profile header */}
          <div className="text-center space-y-2">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto text-3xl">
              🧠
            </div>
            <h2 className="text-2xl font-display font-bold text-foreground">{displayName || t('profile.defaultName')}</h2>
            <p className="text-sm text-muted-foreground">{user?.email}</p>
          </div>

          {/* Stats overview */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: t('profile.score'), value: stats?.score_total ?? 0, emoji: '⭐' },
              { label: t('profile.answered'), value: stats?.total_answered ?? 0, emoji: '📝' },
              { label: t('profile.accuracy'), value: `${accuracy}%`, emoji: '🎯' },
              { label: t('profile.streak'), value: stats?.best_streak ?? 0, emoji: '🔥' },
            ].map((s) => (
              <div key={s.label} className="bg-card rounded-xl p-3 border border-border text-center">
                <div className="text-lg">{s.emoji}</div>
                <div className="text-lg font-bold text-foreground font-mono">{s.value}</div>
                <div className="text-[10px] text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Topic accuracy heatmap */}
          <TopicHeatmap topicStats={topicStats} />

          {/* Recent sessions */}
          {recentSessions.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-muted-foreground">{t('profile.recentSessions')}</h3>
              <div className="space-y-2">
                {recentSessions.map((s) => {
                  const pct = s.total_answered > 0 ? Math.round((s.correct_answered / s.total_answered) * 100) : 0;
                  return (
                    <div key={s.id} className="bg-card rounded-xl p-3 border border-border flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                          {s.difficulty}
                        </span>
                        <div>
                        <div className="text-sm font-medium text-foreground">
                            {s.topics.map((tp) => {
                              const tm = TOPIC_MAP[tp];
                              return tm ? tm.emoji : '🎓';
                            }).join(' ')}
                            {' '}{s.score} pts
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {pct}% · {s.correct_answered}/{s.total_answered} · 🔥{s.best_streak}
                          </div>
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {new Date(s.created_at).toLocaleDateString()}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Sign out */}
          <button
            onClick={signOut}
            className="w-full py-3 rounded-xl border border-border text-muted-foreground text-sm hover:text-foreground hover:border-foreground/20 transition-all"
          >
            {t('profile.signOut')}
          </button>
        </motion.div>
      </main>
    </div>
  );
}
