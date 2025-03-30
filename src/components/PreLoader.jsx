import React, { useEffect } from 'react';
import './PreLoader.css';

const PreLoader = ({ onLoadingComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div className="preloader">
      <div className="windmill">
        <div className="windmill-base"></div>
        <div className="windmill-head"></div>
        <div className="windmill-blades">
          <div className="blade"></div>
          <div className="blade"></div>
          <div className="blade"></div>
          <div className="blade"></div>
        </div>
        <div className="loading-text">Loading Magic...</div>
      </div>
    </div>
  );
};

export default PreLoader; 