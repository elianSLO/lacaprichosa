"use client";

import Link from "next/link";
import { Field } from "@/types/field";

interface FieldFormProps {
  field?: Field;
  action: (formData: FormData) => Promise<void>;
}

export default function FieldForm({
  field,
  action,
}: FieldFormProps) {
  return (
    <form action={action} className="space-y-4 max-w-md">
      <div>
        <label className="block mb-1 font-medium">
          Nombre
        </label>

        <input
          name="name"
          defaultValue={field?.name}
          placeholder="Cancha Norte"
          required
          className="w-full rounded border p-2"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">
          Ubicación
        </label>

        <input
          name="location"
          defaultValue={field?.location ?? ""}
          placeholder="Buenos Aires"
          className="w-full rounded border p-2"
        />
      </div>

      <div className="flex gap-3 pt-4">
        <button
          type="submit"
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
        >
          {field ? "Actualizar cancha" : "Crear cancha"}
        </button>

        <Link
          href="/fields"
          className="rounded border border-gray-300 px-4 py-2 hover:bg-gray-100 transition"
        >
          Cancelar
        </Link>
      </div>
    </form>
  );
}