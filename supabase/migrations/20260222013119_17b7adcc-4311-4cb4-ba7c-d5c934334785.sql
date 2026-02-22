-- Rename ADVN → HARD in the difficulty enum
ALTER TYPE public.difficulty RENAME VALUE 'ADVN' TO 'HARD';

-- Update text-based difficulty references in user_difficulty_stats
UPDATE public.user_difficulty_stats SET difficulty = 'HARD' WHERE difficulty = 'ADVN';