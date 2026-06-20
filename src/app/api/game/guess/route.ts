import { NextResponse } from "next/server";
import { guessRequestSchema } from "@/lib/schemas/game-api";
import { applyGuess } from "@/server/game/session";
import { errorResponse, parseJson } from "@/app/api/game/_shared";

export async function POST(request: Request) {
  try {
    const payload = await parseJson(request, guessRequestSchema);
    const session = applyGuess(payload.session, payload.guess);
    return NextResponse.json({ ok: true, session });
  } catch (error) {
    return errorResponse(error);
  }
}
