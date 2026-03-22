import React, { useState, useEffect } from 'react'
import './Navigation.css'

function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 769px)')
    const closeOnWide = () => {
      if (mq.matches) setMenuOpen(false)
    }
    mq.addEventListener('change', closeOnWide)
    return () => mq.removeEventListener('change', closeOnWide)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} aria-label="Main">
        <div className="nav-container">
          <div
            className="nav-logo"
            onClick={() => scrollToSection('hero')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                scrollToSection('hero')
              }
            }}
          >
            <span className="logo-text">MUSICIAN</span>
          </div>
          <ul id="nav-menu" className={`nav-menu ${menuOpen ? 'open' : ''}`}>
            <li>
              <button type="button" onClick={() => scrollToSection('hero')}>
                Home
              </button>
            </li>
            <li>
              <button type="button" onClick={() => scrollToSection('about')}>
                About
              </button>
            </li>
            <li>
              <button type="button" onClick={() => scrollToSection('work')}>
                Work
              </button>
            </li>
            <li>
              <button type="button" onClick={() => scrollToSection('contact')}>
                Contact
              </button>
            </li>
          </ul>
          <button
            type="button"
            className={`nav-toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="nav-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
          </button>
        </div>
      </nav>
      <button
        type="button"
        className={`nav-backdrop ${menuOpen ? 'visible' : ''}`}
        aria-hidden={!menuOpen}
        tabIndex={-1}
        onClick={() => setMenuOpen(false)}
      />
    </>
  )
}

export default Navigation
