import { MovieClue } from "@/types/game";
import "./CharacterClueList.css";

type CharacterClueListProps = {
  clues: MovieClue[];
};

export function CharacterClueList({ clues }: CharacterClueListProps) {
  return (
    <section>
      <h2>Characters</h2>
      <ul className="character-list">
        {clues.map((clue, index) => {
          const isLast = index === clues.length - 1;
          const punctuation = isLast ? "." : "&";
          return (
            <li className="character-list-item" key={`${clue.name}-${index}`}>
              {clue.name}
              <span className="character-list-item__punctuation">
                {punctuation}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
