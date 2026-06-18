import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../project/Project.css";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    id: "shop",
    image: "/Screenshot 2026-06-05 195004.png",
    tag: "Live · Client Project",
    title: "Full Stack Food Ordering App",
    desc: "End-to-end food ordering platform built for a real local business client. Processes live payments via Razorpay and includes complete authentication, email verification, and cloud media storage.",
    points: [
      "Razorpay live mode — real UPI and card payments",
      "Google OAuth 2.0 + JWT with HTTP-only cookie sessions",
      "Email verification on signup via Nodemailer",
      "ImageKit CDN for media · Redis (ioredis) caching",
    ],
    stack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Razorpay",
    ],
    liveUrl: "https://web-shop-frontend.vercel.app/",
    codeUrl: "https://github.com/SsuryaTyagi/web-shop-frontend",
    status: "live",
  },
  {
    id: "face",
    image: "/Screenshot 2026-06-18 163111.png",
    tag: "AI / Browser-based",
    title: "Face Expression Music Recommender",
    desc: "Detects a user's facial expression in real-time via webcam using MediaPipe AI and recommends songs based on the detected mood — happy, sad, or normal.",
    points: [
      "Real-time face detection in-browser with @mediapipe/tasks-vision",
      "MP3 upload with automatic ID3 tag + cover art extraction",
      "Song and poster files stored on ImageKit CDN",
      "JWT auth with bcrypt password hashing",
    ],
    stack: [
      "React",
      "Vite",
      "MediaPipe",
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
    ],
    liveUrl: null,
    codeUrl: "https://github.com/SsuryaTyagi/FaceExpression-Frentend",
    status: "live",
  },
  {
    id: "underway",
    tag: "In Progress",
    title: "New Project — Coming Soon",
    desc: "Currently building something new. Full details, repo link, and live demo will be added here shortly.",
    points: [],
    stack: [],
    liveUrl: null,
    codeUrl: null,
    status: "underway",
  },
];

export default function Projects() {
  const sectionRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".projects-heading-block > *",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".projects-heading-block",
            start: "top 85%",
            once: true,
          },
        },
      );

      const cards = gsap.utils.toArray(".project-card");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 85%", once: true },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="projects" id="projects" ref={sectionRef}>
      <div className="projects-heading-block">
        <span className="projects-tag">SELECTED WORK</span>
        <h2 className="projects-heading">
          Things I've<span className="projects-heading-accent"> Built</span>
        </h2>
        <p className="projects-sub">
          Production apps with real payments, real auth, and real users — not
          just tutorials.
        </p>
      </div>

      <div className="projects-list">
        {PROJECTS.map((p) => (
          <article
            className={`project-card ${p.status === "underway" ? "is-underway" : ""}`}
            key={p.id}
          >
            <div className="project-card-top">
              <img src={p.image} alt={p.title} className="project-media" />
              
              <span className="project-tag">{p.tag}</span>
              {p.status === "underway" && <span className="status-dot" />}
            </div>

            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.desc}</p>

            {p.points.length > 0 && (
              <ul className="project-points">
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            )}

            {p.stack.length > 0 && (
              <div className="project-stack">
                {p.stack.map((s) => (
                  <span className="stack-pill" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            )}

            <div className="project-actions">
              {p.status === "underway" ? (
                <span className="btn-coming-soon">Coming Soon</span>
              ) : (
                <>
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-btn-primary"
                    >
                      Live Demo ↗
                    </a>
                  )}
                  {p.codeUrl && (
                    <a
                      href={p.codeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-btn-secondary"
                    >
                      View Code →
                    </a>
                  )}
                </>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
