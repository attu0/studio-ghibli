import { useState, useEffect } from 'react';
import './Sections.css';

function Movies() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const section = document.querySelector('.movies-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedMovie) {
        setSelectedMovie(null);
      }
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const section = document.querySelector('.movies-section');
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
  }, [selectedMovie]);

  const movies = [
    {
      id: 1,
      title: "Spirited Away",
      description: "A young girl enters a mysterious world of spirits to save her parents and find her way home.",
      image: "/src/assets/images/gallery1.jpg",
      director: "Hayao Miyazaki",
      releaseYear: "2001",
      runtime: "125 minutes",
      rating: "96% on Rotten Tomatoes",
      details: "A masterpiece of animation that follows Chihiro's journey through a mysterious spirit world, where she must work in a bathhouse for spirits to find her way back home."
    },
    {
      id: 2,
      title: "My Neighbor Totoro",
      description: "Two young girls and their father move to the countryside where they encounter magical creatures and the iconic Totoro.",
      image: "/src/assets/images/gallery2.jpg",
      director: "Hayao Miyazaki",
      releaseYear: "1988",
      runtime: "86 minutes",
      rating: "93% on Rotten Tomatoes",
      details: "Set in post-war rural Japan, this beloved classic follows the adventures of two young girls, Satsuki and Mei, who move to the countryside with their father to be closer to their hospitalized mother. There, they discover magical forest spirits, including the gentle giant Totoro."
    },
    {
      id: 3,
      title: "Princess Mononoke",
      description: "A young prince becomes involved in a struggle between forest gods and the humans who are depleting their resources.",
      image: "/src/assets/images/gallery3.jpg",
      director: "Hayao Miyazaki",
      releaseYear: "1997",
      runtime: "134 minutes",
      rating: "93% on Rotten Tomatoes",
      details: "Set in the late Muromachi period of Japan, the film follows Ashitaka, a young prince infected by a demon. His quest for a cure leads him into a conflict between forest gods and the humans who are destroying their forest, where he meets San, a human raised by wolves."
    },
    {
      id: 4,
      title: "Howl's Moving Castle",
      description: "A young woman is turned into an old woman by a witch's curse and seeks refuge in a mysterious moving castle.",
      image: "/src/assets/images/gallery4.jpg",
      director: "Hayao Miyazaki",
      releaseYear: "2004",
      runtime: "119 minutes",
      rating: "87% on Rotten Tomatoes",
      details: "Based on Diana Wynne Jones's novel, this film follows Sophie, a young hat maker who is turned into an elderly woman by a witch's curse. She finds her way to the moving castle of the mysterious wizard Howl, where she becomes caught up in Howl's resistance to fighting in a terrible war."
    }
  ];

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const closePopup = () => {
    setSelectedMovie(null);
  };

  const parallaxStyle = {
    '--mouse-x': mousePosition.x,
    '--mouse-y': mousePosition.y
  };

  return (
    <section id="movies" className="section movies-section" style={parallaxStyle}>
      <img 
        src="/src/assets/images/movies.jpg" 
        alt="Movies background" 
        className="movies-background"
      />
      <div className="section-content">
        <h2>Popular Movies</h2>
        <div className="movies-grid">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-poster" onClick={() => handleMovieClick(movie)}>
              <img src={movie.image} alt={movie.title} />
              <div className="poster-overlay">
                <h3>{movie.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedMovie && (
        <div className="movie-popup-overlay" onClick={closePopup}>
          <div className="movie-popup" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={closePopup}>&times;</button>
            <div className="popup-content">
              <div className="popup-image">
                <img src={selectedMovie.image} alt={selectedMovie.title} />
              </div>
              <div className="popup-details">
                <h2 className="typing-title">{selectedMovie.title}</h2>
                <div className="movie-info typing-text">
                  <span>Director: {selectedMovie.director}</span>
                  <span>Release Year: {selectedMovie.releaseYear}</span>
                  <span>Runtime: {selectedMovie.runtime}</span>
                  <span>Rating: {selectedMovie.rating}</span>
                </div>
                <p className="movie-description typing-text">{selectedMovie.description}</p>
                <p className="movie-details typing-text">{selectedMovie.details}</p>
                {selectedMovie.awards && (
                  <p className="movie-awards typing-text">Awards: {selectedMovie.awards}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Movies; 