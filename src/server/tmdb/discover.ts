import { tmdbGet } from "@/server/tmdb/client";
import { buildDiscoverQuery } from "@/server/tmdb/build-discover-query";
import { GameMode } from "@/types/game-mode";
import { TmdbDiscoverResponse } from "@/types/tmdb";

export async function discoverMovies(mode: GameMode, page: number): Promise<TmdbDiscoverResponse> {
  return tmdbGet<TmdbDiscoverResponse>("/discover/movie", {
    query: buildDiscoverQuery(mode, page),
    nextRevalidateSeconds: 60,
  });
}
