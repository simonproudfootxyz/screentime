import { describe, expect, it } from "vitest";
import { createNewSession, applyGuess } from "@/server/game/session";
import { SessionState } from "@/types/game";

function baseSession(skipsRemaining: number, existingGuesses: string[] = []): SessionState {
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
      guesses: existingGuesses,
      solved: false,
      skipped: false,
    },
    totalCorrect: 0,
    totalScore: 0,
    createdAt: now,
    updatedAt: now,
  };
}

describe("guess logic", () => {
  it("creates new sessions with 10 skips", async () => {
    const session = await createNewSession({ type: "classic" });
    expect(session.skipsRemaining).toBe(10);
  });

  it("keeps round active before reaching 5 wrong guesses", () => {
    const next = applyGuess(baseSession(4), "nope");
    expect(next.skipsRemaining).toBe(4);
    expect(next.currentRound?.skipped).toBe(false);
    expect(next.currentRound?.guesses).toHaveLength(1);
    expect(next.rounds).toHaveLength(0);
    expect(next.status).toBe("inRound");
  });

  it("auto-skips the movie on the 5th wrong guess", () => {
    const next = applyGuess(baseSession(4, ["a", "b", "c", "d"]), "wrong");
    expect(next.skipsRemaining).toBe(3);
    expect(next.currentRound?.skipped).toBe(true);
    expect(next.currentRound?.guesses).toHaveLength(5);
    expect(next.rounds).toHaveLength(1);
    expect(next.status).toBe("inRound");
  });

  it("ends game when the auto-skip uses the final skip", () => {
    const next = applyGuess(baseSession(1, ["a", "b", "c", "d"]), "wrong");
    expect(next.skipsRemaining).toBe(0);
    expect(next.currentRound?.skipped).toBe(true);
    expect(next.rounds).toHaveLength(1);
    expect(next.status).toBe("gameOver");
  });

  it("awards 5 points for a first-try correct guess", () => {
    const next = applyGuess(baseSession(4), "Star Wars");
    expect(next.currentRound?.solved).toBe(true);
    expect(next.totalCorrect).toBe(1);
    expect(next.totalScore).toBe(5);
  });

  it("awards 4 points for a second-try correct guess", () => {
    const next = applyGuess(baseSession(4, ["wrong guess"]), "Star Wars");
    expect(next.currentRound?.solved).toBe(true);
    expect(next.totalCorrect).toBe(1);
    expect(next.totalScore).toBe(4);
  });
});
