import React, { useEffect, useRef } from 'react'
import './Invitation.css'

/**
 * Invitation Component
 * Formal wedding invitation styled like an elegant wedding card
 */
function Invitation() {
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      },
      { threshold: 0.2 }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="invitation-section" id="invitation">
      <div className="invitation-bg-pattern"></div>
      
      <div className="invitation-card" ref={cardRef}>
        {/* Decorative corner ornaments */}
        <div className="card-corner top-left">❧</div>
        <div className="card-corner top-right">❧</div>
        <div className="card-corner bottom-left">❧</div>
        <div className="card-corner bottom-right">❧</div>

        {/* Inner border frame */}
        <div className="card-inner-frame">
          <div className="card-header">
            <span className="card-ornament">✦ ✧ ✦</span>
            <p className="card-subtitle">Together with their families</p>
          </div>

          <div className="card-names">
            <h2 className="card-bride">Sugesh</h2>
            <span className="card-and">&</span>
            <h2 className="card-groom">Manisha</h2>
          </div>

          <div className="card-message">
            <p className="invite-text">
              Request the honor of your presence at the celebration of our marriage
            </p>
          </div>

          <div className="card-details">
            <div className="detail-ornament">— ✦ —</div>
            <p className="detail-date">Friday, the Twenty Nineth of May</p>
            <p className="detail-year">Two Thousand and Twenty Six</p>
            <p className="detail-time">at Nine O'clock in the morning</p>
            <div className="detail-ornament">— ✦ —</div>
            <p className="detail-venue">Subham Mahal</p>
            <p className="detail-address">Ayyarmalai</p>
            <p className="detail-city">Karur, Tamil Nadu - 639120</p>
          </div>

          <div className="card-footer">
            <p className="dinner-text"></p>
            <span className="card-ornament">✦ ✧ ✦</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Invitation
