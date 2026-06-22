import React, { useEffect } from "react";
import "./home.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    /* ── Entrance animations ── */
    const tl = gsap.timeline();
    tl.from(".tech-badge",      { y: -30, opacity: 0, duration: 0.8 })
      .from(".hero-date",       { x: -50, opacity: 0, duration: 0.6 })
      .from(".hero-title-small",{ x: -80, opacity: 0, duration: 0.6 })
      .from(".hero-title-big",  { y: 100, opacity: 0, duration: 1, ease: "power4.out" })
      .from(".hero-desc",       { y: 40,  opacity: 0, duration: 0.8 })
      .from(".hero-actions",    { y: 40,  opacity: 0, duration: 0.6 })
      .from(".hero-social a",   { y: 20,  opacity: 0, stagger: 0.15, duration: 0.4 })
      .from(".hero-photo",      { scale: 0.5, opacity: 0, duration: 0.6, ease: "back.out(1.7)" }, "-=1")
      .from(".stat-item",       { y: 40,  opacity: 0, stagger: 0.2, duration: 0.6 });

    /* ── Floating photo ── */
    gsap.to(".hero-photo", {
      y: -15, duration: 2, repeat: -1, yoyo: true, ease: "power1.inOut",
    });

    /* ── Scroll line ── */
    gsap.to(".scroll-line", {
      height: 100, repeat: -1, yoyo: true, duration: 1.5, ease: "power1.inOut",
    });

    /* ── Portfolio text overlay ── */
    gsap.from(".portfolio-text-overlay", { scale: 0.8, opacity: 0, duration: 1.5, delay: 1 });

    /* ── ScrollTrigger: fade stats when scrolling past hero ── */
    gsap.to(".hero-stats", {
      opacity: 0, y: -30,
      scrollTrigger: { trigger: ".hero", start: "80% top", end: "bottom top", scrub: true },
    });

    /* ── Parallax on hero photo ── */
    gsap.to(".hero-right", {
      yPercent: -15,
      ease: "none",
      scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section className="hero" id="home">
      {/* Left Content */}
      <div className="hero-left">
        <div className="tech-badge">
          <span className="dot" />
          Available for Freelance / Internship
        </div>
        <p className="hero-date">JUNE / 2026 &nbsp;·&nbsp; DELHI, INDIA</p>
        <p className="hero-title-small">CREATIVE</p>
        <h1 className="hero-title-big">
          PORT<br /><span className="outline">FOLIO</span>
        </h1>
        <p className="hero-desc">
          <strong>Surya Tyagi</strong> — Full Stack Developer building{" "}
          <strong>production-ready</strong> MERN applications.
        </p>
        <div className="hero-actions">
          <a href="/Surya_Tyagi_Cv.pdf" download className="btn-primary">↓ Download CV</a>
          <button onClick={() => document.getElementById("projects")
            ?.scrollIntoView({ behavior:"smooth" })} className="btn-secondary">
            View Projects →
          </button>
        </div>
        <div className="hero-social">
          <a href="https://github.com/SsuryaTyagi" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/surya-tyagi-71a899361/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:2040surya@gmail.com">Email</a>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>
      </div>

      {/* Right Photo */}
      <div className="hero-right">
        <div className="photo-container">
          <img
            src="\Gemini_Generated_Image_sicp3fsicp3fsicp-removebg-preview.png"
            alt="Surya Tyagi"
            className="hero-photo"
          />
        </div>
        <div className="hero-stats">
          {[["2+","Projects"],["5+","Tech Stack"],["100%","Passion"]].map(([n,l]) => (
            <div className="stat-item" key={l}>
              <div className="stat-num">{n}</div>
              <div className="stat-label">{l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="portfolio-text-overlay">PORTFOLIO</div>
      <div className="float-line-1" />
    </section>
  );
}