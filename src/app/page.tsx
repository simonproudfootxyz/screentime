"use client";

import { useEffect, useReducer, useState } from "react";
import { CharacterClueList } from "@/components/game/CharacterClueList";
import { GameOverCard } from "@/components/game/GameOverCard";
import { GameStatusBar } from "@/components/game/GameStatusBar";
import { GuessForm } from "@/components/game/GuessForm";
import { guessRound, nextRound, skipRound, startGame } from "@/client/state/game-actions";
import { gameReducer } from "@/client/state/game-reducer";
import { clearSession, loadSession, saveSession } from "@/client/storage/session-store";
import { SessionState } from "@/types/game";

export default function Home() {
  const [session, dispatch] = useReducer(gameReducer, null as SessionState | null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const restored = loadSession();
    if (restored) {
      dispatch({ type: "session/replace", session: restored });
    }
  }, []);

  useEffect(() => {
    if (session) {
      saveSession(session);
    }
  }, [session]);

  async function runAction(action: () => Promise<SessionState>) {
    try {
      setLoading(true);
      setError(null);
      const next = await action();
      dispatch({ type: "session/replace", session: next });
    } catch (actionError) {
      setError(actionError instanceof Error ? actionError.message : "Unexpected error");
    } finally {
      setLoading(false);
    }
  }

  async function onStart() {
    await runAction(async () => {
      const created = await startGame();
      return nextRound(created);
    });
  }

  async function onGuess(guess: string) {
    if (!session) {
      return;
    }

    await runAction(async () => guessRound(session, guess));
  }

  async function onSkip() {
    if (!session) {
      return;
    }

    await runAction(async () => skipRound(session));
  }

  async function onContinue() {
    if (!session) {
      return;
    }
    await runAction(async () => nextRound(session));
  }

  async function onRestart() {
    clearSession();
    dispatch({ type: "session/clear" });
    await onStart();
  }

  if (!session) {
    return (
      <main className="container">
        <section className="card">
          <h1>Movie Guessing Game</h1>
          <p>Guess the movie from character names. You get 5 skips in total.</p>
          <button onClick={onStart} disabled={loading}>
            Start Game
          </button>
          {error ? <p className="error">{error}</p> : null}
        </section>
      </main>
    );
  }

  if (session.status === "gameOver") {
    return (
      <main className="container">
        <GameOverCard session={session} onRestart={onRestart} loading={loading} />
      </main>
    );
  }

  const round = session.currentRound;

  return (
    <main className="container">
      <section className="card">
        <h1>Movie Guessing Game</h1>
        <GameStatusBar
          skipsRemaining={session.skipsRemaining}
          totalCorrect={session.totalCorrect}
          roundsPlayed={session.rounds.length}
        />

        {round ? (
          <>
            <CharacterClueList clues={round.clues} />
            <GuessForm onSubmitGuess={onGuess} disabled={loading || round.solved || round.skipped} />
            <button onClick={onSkip} disabled={loading || round.solved || round.skipped}>
              Skip (Reveal Answer)
            </button>
            {round.guesses.length > 0 ? (
              <p className="subtle">
                Last guess: <strong>{round.guesses[round.guesses.length - 1]}</strong>
              </p>
            ) : null}
            {round.solved ? (
              <>
                <p className="subtle">
                  Correct! The answer was <strong>{round.answer.title}</strong>.
                </p>
                <button onClick={onContinue} disabled={loading}>
                  Next Movie
                </button>
              </>
            ) : null}
            {round.skipped ? (
              <>
                <p className="subtle">
                  Skipped answer: <strong>{round.answer.title}</strong>
                </p>
                {session.status !== "gameOver" ? (
                  <button onClick={onContinue} disabled={loading}>
                    Next Movie
                  </button>
                ) : null}
              </>
            ) : null}
          </>
        ) : (
          <p>Loading next round...</p>
        )}
        {error ? <p className="error">{error}</p> : null}
      </section>
    </main>
  );
}
