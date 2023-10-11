"use client"
import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Image from 'next/image';

import backgroundImage from '../public/images/BackShots.jpeg'

const ParallaxScroll = () => {
  return (
    <div>
        <Parallax pages={2}>
            <ParallaxLayer offset={0} speed={0.25}  factor={1}> {/** horizontal={true} */}
                <div style={{  height: '100vh'}}> {/** height: '100vh', backgroundImage: 'url(../public/images/BandJamCover1.jpeg)', */}
                    <Image
                        src="/images/BandJamCover1.jpeg" 
                        alt="Background Image"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </ParallaxLayer>
            

            {/* Text blocks that scroll normally */}
            <ParallaxLayer offset={1} speed={2} factor={2}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: 'green', fontSize: 30}}>
                <h1> I think maybe a section for recent releases could go here</h1>
                <p> and like links to spotify with images for album covers/etc...</p>
                </div>
            </ParallaxLayer>
        </Parallax>
        <div style={{backgroundColor: 'black', width: '100vw', height: '100vh', color: 'white'}}/>
        
    </div>
  );
};

export default ParallaxScroll;