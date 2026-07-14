"use client";

import { useState } from "react";
import { SessionState } from "@/types/game";
import { Button } from "@/components/ui/Button";

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
        <Button onClick={shareOnX} disabled={!currentUrl} variant="primaryInvert">
          Share on X
        </Button>
        <Button
          onClick={shareOnBluesky}
          disabled={!currentUrl}
          variant="primaryInvert"
        >
          Share on Bluesky
        </Button>
        <Button
          onClick={shareOnFacebook}
          disabled={!currentUrl}
          variant="primaryInvert"
        >
          Share on Facebook
        </Button>
        <Button
          onClick={() => void copyShareMessage()}
          disabled={!currentUrl}
          variant="primaryInvert"
        >
          {copied ? "Copied!" : "Share Results"}
        </Button>
      </section>
      <Button onClick={onStartNewGame} disabled={loading} variant="primary">
        Start New Game
      </Button>
    </section>
  );
}
