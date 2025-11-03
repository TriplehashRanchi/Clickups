"use client";

import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

export default function ManagerDashboard() {
  const { user, role, loading } = useAuth();
  const cards = [
    {
      title: "Manage Spaces",
      desc: "Create and organize workspaces for your teams",
      href: "/dashboard/admin/spaces", // ✅ manager shares same spaces route
      emoji: "🪐",
    },
    {
      title: "Manage Employees",
      desc: "Onboard and track your team members",
      href: "/dashboard/admin/employees",
      emoji: "👥",
    },
    {
      title: "Manage Projects",
      desc: "Create and assign client or internal projects",
      href: "/dashboard/admin/projects",
      emoji: "📁",
    },
    {
      title: "View Reports",
      desc: "View progress and performance insights",
      href: "#",
      emoji: "📊",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-white">
        {role} Dashboard
      </h1>

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
