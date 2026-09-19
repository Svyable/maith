export const LEVELS = [
  { level: 1, nameKey: 'leaderboard.levelNovice', emoji: '🌱', min: 0 },
  { level: 2, nameKey: 'leaderboard.levelApprentice', emoji: '📘', min: 50 },
  { level: 3, nameKey: 'leaderboard.levelScholar', emoji: '🎓', min: 200 },
  { level: 4, nameKey: 'leaderboard.levelAdept', emoji: '⚡', min: 500 },
  { level: 5, nameKey: 'leaderboard.levelExpert', emoji: '🔥', min: 1000 },
  { level: 6, nameKey: 'leaderboard.levelMaster', emoji: '👑', min: 2500 },
  { level: 7, nameKey: 'leaderboard.levelGrandmaster', emoji: '💎', min: 5000 },
  { level: 8, nameKey: 'leaderboard.levelLegend', emoji: '🏆', min: 10000 },
] as const;

export function getLevel(xp: number) {
  let currentIndex = 0;
  for (let index = LEVELS.length - 1; index >= 0; index -= 1) {
    if (xp >= LEVELS[index].min) {
      currentIndex = index;
      break;
    }
  }

  const current = LEVELS[currentIndex];
  const next = LEVELS[currentIndex + 1];
  const progress = next
    ? ((xp - current.min) / (next.min - current.min)) * 100
    : 100;

  return { ...current, progress: Math.min(Math.max(progress, 0), 100), next };
}