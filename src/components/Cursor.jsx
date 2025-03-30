import { useState, useEffect } from 'react';
import './Cursor.css';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setPosition(newPosition);
      setIsMoving(true);
      
      // Add new particle to trail
      setTrail(prevTrail => [
        ...prevTrail.slice(-15),
        {
          x: newPosition.x,
          y: newPosition.y,
          id: Date.now()
        }
      ]);

      clearTimeout(window.moveTimeout);
      window.moveTimeout = setTimeout(() => setIsMoving(false), 100);
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <>
      {trail.map((particle, index) => (
        <div
          key={particle.id}
          className="magic-particle"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            opacity: (index + 1) / trail.length
          }}
        />
      ))}
      <div 
        className={`butterfly-cursor ${isMoving ? 'flying' : ''}`}
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`
        }}
      >
        <div className="wing left-wing"></div>
        <div className="wing right-wing"></div>
        <div className="body"></div>
        <div className="glow"></div>
      </div>
    </>
  );
};

export default Cursor; 