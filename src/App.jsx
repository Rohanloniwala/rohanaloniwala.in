import logo from './assets/logo.png'
import preWeddingPoster from './assets/pre-wedding-poster.png'
import posterKispe from './assets/poster-kispe-main.jpeg'
import posterBirthday from './assets/poster-birthday.png'
import posterGurjar from './assets/poster-up-ka-kon-kehvega.png'
import posterSurat from './assets/poster-bin-olhe-ke.png'
import decathlonOne from './assets/decathlon-event-1.jpeg'
import decathlonTwo from './assets/decathlon-event-2.jpeg'
import certificate from './assets/decathlon-certificate.png'
import whatsappQr from './assets/whatsapp-qr.svg'
import {
  FaInstagram,
  FaYoutube,
  FaGoogle,
  FaEnvelope
} from "react-icons/fa";
const whatsappNumber = '918076869370'
const contactNumber = '8076869370'
const email = 'seh.rohan@gmail.com'
const instagramLink = 'https://www.instagram.com/rohan_loniwala/'
const youtubeChannel = 'https://youtube.com/@pradhanrecords?si=QxtWKT9GKcvTyUfA'
const googleBusinessLink = 'https://share.google/pLbYrhqU4z7CKqvZe'
const wa = (service, extra = '') =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hello RL MEDIA, I am contacting you for ${service}. ${extra}Please share details, package and available dates.`
  )}`

const services = [
  ['Video Editing', 'Reels, highlights, teaser, full song and cinematic edits.'],
  ['Director', 'Creative direction, shot planning and complete production support.'],
  ['Photography', 'Professional portfolio, wedding, event and brand photography.'],
  ['Cinematography', 'Cinematic 4K visuals with smooth storytelling.'],
  ['Event Photography', 'Sports, corporate, birthday, cultural and brand events.'],
  ['Pre-wedding Photography', 'Premium couple shoot with cinematic frames and memories.'],
]

const songProjects = [
  {
    title: 'Yaar Ka Happy Birthday - 2',
    image: posterBirthday,
    link: 'https://youtu.be/zGLEFOPFp74?si=0b4pAldsDS7i2I38',
  },
  {
    title: 'Kispe Main Vishwash Karu',
    image: posterKispe,
    link: 'https://youtu.be/QsY8uaWby3E?si=fsW3MUuJDwnncyQu',
  },
  {
    title: 'Up Ka Kon Kehvega',
    image: posterGurjar,
    link: 'https://youtu.be/_ajID01L_58?si=CVchjGzPbtqUf9EF',
  },
  {
    title: 'Bin Olhe Ke',
    image: posterSurat,
    link: 'https://youtu.be/UpdO8OIkQSg?si=R-_4EPnzzxROmgxW',
  },
]

