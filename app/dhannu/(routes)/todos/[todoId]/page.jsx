"use client";
import Dropdown from "@/app/dhannu/components/resuableComponents/Dropdown";
import Todo from "@/app/dhannu/components/todo/Todo";
import { SpaceContext } from "@/app/dhannu/context/SpaceContext";
import { useParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { CiViewList } from "react-icons/ci";
import { FaFlipboard } from "react-icons/fa6";
import { FcCalendar } from "react-icons/fc";
import { GiArtificialHive, GiPlainCircle } from "react-icons/gi";
import { IoIosFlag } from "react-icons/io";
import { MdSupportAgent } from "react-icons/md";
import { RxCircle } from "react-icons/rx";

export default function page() {
  const { todoId } = useParams();
  const [tasks, setTasks] = useState([]);
  const { list, setList } = useContext(SpaceContext);
  console.log("list", list);

  const items = list.map((cur) => ({
    ...cur,
    label: cur.spaceList,
    value: cur.spaceList,
  }));

  const statusOptions = [
    {
      value: "completed",
      label: "Completed",
      icons: <GiPlainCircle className="text-green-600 mt-1.5" size={16} />,
    },
    {
      value: "pending",
      label: "Pending",
      icons: <RxCircle className="mt-1.5" size={16} />,
    },
    {
      value: "inprogress",
      label: "Progress",
      icons: <GiPlainCircle className="text-purple-600 mt-1.5" size={16} />,
    },
  ];

  const assignUser = [
    { value: "dhannu", label: "Dhannu Kumar" },
    { value: "rohit", label: "Rohit Jha" },
    { value: "rupak", label: "Rupak Rout" },
    { value: "himanshu", label: "Himanshu Nagar" },
  ];

  const priorityOptions = [
    {
      value: "high",
      label: "High",
      icons: <IoIosFlag size={17} className="text-red-600" />,
    },
    {
      value: "medium",
      label: "Medium",
      icons: <IoIosFlag size={17} className="text-yellow-600 " />,
    },
    {
      value: "low",
      label: "Low",
      icons: <IoIosFlag size={17} className="text-white " />,
    },
  ];

  const handleAddTask = (taskName) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      assignee: "",
      priority: "",
      dueDate: "",
      status: "",
    };

    setTasks((prev) => [...prev, newTask]);
    const updatedList = list.map((space) =>
      space.id == todoId
        ? {
            ...space,
            todo: [...(space.todo || []), newTask],
          }
        : space
    );

    setList(updatedList);
  };

  const handleUpdateTask = (taskId, field, value) => {
    setTasks((prev) =>
      prev.map((cur) => (cur.id === taskId ? { ...cur, [field]: value } : cur))
    );
  };

  useEffect(() => {
    console.log("tasks", tasks);
  }, []);

  return (
    <div className="w-full h-full py-3 px-2 ">
      <div className="w-full flex justify-between">
        <h1 className="text-xl text-zinc-200 font-semibold">
          Dhannu Workspace
        </h1>
        <div className="flex gap-6 text-[15px]">
          <div className="flex items-center gap-2">
            <MdSupportAgent size={17} /> Agents
          </div>
          <div className="flex items-center gap-2">
            <AiOutlineThunderbolt size={17} /> Automate
          </div>
          <div className="flex items-center gap-2">
            <MdSupportAgent size={17} /> Ask AI
          </div>
          <div className="flex items-center gap-2">
            <GiArtificialHive size={17} /> Share
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 border-b border-gray-800 py-2 text-sm text-gray-300">
        <div className="flex items-center gap-1 cursor-pointer hover:text-white">
          <CiViewList /> <span>List</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-white">
          <FaFlipboard /> <span>Board</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-white">
          <FcCalendar /> <span>Calendar</span>
        </div>
        <div className="flex items-center gap-1 border-l border-gray-700 pl-3 cursor-pointer hover:text-white">
          <span>+</span>
          <span>View</span>
        </div>
      </div>
      <div className="w-full flex flex-col mb-6 mt-3 border-zinc-700 pb-4 px-4">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-xl font-semibold text-zinc-300">
            <Dropdown items={items} placeholder="Todo" />
          </h1>
          <div className="flex text-sm space-x-1 px-6">
            <div className="p-2 w-[120px] font-semibold">Assignee</div>
            <div className="p-2 w-[120px] font-semibold">Due date</div>
            <div className="p-2 w-[120px] font-semibold">Priority</div>
            <div className="p-2 w-[120px] font-semibold">Menu</div>
          </div>
        </div>
        <Todo
          tasks={tasks}
          styling={`bg-red-600 text-2xl`}
          statuses={statusOptions}
          priority={priorityOptions}
          assignee={assignUser}
          onUpdateTask={(taskId, field, value) =>
            handleUpdateTask(taskId, field, value)
          }
          onAddTask={(taskName) => handleAddTask(taskName)}
        />
      </div>
    </div>
  );
}
