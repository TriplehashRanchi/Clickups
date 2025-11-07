import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function PUT(req, { params }) {
  const supabase = createRouteHandlerClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const { data: me } = await supabase
    .from("users")
    .select("role")
    .eq("id", user.id)
    .single();

  if (!["admin", "manager"].includes(me?.role))
    return Response.json({ error: "Access denied" }, { status: 403 });

  const body = await req.json();
  const patch = (({ full_name, manager_id, status, role }) => ({
    full_name,
    manager_id,
    status,
    role,
  }))(body);

  const { data, error } = await supabase
    .from("users")
    .update(patch)
    .eq("id", params.id)
    .select()
    .single();

  if (error) return Response.json({ error: error.message }, { status: 400 });
  return Response.json(data);
}

export async function DELETE(req, { params }) {
  const supabase = createRouteHandlerClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const { data: me } = await supabase
    .from("users")
    .select("role")
    .eq("id", user.id)
    .single();

  if (me?.role !== "admin")
    return Response.json({ error: "Admin only" }, { status: 403 });

  const { data, error } = await supabase
    .from("users")
    .update({ status: "inactive" })
    .eq("id", params.id)
    .select()
    .single();

  if (error) return Response.json({ error: error.message }, { status: 400 });

  // Also ban in Auth system
  try {
    await supabaseAdmin.auth.admin.updateUserById(params.id, {
      banned_until: "2999-01-01T00:00:00Z",
    });
  } catch (err) {
    console.warn("Auth disable warning:", err.message);
  }

  return Response.json({ success: true, user: data });
}
