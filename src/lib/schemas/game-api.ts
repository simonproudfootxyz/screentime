import { z } from "zod";

const gameModeSchema = z.discriminatedUnion("type", [
  z.object({ type: z.literal("classic") }),
  z.object({ type: z.literal("genre"), genreId: z.number().int().positive() }),
  z.object({ type: z.literal("year"), year: z.number().int().min(1888) }),
]);

const movieClueSchema = z.object({
  name: z.string().min(1),
});

const answerSchema = z.object({
  movieId: z.number().int().positive(),
  title: z.string().min(1),
  originalTitle: z.string().min(1),
  description: z.string().optional(),
  releaseDate: z.string().optional(),
});

const roundSchema = z.object({
  roundId: z.string().min(1),
  clues: z.array(movieClueSchema),
  answer: answerSchema,
  guesses: z.array(z.string()),
  solved: z.boolean(),
  skipped: z.boolean(),
});

export const sessionStateSchema = z.object({
  mode: gameModeSchema,
  status: z.enum(["idle", "inRound", "gameOver", "complete"]),
  skipsRemaining: z.number().int().min(0),
  seenMovieIds: z.array(z.number().int().positive()),
  rounds: z.array(roundSchema),
  currentRound: roundSchema.nullable(),
  totalCorrect: z.number().int().min(0),
  totalScore: z.number().int().min(0),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const startGameRequestSchema = z.object({
  mode: gameModeSchema.default({ type: "classic" }),
});

export const nextRoundRequestSchema = z.object({
  session: sessionStateSchema,
});

export const guessRequestSchema = z.object({
  session: sessionStateSchema,
  guess: z.string(),
});

export const skipRequestSchema = z.object({
  session: sessionStateSchema,
});
