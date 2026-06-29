import Link from "next/link";
import { getFields } from "@/repositories/fields.repository";

export default async function FieldsPage() {
  const { data: fields, error } = await getFields();

  if (error) {
    return (
      <main className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">
          Canchas
        </h1>

        <p className="text-red-600">
          {error.message}
        </p>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          Canchas
        </h1>

        <Link
          href="/fields/new"
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Nueva cancha
        </Link>
      </div>

      <div className="overflow-hidden rounded-lg border">
        <table className="min-w-full">
          <thead className="bg-emerald-700">
            <tr>
              <th className="px-4 py-3 text-left">
                Nombre
              </th>

              <th className="px-4 py-3 text-left">
                Ubicación
              </th>

              <th className="px-4 py-3 text-center">
                Acciones
              </th>
            </tr>
          </thead>

          <tbody>
            {fields?.length === 0 && (
              <tr>
                <td
                  colSpan={3}
                  className="px-4 py-8 text-center text-gray-500"
                >
                  No hay canchas registradas.
                </td>
              </tr>
            )}

            {fields?.map((field) => (
              <tr key={field.id} className="border-t">
                <td className="px-4 py-3">
                  {field.name}
                </td>

                <td className="px-4 py-3">
                  {field.location ?? "-"}
                </td>

                <td className="px-4 py-3 text-center">
                  <Link
                    href={`/fields/${field.id}/edit`}
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