"use client";
import Header from "@/app/dhannu/components/ui/Header";
import NavigationTabs from "@/app/dhannu/components/ui/NavigationTabs";
import { SpaceContext } from "@/app/dhannu/context/SpaceContext";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useContext } from "react";
import { IoIosFlag } from "react-icons/io";

export default function Page() {
  const { projectListId } = useParams();
  const { list } = useContext(SpaceContext);

  const currentSpace = list.find((space) => space.id == projectListId);
  const projects = currentSpace?.projects || [];

  return (
    <div className="w-full h-full no-scrollbar bg-zinc-950 text-gray-200 p-6">
      {/* Page Header */}
      <Header />
      <NavigationTabs />

      <div className="mt-8 border border-zinc-800 rounded-xl shadow-md overflow-hidden backdrop-blur-sm bg-zinc-900/60">
        {/* Space Title */}
        <div className="bg-zinc-900/80 px-6 py-4 border-b border-zinc-800 flex justify-between items-center">
          <h2 className="text-xl font-semibold tracking-wide">
            {currentSpace?.spaceList || "No Space Selected"}
          </h2>
          <span className="text-xs text-gray-400">
            {projects.length} Project{projects.length !== 1 && "s"}
          </span>
        </div>

        {/* Projects Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-gray-300">
            <thead className="bg-zinc-800/80 text-gray-100 uppercase text-xs">
              <tr>
                <th className="py-3 px-4 text-left border-b border-zinc-700">
                  Project Name
                </th>
                <th className="py-3 px-4 text-center border-b border-zinc-700">
                  Status
                </th>
                <th className="py-3 px-4 text-center border-b border-zinc-700">
                  Assignee
                </th>
                <th className="py-3 px-4 text-center border-b border-zinc-700">
                  Priority
                </th>
                <th className="py-3 px-4 text-center border-b border-zinc-700">
                  End Date
                </th>
              </tr>
            </thead>

            <tbody>
              {projects.length > 0 ? (
                projects.map((project) => (
                  <tr
                    key={project.id}
                    className="border-b border-zinc-800 hover:bg-zinc-800/60 transition-all duration-200"
                  >
                    {/* Project Name */}
                    <td className="py-3 px-4 font-medium text-gray-100 hover:text-purple-400">
                      <Link href={`/dhannu/todos/${project.id}`}>
                        {project.name}
                      </Link>
                    </td>

                    {/* Status */}
                    <td className="py-3 px-4 text-center">
                      {project.status ? (
                        <span
                          className={`inline-flex justify-center items-center w-24 py-1 text-sm font-medium rounded-full capitalize
                            ${
                              project.status === "progress"
                                ? "bg-yellow-100/90 text-yellow-800"
                                : project.status === "completed"
                                ? "bg-green-100/90 text-green-800"
                                : "bg-gray-200/90 text-gray-700"
                            }`}
                        >
                          {project.status}
                        </span>
                      ) : (
                        "-"
                      )}
                    </td>

                    {/* Assignee */}
                    <td className="py-3 px-4 text-center">
                      <div className="flex justify-center">
                        <span className="w-7 h-7 rounded-full bg-indigo-600 text-white font-semibold text-xs flex justify-center items-center shadow-md">
                          {project.assignee
                            ? project.assignee.charAt(0).toUpperCase()
                            : "-"}
                        </span>
                      </div>
                    </td>

                    {/* Priority */}
                    <td className="py-3 px-4 text-center">
                      <div className="flex justify-center items-center">
                        <IoIosFlag
                          size={20}
                          className={`${
                            project.priority === "high"
                              ? "text-red-500"
                              : project.priority === "medium"
                              ? "text-yellow-400"
                              : "text-gray-500"
                          }`}
                        />
                      </div>
                    </td>

                    {/* End Date */}
                    <td className="py-3 px-4 text-center text-gray-400">
                      {project.endDate || "-"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-8 text-gray-500 italic"
                  >
                    No projects found in this space
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
