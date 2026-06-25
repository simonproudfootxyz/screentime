import { STORAGE_KEYS } from "@/config/game";
import { SessionState } from "@/types/game";

function storageKey(gameId: string): string {
  return `${STORAGE_KEYS.sessionPrefix}:${gameId}`;
}

export function loadSession(gameId: string): SessionState | null {
  if (typeof window === "undefined") {
    return null;
  }

  const raw = window.localStorage.getItem(storageKey(gameId));
  if (!raw) {
    return null;
  }

  try {
    const session = JSON.parse(raw) as SessionState;
    if (typeof session.totalScore !== "number") {
      return {
        ...session,
        totalScore: 0,
      };
    }
    return session;
  } catch {
    return null;
  }
}

export function saveSession(gameId: string, session: SessionState): void {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.setItem(storageKey(gameId), JSON.stringify(session));
}

export function clearSession(gameId: string): void {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.removeItem(storageKey(gameId));
}
