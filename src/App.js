import React from 'react'
import './App.scss'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
const App = () => {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="About">About</section>
      <section id="Experience">Experience</section>
      <section id="Services">Services</section>
      <section id="Portfolio">Portfolio</section>
      <section id="Contact">Contact</section>
    </div>
  )
}

export default App
