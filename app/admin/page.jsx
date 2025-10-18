import { redirect } from "next/navigation";
import { getServerClient } from "@/lib/supabaseServer";

export default async function AdminPage() {
  const supabase = getServerClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session?.user) redirect("/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("role, full_name")
    .eq("id", session.user.id)
    .single();

  if (profile?.role !== "admin") redirect("/manager");

  return (
    <main className="p-10 text-white bg-[#0D0B14] min-h-screen">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <p className="mt-2 text-gray-400">
        Welcome back, {profile?.full_name || "Admin"}.
      </p>
    </main>
  );
}
