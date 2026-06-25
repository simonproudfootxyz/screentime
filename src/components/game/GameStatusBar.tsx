type GameStatusBarProps = {
  guessesRemaining: number;
  skipsRemaining: number;
  totalCorrect: number;
  totalScore: number;
  roundsPlayed: number;
};

export function GameStatusBar({
  guessesRemaining,
  skipsRemaining,
  totalCorrect,
  totalScore,
  roundsPlayed,
}: GameStatusBarProps) {
  return (
    <div className="status-bar">
      <p>Guesses remaining: {guessesRemaining}</p>
      <p>Skips remaining: {skipsRemaining}</p>
      <p>Correct: {totalCorrect}</p>
      <p>Score: {totalScore}</p>
      <p>Rounds played: {roundsPlayed}</p>
    </div>
  );
}
