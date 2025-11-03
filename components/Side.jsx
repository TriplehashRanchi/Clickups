"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import LogoutButton from "./LogoutButton";

// Icons
import { GoCodespaces } from "react-icons/go";
import { CiCalendar, CiCircleList, CiSquareMore } from "react-icons/ci";
import { LuBrain } from "react-icons/lu";
import { BsFillInboxFill } from "react-icons/bs";
import { RiChatFollowUpLine, RiUserFollowLine } from "react-icons/ri";
import { IoCheckmarkDone } from "react-icons/io5";
import { IoIosMore } from "react-icons/io";
import { HiUserGroup } from "react-icons/hi2";

import Space from "./Space";

export default function Sidebar() {
  const [role, setRole] = useState(null);

  // ✅ Fetch role from Supabase
  useEffect(() => {
    async function getRole() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
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

  // ✅ Role-based Navigation (same UI layout, just different hrefs)
  const menus = {
    admin: [
      { icon: <BsFillInboxFill />, label: "Inbox", href: "/dashboard/admin" },
      { icon: <RiChatFollowUpLine />, label: "FollowUps", href: "/dashboard/admin/followups" },
      { icon: <RiUserFollowLine />, label: "My Tasks", href: "/dashboard/admin/my-tasks" },
      { icon: <IoCheckmarkDone />, label: "All Tasks", href: "/dashboard/admin/tasks" },
      { icon: <HiUserGroup />, label: "Teams", href: "/dashboard/admin/employees" },
      { icon: <CiCircleList />, label: "Profile", href: "/dashboard/admin/profile" },
    ],
    manager: [
      { icon: <BsFillInboxFill />, label: "Inbox", href: "/dashboard/manager" },
      { icon: <RiChatFollowUpLine />, label: "FollowUps", href: "/dashboard/manager/followups" },
      { icon: <RiUserFollowLine />, label: "My Tasks", href: "/dashboard/manager/my-tasks" },
      { icon: <IoCheckmarkDone />, label: "All Tasks", href: "/dashboard/manager/tasks" },
      { icon: <HiUserGroup />, label: "Teams", href: "/dashboard/manager/employees" },
      { icon: <CiCircleList />, label: "Profile", href: "/dashboard/manager/profile" },
    ],
    employee: [
      { icon: <BsFillInboxFill />, label: "Inbox", href: "/dashboard/employee" },
      { icon: <RiChatFollowUpLine />, label: "FollowUps", href: "/dashboard/employee/followups" },
      { icon: <RiUserFollowLine />, label: "My Tasks", href: "/dashboard/employee/tasks" },
      { icon: <IoCheckmarkDone />, label: "All Tasks", href: "/dashboard/employee/tasks" },
      { icon: <CiCircleList />, label: "Profile", href: "/dashboard/employee/profile" },
    ],
  };

  const links = menus[role] || menus.employee;

  return (
    <div className="w-full h-full flex px-2 py-1">
      {/* Left minimal icon sidebar */}
      <div className="h-full rounded-md p-2 space-y-5 w-[50px] bg-[#1e1e2f]">
        <Link href={`/dashboard/${role || "employee"}`} className="block">
          <div className="flex flex-col gap-2 font-semibold items-center">
            <div className="p-2 rounded-md bg-white">
              <img
                src="https://app-cdn.clickup.com/media/home-QDCPQXYW.png"
                alt="logo"
              />
            </div>
            <h2 className="text-xs text-white">Home</h2>
          </div>
        </Link>

        <div className="flex flex-col gap-2 items-center">
          <GoCodespaces size={23} className="text-gray-300" />
          <h2 className="text-xs font-semibold text-gray-300">Space</h2>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <CiCalendar size={23} className="text-gray-300" />
          <h2 className="text-xs font-semibold text-gray-300">Planner</h2>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <LuBrain size={23} className="text-gray-300" />
          <h2 className="text-xs font-semibold text-gray-300">Brain</h2>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <CiSquareMore size={23} className="text-gray-300" />
          <h2 className="text-xs font-semibold text-gray-300">More</h2>
        </div>
      </div>

      {/* Right Sidebar Panel */}
      <div className="h-full bg-zinc-900 w-[300px] border border-gray-800 rounded-md p-3 ml-2 flex flex-col">
        {/* Header */}
        <div className="flex w-full justify-between items-center mb-2">
          <h2 className="text-white font-semibold capitalize">{role || "User"} Home</h2>
          <button className="px-2 py-1 cursor-pointer rounded-md bg-purple-700 text-white hover:bg-purple-800 transition">
            + Create
          </button>
        </div>

        {/* Dynamic Role-based Navigation */}
        <div className="text-zinc-400 space-y-1 p-1">
          {links.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex items-center gap-3 hover:bg-zinc-800 p-1 rounded-md transition"
            >
              {item.icon}
              <h2>{item.label}</h2>
            </Link>
          ))}
          <hr className="mt-3 border-gray-700" />
        </div>

        {/* Spaces Section */}
        <Space />

        {/* Logout */}
        <div className="border-t border-gray-700 pt-3 mt-3">
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}
