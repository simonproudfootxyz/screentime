import { SessionState } from "@/types/game";

type ApiResponse = {
  ok: boolean;
  error?: string;
  session?: SessionState;
};

async function post<TPayload>(url: string, payload: TPayload): Promise<SessionState> {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const json = (await response.json()) as ApiResponse;
  if (!response.ok || !json.ok || !json.session) {
    throw new Error(json.error ?? "Request failed");
  }
  return json.session;
}

export async function startGame(): Promise<SessionState> {
  return post("/api/game/start", {
    mode: { type: "classic" },
  });
}

export async function nextRound(session: SessionState): Promise<SessionState> {
  return post("/api/game/next", { session });
}

export async function guessRound(session: SessionState, guess: string): Promise<SessionState> {
  return post("/api/game/guess", { session, guess });
}

export async function skipRound(session: SessionState): Promise<SessionState> {
  return post("/api/game/skip", { session });
}
