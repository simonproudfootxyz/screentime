"use client";

import { FormEvent, useState } from "react";

type GuessFormProps = {
  onSubmitGuess: (guess: string) => Promise<void>;
  disabled?: boolean;
};

export function GuessForm({ onSubmitGuess, disabled }: GuessFormProps) {
  const [guess, setGuess] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = guess.trim();
    if (!value) {
      return;
    }
    await onSubmitGuess(value);
    setGuess("");
  }

  return (
    <form onSubmit={onSubmit} className="guess-form">
      <input
        type="text"
        value={guess}
        onChange={(event) => setGuess(event.target.value)}
        placeholder="Enter movie title"
        disabled={disabled}
        aria-label="Movie title guess"
      />
      <button type="submit" disabled={disabled}>
        Submit Guess
      </button>
    </form>
  );
}
