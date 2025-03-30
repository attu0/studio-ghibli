import { useState, useEffect } from 'react';
import './ImageGallery.css';

const ImageGallery = ({ isOpen, onClose, currentImage, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentImage) {
      const index = images.findIndex(img => img.url === currentImage.url);
      setCurrentIndex(index >= 0 ? index : 0);
    }
  }, [currentImage, images]);

  if (!isOpen) return null;

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') handleNext(e);
    if (e.key === 'ArrowLeft') handlePrev(e);
    if (e.key === 'Escape') onClose();
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="gallery-overlay-container" onClick={onClose}>
      <div className="gallery-content" onClick={e => e.stopPropagation()}>
        <button className="gallery-close" onClick={onClose}>&times;</button>
        <button className="gallery-nav prev" onClick={handlePrev}>&lt;</button>
        <button className="gallery-nav next" onClick={handleNext}>&gt;</button>
        <div className="gallery-image-container">
          <img 
            src={images[currentIndex].url} 
            alt={images[currentIndex].title} 
            className="gallery-image"
          />
          <div className="gallery-caption">
            <h3>{images[currentIndex].title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery; 