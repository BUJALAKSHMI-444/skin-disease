// src/components/ResultPage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./ResultPage.css";

function ResultPage() {
  const navigate = useNavigate();

  // For now, hardcoding the prediction — replace with actual data later
  const predictedDisease = "Eczema"; 

  const handleRetry = () => {
    navigate("/upload");
  };

  return (
    <div className="result-page">
      <div className="result-card">
        <h2>Prediction Result</h2>
        <p className="disease-name">{predictedDisease}</p>
        <button onClick={handleRetry}>Try Another Image</button>
      </div>
    </div>
  );
}

export default ResultPage;
