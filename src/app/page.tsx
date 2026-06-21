"use client";

import { useRouter } from "next/navigation";
import { createGameId } from "@/lib/game-id";

export default function Home() {
  const router = useRouter();

  function onStart() {
    const gameId = createGameId();
    router.push(`/${gameId}`);
  }

  return (
    <main className="container">
      <section className="card">
        <h1>Movie Guessing Game</h1>
        <p>Guess each movie from character names pulled from TMDB.</p>
        <ul>
          <li>Click Start to create a brand new game URL.</li>
          <li>Submit guesses until you find the correct movie title.</li>
          <li>You can skip rounds, but you only get 5 skips total.</li>
        </ul>
        <button onClick={onStart}>Start Game</button>
      </section>
    </main>
  );
}
