import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useProfile } from '@/hooks/useProfile';
import { useAuth } from '@/hooks/useAuth';
import { FloatingBackground } from '@/components/FloatingBackground';
import { t } from '@/i18n';

const EMOJI_OPTIONS = ['🧠', '🎓', '⚡', '🔥', '🏆', '👑', '💎', '🌟', '🚀', '🎯', '🦊', '🐱', '🐶'];

export default function Onboarding() {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const { updateProfile, loading } = useProfile();
  const [name, setName] = useState('');
  const [emoji, setEmoji] = useState('🧠');
  const [saving, setSaving] = useState(false);
  const [signingOut, setSigningOut] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth', { replace: true });
    }
  }, [loading, user, navigate]);

  if (!user) return null;

  const handleSave = async () => {
    const trimmed = name.trim();
    if (trimmed.length < 2 || trimmed.length > 20) {
      setError(t('onboarding.nameError') || 'Name must be 2-20 characters');
      return;
    }

    setSaving(true);
    setError('');

    const { error: updateError } = await updateProfile({
      display_name: trimmed,
      avatar_url: emoji,
    });

    setSaving(false);

    if (updateError) {
      setError(updateError);
      return;
    }

    navigate('/', { replace: true });
  };

  const handleSignOut = async () => {
    setSigningOut(true);
    await signOut();
    setSigningOut(false);
    navigate('/auth', { replace: true });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-muted-foreground animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col relative">
      <FloatingBackground />

      <div className="relative z-10 flex justify-end px-4 pt-4">
        <button
          onClick={handleSignOut}
          disabled={saving || signingOut}
          className="rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground disabled:opacity-50"
        >
          {signingOut ? '...' : t('profile.signOut') || 'Sign out'}
        </button>
      </div>

      <div className="relative z-10 flex-1 flex items-center justify-center px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-sm space-y-6"
        >
          <div className="text-center space-y-2">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-6xl"
            >
              {emoji}
            </motion.div>
            <h1 className="text-2xl font-display font-bold text-foreground">
              {t('onboarding.title') || 'Choose your name'}
            </h1>
            <p className="text-sm text-muted-foreground">
              {t('onboarding.subtitle') || "This is how you'll appear on the leaderboard"}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {EMOJI_OPTIONS.map((e) => (
              <button
                key={e}
                onClick={() => setEmoji(e)}
                className={`w-10 h-10 rounded-xl text-xl flex items-center justify-center transition-all border ${
                  emoji === e
                    ? 'bg-primary/20 border-primary scale-110'
                    : 'bg-card border-border hover:border-primary/50'
                }`}
              >
                {e}
              </button>
            ))}
          </div>

          <div className="space-y-2">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t('onboarding.placeholder') || 'Enter display name...'}
              maxLength={20}
              className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow text-center text-lg font-semibold"
            />
            <div className="flex justify-between text-[10px] text-muted-foreground px-1">
              <span>{name.length}/20</span>
              <span>{t('onboarding.minChars') || 'Min 2 characters'}</span>
            </div>
          </div>

          {error && (
            <p className="text-sm text-destructive bg-destructive/10 rounded-lg px-3 py-2 text-center">{error}</p>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSave}
            disabled={saving || signingOut || name.trim().length < 2}
            className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-bold text-lg disabled:opacity-50 glow-primary"
          >
            {saving ? (t('common.saving') || 'Saving...') : t('onboarding.save') || 'Save & Continue'}
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

