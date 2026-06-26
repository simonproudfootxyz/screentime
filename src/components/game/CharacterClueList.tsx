import { MovieClue } from "@/types/game";
import "./CharacterClueList.css";

type CharacterClueListProps = {
  clues: MovieClue[];
  shouldShowActorNames: boolean;
};

export function CharacterClueList({
  clues,
  shouldShowActorNames,
}: CharacterClueListProps) {
  return (
    <section>
      <h2>Characters</h2>
      <ul className="character-list">
        {clues.map((clue, index) => {
          const isLast = index === clues.length - 1;
          const punctuation = isLast ? "." : "&";
          return (
            <li
              className="character-list-item"
              key={`${clue.name}-${clue.actor}-${index}`}
            >
              {clue.name}
              {shouldShowActorNames && clue.actor ? (
                <span className="character-list-item__actor">
                  {" "}
                  ({clue.actor})
                </span>
              ) : null}
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
