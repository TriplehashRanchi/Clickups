"use client";
import React, { useContext } from "react";
import { TeamContext } from "../../context/TeamContext";
import Dropdown from "../resuableComponents/Dropdown";

export default function Form() {
  const {
    handleShowForm,
    genderOptions,
    maritalStatusOptions,
    employmentTypes,
    jobTitles,
    departments,
    reportingManagers,
    nationalities,
    formData,
    handleSubmit,
    handleChange,
  } = useContext(TeamContext);
  return (
    <div
      onClick={handleShowForm}
      className="absolute no-scrollbar left-0 top-0 h-screen w-full overflow-y-auto bg-gradient-to-b from-black via-zinc-950 to-black p-8 text-white z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col gap-8 max-w-6xl mx-auto"
      >
        <div className="border border-zinc-700 rounded-2xl p-8 shadow-lg bg-gradient-to-b from-zinc-900 to-zinc-950 hover:shadow-purple-500/10 transition-all duration-300">
          <h1 className="text-3xl font-semibold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Personal Information
          </h1>
          <p className="text-sm text-zinc-400 mb-5">
            Fill in your basic personal details carefully.
          </p>
          <div className="flex flex-wrap gap-2">
            <label className="w-full text-zinc-300 font-medium">
              Full Name
            </label>

            <div className="flex flex-col flex-1 min-w-[250px] group">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                className="border border-zinc-700 bg-transparent rounded-lg px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all group-hover:border-zinc-500"
              />
              <label className="text-xs text-zinc-500 mt-2 text-right group-hover:text-zinc-300">
                First Name
              </label>
            </div>
            <div className="flex flex-col flex-1 min-w-[250px] group">
              <input
                type="text"
                name="middleName"
                value={formData.middleName}
                onChange={(e) => handleChange("middleName", e.target.value)}
                className="border border-zinc-700 bg-transparent rounded-lg px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all group-hover:border-zinc-500"
              />
              <label className="text-xs text-zinc-500 mt-2 text-right group-hover:text-zinc-300">
                Middle Name
              </label>
            </div>

            <div className="flex flex-col flex-1 min-w-[250px] group">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
                className="border border-zinc-700 bg-transparent rounded-lg px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all group-hover:border-zinc-500"
              />
              <label className="text-xs text-zinc-500 mt-2 text-right group-hover:text-zinc-300">
                Last Name
              </label>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <label className="w-full text-zinc-300 font-medium">
              Personality
            </label>
            <div className="flex flex-col flex-1 min-w-[250px] group">
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={(e) => handleChange("dob", e.target.value)}
                className="border border-zinc-700 bg-transparent rounded-lg px-3 py-2 text-sm text-zinc-300 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all group-hover:border-zinc-500"
              />

              {/* for white logo */}
              <style jsx>{`
                input[type="date"]::-webkit-calendar-picker-indicator {
                  filter: invert(1);
                  cursor: pointer;
                }
              `}</style>
              <label className="text-xs text-zinc-500 mt-2 text-right group-hover:text-zinc-300">
                Date of Birth
              </label>
            </div>

            <div className="flex flex-col flex-1 min-w-[250px] group">
              <div className="p-[6px] rounded-lg bg-transparent border border-zinc-700 text-zinc-300 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all group-hover:border-zinc-500">
                <Dropdown
                  items={genderOptions}
                  onSelect={(item) => handleChange("gender", item.value)}
                  placeholder="Gender"
                />
              </div>
              <label className="text-xs text-zinc-500 mt-2 text-right group-hover:text-zinc-300">
                Gender
              </label>
            </div>

            <div className="flex flex-col flex-1 min-w-[250px] group">
              <div className="p-[6px] rounded-lg bg-transparent border border-zinc-700 text-zinc-300 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all group-hover:border-zinc-500">
                <Dropdown
                  items={maritalStatusOptions}
                  placeholder="Marital Status"
                  onSelect={(item) => handleChange("maritalStatus", item.value)}
                />
              </div>
              <label className="text-xs text-zinc-500 mt-2 text-right group-hover:text-zinc-300">
                Gender
              </label>
            </div>

            <div className="flex flex-col flex-1 min-w-[250px] group">
              <div className="p-[6px] rounded-lg bg-transparent border border-zinc-700 text-zinc-300 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all group-hover:border-zinc-500">
                <Dropdown
                  items={nationalities}
                  placeholder="Select Nationality"
                  onSelect={(item) => handleChange("nationality", item.value)}
                />
              </div>
              <label className="text-xs text-zinc-500 mt-2 text-right group-hover:text-zinc-300">
                Nationality
              </label>
            </div>
          </div>
        </div>

        <div className="border border-zinc-700 rounded-2xl p-8 shadow-lg bg-gradient-to-b from-zinc-900 to-zinc-950 hover:shadow-purple-500/10 transition-all duration-300">
          <h1 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Contact & Address Information
          </h1>
          <p className="text-sm text-zinc-400 mb-5">
            Provide your contact details and current address.
          </p>

          <div className="flex flex-wrap gap-2">
            <label className="w-full text-zinc-300 font-medium">Contact</label>

            <div className="flex flex-col flex-1 min-w-[300px] group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="border border-zinc-700 bg-transparent rounded-lg px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all group-hover:border-zinc-500"
              />
              <label className="text-xs text-zinc-500 mt-2 text-right group-hover:text-zinc-300">
                Email
              </label>
            </div>

            <div className="flex flex-col flex-1 min-w-[300px] group">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="border border-zinc-700 bg-transparent rounded-lg px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all group-hover:border-zinc-500"
              />
              <label className="text-xs text-zinc-500 mt-2 text-right group-hover:text-zinc-300">
                Phone No.
              </label>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <label className="w-full text-zinc-300 font-medium">Address</label>

            <div className="flex flex-col flex-1 min-w-[300px] group">
              <input
                type="text"
                name="address1"
                value={formData.address1}
                onChange={(e) => handleChange("address1", e.target.value)}
                className="border border-zinc-700 bg-transparent rounded-lg px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all group-hover:border-zinc-500"
              />
              <label className="text-xs text-zinc-500 mt-2 text-right group-hover:text-zinc-300">
                Address 1
              </label>
            </div>

            <div className="flex flex-col flex-1 min-w-[300px] group">
              <input
                type="text"
                name="address2"
                value={formData.address2}
                onChange={(e) => handleChange("address2", e.target.value)}
                className="border border-zinc-700 bg-transparent rounded-lg px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all group-hover:border-zinc-500"
              />
              <label className="text-xs text-zinc-500 mt-2 text-right group-hover:text-zinc-300">
                Address 2
              </label>
            </div>

            <div className="flex flex-col flex-1 min-w-[300px] group">
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={(e) => handleChange("state", e.target.value)}
                className="border border-zinc-700 bg-transparent rounded-lg px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all group-hover:border-zinc-500"
              />
              <label className="text-xs text-zinc-500 mt-2 text-right group-hover:text-zinc-300">
                State
              </label>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-5">
            <div className="flex flex-col flex-1 min-w-[300px] max-w-[465px] group">
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={(e) => handleChange("city", e.target.value)}
                className="border border-zinc-700 bg-transparent rounded-lg px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all group-hover:border-zinc-500"
              />
              <label className="text-xs text-zinc-500 mt-2 text-right group-hover:text-zinc-300">
                City
              </label>
            </div>

            <div className="flex flex-col flex-1 min-w-[300px] max-w-[465px] group">
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={(e) => handleChange("pincode", e.target.value)}
                className="border border-zinc-700 bg-transparent rounded-lg px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all group-hover:border-zinc-500"
              />
              <label className="text-xs text-zinc-500 mt-2 text-right group-hover:text-zinc-300">
                Pincode
              </label>
            </div>
          </div>
        </div>
        <div className="border border-zinc-700 rounded-2xl p-8 shadow-lg bg-gradient-to-b from-zinc-900 to-zinc-950 hover:shadow-purple-500/10 transition-all duration-300">
          <h1 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Employment Details
          </h1>
          <p className="text-sm text-zinc-400 mb-6">
            Provide your employment details for company records.
          </p>

          <div className="flex flex-wrap gap-3 mb-5">
            <div className="w-full flex gap-4">
              <div className="flex flex-col flex-1 min-w-[250px] group">
                <input
                  type="date"
                  name="employmentStartDate"
                  value={formData.employmentStartDate}
                  onChange={(e) =>
                    handleChange("employmentStartDate", e.target.value)
                  }
                  className="border border-zinc-700 bg-transparent rounded-lg px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all group-hover:border-zinc-500"
                />

                {/* for white logo */}
                <style jsx>{`
                  input[type="date"]::-webkit-calendar-picker-indicator {
                    filter: invert(1);
                    cursor: pointer;
                  }
                `}</style>
                <label className="text-xs text-zinc-500 mt-2 text-right group-hover:text-zinc-300">
                  Employment Start Date
                </label>
              </div>

              <div className="flex flex-col flex-1 min-w-[250px] group">
                <div className="p-[6px] rounded-lg bg-transparent border border-zinc-700 text-zinc-300 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all group-hover:border-zinc-500">
                  <Dropdown
                    placeholder="Select Employement Type"
                    items={employmentTypes}
                    onSelect={(item) =>
                      handleChange("employmentType", item.value)
                    }
                  />
                </div>
                <label className="text-xs text-zinc-500 mt-2 text-right group-hover:text-zinc-300">
                  Employment Type
                </label>
              </div>

              <div className="flex flex-col flex-1 min-w-[250px] group">
                <div className="p-[6px] rounded-lg bg-transparent border border-zinc-700 text-zinc-300 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all group-hover:border-zinc-500">
                  <Dropdown
                    items={jobTitles}
                    onSelect={(item) => handleChange("jobTitle", item.value)}
                    placeholder="Select Job Title"
                  />
                </div>
                <label className="text-xs text-zinc-500 mt-2 text-right group-hover:text-zinc-300">
                  Job Title
                </label>
              </div>
            </div>

            <div className="w-full flex gap-4 mt-3">
              <div className="flex flex-col flex-1 min-w-[250px] group">
                <div className="p-[6px] rounded-lg bg-transparent border border-zinc-700 text-zinc-300 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all group-hover:border-zinc-500">
                  <Dropdown
                    items={departments}
                    onSelect={(item) => handleChange("department", item.value)}
                    placeholder="Select Department"
                  />
                </div>
                <label className="text-xs text-zinc-500 mt-2 text-right group-hover:text-zinc-300">
                  Department
                </label>
              </div>

              <div className="flex flex-col flex-1 min-w-[250px] group">
                <div className="p-[6px] rounded-lg bg-transparent border border-zinc-700 text-zinc-300 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all group-hover:border-zinc-500">
                  <Dropdown
                    items={reportingManagers}
                    onSelect={(item) =>
                      handleChange("reportingManager", item.value)
                    }
                    placeholder="Select Reporting Manager"
                  />
                </div>
                <label className="text-xs text-zinc-500 mt-2 text-right group-hover:text-zinc-300">
                  Reporting Manager
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-5 mb-20">
          <button
            onClick={handleShowForm}
            className="px-6 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 transition-all"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white shadow-lg transition-all"
          >
            Save Details
          </button>
        </div>
      </div>
    </div>
  );
}
