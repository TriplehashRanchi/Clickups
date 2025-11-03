"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CiCircleRemove, CiCircleList } from "react-icons/ci";

export default function Space() {
  const [spaces, setSpaces] = useState([]);
  const [showList, setShowList] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [spaceInput, setSpaceInput] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [creating, setCreating] = useState(false);

  // ✅ Fetch all spaces from backend
  const fetchSpaces = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/spaces");
      const data = await res.json();
      if (res.ok) {
        setSpaces(data);
      } else {
        console.error("Failed to load spaces:", data.error);
      }
    } catch (err) {
      console.error("Error fetching spaces:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSpaces();
  }, []);

  // ✅ Create space via backend API
  const handleCreateSpace = async () => {
    if (!spaceInput.trim()) return alert("Please enter a space name");

    try {
      setCreating(true);
      const res = await fetch("/api/spaces", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: spaceInput, description }),
      });

      const result = await res.json();
      if (res.ok) {
        setSpaceInput("");
        setDescription("");
        setModalOpen(false);
        fetchSpaces();
      } else {
        alert(result.error || "Failed to create space");
      }
    } catch (err) {
      alert("Error creating space");
    } finally {
      setCreating(false);
    }
  };

  // ✅ Delete space
  const handleRemoveSpace = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this space?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`/api/spaces/${id}`, { method: "DELETE" });
      const result = await res.json();
      if (res.ok) {
        fetchSpaces();
      } else {
        alert(result.error || "Delete failed");
      }
    } catch (err) {
      alert("Error deleting space");
    }
  };

  const handleAddSpace = () => setModalOpen(true);

  return (
    <div className="h-full w-full py-4">
      <h2 className="text-sm text-gray-300">Favorites</h2>

      <div className="w-full flex items-center justify-between mt-4">
        <h2 className="text-sm text-gray-300">Spaces</h2>
        <button
          onClick={handleAddSpace}
          className="px-2 rounded-md bg-zinc-700 text-white cursor-pointer hover:bg-zinc-600"
        >
          +
        </button>
      </div>

      <div className="w-full h-auto">
        {loading ? (
          <p className="text-gray-400 mt-3">Loading spaces...</p>
        ) : spaces.length === 0 ? (
          <p className="text-gray-500 mt-3">No spaces found.</p>
        ) : (
          <>
            <div className="flex gap-2 mt-2 hover:bg-zinc-800 p-1 rounded-md cursor-pointer">
              <span className="h-[28px] w-[30px] text-sm flex items-center justify-center bg-black rounded-md">
                A
              </span>
              <h1 className="text-gray-300 text-[16px]">All Tasks</h1>
            </div>

            {spaces.map((cur) => (
              <div
                key={cur.id}
                className="flex flex-col items-center group rounded-lg transition-all duration-300 shadow-sm"
              >
                <div className="w-full hover:bg-zinc-800 py-1 px-2 rounded-md flex items-center">
                  <span
                    onClick={() =>
                      setShowList((prev) => (prev === cur.id ? null : cur.id))
                    }
                    className="text-xs opacity-0 text-gray-300 group-hover:opacity-100 cursor-pointer transform hover:rotate-90 transition-transform duration-300"
                  >
                    ▶
                  </span>

                  <span
                    className={`h-[22px] ml-2 w-[22px] text-xs px-2 flex items-center justify-center font-semibold rounded-md bg-purple-600`}
                  >
                    {cur.name?.charAt(0) || "S"}
                  </span>

                  <Link href={`/dashboard/projects/${cur.id}`} className="w-full">
                    <h1 className="text-sm text-gray-400 cursor-pointer py-1 px-2">
                      {cur.name}
                    </h1>
                  </Link>

                  <span
                    onClick={() => handleRemoveSpace(cur.id)}
                    className="text-gray-300 opacity-0 group-hover:opacity-100 cursor-pointer hover:text-red-500 transition-colors duration-300"
                  >
                    <CiCircleRemove size={20} />
                  </span>
                </div>

                {cur.id === showList && (
                  <div className="w-full rounded-md flex items-center justify-center px-2 py-1 border-zinc-700">
                    <CiCircleList className="ml-7" size={20} />
                    <Link href={`/dashboard/todos/${cur.id}`} className="w-full">
                      <h1 className="text-sm text-gray-400 cursor-pointer py-1 px-2">
                        List
                      </h1>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </>
        )}

        {/* New Space Button */}
        <div
          onClick={handleAddSpace}
          className="px-2 py-1 cursor-pointer flex items-center justify-start gap-2 text-zinc-500 hover:bg-zinc-800 rounded-md mt-1"
        >
          <span className="text-xl">+</span>
          <span className="text-sm">New Space</span>
        </div>
      </div>

      {/* ✅ Create Space Modal */}
      {modalOpen && (
        <div
          onClick={() => setModalOpen(false)}
          className="fixed bg-black/50 h-screen w-full z-50 flex justify-center items-center left-0 top-0"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="p-4 w-[550px] relative rounded-2xl bg-zinc-900 h-[400px]"
          >
            <div className="flex items-center justify-between">
              <h1 className="text-[17px] text-white">Create a Space</h1>
              <span
                onClick={() => setModalOpen(false)}
                className="hover:cursor-pointer text-gray-300"
              >
                <CiCircleRemove size={20} />
              </span>
            </div>

            <p className="text-sm mt-1 text-zinc-500">
              A Space represents teams, departments, or groups, each with its
              own Lists, workflows, and settings.
            </p>

            <div className="flex flex-col w-full px-1 py-2">
              <h3 className="text-zinc-300">Icons & name</h3>
              <div className="flex mt-2 w-full gap-3">
                <span className="px-3 py-1.5 rounded-lg border cursor-pointer text-white border-gray-500">
                  {spaceInput.charAt(0) || "M"}
                </span>
                <input
                  placeholder="e.g. Marketing, Engineering, HR"
                  type="text"
                  value={spaceInput}
                  onChange={(e) => setSpaceInput(e.target.value)}
                  className="border-2 px-2 border-gray-500 w-full rounded-md bg-transparent text-gray-200"
                />
              </div>
            </div>

            <div className="flex flex-col mt-5">
              <h1 className="text-sm text-zinc-300 mb-1">
                Description <span className="text-[13px] text-zinc-500">(Optional)</span>
              </h1>
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border-2 px-2 py-1 border-gray-500 w-full rounded-md bg-transparent text-gray-200"
                type="text"
              />
            </div>

            <div className="flex justify-between items-center mt-7 text-gray-300">
              <h1 className="text-sm">Default Permission</h1>
              <button className="text-xs border border-gray-500 bg-zinc-950 outline-none rounded-md px-2 py-1">
                Full edit
              </button>
            </div>

            <div className="absolute bottom-0 left-0 rounded-b-2xl w-full bg-zinc-950 p-4 flex justify-between items-center shadow-2xl">
              <h1 className="text-zinc-500 font-medium text-sm">
                Use Templates
              </h1>

              <button
                onClick={handleCreateSpace}
                disabled={creating}
                className="px-2 py-1 bg-purple-600 text-white rounded-lg hover:bg-purple-700 cursor-pointer transition"
              >
                {creating ? "Creating..." : "Continue"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
