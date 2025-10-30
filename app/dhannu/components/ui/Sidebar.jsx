"use client";

import { GoCodespaces } from "react-icons/go";
import { CiCalendar, CiCalendarDate } from "react-icons/ci";
import { LuBrain } from "react-icons/lu";
import { CiSquareMore } from "react-icons/ci";
import { BsFillInboxFill } from "react-icons/bs";
import { RiChatFollowUpLine } from "react-icons/ri";
import { RiUserFollowLine } from "react-icons/ri";
import { IoCheckmarkDone } from "react-icons/io5";
import { IoIosMore } from "react-icons/io";
import { HiUserGroup } from "react-icons/hi2";
import Link from "next/link";
import Space from "./Space";
import { useContext } from "react";
import { SpaceContext } from "../../context/SpaceContext";

function Sidebar() {
  const { handleSpace } = useContext(SpaceContext);
  return (
    <div className="w-full h-full flex px-2 py-1">
      <div className="h-full rounded-md p-2 space-y-5  w-[50px] bg-[#1e1e2f]">
        <div className="flex flex-col gap-2 font-semibold">
          <div className="p-2 rounded-md bg-white">
            <img
              src="https://app-cdn.clickup.com/media/home-QDCPQXYW.png"
              alt=""
            />
          </div>
          <h2 className="text-xs">Home</h2>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <GoCodespaces size={23} />
          <h2 className="text-xs font-semibold">Space</h2>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <CiCalendar size={23} />
          <h2 className="text-xs font-semibold">Planner</h2>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <LuBrain size={23} />
          <h2 className="text-xs font-semibold">Brain</h2>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <CiSquareMore size={23} />
          <h2 className="text-xs font-semibold">Brain</h2>
        </div>
      </div>

      <div className="h-full bg-zinc-900 w-[300px] border border-gray-800 rounded-md p-3 ml-2">
        <div className="flex w-full justify-between items-center">
          <h2>Home</h2>
          <button
            onClick={handleSpace}
            className="px-2 py-1 cursor-pointer rounded-md bg-purple-700 text-white"
          >
            + Create
          </button>
        </div>

        <div className="text-zinc-400 mt-1   space-y-1 p-1">
          <div className="flex items-center gap-3  hover:bg-zinc-800 p-1 rounded-md">
            <BsFillInboxFill />
            <h2>Inbox</h2>
          </div>

          <div className="flex items-center gap-3  hover:bg-zinc-800 p-1 rounded-md">
            <RiChatFollowUpLine />
            <h2>FollowUps</h2>
          </div>

          <div className="flex items-center gap-3  hover:bg-zinc-800 p-1 rounded-md">
            <RiUserFollowLine />
            <Link href="dhannu/my-tasks">
              <h2 className="cursor-pointer">My Tasks</h2>
            </Link>
          </div>

          <div className="flex items-center gap-3  hover:bg-zinc-800 p-1 rounded-md">
            <IoCheckmarkDone />
            <h2>All Tasks</h2>
          </div>

          <div className="flex items-center gap-3 cursor-pointer  hover:bg-zinc-800 p-1 rounded-md">
            <HiUserGroup />
            <Link href="/dhannu/teams">
              <h2>Teams</h2>
            </Link>
          </div>

          <div className="flex items-center gap-3 w-full hover:bg-zinc-800 p-1">
            <IoIosMore />
            <h2>More</h2>
          </div>
          <hr className="mt-3" />
        </div>
        <div>
          <Space />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
