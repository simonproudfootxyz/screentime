import { NextResponse } from "next/server";
import { nextRoundRequestSchema } from "@/lib/schemas/game-api";
import { advanceToNextRound } from "@/server/game/session";
import { errorResponse, parseJson } from "@/app/api/game/_shared";

export async function POST(request: Request) {
  try {
    const payload = await parseJson(request, nextRoundRequestSchema);
    const session = await advanceToNextRound(payload.session);
    return NextResponse.json({ ok: true, session });
  } catch (error) {
    return errorResponse(error);
  }
}
