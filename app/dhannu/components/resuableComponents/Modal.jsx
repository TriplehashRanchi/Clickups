import React from "react";

export default function Modal({ isOpen, onClose, onDelete, title, message }) {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-zinc-900 border border-zinc-700 w-[420px] p-6 rounded-2xl shadow-2xl relative text-white transition-all duration-300"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 cursor-pointer right-3 text-zinc-400 hover:text-white text-2xl transition"
        >
          &times;
        </button>

        {/* Title */}
        {title && (
          <h2 className="text-xl font-semibold mb-3 tracking-wide text-white/90">
            {title}
          </h2>
        )}

        {/* Message */}
        {message && (
          <p className="text-zinc-400 text-sm leading-relaxed mb-6">
            {message}
          </p>
        )}

        {/* Buttons */}
        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 cursor-pointer rounded-lg bg-zinc-700 hover:bg-zinc-600 text-white/90 transition"
          >
            Cancel
          </button>
          <button
            onClick={onDelete}
            className="px-4 py-2 cursor-pointer rounded-lg bg-gradient-to-r from-pink-500 to-red-500 hover:opacity-90 text-white font-medium shadow-md transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
