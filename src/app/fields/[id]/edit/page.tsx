import { notFound } from "next/navigation";
import FieldForm from "@/components/fields/FieldForm";
import { getField } from "@/repositories/fields.repository";
import { updateFieldAction } from "@/actions/fields.actions";

interface EditFieldPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditFieldPage({
  params,
}: EditFieldPageProps) {
  const { id } = await params;

  const { data: field, error } = await getField(id);

  if (error || !field) {
    notFound();
  }

  const action = updateFieldAction.bind(null, field.id);

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="mb-6 text-3xl font-bold">
        Editar cancha
      </h1>

      <FieldForm
        field={field}
        action={action}
      />
    </main>
  );
}