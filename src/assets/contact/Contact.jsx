import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";
import { FiSend, FiMail, FiPhone, FiMapPin, FiLinkedin } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import "../contact/Contact.css";

gsap.registerPlugin(ScrollTrigger);

/* ── EmailJS config — replace with your own from emailjs.com ── */
const SERVICE_ID = "service_htvhe9q";
const TEMPLATE_ID = "template_63aecu4";
const PUBLIC_KEY = "VtS8Ey0fe6lTId7ai";

export default function Contact() {
  const sectionRef = useRef();
  const formRef = useRef();

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-heading-block > *",
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: ".contact-heading-block", start: "top 85%", once: true },
        }
      );
      gsap.fromTo(
        ".contact-form-card",
        { x: -40, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ".contact-form-card", start: "top 85%", once: true },
        }
      );
      gsap.fromTo(
        ".contact-info-card",
        { x: 40, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ".contact-info-card", start: "top 85%", once: true },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = (e) => {
  e.preventDefault();
  setStatus("sending");

  emailjs
    .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
    .then(() => {
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    })
    .catch((err) => {
      console.error("EmailJS error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    });
};

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="contact-heading-block">
        <span className="contact-tag">GET IN TOUCH</span>
        <h2 className="contact-heading">
          Let's work <span className="contact-heading-accent">together</span>
        </h2>
        <p className="contact-sub">
          Have a project in mind or want to discuss opportunities? Reach out through
          the form or contact me directly.
        </p>
      </div>

      <div className="contact-grid">
        {/* ── Form ── */}
        <div className="contact-form-card">
          <div className="contact-card-title">
            <FiSend /> Send a Message
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <label>
              Name <span className="req">*</span>
              <input
                type="text" name="name" placeholder="Your name"
                value={form.name} onChange={handleChange} required
              />
            </label>

            <label>
              Email <span className="req">*</span>
              <input
                type="email" name="email" placeholder="your.email@example.com"
                value={form.email} onChange={handleChange} required
              />
            </label>

            <label>
              Subject
              <input
                type="text" name="subject" placeholder="What's this about?"
                value={form.subject} onChange={handleChange}
              />
            </label>

            <label>
              Message <span className="req">*</span>
              <textarea
                name="message" placeholder="Your message here..." rows="5"
                value={form.message} onChange={handleChange} required
              />
            </label>

            <button type="submit" className="contact-submit-btn" disabled={status === "sending"}>
              <FiSend />
              {status === "sending" && "Sending..."}
              {status === "sent" && "Message Sent!"}
              {status === "error" && "Failed — Try Again"}
              {status === "idle" && "Send Message"}
            </button>

            {status === "sent" && (
              <p className="form-status form-status-success">Thanks! I'll get back to you soon.</p>
            )}
            {status === "error" && (
              <p className="form-status form-status-error">Something went wrong. Please email me directly.</p>
            )}
          </form>
        </div>

        {/* ── Info ── */}
        <div className="contact-info-col">
          <div className="contact-info-card">
            <h3 className="contact-info-title">Contact Information</h3>

            <div className="info-item">
              <div className="info-icon"><FiMail /></div>
              <div>
                <div className="info-label">Email Me</div>
                <div className="info-desc">Feel free to reach out for opportunities</div>
                <a href="mailto:2040surya@gmail.com" className="info-value">2040surya@gmail.com</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><FiPhone /></div>
              <div>
                <div className="info-label">Call Me</div>
                <div className="info-desc">Available for freelance / internship</div>
                <span className="info-value">9354770802</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><FiMapPin /></div>
              <div>
                <div className="info-label">Location</div>
                <div className="info-desc">Based in Delhi, India</div>
                <span className="info-value">Uttam Nagar, Delhi</span>
              </div>
            </div>
          </div>

          <div className="contact-social-card">
            <h3 className="contact-info-title">Connect With Me</h3>
            <div className="social-buttons">
              <a
                href="https://www.linkedin.com/in/surya-tyagi-71a899361/"
                target="_blank" rel="noreferrer" className="social-btn"
              >
                <FiLinkedin />LinkedIn
              </a>
              <a
                href="https://github.com/SsuryaTyagi"
                target="_blank" rel="noreferrer" className="social-btn"
              >
                <SiGithub /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}