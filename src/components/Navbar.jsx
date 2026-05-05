import React, { useState, useEffect } from 'react'
import './Navbar.css'

/**
 * Navbar Component
 * Smooth scrolling navigation with transparent-to-solid background on scroll
 */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Track scroll position for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'invitation', label: 'Invitation' },
    
    { id: 'events', label: 'Event' },
  
    
  ]

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="navbar-container">
        {/* Logo / Brand */}
        <div className="navbar-brand" onClick={() => scrollToSection('home')}>
          <span className="brand-script">S</span>
          <span className="brand-ampersand">&</span>
          <span className="brand-script">M</span>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          id="menu-toggle"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`} id="nav-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                className="nav-link"
                onClick={() => scrollToSection(link.id)}
                id={`nav-${link.id}`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
