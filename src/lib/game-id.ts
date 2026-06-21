function createPseudoRandomHex(length: number): string {
  const alphabet = "0123456789abcdef";
  let output = "";
  for (let i = 0; i < length; i += 1) {
    output += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return output;
}

export function createGameId(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return [
    createPseudoRandomHex(8),
    createPseudoRandomHex(4),
    `4${createPseudoRandomHex(3)}`,
    `${["8", "9", "a", "b"][Math.floor(Math.random() * 4)]}${createPseudoRandomHex(3)}`,
    createPseudoRandomHex(12),
  ].join("-");
}
