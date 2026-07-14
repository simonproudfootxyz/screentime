"use client";

import { useCallback, useEffect, useReducer, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CharacterClueList } from "@/components/game/CharacterClueList";
import { GameOverCard } from "@/components/game/GameOverCard";
import { GameStatusBar } from "@/components/game/GameStatusBar";
import { GuessForm } from "@/components/game/GuessForm";
import { Button } from "@/components/ui/Button";
import {
  guessRound,
  nextRound,
  skipRound,
  startGame,
} from "@/client/state/game-actions";
import { gameReducer } from "@/client/state/game-reducer";
import {
  clearSession,
  loadSession,
  saveSession,
} from "@/client/storage/session-store";
import { createGameId } from "@/lib/game-id";
import { SessionState } from "@/types/game";
import { GAME_CONFIG } from "@/config/game";

type Props = {
  gameId: string;
};

export function GamePageClient({ gameId }: Props) {
  const router = useRouter();
  const [session, dispatch] = useReducer(
    gameReducer,
    null as SessionState | null,
  );
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const actionInFlightRef = useRef(false);

  const runAction = useCallback(async (action: () => Promise<SessionState>) => {
    if (actionInFlightRef.current) {
      return;
    }

    actionInFlightRef.current = true;
    try {
      setLoading(true);
      setError(null);
      const next = await action();
      dispatch({ type: "session/replace", session: next });
    } catch (actionError) {
      setError(
        actionError instanceof Error ? actionError.message : "Unexpected error",
      );
    } finally {
      actionInFlightRef.current = false;
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const restored = loadSession(gameId);
    if (restored) {
      dispatch({ type: "session/replace", session: restored });
      return;
    }

    const timer = window.setTimeout(() => {
      void runAction(async () => {
        const created = await startGame();
        return nextRound(created);
      });
    }, 0);

    return () => {
      window.clearTimeout(timer);
    };
  }, [gameId, runAction]);

  useEffect(() => {
    if (session) {
      saveSession(gameId, session);
    }
  }, [gameId, session]);

  async function onGuess(guess: string) {
    if (!session || actionInFlightRef.current) {
      return;
    }

    await runAction(async () => guessRound(session, guess));
  }

  async function onSkip() {
    if (!session || actionInFlightRef.current) {
      return;
    }

    await runAction(async () => skipRound(session));
  }

  async function onContinue() {
    if (!session || actionInFlightRef.current) {
      return;
    }
    await runAction(async () => nextRound(session));
  }

  function onStartNewGame() {
    clearSession(gameId);
    const nextGameId = createGameId();
    router.push(`/${nextGameId}`);
  }

  if (!session) {
    return (
      <main className="container">
        <section className="card">
          <h1>Screentime</h1>
          <p>Preparing your game...</p>
          {error ? <p className="error">{error}</p> : null}
        </section>
      </main>
    );
  }

  if (session.status === "gameOver") {
    return (
      <main className="container">
        <GameOverCard
          session={session}
          onStartNewGame={onStartNewGame}
          loading={loading}
        />
      </main>
    );
  }

  const round = session.currentRound;

  const guessesRemaining = round
    ? GAME_CONFIG.maxGuessesPerMovie - round?.guesses.length
    : 0;
  const releaseYear = round?.answer.releaseDate
    ? new Date(round.answer.releaseDate).getFullYear()
    : null;
  const guessCount = round?.guesses.length ?? 0;
  const shouldShowReleaseYear = guessCount > 0;
  const shouldShowGenres = guessCount > 1;
  const shouldShowTagline = guessCount > 2;
  const shouldShowActorNames = guessCount > 3;

  return (
    <main className="container">
      <section className="card">
        <h1 className="card__title">
          <Link href="/" className="card__title-link">
            Screentime
          </Link>
        </h1>
        <GameStatusBar
          guessesRemaining={guessesRemaining}
          skipsRemaining={session.skipsRemaining}
          totalCorrect={session.totalCorrect}
          totalScore={session.totalScore}
          roundsPlayed={session.rounds.length}
        />

        {round ? (
          <>
            <GuessForm
              onSubmitGuess={onGuess}
              disabled={loading || round.solved || round.skipped}
            />
            <Button
              onClick={onSkip}
              disabled={loading || round.solved || round.skipped}
              variant="primaryInvert"
            >
              Skip (Reveal Answer)
            </Button>
            {round.guesses.length > 0 ? (
              <p className="subtle">
                Last guess:{" "}
                <strong>{round.guesses[round.guesses.length - 1]}</strong>
              </p>
            ) : null}
            {round.solved ? (
              <>
                <p className="subtle">
                  Correct! The answer was <strong>{round.answer.title}</strong>.
                </p>
                <Button onClick={onContinue} disabled={loading} variant="primary">
                  Next Movie
                </Button>
              </>
            ) : null}
            {round.skipped ? (
              <>
                <p className="subtle">
                  Skipped answer: <strong>{round.answer.title}</strong>
                </p>
                <Button onClick={onContinue} disabled={loading} variant="primary">
                  Next Movie
                </Button>
              </>
            ) : null}
            {shouldShowReleaseYear && (
              <section>
                <h2>Release Year</h2>
                <p>{releaseYear}</p>
              </section>
            )}
            {shouldShowGenres && (
              <section>
                <h2>Genres</h2>
                <p>{round.answer.genres.join(", ")}</p>
              </section>
            )}
            {shouldShowTagline && (
              <section>
                <h2>Tagline</h2>
                <p>{round.answer.tagline}</p>
              </section>
            )}
            {round.answer.description && (
              <section>
                <h2>Description</h2>
                <p>{round.answer.description}</p>
              </section>
            )}
            <CharacterClueList
              clues={round.clues}
              shouldShowActorNames={shouldShowActorNames}
            />
          </>
        ) : (
          <p>Loading next round...</p>
        )}
        {error ? <p className="error">{error}</p> : null}
      </section>
    </main>
  );
}
