// src/components/Footer.js
import React from "react";
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} DermaDetect. All rights reserved.</p>
      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#howitworks">How it Works</a>
        <a href="#faq">FAQ</a>
        <a href="mailto:contact@dermadetect.com">Contact</a>
      </div>
    </footer>
  );
}

export default Footer;
