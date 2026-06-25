import { describe, expect, it, vi } from "vitest";

vi.mock("@/server/game/session", () => ({
  createNewSession: vi.fn(),
  advanceToNextRound: vi.fn(),
  applyGuess: vi.fn(),
  applySkip: vi.fn(),
}));

import { POST as startPost } from "@/app/api/game/start/route";
import { POST as nextPost } from "@/app/api/game/next/route";
import { POST as guessPost } from "@/app/api/game/guess/route";
import { POST as skipPost } from "@/app/api/game/skip/route";
import { advanceToNextRound, applyGuess, applySkip, createNewSession } from "@/server/game/session";

function createRequest(body: unknown): Request {
  return new Request("http://localhost", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

const mockSession = {
  mode: { type: "classic" },
  status: "inRound",
  skipsRemaining: 5,
  seenMovieIds: [],
  rounds: [],
  currentRound: null,
  totalCorrect: 0,
  totalScore: 0,
  createdAt: "2020-01-01T00:00:00.000Z",
  updatedAt: "2020-01-01T00:00:00.000Z",
};

describe("game routes", () => {
  it("start route returns session", async () => {
    vi.mocked(createNewSession).mockResolvedValue(mockSession as never);
    const response = await startPost(createRequest({ mode: { type: "classic" } }));
    const json = await response.json();
    expect(json.ok).toBe(true);
  });

  it("next route returns session", async () => {
    vi.mocked(advanceToNextRound).mockResolvedValue(mockSession as never);
    const response = await nextPost(createRequest({ session: mockSession }));
    const json = await response.json();
    expect(json.ok).toBe(true);
  });

  it("guess route returns session", async () => {
    vi.mocked(applyGuess).mockReturnValue(mockSession as never);
    const response = await guessPost(createRequest({ session: mockSession, guess: "test movie" }));
    const json = await response.json();
    expect(json.ok).toBe(true);
  });

  it("skip route returns session", async () => {
    vi.mocked(applySkip).mockReturnValue(mockSession as never);
    const response = await skipPost(createRequest({ session: mockSession }));
    const json = await response.json();
    expect(json.ok).toBe(true);
  });
});
