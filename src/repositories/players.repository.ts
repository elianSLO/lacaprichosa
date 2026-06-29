import { supabase } from "@/lib/supabase";

export async function getPlayers() {
  return await supabase
    .from("players")
    .select("*");
}