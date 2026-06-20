type GameStatusBarProps = {
  skipsRemaining: number;
  totalCorrect: number;
  roundsPlayed: number;
};

export function GameStatusBar({ skipsRemaining, totalCorrect, roundsPlayed }: GameStatusBarProps) {
  return (
    <div className="status-bar">
      <p>Skips remaining: {skipsRemaining}</p>
      <p>Correct: {totalCorrect}</p>
      <p>Rounds played: {roundsPlayed}</p>
    </div>
  );
}
