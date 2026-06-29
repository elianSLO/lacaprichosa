"use client";

import { Player } from "@/types/player";
import Link from "next/link";

interface PlayerFormProps {
  player?: Player;
  action: (formData: FormData) => Promise<void>;
}

export default function PlayerForm({
  player,
  action,
}: PlayerFormProps) {
  return (
    <form action={action} className="space-y-4 max-w-md">
      <div>
        <label className="block mb-1 font-medium">
          Nombre
        </label>

        <input
          name="name"
          defaultValue={player?.name}
          placeholder="Juan"
          required
          className="w-full rounded border p-2"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">
          Apellido
        </label>

        <input
          name="surname"
          defaultValue={player?.surname ?? ""}
          placeholder="Perez"
          className="w-full rounded border p-2"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">
          Alias
        </label>

        <input
          name="alias"
          defaultValue={player?.alias ?? ""}
          placeholder="El Mago"
          className="w-full rounded border p-2"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">
          Fecha de nacimiento
        </label>

        <input
          type="date"
          name="birth_date"
          defaultValue={player?.birth_date ?? ""}
          className="w-full rounded border p-2"
        />
      </div>

    <div className="flex gap-3 pt-4">
        <button
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
        >
            {player ? "Actualizar jugador" : "Crear jugador"}
        </button>

        <Link
            href="/players"
            className="rounded border border-gray-300 px-4 py-2 hover:bg-gray-100 transition"
        >
            Cancelar
        </Link>
    </div>
    </form>
  );
}