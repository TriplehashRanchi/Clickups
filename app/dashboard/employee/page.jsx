"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function EmployeeDashboard() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/employee/tasks") // will create next step
      .then((res) => res.json())
      .then((data) => {
        setTasks(Array.isArray(data) ? data : []);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#0f1117] text-gray-100 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-white">
          👋 Welcome to your Dashboard
        </h1>
        <p className="text-gray-400">
          Here are your active tasks and recent updates.
        </p>

        {/* Tasks Section */}
        <div className="bg-[#181b25] border border-gray-700 rounded-xl p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-white">My Tasks</h2>
            <Link
              href="/dashboard/employee/tasks"
              className="text-purple-400 hover:text-purple-300 text-sm"
            >
              View all →
            </Link>
          </div>

          {loading ? (
            <p className="text-gray-400">Loading tasks...</p>
          ) : tasks.length === 0 ? (
            <p className="text-gray-400">No active tasks assigned.</p>
          ) : (
            <ul className="space-y-2">
              {tasks.slice(0, 5).map((task) => (
                <li
                  key={task.id}
                  className="bg-[#12141b] border border-gray-700 rounded-lg p-3 flex justify-between items-center"
                >
                  <span className="text-white">{task.title}</span>
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      task.status === "completed"
                        ? "bg-green-600/20 text-green-400"
                        : "bg-yellow-600/20 text-yellow-400"
                    }`}
                  >
                    {task.status}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
