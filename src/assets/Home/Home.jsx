
import React from 'react'
import "./home.css"

export default function Home() {
  return (
    <div>
        {/* <!-- NAVBAR --> */}
  <nav>
    <a href="#" class="nav-logo">SURYA<span>.</span></a>
    <ul class="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Projects</a></li>
      <li><a href="#">Skills</a></li>
      <li><a href="#" class="nav-cta">Hire Me</a></li>
    </ul>
  </nav>

  {/* <!-- HERO SECTION --> */}
  <section class="hero">

    {/* <!-- Left Content --> */}
    <div class="hero-left">

      <div class="tech-badge">
        <span class="dot"></span>
        Available for Freelance / Internship
      </div>

      <p class="hero-date">JUNE / 2025 &nbsp;&nbsp;·&nbsp;&nbsp; DELHI, INDIA</p>

      <p class="hero-title-small">CREATIVE</p>

      <h1 class="hero-title-big">
        PORT<br/>
        <span class="outline">FOLIO</span>
      </h1>

      <p class="hero-desc">
        <strong>Surya Tyagi</strong> — Full Stack Developer building <strong>production-ready</strong> MERN applications. From real payment integrations to AI-powered music apps.
      </p>

      <div class="hero-actions">
        <a href="Surya_Tyagi_Cv.pdf" download class="btn-primary">
          ↓ Download CV
        </a>
        <a href="#" class="btn-secondary">
          View Projects →
        </a>
      </div>

      {/* <!-- Social Links --> */}
      <div class="hero-social">
        <a href="https://github.com/SsuryaTyagi" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/surya-tyagi-71a899361/" target="_blank">LinkedIn</a>
        <a href="mailto:2040surya@gmail.com">Email</a>
      </div>

      {/* <!-- Scroll Indicator --> */}
      <div class="scroll-indicator">
        <div class="scroll-line"></div>
        <span>Scroll</span>
      </div>

    </div>

    {/* <!-- Right Photo --> */}
    <div class="hero-right">
      <div class="photo-container">
        <img 
          src="data:image/jpeg;base64,${PHOTO_B64}" 
          alt="Surya Tyagi" 
          class="hero-photo"
        />
        <div class="photo-overlay"></div>
        <div class="photo-overlay-bottom"></div>
      </div>

      {/* <!-- Stats --> */}
      <div class="hero-stats">
        <div class="stat-item">
          <div class="stat-num">2+</div>
          <div class="stat-label">Projects</div>
        </div>
        <div class="stat-item">
          <div class="stat-num">5+</div>
          <div class="stat-label">Tech Stack</div>
        </div>
        <div class="stat-item">
          <div class="stat-num">100%</div>
          <div class="stat-label">Passion</div>
        </div>
      </div>
    </div>

    {/* <!-- Big Portfolio Text Overlay --> */}
    <div class="portfolio-text-overlay">PORTFOLIO</div>

    {/* <!-- Decorative Line --> */}
    <div class="float-line-1"></div>

  </section>
    </div>
  )
}
