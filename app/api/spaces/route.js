import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

// 🟢 GET — list all spaces
export async function GET() {
  const supabase = createRouteHandlerClient({ cookies });

  const { data, error } = await supabase
    .from("spaces")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) return Response.json({ error: error.message }, { status: 400 });
  return Response.json(data);
}

// 🟢 POST — create a new space (admin/manager only)
export async function POST(req) {
  const supabase = createRouteHandlerClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user)
    return Response.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const { name, description } = body;

  // Get user role
  const { data: userRow, error: roleErr } = await supabase
    .from("users")
    .select("role")
    .eq("id", user.id)
    .single();

  if (roleErr)
    return Response.json({ error: roleErr.message }, { status: 400 });

  if (!["admin", "manager"].includes(userRow?.role))
    return Response.json({ error: "Access denied" }, { status: 403 });

  const { data, error } = await supabase
    .from("spaces")
    .insert({ name, description, created_by: user.id })
    .select()
    .single();

  if (error)
    return Response.json({ error: error.message }, { status: 400 });

  return Response.json(data);
}
