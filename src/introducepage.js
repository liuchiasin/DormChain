import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { motion } from 'framer-motion';
import './IntroducePage.css';

function IntroducePage() {  // 改為大寫字母開頭
  const navigate = useNavigate();  

  return (
    <div className="introduce-container">
        <h1 className="house-title">STUDENT DORMITORY</h1>

      <motion.button 
        className="back-btn" 
        onClick={() => navigate("/")}  // 點擊返回主頁
        whileHover={{ scale: 1.1 }}  // Hover 效果
      >
        Back to Home
      </motion.button>
    </div>
  );
}

export default IntroducePage;  // 確保導出的是正確的名稱
