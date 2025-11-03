"use client";

import { useEffect, useState } from "react";

export default function SpacesPage() {
  const [spaces, setSpaces] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [creating, setCreating] = useState(false);

  // For editing
  const [editingSpace, setEditingSpace] = useState(null);
  const [editName, setEditName] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [updating, setUpdating] = useState(false);

  const fetchSpaces = async () => {
    setLoading(true);
    const res = await fetch("/api/spaces");
    const data = await res.json();
    setSpaces(data || []);
    setLoading(false);
  };

  const createSpace = async (e) => {
    e.preventDefault();
    if (!name.trim()) return alert("Enter a space name");

    setCreating(true);
    const res = await fetch("/api/spaces", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description }),
    });

    const result = await res.json();
    setCreating(false);

    if (res.ok) {
      setName("");
      setDescription("");
      fetchSpaces();
    } else {
      alert(result.error || "Failed to create space");
    }
  };

  const deleteSpace = async (id) => {
    if (!confirm("Delete this space?")) return;

    const res = await fetch(`/api/spaces/${id}`, { method: "DELETE" });
    if (res.ok) {
      fetchSpaces();
    } else {
      const err = await res.json();
      alert(err.error || "Delete failed");
    }
  };

  const startEditing = (sp) => {
    setEditingSpace(sp.id);
    setEditName(sp.name);
    setEditDescription(sp.description || "");
  };

  const updateSpace = async (e) => {
    e.preventDefault();
    if (!editName.trim()) return alert("Enter a space name");
    setUpdating(true);

    const res = await fetch(`/api/spaces/${editingSpace}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: editName,
        description: editDescription,
      }),
    });

    setUpdating(false);

    if (res.ok) {
      setEditingSpace(null);
      fetchSpaces();
    } else {
      const err = await res.json();
      alert(err.error || "Update failed");
    }
  };

  useEffect(() => {
    fetchSpaces();
  }, []);

  return (
    <div className="min-h-screen bg-[#0f1117] text-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">
          🪐 Spaces Management
        </h1>

        {/* Create Space Form */}
        <form
          onSubmit={createSpace}
          className="bg-[#181b25] border border-gray-700 rounded-2xl p-6 mb-10 shadow-md"
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-200">
            Create New Space
          </h2>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Enter space name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-[#0f1117] border border-gray-700 text-gray-100 rounded-lg p-2 focus:ring-2 focus:ring-purple-600 focus:outline-none"
              required
            />
            <textarea
              placeholder="Enter description (optional)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="bg-[#0f1117] border border-gray-700 text-gray-100 rounded-lg p-2 focus:ring-2 focus:ring-purple-600 focus:outline-none"
              rows={3}
            />
            <button
              type="submit"
              disabled={creating}
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              {creating ? "Creating..." : "Create Space"}
            </button>
          </div>
        </form>

        {/* Spaces List */}
        {loading ? (
          <p className="text-gray-400">Loading spaces...</p>
        ) : spaces.length === 0 ? (
          <p className="text-gray-500">No spaces found.</p>
        ) : (
          <div className="grid gap-5">
            {spaces.map((sp) => (
              <div
                key={sp.id}
                className="bg-[#181b25] border border-gray-700 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all"
              >
                {editingSpace === sp.id ? (
                  <form onSubmit={updateSpace} className="flex flex-col gap-3">
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className="bg-[#0f1117] border border-gray-700 text-gray-100 rounded-lg p-2 focus:ring-2 focus:ring-purple-600 focus:outline-none"
                      required
                    />
                    <textarea
                      value={editDescription}
                      onChange={(e) =>
                        setEditDescription(e.target.value)
                      }
                      className="bg-[#0f1117] border border-gray-700 text-gray-100 rounded-lg p-2 focus:ring-2 focus:ring-purple-600 focus:outline-none"
                      rows={3}
                    />
                    <div className="flex gap-3 mt-2">
                      <button
                        type="submit"
                        disabled={updating}
                        className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded-lg transition"
                      >
                        {updating ? "Updating..." : "Save Changes"}
                      </button>
                      <button
                        type="button"
                        onClick={() => setEditingSpace(null)}
                        className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {sp.name}
                      </h3>
                      {sp.description && (
                        <p className="text-gray-400 mt-1">
                          {sp.description}
                        </p>
                      )}
                      <p className="text-xs text-gray-500 mt-2">
                        Created on{" "}
                        {new Date(sp.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => startEditing(sp)}
                        className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded-md transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteSpace(sp.id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md transition"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
