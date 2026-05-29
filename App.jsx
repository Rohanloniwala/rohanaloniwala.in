function App() {
  return (
    <div className="app">
      <header className="hero">
        <h1>RL MEDIA</h1>
        <p>Photography • Videography • Editing</p>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          Contact Now
        </a>
      </header>

      <section className="services">
        <h2>Our Services</h2>

        <div className="cards">
          <div className="card">
            <h3>Wedding Shoot</h3>
            <p>Cinematic wedding photography & films.</p>
          </div>

          <div className="card">
            <h3>Sports Shoot</h3>
            <p>Professional sports event coverage.</p>
          </div>

          <div className="card">
            <h3>Music Videos</h3>
            <p>Creative direction and editing.</p>
          </div>
        </div>
      </section>

      <section className="portfolio">
        <h2>Portfolio</h2>

        <div className="gallery">
          <img
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop"
            alt="portfolio"
          />

          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
            alt="portfolio"
          />

          <img
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop"
            alt="portfolio"
          />
        </div>
      </section>

      <footer className="footer">
        <h3>RL MEDIA</h3>
        <p>© 2026 All Rights Reserved</p>
      </footer>
    </div>
  )
}

export default App
