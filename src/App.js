import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./App.css";
import SignupPage from "./SignupPage";
import AboutusPage from "./AboutusPage.js";
import HousePage from "./HousePage.js";

function HomePage() {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/start");
  };

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-buttons">
          <Link to="/aboutus">
            <motion.button 
              className="nav-btn" 
              whileHover={{ scale: 1.1 }}
            >
              About us
            </motion.button>
          </Link>
          <Link to="/signup">
            <motion.button 
              className="nav-btn" 
              whileHover={{ scale: 1.1 }}
            >
              Sign Up
            </motion.button>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="content">
        {/* Left Content */}
        <div className="text-section">
          <h1 className="title">
            STUDENT DORMITORY <br /> BLOCKCHAIN
          </h1>
          <div className="search-box">
            <motion.button 
              className="search-btn" 
              onClick={handleStartClick}
              whileHover={{ scale: 1.1 }}
            >
              Start
            </motion.button>
          </div>
        </div>
        {/* Right Image */}
        <div className="image-section">
          <img src="/封面照.png" alt="Dormitory Illustration" className="dorm-image" />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/aboutus" element={<AboutusPage />} />
        <Route path="/start" element={<HousePage />} />
      </Routes>
    </Router>
  );
}

export default App;
