// src/components/Navbar.js
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("loggedInUser");

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo">DermaDetect</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/" state={{ scrollTo: "howitworks" }}>How It Works</Link></li>
        <li><Link to="/" state={{ scrollTo: "features" }}>Features</Link></li>
        <li><Link to="/" state={{ scrollTo: "faq" }}>FAQ</Link></li>
        
        {!isLoggedIn ? (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        ) : (
          <li>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
