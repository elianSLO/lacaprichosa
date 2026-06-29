import { notFound } from "next/navigation";
import PlayerForm from "@/components/players/PlayerForm";
import { getPlayer } from "@/repositories/players.repository";
import { updatePlayerAction } from "@/actions/players.actions";

interface EditPlayerPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditPlayerPage({
  params,
}: EditPlayerPageProps) {
  const { id } = await params;

  const { data: player, error } = await getPlayer(id);

  if (error || !player) {
    notFound();
  }

  const action = updatePlayerAction.bind(null, player.id);

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="mb-6 text-3xl font-bold">
        Editar jugador
      </h1>

      <PlayerForm
        player={player}
        action={action}
      />
    </main>
  );
}