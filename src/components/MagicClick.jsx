import { useState, useEffect } from 'react';
import './MagicClick.css';

const MagicClick = () => {
  const [sparks, setSparks] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const newSpark = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY
      };

      setSparks(prev => [...prev, newSpark]);

      // Remove spark after animation
      setTimeout(() => {
        setSparks(prev => prev.filter(spark => spark.id !== newSpark.id));
      }, 1000);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      {sparks.map(spark => (
        <div
          key={spark.id}
          className="magic-container"
          style={{
            left: spark.x + 'px',
            top: spark.y + 'px'
          }}
        >
          {[...Array(12)].map((_, i) => (
            <div key={i} className="magic-spark" style={{
              '--rotation': `${i * 30}deg`,
              '--delay': `${i * 0.05}s`
            }} />
          ))}
          <div className="magic-ring" />
        </div>
      ))}
    </>
  );
};

export default MagicClick; 