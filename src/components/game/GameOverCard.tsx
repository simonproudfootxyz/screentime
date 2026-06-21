import { SessionState } from "@/types/game";

type GameOverCardProps = {
  session: SessionState;
  onStartNewGame: () => void;
  loading?: boolean;
};

export function GameOverCard({ session, onStartNewGame, loading }: GameOverCardProps) {
  const finalSkippedAnswer = session.currentRound?.skipped ? session.currentRound.answer.title : null;
  const finalSkippedDescription =
    session.currentRound?.skipped && session.currentRound.answer.description
      ? session.currentRound.answer.description
      : null;

  return (
    <section className="card">
      <h2>Game Over</h2>
      <p>You used your final skip. The game is now over.</p>
      {finalSkippedAnswer ? (
        <p>
          Final skipped movie: <strong>{finalSkippedAnswer}</strong>
        </p>
      ) : null}
      {finalSkippedDescription ? <p className="subtle">{finalSkippedDescription}</p> : null}
      <p>Total correct: {session.totalCorrect}</p>
      <p>Rounds played: {session.rounds.length}</p>
      <button onClick={onStartNewGame} disabled={loading}>
        Start New Game
      </button>
    </section>
  );
}
