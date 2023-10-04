import React from 'react';

interface ImageWithOverlayProps {
  imageUrl: string;
  overlayText: string;
}

import Image from 'next/image'
import soundBoardPic from '../public/images/SoundBoardCpy.jpg';
import soundBoardPic1 from '../public/images/BackShots1.jpeg';

const ImageWithOverlay: React.FC<ImageWithOverlayProps> = ({ imageUrl, overlayText }) => {
  return (
    <div>
      <div style={{position: "relative", display: "inline-block"}}> 
      {
      // this is theissue above ^^ need to change to fill
      }
        {/* <img src={sound} alt="Image" /> */}
        <div style={{ width: '100%', height: 500, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          
        
        <Image
        src={soundBoardPic1}
        alt={"nothing here"}
        
      />
      </div>
        <div
          className="overlay-text"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            fontSize: '18px',
          }}
        >
          {overlayText}
        </div>
      </div>
    </div>
  );
};

export default ImageWithOverlay;
