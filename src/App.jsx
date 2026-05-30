import posterKispe from './assets/poster-kispe-main.jpeg'
import posterBirthday from './assets/poster-birthday.png'
import posterGurjar from './assets/poster-gurjar.png'
import posterSurat from './assets/poster-surat.png'
import decathlonOne from './assets/decathlon-event-1.jpeg'
import decathlonTwo from './assets/decathlon-event-2.jpeg'
import certificate from './assets/decathlon-certificate.png'

const whatsappNumber = '917053120268'
const whatsappText = encodeURIComponent('Hello RL MEDIA, I want to book photography/videography service.')
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappText}`
const instagramLink = 'https://www.instagram.com/rohan_loniwala/'

const songProjects = [
  {
    title: 'Kispe Main Vishwas Karu',
    type: 'Devotional Music Video',
    image: posterKispe,
    details: 'Poster, DOP/Edit contribution and creative visuals featuring Rohan Loniwala.'
  },
  {
    title: 'Yaar Ka Happy Birthday 2',
    type: 'Celebration Song Project',
    image: posterBirthday,
    details: 'Birthday theme music video poster and promotional creative.'
  },
  {
    title: 'Gurjar Nirale',
    type: 'Cultural Music Video',
    image: posterGurjar,
    details: 'Community culture based music video promotional artwork.'
  },
  {
    title: 'Surat Pyari',
    type: 'Romantic/Folk Music Video',
    image: posterSurat,
    details: 'Colorful folk style poster and creative promotion.'
  },
]

function App() {
  return (
    <main>
      <a className="floating-whatsapp" href={whatsappLink} target="_blank" rel="noreferrer">
        WhatsApp
      </a>

      <header className="hero" id="home">
        <nav className="nav">
          <div className="logo">RL MEDIA</div>
          <div className="nav-links">
            <a href="#songs">Songs</a>
            <a href="#events">Events</a>
            <a href="#certificate">Certificate</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-content">
          <p className="tag">Photography • Videography • Editing</p>
          <h1>RL MEDIA</h1>
          <p className="hero-text">
            Professional photography and videography team for music videos, sports events,
            pre-wedding shoots, brand events and cinematic memories.
          </p>
          <div className="hero-buttons">
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn primary">Book on WhatsApp</a>
            <a href={instagramLink} target="_blank" rel="noreferrer" className="btn secondary">Instagram</a>
          </div>
        </div>
      </header>

      <section className="stats">
        <div><strong>100+</strong><span>Song Shoots</span></div>
        <div><strong>Decathlon</strong><span>Event Coverage</span></div>
        <div><strong>Pre-Wedding</strong><span>Cinematic Shoots</span></div>
        <div><strong>Sports</strong><span>Photography</span></div>
      </section>

      <section className="section about">
        <div>
          <p className="section-tag">About Us</p>
          <h2>Creative visuals for brands, artists and events.</h2>
        </div>
        <p>
          RL MEDIA captures high-energy events, music video projects and professional
          portfolio shoots with a cinematic look. From Decathlon Sports Utsav coverage to
          song posters and videos, we deliver content ready for social media and promotion.
        </p>
      </section>

      <section className="section" id="songs">
        <p className="section-tag">Songs & Music Video Projects</p>
        <h2>Featured Song Posters</h2>
        <div className="song-grid">
          {songProjects.map((item) => (
            <article className="song-card" key={item.title}>
              <img src={item.image} alt={item.title} />
              <div>
                <span>{item.type}</span>
                <h3>{item.title}</h3>
                <p>{item.details}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="events">
        <p className="section-tag">Event Photography</p>
        <h2>Decathlon Sports Utsav 2026</h2>
        <p className="section-intro">
          Event photography and videography coverage for Decathlon Sports Utsav, capturing
          team moments, participants, brand visibility and celebration of sports.
        </p>
        <div className="event-grid">
          <img src={decathlonOne} alt="Decathlon Sports Utsav banner and team" />
          <img src={decathlonTwo} alt="Decathlon Sports Utsav group photo" />
        </div>
      </section>

      <section className="section certificate-section" id="certificate">
        <div className="cert-text">
          <p className="section-tag">Authorized & Certificate</p>
          <h2>Certificate of Appreciation</h2>
          <p>
            Presented for outstanding contribution in photography and videography for
            Decathlon Sports Utsav events conducted on 23rd and 24th May 2026.
          </p>
        </div>
        <div className="certificate-frame">
          <img src={certificate} alt="Decathlon Sports Utsav Certificate of Appreciation" />
        </div>
      </section>

      <section className="section services">
        <p className="section-tag">Our Services</p>
        <h2>What We Do</h2>
        <div className="service-grid">
          <div>Wedding & Pre-Wedding Shoot</div>
          <div>Music Video Shoot</div>
          <div>Sports Event Photography</div>
          <div>Brand Event Coverage</div>
          <div>Poster & Promo Creative</div>
          <div>Video Editing & Reels</div>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="section-tag">Contact</p>
        <h2>Book RL MEDIA for your next shoot</h2>
        <div className="contact-box">
          <a href="tel:+917053120268">7053120268</a>
          <a href="tel:+9180768693705">80768693705</a>
          <a href="mailto:seh.rohan@gmail.com">seh.rohan@gmail.com</a>
          <a href={instagramLink} target="_blank" rel="noreferrer">Instagram: @rohan_loniwala</a>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn primary">Send WhatsApp Message</a>
        </div>
      </section>

      <footer>
        <strong>RL MEDIA</strong>
        <span>© 2026 Photography & Videography Portfolio</span>
      </footer>
    </main>
  )
}

export default App
