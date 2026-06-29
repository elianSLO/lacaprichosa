import { supabase } from "@/lib/supabase";
import { Field } from "@/types/field";

export async function getFields() {
  return supabase
    .from("fields")
    .select("*")
    .order("name");
}

export async function getField(id: string) {
  return supabase
    .from("fields")
    .select("*")
    .eq("id", id)
    .single();
}

export async function createField(field: Omit<Field, "id">) {
  return supabase
    .from("fields")
    .insert(field);
}

export async function updateField(
  id: string,
  field: Omit<Field, "id">
) {
  return supabase
    .from("fields")
    .update(field)
    .eq("id", id);
}