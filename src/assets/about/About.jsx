import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

const SKILLS = ["React","Node.js","Express","MongoDB","Tailwind","GSAP"];
const STATS  = [{ num:"15+", label:"Projects" },{ num:"2+", label:"Years Learning" },{ num:"100%", label:"Passion" }];

export default function About() {
  const sectionRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* Image — slide from left */
      gsap.fromTo(".about-img-wrapper",
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.1, ease: "power3.out",
          scrollTrigger: { trigger: ".about-img-wrapper", start: "top 80%", once: true } }
      );

      /* Tag line */
      gsap.fromTo(".about-tag",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power2.out",
          scrollTrigger: { trigger: ".about-tag", start: "top 82%", once: true } }
      );

      /* Heading — letters slide up */
      gsap.fromTo(".about-heading",
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: ".about-heading", start: "top 85%", once: true } }
      );

      /* Description */
      gsap.fromTo(".about-desc",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: ".about-desc", start: "top 88%", once: true } }
      );

      /* Skill pills stagger */
      gsap.fromTo(".skill-pill",
        { scale: 0.6, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, stagger: 0.07, ease: "back.out(1.7)",
          scrollTrigger: { trigger: ".skill-pills", start: "top 88%", once: true } }
      );

      /* Stats count-up */
      gsap.fromTo(".about-stat",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: "power2.out",
          scrollTrigger: { trigger: ".about-stats-row", start: "top 88%", once: true } }
      );

      /* CTA */
      gsap.fromTo(".about-cta",
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power2.out",
          scrollTrigger: { trigger: ".about-cta", start: "top 90%", once: true } }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="about-left">
        <div className="about-img-wrapper">
          <img
            src="\Gemini_Generated_Image_sicp3fsicp3fsicp-removebg-preview.png"
            alt="Surya Tyagi"
            className="about-img"
          />
          <div className="about-img-accent" />
        </div>
      </div>

      <div className="about-right">
        <span className="about-tag">ABOUT ME</span>

        <h2 className="about-heading">
          Passionate Full Stack<br />
          <span className="about-heading-accent">Developer</span>
        </h2>

        <p className="about-desc">
          I'm Surya Tyagi, a Full Stack Developer from Delhi. I craft modern,
          scalable web applications using the MERN stack — with a strong
          eye for UI detail and animation.
        </p>

        <div className="skill-pills">
          {SKILLS.map(s => <span className="skill-pill" key={s}>{s}</span>)}
        </div>

        <div className="about-stats-row">
          {STATS.map(({ num, label }) => (
            <div className="about-stat" key={label}>
              <h3 className="stat-num-about">{num}</h3>
              <p className="stat-label-about">{label}</p>
            </div>
          ))}
        </div>

        <div className="about-cta">
          <a href="/Surya_Tyagi_Cv.pdf" download className="btn-primary">↓ Download CV</a>
          <a href="mailto:2040surya@gmail.com" className="btn-secondary">Say Hello →</a>
        </div>
      </div>
    </section>
  );
}