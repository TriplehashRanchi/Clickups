"use client";

import { useState, useEffect, useMemo } from "react";
import { supabase } from "@/lib/supabaseClient";
import Swal from "sweetalert2";
import Image from "next/image";
import { Camera, X } from "lucide-react";

export default function EmployeeProfilePage() {
  const [profile, setProfile] = useState({});
  const [userId, setUserId] = useState(null);
  const [activeTab, setActiveTab] = useState("personal");
  const [showEditModal, setShowEditModal] = useState(false);
  const [photoUrl, setPhotoUrl] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function loadProfile() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      setUserId(user.id);

      const { data, error } = await supabase
        .from("user_profiles")
        .select("*")
        .eq("user_id", user.id)
        .single();

      if (error) Swal.fire("Error", "Failed to load profile", "error");
      else setProfile(data || {});
    }
    loadProfile();
  }, []);

  const completionPercent = useMemo(() => {
    const required = [
      "first_name",
      "last_name",
      "dob",
      "gender",
      "phone",
      "address1",
      "city",
      "state",
      "pincode",
      "employment_start_date",
      "job_title",
      "department",
    ];
    const filled = required.filter((f) => profile[f]);
    return Math.round((filled.length / required.length) * 100);
  }, [profile]);

  const handleSave = async () => {
    setSaving(true);
    const { error } = await supabase
      .from("user_profiles")
      .update(profile)
      .eq("user_id", userId);

    setSaving(false);
    if (error) Swal.fire("Error", error.message, "error");
    else {
      Swal.fire("Success", "Profile updated successfully!", "success");
      setShowEditModal(false);
    }
  };

  const InfoRow = ({ label, value }) => (
    <div className="flex flex-col">
      <span className="text-gray-400 text-xs uppercase tracking-wide">
        {label}
      </span>
      <span className="text-gray-100 font-medium">{value || "—"}</span>
    </div>
  );

  const Tab = ({ id, label }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`px-4 py-2 rounded-md font-medium transition ${
        activeTab === id
          ? "bg-purple-600 text-white"
          : "text-gray-400 hover:bg-gray-800"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-[#0f1117] text-gray-100">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-purple-700/30 to-purple-400/10 border-b border-gray-700 p-8 flex flex-col sm:flex-row sm:items-end sm:justify-between">
        <div className="flex items-center gap-6">
          <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-purple-600 shadow-lg">
            <Image
              src={photoUrl || "/default-avatar.png"}
              alt="Profile"
              width={112}
              height={112}
              className="object-cover w-full h-full"
            />
            <button className="absolute bottom-2 right-2 bg-purple-600 p-1.5 rounded-full hover:bg-purple-700">
              <Camera size={14} />
            </button>
          </div>

          <div>
            <h1 className="text-2xl font-bold text-white">
              {profile.first_name || ""} {profile.last_name || ""}
            </h1>
            <p className="text-purple-400 text-sm font-medium">
              {profile.job_title || "Employee"} · {profile.department || "—"}
            </p>
            <p className="text-gray-400 text-xs mt-1">
              Joined:{" "}
              {profile.employment_start_date
                ? new Date(profile.employment_start_date).toDateString()
                : "—"}
            </p>
          </div>
        </div>

        <div className="mt-4 sm:mt-0">
          <button
            onClick={() => setShowEditModal(true)}
            className="px-5 py-2 rounded-lg font-semibold bg-purple-600 hover:bg-purple-700 text-white"
          >
            Edit Profile
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="px-8 py-3 flex items-center justify-between border-b border-gray-800">
        <div className="text-sm text-gray-400">
          Profile Completion:{" "}
          <span className="text-purple-400 font-semibold">
            {completionPercent}%
          </span>
        </div>
        <div className="w-1/3 h-2 bg-gray-800 rounded-full">
          <div
            className="h-2 bg-purple-600 rounded-full"
            style={{ width: `${completionPercent}%` }}
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 px-8 py-4 border-b border-gray-800">
        <Tab id="personal" label="Personal Info" />
        <Tab id="employment" label="Employment Info" />
        <Tab id="documents" label="Documents" />
      </div>

      {/* Tab Content */}
      <div className="max-w-5xl mx-auto px-8 py-6 space-y-8">
        {activeTab === "personal" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <InfoRow label="First Name" value={profile.first_name} />
            <InfoRow label="Last Name" value={profile.last_name} />
            <InfoRow label="Gender" value={profile.gender} />
            <InfoRow label="Date of Birth" value={profile.dob} />
            <InfoRow label="Phone" value={profile.phone} />
            <InfoRow label="Address" value={profile.address1} />
            <InfoRow label="City" value={profile.city} />
            <InfoRow label="State" value={profile.state} />
            <InfoRow label="Pincode" value={profile.pincode} />
          </div>
        )}

        {activeTab === "employment" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <InfoRow label="Job Title" value={profile.job_title} />
            <InfoRow label="Department" value={profile.department} />
            <InfoRow label="Employment Type" value={profile.employment_type} />
            <InfoRow
              label="Start Date"
              value={profile.employment_start_date}
            />
            <InfoRow
              label="Reporting Manager"
              value={profile.reporting_manager}
            />
          </div>
        )}

        {activeTab === "documents" && (
          <div className="text-gray-400">
            <p className="text-sm">Upload your official documents here.</p>
            <div className="border border-dashed border-gray-600 p-6 mt-4 rounded-lg text-center">
              📁 Document upload coming soon.
            </div>
          </div>
        )}
      </div>

      {/* ===== EDIT MODAL ===== */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-[#181b25] border border-gray-700 rounded-xl p-6 w-full max-w-2xl shadow-2xl relative">
            <button
              onClick={() => setShowEditModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              <X size={18} />
            </button>
            <h2 className="text-xl font-semibold text-white mb-4">
              Edit Profile
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto pr-2">
              {[
                ["First Name", "first_name"],
                ["Last Name", "last_name"],
                ["Gender", "gender"],
                ["Date of Birth", "dob", "date"],
                ["Phone", "phone"],
                ["Address", "address1"],
                ["City", "city"],
                ["State", "state"],
                ["Pincode", "pincode"],
              ].map(([label, key, type]) => (
                <div key={key}>
                  <label className="text-sm text-gray-400">{label}</label>
                  <input
                    type={type || "text"}
                    value={profile[key] || ""}
                    onChange={(e) =>
                      setProfile((prev) => ({
                        ...prev,
                        [key]: e.target.value,
                      }))
                    }
                    className="w-full px-3 py-2 mt-1 rounded-md bg-[#12141b] border border-gray-700 text-gray-200"
                  />
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={handleSave}
                disabled={saving}
                className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg text-white font-semibold"
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
