export const GAME_CONFIG = {
  initialSkips: 10,
  maxCharacterClues: 9,
  maxGuessesPerMovie: 5,
  minRating: 4,
  minVoteCount: 100,
  language: "en-US",
  minGuessLengthForSubstring: 4,
  minGuessTokensForSubstring: 2,
  tmdbDiscoverSort: "popularity.desc",
  maxDiscoverPages: 20,
} as const;

export const STORAGE_KEYS = {
  sessionPrefix: "movie-guessing-game.session.v1",
} as const;
