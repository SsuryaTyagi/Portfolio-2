import React from "react";
import { useEffect } from "react";
import gsap from "gsap";
import "../about/About.css"

export default function About() {


    useEffect(() => {

  gsap.from(".about-left img",{
    x:-200,
    opacity:0,
    duration:1.5
  });

  gsap.from(".about-right",{
    x:200,
    opacity:0,
    duration:1.5
  });

},[]);

  return (
    <section className="about" id="about">
      <div className="about-left">
        <img src="\WhatsApp_Image_2026-06-03_at_12.07.08_AM-removebg-preview.png" alt="surya" />
      </div>

      <div className="about-right">
        <span className="about-tag">ABOUT ME</span>

        <h2>
          Passionate Full Stack
          <span> Developer</span>
        </h2>

        <p>
          I am Surya Tyagi, a Full Stack Developer from Delhi. I build modern
          web applications using React, Node.js, Express and MongoDB.
        </p>

        <div className="about-stats">
          <div>
            <h3>15+</h3>
            <p>Projects</p>
          </div>

          <div>
            <h3>2+</h3>
            <p>Years Learning</p>
          </div>

          <div>
            <h3>100%</h3>
            <p>Passion</p>
          </div>
        </div>
      </div>
    </section>
  );
}
