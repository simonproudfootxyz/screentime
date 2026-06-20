import { describe, expect, it } from "vitest";
import { isGuessCorrect } from "@/lib/answer-matcher";

describe("isGuessCorrect", () => {
  it("matches exact title case-insensitively", () => {
    const result = isGuessCorrect("star wars: the force awakens", "Star Wars: The Force Awakens", "Star Wars: The Force Awakens");
    expect(result.isCorrect).toBe(true);
  });

  it("matches significant substring", () => {
    const result = isGuessCorrect("star wars", "Star Wars: The Force Awakens", "Star Wars: The Force Awakens");
    expect(result.isCorrect).toBe(true);
  });

  it("matches original title variant", () => {
    const result = isGuessCorrect("le fabuleux destin damelie poulain", "Amelie", "Le Fabuleux Destin d'Amelie Poulain");
    expect(result.isCorrect).toBe(true);
  });

  it("rejects short weak guesses", () => {
    const result = isGuessCorrect("war", "Star Wars: The Force Awakens", "Star Wars: The Force Awakens");
    expect(result.isCorrect).toBe(false);
  });
});
