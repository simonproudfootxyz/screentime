import { SessionRepository } from "@/server/repositories/session-repository";
import { SessionState } from "@/types/game";

const memory = new Map<string, SessionState>();

function getKey(session: SessionState): string {
  return session.createdAt;
}

export const sessionRepositoryLocal: SessionRepository = {
  async create(session: SessionState): Promise<void> {
    memory.set(getKey(session), session);
  },
  async update(session: SessionState): Promise<void> {
    memory.set(getKey(session), session);
  },
  async getById(id: string): Promise<SessionState | null> {
    return memory.get(id) ?? null;
  },
};
