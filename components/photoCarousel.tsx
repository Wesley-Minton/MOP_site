import React, { useState } from 'react';

interface PhotoCarouselProps {
  images: string[]; // An array of image URLs
}

const PhotoCarousel: React.FC<PhotoCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: 'auto', overflow: 'hidden' }}>
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex}`}
        style={{ width: '100%', height: 'auto', display: 'block' }}
      />
      <button
        onClick={prevImage}
        style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', zIndex: 1 }}
      >
        Prev
      </button>
      <button
        onClick={nextImage}
        style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', zIndex: 1 }}
      >
        Next
      </button>
    </div>
  );
};

export default PhotoCarousel;
