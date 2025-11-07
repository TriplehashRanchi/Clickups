import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      first_name,
      last_name,
      email,
      phone,
      role,
      job_title,
      department,
      employment_type,
      employment_start_date,
      reporting_manager,
    } = body;

    if (!email || !first_name || !phone)
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });

    const supabaseAdmin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    // Auto-password
    const phoneDigits = phone.slice(-4);
    const tempPassword = `${first_name.toLowerCase()}@${phoneDigits}`;

    // Create Auth User
    const { data: authUser, error: authErr } =
      await supabaseAdmin.auth.admin.createUser({
        email,
        password: tempPassword,
        email_confirm: true,
      });
    if (authErr) throw authErr;

    const userId = authUser.user.id;

    // Insert into users
    const { error: userErr } = await supabaseAdmin.from("users").insert([
      {
        id: userId,
        email,
        full_name: `${first_name} ${last_name}`,
        role: role || "employee",
      },
    ]);
    if (userErr) throw userErr;

    // Insert into profiles with full job details
    const { error: profErr } = await supabaseAdmin.from("user_profiles").insert([
      {
        user_id: userId,
        first_name,
        last_name,
        email,
        phone,
        job_title,
        department,
        employment_type,
        employment_start_date,
        reporting_manager,
      },
    ]);
    if (profErr) throw profErr;

    return NextResponse.json({
      message: "Employee created successfully",
      email,
      password: tempPassword,
    });
  } catch (err) {
    console.error("Employee creation failed:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
