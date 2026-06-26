import { GAME_CONFIG } from "@/config/game";
import { TmdbCreditsResponse } from "@/types/tmdb";
import { MovieClue } from "@/types/game";

function normalizeCharacterName(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function isUsableCharacterName(value: string): boolean {
  const normalized = normalizeCharacterName(value);
  if (!normalized) {
    return false;
  }
  if (normalized.toLowerCase() === "self") {
    return false;
  }
  return normalized.length >= 2;
}

export function extractCharacterClues(
  credits: TmdbCreditsResponse,
  max = GAME_CONFIG.maxCharacterClues,
): MovieClue[] {
  const byOrder = [...credits.cast].sort((a, b) => (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER));
  const clues = byOrder
    .map((member) => ({
      name: normalizeCharacterName(member.character ?? ""),
      actor: normalizeCharacterName(member.name ?? ""),
    }))
    .filter((member) => isUsableCharacterName(member.name));

  const deduped = Array.from(
    new Map(clues.map((clue) => [clue.name.toLowerCase(), clue])).values(),
  );
  return deduped.slice(0, max);
}
