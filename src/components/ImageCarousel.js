import React, { useState, useEffect, useRef } from 'react';

const ImageCarousel = ({ images, interval = 4000, autoPlay = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef(null);

  // Existing useEffect for auto-play...
  useEffect(() => {
    if (!autoPlay || isHovered) return;
    
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval, autoPlay, isHovered]);

  // Touch event handlers
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

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
      ref={carouselRef}
      className="image-carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
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
            onClick={() => {
              // Optional: Click to advance to next slide
              if (index === currentIndex) {
                goToNext();
              }
            }}
          >
            {image.type === 'image' ? (
              <img 
                src={image.src} 
                alt={image.alt || `Profile image ${index + 1}`}
                className="carousel-image"
                draggable={false} // Prevent image dragging
              />
            ) : (
              <div className="image-placeholder">
                <span>{image.placeholder}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Enhanced Navigation Arrows */}
      <button 
        className="carousel-btn carousel-btn-prev" 
        onClick={goToPrevious}
        onMouseDown={(e) => e.preventDefault()} // Prevent focus outline
        aria-label="Previous image"
      >
        ‹
      </button>
      <button 
        className="carousel-btn carousel-btn-next" 
        onClick={goToNext}
        onMouseDown={(e) => e.preventDefault()}
        aria-label="Next image"
      >
        ›
      </button>

      {/* Interactive Dot Indicators */}
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            onMouseEnter={() => setIsHovered(true)} // Pause on dot hover
            onMouseLeave={() => setIsHovered(false)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Interactive Progress Bar */}
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
