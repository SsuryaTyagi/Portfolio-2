import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import About from "./about/About";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const PHOTO =
  "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";

export default function Home() {
 useEffect(() => {
  const tl = gsap.timeline();

  tl.from(".tech-badge", {
    y: -30,
    opacity: 0,
    duration: 0.8,
  })
    .from(".hero-date", {
      x: -50,
      opacity: 0,
      duration: 0.6,
    })
    .from(".hero-title-small", {
      x: -80,
      opacity: 0,
      duration: 0.6,
    })
    .from(".hero-title-big", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    })
    .from(".hero-desc", {
      y: 40,
      opacity: 0,
      duration: 0.8,
    })
    .from(".hero-actions", {
      y: 40,
      opacity: 0,
      duration: 0.6,
    })
    .from(".hero-social a", {
      y: 20,
      opacity: 0,
      stagger: 0.15,
      duration: 0.4,
    })
    .from(
      ".hero-photo",
      {
        scale: 0.5,
        opacity: 0,
        duration: 1.2,
        ease: "back.out(1.7)",
      },
      "-=1"
    )
    .from(".stat-item", {
      y: 40,
      opacity: 0,
      stagger: 0.2,
      duration: 0.6,
    });

  gsap.to(".hero-photo", {
    y: -15,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  });

  gsap.from(".portfolio-text-overlay", {
    scale: 0.8,
    opacity: 0,
    duration: 1.5,
    delay: 1,
  });

  gsap.to(".scroll-line", {
    height: 100,
    repeat: -1,
    yoyo: true,
    duration: 1.5,
    ease: "power1.inOut",
  });
}, []);
  return (
    <div>

      {/* HERO SECTION */}
      <section className="hero">
        {/* Left Content */}
        <div className="hero-left">
          <div className="tech-badge">
            <span className="dot"></span>
            Available for Freelance / Internship
          </div>

          <p className="hero-date">
            JUNE / 2025 &nbsp;&nbsp;·&nbsp;&nbsp; DELHI, INDIA
          </p>

          <p className="hero-title-small">CREATIVE</p>

          <h1 className="hero-title-big">
            PORT
            <br />
            <span className="outline">FOLIO</span>
          </h1>

          <p className="hero-desc">
            <strong>Surya Tyagi</strong> — Full Stack Developer building{" "}
            <strong>production-ready</strong> MERN applications. From real
            payment integrations to AI-powered music apps.
          </p>

          <div className="hero-actions">
            <a href="/Surya_Tyagi_Cv.pdf" download className="btn-primary">
              ↓ Download CV
            </a>
            <a href="#projects" className="btn-secondary">
              View Projects →
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-social">
            <a
              href="https://github.com/SsuryaTyagi"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/surya-tyagi-71a899361/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a href="mailto:2040surya@gmail.com">Email</a>
          </div>

          {/* Scroll Indicator */}
          <div className="scroll-indicator">
            <div className="scroll-line"></div>
            <span>Scroll</span>
          </div>
        </div>

        {/* Right Photo - Background Removed */}
        <div className="hero-right">
          <div className="photo-container">
            <img
              src="\WhatsApp_Image_2026-06-03_at_12.07.08_AM-removebg-preview.png"
              alt="Surya Tyagi"
              className="hero-photo"
            />
          </div>

          {/* Stats */}
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-num">2+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">5+</div>
              <div className="stat-label">Tech Stack</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">100%</div>
              <div className="stat-label">Passion</div>
            </div>
          </div>
        </div>

        {/* Big Portfolio Text Overlay */}
        <div className="portfolio-text-overlay">PORTFOLIO</div>

        {/* Decorative Line */}
        <div className="float-line-1"></div>
      </section>
    </div>
  );
}
