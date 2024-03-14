"use client"
import React, { useState } from 'react';
import Image from 'next/image'

import vinylImage from '../public/images/VinylSquare.jpeg';
import vinylImage1 from '../public/images/RoofPic.jpeg';
import Nostalgia1980Cover from '../public/images/Nostalgia1980Cover.jpeg';
import Nostalgia1980CoverWithTitle from '../public/images/Nostalgia1980CoverWithTitle.jpeg';
import RecordImage from '../public/images/TransparentBackroundRecord.png';

const fadeInDelay = 400
const width = 500
const height = 500
const words = ['Esoteric', 'Alien', 'Disco', 'Fusion', 'Goth', 'Surf', 'Rock','Noise Project']
const otherSentence = "no music theory, no socks, no dinner"

const VinylGraphic: React.FC = () => {
  
  const vinylImageDelay = 400;
  const recordImageDelay = 3000; // Adjust this delay for faster movement
  const recordImageEndPostion = '30%'; // Set the initial position to the center

  const [sentence, setSentence] = useState(words.join(' '))

  const randomizeSentence = () => {
    const wordsDup = words

    for (let i = wordsDup.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [wordsDup[i], wordsDup[j]] = [wordsDup[j], wordsDup[i]];
    }

    return wordsDup.join(' ');
  };

  const handleButtonClick = () => {
    const randNum = Math.floor(Math.random()*10) + 1
    if (randNum == 1) {
      setSentence(otherSentence)
    } else {
      const randomizedSentence = randomizeSentence();
      setSentence(randomizedSentence);
    }
  }

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
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <h2 style={{paddingBottom: 50}}> {sentence} </h2>
          <button style={{outlineStyle: 'solid', color: 'white', borderRadius: 5}} onClick={handleButtonClick}> More about us </button>
        </div>
        
      </div>
    </div>
  );
};

export default VinylGraphic;
