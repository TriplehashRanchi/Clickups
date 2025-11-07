import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req) {
  try {
    const { user_id, profile } = await req.json();
    if (!user_id) return NextResponse.json({ error: "Missing user_id" }, { status: 400 });

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    const { data: existing } = await supabase
      .from("user_profiles")
      .select("user_id")
      .eq("user_id", user_id)
      .single();

    if (existing) {
      await supabase.from("user_profiles").update(profile).eq("user_id", user_id);
    } else {
      await supabase.from("user_profiles").insert([{ user_id, ...profile }]);
    }

    return NextResponse.json({ message: "Profile saved successfully" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
