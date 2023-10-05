"use client"

import React, { useEffect, useState } from 'react';

interface ScrollingWindowProps {
  backgroundImage: string;
}
const scrollSpeedMultiplier = 0.5; // Adjust this value to control the scrolling speed

const ScrollingWindow: React.FC<ScrollingWindowProps> = ({ backgroundImage }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isImageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const background = document.getElementById('background-image');
    if (background) {
      const rect = background.getBoundingClientRect();
      const isInViewport = rect.bottom >= 0 && rect.top <= window.innerHeight;
      setImageVisible(isInViewport);
    }
  }, [scrollPosition]);

  const backgroundPositionY = isImageVisible ? `${scrollPosition * scrollSpeedMultiplier}px` : '0';

  const containerStyle: React.CSSProperties = {
    width: '100vw',
    height: '100vh',
    position: 'relative',
    overflow: 'hidden',
  };

  const backgroundImageStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: `center ${backgroundPositionY}`, // Scroll the background image
    transition: 'background-position 0.2s ease-in-out', // Optional smooth transition
  };

  const windowStyle: React.CSSProperties = {
    width: '100vw',
    height: '500px',
    boxShadow: '0 0 0 10000px rgba(0, 0, 0)',
    position: 'absolute',
    top: '50%', // Adjust the vertical position
    left: '50%', // Adjust the horizontal position
    transform: 'translate(-50%, -100%)', // Center the window
  };

  return (
    <div style={containerStyle}>
      {/* Background Image */}
      <div id="background-image" style={backgroundImageStyle}></div>

      {/* Overlay Components */}
      <div style={windowStyle}></div>
    </div>
  );
};

export default ScrollingWindow;
