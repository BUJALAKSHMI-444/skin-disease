// src/components/UploadPage.js
import React, { useState, useEffect } from "react";
import "./UploadPage.css";
import { useNavigate } from "react-router-dom";

function UploadPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

 useEffect(() => {
  const loggedInUser = localStorage.getItem("loggedInUser");
  const users = JSON.parse(localStorage.getItem("users")) || {};

  if (!loggedInUser) {
    const registered = Object.keys(users).length > 0;
    if (registered) {
      alert("Please login to upload.");
      navigate("/login");
    } else {
      alert("Please register to upload.");
      navigate("/register");
    }
  }
}, [navigate]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handleResult = () => {
    if (!selectedFile) return alert("Please select a file first.");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/result");
    }, 2000);
  };

  return (
    <div className="upload-container" id="upload-section">
      <div className="upload-box">
        <h2>Upload Photo</h2>

        {preview && (
          <div className="image-preview">
            <img src={preview} alt="Selected skin" />
          </div>
        )}

        <div className="input-group">
          <input type="file" accept="image/*" onChange={handleFileChange} />
          {selectedFile && (
            <p className="filename">Selected: {selectedFile.name}</p>
          )}
        </div>

        <button
          className="upload-btn"
          onClick={handleResult}
          disabled={loading}
        >
          {loading ? "Processing..." : "Get Result"}
        </button>
      </div>
    </div>
  );
}

export default UploadPage;
