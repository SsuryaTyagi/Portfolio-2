import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Navbar() {
  const navRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -100, opacity: 0, duration: 1, ease: "power4.out",
    });
    gsap.from(".nav-links li", {
      y: -30, opacity: 0, duration: 0.8,
      stagger: 0.15, delay: 0.5, ease: "back.out(1.7)",
    });

    /* Shrink nav on scroll */
    const handleScroll = () => {
      if (window.scrollY > 60) {
        navRef.current.classList.add("nav-scrolled");
      } else {
        navRef.current.classList.remove("nav-scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Smooth scroll to section */
  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav ref={navRef}>
        <a href="/" className="nav-logo">SURYA TYAGI<span>.</span></a>

        {/* Hamburger — mobile only */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {["home","about","projects","skills","contact"].map((id) => (
            <li key={id}>
              <button onClick={() => scrollTo(id)}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            </li>
          ))}
          <li>
            <button onClick={() => scrollTo("contact")} className="nav-cta">
              Hire Me
            </button>
          </li>
        </ul>
      </nav>

      {/* Overlay — closes menu on click */}
      {menuOpen && (
        <div className="nav-overlay" onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
}