'use client';

import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="page-shell">
      <header className="topbar">
        <a href="#hero" className="brand">
          Ammad<span className="brand-tag">Full-Stack UI/UX</span>
        </a>

        <button
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a
            className="button tertiary nav-resume"
            href="/resume.pdf"
            download
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </a>
          <a
            className="nav-link-external"
            href="https://github.com/SplashyFolks/Ammad-portfolio"
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            GitHub
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="hero">
          <div className="hero-copy">
            <p className="eyebrow">Full-Stack Web Developer & UI/UX Designer</p>
            <h1>Hi, I’m <span>Ammad</span>.</h1>
            <p className="hero-description">
              I build next-generation web applications with premium UI/UX and strong backend logic. Combining 4 years of graphic design expertise with modern full-stack development, I deliver high-performance, beautiful digital experiences.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">Work with me</a>
              <a className="button secondary" href="#projects">See projects</a>
              <a className="button tertiary" href="/resume.pdf" download>Download Resume</a>
            </div>
          </div>
          <div className="hero-panel">
            <div className="panel-card">
              <h2>What I do</h2>
              <p>
                Build responsive, scalable React and Next.js frontends, implement robust Python/Django backends, and design polished interfaces that convert.
              </p>
              <ul>
                <li>Frontend: Next.js, React.js, HTML5, CSS3, JavaScript (ES6+)</li>
                <li>Backend: Python, Django, REST APIs, SQL/NoSQL</li>
                <li>Design: UI/UX, wireframes, prototypes, branding</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-header">
            <p className="eyebrow">About</p>
            <h2>Modern development with a designer's edge.</h2>
          </div>
          <div className="split-grid">
            <div>
              <p>
                I’m a full-stack developer who brings a strong visual design background into every project. My work focuses on clean architecture, fast performance, and seamless user experiences. I help businesses and creators take their ideas from concept to polished product.
              </p>
              <p>
                Instead of calling myself a newcomer, I position myself as a forward-thinking developer that values precision, aesthetics, and real product outcomes. If you want a website that looks sharp and works reliably, I’m the partner you need.
              </p>
            </div>
            <div className="info-grid">
              <div className="info-card">
                <h3>Design foundation</h3>
                <p>4 years as a professional graphic designer means every interface I build has strong visual hierarchy and brand consistency.</p>
              </div>
              <div className="info-card">
                <h3>Web-first development</h3>
                <p>I build frontend-first experiences with React and Next.js, then layer in backend systems using Django and APIs.</p>
              </div>
              <div className="info-card">
                <h3>Business-ready delivery</h3>
                <p>I care about clean code, responsive design, and launch-ready projects that help clients grow.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section accent" id="skills">
          <div className="section-header light">
            <p className="eyebrow">Expertise</p>
            <h2>Technical and creative strengths.</h2>
          </div>
          <div className="skill-grid">
            <div className="skill-card">
              <h3>Frontend Development</h3>
              <p>Next.js, React.js, HTML5, CSS3, Tailwind, JavaScript (ES6+), responsive UI.</p>
            </div>
            <div className="skill-card">
              <h3>Backend & APIs</h3>
              <p>Python, Django, REST APIs, database modeling, secure server-side architecture.</p>
            </div>
            <div className="skill-card">
              <h3>UI/UX Design</h3>
              <p>User research, wireframing, interface design, conversion-focused interactions, modern digital storytelling.</p>
            </div>
            <div className="skill-card">
              <h3>Design & Business Tools</h3>
              <p>Adobe Photoshop, Illustrator, Microsoft Word, Excel, social media content, branding systems.</p>
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-header">
            <p className="eyebrow">Projects</p>
            <h2>Selected work and live builds.</h2>
          </div>
          <div className="project-grid">
            <article className="project-card">
              <h3>Ecommerce Frontend</h3>
              <p>React-powered storefront with polished UI, dynamic product presentation, and performance-first layout.</p>
              <a href="https://ecommerce-frontend-react-lyart.vercel.app/" target="_blank" rel="noreferrer">View live</a>
            </article>
            <article className="project-card">
              <h3>Midlumes Platform</h3>
              <p>Clean, modern web experience with strong branding and fluid navigation for a digital product site.</p>
              <a href="https://midlumes.com/" target="_blank" rel="noreferrer">View live</a>
            </article>
            <article className="project-card">
              <h3>Gaming Landing Page</h3>
              <p>Bold gaming site build with immersive visuals, fast loading, and compelling CTA-driven design.</p>
              <a href="https://gaming-site-rust.vercel.app/" target="_blank" rel="noreferrer">View live</a>
            </article>
          </div>
        </section>

        <section className="section contact-panel" id="contact">
          <div className="section-header">
            <p className="eyebrow">Contact</p>
            <h2>Let's build something exceptional.</h2>
          </div>
          <div className="contact-grid">
            <div>
              <div className="contact-copy">
                <p>
                  I take on projects that need both strong development and polished design. If you want a fast, responsive website or a complete app launch, I’m ready to help.
                </p>
                <p>
                  Message me and let’s create a high-performing digital experience that looks great and converts.
                </p>
              </div>
              <form className="contact-form" id="contact-form">
                <label>
                  Name
                  <input type="text" id="contact-name" placeholder="Your name" required />
                </label>
                <label>
                  Email
                  <input type="email" id="contact-email" placeholder="your@email.com" required />
                </label>
                <label>
                  Message
                  <textarea id="contact-message" rows={5} placeholder="Tell me about your project" required />
                </label>
                <button className="button primary" type="submit">Send request</button>
                <p className="form-message" id="form-message"></p>
              </form>
            </div>
            <div className="contact-card">
              <h3>Work request</h3>
              <p>Email</p>
              <a href="mailto:ammad@example.com">ammad@example.com</a>
              <p>Availability</p>
              <span>Freelance / Project-based work</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Built by Ammad — full-stack web development with a creative design edge.</p>
      </footer>
    </div>
  );
}
