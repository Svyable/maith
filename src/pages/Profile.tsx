import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useProfile } from '@/hooks/useProfile';
import { supabase } from '@/integrations/supabase/client';
import { useThinkerAchievements } from '@/hooks/useThinkerAchievements';
import { TOPIC_MAP } from '@/config/constants';
import { TopicHeatmap } from '@/components/TopicHeatmap';
import { FieldStatsBar } from '@/components/FieldStatsBar';
import { ProfileGamescapeStats } from '@/components/ProfileGamescapeStats';
import { ThinkerBadgeWall } from '@/components/profile/ThinkerBadgeWall';
import { useTheme } from '@/hooks/useTheme';
import { useVaultProgress } from '@/hooks/useVaultProgress';
import { SiteShell } from '@/components/layout/SiteShell';
import { Pencil, Check, X, Shield } from 'lucide-react';
import { t } from '@/i18n';
import { DIFFICULTIES } from '@/config/constants';
import { Button } from '@/components/ui/button';
import { getLevel } from '@/config/levels';
import { APP_PATHS } from '@/config/site-navigation';

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

interface DifficultyStat {
  difficulty: string;
  score_total: number;
  total_answered: number;
  correct_answered: number;
  best_streak: number;
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
  const { profile, updateProfile } = useProfile();
  const navigate = useNavigate();
  const { isDark, toggle: toggleTheme } = useTheme();
  const { totalUnlocked, totalEntries, clearance } = useVaultProgress();
  const { achievements } = useThinkerAchievements();
  const [stats, setStats] = useState<UserStats | null>(null);
  const [topicStats, setTopicStats] = useState<TopicStat[]>([]);
  const [difficultyStats, setDifficultyStats] = useState<DifficultyStat[]>([]);
  const [recentSessions, setRecentSessions] = useState<RecentSession[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingName, setEditingName] = useState(false);
  const [editName, setEditName] = useState('');

  useEffect(() => {
    if (authLoading) return;
    if (!user) { navigate(APP_PATHS.auth); return; }

    async function fetchData() {
      setLoading(true);
      const [statsRes, topicRes, diffRes, sessionsRes] = await Promise.all([
        supabase.from('user_stats').select('*').eq('user_id', user.id).maybeSingle(),
        supabase.from('user_topic_stats').select('*').eq('user_id', user.id),
        supabase.from('user_difficulty_stats' as any).select('*').eq('user_id', user.id),
        supabase.from('quiz_sessions').select('*').eq('user_id', user.id).order('created_at', { ascending: false }).limit(10),
      ]);

      if (statsRes.data) setStats(statsRes.data as UserStats);
      if (topicRes.data) setTopicStats(topicRes.data as TopicStat[]);
      if (diffRes.data) setDifficultyStats(diffRes.data as unknown as DifficultyStat[]);
      if (sessionsRes.data) setRecentSessions(sessionsRes.data as RecentSession[]);
      setLoading(false);
    }

    fetchData();
  }, [user, authLoading, navigate]);

  const level = useMemo(() => getLevel(stats?.score_total ?? 0), [stats]);

  if (authLoading || loading) {
    return (
      <SiteShell showFooter={false}>
        <div className="flex-1 flex items-center justify-center">
          <div className="text-muted-foreground animate-pulse">{t('profile.loading')}</div>
        </div>
      </SiteShell>
    );
  }

  const avatarUrl = profile?.avatar_url;
  const isImageUrl = avatarUrl && (avatarUrl.startsWith('http://') || avatarUrl.startsWith('https://'));
  const avatarEmoji = (!avatarUrl || isImageUrl) ? level.emoji : avatarUrl;

