"use client";
import { useState } from "react";

export default function UploadReport() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/uploadReport", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    if (data.success) {
      setMessage("File uploaded successfully!");
    } else {
      setMessage("Error uploading file.");
    }
  };

  return (
    <div className="p-4">
      <input
        type="file"
        accept=".csv"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4"
      />
      <button
        onClick={handleFileUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Upload
      </button>
      {message && <p className="mt-2">{message}</p>}
    </div>
  );
}
