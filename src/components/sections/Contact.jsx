import './Sections.css'

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <video 
        className="video-background" 
        autoPlay 
        loop 
        muted 
        playsInline
        preload="auto"
      >
        <source src="/videos/contact.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="section-content">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact 