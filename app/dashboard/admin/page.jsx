"use client";

import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

export default function AdminDashboard() {
  const { user, role, loading } = useAuth();
  const cards = [
    {
      title: "Manage Spaces",
      desc: "Create and organize workspaces",
      href: "/dashboard/admin/spaces",
      emoji: "🪐",
    },
    {
      title: "Employees",
      desc: "Onboard and manage staff",
      href: "/dashboard/admin/employees",
      emoji: "👥",
    },
    {
      title: "Projects",
      desc: "Track client and internal projects",
      href: "/dashboard/admin/projects",
      emoji: "📁",
    },
    {
      title: "Reports",
      desc: "View financial and performance reports",
      href: "#",
      emoji: "📊",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-white">{role} Dashboard</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="bg-[#181b25] border border-gray-700 rounded-2xl p-6 hover:border-purple-600 hover:shadow-purple-600/10 transition flex flex-col"
          >
            <span className="text-3xl mb-3">{card.emoji}</span>
            <h3 className="text-lg font-semibold text-white mb-1">
              {card.title}
            </h3>
            <p className="text-sm text-gray-400">{card.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
