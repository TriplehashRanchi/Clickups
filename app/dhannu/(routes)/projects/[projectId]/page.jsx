"use client";
import React, { useContext, useEffect, useState } from "react";
import { TbCircleDashed } from "react-icons/tb";
import { IoPeople } from "react-icons/io5";
import { FaChevronCircleDown, FaCalendar, FaFlipboard } from "react-icons/fa";
import Dropdown from "@/app/dhannu/components/resuableComponents/Dropdown";

import { ProjectContext } from "@/app/dhannu/context/ProjectContext";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function Page() {
  const { projectId } = useParams();
  const {
    assignUser,
    statusOptions,
    priorityOptions,
    createProject,
    formData,
    handleChange,
    setProjectId,
  } = useContext(ProjectContext);

  useEffect(() => {
    if (projectId) {
      setProjectId(projectId);
    }
  }, [projectId, setProjectId]);

  return (
    <div className="w-full h-full bg-zinc-950 text-white p-4 rounded-2xl flex flex-col gap-10">
      <div className="w-full f-full bg-zinc-950 text-white flex flex-col gap-10 p-3">
        <div>
          <input
            type="text"
            placeholder="New Project"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="text-2xl font-semibold bg-transparent outline-none w-full placeholder-zinc-500 text-zinc-200 border-b border-zinc-800 pb-2 focus:border-purple-500 transition duration-300"
          />
        </div>

        <div className="flex flex-wrap gap-5">
          <div className="flex-1 min-w-[220px] relative">
            <div className="flex items-center justify-between p-4 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-purple-500/60 transition shadow-md hover:shadow-purple-500/20">
              <div className="flex items-center gap-3">
                <TbCircleDashed size={20} className="text-purple-400" />
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">
                    Status
                  </p>

                  <Dropdown
                    items={statusOptions}
                    placeholder="status"
                    onSelect={(item) => handleChange("status", item.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 min-w-[220px] relative">
            <div className="flex items-center justify-between p-4 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-purple-500/60 transition shadow-md hover:shadow-purple-500/20">
              <div className="flex items-center gap-3">
                <IoPeople size={17} className="text-purple-400" />
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">
                    Assignee
                  </p>
                  <Dropdown
                    items={assignUser}
                    placeholder="assignee"
                    showInitial={true}
                    className="bg-purple-600 w-5 h-5 rounded-full text-xs font-semibold"
                    onSelect={(item) => handleChange("assignee", item.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 min-w-[220px] relative">
            <div className="flex items-center justify-between p-4 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-purple-500/60 transition shadow-md hover:shadow-purple-500/20">
              <div className="flex items-center gap-3">
                <FaChevronCircleDown size={17} className="text-purple-400" />
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">
                    Priority
                  </p>
                  <Dropdown
                    items={priorityOptions}
                    placeholder="priority"
                    onSelect={(item) => handleChange("priority", item.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center p-4 bg-zinc-900 border border-zinc-800 rounded-lg min-w-[220px] shadow-md hover:border-purple-500/60 transition">
            <div className="flex items-center gap-3">
              <FaCalendar size={15} className="text-purple-400" />
              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-wider">
                  {"End Date"}
                </p>
                <input
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => handleChange("endDate", e.target.value)}
                  className="bg-transparent text-zinc-300 text-sm mt-1 outline-none border-b border-zinc-800 focus:border-purple-500 transition duration-300"
                />
                <style jsx>{`
                  input[type="date"]::-webkit-calendar-picker-indicator {
                    filter: invert(1);
                    cursor: pointer;
                  }
                `}</style>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-zinc-400 font-semibold">About Project</h2>
          <textarea
            rows="4"
            value={formData.description}
            onChange={(e) => handleChange("description", e.target.value)}
            placeholder="Describe your project goals..."
            className="w-full bg-zinc-900 border border-zinc-800 rounded-md p-3 text-zinc-300 outline-none focus:border-purple-500 resize-none transition shadow-sm hover:shadow-purple-500/10 duration-300"
          />
        </div>

        <div className="flex justify-end">
          <button
            onClick={createProject}
            className="bg-purple-600 cursor-pointer hover:bg-purple-700 px-6 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
          >
            Create Project
          </button>
        </div>
      </div>
    </div>
  );
}
