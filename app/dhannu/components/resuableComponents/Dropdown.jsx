"use client";
import React, { useState } from "react";

export default function Dropdown({
  items = [],
  placeholder = "select Value",
  onSelect,
  className = "",
  showInitial = false,
  showIcons = false,
  styling,
}) {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const handleDropdown = (item) => {
    setSelectedValue(item);
    setOpen(false);
    onSelect?.(item);
  };

  return (
    <div>
      <div onClick={() => setOpen(!open)} className="w-full cursor-pointer">
        <button
          className={`${styling} text-sm cursor-pointer outline-none ${
            selectedValue ? className : ""
          } `}
        >
          {selectedValue
            ? showInitial
              ? selectedValue.value.charAt(0).toUpperCase()
              : showIcons
              ? selectedValue.icons
              : selectedValue.label
            : placeholder}
        </button>
      </div>
      <div>
        {open && (
          <ul
            className={`absolute w-[180px] bg-zinc-900 border border-zinc-800 mt-1 rounded-lg shadow-md z-10`}
          >
            {items.map((item, idx) => {
              return (
                <li
                  className="p-2 text-sm text-start cursor-pointer hover:bg-zinc-800 rounded-md w-[180px]"
                  onClick={() => handleDropdown(item)}
                  key={idx}
                >
                  {item.label}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
