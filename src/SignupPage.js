import React from "react";
import { useNavigate } from "react-router-dom";  
import "./SignupPage.css";



function SignupPage() {
  const navigate = useNavigate();  //返回首頁

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
          <button className="signup-btn">LOG IN</button>
        </div>

        <div className="signup-box">
          <h2>REGISTER</h2>
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" />
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" />
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
          <button className="signup-btn">REGISTER</button>
        </div>
      </div>

      <div className="image-section">
      <img src="account.png" alt="Decorative" className="bottomimage" />
      </div>

      <button className="back-btn" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>   
  );
}

export default SignupPage;
