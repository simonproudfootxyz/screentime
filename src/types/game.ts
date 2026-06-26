import { GameMode } from "@/types/game-mode";

export type MovieClue = {
  name: string;
  actor: string;
};

export type MovieAnswer = {
  movieId: number;
  title: string;
  originalTitle: string;
  description?: string;
  tagline?: string;
  genres: string[];
  releaseDate?: string;
  popularity: number;
};

export type Round = {
  roundId: string;
  clues: MovieClue[];
  answer: MovieAnswer;
  guesses: string[];
  solved: boolean;
  skipped: boolean;
};

export type SessionStatus = "idle" | "inRound" | "gameOver" | "complete";

export type SessionState = {
  mode: GameMode;
  status: SessionStatus;
  skipsRemaining: number;
  seenMovieIds: number[];
  rounds: Round[];
  currentRound: Round | null;
  totalCorrect: number;
  totalScore: number;
  createdAt: string;
  updatedAt: string;
};

export type GuessResult =
  | { ok: true; isCorrect: true; normalizedGuess: string }
  | { ok: true; isCorrect: false; normalizedGuess: string; reason?: string };

export type NextRoundResult =
  | { ok: true; round: Round; exhausted: false }
  | { ok: true; exhausted: true; round: null };
