import React from "react";

export default function Modal({ isOpen, onClose, onDelete, title, message }) {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 transition-opacity duration-300"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-zinc-900 border border-zinc-800 w-[420px] max-w-[90%] p-6 rounded-2xl shadow-2xl text-white relative transform transition-all duration-300 scale-100 animate-modalEnter"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute text-sm top-3 text-zinc-400 right-3 cursor-pointer rounded-full"
        >
          ✕
        </button>

        {/* Title */}
        {title && (
          <h2 className="text-xl font-semibold mb-2 text-white tracking-wide">
            {title}
          </h2>
        )}

        {/* Message */}
        {message && (
          <p className="text-sm text-zinc-400 leading-relaxed mb-6">
            {message}
          </p>
        )}

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 cursor-pointer py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-sm font-medium transition-all duration-200"
          >
            Cancel
          </button>
          <button
            onClick={onDelete}
            className="px-4 py-2 cursor-pointer rounded-lg bg-red-600 hover:bg-red-700 text-sm font-medium shadow-lg shadow-red-600/20 transition-all duration-200"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
