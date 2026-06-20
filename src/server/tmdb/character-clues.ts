import { GAME_CONFIG } from "@/config/game";
import { TmdbCreditsResponse } from "@/types/tmdb";

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

export function extractCharacterClues(credits: TmdbCreditsResponse, max = GAME_CONFIG.maxCharacterClues): string[] {
  const byOrder = [...credits.cast].sort((a, b) => (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER));
  const names = byOrder
    .map((member) => member.character ?? "")
    .map(normalizeCharacterName)
    .filter(isUsableCharacterName);

  const deduped = Array.from(new Set(names));
  return deduped.slice(0, max);
}
