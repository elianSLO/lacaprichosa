"use server";

import { redirect } from "next/navigation";
import {
  createField,
  updateField,
} from "@/repositories/fields.repository";

export async function createFieldAction(formData: FormData) {
  await createField({
    name: formData.get("name") as string,
    location: (formData.get("location") as string) || null,
  });

  redirect("/fields");
}

export async function updateFieldAction(
  id: string,
  formData: FormData
) {
  await updateField(id, {
    name: formData.get("name") as string,
    location: (formData.get("location") as string) || null,
  });

  redirect("/fields");
}