import React from 'react';
import Image from 'next/image'

import vinylImage from '../public/images/VinylSquare.jpeg';
import vinylImage1 from '../public/images/RoofPic.jpeg';
import Nostalgia1980Cover from '../public/images/Nostalgia1980Cover.jpeg';
import Nostalgia1980CoverWithTitle from '../public/images/Nostalgia1980CoverWithTitle.jpeg';
import RecordImage from '../public/images/TransparentBackroundRecord.png';

const fadeInDelay = 400
const width = 500
const height = 500

const VinylGraphic: React.FC = () => {
  const vinylImageDelay = 400;
  const recordImageDelay = 3000; // Adjust this delay for faster movement
  const recordImageEndPostion = '30%'; // Set the initial position to the center

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '20px',
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
        data-aos-duration={vinylImageDelay}
        data-aos-delay={fadeInDelay}
      >
        <div style={{ position: 'relative' }}>
          <Image
            src={Nostalgia1980CoverWithTitle}
            alt="Vinyl"
            height={500}
            width={500}
            style={{ position: 'absolute', zIndex: 1 }}
          />
          <Image
            src={RecordImage}
            alt="Vinyl"
            height={500}
            width={500}
            style={{ left: recordImageEndPostion, position: 'relative' }}
            data-aos="fade-right"
            data-aos-duration={recordImageDelay}
            data-aos-delay={fadeInDelay}
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
