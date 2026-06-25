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

function shuffle<T>(items: T[]): T[] {
  const output = [...items];
  for (let i = output.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [output[i], output[j]] = [output[j], output[i]];
  }
  return output;
}

function buildRandomPageOrder(totalPages: number): number[] {
  const maxPages = Math.max(
    1,
    Math.min(totalPages, GAME_CONFIG.maxDiscoverPages),
  );
  return shuffle(Array.from({ length: maxPages }, (_, index) => index + 1));
}

function createRoundId(movieId: number): string {
  return `${movieId}-${Date.now()}`;
}

export async function selectNextRound(
  args: SelectionArgs,
): Promise<NextRoundResult> {
  const seen = new Set(args.seenMovieIds);
  const firstPage = await discoverMovies(args.mode, 1);
  const discoverByPage = new Map<number, typeof firstPage>([[1, firstPage]]);
  const pagesToCheck = buildRandomPageOrder(firstPage.total_pages);

  for (const page of pagesToCheck) {
    const discover =
      discoverByPage.get(page) ?? (await discoverMovies(args.mode, page));
    if (!discover.results.length) {
      continue;
    }

    for (const movie of shuffle(discover.results)) {
      if (seen.has(movie.id)) {
        continue;
      }

      try {
        const [details, credits] = await Promise.all([
          getMovieDetails(movie.id),
          getMovieCredits(movie.id),
        ]);
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
            description: details.overview,
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
