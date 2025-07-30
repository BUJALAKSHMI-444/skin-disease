import React from "react";
import './Features.css';
import uploadImg from "../assets/smart.png";
import upload from "../assets/simple.png";
import uploadIm from "../assets/access.png";
import uploadI from "../assets/afford.png";
function Features() {
  return (
    <div className="features-section">
      <h2>Why is DermaDetect worth using?</h2>
      <div className="features-container">
        <div className="feature-card">
          <img src={uploadImg} alt="Smart" className="home-image" />
          <h3>Smart</h3>
          <p>
            DermaDetect uses Artificial Intelligence to assist with early skin disease detection.
            It analyzes skin images and provides predictions based on trained medical image data, helping users take the next step              toward proper care.
          </p>
        </div>
        <div className="feature-card">
          <img src={upload} alt="Simple" className="home-image" />
          <h3>Simple</h3>
          <p>
            Upload your disease affected aSkin area and
            within few seconds you will find out if there is cause for concern.
          </p>
        </div>
        <div className="feature-card">
          <img src={uploadIm} alt="Access" className="home-image"/>
          <h3>Accessible</h3>
          <p>
            DermaDetect is available anytime, anywhere. Keep your health in
            check at your fingertips even when you are on the go.
          </p>
        </div>
        <div className="feature-card">
          <img src={uploadI} alt="Afford" className="home-image" />
          <h3>Affordable</h3>
          <p>
            Unlike Dermatologists,DeramDetect is entirely free and needs no Subscriptions to detect the Skin disease.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
