import { MovieClue } from "@/types/game";

type CharacterClueListProps = {
  clues: MovieClue[];
};

export function CharacterClueList({ clues }: CharacterClueListProps) {
  return (
    <section>
      <h2>Character clues</h2>
      <ul>
        {clues.map((clue, index) => (
          <li key={`${clue.name}-${index}`}>{clue.name}</li>
        ))}
      </ul>
    </section>
  );
}
