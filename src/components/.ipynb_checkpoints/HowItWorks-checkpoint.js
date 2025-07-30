// src/components/HowItWorks.js
import React from "react";
import { useNavigate } from "react-router-dom";
import './HowItWorks.css';

function HowItWorks() {
  const navigate = useNavigate();

  return (
    <section className="howitworks" id="howitworks">
      <h2>How DermaDetect Works</h2>
      <p className="subtitle">Just 3 easy steps to get your skin condition analyzed</p>

      <div className="steps">
        <div className="step-card">
          
          <h3>Step 1</h3>
          <p><strong>Upload a Photo</strong><br />Choose a clear image of the affected skin area.</p>
        </div>
        <div className="step-card">
          
          <h3>Step 2</h3>
          <p><strong>AI Scans It</strong><br />Our trained deep learning model analyses the image.</p>
        </div>
        <div className="step-card">
          
          <h3>Step 3</h3>
          <p><strong>Get Result</strong><br />You receive prediction within seconds.</p>
        </div>
      </div>

      <button className="try-now-btn" onClick={() => navigate("/upload")}>Try Now</button>
    </section>
  );
}

export default HowItWorks;
