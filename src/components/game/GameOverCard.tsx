"use client";

import { useState } from "react";
import { SessionState } from "@/types/game";

type GameOverCardProps = {
  session: SessionState;
  onStartNewGame: () => void;
  loading?: boolean;
};

export function GameOverCard({
  session,
  onStartNewGame,
  loading,
}: GameOverCardProps) {
  const [copied, setCopied] = useState(false);
  const currentUrl =
    typeof window !== "undefined" ? window.location.origin : "";
  const finalSkippedAnswer = session.currentRound?.skipped
    ? session.currentRound.answer.title
    : null;
  const shareText = `I scored ${session.totalScore} points (${session.totalCorrect}/${session.rounds.length} correct) in Screentime. Can you beat me?`;
  const shareMessage = currentUrl ? `${shareText} ${currentUrl}` : shareText;

  function openShareWindow(url: string): void {
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function shareOnX(): void {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMessage)}`;
    openShareWindow(url);
  }

  function shareOnBluesky(): void {
    const url = `https://bsky.app/intent/compose?text=${encodeURIComponent(shareMessage)}`;
    openShareWindow(url);
  }

  function shareOnFacebook(): void {
    if (!currentUrl) {
      return;
    }
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}&quote=${encodeURIComponent(shareText)}`;
    openShareWindow(url);
  }

  async function copyShareMessage(): Promise<void> {
    try {
      await navigator.clipboard.writeText(shareMessage);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = shareMessage;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <section className="card">
      <h2>Game Over</h2>
      <p>You used your final skip. The game is now over.</p>
      {finalSkippedAnswer ? (
        <p>
          Final skipped movie: <strong>{finalSkippedAnswer}</strong>
        </p>
      ) : null}
      <p>Total correct: {session.totalCorrect}</p>
      <p>Total score: {session.totalScore}</p>
      <p>Rounds played: {session.rounds.length}</p>
      <section className="share-actions">
        <button onClick={shareOnX} disabled={!currentUrl}>
          Share on X
        </button>
        <button onClick={shareOnBluesky} disabled={!currentUrl}>
          Share on Bluesky
        </button>
        <button onClick={shareOnFacebook} disabled={!currentUrl}>
          Share on Facebook
        </button>
        <button onClick={() => void copyShareMessage()} disabled={!currentUrl}>
          {copied ? "Copied!" : "Share Results"}
        </button>
      </section>
      <button onClick={onStartNewGame} disabled={loading}>
        Start New Game
      </button>
    </section>
  );
}
