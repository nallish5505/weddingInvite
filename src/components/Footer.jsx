import React from 'react'
import './Footer.css'

/**
 * Footer Component
 * Thank you message and contact details
 */
function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        {/* Decorative top */}
        <div className="footer-ornament">✦ ✧ ✦</div>

        {/* Thank You Message */}
        <div className="footer-thankyou">
          <h2 className="footer-script">Thank You</h2>
          <p className="footer-message">
            For being part of our love story. Your presence on our special day
            will make it truly unforgettable.
          </p>
        </div>

        {/* Couple Names */}
        <div className="footer-couple">
          <span className="footer-name">Sugesh</span>
          <span className="footer-amp">&</span>
          <span className="footer-name">Manisha</span>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <a href="mailto:sugeshraina17@gmail.com" id="contact-email">
              sugeshraina17@gmail.com
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📱</span>
            <a href="tel:+916380315423" id="contact-phone">
              +91 63803 15423
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <span>Subham Mahal, Karur, India</span>
          </div>
        </div>

        {/* Hashtag */}
        <div className="footer-hashtag">
          #SugeshWedsManisha
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <p className="footer-copyright">
            Made with ❤️ for our special celebration
          </p>
          <p className="footer-year">© 2026 | Sugesh & Manisha</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
