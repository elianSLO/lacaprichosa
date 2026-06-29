import { supabase } from "@/lib/supabase";
import { Player } from "@/types/player";

export async function getPlayers() {
  return supabase
    .from("players")
    .select("*")
    .order("name");
}

export async function getPlayer(id: string) {
  return supabase
    .from("players")
    .select("*")
    .eq("id", id)
    .single();
}

export async function createPlayer(player: Omit<Player, "id">) {
  return supabase
    .from("players")
    .insert(player);
}

export async function updatePlayer(
  id: string,
  player: Omit<Player, "id">
) {
  return supabase
    .from("players")
    .update(player)
    .eq("id", id);
}