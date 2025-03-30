import { useEffect, useRef } from 'react';

const TypingSound = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio('/keyboard.mp3'); // Using keyboard.mp3 for typing sound
    audioRef.current.volume = 0.2; // 20% volume
    
    // Preload the audio
    audioRef.current.load();

    const playKeySound = () => {
      try {
        // Create a new audio instance for each keypress
        const newSound = audioRef.current.cloneNode();
        newSound.play().catch(err => {
          console.log('Key sound playback failed:', err);
        });
      } catch (err) {
        console.log('Error playing key sound:', err);
      }
    };

    // Handle keyboard events - play sound for ANY key press
    const handleKeyPress = () => {
      playKeySound();
    };

    // Add keyboard event listener
    document.addEventListener('keydown', handleKeyPress);

    // Cleanup function
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      if (audioRef.current) {
        audioRef.current = null;
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return null;
};

export default TypingSound; 