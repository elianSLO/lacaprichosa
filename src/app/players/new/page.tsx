import PlayerForm from "@/components/players/PlayerForm";
import { createPlayerAction } from "@/actions/players.actions";

export default function NewPlayerPage() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        Nuevo jugador
      </h1>

      <PlayerForm action={createPlayerAction} />
    </main>
  )
}