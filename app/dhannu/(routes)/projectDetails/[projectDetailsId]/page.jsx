"use client";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { CiViewList } from "react-icons/ci";
import { FaFlipboard } from "react-icons/fa";
import { FcCalendar } from "react-icons/fc";
import { GiArtificialHive } from "react-icons/gi";
import { MdSupportAgent } from "react-icons/md";
import Todo from "../../../components/todo/Todo";
import { ProjectContext } from "../../../context/ProjectContext";
import Link from "next/link";
import { useParams } from "next/navigation";
import { SpaceContext } from "@/app/dhannu/context/SpaceContext";

export default function ProjectTodo() {
  const { projectDetailsId } = useParams();
  const { assignUser, statusOptions, priorityOptions } =
    useContext(ProjectContext);
  const { list } = useContext(SpaceContext);
  const [projectState, setProjectState] = useState([]);

  const handleAddTask = (projectId, taskName) => {
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
    if (list.length > 0) {
      const foundProject = list.find((cur) => cur.id == projectDetailsId);
      if (foundProject) {
        setProjectState(foundProject.projects);
      }
    }
  }, [list, projectDetailsId]);

  useEffect(() => {
    console.log("projectState", projectState);
  }, [projectState]);

  return (
    <div className="w-full h-full relative bg-zinc-950 rounded-2xl">
      <div className="w-full flex justify-between px-2 py-2">
        <h1 className="text-xl text-zinc-200 font-semibold">
          {"Dhannu Workspace"}
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

      <div className="flex items-center gap-4 border-b border-gray-800 px-2 py-1 text-sm text-gray-300">
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

      <div className="w-full py-5 overflow-y-auto max-h-[calc(100vh-180px)] no-scrollbar ">
        {projectState.map((project, idx) => {
          return (
            <div
              key={idx}
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

              <Link href={`/dhannu/projects/${project.id}`}>
                <button className="bg-purple-600 hover:bg-purple-700 cursor-pointer absolute bottom-5 right-5 text-left rounded-full px-3 py-2 outline-none">
                  Create Another Projects
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
