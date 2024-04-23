import React from 'react'
import './App.scss'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Parallax from './components/parallax/Parallax'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Projects from './components/projects/Projects'
import AnimatedCursor from "react-animated-cursor";
const App = () => {
  return (
    <div>
      <AnimatedCursor />
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="Portfolio"><Parallax type="publications" /></section>
      <Portfolio />
      <section id="Projects"><Parallax type="projects" /></section>
      <Projects />
      <section id="Services"><Parallax type="services" /></section>
      <section><Services /></section>
      <section id="Contact"><Contact /></section>
    </div>
  )
}

export default App