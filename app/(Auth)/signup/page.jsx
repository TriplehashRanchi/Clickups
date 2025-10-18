"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import toast from "react-hot-toast";

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    password: "",
    role: "manager",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { email, password, full_name, phone, role } = form;

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name, phone, role },
      },
    });

    setLoading(false);

    if (error) {
      console.error(error);
      toast.error(error.message);
      return;
    }

    toast.success("Signup successful! Please login.");
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0D0B14] text-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-[90%] max-w-md bg-[#13111C] p-8 py-12 rounded-md shadow-xl"
      >
        <h1 className="text-3xl font-bold text-center text-white mb-4">Create Account</h1>

        <input
          name="full_name"
          placeholder="Full name"
          value={form.full_name}
          onChange={handleChange}
          className="w-full bg-[#1f1b2e] border border-[#302a44] px-4 py-3 rounded-lg text-sm text-gray-200"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={form.email}
          onChange={handleChange}
          className="w-full bg-[#1f1b2e] border border-[#302a44] px-4 py-3 rounded-lg text-sm text-gray-200"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone number"
          value={form.phone}
          onChange={handleChange}
          className="w-full bg-[#1f1b2e] border border-[#302a44] px-4 py-3 rounded-lg text-sm text-gray-200"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full bg-[#1f1b2e] border border-[#302a44] px-4 py-3 rounded-lg text-sm text-gray-200"
          required
        />

        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="w-full bg-[#1f1b2e] border border-[#302a44] px-4 py-3 rounded-lg text-sm text-gray-200 cursor-pointer"
        >
          <option value="manager">Manager</option>
          <option value="admin">Admin</option>
        </select>

        <button
          disabled={loading}
          type="submit"
          className="bg-[#8200DB] hover:bg-[#9b32e6] transition-all text-white font-semibold py-3 rounded-lg mt-2 shadow-md"
        >
          {loading ? "Creating..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
}
