import React from 'react';
import Image from 'next/image'

import vinylImage from '../public/images/VinylSquare.jpeg';

const fadeInDelay = 400

const VinylGraphic: React.FC = () => {
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
          padding: 100
          
        }}
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay={fadeInDelay}
      >
        <Image
        src={vinylImage}
        alt={"Vinyl"}
        height={500}
        width={500}
        style={{marginLeft: 100}}
        />
      </div>

      {/* Right side with the description */}
      <div
        style={{
          flex: 1,
          padding: '100px',
          fontFamily: 'Merriweather, serif'
        }}
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-delay={fadeInDelay}
      >
        <h2> Coming to a super exclusive house show near you</h2>
        {/* <p>Insert your description here.</p> */}
      </div>
    </div>
  );
};

export default VinylGraphic;
