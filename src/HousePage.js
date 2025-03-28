import React from 'react';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./HousePage.css";

const tokenImage = '/token.png';

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
    badge: 'High Floor',
    badgeColor: 'green'
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
  }
];

function HousePage() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ y: "100vh", opacity: 0 }}  // 初始位置在畫面下方
      animate={{ y: 0, opacity: 1 }}       // 動畫：往上移進入畫面
      transition={{ duration: 0.8, ease: "easeOut" }}  
      className="house-page"
    >
      <div className="house-header">
        <h1 className="house-title">STUDENT DORMITORY</h1>
        <div className="house-actions">
          <button onClick={() => navigate("/")} className="house-action-btn">
            ⌂
          </button>
          <button onClick={() => navigate("/")} className="house-action-btn">
            ←
          </button>
        </div>
      </div>

      <div className="house-grid">
        {houseData.map((house) => (
          <motion.div
            key={house.id}
            className="house-card"
            whileHover={{ scale: 1.05 }}
          >
            <div className={`house-badge house-badge-${house.badgeColor}`}>
              {house.badge}
            </div>
            <img 
              src={house.image} 
              alt={house.title} 
              className="house-image" 
            />
            <div className="house-card-content">
              <h2 className="house-card-title">{house.title}</h2>
              {/* 顯示價格 */}
              <p className="house-card-price">{house.price}</p> 
              <div className="house-card-footer">
                <div className="house-tokens">
                  {[...Array(house.tokens)].map((_, index) => (
                    <img 
                      key={index} 
                      src={tokenImage} 
                      alt="Token" 
                      className="token-image" 
                    />
                  ))}
                </div>
                <span className="house-category">{house.category}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.button 
        className="back-btn" 
        onClick={() => navigate("/")}
        whileHover={{ scale: 1.1 }}
      >
        Back to Home
      </motion.button>
    </motion.div>
  );
}

export default HousePage;
