export type GameMode =
  | { type: "classic" }
  | { type: "genre"; genreId: number }
  | { type: "year"; year: number };
