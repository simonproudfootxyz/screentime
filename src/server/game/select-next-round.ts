import { GAME_CONFIG } from "@/config/game";
import { discoverMovies } from "@/server/tmdb/discover";
import { extractCharacterClues } from "@/server/tmdb/character-clues";
import { getMovieCredits, getMovieDetails } from "@/server/tmdb/movie-details";
import { gameLogger } from "@/server/logging/game-logger";
import { ExhaustedMoviePoolError } from "@/server/game/game-errors";
import { NextRoundResult, Round } from "@/types/game";
import { GameMode } from "@/types/game-mode";

type SelectionArgs = {
  seenMovieIds: number[];
  mode: GameMode;
};

function createRoundId(movieId: number): string {
  return `${movieId}-${Date.now()}`;
}

export async function selectNextRound(args: SelectionArgs): Promise<NextRoundResult> {
  const seen = new Set(args.seenMovieIds);

  for (let page = 1; page <= GAME_CONFIG.maxDiscoverPages; page += 1) {
    const discover = await discoverMovies(args.mode, page);
    if (!discover.results.length) {
      break;
    }

    for (const movie of discover.results) {
      if (seen.has(movie.id)) {
        continue;
      }

      try {
        const [details, credits] = await Promise.all([getMovieDetails(movie.id), getMovieCredits(movie.id)]);
        const clues = extractCharacterClues(credits);
        if (clues.length === 0) {
          continue;
        }

        const round: Round = {
          roundId: createRoundId(movie.id),
          clues: clues.map((name) => ({ name })),
          answer: {
            movieId: details.id,
            title: details.title,
            originalTitle: details.original_title,
            releaseDate: details.release_date,
          },
          guesses: [],
          solved: false,
          skipped: false,
        };

        return { ok: true, exhausted: false, round };
      } catch (error) {
        gameLogger.warn("Failed to create round candidate", {
          movieId: movie.id,
          error: error instanceof Error ? error.message : String(error),
        });
      }
    }
  }

  throw new ExhaustedMoviePoolError();
}
