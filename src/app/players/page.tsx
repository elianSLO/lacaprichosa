import Link from "next/link";
import { getPlayers } from "@/repositories/players.repository";

export default async function PlayersPage() {
  const { data: players, error } = await getPlayers();

  if (error) {
    return (
      <main className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">Jugadores</h1>

        <div className="rounded-md border border-red-300 bg-red-50 p-4 text-red-700">
          Error al cargar los jugadores: {error.message}
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Jugadores</h1>

        <Link
          href="/players/new"
          className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
        >
          Nuevo jugador
        </Link>
      </div>

      <div className="overflow-hidden rounded-lg border">
        <table className="min-w-full">
          <thead className="bg-emerald-700">
            <tr>
              <th className="px-4 py-3 text-left">Nombre</th>
              <th className="px-4 py-3 text-left">Apodo</th>
              <th className="px-4 py-3 text-left">Apellido</th>
              <th className="px-4 py-3 text-center">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {players?.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="px-4 py-8 text-center text-gray-500"
                >
                  No hay jugadores registrados.
                </td>
              </tr>
            )}

            {players?.map((player) => (
              <tr key={player.id} className="border-t">
                <td className="px-4 py-3">{player.name}</td>

                <td className="px-4 py-3">
                  {player.alias ?? "-"}
                </td>
                
                <td className="px-4 py-3">
                  {player.surname ?? "-"}
                </td>

                <td className="px-4 py-3 text-center">
                  <Link
                    href={`/players/${player.id}/edit`}
                    className="text-blue-600 hover:underline"
                  >
                    Editar
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}