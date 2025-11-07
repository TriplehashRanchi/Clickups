import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email)
      return NextResponse.json({ error: "Email is required" }, { status: 400 });

    const supabaseAdmin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    // Generate new random password
    const newPassword =
      Math.random().toString(36).slice(-8) + "Aa!" + Date.now().toString().slice(-2);

    // Find user by email
    const { data: userData, error: userError } =
      await supabaseAdmin.auth.admin.listUsers();
    if (userError) throw userError;

    const user = userData.users.find((u) => u.email === email);
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

    // Update user password
    const { error: updateError } = await supabaseAdmin.auth.admin.updateUserById(
      user.id,
      { password: newPassword }
    );
    if (updateError) throw updateError;

    return NextResponse.json({
      message: "Password reset successfully",
      email,
      newPassword,
    });
  } catch (err) {
    console.error("Reset password error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
