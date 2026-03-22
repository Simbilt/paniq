import React from 'react'
import { useInView } from '../hooks/useInView'
import './Contact.css'

function Contact() {
  const [ref, visible] = useInView()

  return (
    <section
      ref={ref}
      id="contact"
      className={`contact ${visible ? 'section-visible' : ''}`}
    >
      <div className={`section-header reveal-base ${visible ? 'is-visible' : ''}`}>
        <h2 className="section-title">Get In Touch</h2>
        <div className="title-underline" aria-hidden="true" />
        <p className="section-subtitle">Let's create something amazing together</p>
      </div>
      <div className={`contact-content reveal-base delay-1 ${visible ? 'is-visible' : ''}`}>
        <div className="contact-info">
          <h3 className="contact-info-title">Connect With Me</h3>
          <p className="contact-info-text">
            Whether you're interested in collaboration, booking, or just want to say hello,
            I'd love to hear from you.
          </p>
          <div className="contact-links">
            <a href="mailto:musician@example.com" className="contact-link">
              <span className="link-icon" aria-hidden="true">
                ✉
              </span>
              <span>musician@example.com</span>
            </a>
            <a href="#" className="contact-link">
              <span className="link-icon" aria-hidden="true">
                🎵
              </span>
              <span>Spotify</span>
            </a>
            <a href="#" className="contact-link">
              <span className="link-icon" aria-hidden="true">
                🎧
              </span>
              <span>SoundCloud</span>
            </a>
            <a href="#" className="contact-link">
              <span className="link-icon" aria-hidden="true">
                📱
              </span>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
