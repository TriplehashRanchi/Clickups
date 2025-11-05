"use client";
import Dropdown from "@/app/dhannu/components/resuableComponents/Dropdown";
import Todo from "@/app/dhannu/components/todo/Todo";
import Header from "@/app/dhannu/components/ui/Header";
import NavigationTabs from "@/app/dhannu/components/ui/NavigationTabs";
import { ProjectContext } from "@/app/dhannu/context/ProjectContext";
import { SpaceContext } from "@/app/dhannu/context/SpaceContext";
import { useParams } from "next/navigation";
import React, { useContext, useEffect } from "react";

export default function Page() {
  const { todoId } = useParams();
  const { assignUser, priorityOptions, statusOptions } =
    useContext(ProjectContext);
  const { list, setList } = useContext(SpaceContext);

  // ✅ Find the current project tasks
  const currentProject = list
    ?.flatMap((space) => space.projects)
    ?.find((project) => project.id == todoId);

  const tasks = currentProject?.tasks || [];

  // ✅ Add new task to correct project
  const handleAddTask = (taskName) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      assignee: "",
      priority: "",
      dueDate: "",
      status: "",
    };

    setList((prevList) =>
      prevList.map((space) => ({
        ...space,
        projects: space.projects.map((project) =>
          project.id == todoId
            ? { ...project, tasks: [...(project.tasks || []), newTask] }
            : project
        ),
      }))
    );
  };

  // ✅ Update a task (any field) inside list
  const handleUpdateTask = (taskId, field, value) => {
    setList((prevList) =>
      prevList.map((space) => ({
        ...space,
        projects: space.projects.map((project) =>
          project.id == todoId
            ? {
                ...project,
                tasks: project.tasks.map((task) =>
                  task.id === taskId ? { ...task, [field]: value } : task
                ),
              }
            : project
        ),
      }))
    );
  };

  return (
    <div className="w-full h-full py-3 px-2">
      <Header />
      <NavigationTabs />

      <div className="w-full flex flex-col mb-6 mt-3 border-zinc-700 pb-4 px-4">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-xl font-semibold text-pink-600">
            {currentProject?.name || "Todo"}
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
          styling="bg-red-600 text-2xl"
          statuses={statusOptions}
          priority={priorityOptions}
          assignee={assignUser}
          onUpdateTask={handleUpdateTask}
          onAddTask={handleAddTask}
        />
      </div>
    </div>
  );
}
