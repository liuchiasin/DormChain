import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import { motion } from 'framer-motion';
import './IntroducePage.css';

const tokenImage = '/token.png';
const houseDetails = {
  1: {
    title: 'C305 女宿雅致套房',
    detail: [['/bed.png', '4 single bed'],['/bathroom.png', '1 bathroom'],['/airconditioner.png', '1 air conditioner'],['/desk.png', '1 desk']], 
    tokens: 5,
    assetPrice: '$35,000',
    tokenPrice: '$600',
    rentPerToken: '$54/year',
    rentStartDate: '2025.05.01',
    images: ['/雅致套房.png', '/女宿套房2.png','/女宿雅房3.png','/洗手台.png', '/廁所.png'],
  },
  2: {
    title: 'D408 女宿冷氣雅房',
    detail: [['/bed.png', '4 single bed'], ['/bathroom.png', '1 bathroom'],['/airconditioner.png', '1 air conditioner'],['/desk.png', '4 desk']], 
    tokens: 3,
    assetPrice: '$28,000',
    tokenPrice: '$560',
    rentPerToken: '$48/year',
    rentStartDate: '2025.05.10',
    images: ['/冷氣雅房.png', '/女宿雅房2.png','/女宿雅房廁所.png','/洗手台.png', '/廁所.png'],
  },
  3: {
    title: 'A210 男宿冷氣雅房',
    detail: [['/bed.png', '4 single bed'], ['/bathroom.png', '1 bathroom'],['/airconditioner.png', '1 air conditioner'],['/desk.png', '4 desk']], 
    tokens: 6,
    assetPrice: '$30,000',
    tokenPrice: '$580',
    rentPerToken: '$52/year',
    rentStartDate: '2025.05.10',
    images: ['/男冷氣雅房.png', '/男宿房型.png','/男宿雅房2.png', '/男宿洗手台.png', '/廁所.png'],
  },
  4: {
    title: 'A109 男宿雅致套房',
    detail: [['/bed.png', '4 single bed'], ['/bathroom.png', '1 bathroom'],['/airconditioner.png', '1 air conditioner'],['/desk.png', '1 desk']], 
    tokens: 4,
    assetPrice: '$33,000',
    tokenPrice: '$590',
    rentPerToken: '$53.5/year',
    rentStartDate: '2025.05.01',
    images: ['/男精緻套房.png','/男宿套房房型.png','/男宿套房2.png', '/洗手台.png', '/男宿套房廁所.png'],
  },
  5: {
    title: 'A101 男宿雅致套房',
    detail: [['/bed.png', '4 single bed'], ['/bathroom.png', '1 bathroom'],['/airconditioner.png', '1 air conditioner'],['/desk.png', '1 desk']], 
    tokens: 3,
    assetPrice: '$35,000',
    tokenPrice: '$580',
    rentPerToken: '$52/year',
    rentStartDate: '2025.05.10',
    images: ['/男精緻套房.png' ,'/男宿套房房型.png', '/男宿套房2.png', '/洗手台.png', '/男宿套房廁所.png'],
  },
  6: {
    title: 'E301 女宿冷氣雅房',
    detail: [['/bed.png', '4 single bed'], ['/bathroom.png', '1 bathroom'],['/airconditioner.png', '1 air conditioner'],['/desk.png', '4 desk']], 
    tokens: 3,
    assetPrice: '$29,000',
    tokenPrice: '$490',
    rentPerToken: '$46/year',
    rentStartDate: '2025.04.20',
    images: ['/冷氣雅房.png', '/女宿雅房2.png','/女宿雅房廁所.png','/洗手台.png', '/廁所.png'],
  },
  7: {
    title: 'E507 女宿冷氣雅房',
    detail: [['/bed.png', '4 single bed'], ['/bathroom.png', '1 bathroom'],['/airconditioner.png', '1 air conditioner'],['/desk.png', '4 desk']], 
    tokens: 3,
    assetPrice: '$29,000',
    tokenPrice: '$490',
    rentPerToken: '$46/year',
    rentStartDate: '2025.04.20',
    images: ['/冷氣雅房.png', '/女宿雅房2.png','/女宿雅房廁所.png','/洗手台.png', '/廁所.png'],
  },
  8: {
    title: 'C306 女宿冷氣套房',
    detail: [['/bed.png', '4 single bed'], ['/bathroom.png', '1 bathroom'],['/airconditioner.png', '1 air conditioner'],['/desk.png', ' desk']], 
    tokens: 5,
    assetPrice: '$32,000',
    tokenPrice: '$530',
    rentPerToken: '$50/year',
    rentStartDate: '2025.04.10',
    images: ['/精緻套房.png','/女宿套房2.png','/女宿雅房3.png',  '/洗手台.png', '/廁所.png'],
  }
};

