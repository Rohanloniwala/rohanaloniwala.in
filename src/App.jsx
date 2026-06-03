import { useEffect } from "react";
import logo from './assets/logo.png'
import posterKispe from './assets/poster-kispe-main.jpeg'
import posterBirthday from './assets/poster-birthday.png'
import posterUp from './assets/poster-up-ka-kon-kehvega.png'
import posterBin from './assets/poster-bin-olhe-ke.png'
import decathlonOne from './assets/decathlon-event-1.jpeg'
import decathlonTwo from './assets/decathlon-event-2.jpeg'
import certificate from './assets/decathlon-certificate.png'
import whatsappQr from './assets/whatsapp-qr.svg'

const whatsappNumber = '917053120268'
const instagramLink = 'https://www.instagram.com/rohan_loniwala/'
const youtubeChannel = 'https://youtube.com/@pradhanrecords?si=QxtWKT9GKcvTyUfA'

const wa = (reason) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hello RL MEDIA, I want to contact you for ${reason}. Please share details.`
  )}`

const services = [
  ['Photography', 'Professional photos for every moment'],
  ['Cinematography', 'Cinematic frames and storytelling'],
  ['Video Editing', 'Reels, highlights and full edits'],
  ['Director', 'Creative direction for shoots'],
  ['Event Photography', 'Corporate, sports and brand events'],
  ['Pre-wedding Photography', 'Premium couple shoots'],
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
    image: posterUp,
    link: 'https://youtu.be/_ajID01L_58?si=CVchjGzPbtqUf9EF',
  },
  {
    title: 'Bin Olhe Ke',
    image: posterBin,
    link: 'https://youtu.be/UpdO8OIkQSg?si=R-_4EPnzzxROmgxW',
  },
]

function App() {

  useEffect(() => {
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src =
      "https://www.googletagmanager.com/gtag/js?id=G-L78VCK45VV";
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-L78VCK45VV');
    `;
    document.head.appendChild(script2);
  }, []);

  return (
    <main>
      <a className="floating-whatsapp" href={wa('general enquiry')} target="_blank" rel="noreferrer">
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
            <a href="#services">Menu</a>
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
              <a className="btn primary" href={wa('wedding, event or shoot enquiry')} target="_blank" rel="noreferrer">
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
      </section>
<section id="pricing" className="pricing-section">

<h2>RL MEDIA OFFERS</h2>

<div className="pricing-columns">

<div className="offer-group prewedding">

<h3>PRE WEDDING OFFERS</h3>

<div className="offer-card">
<h4>Offer 1</h4>
<p><del>₹29,999</del></p>
<h2>₹19,999</h2>
<ul>
<li>3-4 Min Video</li>
<li>50 Edited Photos</li>
<li>100 Raw Photos</li>
<li>Delhi Location</li>
</ul>
</div>

<div className="offer-card">
<h4>Offer 2</h4>
<p><del>₹39,999</del></p>
<h2>₹24,999</h2>
<ul>
<li>3-4 Min Video</li>
<li>50 Edited Photos</li>
<li>100 Raw Photos</li>
<li>Delhi Location</li>
<li>2 Reels</li>
</ul>
</div>

<div className="offer-card">
<h4>Offer 3</h4>
<p><del>₹44,999</del></p>
<h2>₹34,999</h2>
<ul>
<li>3-4 Min Video</li>
<li>100 Edited Photos</li>
<li>200 Raw Photos</li>
<li>Delhi / Rishikesh</li>
<li>2 Reels</li>
<li>Makeup Artist</li>
</ul>
</div>

</div>

<div className="offer-group songshoot">

<h3>SONG SHOOT OFFERS</h3>

<div className="offer-card">
<h4>Offer 1</h4>
<p><del>₹10,000</del></p>
<h2>₹6,999</h2>
<ul>
<li>Song Direction</li>
<li>4K Video</li>
<li>Thumbnail</li>
<li>10-20 Poster Photos</li>
</ul>
</div>

<div className="offer-card">
<h4>Offer 2</h4>
<p><del>₹19,999</del></p>
<h2>₹14,999</h2>
<ul>
<li>Song Direction</li>
<li>4K Video</li>
<li>Thumbnail</li>
<li>Location 5 Hours</li>
<li>Normal Light</li>
<li>Car For Video</li>
</ul>
</div>

<div className="offer-card">
<h4>Offer 3</h4>
<p><del>₹29,999</del></p>
<h2>₹19,999</h2>
<ul>
<li>Song Direction</li>
<li>Sony FX3 Shoot</li>
<li>Thumbnail</li>
<li>Location 5 Hours</li>
<li>Normal Light</li>
<li>Car For Video</li>
</ul>
</div>

          <aside className="whatsapp-panel">
            <h2>Why do you want to contact?</h2>
            <p>Select one option and WhatsApp message will open automatically.</p>
            <a href={wa('wedding photography and videography')} target="_blank" rel="noreferrer">Wedding Enquiry <span>›</span></a>
            <a href={wa('event photography and videography')} target="_blank" rel="noreferrer">Event Enquiry <span>›</span></a>
            <a href={wa('music video shoot')} target="_blank" rel="noreferrer">Music Video Shoot <span>›</span></a>
            <a href={wa('pre-wedding shoot')} target="_blank" rel="noreferrer">Pre-wedding Shoot <span>›</span></a>
            <a href={wa('video editing or general enquiry')} target="_blank" rel="noreferrer">General Enquiry <span>›</span></a>
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

      <section className="section" id="services">
        <p className="section-tag">Menu / Services</p>
        <h2>What We Do</h2>
        <div className="service-grid">
          {services.map(([title, text]) => (
            <div className="service-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
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

      <section id="contact" className="contact-section">
  <h2>Book RL MEDIA For Your Next Shoot</h2>
  <p>
    Contact us for Pre-Wedding, Maternity, Music Video & Event Shoots
  </p>

  <div className="contact-grid">

    <div className="contact-card">
      <h3>Email</h3>
      <a href="mailto:photography.rlmedia@gmail.com">
        photography.rlmedia@gmail.com
      </a>
    </div>

    <div className="contact-card">
      <h3>Quick Enquiry</h3>

      <a
        className="wa-btn"
        href="https://wa.me/918076869370?text=I%20want%20Pre-Wedding%20Details"
        target="_blank"
      >
        Pre Wedding Enquiry
      </a>

      <a
        className="wa-btn"
        href="https://wa.me/918076869370?text=I%20want%20Maternity%20Shoot%20Details"
        target="_blank"
      >
        Maternity Shoot
      </a>

      <a
        className="wa-btn"
        href="https://wa.me/918076869370?text=I%20want%20Music%20Video%20Details"
        target="_blank"
      >
        Music Video Shoot
      </a>
    </div>

  </div>
</section>

         
          <div className="contact-card qr-card">
            <img src={whatsappQr} alt="WhatsApp scanner" />
            <h3>WhatsApp Scanner</h3>
            <a href={wa('booking enquiry')} target="_blank" rel="noreferrer">Message on WhatsApp</a>
          </div>
        </div>

</div>

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
        <p>© 2026 RL MEDIA. All Rights Reserved. Photography & Videography.</p>
      </footer>
    </main>
  )
}

export default App
