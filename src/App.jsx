import React from 'react'
import Navbar from './assets/Component/Navbar';
import Home from './assets/Home/Home'
import About from './assets/Home/about/About'
import "../src/assets/Home/Home.css"

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
    </>
  )
}
