"use client";

import { useRouter } from "next/navigation";
import { createGameId } from "@/lib/game-id";
import { Button } from "@/components/ui/Button";

export default function Home() {
  const router = useRouter();

  function onStart() {
    const gameId = createGameId();
    router.push(`/${gameId}`);
  }

  return (
    <main className="container">
      <section className="card">
        <h1>Screentime</h1>
        <p>Guess each movie from character names pulled from TMDB.</p>
        <ul>
          <li>Click Start to create a brand new game URL.</li>
          <li>Submit guesses until you find the correct movie title.</li>
          <li>You get 10 total skips for the full game.</li>
          <li>
            Each movie allows up to 5 guesses before an automatic skip is used.
          </li>
        </ul>
        <Button onClick={onStart} variant="primary">
          Start Game
        </Button>
      </section>
    </main>
  );
}
