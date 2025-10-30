"use client";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { CiViewList } from "react-icons/ci";
import { FaFlipboard } from "react-icons/fa";
import { FcCalendar } from "react-icons/fc";
import { GiArtificialHive } from "react-icons/gi";
import { MdSupportAgent } from "react-icons/md";
import { SpaceContext } from "../../context/SpaceContext";
import { IoIosFlag } from "react-icons/io";
import { RxCircle } from "react-icons/rx";
import { GiPlainCircle } from "react-icons/gi";
import Todo from "./Todo";

export default function ProjectTodo({ projects }) {
  const { list } = useContext(SpaceContext);
  const [projectState, setProjectState] = useState(projects);
  const found = list.find((cur) => cur.id == projects[0].projectId);

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

  const handleAddTask = (projectId, taskName) => {
    console.log(projectId, taskName);
    const newTasks = {
      id: Date.now(),
      name: taskName,
      assignee: "",
      priority: "",
      dueDate: "",
      status: "",
    };

    const updatedProjectTask = projectState.map((project) =>
      project.id == projectId
        ? { ...project, tasks: [...project.tasks, newTasks] }
        : project
    );

    setProjectState(updatedProjectTask);
  };

  const handleUpdateTask = (projectId, taskId, field, value) => {
    setProjectState((prevProject) =>
      prevProject.map((project) =>
        project.id === projectId
          ? {
              ...project,
              tasks:
                field === "delete"
                  ? project.tasks.filter((t) => t.id !== taskId)
                  : project.tasks.map((task) =>
                      task.id === taskId ? { ...task, [field]: value } : task
                    ),
            }
          : project
      )
    );
  };

  useEffect(() => {
    console.log("projects", projectState);
  });

  return (
    <div className="w-full h-full bg-zinc-950 rounded-2xl">
      <div className="w-full flex justify-between">
        <h1 className="text-xl text-zinc-200 font-semibold">
          {found?.spaceList || "Dhannu Workspace"}
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

      <div className="w-full py-5">
        {projectState.map((project) => {
          return (
            <div
              key={project.id}
              className="w-full flex flex-col mb-6 border-zinc-700 pb-4 px-4"
            >
              <div className="w-full flex justify-between items-center">
                <h1 className="text-xl font-semibold text-pink-600">
                  {project.name}
                </h1>
                <div className="flex text-sm space-x-1 px-6">
                  <div className="p-2 w-[120px] font-semibold">Assignee</div>
                  <div className="p-2 w-[120px] font-semibold">Due date</div>
                  <div className="p-2 w-[120px] font-semibold">Priority</div>
                  <div className="p-2 w-[120px] font-semibold">Menu</div>
                </div>
              </div>
              <Todo
                tasks={project.tasks}
                assignee={assignUser}
                statuses={statusOptions}
                priority={priorityOptions}
                onUpdateTask={(taskId, field, value) =>
                  handleUpdateTask(project.id, taskId, field, value)
                }
                onAddTask={(taskName) => handleAddTask(project.id, taskName)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
