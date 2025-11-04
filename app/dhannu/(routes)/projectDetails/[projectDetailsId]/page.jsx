"use client";
import React, { useContext, useEffect, useState } from "react";
import Todo from "../../../components/todo/Todo";
import { ProjectContext } from "../../../context/ProjectContext";
import Link from "next/link";
import { useParams } from "next/navigation";
import { SpaceContext } from "@/app/dhannu/context/SpaceContext";
import Header from "@/app/dhannu/components/ui/Header";
import NavigationTabs from "@/app/dhannu/components/ui/NavigationTabs";

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
    <div className="w-full h-full p-4 relative bg-zinc-950 rounded-2xl">
      <Header />
      <NavigationTabs />

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
                <button className="fixed bottom-6 right-6 flex items-center gap-2 bg-purple-600/80 backdrop-blur-md text-white font-medium px-3 py-2 rounded-full shadow-md hover:bg-purple-700 hover:scale-105 transition-all duration-300">
                  <span className="text-lg">+</span>
                  <span>New Project</span>
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
