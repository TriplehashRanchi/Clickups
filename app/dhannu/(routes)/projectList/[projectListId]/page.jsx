"use client";
import Header from "@/app/dhannu/components/ui/Header";
import NavigationTabs from "@/app/dhannu/components/ui/NavigationTabs";
import { SpaceContext } from "@/app/dhannu/context/SpaceContext";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useContext, useEffect } from "react";
import { IoIosFlag } from "react-icons/io";

export default function Page() {
  const { projectListId } = useParams();
  const { list } = useContext(SpaceContext);

  const currentSpace = list.find((space) => space.id == projectListId);
  const projects = currentSpace?.projects || [];

  console.log("projects", projects);

  return (
    <div className="w-full h-full p-6 text-gray-200">
      {/* Page Header */}
      <Header />
      <NavigationTabs />

      <div className="mt-8 border border-zinc-800 rounded-lg shadow-sm overflow-hidden">
        <div className="bg-zinc-900 px-5 py-3 border-b border-zinc-800">
          <h2 className="text-lg font-semibold">
            {currentSpace?.spaceList || "No Space Selected"}
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-gray-300">
            <thead className="bg-zinc-900 text-gray-100 uppercase text-xs">
              <tr>
                <th className="py-3 px-4 text-left border-b border-zinc-700">
                  Project Name
                </th>
                <th className="py-3 px-4 text-center border-b border-zinc-700 text">
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
                projects.map((project, index) => (
                  <tr
                    key={project.id}
                    className="border-b bg-transparent border-zinc-900"
                  >
                    <td className="py-3 px-4 font-medium text-gray-100">
                      <Link href={`/dhannu/todos/${project.id}`}>
                        {project.name}
                      </Link>
                    </td>
                    <td className="py-3 px-4 text-center">
                      {project.status ? (
                        <span
                          className={`inline-flex justify-center items-center w-24 py-1 text-sm font-medium rounded-full capitalize
                           ${
                             project.status === "progress"
                               ? "bg-yellow-100 text-yellow-700"
                               : project.status === "completed"
                               ? "bg-green-100 text-green-700"
                               : "bg-gray-100 text-gray-700"
                           }`}
                        >
                          {project.status}
                        </span>
                      ) : (
                        "-"
                      )}
                    </td>

                    <td className="py-3 px-4 text-center">
                      <div className="flex justify-center">
                        <span className="w-6 h-6 rounded-full bg-purple-600 text-white font-semibold text-xs flex justify-center items-center">
                          {project.assignee
                            ? project.assignee.charAt(0).toUpperCase()
                            : "-"}
                        </span>
                      </div>
                    </td>

                    <td className="py-3 px-4">
                      <div className="flex justify-center items-center">
                        <IoIosFlag
                          size={20}
                          className={
                            project.priority === "high"
                              ? "text-red-600"
                              : project.priority === "medium"
                              ? "text-yellow-500"
                              : "text-gray-400"
                          }
                        />
                      </div>
                    </td>

                    <td className="py-3 px-4 text-center">
                      {project.endDate || "-"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-5 text-gray-500 italic"
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
