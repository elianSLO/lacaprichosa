import { getPlayers } from "@/repositories/players.repository";

export default async function Home() {
  const { data, error } = await getPlayers();

  if (error) {
    return (
      <main className="p-8">
        <h1>Error</h1>
        <p>{error.message}</p>
      </main>
    );
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">
        La Caprichosa
      </h1>

      <p className="mt-4">
        Jugadores registrados: {data?.length ?? 0}
      </p>
    </main>
  );
}