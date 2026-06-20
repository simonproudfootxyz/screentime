export function normalizeAnswer(raw: string): string {
  return raw
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function tokenizeAnswer(raw: string): string[] {
  const normalized = normalizeAnswer(raw);
  if (!normalized) {
    return [];
  }
  return normalized.split(" ");
}
