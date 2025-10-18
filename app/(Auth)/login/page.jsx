"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    // 🔹 Sign in user
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast.error(error.message);
      setLoading(false);
      return;
    }

    // ✅ Get logged-in user
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      toast.error("No user found.");
      setLoading(false);
      return;
    }

    // ✅ Fetch user's role from the profiles table
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("role, full_name")
      .eq("id", user.id)
      .single();

    if (profileError || !profile) {
      toast.error("Profile not found.");
      setLoading(false);
      return;
    }

    toast.success(`Welcome back, ${profile.full_name || "User"}!`);

    // ✅ Role-based redirect
    if (profile.role === "admin") {
      router.push("/admin");
    } else if (profile.role === "manager") {
      router.push("/manager");
    } else {
      toast("Unknown role. Redirecting to manager by default.");
      router.push("/manager");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0D0B14] text-gray-100">
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-4 w-[90%] max-w-md bg-[#13111C] p-8 py-12 rounded-md shadow-xl"
      >
        <h1 className="text-3xl font-bold text-center text-white mb-4">
          Login to ClickUps
        </h1>

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full bg-[#1f1b2e] border border-[#302a44] px-4 py-3 rounded-lg text-sm text-gray-200"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full bg-[#1f1b2e] border border-[#302a44] px-4 py-3 rounded-lg text-sm text-gray-200"
        />

        <button
          disabled={loading}
          type="submit"
          className="bg-[#8200DB] hover:bg-[#9b32e6] transition-all text-white font-semibold py-3 rounded-lg mt-2 shadow-md"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
