import './Sections.css'

function About() {
  return (
    <section id="about" className="section about-section">
      <video 
        className="video-background" 
        autoPlay 
        loop 
        muted 
        playsInline
        preload="auto"
      >
        <source src="/videos/about.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="section-content">
        <h2>About Studio Ghibli</h2>
        <p>Studio Ghibli is a Japanese animation film studio headquartered in Koganei, Tokyo. Founded in 1985, the studio is best known for its animated feature films, and has also produced several short subjects, television commercials, and one television film.</p>
      </div>
    </section>
  )
}

export default About 