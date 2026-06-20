import { NextResponse } from "next/server";
import { skipRequestSchema } from "@/lib/schemas/game-api";
import { applySkip } from "@/server/game/session";
import { errorResponse, parseJson } from "@/app/api/game/_shared";

export async function POST(request: Request) {
  try {
    const payload = await parseJson(request, skipRequestSchema);
    const session = applySkip(payload.session);
    return NextResponse.json({ ok: true, session });
  } catch (error) {
    return errorResponse(error);
  }
}
