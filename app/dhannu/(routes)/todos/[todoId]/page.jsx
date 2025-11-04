"use client";
import Dropdown from "@/app/dhannu/components/resuableComponents/Dropdown";
import Todo from "@/app/dhannu/components/todo/Todo";
import Header from "@/app/dhannu/components/ui/Header";
import NavigationTabs from "@/app/dhannu/components/ui/NavigationTabs";
import { ProjectContext } from "@/app/dhannu/context/ProjectContext";
import { SpaceContext } from "@/app/dhannu/context/SpaceContext";
import { useParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

export default function Page() {
  const { todoId } = useParams();
  const { assignUser, priorityOptions, statusOptions } =
    useContext(ProjectContext);
  const { list, setList } = useContext(SpaceContext);
  const currentTasks = list?.projects?.find((project) => project.id === todoId);
  const tasks = currentTasks?.tasks || [];

//   const handleAddTask = (taskName) => {
//     const newTask = {
//       id: Date.now(),
//       name: taskName,
//       assignee: "",
//       priority: "",
//       dueDate: "",
//       status: "",
//     };

//     const updatedList = list.projects.map((project) => {
//       return project.id === todoId
//         ? { ...project, tasks: [...project.tasks, newTask] }
//         : project;
//     });

//     setList(updatedList);
//   };

//   const handleUpdateTask = (taskId, field, value) => {
//     setTasks((prev) =>
//       prev.map((cur) => (cur.id === taskId ? { ...cur, [field]: value } : cur))
//     );
//   };


  useEffect(() => {
    console.log("list", list);
  },[])

  return (
    <div className="w-full h-full py-3 px-2">
      <Header />
      <NavigationTabs />

      <div className="w-full flex flex-col mb-6 mt-3 border-zinc-700 pb-4 px-4">
        <div className="w-full flex justify-between items-center">
          {/* ✅ Fixed heading */}
          <h1 className="text-xl font-semibold text-zinc-300">Todo</h1>

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
