"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Swal from "sweetalert2";

export default function UploadWidget({ ownerType = "user", onUploadComplete }) {
  const [uploading, setUploading] = useState(false);

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      // ✅ 1. Get logged-in user
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) throw new Error("You must be logged in to upload.");

      // ✅ 2. Upload to Storage
      const filePath = `${user.id}/${Date.now()}-${file.name}`;
      const { error: uploadError } = await supabase.storage
        .from("documents")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // ✅ 3. Get public URL
      const { data: urlData } = supabase.storage
        .from("documents")
        .getPublicUrl(filePath);

      const fileUrl = urlData.publicUrl;

      // ✅ 4. Insert into documents table
      const { error: dbError } = await supabase.from("documents").insert({
        owner_type: ownerType,
        owner_id: user.id,
        file_name: file.name,
        file_url: fileUrl,
        mime_type: file.type,
        size: file.size,
        uploaded_by: user.id,
      });

      if (dbError) throw dbError;

      // ✅ 5. Update user_profiles.photo_url if it's a profile photo
      if (ownerType === "profile_photo") {
        const { error: updateError } = await supabase
          .from("user_profiles")
          .update({ photo_url: fileUrl })
          .eq("user_id", user.id);

        if (updateError) throw updateError;
      }

      Swal.fire({
        icon: "success",
        title: "Upload successful 🎉",
        timer: 1500,
        showConfirmButton: false,
      });

      if (onUploadComplete) onUploadComplete(fileUrl);
    } catch (err) {
      console.error("Upload failed:", err.message);
      Swal.fire("Upload Failed", err.message, "error");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="bg-[#181b25] border border-gray-700 p-6 rounded-xl text-center text-white">
      <label className="block mb-3 font-medium">Upload Profile Photo</label>
      <input
        type="file"
        onChange={handleFileUpload}
        disabled={uploading}
        className="text-sm cursor-pointer bg-gray-800 rounded-md px-3 py-2"
      />
      {uploading && <p className="text-gray-400 mt-2 text-sm">Uploading...</p>}
    </div>
  );
}
