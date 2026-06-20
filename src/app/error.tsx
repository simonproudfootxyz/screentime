"use client";

type ErrorPageProps = {
  error: Error;
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <main className="container">
      <section className="card">
        <h1>Something went wrong</h1>
        <p className="error">{error.message}</p>
        <button onClick={reset}>Try again</button>
      </section>
    </main>
  );
}
