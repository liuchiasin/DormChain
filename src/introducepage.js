import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import { motion } from 'framer-motion';
import './IntroducePage.css';

const houseDetails = {
  1: {
    title: 'C305 女宿雅致套房',
    detail: [['/bed.png', '1 single bed'],['/bathroom.png', '1 bathroom'],['/airconditioner.png', '1 air conditioner'],['/desk.png', '1 desk']], 
    price: '$35,000',
    images: ['/1111.png', '/1112.png'],
  },
  2: {
    title: 'D408 女宿冷氣雅房',
    detail: [['/bed.png', '4 single bed'], ['/bathroom.png', '1 bathroom'],['/airconditioner.png', '1 air conditioner'],['/desk.png', '4 desk']], 
    price: '$28,000',
    images: ['/2222.png'],
  },
  3: {
    title: 'A210 男宿冷氣雅房',
    detail: [['/bed.png', '4 single bed'], ['/bathroom.png', '1 bathroom'],['/airconditioner.png', '1 air conditioner'],['/desk.png', '4 desk']], 
    price: '$30,000',
    images: ['/3333.png'],
  },
  4: {
    title: 'B101 男宿雅致套房',
    detail: [['/bed.png', '1 single bed'], ['/bathroom.png', '1 bathroom'],['/airconditioner.png', '1 air conditioner'],['/desk.png', '1 desk']], 
    price: '$33,000',
    images: ['/4444.png'],
  },
  5: {
    title: 'A101 男宿雅致套房',
    detail: [['/bed.png', '1 single bed'], ['/bathroom.png', '1 bathroom'],['/airconditioner.png', '1 air conditioner'],['/desk.png', '1 desk']], 
    price: '$30,000',
    images: ['/5555.png'],
  },
  6: {
    title: 'E301 女宿冷氣雅房',
    detail: [['/bed.png', '4 single bed'], ['/bathroom.png', '1 bathroom'],['/airconditioner.png', '1 air conditioner'],['/desk.png', '4 desk']], 
    price: '$29,000',
    images: ['/6666.png'],
  },
  7: {
    title: 'E507 女宿冷氣雅房',
    detail: [['/bed.png', '4 single bed'], ['/bathroom.png', '1 bathroom'],['/airconditioner.png', '1 air conditioner'],['/desk.png', '4 desk']], 
    price: '$29,000',
    images: ['/7777.png'],
  },
  8: {
    title: 'C306 女宿冷氣套房',
    detail: [['/bed.png', '1 single bed'], ['/bathroom.png', '1 bathroom'],['/airconditioner.png', '1 air conditioner'],['/desk.png', '1 desk']], 
    price: '$32,000',
    images: ['/8888.png'],
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

          <h3 className="price">{house.price}</h3>
        </div>
        <div className="introduce-right">
          <img src={selectedImage} alt="房間展示" className="main-image" />
          <div className="image-thumbnails">
            {house.images && house.images.map((img, index) => (
              <img 
                key={index} 
                src={img} 
                alt="房間縮圖" 
                className="thumbnail" 
                onClick={() => setSelectedImage(img)} 
              />
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
        onClick={() => navigate("/house")}  
        whileHover={{ scale: 1.1 }}  
      >
        Back to Home
      </motion.button>
    </motion.div>
  );
}

export default IntroducePage;
