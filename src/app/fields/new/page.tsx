import FieldForm from "@/components/fields/FieldForm";
import { createFieldAction } from "@/actions/fields.actions";

export default function NewFieldPage() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="mb-6 text-3xl font-bold">
        Nueva cancha
      </h1>

      <FieldForm action={createFieldAction} />
    </main>
  );
}