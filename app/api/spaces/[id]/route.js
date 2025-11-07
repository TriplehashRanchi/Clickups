import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

// 🟢 GET — get space details
export async function GET(req, { params }) {
  const supabase = createRouteHandlerClient({ cookies });

  const { data, error } = await supabase
    .from("spaces")
    .select("*")
    .eq("id", params.id)
    .single();

  if (error)
    return Response.json({ error: error.message }, { status: 400 });

  return Response.json(data);
}

// 🟢 PUT — update space
export async function PUT(req, { params }) {
  const supabase = createRouteHandlerClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user)
    return Response.json({ error: "Unauthorized" }, { status: 401 });

  const { data: userRow } = await supabase
    .from("users")
    .select("role")
    .eq("id", user.id)
    .single();

  if (!["admin", "manager"].includes(userRow?.role))
    return Response.json({ error: "Access denied" }, { status: 403 });

  const body = await req.json();
  const { name, description } = body;

  const { data, error } = await supabase
    .from("spaces")
    .update({ name, description })
    .eq("id", params.id)
    .select()
    .single();

  if (error)
    return Response.json({ error: error.message }, { status: 400 });

  return Response.json(data);
}

// 🟢 DELETE — delete space (admin only)
export async function DELETE(req, { params }) {
  const supabase = createRouteHandlerClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user)
    return Response.json({ error: "Unauthorized" }, { status: 401 });

  const { data: userRow } = await supabase
    .from("users")
    .select("role")
    .eq("id", user.id)
    .single();

  if (userRow?.role !== "admin")
    return Response.json({ error: "Admin only" }, { status: 403 });

  const { error } = await supabase
    .from("spaces")
    .delete()
    .eq("id", params.id);

  if (error)
    return Response.json({ error: error.message }, { status: 400 });

  return Response.json({ success: true });
}
