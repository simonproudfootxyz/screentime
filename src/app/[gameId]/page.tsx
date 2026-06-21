import { GamePageClient } from "@/components/game/GamePageClient";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ gameId: string }>;
};

function isUuid(value: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
}

export default async function GamePage({ params }: Props) {
  const { gameId } = await params;
  if (!isUuid(gameId)) {
    notFound();
  }
  return <GamePageClient gameId={gameId} />;
}
