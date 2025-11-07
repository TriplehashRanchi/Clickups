import React from "react";
import { CiViewList } from "react-icons/ci";
import { FaFlipboard } from "react-icons/fa6";
import { FcCalendar } from "react-icons/fc";

export default function NavigationTabs() {
  return (
    <div className="flex items-center gap-6 text-sm border-b border-zinc-800 pb-2">
      <div className="flex items-center gap-1 cursor-pointer hover:text-white">
        <CiViewList /> List
      </div>
      <div className="flex items-center gap-1 cursor-pointer hover:text-white">
        <FaFlipboard /> Board
      </div>
      <div className="flex items-center gap-1 cursor-pointer hover:text-white">
        <FcCalendar /> Calendar
      </div>
      <div className="flex items-center gap-1 border-l border-zinc-700 pl-3 cursor-pointer hover:text-white">
        + View
      </div>
    </div>
  );
}
