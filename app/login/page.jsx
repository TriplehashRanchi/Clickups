"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      Swal.fire("Login Failed", error.message, "error");
      setLoading(false);
      return;
    }

    const user = data.user;
    const { data: row } = await supabase
      .from("users")
      .select("role")
      .eq("id", user.id)
      .single();

    if (!row) {
      Swal.fire("Error", "Role not found", "error");
      setLoading(false);
      return;
    }

    const { role } = row;
    Swal.fire({
      icon: "success",
      title: "Welcome back!",
      timer: 1000,
      showConfirmButton: false,
    });

    if (role === "admin") router.push("/dashboard/admin");
    else if (role === "manager") router.push("/dashboard/manager");
    else router.push("/dashboard/employee");

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f1117] text-white relative overflow-hidden">
    

      {/* Login Card */}
      <form
        onSubmit={handleLogin}
        className="relative z-10 bg-[#181b25]/80 backdrop-blur-xl border border-gray-700 p-8 rounded-2xl shadow-2xl w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-2 text-center text-white tracking-wide">
          Welcome to <span className="text-purple-500">IMS</span>
        </h1>
        <p className="text-sm text-gray-400 text-center mb-6">
          Sign in to access your dashboard
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-1 text-gray-300">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-2 rounded-lg bg-[#10121a] border border-gray-700 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-300">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg bg-[#10121a] border border-gray-700 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 mt-4 rounded-lg text-white font-medium transition ${
              loading
                ? "bg-purple-800 cursor-not-allowed"
                : "bg-purple-600 hover:bg-purple-700"
            }`}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </div>

        <p className="text-xs text-gray-500 text-center mt-6">
          © {new Date().getFullYear()} TripleHash IMS. All rights reserved.
        </p>
      </form>
    </div>
  );
}
