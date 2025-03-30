import './Sections.css'

function Home() {
  return (
    <section id="home" className="section home-section">
      <video 
        className="video-background" 
        autoPlay 
        loop 
        muted 
        playsInline
        preload="auto"
      >
        <source src="/videos/home.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="section-content">
        <h1>Studio Ghibli</h1>
        <p>Welcome to the magical world of animation</p>
      </div>
    </section>
  )
}

export default Home 