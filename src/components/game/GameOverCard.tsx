import { SessionState } from "@/types/game";

type GameOverCardProps = {
  session: SessionState;
  onRestart: () => Promise<void>;
  loading?: boolean;
};

export function GameOverCard({ session, onRestart, loading }: GameOverCardProps) {
  return (
    <section className="card">
      <h2>Game Over</h2>
      <p>You ran out of skips before solving the next movie.</p>
      <p>Total correct: {session.totalCorrect}</p>
      <p>Rounds played: {session.rounds.length}</p>
      <button onClick={onRestart} disabled={loading}>
        Play Again
      </button>
    </section>
  );
}
