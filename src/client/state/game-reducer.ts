import { SessionState } from "@/types/game";

export type GameAction =
  | { type: "session/replace"; session: SessionState | null }
  | { type: "session/clear" };

export function gameReducer(state: SessionState | null, action: GameAction): SessionState | null {
  switch (action.type) {
    case "session/replace":
      return action.session;
    case "session/clear":
      return null;
    default:
      return state;
  }
}
