import { NextResponse } from "next/server";
import { startGameRequestSchema } from "@/lib/schemas/game-api";
import { createNewSession } from "@/server/game/session";
import { errorResponse, parseJson } from "@/app/api/game/_shared";

export async function POST(request: Request) {
  try {
    const payload = await parseJson(request, startGameRequestSchema);
    const session = await createNewSession(payload.mode);
    return NextResponse.json({ ok: true, session });
  } catch (error) {
    return errorResponse(error);
  }
}
