import { GAME_CONFIG } from "@/config/game";
import { isGuessCorrect } from "@/lib/answer-matcher";
import { selectNextRound } from "@/server/game/select-next-round";
import { InvalidSessionStateError } from "@/server/game/game-errors";
import { GameMode } from "@/types/game-mode";
import { Round, SessionState } from "@/types/game";

function nowIso(): string {
  return new Date().toISOString();
}

function ensureCurrentRound(session: SessionState): Round {
  if (!session.currentRound) {
    throw new InvalidSessionStateError("No active round.");
  }
  return session.currentRound;
}

function applySkipForRound(session: SessionState, round: Round): SessionState {
  const nextSkipsRemaining = session.skipsRemaining - 1;
  const skippedRound: Round = {
    ...round,
    skipped: true,
  };

  return {
    ...session,
    skipsRemaining: Math.max(0, nextSkipsRemaining),
    rounds: [...session.rounds, skippedRound],
    currentRound: skippedRound,
    status: nextSkipsRemaining <= 0 ? "gameOver" : "inRound",
    updatedAt: nowIso(),
  };
}

export async function createNewSession(mode: GameMode): Promise<SessionState> {
  const createdAt = nowIso();
  return {
    mode,
    status: "idle",
    skipsRemaining: GAME_CONFIG.initialSkips,
    seenMovieIds: [],
    rounds: [],
    currentRound: null,
    totalCorrect: 0,
    totalScore: 0,
    createdAt,
    updatedAt: createdAt,
  };
}

export async function advanceToNextRound(session: SessionState): Promise<SessionState> {
  if (session.status === "gameOver") {
    throw new InvalidSessionStateError("Game is over.");
  }
  if (session.currentRound && !session.currentRound.solved && !session.currentRound.skipped) {
    throw new InvalidSessionStateError("Current round must be solved or skipped first.");
  }

  const next = await selectNextRound({
    seenMovieIds: session.seenMovieIds,
    mode: session.mode,
  });

  if (next.exhausted || !next.round) {
    return {
      ...session,
      status: "complete",
      currentRound: null,
      updatedAt: nowIso(),
    };
  }

  return {
    ...session,
    status: "inRound",
    seenMovieIds: [...session.seenMovieIds, next.round.answer.movieId],
    currentRound: next.round,
    updatedAt: nowIso(),
  };
}

export function applyGuess(session: SessionState, guess: string): SessionState {
  if (session.status !== "inRound") {
    throw new InvalidSessionStateError("Cannot guess when game is not in a round.");
  }

  const current = ensureCurrentRound(session);
  const result = isGuessCorrect(guess, current.answer.title, current.answer.originalTitle);
  const updatedRound: Round = {
    ...current,
    guesses: [...current.guesses, guess],
  };

  if (!result.isCorrect) {
    if (updatedRound.guesses.length >= GAME_CONFIG.maxGuessesPerMovie) {
      return applySkipForRound(session, updatedRound);
    }

    return {
      ...session,
      currentRound: updatedRound,
      updatedAt: nowIso(),
    };
  }

  const solvedRound: Round = {
    ...updatedRound,
    solved: true,
  };
  const roundScore = GAME_CONFIG.maxGuessesPerMovie - updatedRound.guesses.length + 1;

  return {
    ...session,
    rounds: [...session.rounds, solvedRound],
    currentRound: solvedRound,
    totalCorrect: session.totalCorrect + 1,
    totalScore: session.totalScore + roundScore,
    updatedAt: nowIso(),
  };
}

export function applySkip(session: SessionState): SessionState {
  if (session.status !== "inRound") {
    throw new InvalidSessionStateError("Cannot skip when game is not in a round.");
  }

  const current = ensureCurrentRound(session);
  return applySkipForRound(session, current);
}
