// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
            <Link to="/">Home</Link>
            <Link to="/careers">Careers</Link>
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
            <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/careers" onClick={() => setMenuOpen(false)}>Careers</Link>
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


/* ---------- static data ---------- */

const JOBS = [
  {
    id: 1,
    title: 'Frontend Developer',
    location: 'Remote',
    description: `The Frontend Web Developer will be responsible for building custom, high-performance web apps using modern technologies that scale with the business. Additionally, they will work on responsive web design and collaborate with back-end developers and designers.

Qualifications

- Front-End Development and Responsive Web Design skills
- Experience in Software Development and Web Development
- Knowledge of Back-End Web Development
- Proficiency in HTML, CSS, and JavaScript
- Understanding of UI/UX principles
- Experience with modern web development frameworks like React or Angular
- Excellent problem-solving and analytical skills
- Bachelor's degree in Computer Science or related field
`,
    experience: '1+ years',
    rounds: '3 (Online Assignment, Technical, HR)',
    skills: ['HTML','CSS','Bootstrap', 'JavaScript','TypeScript','React js', 'Tailwind CSS'],
  },
];

const Jobs = () => {
  const [descOpen, setDescOpen] = useState(null);     // which description is open
  const [showForm, setShowForm] = useState(false);    // toggle modal
  const [selectedJob, setSelectedJob] = useState(null);

  const [formData, setFormData] = useState({
    name: '', email: '', mobile: '',
    gender: '', degree: '', experience: '',
    howKnow: '', resume: '',position:"frontend"
  });

  /* ---------- helpers ---------- */
  const toggleDesc   = id  => setDescOpen(descOpen === id ? null : id);
  const handleChange = e   =>
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const handleApplyClick = job => { setSelectedJob(job); setShowForm(true); };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch('https://brightloomserver.onrender.com/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, jobId: selectedJob.id }),
      });
      if (res.ok) {
        alert(`Application submitted for ${selectedJob.title}!`);
        setShowForm(false);
        setFormData({
          name: '', email: '', mobile: '',
          gender: '', degree: '', experience: '',
          howKnow: '', resume: '',position:''
        });
      } else alert('Something went wrong – please try again.');
    } catch (err) {
      console.error(err);
      alert('Network error – please try again later.');
    }
  };

  /* ---------- UI ---------- */
  return (
    <section id="Careers" className="section-ui">
      <h2 className="section-title-ui">Open Positions</h2>

      <div className="card-container-ui">
        {JOBS.map(job => (
          <article className="glass-card-ui" key={job.id}>
            <h3>{job.title}</h3>
            <p className="subtitle-ui">{job.location}</p>

            <ul className="meta">
              <li><strong>Experience:</strong> {job.experience}</li>
              <li><strong>Rounds:</strong> {job.rounds}</li>
              <li><strong>Skills:</strong> {job.skills.join(', ')}</li>
            </ul>

            <button className="card-btn" onClick={() => toggleDesc(job.id)}>
              {descOpen === job.id ? 'Hide Description' : 'Show Description'}
            </button>
            {descOpen === job.id && <p className="desc">{job.description}</p>}

            <button className="apply-btn" onClick={() => handleApplyClick(job)}>
              Apply
            </button>
          </article>
        ))}
      </div>

      {showForm && (
        <div className="modal-overlay" role="dialog" aria-modal="true">
          <div className="modal">
            <button
              className="close-btn"
              aria-label="Close"
              onClick={() => setShowForm(false)}
            >
              &times;
            </button>

            <h3 className="modal-title">Apply for {selectedJob?.title}</h3>

            <form className="form-container" onSubmit={handleSubmit}>
              <input  name="name"       placeholder="Name"                       value={formData.name}       onChange={handleChange} required />
              <input  name="email"      type="email" placeholder="Email"         value={formData.email}      onChange={handleChange} required />
              <input  name="mobile"     type="tel"   placeholder="Mobile"        value={formData.mobile}     onChange={handleChange} required />

              <select name="gender" value={formData.gender} onChange={handleChange} required>
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>

              <select name="degree" value={formData.degree} onChange={handleChange} required>
                <option value="">Highest Degree</option>
                <option value="btech">B.Tech</option>
                <option value="bsc">B.Sc</option>
                <option value="btech">M.Tech</option>
                <option value="bsc">BAA</option>


                <option value="other">Other</option>
              </select>

              <input  name="experience" placeholder="Experience (e.g. 2 yrs React)" value={formData.experience} onChange={handleChange} required />
              <input  name="howKnow"    placeholder="How did you hear about us?"    value={formData.howKnow}    onChange={handleChange} required />
              <input  name="resume"     type="url" placeholder="Resume Link (Drive, Dropbox…)" value={formData.resume} onChange={handleChange} required />

              <button type="submit" className="submit-btn">Submit Application</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="section">
    <h2 className="section-title">Contact Us</h2>
    <form className="glass-form" onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
      <input type="text" className="contact-input" placeholder="Name" required />
      <input type="email" className="contact-input" placeholder="Email" required />
      <textarea className="contact-textarea" placeholder="Message" required></textarea>
      <button type="submit" className="contact-btn">Send</button>
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
            <Link to="/"> Home</Link>
            <Link to="/about"> About</Link>
            <Link to="/services"> Services</Link>
            <Link to="/contact"> Contact</Link>
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

function NotFound() {
  return (
    <section className="section">
      <h2 className="section-title">404 - Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="card-btn">Go Home</Link>
    </section>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <TopSection />
        <Routes>
          <Route path="/" element={
            <>
              <About />
              <Services />
              <Contact />
            </>
          } />
          <Route path="/careers" element={<Jobs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
