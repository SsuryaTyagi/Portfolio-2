import React from 'react'
import Navbar from './assets/Component/Navbar';
import Home from './assets/Home/Home'
import "../src/assets/Home/Home.css"
import About from './assets/about/About';
import Projects from './assets/project/Project';
import Skills from './assets/skills/Skill';

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects/>
      <Skills />
    </>
  )
}
