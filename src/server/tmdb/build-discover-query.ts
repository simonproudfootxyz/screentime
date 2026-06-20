import { GAME_CONFIG } from "@/config/game";
import { GameMode } from "@/types/game-mode";

export function buildDiscoverQuery(mode: GameMode, page: number): Record<string, string | number | boolean> {
  const query: Record<string, string | number | boolean> = {
    include_adult: false,
    include_video: false,
    language: GAME_CONFIG.language,
    sort_by: GAME_CONFIG.tmdbDiscoverSort,
    "vote_average.gte": GAME_CONFIG.minRating,
    "vote_count.gte": GAME_CONFIG.minVoteCount,
    page,
  };

  if (mode.type === "genre") {
    query.with_genres = mode.genreId;
  }

  if (mode.type === "year") {
    query.primary_release_year = mode.year;
  }

  return query;
}
