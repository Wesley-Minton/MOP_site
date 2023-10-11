import React from 'react';
import Image from 'next/image'

import vinylImage from '../public/images/VinylSquare.jpeg';
import vinylImage1 from '../public/images/RoofPic.jpeg';
import RecordImage from '../public/images/TransparentBackroundRecord.png';

const fadeInDelay = 400
const width = 500
const height = 500

const VinylGraphic: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '20px',
        // height: '50vh',
      }}
    >
      <div
        style={{
          flex: 1,
          padding: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay={fadeInDelay}
      >
        <div style={{ position: 'relative' }}>
          <Image
            src={vinylImage1}
            alt="Vinyl"
            height={500}
            width={500}
            style={{position: 'absolute', zIndex: 1}}
          />
          <Image
            src={RecordImage}
            alt="Vinyl"
            height={500}
            width={500}
            style={{left: '20%', position: 'relative'}}
          />
        </div>
      </div>

      {/* Right side with the description */}
      <div
        style={{
          flex: 1,
          padding: '100px',
          fontFamily: 'Merriweather, serif',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-delay={fadeInDelay}
      >
        <h2>Coming to a super exclusive house show near you</h2>
      </div>
    </div>
  );
};

export default VinylGraphic;