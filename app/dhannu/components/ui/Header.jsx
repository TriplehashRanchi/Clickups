import React from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { GiArtificialHive } from "react-icons/gi";
import { MdSupportAgent } from "react-icons/md";

export default function Header() {
  return (
    <div className="flex items-center justify-between mb-5">
      <p className="text-xl font-semibold text-white">Dhannu Workspace</p>

      <div className="flex gap-5 text-sm">
        <div className="flex items-center gap-2 cursor-pointer hover:text-white">
          <MdSupportAgent size={18} /> Agents
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:text-white">
          <AiOutlineThunderbolt size={18} /> Automate
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:text-white">
          <GiArtificialHive size={18} /> Share
        </div>
      </div>
    </div>
  );
}
