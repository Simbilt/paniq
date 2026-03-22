import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="title-line">I CREATE</span>
          <span className="title-line highlight">MUSIC</span>
          <span className="title-line">THAT MOVES</span>
        </h1>
        <p className="hero-subtitle">
          Welcome to my sonic universe. Explore my latest tracks, albums, and musical journey.
        </p>
        <div className="hero-buttons">
          <button 
            className="btn-primary"
            onClick={() => {
              const element = document.getElementById('work')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Explore Work
          </button>
          <button 
            className="btn-secondary"
            onClick={() => {
              const element = document.getElementById('contact')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Get In Touch
          </button>
        </div>
      </div>
      <div className="hero-visual">
        <div className="visual-circle"></div>
        <div className="visual-circle"></div>
        <div className="visual-circle"></div>
      </div>
    </section>
  )
}

export default Hero

