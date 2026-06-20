import { SessionState } from "@/types/game";

export type SessionRepository = {
  create(session: SessionState): Promise<void>;
  update(session: SessionState): Promise<void>;
  getById(id: string): Promise<SessionState | null>;
};
