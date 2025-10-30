"use client";
import React, { useContext } from "react";
import { TeamContext } from "../../context/TeamContext";
import { IoMailSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";

export default function UserDetails() {
  const {
    users,
    showUserDetails,
    setShowUserDetails,
    handleShowUserDetails,
    avatarColors,
    openMenu,
    setOpenMenu,
    handleDelete,
  } = useContext(TeamContext);

  const getAvatarColor = (idx) => avatarColors[idx % avatarColors.length];

  return (
    <div className="w-full h-full py-2 px-4 flex flex-wrap gap-4">
      {users.map((cur, idx) => {
        const avatarColor = getAvatarColor(idx);
        return (
          <div
            key={idx}
            className="w-[250px] h-[250px] bg-zinc-900 text-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-4 flex flex-col items-center gap-4"
          >
            <div
              onClick={() => handleShowUserDetails(cur)}
              className={`flex items-center justify-center w-[200px] h-[200px] rounded-2xl text-2xl font-bold ${avatarColor}`}
            >
              {cur.firstName ? cur.firstName.charAt(0).toUpperCase() : "U"}
            </div>

            <div className="fixed inset-0 z-50 pointer-events-none">
              <div
                onClick={() => setShowUserDetails(null)}
                className={`absolute inset-0 bg-black/20 transition-opacity duration-500 ease-in-out ${
                  showUserDetails
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0"
                }`}
              ></div>
              <div
                className={`absolute right-0 top-0 h-full w-[480px] bg-zinc-950/90 text-white flex flex-col transform transition-all duration-500 ease-in-out rounded-l-2xl border-l border-zinc-800 shadow-[0_0_50px_rgba(0,0,0,0.7)] backdrop-blur-2xl ${
                  showUserDetails
                    ? "translate-x-0 opacity-100 pointer-events-auto"
                    : "translate-x-full opacity-0 pointer-events-none"
                }`}
              >
                {showUserDetails && (
                  <div className="flex flex-col h-full overflow-y-auto no-scrollbar">
                    <div className="flex justify-between items-center px-6 py-4 border-b border-zinc-800 bg-gradient-to-r from-zinc-900/80 to-zinc-950/40 backdrop-blur-lg">
                      <h2 className="text-xl font-semibold tracking-wide text-indigo-400">
                        Profile Overview
                      </h2>
                      <button
                        onClick={() => setShowUserDetails(null)}
                        className="text-gray-400 hover:text-white transition transform hover:rotate-90"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="relative p-8 flex flex-col items-center text-center bg-gradient-to-b from-zinc-900/80 via-zinc-950/60 to-transparent border-b border-zinc-800">
                      <div className="relative mb-4">
                        <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-600 flex items-center justify-center text-5xl font-bold shadow-lg ring-4 ring-indigo-600/20">
                          {showUserDetails.firstName.charAt(0).toUpperCase()}
                        </div>
                      </div>
                      <h3 className="text-2xl font-semibold capitalize bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                        {[
                          showUserDetails.firstName,
                          showUserDetails.middleName,
                          showUserDetails.lastName,
                        ]
                          .filter(Boolean) // remove undefined/null
                          .join(" ")}
                      </h3>
                      <p className="text-gray-400  mt-1">
                        {showUserDetails.jobTitle || "Team Member"}
                      </p>
                    </div>

                    <div className="flex-1 p-6 space-y-8">
                      <section className="bg-zinc-900/50 rounded-xl p-4 border border-zinc-800 hover:border-indigo-500/30 transition">
                        <h4 className="text-indigo-400 font-semibold mb-3 flex items-center gap-2">
                          📞 Contact Information
                        </h4>
                        <div className="space-y-2 text-gray-300">
                          <p className="flex items-center gap-2">
                            <IoMailSharp /> {showUserDetails.email}
                          </p>
                          <p className="flex items-center gap-2">
                            <FaPhone /> {showUserDetails.phoneNo || "-"}
                          </p>
                        </div>
                      </section>

                      <section className="bg-zinc-900/50 rounded-xl p-4 border border-zinc-800 hover:border-green-500/30 transition">
                        <h4 className="text-green-400 font-semibold mb-3 flex items-center gap-2">
                          💼 Employment Details
                        </h4>
                        <div className="flex flex-col gap-1">
                          <p>
                            <span className="text-zinc-400">Manager:</span>{" "}
                            {showUserDetails.reportingManager}
                          </p>
                          <p>
                            <span className="text-zinc-400">Type: </span>
                            {showUserDetails.employmentType}
                          </p>
                          <p>
                            <span className="text-zinc-400">Start: </span>
                            {showUserDetails.employmentStartDate}
                          </p>
                        </div>
                      </section>

                      <section className="bg-zinc-900/50 rounded-xl p-4 border border-zinc-800 hover:border-yellow-500/30 transition">
                        <h4 className="text-yellow-400 font-semibold mb-3 flex items-center gap-2">
                          👤 Personal Information
                        </h4>
                        <div className="flex flex-col gap-1">
                          <p>
                            <span className="text-zinc-400">Dob:</span>{" "}
                            {showUserDetails.dob}
                          </p>
                          <p>
                            <span className="text-zinc-400">Gender:</span>{" "}
                            {showUserDetails.gender}
                          </p>
                          <p>
                            <span className="text-zinc-400">Status:</span>{" "}
                            {showUserDetails.maritalStatus}
                          </p>
                          <p>
                            <span className="text-zinc-400">Nationality:</span>{" "}
                            {showUserDetails.nationality}
                          </p>
                        </div>
                      </section>

                      <section className="bg-zinc-900/50 rounded-xl p-4 border border-zinc-800 hover:border-pink-500/30 transition">
                        <h4 className="text-pink-400 font-semibold mb-3 flex items-center gap-2">
                          🏠 Address Details
                        </h4>
                        <div className=" space-y-1">
                          <p>
                            <span className="text-zinc-400">Pincode :</span>{" "}
                            {showUserDetails.pincode}
                          </p>
                          <p>
                            <span className="text-zinc-400">State :</span>{" "}
                            <span>{showUserDetails.state}</span>
                          </p>
                          <p>
                            <span className="text-zinc-400">Address 1 :</span>{" "}
                            <span className="lowercase">
                              {showUserDetails.address1}
                            </span>
                          </p>
                          <p>
                            <span className="text-zinc-400">Address 2 :</span>{" "}
                            <span className="lowercase">
                              {showUserDetails.address2}
                            </span>
                          </p>
                        </div>
                      </section>
                    </div>
                    <div className="p-6 border-t border-zinc-800 bg-gradient-to-t from-zinc-900/70 to-transparent backdrop-blur-md">
                      <button
                        onClick={() => setShowUserDetails(null)}
                        className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-semibold shadow-md hover:opacity-90 hover:scale-[1.03] transition-all duration-300"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="relative w-full px-3 flex justify-between items-center">
              <span className="text-lg font-semibold capitalize">
                {cur.firstName}
              </span>

              <div className=" font-semibold hover:bg-zinc-900">
                <BiDotsVerticalRounded
                  size={17}
                  className="cursor-pointer hover:text-white"
                  onClick={() =>
                    setOpenMenu((prev) => (prev === cur.id ? null : cur.id))
                  }
                />

                {openMenu === cur.id && (
                  <div className="absolute right-0 mt-2 w-28 bg-zinc-950 border border-zinc-700 rounded-md shadow-lg z-50 text-xs text-zinc-300">
                    <button
                      onClick={() => {
                        if (
                          confirm("Are you sure you want to delete this task?")
                        ) {
                          handleDelete(cur.id);
                        }
                        setOpenMenu(null);
                      }}
                      className="w-full flex justify-start items-center gap-2 rounded-md px-3 py-2 text-left text-red-500 hover:bg-zinc-900"
                    >
                      <MdDelete size={20} /> Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
