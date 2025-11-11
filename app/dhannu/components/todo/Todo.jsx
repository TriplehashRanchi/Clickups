"use client";
import React, { useEffect, useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { IoPeopleSharp } from "react-icons/io5";
import { IoIosFlag } from "react-icons/io";
import { RxCircle } from "react-icons/rx";
import { BiSolidEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Dropdown from "../resuableComponents/Dropdown";

export default function Todo({
  tasks = [],
  assignee = [],
  statuses = [],
  priority = [],
  onAddTask,
  onUpdateTask,
}) {
  const [taskInput, setTaskInput] = useState("");
  const [menuOpen, setMenuOpen] = useState(null);
  const [editTaskValue, setEditTaskValue] = useState("");
  const [editId, setEditId] = useState(null);

  const handleTask = () => {
    if (!taskInput.trim()) return;
    onAddTask(taskInput);
    setTaskInput("");
  };

  const handleEdit = (taskId, value) => {
    setEditId(taskId);
    setEditTaskValue(value);
    setMenuOpen(null);
  };

  useEffect(() => {
    console.log("tasks", tasks);
  }, [tasks]);

  return (
    <div className="w-full bg-transparent">
      <div>
        {tasks.map((task) => {
          return (
            <div
              className="flex hover:bg-zinc-900 text-sm justify-between items-center  mt-3 border-b border-t border-b-zinc-900 border-t-zinc-900 px-3  text-zinc-300"
              key={task.id}
            >
              <div className="w-full flex justify-between items-center">
                <div className="flex gap-2 justify-center items-center">
                  <Dropdown
                    items={statuses}
                    showIcons={true}
                    placeholder={<RxCircle className="mt-1.5" size={16} />}
                    onSelect={(item) =>
                      onUpdateTask(task.id, "status", item.value)
                    }
                  />

                  {task.id === editId ? (
                    <input
                      value={editTaskValue}
                      onChange={(e) => setEditTaskValue(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          onUpdateTask(task.id, "name", editTaskValue);
                          setEditId(null);
                        }
                      }}
                      autoFocus
                      onBlur={() => setEditId(null)}
                      className="w-full bg-transparent p-2 outline-none text-sm"
                    />
                  ) : (
                    <h1 className="text-sm hover:text-purple-500 w-full mt-0.5 font-medium text-zinc-200">
                      {task.name}
                    </h1>
                  )}
                </div>
                <div className="flex text-sm space-x-1 px-9 h-full">
                  <div className="flex justify-center items-center w-[120px] font-semibold hover:border-zinc-600 rounded-md hover:border">
                    <Dropdown
                      placeholder={<IoPeopleSharp size={17} />}
                      items={assignee}
                      showInitial={true}
                      onSelect={(item) =>
                        onUpdateTask(task.id, "assignee", item.value)
                      }
                      className="bg-purple-600 w-6 h-6 rounded-full text-xs font-semibold flex justify-center items-center"
                    />
                  </div>
                  <div className="px-2 flex justify-center items-center w-[120px] font-semibold hover:bg-zinc-900 hover:border-zinc-600 rounded-md hover:border">
                    <input
                      type="date"
                      value={task.duedate}
                      onChange={(e) =>
                        onUpdateTask(task.id, "dueDate", e.target.value)
                      }
                      className="outline-none text-xs font-medium"
                    />
                    <style jsx>{`
                      input[type="date"]::-webkit-calendar-picker-indicator {
                        filter: invert(1);
                        cursor: pointer;
                      }
                    `}</style>
                  </div>
                  <div className="flex justify-center items-center w-[120px] hover:bg-zinc-900 hover:border-zinc-600 rounded-md hover:border">
                    <Dropdown
                      items={priority}
                      showIcons={true}
                      placeholder={
                        <IoIosFlag size={17} className="text-white" />
                      }
                      className="text-xs"
                      onSelect={(item) =>
                        onUpdateTask(task.id, "priority", item.value)
                      }
                    />
                  </div>
                  <div className=" py-1 flex justify-center items-center w-[120px] font-semibold hover:bg-zinc-900 hover:border-zinc-600 rounded-md hover:border">
                    <div className="relative py-2 flex justify-center items-center w-[120px] font-semibold hover:bg-zinc-900 ">
                      <BiDotsVerticalRounded
                        size={17}
                        className="cursor-pointer hover:text-white"
                        onClick={() =>
                          setMenuOpen((prev) =>
                            prev === task.id ? null : task.id
                          )
                        }
                      />

                      {menuOpen === task.id && (
                        <div className="absolute right-0 mt-28 left-10  w-28 bg-zinc-900 border border-zinc-700 rounded-md shadow-lg z-50 text-xs text-zinc-300">
                          <button
                            onClick={() => handleEdit(task.id, task.name)}
                            className="w-full rounded-md flex justify-start items-center gap-2 l px-3 py-2 text-left hover:bg-zinc-800"
                          >
                            <BiSolidEditAlt size={20} /> Edit
                          </button>
                          <button
                            onClick={() => {
                              if (
                                confirm(
                                  "Are you sure you want to delete this task?"
                                )
                              ) {
                                onUpdateTask(task.id, "delete", true);
                              }
                              setMenuOpen(null);
                            }}
                            className="w-full flex justify-start items-center gap-2 rounded-md px-3 py-2 text-left text-red-500 hover:bg-zinc-800"
                          >
                            <MdDelete size={20} /> Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="p-1 mt-2 flex border-t border-zinc-800 border-b w-full justify-between items-center">
        <div className="w-1/2">
          <input
            type="text"
            name="task"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            placeholder="Add Task"
            className="p-2 w-full text-sm rounded-md outline-none"
          />
        </div>
        <div>
          <button
            onClick={handleTask}
            className="bg-purple-600 p-2 text-xs rounded-md hover:bg-purple-700 text-white"
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}
