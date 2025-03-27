import React from 'react';
import { useNavigate } from "react-router-dom";
import "./HousePage.css";


const tokenImage = '/token.png';

const houseData = [
  {
    id: 1,
    title: 'C305 女宿雅致套房',
    category: 'TOKEN',
    tokens: 5,
    image: '/精緻套房.png',
    badge: 'Popular',
    badgeColor: 'pink'
  },
  {
    id: 2,
    title: 'D408 女宿冷氣雅房',
    category: 'TOKEN',
    tokens: 3,
    image: '/dormitory2.jpg',
    badge: 'Latest House',
    badgeColor: 'blue'
  },
  {
    id: 3,
    title: 'A210 男宿冷氣雅房',
    category: 'TOKEN',
    tokens: 6,
    image: '/dormitory3.jpg',
    badge: 'High Floor',
    badgeColor: 'green'
  },
  {
    id: 4,
    title: 'B101 男宿雅致套房',
    category: 'TOKEN',
    tokens: 4,
    image: '/dormitory4.jpg',
    badge: 'Popular',
    badgeColor: 'pink'
  }
];

function HousePage() {
  const navigate = useNavigate();

  return (
    <div className="house-page">
      <div className="house-header">
        <h1 className="house-title">STUDENT DOMITORY</h1>
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
          <div key={house.id} className="house-card">
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
          </div>
        ))}
      </div>
      <button className="back-btn" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
}

export default HousePage;