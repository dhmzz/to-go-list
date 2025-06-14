import { supabase } from "./services/Supabase";

export async function checkSession() {
  const { data } = await supabase.auth.getSession();
  return data.session;
}

export async function signOut() {
  await supabase.auth.signOut();
  window.location.href = '/signin';
}
