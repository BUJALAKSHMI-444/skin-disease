// src/components/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || {};
    const storedPassword = users[email];

    if (!storedPassword) {
      alert("Account not found. Please register.");
      navigate("/register");
    } else if (storedPassword !== password) {
      alert("Mail ID and password doesn't match.");
    } else {
      alert("Login successful!");
      localStorage.setItem("loggedInUser", email);
      navigate("/");
    }
  };

  return (
    <div className="login-container">
      <h2>Welcome Back</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>
        <span className="link-text" onClick={() => navigate("/reset-password")}>
          Forgot Password?
        </span>
      </p>
      <p>
        Don't have an account?{" "}
        <span className="link-text" onClick={() => navigate("/register")}>
          Register here
        </span>
      </p>
    </div>
  );
}

export default Login;
