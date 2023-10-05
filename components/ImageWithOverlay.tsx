import React from 'react';

interface ImageWithOverlayProps {
  imageUrl: string;
  overlayText: string;
}

import Image from 'next/image'
import soundBoardPic from '../public/images/SoundBoardCpy.jpg';
import soundBoardPic1 from '../public/images/BackShots1.jpeg';
import bandJamPic from '../public/images/BandJamCover1.jpeg'

const ImageWithOverlay: React.FC<ImageWithOverlayProps> = ({ imageUrl, overlayText }) => {
  return (
    <div>
      <div style={{position: "relative", display: "inline-block", width: "100vw", height: '100vh', justifyItems: 'center'}}> 
        <div style={{ width: '100%', margin: 0, padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          
        
        <Image
        src={bandJamPic}
        alt={"nothing here"}
        layout="fill"
        objectFit="cover"
        />
      </div>
        <div
          //className="overlay-text"
          style={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translate(-50%, -80%)',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            fontSize: '18px',
            width: '100%'
          }}
        >
          <h1 
          className="h1 mb-4" 
          data-aos="fade-up" 
          data-aos-easing="linear"
          data-aos-duration="1500" 
          style={{ fontFamily: 'Merriweather, serif' }}>  
            {overlayText}
          </h1>
          {/* <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200"> The 7th smallest indie band in the lesser Nashville Area.</p>  */}
        </div>
      </div>
    </div>
  );
};

export default ImageWithOverlay;
