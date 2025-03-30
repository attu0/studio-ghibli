import { useState, useEffect } from 'react';
import './Sections.css'
import totoro from '../../assets/images/Totoro.jpg';
import noface from '../../assets/images/No-Face.jpg';
import howl from '../../assets/images/Howl.jpg';
import princess from '../../assets/images/Princess Mononoke.jpg';
import ponyo from '../../assets/images/Ponyo.jpg';
import kiki from '../../assets/images/Kiki.png';
import iconic from '../../assets/images/iconic.jpg';

function Characters() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const section = document.querySelector('.characters-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedCharacter) {
        setSelectedCharacter(null);
      }
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const section = document.querySelector('.characters-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionHeight = rect.height;
        const scrollPosition = (scrollY - sectionTop) / sectionHeight;
        section.style.setProperty('--scroll-y', scrollPosition);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [selectedCharacter]);

  const characters = [
    {
      id: 1,
      name: 'Totoro',
      movie: 'My Neighbor Totoro',
      description: 'A gentle forest spirit who becomes friends with two young girls.',
      image: totoro
    },
    {
      id: 2,
      name: 'No-Face',
      movie: 'Spirited Away',
      description: 'A mysterious spirit who wears a mask and can absorb the traits of those it eats.',
      image: noface
    },
    {
      id: 3,
      name: 'Howl',
      movie: "Howl's Moving Castle",
      description: 'A powerful but vain wizard who lives in a magical moving castle.',
      image: howl
    },
    {
      id: 4,
      name: 'Princess Mononoke',
      movie: 'Princess Mononoke',
      description: 'A brave young woman raised by wolves who fights to protect the forest.',
      image: princess
    },
    {
      id: 5,
      name: 'Ponyo',
      movie: 'Ponyo',
      description: 'A goldfish princess who wants to become human after falling in love with a boy.',
      image: ponyo
    },
    {
      id: 6,
      name: 'Kiki',
      movie: "Kiki's Delivery Service",
      description: 'A young witch who moves to a new city to begin her training.',
      image: kiki
    }
  ];

  return (
    <section id="characters" className="section characters-section">
      <img 
        src={iconic}
        alt="Characters background" 
        className="characters-background"
      />
      <div className="section-content">
        <h2>Iconic Characters</h2>
        <div className="characters-scroll-container">
          <div className="characters-grid">
            {characters.map((character) => (
              <div
                key={character.id}
                className="character-card"
                onClick={() => setSelectedCharacter(character)}
              >
                <div className="character-image">
                  <img src={character.image} alt={character.name} />
                </div>
                <div className="character-info">
                  <h3>{character.name}</h3>
                  <h4>{character.movie}</h4>
                  <p>{character.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedCharacter && (
        <div 
          className="character-popup-overlay"
          onClick={() => setSelectedCharacter(null)}
        >
          <div 
            className="character-popup"
            onClick={e => e.stopPropagation()}
          >
            <button 
              className="character-popup-close"
              onClick={() => setSelectedCharacter(null)}
            >
              ×
            </button>
            <div className="character-popup-image">
              <img src={selectedCharacter.image} alt={selectedCharacter.name} />
            </div>
            <div className="character-popup-content">
              <h3>{selectedCharacter.name}</h3>
              <h4>{selectedCharacter.movie}</h4>
              <p>{selectedCharacter.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Characters 