import React from "react";
import { useNavigate } from "react-router-dom";  
import "./AboutusPage.css";

function AboutusPage() {
  const navigate = useNavigate();  //返回首頁
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
            是一間以學生宿舍作為不動產代幣化平台，透過資產代幣化，
            使中小企業或一般投資族群能夠以較低門檻進行投資活動，大幅提升資產流動率及投資意願。
          </p>

           {/* 優缺點區塊 */}
           <div className="advantages-disadvantages">
            {/* 左邊：優點 ✅ */}
            <ul className="advantages">
            <li><img src="/check.png" alt="check" className="icon" /> 資金活用</li>
            <li><img src="/check.png" alt="check" className="icon" /> 門檻低</li>
            <li><img src="/check.png" alt="check" className="icon" /> 安全及透明</li>            
          </ul>

            {/* 右邊：缺點 ❌ */}
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
      <button className="back-btn" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>


  );
}

export default AboutusPage;
