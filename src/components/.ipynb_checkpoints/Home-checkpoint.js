// src/components/Home.js
import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Home.css";
import Skin from "../assets/skin-check.jpg";

function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  // 🔽 Smooth scroll to section when coming from Navbar
  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleClick = () => {
    navigate("/upload");
  };

  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <h1>DermaDetect</h1>
        <p>Your AI-powered assistant for early skin disease detection.</p>
        <button onClick={handleClick}>Upload Image</button>
      </div>
      <div className="hero-image">
        <img src={Skin} alt="Simple" className="home-image"  />
      </div>
    </section>
  );
}

export default Home;
