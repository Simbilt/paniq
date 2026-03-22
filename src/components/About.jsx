import React from 'react'
import { useInView } from '../hooks/useInView'
import './About.css'

function About() {
  const [ref, visible] = useInView()

  return (
    <section
      ref={ref}
      id="about"
      className={`about ${visible ? 'section-visible' : ''}`}
    >
      <div className={`section-header reveal-base ${visible ? 'is-visible' : ''}`}>
        <h2 className="section-title">About Me</h2>
        <div className="title-underline" aria-hidden="true" />
      </div>
      <div className="about-content">
        <div className="about-text">
          <p className={`about-description reveal-base delay-1 ${visible ? 'is-visible' : ''}`}>
            I'm a passionate musician dedicated to creating sounds that resonate with the soul.
            With years of experience in composition, production, and performance, I bring a unique
            perspective to every project.
          </p>
          <p className={`about-description reveal-base delay-2 ${visible ? 'is-visible' : ''}`}>
            My music blends various genres and influences, creating a distinctive sound that
            connects with listeners on an emotional level. Each track tells a story, each melody
            carries a message.
          </p>
          <div className="about-stats">
            <div className={`stat-item reveal-base stat-d0 ${visible ? 'is-visible' : ''}`}>
              <div className="stat-number">50+</div>
              <div className="stat-label">Tracks</div>
            </div>
            <div className={`stat-item reveal-base stat-d1 ${visible ? 'is-visible' : ''}`}>
              <div className="stat-number">10+</div>
              <div className="stat-label">Albums</div>
            </div>
            <div className={`stat-item reveal-base stat-d2 ${visible ? 'is-visible' : ''}`}>
              <div className="stat-number">100K+</div>
              <div className="stat-label">Streams</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
