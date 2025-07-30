// src/components/ResetPassword.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'; // reuse same styles

function ResetPassword() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem(email));
    if (!user) {
      alert("Email not found. Please register.");
      navigate("/register");
    } else {
      user.password = newPassword;
      localStorage.setItem(email, JSON.stringify(user));
      alert("Password updated successfully!");
      navigate("/login");
    }
  };

  return (
    <div className="login-container">
      <h2>Reset Password</h2>
      <form onSubmit={handleReset}>
        <input
          type="email"
          placeholder="Registered Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <button type="submit">Update Password</button>
      </form>
      <p>
        <span className="link-text" onClick={() => navigate("/login")}>
          Back to Login
        </span>
      </p>
    </div>
  );
}

export default ResetPassword;
