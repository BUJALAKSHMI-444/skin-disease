// src/components/Register.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Register.css';

function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || {};

    if (users[email]) {
      alert("You already have an account, just login.");
      navigate("/login");
    } else {
      users[email] = password;
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("loggedInUser", email); // Set user as logged in
      alert("Registered successfully!");
      navigate("/");
    }
  };

  return (
    <div className="register-container">
      <h2>Create an Account</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
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
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account?{" "}
        <span className="link-text" onClick={() => navigate("/login")}>
          Login here
        </span>
      </p>
    </div>
  );
}

export default Register;
