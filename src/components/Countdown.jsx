import React, { useState, useEffect } from 'react'
import './Countdown.css'

/**
 * Countdown Component
 * Live countdown timer to the wedding date
 */
function Countdown() {
  const weddingDate = new Date('2026-05-29T09:30:00').getTime()

  const calculateTimeLeft = () => {
    const now = new Date().getTime()
    const difference = weddingDate - now

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ]

  return (
    <section className="countdown-section" id="countdown">
      <div className="countdown-overlay"></div>
      <div className="countdown-content fade-in">
        <span className="countdown-script">Save the Date</span>
        <h2 className="countdown-heading">Counting Down To Our Special Day</h2>
        <div className="countdown-ornament">✦ ✧ ✦</div>

        <div className="countdown-timer">
          {timeUnits.map((unit, index) => (
            <React.Fragment key={unit.label}>
              <div className="countdown-unit" id={`countdown-${unit.label.toLowerCase()}`}>
                <div className="unit-value-wrapper">
                  <span className="unit-value">{String(unit.value).padStart(2, '0')}</span>
                </div>
                <span className="unit-label">{unit.label}</span>
              </div>
              {index < timeUnits.length - 1 && (
                <span className="countdown-separator">:</span>
              )}
            </React.Fragment>
          ))}
        </div>

        <p className="countdown-date-text">May 29, 2026 • 09:00 AM</p>
      </div>
    </section>
  )
}

export default Countdown
