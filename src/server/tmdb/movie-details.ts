import { GAME_CONFIG } from "@/config/game";
import { tmdbGet } from "@/server/tmdb/client";
import { TmdbCreditsResponse, TmdbMovieDetails } from "@/types/tmdb";

export async function getMovieDetails(movieId: number): Promise<TmdbMovieDetails> {
  return tmdbGet<TmdbMovieDetails>(`/movie/${movieId}`, {
    query: {
      language: GAME_CONFIG.language,
    },
    nextRevalidateSeconds: 300,
  });
}

export async function getMovieCredits(movieId: number): Promise<TmdbCreditsResponse> {
  return tmdbGet<TmdbCreditsResponse>(`/movie/${movieId}/credits`, {
    query: {
      language: GAME_CONFIG.language,
    },
    nextRevalidateSeconds: 300,
  });
}
