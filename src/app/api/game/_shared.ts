import { ZodSchema } from "zod";
import { NextResponse } from "next/server";

export async function parseJson<T>(request: Request, schema: ZodSchema<T>): Promise<T> {
  const json = await request.json();
  return schema.parse(json);
}

export function errorResponse(error: unknown): NextResponse {
  const message = error instanceof Error ? error.message : "Unknown error";
  return NextResponse.json({ ok: false, error: message }, { status: 400 });
}
