type GameStatusBarProps = {
  guessesRemaining: number;
  skipsRemaining: number;
  totalCorrect: number;
  roundsPlayed: number;
};

export function GameStatusBar({
  guessesRemaining,
  skipsRemaining,
  totalCorrect,
  roundsPlayed,
}: GameStatusBarProps) {
  return (
    <div className="status-bar">
      <p>Guesses remaining: {guessesRemaining}</p>
      <p>Skips remaining: {skipsRemaining}</p>
      <p>Correct: {totalCorrect}</p>
      <p>Rounds played: {roundsPlayed}</p>
    </div>
  );
}
