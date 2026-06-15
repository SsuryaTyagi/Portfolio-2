import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Navbar() {
  const navRef = useRef();

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    });

    gsap.from(".nav-links li", {
      y: -30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      delay: 0.5,
      ease: "back.out(1.7)",
    });
  }, []);
  return (
    <nav ref={navRef}>
      <Link to="/" className="nav-logo">
        SURYA<span>.</span>
      </Link>

      <ul className="nav-links">
        <li>
          <Link to="/" smooth={true} duration={800}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/about" smooth={true} duration={800}>
            About
          </Link>
        </li>

        <li>
          <Link to="/projects">Projects</Link>
        </li>

        <li>
          <Link to="/skills">Skills</Link>
        </li>

        <li>
          <Link to="/contact" className="nav-cta">
            Hire Me
          </Link>
        </li>
      </ul>
    </nav>
  );
}