function IntroducePage() {  
  const { id } = useParams();
  const navigate = useNavigate(); 
  const house = houseDetails[id] || {};
  const [selectedImage, setSelectedImage] = useState(house.images ? house.images[0] : "");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="introduce-page"
    >
      <div className="introduce-container">
        <h1 className="house-title">STUDENT DORMITORY</h1>
        <h2 className="titleB">------  READY TO SELL!</h2>
      </div>
      <div className="introduce-content">
        <div className="introduce-left">
          <h1>
            <span className="room-code">{house.title.match(/^[A-Za-z0-9]+/)[0]}</span>
            <span> </span>
            <span className="room-name">{house.title.replace(/^[A-Za-z0-9]+\s*/, '')}</span>
          </h1>
          <h2 className="titleC">House Detail</h2>
          <div className="house-detail">
            {house.detail && house.detail.map((item, index) => (
            <div key={index} className="detail-item">
             <img src={item[0]} alt="icon" className="detail-icon" /> 
             <span>{item[1]}</span>            
            </div>
           ))}
         </div>

         <img src="/line.png" alt="line" className="line" />
         <div className="price-container">
            <div className="asset-section">
              <span className="asset-label">Asset Price</span>
              <span className="asset-value">{house.assetPrice}</span>
            </div>
            <div className="token-section">
              <span className="token-label">Token Price</span>
              <span className="token-value">{house.tokenPrice}</span>
            </div>                       
          </div>
          <img src="/line.png" alt="line" className="line" />
          <h3 className="price">Rent Per Token <span>&nbsp;&nbsp;&nbsp;&nbsp;</span> {house.rentPerToken}</h3>
          <h3 className="price">Rent Start Date  <span>&nbsp;&nbsp;&nbsp;</span> {house.rentStartDate}</h3>
        </div>
        <div className='token-container'>
        <div className='token-name'>TOKEN</div>
        <div className="tokens"> 
                  {[...Array(house.tokens)].map((_, index) => (
                    <img 
                      key={index} 
                      src={tokenImage} 
                      alt="Token" 
                      className="token-image" 
                    />
                  ))}
                </div>
        </div>
        <div className="introduce-right">
          <img src={selectedImage} alt="房間展示" className="mainimage" />
          <div className="image-thumbnails">
        {house.images && house.images.map((img, index) => (
        img !== selectedImage && ( // 避免主圖片出現在縮略圖區
        <img 
        key={index} 
        src={img} 
        alt="房間縮圖" 
        className="thumbnail" 
        onClick={() => setSelectedImage(img)} 
      />
    )
  ))}
</div>
        </div>
      </div>

      <motion.button 
        className="back-btn2" 
        onClick={() => navigate(-1)}  
        whileHover={{ scale: 1.1 }}  
      >
        Return to the previous page
      </motion.button>

      <motion.button 
        className="back-btn2" 
        onClick={() => navigate("/")}
        whileHover={{ scale: 1.1 }}
      >
        Back to Home
      </motion.button>
      <motion.button 
        className="cart-btn" 
        onClick={() => navigate("/cart")}
        whileHover={{ scale: 1.1 }}
      >
        Add to Cart
      </motion.button>
    </motion.div>
    
  );
}

export default IntroducePage;
