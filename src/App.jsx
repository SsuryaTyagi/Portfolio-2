import React from 'react'
import { Routes, Route } from "react-router-dom";
import "../src/assets/Home/Home.css"
import Home from './assets/Home/Home'
import About from './assets/Home/about/About'
import Navbar from './assets/Component/Navbar';

export default function App() {
  return (
 <>
      <Navbar />


      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      {/* <section id="projects">
        <Projects />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="contact">
        <Contact />
      </section>
     */}
    </>
  )
}
