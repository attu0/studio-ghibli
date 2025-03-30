import { useEffect, useRef } from 'react';

const ClickSound = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio('/click.mp3');
    audioRef.current.volume = 0.3; // 30% volume
    
    // Preload the audio
    audioRef.current.load();

    const playClickSound = (e) => {
      // Don't play sound for volume slider interactions
      if (e.target.type === 'range') return;
      
      try {
        // Create a new audio instance for each click
        const newClick = audioRef.current.cloneNode();
        newClick.play().catch(err => {
          console.log('Click sound playback failed:', err);
        });
      } catch (err) {
        console.log('Error creating click sound:', err);
      }
    };

    // Add click event listener to the entire document
    document.addEventListener('click', playClickSound);

    // Cleanup function
    return () => {
      document.removeEventListener('click', playClickSound);
      if (audioRef.current) {
        audioRef.current = null;
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return null; // This component doesn't render anything
};

export default ClickSound; 