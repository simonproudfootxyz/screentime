import { describe, expect, it } from "vitest";
import { applySkip } from "@/server/game/session";
import { SessionState } from "@/types/game";

function baseSession(skipsRemaining: number): SessionState {
  const now = new Date().toISOString();
  return {
    mode: { type: "classic" },
    status: "inRound",
    skipsRemaining,
    seenMovieIds: [1],
    rounds: [],
    currentRound: {
      roundId: "1",
      clues: [{ name: "Luke Skywalker" }],
      answer: { movieId: 1, title: "Star Wars", originalTitle: "Star Wars" },
      guesses: [],
      solved: false,
      skipped: false,
    },
    totalCorrect: 0,
    totalScore: 0,
    createdAt: now,
    updatedAt: now,
  };
}

describe("applySkip", () => {
  it("decrements skips and keeps game in round when skips remain", () => {
    const next = applySkip(baseSession(3));
    expect(next.skipsRemaining).toBe(2);
    expect(next.status).toBe("inRound");
    expect(next.currentRound?.skipped).toBe(true);
  });

  it("ends game when skip reaches zero", () => {
    const next = applySkip(baseSession(1));
    expect(next.skipsRemaining).toBe(0);
    expect(next.status).toBe("gameOver");
    expect(next.currentRound?.skipped).toBe(true);
    expect(next.currentRound?.answer.title).toBe("Star Wars");
    expect(next.rounds).toHaveLength(1);
  });
});
