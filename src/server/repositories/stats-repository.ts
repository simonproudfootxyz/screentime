export type SessionStats = {
  totalSessions: number;
  totalRounds: number;
  totalCorrect: number;
};

export type StatsRepository = {
  getGlobalStats(): Promise<SessionStats>;
};
