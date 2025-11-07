"use client";

import { useEffect, useState } from "react";
import { FaRegCalendar } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { RiOpenaiLine } from "react-icons/ri";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { BiSolidVideoRecording } from "react-icons/bi";
import { supabase } from "@/lib/supabaseClient";

export default function Navbar() {
  const [workspaceName, setWorkspaceName] = useState("");
  const [initials, setInitials] = useState("");

  // ✅ Load user info from Supabase Auth
  useEffect(() => {
    async function loadUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        const name = user.user_metadata?.full_name || user.email?.split("@")[0];
        setWorkspaceName(`${name}'s Workspace`);
        setInitials(name?.charAt(0)?.toUpperCase() || "?");
      }
    }
    loadUser();
  }, []);

  return (
    <div className="w-full h-auto p-2 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <div className="bg-zinc-900 rounded-sm px-3 py-1 flex items-center justify-center space-x-1">
          <span className="px-1 text-center rounded-md bg-green-600 text-sm text-white">
            {initials}
          </span>
          <h1 className="text-sm text-gray-200">{workspaceName}</h1>
        </div>
        <div>
          <FaRegCalendar className="text-gray-400" />
        </div>
      </div>

      <div className="flex items-center bg-zinc-800 rounded-full w-[300px] px-3 py-1">
        <FaSearch className="text-gray-400 mr-2" />
        <input
          placeholder="Search"
          className="bg-transparent text-sm py-0.5 flex-1 outline-none text-white"
          type="text"
        />
        <RiOpenaiLine className="text-gray-400" />
      </div>

      <div className="flex space-x-4 pr-5 justify-center items-center">
        <IoIosCheckmarkCircleOutline size={23} className="text-gray-400" />
        <BiSolidVideoRecording size={23} className="text-gray-400" />
        <span className="p-1 rounded-full bg-purple-700 font-semibold text-white text-xs">
          {initials}
        </span>
      </div>
    </div>
  );
}
