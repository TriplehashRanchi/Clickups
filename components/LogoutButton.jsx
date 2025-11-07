"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  const supabase = createClientComponentClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/login";
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition flex items-center justify-center gap-2"
    >
      <LogOut size={16} />
      <span>Logout</span>
    </button>
  );
}
