import React, { useState, useEffect } from 'react'
import './Hero.css'

/**
 * Hero Component
 * Landing page with couple names, wedding date, and elegant background
 */
function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Trigger entrance animations after mount
    const timer = setTimeout(() => setLoaded(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="hero" id="home">
      {/* Animated background overlay */}
      <div className="hero-overlay"></div>

      {/* Floating decorative particles */}
      <div className="hero-particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${6 + Math.random() * 8}s`,
            opacity: 0.3 + Math.random() * 0.5,
            fontSize: `${8 + Math.random() * 16}px`
          }}>✦</div>
        ))}
      </div>

      <div className={`hero-content ${loaded ? 'loaded' : ''}`}>
        {/* Top ornament */}
        <div className="hero-ornament-top">✧ ✦ ✧</div><br /><br />

        {/* "We're getting married" text */}
        <p className="hero-subtitle">We're Getting Married</p><br />

        {/* Bride & Groom Photos */}
        

        {/* Couple Names */}
        <div className="hero-names">
          <span className="bride-name">Sugesh</span>
          <span className="names-ampersand">
            <span className="amp-line"></span>
            <span className="amp-symbol">&</span>
            <span className="amp-line"></span>
          </span>
          <span className="groom-name">Manisha</span>
        </div>

        {/* Wedding Date */}
        <div className="hero-date">
          <div className="date-line"></div>
          <p className="date-text">
            <span className="date-day">Friday</span>
            <span className="date-full">May 29,2026</span>
            <span className="date-venue">Subham mahal, Ayyarmalai</span>
          </p>
          <div className="date-line"></div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <span className="scroll-text">Scroll Down</span>
          <div className="scroll-arrow">
            <span></span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
