"use server";

import { redirect } from "next/navigation";
import { createPlayer, updatePlayer } from "@/repositories/players.repository";

export async function createPlayerAction(formData: FormData) {
  await createPlayer({
    name: formData.get("name") as string,
    surname: (formData.get("surname") as string) || null,
    alias: (formData.get("alias") as string) || null,
    birth_date: (formData.get("birth_date") as string) || null,
  });

  redirect("/players");
}

export async function updatePlayerAction(
  id: string,
  formData: FormData
) {
  await updatePlayer(id, {
    name: formData.get("name") as string,
    surname: (formData.get("surname") as string) || null,
    alias: (formData.get("alias") as string) || null,
    birth_date: (formData.get("birth_date") as string) || null,
  });

  redirect("/players");
}