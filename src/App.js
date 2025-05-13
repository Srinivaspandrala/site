// App.js
import React, { useState } from 'react';
import { FaInstagram, FaTwitter, FaLinkedin, FaEnvelope, FaPhone, FaHome, FaInfoCircle, FaServicestack } from 'react-icons/fa';
import './App.css';

const TopSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="top-section">
      <div className="navbar" style={{ position: 'relative' }}>
        <img
          src="https://res.cloudinary.com/damoxc2du/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1747136395/LM_1_dgmtls.jpg"
          alt="Brightloom Logo"
          className="logo-img"
        />
        <div className="navbar-links">
          <nav>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#services">Services</a>

          </nav>
        </div>
        <button
          className="hamburger"
          aria-label="Open navigation menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' }} />
          <span style={{ opacity: menuOpen ? 0 : 1 }} />
          <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'none' }} />
        </button>
        {menuOpen && (
          <div className="mobile-menu">
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        )}
      </div>
      <div className="hero-content">
        <h2>Innovate. Analyze. Deploy.</h2>
        <p>
          Empowering your business with cutting-edge web apps, data-driven insights, machine learning, and scalable cloud solutions.
        </p>
      </div>
    </header>
  );
};

const AboutIntro = () => {
  return (
    <div className="about-intro">
      <h2 className="about-quote">
        "Empowering ideas. Elevating experiences. We’re here to make a difference."
      </h2>
      <p className="about-subtext">
        At Brightloom, we believe every project starts with passion and ends with purpose.
      </p>
    </div>
  );
};


const About = () => (
  <section id="about" className="section about-section">
    <div className="about-content glass-card">
          <h2 className="section-title">About us</h2>
      <p>
        At <strong>Brightloom</strong>, we specialize in crafting intelligent digital solutions that drive growth and efficiency. 
        With expertise in web application development, data analytics, machine learning, and cloud services, 
        we transform your ideas into scalable, smart systems. Our mission is to help startups, enterprises, 
        and individuals unlock the power of technology through innovation, precision, and excellence.
      </p>
      <p>
        Whether you're launching a digital product, analyzing complex data, or deploying scalable infrastructure — 
        we are your technology partners, every step of the way.
      </p>
      <button className="card-btn">Get to Know Us</button>
    </div>
  </section>
);

// services array stays the same
const services = [
  {
    title: 'Web App Development',
    subtitle: 'Custom frontend + backend apps',
    description: 'We build scalable SPAs, admin dashboards, and full-stack apps using React, Node.js, and modern stacks.',
    features: ['Responsive Design', 'API Integration', 'Admin Panels'],
    image: "https://res.cloudinary.com/damoxc2du/image/upload/v1747137295/asset1_cp7gza.svg"
  },
  {
    title: 'Data Analytics',
    subtitle: 'Turn raw data into insights',
    description: 'Unlock business growth with real-time dashboards, data visualization, and strategic reporting tools.',
    features: ['Power BI & Tableau', 'Custom Dashboards', 'Data Cleaning'],
    image: "https://res.cloudinary.com/damoxc2du/image/upload/v1747137379/undraw_data-analysis_b7cp_wc3fz8.svg"
  },
  {
    title: 'Machine Learning',
    subtitle: 'Smart models that learn',
    description: 'From predictive analytics to image processing, our ML solutions adapt and grow with your data.',
    features: ['Classification & Regression', 'NLP & Vision', 'Model Deployment'],
    image: "https://res.cloudinary.com/damoxc2du/image/upload/v1747137487/undraw_artificial-intelligence_fuvd_kgp70t.svg"
  },
  {
    title: 'Cloud Services',
    subtitle: 'Deploy & scale with confidence',
    description: 'We manage your cloud infrastructure, CI/CD pipelines, backups, and monitoring using AWS & GCP.',
    features: ['AWS/GCP/Azure', 'Serverless Setup', 'DevOps Automation'],
    image: "https://res.cloudinary.com/damoxc2du/image/upload/v1747137488/undraw_cloud-hosting_tfeh_a68irz.svg"
  },
];

const Services = () => (
  <section id="services" className="section">
    <h2 className="section-title">Our Services</h2>
    <div className="card-container">
      {services.map((service, idx) => (
        <div className="glass-card advanced-card" key={idx}>
          <img src={service.image} alt={service.title} className="card-img" />
          <h3>{service.title}</h3>
          <h4 className="subtitle">{service.subtitle}</h4>
          <p className="desc">{service.description}</p>
          <ul className="features-list">
            {service.features.map((feat, index) => (
              <li key={index}>✅ {feat}</li>
            ))}
          </ul>
          <button className="card-btn">Learn More</button>
        </div>
      ))}
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="section">
    <h2 className="section-title">Contact Us</h2>
    <form className="glass-form" onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
      <input type="text" placeholder="Name" required />
      <input type="email" placeholder="Email" required />
      <textarea placeholder="Message" required></textarea>
      <button type="submit">Send</button>
    </form>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      
        <div className="footer-left">
          <p>&copy; {new Date().getFullYear()} Brightloom. All rights reserved.</p>
          <p><FaEnvelope /> Email: <a href="mailto:brightloomhelp@gmail.com"> brightloomhelp@gmail.com</a></p>
          <p><FaPhone /> Phone: <a href="tel:+918341631479">+91 8341631479</a></p>
        </div>

        <div className="footer-nav-section">
          <nav className="footer-nav">
            <a href="/"> Home</a>
            <a href="/about"> About</a>
            <a href="/services"> Services</a>
            <a href="/contact"> Contact</a>
          </nav>
        </div>

      <div className="footer-social">
        <p>Follow us on:</p>
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com/company/brightloomtech/about/?viewAsMember=" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        </div>
      </div>

    </div>
  </footer>
);



function App() {
  return (
    <div className="App">
      <TopSection />
      <About/>

      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
