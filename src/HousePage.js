import React, { useState } from 'react';
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

function HousePage() {
  const [sortedHouseData, setSortedHouseData] = useState(houseData);
  const navigate = useNavigate();

  // 排序 function
  const sortByFloor = () => {
    const sortedData = [...houseData].sort((a, b) => {
      const floorA = a.title.match(/\d+/)[0];  // 抽取數字
      const floorB = b.title.match(/\d+/)[0];  // 抽取數字
      return parseInt(floorA) - parseInt(floorB); // 根據數字排序
    });
    setSortedHouseData(sortedData);
  };

  //排序building
  const building = () => {
    const sortedData = [...houseData].sort((a, b) => {
      const titleA = a.title;
      const titleB = b.title;
  
      // 這裡依照字母數字順序來排序
      if (titleA < titleB) return -1;
      if (titleA > titleB) return 1;
      return 0;
    });
    setSortedHouseData(sortedData);
  };

  // 篩選 "Popular" 標籤的項目
  const showPopularHouses = () => {
  const popularHouses = houseData.filter(house => house.badge === 'Popular');
  setSortedHouseData(popularHouses); };

  const latestHouses = () => {
    const latestHouses = houseData.filter(house => house.badge === 'Latest House');
    setSortedHouseData(latestHouses); };

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
          <button onClick={sortByFloor} className="house-action-btn">
          <img src="/樓層.png" alt="樓層" className="icon" /> 
          樓層
          </button>
          <button onClick={building} className="house-action-btn">
          <img src="/分棟.png" alt="分棟" className="icon" /> 
            分棟
          </button>
          <button onClick={showPopularHouses} className="house-action-btn">
          <img src="/熱門排行.png" alt="熱門排行" className="icon" />
            熱門排行
          </button>
          <button onClick={latestHouses} className="house-action-btn">
          <img src="/最新上傳.png" alt="最新上傳" className="icon" />
            最新上架
          </button>
        </div>
      </div>

      <div className="house-grid">
        {sortedHouseData.map((house) => (
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
        className="back-btn1" 
        onClick={() => navigate("/")}
        whileHover={{ scale: 1.1 }}
      >
        Back to Home
      </motion.button>
    </motion.div>
  );
}

export default HousePage;
