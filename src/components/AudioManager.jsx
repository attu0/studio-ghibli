import { useState, useEffect } from 'react';
import './AudioManager.css';

const AudioManager = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [audioElements, setAudioElements] = useState(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  
  useEffect(() => {
    // Initialize audio elements only once when component mounts
    const sounds = {
      wind: new Audio('/sounds/wind-ambient.mp3'),
      water: new Audio('/sounds/lake.mp3'),
      birds: new Audio('/sounds/birds.mp3')
    };

    // Configure each audio element
    Object.values(sounds).forEach(sound => {
      sound.loop = true;
      sound.volume = 0.3; // Fixed 30% volume
      sound.preload = 'auto';
    });

    setAudioElements(sounds);

    // Function to start playing sounds
    const playInitialSounds = async () => {
      try {
        await sounds.wind.play();
        setTimeout(async () => {
          await sounds.water.play();
        }, 2000);
        setTimeout(async () => {
          await sounds.birds.play();
        }, 3000);
        setIsPlaying(true);
      } catch (error) {
        console.log('Waiting for user interaction before playing audio');
        setIsPlaying(false);
      }
    };

    // Try to play immediately
    playInitialSounds();

    // Add interaction listener to handle autoplay restrictions
    const handleInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        if (!isPlaying) {
          playInitialSounds();
        }
      }
    };

    // Listen for any user interaction
    document.addEventListener('click', handleInteraction);
    document.addEventListener('keydown', handleInteraction);
    document.addEventListener('touchstart', handleInteraction);

    // Cleanup function
    return () => {
      if (sounds) {
        Object.values(sounds).forEach(sound => {
          sound.pause();
          sound.currentTime = 0;
        });
      }
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };
  }, [hasInteracted, isPlaying]); // Dependencies updated

  const toggleSound = async () => {
    if (!audioElements) return;

    if (isPlaying) {
      Object.values(audioElements).forEach(sound => {
        sound.pause();
      });
      setIsPlaying(false);
    } else {
      try {
        // Play wind immediately
        await audioElements.wind.play();
        
        // Stagger other sounds
        setTimeout(async () => {
          await audioElements.water.play();
        }, 2000);
        
        setTimeout(async () => {
          await audioElements.birds.play();
        }, 3000);
        setIsPlaying(true);
      } catch (error) {
        console.error('Error playing audio:', error);
      }
    }
  };

  return (
    <button 
      className={`sound-button-left ${isPlaying ? 'playing' : ''}`}
      onClick={toggleSound}
      aria-label={isPlaying ? 'Mute Sounds' : 'Play Ambient Sounds'}
    >
      {isPlaying ? '🎵' : '🔇'}
    </button>
  );
};

export default AudioManager; 