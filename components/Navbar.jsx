"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [name, setName] = useState("");

  const pageTitle = (() => {
    if (pathname.includes("spaces")) return "Spaces";
    if (pathname.includes("employees")) return "Employees";
    if (pathname.includes("projects")) return "Projects";
    if (pathname.includes("profile")) return "My Profile";
    return "Dashboard";
  })();

  useEffect(() => {
    async function getUser() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      const { data } = await supabase
        .from("users")
        .select("full_name")
        .eq("id", user.id)
        .single();
      setName(data?.full_name || "");
    }
    getUser();
  }, []);

  return (
    <header className="bg-[#181b25] border-b border-gray-700 py-5 px-6 flex items-center justify-between">
      <h1 className="text-lg font-semibold text-white tracking-wide">{pageTitle}</h1>
      <div className="text-sm text-gray-400">Welcome, {name || "User"}</div>
    </header>
  );
}