function App() {
  return (
    <main>
      <a className="floating-whatsapp" href={wa('quick WhatsApp enquiry')} target="_blank" rel="noreferrer">
        WhatsApp
      </a>

      <header className="hero" id="home">
        <img className="hero-watermark" src={logo} alt="" />

        <nav className="nav">
          <a className="brand" href="#home">
            <img src={logo} alt="RL MEDIA logo" />
            <span>RL MEDIA</span>
          </a>

          <div className="nav-links">
            <a href="#menu">Menu</a>
            <a href="#offers">Offers</a>
            <a href="#songs">Songs</a>
            <a href="#events">Events</a>
            <a href="#certificate">Certificate</a>
            <a href="#contact">Contact</a>
          </div>

          <a className="nav-btn" href={wa('booking enquiry')} target="_blank" rel="noreferrer">
            WhatsApp Us
          </a>
        </nav>

        <div className="hero-grid">
          <section className="hero-left">
            <p className="tag">Premium Photography • Videography • Editing</p>
            <h1>Your Moments, Our Cinematic Vision</h1>
            <p>
              RL MEDIA creates professional visuals for song shoots, weddings, events,
              sports coverage, pre-wedding shoots, reels and brand promotions.
            </p>

            <div className="hero-actions">
              <a className="btn primary" href={wa('Wedding / Event / Shoot Enquiry')} target="_blank" rel="noreferrer">
                Chat on WhatsApp
              </a>
              <a className="btn secondary" href="#songs">View Song Work</a>
            </div>

            <div className="quick-stats">
              <div><strong>100+</strong><span>Song Shoots</span></div>
              <div><strong>50+</strong><span>Events</span></div>
              <div><strong>Decathlon</strong><span>Sports Utsav</span></div>
            </div>
          </section>

          <aside className="whatsapp-panel">
            <h2>Why do you want to contact RL MEDIA?</h2>
            <p>Select your requirement. WhatsApp message will open with complete enquiry detail.</p>
            <a href={wa('Wedding Photography & Videography Enquiry')} target="_blank" rel="noreferrer">Wedding Enquiry <span>›</span></a>
            <a href={wa('Event Photography & Videography Enquiry')} target="_blank" rel="noreferrer">Event Enquiry <span>›</span></a>
            <a href={wa('Music Video Shoot Enquiry')} target="_blank" rel="noreferrer">Music Video Shoot <span>›</span></a>
            <a href={wa('Pre-wedding Shoot Enquiry')} target="_blank" rel="noreferrer">Pre-wedding Shoot <span>›</span></a>
            <a href={wa('Video Editing / General Enquiry')} target="_blank" rel="noreferrer">General Enquiry <span>›</span></a>
          </aside>
        </div>
      </header>

      <section className="section about">
        <div>
          <p className="section-tag">About RL MEDIA</p>
          <h2>Creative production team for artists, brands and events.</h2>
        </div>
        <p>
          We provide photography, cinematography, direction, video editing, event photography
          and pre-wedding photography. Our work includes music video shoots, Decathlon event
          coverage and promotional visuals.
        </p>
      </section>

      <section className="section" id="menu">
        <p className="section-tag">Menu / Services</p>
        <h2>All Services</h2>
        <div className="service-grid">
          {services.map(([title, text]) => (
            <a className="service-card" href={wa(`${title} Enquiry`)} target="_blank" rel="noreferrer" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
              <span>Enquire Now →</span>
            </a>
          ))}
        </div>
      </section>

      <section className="prewedding-banner">
        <img src={preWeddingPoster} alt="RL MEDIA pre wedding poster" />
      </section>

      <section className="section" id="songs">
        <p className="section-tag">Songs & Music Video Projects</p>
        <h2>Featured Song Shoots</h2>
        <div className="song-grid">
          {songProjects.map((song) => (
            <article className="song-card" key={song.title}>
              <img src={song.image} alt={song.title} />
              <div>
                <h3>{song.title}</h3>
                <a href={song.link} target="_blank" rel="noreferrer">Watch on YouTube</a>
              </div>
            </article>
          ))}
        </div>
        <div className="youtube-strip">
          <div>
            <span>Official YouTube Channel</span>
            <strong>Pradhan Records</strong>
          </div>
          <a href={youtubeChannel} target="_blank" rel="noreferrer">Open Channel</a>
        </div>
      </section>

      <section className="section" id="events">
        <p className="section-tag">Event Photography</p>
        <h2>Decathlon Sports Utsav 2026</h2>
        <p className="section-intro">
          Professional photography and videography coverage for Decathlon Sports Utsav.
        </p>
        <div className="event-grid">
          <img src={decathlonOne} alt="Decathlon Sports Utsav event" />
          <img src={decathlonTwo} alt="Decathlon Sports Utsav group" />
        </div>
      </section>

      <section className="section certificate-section" id="certificate">
        <div>
          <p className="section-tag">Authorized & Certificate</p>
          <h2>Certificate of Appreciation</h2>
          <p>
            Presented for outstanding contribution in photography and videography for
            Decathlon Sports Utsav events conducted by Decathlon.
          </p>
        </div>
        <div className="certificate-frame">
          <img src={certificate} alt="Decathlon certificate" />
        </div>
      </section>
<section className="pricing-table-section" id="offers">

<h2 className="offer-main-title">OUR SPECIAL OFFERS</h2>
<div className="offer-row">

  <div className="offer-card">
    <div className="offer-badge">PRE WEDDING</div>

    <div className="price-box">
      <h2>Starting ₹19,999</h2>
    </div>

    <p>✔ 3 Premium Packages Available</p>
    <p>✔ Cinematic Videos</p>
    <p>✔ Edited Photos</p>
    <p>✔ Reels Included</p>
    <p>✔ Makeup Artist Available</p>

    <a className="book-btn" href="/prewedding">
      VIEW ALL PACKAGES
    </a>
  </div>

  <div className="offer-card">
    <div className="offer-badge">SONG SHOOT</div>

    <div className="price-box">
      <h2>Starting ₹6,999</h2>
    </div>

    <p>✔ 3 Song Shoot Packages</p>
    <p>✔ 4K Production</p>
    <p>✔ Thumbnail Design</p>
    <p>✔ Poster Photos</p>
    <p>✔ Sony FX3 Available</p>

    <a className="book-btn" href="/songshoot">
      VIEW ALL PACKAGES
    </a>
  </div>

</div>

</section>
  <section className="contact" id="contact">

  <p className="section-tag">CONTACT</p>

  <h2>Get In Touch</h2>

  <a className="contact-email" href={`mailto:${email}`}>
    <FaEnvelope />
    {email}
  </a>

  <div className="contact-socials">

    <a href={instagramLink} target="_blank" rel="noreferrer">
      <FaInstagram />
      Instagram
    </a>

    <a href={youtubeChannel} target="_blank" rel="noreferrer">
      <FaYoutube />
      YouTube
    </a>

    <a href={googleBusinessLink} target="_blank" rel="noreferrer">
      <FaGoogle />
      Google Business
    </a>

  </div>

</section>
      <footer>
        <div className="footer-brand">
          <span>RL MEDIA</span>
        </div>

        <div className="footer-links">
          <a href={instagramLink} target="_blank" rel="noreferrer">
            Instagram
          </a>

          <a href={youtubeChannel} target="_blank" rel="noreferrer">
            YouTube Channel
          </a>

          <a href={googleBusinessLink} target="_blank" rel="noreferrer">
            Google Business
          </a>
        </div>

        <p>
          All rights reserved by RL MEDIA @2026 Photography and Videography.
        </p>
      </footer>

    </main>
  )
}
export default App