  return (
    <SiteShell showFooter={false}>
      <main className="relative z-10 flex-1 px-4 py-6 max-w-lg mx-auto w-full space-y-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          {/* Profile header */}
          <div className="text-center space-y-3">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto text-4xl border-2 border-primary/30 overflow-hidden">
              {isImageUrl ? (
                <img src={avatarUrl} alt={profile?.display_name ?? t('profile.defaultName')} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              ) : (
                avatarEmoji
              )}
            </div>

            {/* Editable display name */}
            <div className="flex items-center justify-center gap-2">
              {editingName ? (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    maxLength={20}
                    aria-label={t('auth.displayName')}
                    className="px-3 py-1 rounded-lg bg-card border border-border text-foreground text-center text-lg font-bold focus:outline-none focus:ring-2 focus:ring-primary/50 w-48"
                    autoFocus
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        const trimmed = editName.trim();
                        if (trimmed.length >= 2) {
                          updateProfile({ display_name: trimmed });
                          setEditingName(false);
                        }
                      } else if (e.key === 'Escape') {
                        setEditingName(false);
                      }
                    }}
                  />
                  <Button
                    size="icon"
                    aria-label={t('profile.saveName')}
                    onClick={async () => {
                      const trimmed = editName.trim();
                      if (trimmed.length >= 2) {
                        await updateProfile({ display_name: trimmed });
                        setEditingName(false);
                      }
                    }}
                    className="h-11 w-11"
                  >
                    <Check className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    aria-label={t('profile.cancelEdit')}
                    onClick={() => setEditingName(false)}
                    className="h-11 w-11"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ) : (
                <>
                   <h1 className="text-2xl font-display font-bold text-foreground">
                    {profile?.display_name || t('profile.defaultName')}
                   </h1>
                   <Button
                    variant="ghost"
                    size="icon"
                    aria-label={t('profile.editName')}
                    onClick={() => {
                      setEditName(profile?.display_name || '');
                      setEditingName(true);
                    }}
                    className="h-11 w-11 text-muted-foreground hover:text-primary"
                  >
                    <Pencil className="w-3.5 h-3.5" />
                   </Button>
                </>
              )}
            </div>
            <p className="text-sm text-muted-foreground">{user?.email}</p>

            {/* Level + Clearance badges */}
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
                <span className="text-xs font-bold text-primary">LVL {level.level}</span>
                <span className="text-xs font-medium text-foreground">{t(level.nameKey)}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/30">
                <Shield className="w-3.5 h-3.5 text-destructive" />
                <span className="text-xs font-bold text-destructive">
                  {clearance.emoji} {clearance.label}
                </span>
              </div>
            </div>

            {/* XP progress bar */}
            <div className="max-w-xs mx-auto">
              <div className="flex justify-between text-[10px] text-muted-foreground mb-1">
                <span>{stats?.score_total ?? 0} XP</span>
                 <span>{level.next?.min ?? level.min} XP</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${level.progress}%` }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                />
              </div>
            </div>

            {/* Vault progress bar */}
            <div className="max-w-xs mx-auto">
              <div className="flex justify-between text-[10px] text-muted-foreground mb-1">
                <span>🔐 {totalUnlocked}/{totalEntries} declassified</span>
                {clearance.next && (
                  <span>{clearance.next.emoji} {clearance.next.label} at {clearance.next.min}</span>
                )}
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-destructive rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.round((totalUnlocked / totalEntries) * 100)}%` }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                />
              </div>
            </div>
          </div>

          {/* ∎ Theorem Collection — thinker achievement badges */}
          <ThinkerBadgeWall achievements={achievements} />

          {/* Gamescape stats — replaces old stats + difficulty cards */}
          <ProfileGamescapeStats
            stats={stats}
            topicStats={topicStats}
            difficultyStats={difficultyStats}
          />

          {/* Field-level overview */}
          {topicStats.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-muted-foreground">{t('profile.fieldStats')}</h3>
              <FieldStatsBar
                topicBreakdown={Object.fromEntries(
                  topicStats.map((s) => [s.topic, { correct: s.correct_answered, total: s.total_answered }])
                )}
              />
            </div>
          )}

          {/* Topic accuracy heatmap */}
          <TopicHeatmap topicStats={topicStats} />

          {/* Recent sessions */}
          {recentSessions.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-muted-foreground">{t('profile.recentSessions')}</h3>
              <div className="space-y-2">
                {recentSessions.map((s) => {
                  const pct = s.total_answered > 0 ? Math.round((s.correct_answered / s.total_answered) * 100) : 0;
                  const dm = DIFFICULTIES.find((d) => d.slug === s.difficulty);
                  return (
                    <div key={s.id} className="bg-card rounded-xl p-3 border border-border flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className={`text-xs font-mono px-2 py-0.5 rounded-full border ${
                          dm?.color === 'success' ? 'bg-success/10 border-success/30 text-success' :
                          dm?.color === 'destructive' ? 'bg-destructive/10 border-destructive/30 text-destructive' :
                          'bg-accent/10 border-accent/30 text-accent'
                        }`}>
                          {dm?.emoji} {s.difficulty}
                        </span>
                        <div>
                          <div className="text-sm font-medium text-foreground">
                            {s.topics.map((tp) => TOPIC_MAP[tp]?.emoji ?? '🎓').join(' ')}
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

          {/* Theme toggle */}
          <div className="bg-card rounded-xl p-4 border border-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-lg">{isDark ? '🌙' : '☀️'}</span>
              <div>
                <p className="text-sm font-medium text-foreground">{isDark ? t('nav.darkMode') : t('nav.lightMode')}</p>
                <p className="text-xs text-muted-foreground">{t('profile.appearance')}</p>
              </div>
            </div>
            <Button
              variant="secondary"
              onClick={toggleTheme}
            >
              {isDark ? `☀️ ${t('nav.lightMode')}` : `🌙 ${t('nav.darkMode')}`}
            </Button>
          </div>

          {/* Sign out */}
          <Button
            variant="outline"
            onClick={signOut}
            className="w-full"
          >
            {t('profile.signOut')}
          </Button>
        </motion.div>
      </main>
    </SiteShell>
  );
}
