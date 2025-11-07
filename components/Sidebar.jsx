"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Layers,
  Users,
  FileText,
  BarChart3,
  User,
  LogOut,
} from "lucide-react";
import LogoutButton from "./LogoutButton";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function Sidebar() {
  const pathname = usePathname();
  const [role, setRole] = useState(null);

  useEffect(() => {
    async function getRole() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data } = await supabase
        .from("users")
        .select("role")
        .eq("id", user.id)
        .single();

      setRole(data?.role || "employee");
    }
    getRole();
  }, []);

  const linkClasses = (href) =>
    `flex items-center gap-3 px-3 py-2 rounded-lg transition ${
      pathname === href
        ? "bg-purple-600 text-white"
        : "text-gray-400 hover:bg-gray-800 hover:text-white"
    }`;

  // Different menus by role
  const menus = {
    admin: [
      { name: "Dashboard", href: "/dashboard/admin", icon: <Home size={18} /> },
      { name: "Spaces", href: "/dashboard/admin/spaces", icon: <Layers size={18} /> },
      { name: "Employees", href: "/dashboard/admin/employees", icon: <Users size={18} /> },
      { name: "Projects", href: "/dashboard/admin/projects", icon: <FileText size={18} /> },
      { name: "Reports", href: "#", icon: <BarChart3 size={18} /> },
    ],
    manager: [
      { name: "Dashboard", href: "/dashboard/manager", icon: <Home size={18} /> },
      { name: "Spaces", href: "/dashboard/manager/spaces", icon: <Layers size={18} /> },
      { name: "Employees", href: "/dashboard/manager/employees", icon: <Users size={18} /> },
      { name: "Projects", href: "/dashboard/manager/projects", icon: <FileText size={18} /> },
    ],
    employee: [
      { name: "Dashboard", href: "/dashboard/employee", icon: <Home size={18} /> },
      { name: "My Profile", href: "/dashboard/employee/profile", icon: <User size={18} /> },
      { name: "My Tasks", href: "/dashboard/employee/tasks", icon: <FileText size={18} /> },
    ],
  };

  const links = menus[role] || menus.employee;

  return (
    <aside className="w-64 bg-[#181b25] border-r border-gray-700 flex flex-col">
      {/* Brand Header */}
      <div className="p-5 border-b border-gray-700 text-center">
        <h2 className="text-xl font-semibold text-white tracking-wide">TripleHash IMS</h2>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 mt-2">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className={linkClasses(link.href)}>
            {link.icon}
            <span className="text-sm font-medium">{link.name}</span>
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-700">
        <LogoutButton />
      </div>
    </aside>
  );
}
