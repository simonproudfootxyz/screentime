"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";

type GuessFormProps = {
  onSubmitGuess: (guess: string) => Promise<void>;
  disabled?: boolean;
};

export function GuessForm({ onSubmitGuess, disabled }: GuessFormProps) {
  const [guess, setGuess] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const isDisabled = Boolean(disabled) || submitting;

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isDisabled) {
      return;
    }

    const value = guess.trim();
    if (!value) {
      return;
    }

    try {
      setSubmitting(true);
      await onSubmitGuess(value);
      setGuess("");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="guess-form">
      <input
        type="text"
        value={guess}
        onChange={(event) => setGuess(event.target.value)}
        placeholder="Enter movie title"
        disabled={isDisabled}
        aria-label="Movie title guess"
        name="guess"
        id="guess-form__guess"
        className="guess-form__input"
      />
      <Button type="submit" disabled={isDisabled} variant="primary">
        Submit Guess
      </Button>
    </form>
  );
}
