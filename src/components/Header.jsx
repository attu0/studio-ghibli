import { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHomeVisible, setIsHomeVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const homeSection = document.getElementById('home');
      
      // Check if we're in the home section
      if (homeSection) {
        const homeRect = homeSection.getBoundingClientRect();
        setIsHomeVisible(homeRect.top <= 0 && homeRect.bottom >= 0);
      }

      // Check if we're at the very top of the page
      setIsAtTop(currentScrollY === 0);
      
      // Update scroll state
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Hide header completely when at top of page
  if (isAtTop) return null;

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      
      {isHomeVisible && !isScrolled && (
        <nav className="home-nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#movies">Movies</a></li>
            <li><a href="#characters">Characters</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      )}

      <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#movies" onClick={toggleMenu}>Movies</a></li>
          <li><a href="#characters" onClick={toggleMenu}>Characters</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header; 