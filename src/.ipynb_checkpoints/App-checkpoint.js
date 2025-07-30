// src/App.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import './App.css';
import ResetPassword from "./components/ResetPassword";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import FAQ from "./components/FAQ";
import UploadPage from "./components/UploadPage";
import ResultPage from "./components/ResultPage";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";

function ScrollHandler() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      navigate(location.pathname, { replace: true, state: null });
    }
  }, [location, navigate]);

  return null;
}

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollHandler />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div id="home"><Home /></div>
              <div id="howitworks"><HowItWorks /></div>
              <div id="features"><Features /></div>
              <div id="faq"><FAQ /></div>
              <Footer />
            </>
          }
        />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
