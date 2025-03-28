import React from "react";
import { useNavigate } from "react-router-dom";  
import { motion } from "framer-motion";  
import "./AboutusPage.css";

function AboutusPage() {
  const navigate = useNavigate();  

  return (
    <div className="aboutus-container">
      <h1 className="title">ABOUT US</h1>
      <div className="aboutus-content">
        {/* 左邊：圖片 */}
        <div className="aboutus-image">
          <img src="/aboutus_house.png" alt="DormChain Illustration" />
        </div>

        {/* 右邊：文字區塊 */}
        <div className="aboutus-text">
          <h2 className="brand-name">DormChain</h2>
          <p>
            是一個以學生宿舍作為投資標的的不動產代幣化平台，透過區塊鏈技術將傳統房地產數位化，
            讓投資變得更加靈活與透明。我們的目標是打破傳統房地產投資的高門檻，
            讓中小企業及一般投資者能以更低的資本參與市場，創造更多財務成長的機會。
          </p>

          {/* 優缺點區塊 */}
          <div className="advantages-disadvantages">
            {/* 左邊：優點 */}
            <ul className="advantages">
              <li><img src="/check.png" alt="check" className="icon" /> 資金活用</li>
              <li><img src="/check.png" alt="check" className="icon" /> 門檻低</li>
              <li><img src="/check.png" alt="check" className="icon" /> 安全及透明</li>            
            </ul>

            {/* 右邊：缺點 */}
            <ul className="disadvantages">
              <li><img src="/x.png" alt="x" className="icon" /> 高額資金</li>
              <li><img src="/x.png" alt="x" className="icon" /> 用戶侷限</li>
              <li><img src="/x.png" alt="x" className="icon" /> 繁瑣流程</li>
            </ul>
          </div>
        </div>

        <div className="aboutusimage">
          <img src="/aboutus2.png" alt="Middle Layer Illustration" className="middle-image" />
        </div>
      </div>

      {/* 加上 hover 動畫的返回按鈕 */}
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

export default AboutusPage;
