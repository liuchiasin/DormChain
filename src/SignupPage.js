import React from "react";
import { useNavigate } from "react-router-dom";  
import { motion } from "framer-motion";  
import "./SignupPage.css";

function SignupPage() {
  const navigate = useNavigate();  

  return (
    <div className="my-account-container">
      <h1 className="title">MY ACCOUNT</h1>
      <div className="signup-content">
        <div className="signup-box">
          <h2>LOGIN</h2>
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" />
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
          <motion.button 
            className="signup-btn"
            whileHover={{ scale: 1.1 }}
          >
            LOG IN
          </motion.button>
        </div>

        <div className="signup-box">
          <h2>REGISTER</h2>
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" />
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" />
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
          <motion.button 
            className="signup-btn"
            whileHover={{ scale: 1.1 }}
          >
            REGISTER
          </motion.button>
        </div>
      </div>

      <div className="image-section">
        <img src="account.png" alt="Decorative" className="bottomimage" />
      </div>

      <motion.button 
        className="back-btn" 
        onClick={() => navigate("/")}
        whileHover={{ scale: 1.1 }}
      >
        Back to Home
      </motion.button>
    </div>   
  );
}

export default SignupPage;
