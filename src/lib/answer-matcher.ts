import { GAME_CONFIG } from "@/config/game";
import { normalizeAnswer } from "@/lib/answer-normalization";
import { GuessResult } from "@/types/game";

function compact(normalized: string): string {
  return normalized.replace(/\s+/g, "");
}

export function isGuessCorrect(guess: string, title: string, originalTitle: string): GuessResult {
  const normalizedGuess = normalizeAnswer(guess);
  if (!normalizedGuess) {
    return {
      ok: true,
      isCorrect: false,
      normalizedGuess,
      reason: "empty_guess",
    };
  }

  const candidates = [title, originalTitle].map(normalizeAnswer).filter(Boolean);
  const compactGuess = compact(normalizedGuess);

  if (candidates.some((candidate) => candidate === normalizedGuess || compact(candidate) === compactGuess)) {
    return { ok: true, isCorrect: true, normalizedGuess };
  }

  const allowSubstring = normalizedGuess.length >= GAME_CONFIG.minGuessLengthForSubstring;

  if (
    allowSubstring &&
    candidates.some((candidate) => candidate.includes(normalizedGuess) || compact(candidate).includes(compactGuess))
  ) {
    return { ok: true, isCorrect: true, normalizedGuess };
  }

  return { ok: true, isCorrect: false, normalizedGuess, reason: "no_match" };
}
