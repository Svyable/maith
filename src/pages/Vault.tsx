import { useCallback, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { RotateCcw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SiteShell } from '@/components/layout/SiteShell';
import { VaultChallengeModal } from '@/components/vault/VaultChallengeModal';
import { VaultEntryCard } from '@/components/vault/VaultEntryCard';
import { Progress } from '@/components/ui/progress';
import { VAULT_ENTRIES } from '@/config/vault';
import { APP_PATHS } from '@/config/site-navigation';
import {
  canGuestChallenge,
  getVaultEntryAccess,
} from '@/domain/vault/access';
import { useAuth } from '@/hooks/useAuth';
import { useVaultProgress } from '@/hooks/useVaultProgress';
import { t } from '@/i18n';

export default function Vault() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const {
    isUnlocked,
    unlockEntry,
    resetProgress,
    totalUnlocked,
    totalEntries,
    totalChallenges,
    getQuestionForEntry,
  } = useVaultProgress();
  const [challengeIndex, setChallengeIndex] =
    useState<number | null>(null);

  const handleChallenge = useCallback(
    (index: number) => {
      const entry = VAULT_ENTRIES[index];
      if (!entry || !getQuestionForEntry(index)) return;

      const unlocked = isUnlocked(entry.id);
      const previousUnlocked =
        index === 0
        || isUnlocked(VAULT_ENTRIES[index - 1]?.id ?? '');
      const access = getVaultEntryAccess(
        unlocked,
        previousUnlocked,
      );

      if (access !== 'sealed') return;

      if (!user && !canGuestChallenge(index)) {
        navigate(APP_PATHS.auth);
        return;
      }

      setChallengeIndex(index);
    },
    [getQuestionForEntry, isUnlocked, navigate, user],
  );

  const handleChallengeSuccess = useCallback(() => {
    if (challengeIndex === null) return;

    const entry = VAULT_ENTRIES[challengeIndex];
    if (entry) unlockEntry(entry.id);
    setChallengeIndex(null);
  }, [challengeIndex, unlockEntry]);

  const progressPercent =
    totalEntries > 0
      ? Math.round((totalUnlocked / totalEntries) * 100)
      : 0;

  const challengeEntry =
    challengeIndex === null
      ? null
      : VAULT_ENTRIES[challengeIndex] ?? null;
  const challengeQuestion =
    challengeIndex === null
      ? null
      : getQuestionForEntry(challengeIndex);

  return (
    <SiteShell>
      <main className="relative z-10 flex-1 px-4 py-6 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <div className="text-5xl mb-3">🔐</div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            {t('vault.title').split('Vault')[0]}
            <span className="text-destructive">Vault</span>
          </h1>
          <p className="text-muted-foreground mt-2 max-w-lg mx-auto">
            {t('vault.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="max-w-md mx-auto mb-8 space-y-2"
        >
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground font-mono">
              {t('vault.declassifiedProgress', {
                count: totalUnlocked,
                total: totalEntries,
              })}
            </span>
            <span className="font-bold text-destructive font-mono">
              {progressPercent}%
            </span>
          </div>
          <Progress
            value={progressPercent}
            className="h-2.5 bg-muted/50"
          />
          <div className="flex justify-between items-center">
            <p className="text-[10px] text-muted-foreground/60">
              {t('vault.challengeQuestions', {
                count: totalChallenges,
              })}
            </p>
            {totalUnlocked > 1 && (
              <button
                onClick={resetProgress}
                className="flex items-center gap-1 text-[10px] text-muted-foreground/50 hover:text-destructive transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                {t('vault.reset')}
              </button>
            )}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {VAULT_ENTRIES.map((entry, index) => {
            const unlocked = isUnlocked(entry.id);
            const previousUnlocked =
              index === 0
              || isUnlocked(VAULT_ENTRIES[index - 1]?.id ?? '');
            const access = getVaultEntryAccess(
              unlocked,
              previousUnlocked,
            );

            return (
              <VaultEntryCard
                key={entry.id}
                entry={entry}
                index={index}
                access={access}
                onChallenge={() => handleChallenge(index)}
              />
            );
          })}
        </div>

        <div className="pb-8" />
      </main>

      <AnimatePresence>
        {challengeIndex !== null
          && challengeEntry
          && challengeQuestion && (
            <VaultChallengeModal
              entryIndex={challengeIndex}
              entry={challengeEntry}
              question={challengeQuestion}
              onSuccess={handleChallengeSuccess}
              onClose={() => setChallengeIndex(null)}
            />
          )}
      </AnimatePresence>
    </SiteShell>
  );
}
