import React, { useState, useEffect } from 'react';

const ImageCarousel = ({ images, interval = 4000, autoPlay = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!autoPlay || isHovered) return;
    
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval, autoPlay, isHovered]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  return (
    <div 
      className="image-carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="carousel-container"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="carousel-slide"
          >
            {image.type === 'image' ? (
              <img 
                src={image.src} 
                alt={image.alt || `Profile image ${index + 1}`}
                className="carousel-image"
              />
            ) : (
              <div className="image-placeholder">
                <span>{image.placeholder}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        className="carousel-btn carousel-btn-prev" 
        onClick={goToPrevious}
        aria-label="Previous image"
      >
        ‹
      </button>
      <button 
        className="carousel-btn carousel-btn-next" 
        onClick={goToNext}
        aria-label="Next image"
      >
        ›
      </button>

      {/* Dot indicators */}
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="carousel-progress">
        <div 
          className="carousel-progress-bar"
          style={{
            width: `${((currentIndex + 1) / images.length) * 100}%`
          }}
        />
      </div>
    </div>
  );
};

export default ImageCarousel;
