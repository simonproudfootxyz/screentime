type LogPayload = Record<string, unknown>;

function format(message: string, payload?: LogPayload): string {
  if (!payload) {
    return message;
  }
  return `${message} ${JSON.stringify(payload)}`;
}

export const gameLogger = {
  info(message: string, payload?: LogPayload): void {
    console.info(format(message, payload));
  },
  warn(message: string, payload?: LogPayload): void {
    console.warn(format(message, payload));
  },
  error(message: string, payload?: LogPayload): void {
    console.error(format(message, payload));
  },
};
