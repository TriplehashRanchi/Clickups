"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function DashboardRedirect() {
  const router = useRouter();

  useEffect(() => {
    async function checkRole() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      const { data: userData } = await supabase
        .from("users")
        .select("role")
        .eq("id", user.id)
        .single();

      if (userData?.role === "admin") router.push("/dashboard/admin");
      else if (userData?.role === "manager")
        router.push("/dashboard/manager");
      else router.push("/dashboard/employee");
    }

    checkRole();
  }, [router]);

  return (
    <div className="text-gray-400 text-center mt-20">Redirecting...</div>
  );
}
