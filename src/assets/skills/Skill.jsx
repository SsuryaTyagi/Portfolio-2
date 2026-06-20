import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../skills/Skill.css";

import {
  SiReact, SiNextdotjs, SiVite, SiJavascript, SiTypescript,
  SiTailwindcss, SiSass, SiHtml5, SiCss,
  SiNodedotjs, SiExpress, SiMongodb, SiMongoose, SiEjs,
  SiGit, SiGithub, SiPostman, SiVercel, SiRedis, SiJsonwebtokens,
  SiGoogle, SiPassport, SiCanva,
} from "react-icons/si";
import { TbApi, TbLock, TbCreditCard, TbUpload, TbBrandAdobePhotoshop } from "react-icons/tb";


gsap.registerPlugin(ScrollTrigger);

const SKILLS = [
  { name: "React.js",       category: "Frontend", icon: SiReact,        color: "#61DAFB" },
  { name: "Next.js",        category: "Frontend", icon: SiNextdotjs,    color: "#ffffff" },
  { name: "Vite",           category: "Frontend", icon: SiVite,         color: "#BD34FE" },
  { name: "JavaScript",     category: "Frontend", icon: SiJavascript,   color: "#F7DF1E" },
  { name: "TypeScript",     category: "Frontend", icon: SiTypescript,   color: "#3178C6" },
  { name: "Tailwind CSS",   category: "Frontend", icon: SiTailwindcss,  color: "#38BDF8" },
  { name: "SCSS / SASS",    category: "Frontend", icon: SiSass,         color: "#CC6699" },
  { name: "HTML5",          category: "Frontend", icon: SiHtml5,        color: "#E34F26" },
  { name: "CSS3",       category: "Frontend", icon: SiCss,             color: "#1572B6" },

  { name: "Node.js",        category: "Backend",  icon: SiNodedotjs,    color: "#5FA04E" },
  { name: "Express.js",     category: "Backend",  icon: SiExpress,      color: "#ffffff" },
  { name: "MongoDB",        category: "Backend",  icon: SiMongodb,      color: "#47A248" },
  { name: "Mongoose",       category: "Database",  icon: SiMongoose,     color: "#880000" },
  { name: "REST APIs",      category: "Backend",  icon: TbApi,          color: "#e8c547" },
  { name: "EJS",            category: "Backend",  icon: SiEjs,          color: "#B4CA65" },

  { name: "Redis",          category: "Database", icon: SiRedis,        color: "#DC382D" },

  { name: "Git",            category: "Tools",    icon: SiGit,          color: "#F05032" },
  { name: "GitHub",         category: "Tools",    icon: SiGithub,       color: "#ffffff" },
  { name: "Postman",        category: "Tools",    icon: SiPostman,      color: "#FF6C37" },
  { name: "Vercel",         category: "Tools",    icon: SiVercel,       color: "#ffffff" },
  { name: "Multer",         category: "Tools",    icon: TbUpload,       color: "#e8c547" },
  { name: "JWT",            category: "Backend",    icon: SiJsonwebtokens,color: "#FB015B" },
  { name: "bcrypt",         category: "Backend",    icon: TbLock,         color: "#e8c547" },
  { name: "Google OAuth",   category: "Tools",    icon: SiGoogle,       color: "#4285F4" },
  { name: "Passport.js",    category: "Tools",    icon: SiPassport,     color: "#34E27A" },
  { name: "Razorpay",       category: "Tools",    icon: TbCreditCard,   color: "#0C2451" },

  { name: "Photoshop", category: "Design", icon: TbBrandAdobePhotoshop, color: "#31A8FF" },
  { name: "Canva",          category: "Design",   icon: SiCanva,        color: "#00C4CC" },
];

const CATEGORIES = ["All", "Frontend", "Backend", "Database", "Tools", "Design"];

export default function Skills() {
  const sectionRef = useRef();
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? SKILLS
      : SKILLS.filter((s) => s.category === activeCategory);

  const countFor = (cat) =>
    cat === "All" ? SKILLS.length : SKILLS.filter((s) => s.category === cat).length;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skills-heading-block > *",
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: ".skills-heading-block", start: "top 85%", once: true },
        }
      );
      gsap.fromTo(
        ".filter-pill",
        { y: 20, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.5, stagger: 0.06, ease: "power2.out",
          scrollTrigger: { trigger: ".skills-filters", start: "top 88%", once: true },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  /* Re-animate cards every time the filter changes */
  useEffect(() => {
    gsap.fromTo(
      ".skill-card",
      { y: 20, opacity: 0, scale: 0.94 },
      { y: 0, opacity: 1, scale: 1, duration: 0.4, stagger: 0.03, ease: "power2.out" }
    );
  }, [activeCategory]);

  return (
    <section className="skills" id="skills" ref={sectionRef}>
      <div className="skills-heading-block">
        <span className="skills-tag">TOOLKIT</span>
        <h2 className="skills-heading">
          Skills & <span className="skills-heading-accent">Stack</span>
        </h2>
        <p className="skills-sub">
          Technologies and tools I use to design, build, and ship full stack applications.
        </p>
      </div>

      {/* Filter pills */}
      <div className="skills-filters">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`filter-pill ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
            <span className="filter-count">{countFor(cat)}</span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="skill-grid">
        {filtered.map((s) => {
          const Icon = s.icon;
          return (
            <div className="skill-card" key={s.name}>
              <div className="skill-icon-wrap">
                <Icon style={{ color: s.color }} className="skill-icon" />
              </div>
              <span className="skill-name">{s.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}