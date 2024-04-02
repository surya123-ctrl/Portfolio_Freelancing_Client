import React from 'react'
import './App.scss'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Parallax from './components/parallax/Parallax'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
const App = () => {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="Services"><Parallax type="services" /></section>
      <section><Services /></section>
      <section id="Portfolio"><Parallax /></section>
      <Portfolio />
      <section id="Contact"><Contact /></section>
      {/* <section id="About">About</section> */}
      {/* <section id="Experience">Experience</section> */}
      {/* 
      <section><Services /></section>
      <section id="Portfolio"><Parallax /></section>
      <Portfolio />
      <section id="Contact"><Contact /></section> */}
      {/* <section id="Contact"><Contact /></section>
      <section id="Portfolio"><Parallax /></section>
      <Portfolio /> */}
    </div>
  )
}

export default App