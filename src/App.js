import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import SignupPage from "./SignupPage";  
import AboutusPage from "./AboutusPage";



function HomePage() {
  return (
    <div className="container" >   
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-buttons">
        <Link to="/aboutus">
          <button className="nav-btn">About us</button>
          </Link>
          <Link to="/signup">
          <button className="nav-btn">Sign Up</button>
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
            <button className="search-btn">Start</button>
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
      </Routes>
    </Router>
  );
}

export default App;




