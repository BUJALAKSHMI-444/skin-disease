// src/components/ResultPage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./ResultPage.css";

function ResultPage() {
  const navigate = useNavigate();

  const result = {
    disease: "Eczema",
    confidence: "91.3%",
    suggestion: "Apply moisturizing cream regularly and avoid irritants. Consult a dermatologist."
  };

  const handleUploadAgain = () => {
    navigate("/upload");
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="result-page">
      <h2>Prediction Result</h2>
      <div className="result-card">
        <h3>{result.disease}</h3>
        <p><strong>Confidence:</strong> {result.confidence}</p>
        <p><strong>Suggestion:</strong> {result.suggestion}</p>
      </div>
      <div className="result-buttons">
        <button onClick={handleUploadAgain}>Upload Another</button>
        <button onClick={handleGoHome} className="secondary">Back to Home</button>
      </div>
    </div>
  );
}

export default ResultPage;
