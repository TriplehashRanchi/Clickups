"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const supabase = createClientComponentClient();
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🧩 Fetch user session and role
  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        setUser(user);
        // Fetch the user's role
        const { data, error } = await supabase
          .from("users")
          .select("role, full_name")
          .eq("id", user.id)
          .single();

        if (!error && data) {
          setRole(data.role);
          localStorage.setItem("userRole", data.role);
          localStorage.setItem("userName", data.full_name);
        }
      } else {
        setUser(null);
        setRole(null);
      }

      setLoading(false);
    };

    fetchUser();

    // 🧭 Listen to Supabase Auth state changes (login/logout)
    const { data: subscription } = supabase.auth.onAuthStateChange(() => {
      fetchUser();
    });

    return () => {
      subscription?.subscription?.unsubscribe();
    };
  }, [supabase]);

  return (
    <AuthContext.Provider value={{ user, role, loading, setUser, setRole }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to access auth context
export const useAuth = () => useContext(AuthContext);
