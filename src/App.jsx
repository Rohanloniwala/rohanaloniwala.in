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
const whatsappNumber = '918076869370'
const contactNumber = '8076869370'
const email = 'photography.rlmedia@gmail.com'
const instagramLink = 'https://www.instagram.com/rohan_loniwala/'
const youtubeChannel = 'https://youtube.com/@pradhanrecords?si=QxtWKT9GKcvTyUfA'

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
<section className="pricing-table-section" id="offers">

<h2 className="offer-main-title">OUR SPECIAL OFFERS</h2>

{/* PRE WEDDING */}

<div className="offer-group">
<h3 className="group-title">💛 PRE WEDDING OFFERS</h3>

<div className="offer-row">

<div className="offer-card">
<div className="offer-badge">OFFER 1</div>

<div className="price-box">
<span className="old-price">₹29,999</span>
<h2>₹19,999</h2>
</div>

<p>✔ 3-4 Min Video</p>
<p>✔ Shooting in Delhi Includes</p>
<p>✔ 50 Edited Photos</p>
<p>✔ 100 Raw Photos</p>
<p>✔ Location in Delhi</p>

<a
className="book-btn"
href={wa('PRE WEDDING OFFER 1')}
target="_blank"
rel="noreferrer"
>
BOOK NOW
</a>
</div>

<div className="offer-card">
<div className="offer-badge">OFFER 2</div>

<div className="price-box">
<span className="old-price">₹39,999</span>
<h2>₹24,999</h2>
</div>

<p>✔ 3-4 Min Video</p>
<p>✔ Shooting in Delhi Includes</p>
<p>✔ 50 Edited Photos</p>
<p>✔ 100 Raw Photos</p>
<p>✔ Location in Delhi</p>
<p>✔ 2 Reels For Instagram & YouTube Shorts</p>

<a
className="book-btn"
href={wa('PRE WEDDING OFFER 2')}
target="_blank"
rel="noreferrer"
>
BOOK NOW
</a>
</div>

<div className="offer-card bestseller">
<div className="ribbon">BEST SELLER</div>

<div className="offer-badge">OFFER 3</div>

<div className="price-box">
<span className="old-price">₹44,999</span>
<h2>₹34,999</h2>
</div>

<p>✔ 3-4 Min Video</p>
<p>✔ Delhi / Rishikesh Shoot</p>
<p>✔ 100 Edited Photos</p>
<p>✔ 200 Raw Photos</p>
<p>✔ Delhi OR Rishikesh (Choose One)</p>
<p>✔ 2 Instagram Reels</p>
<p>✔ 2 Wedding Ceremony Reels</p>
<p>✔ Makeup Artist</p>

<a
className="book-btn"
href={wa('PRE WEDDING OFFER 3')}
target="_blank"
rel="noreferrer"
>
BOOK NOW
</a>
</div>

</div>
</div>

{/* SONG SHOOT */}

<div className="offer-group">

<h3 className="group-title">🎵 SONG SHOOT OFFERS</h3>

<div className="offer-row">

<div className="offer-card">

<div className="offer-badge">OFFER 1</div>

<div className="price-box">
<span className="old-price">₹10,000</span>
<h2>₹6,999</h2>
</div>

<p>✔ Song Direction</p>
<p>✔ 4K Video</p>
<p>✔ Thumbnail</p>
<p>✔ 10-20 Poster Photos</p>

<a
className="book-btn"
href={wa('SONG SHOOT OFFER 1')}
target="_blank"
rel="noreferrer"
>
BOOK NOW
</a>
</div>

<div className="offer-card">

<div className="offer-badge">OFFER 2</div>

<div className="price-box">
<span className="old-price">₹19,999</span>
<h2>₹14,999</h2>
</div>

<p>✔ Song Direction</p>
<p>✔ 4K Video</p>
<p>✔ Thumbnail</p>
<p>✔ 10-20 Poster Photos</p>
<p>✔ Delhi Location (5 Hours)</p>
<p>✔ Normal Light</p>
<p>✔ Car For Video</p>

<a
className="book-btn"
href={wa('SONG SHOOT OFFER 2')}
target="_blank"
rel="noreferrer"
>
BOOK NOW
</a>
</div>

<div className="offer-card bestseller">

<div className="ribbon">BEST SELLER</div>

<div className="offer-badge">OFFER 3</div>

<div className="price-box">
<span className="old-price">₹29,999</span>
<h2>₹19,999</h2>
</div>

<p>✔ Song Direction</p>
<p>✔ Sony FX3</p>
<p>✔ 4K Video</p>
<p>✔ Thumbnail</p>
<p>✔ 10-20 Poster Photos</p>
<p>✔ Delhi Location (5 Hours)</p>
<p>✔ Normal Light</p>
<p>✔ Car For Video</p>

<a
className="book-btn"
href={wa('SONG SHOOT OFFER 3')}
target="_blank"
rel="noreferrer"
>
BOOK NOW
</a>
</div>

</div>
</div>

</section>
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

      <section className="contact" id="contact">
        <img className="contact-logo" src={logo} alt="RL MEDIA logo" />
        <p className="section-tag">Contact</p>
        <h2>Book RL MEDIA for your next shoot</h2>
        <p className="contact-note">
For bookings and collaborations, contact us by email.
</p>

        <div className="contact-card">
  <h3>Email</h3>
  <a href={`mailto:${email}`}>{email}</a>
</div>
               </section>

      <footer>
        <div className="footer-brand">
          <img src={logo} alt="RL MEDIA logo" />
          <span>RL MEDIA</span>
        </div>
        <div className="footer-links">
          <a href={instagramLink} target="_blank" rel="noreferrer">Instagram</a>
          <a href={youtubeChannel} target="_blank" rel="noreferrer">YouTube Channel</a>
        </div>
        <p>All rights reserved by RL MEDIA @2026 Photography and Videography.</p>
      </footer>
    </main>
  )
}

export default App
