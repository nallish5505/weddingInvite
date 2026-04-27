import React, { useState } from 'react'
import './RSVP.css'

/**
 * RSVP Component
 * Frontend-only RSVP form with validation
 */
function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1',
    attending: 'yes',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error for the field being edited
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  // Form validation
  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.guests || parseInt(formData.guests) < 1) {
      newErrors.guests = 'Please select number of guests'
    } else if (parseInt(formData.guests) > 10) {
      newErrors.guests = 'Maximum 10 guests allowed'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      setSubmitted(true)
      // In a real app, you'd send this data to a backend
      console.log('RSVP submitted:', formData)
    }
  }

  // Reset form
  const handleReset = () => {
    setFormData({ name: '', email: '', guests: '1', attending: 'yes', message: '' })
    setErrors({})
    setSubmitted(false)
  }

  return (
    <section className="rsvp-section" id="rsvp">
      <div className="rsvp-container">
        {/* Section Title */}
        <div className="section-title fade-in">
          <span className="script-text">Be Our Guest</span>
          <h2>RSVP</h2>
          <div className="divider"></div>
        </div>

        {submitted ? (
          /* Success Message */
          <div className="rsvp-success fade-in" id="rsvp-success">
            <div className="success-icon">💌</div>
            <h3 className="success-title">Thank You!</h3>
            <p className="success-message">
              Dear <strong>{formData.name}</strong>, your RSVP has been received.
              {formData.attending === 'yes'
                ? " We can't wait to celebrate with you!"
                : ' We will miss you, but thank you for letting us know.'}
            </p>
            <button className="btn-reset" onClick={handleReset} id="rsvp-reset-btn">
              Submit Another Response
            </button>
          </div>
        ) : (
          /* RSVP Form */
          <form className="rsvp-form fade-in" onSubmit={handleSubmit} id="rsvp-form" noValidate>
            <div className="form-row">
              {/* Name Field */}
              <div className={`form-group ${errors.name ? 'error' : ''}`}>
                <label htmlFor="rsvp-name">Full Name</label>
                <input
                  type="text"
                  id="rsvp-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>

              {/* Email Field */}
              <div className={`form-group ${errors.email ? 'error' : ''}`}>
                <label htmlFor="rsvp-email">Email Address</label>
                <input
                  type="email"
                  id="rsvp-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>
            </div>

            <div className="form-row">
              {/* Number of Guests */}
              <div className={`form-group ${errors.guests ? 'error' : ''}`}>
                <label htmlFor="rsvp-guests">Number of Guests</label>
                <select
                  id="rsvp-guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
                {errors.guests && <span className="error-text">{errors.guests}</span>}
              </div>

              {/* Attending */}
              <div className="form-group">
                <label htmlFor="rsvp-attending">Will You Attend?</label>
                <select
                  id="rsvp-attending"
                  name="attending"
                  value={formData.attending}
                  onChange={handleChange}
                >
                  <option value="yes">Joyfully Accept</option>
                  <option value="no">Regretfully Decline</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="form-group full-width">
              <label htmlFor="rsvp-message">Wishes for the Couple (Optional)</label>
              <textarea
                id="rsvp-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your heartfelt wishes..."
                rows="4"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn-submit" id="rsvp-submit-btn">
              <span className="btn-text">Send RSVP</span>
              <span className="btn-icon">→</span>
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default RSVP
