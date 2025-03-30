import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { motion } from 'framer-motion';
import './IntroducePage.css';

const houseData = [
  {
    id: 1,
    title: 'C305 女宿雅致套房',
    price: '$35,000',
    category: 'TOKEN',
    tokens: 5,
    image: '/精緻套房.png',
    badge: 'Popular',
    badgeColor: 'pink'
  },
  {
    id: 2,
    title: 'D408 女宿冷氣雅房',
    price: '$28,000',
    category: 'TOKEN',
    tokens: 3,
    image: '/冷氣雅房.png',
    badge: 'Latest House',
    badgeColor: 'blue'
  },
  {
    id: 3,
    title: 'A210 男宿冷氣雅房',
    price: '$30,000',
    category: 'TOKEN',
    tokens: 6,
    image: '/男冷氣雅房.png',
  },
  {
    id: 4,
    title: 'B101 男宿雅致套房',
    price: '$33,000',
    category: 'TOKEN',
    tokens: 4,
    image: '/男精緻套房.png',
    badge: 'Popular',
    badgeColor: 'pink'
  },
  {
    id: 5,
    title: 'A101 男宿雅致套房',
    price: '$30,000',
    category: 'TOKEN',
    tokens: 3,
    image: '/house.png',
  },
  {
    id: 6,
    title: 'E301 女宿冷氣雅房',
    price: '$29,000',
    category: 'TOKEN',
    tokens: 3,
    image: '/house1.png',
    badge: 'Popular',
    badgeColor: 'pink'
  },
  {
    id: 7,
    title: 'E507 女宿冷氣雅房',
    price: '$29,000',
    category: 'TOKEN',
    tokens: 3,
    image: '/house2.png',
    badge: 'High Floor',
    badgeColor: 'green'
  },
  {
    id: 8,
    title: 'C306 女宿冷氣套房',
    price: '$32,000',
    category: 'TOKEN',
    tokens: 5,
    image: '/house3.png',
    badge: 'Latest House',
    badgeColor: 'blue'
  }
];

function IntroducePage() {  // 改為大寫字母開頭
  const navigate = useNavigate(); 

  return (
    <div className="introduce-container">
        <h1 className="house-title">STUDENT DORMITORY</h1>
        <h2 className="titleB">READY TO SELL!</h2>

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
