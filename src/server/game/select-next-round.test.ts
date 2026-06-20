import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("@/server/tmdb/discover", () => ({
  discoverMovies: vi.fn(),
}));

vi.mock("@/server/tmdb/movie-details", () => ({
  getMovieDetails: vi.fn(),
  getMovieCredits: vi.fn(),
}));

import { discoverMovies } from "@/server/tmdb/discover";
import { getMovieCredits, getMovieDetails } from "@/server/tmdb/movie-details";
import { selectNextRound } from "@/server/game/select-next-round";

describe("selectNextRound", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("skips seen ids and returns first valid unseen round", async () => {
    vi.mocked(discoverMovies).mockResolvedValue({
      page: 1,
      total_pages: 1,
      results: [
        { id: 1, vote_average: 7, vote_count: 200, adult: false },
        { id: 2, vote_average: 7, vote_count: 200, adult: false },
      ],
    });
    vi.mocked(getMovieDetails).mockImplementation(async (movieId: number) => ({
      id: movieId,
      title: movieId === 2 ? "Inception" : "Ignored",
      original_title: movieId === 2 ? "Inception" : "Ignored",
      release_date: "2010-01-01",
      adult: false,
      vote_average: 8,
      vote_count: 1000,
    }));
    vi.mocked(getMovieCredits).mockResolvedValue({
      id: 2,
      cast: [{ id: 11, character: "Cobb", order: 0 }],
    });

    const result = await selectNextRound({
      mode: { type: "classic" },
      seenMovieIds: [1],
    });

    expect(result.exhausted).toBe(false);
    expect(result.round?.answer.movieId).toBe(2);
    expect(result.round?.clues[0]?.name).toBe("Cobb");
  });
});
