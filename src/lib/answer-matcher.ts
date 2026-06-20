import { GAME_CONFIG } from "@/config/game";
import { normalizeAnswer, tokenizeAnswer } from "@/lib/answer-normalization";
import { GuessResult } from "@/types/game";

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

  if (candidates.some((candidate) => candidate === normalizedGuess)) {
    return { ok: true, isCorrect: true, normalizedGuess };
  }

  const guessTokens = tokenizeAnswer(normalizedGuess);
  const allowSubstring =
    normalizedGuess.length >= GAME_CONFIG.minGuessLengthForSubstring &&
    guessTokens.length >= GAME_CONFIG.minGuessTokensForSubstring;

  if (allowSubstring && candidates.some((candidate) => candidate.includes(normalizedGuess))) {
    return { ok: true, isCorrect: true, normalizedGuess };
  }

  return { ok: true, isCorrect: false, normalizedGuess, reason: "no_match" };
}
