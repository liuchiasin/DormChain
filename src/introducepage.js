import React, { useState } from 'react';
import houseData from "./houseData";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./introducepage.css";

function introducepage(){
    const navigate = useNavigate();  

return(
    <div className="introduce-container">
      <h1 className="introduce-title">STUDENT DORMITORY</h1>




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

export default introducepage;