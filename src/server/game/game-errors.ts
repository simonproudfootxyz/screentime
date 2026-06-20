export class ExhaustedMoviePoolError extends Error {
  constructor() {
    super("No valid unseen movies remain for this session and mode.");
    this.name = "ExhaustedMoviePoolError";
  }
}

export class InvalidSessionStateError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidSessionStateError";
  }
}
