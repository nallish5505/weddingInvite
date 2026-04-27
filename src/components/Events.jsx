import React from 'react'
import './Events.css'

/**
 * Events Component
 * Individual event cards for Engagement, Mehendi, Wedding, and Reception
 */
const eventsData = [
  {
    id: 'wedding-ceremony',
    icon: '🕉️',
    title: 'Wedding Ceremony',
    date: 'May 29, 2026',
    time: '9:30 AM - 10:30 AM',
    venue: 'Subham Mahal',
    address: 'Ayyarmalai, Karur-639120',
    description: 'The sacred ceremony where two hearts become one, surrounded by love and blessings.',
    color: '#c9a96e',
  },
  {
    id: 'engagement',
    icon: '💍',
    title: 'Engagement',
    date: 'May 28, 2026',
    time: '6:00 PM - 7:00 PM',
    venue: 'Subham Mahal',
    address: 'Ayyarmalai, Karur-639120',
    description: 'Join us as we exchange rings and celebrate the beginning of our journey together.',
    color: '#d4a0a0',
  },
]

function Events() {
  return (
    <section className="events-section" id="events">
      <div className="events-container">
        {/* Section Title */}
        <div className="section-title fade-in">
          <span className="script-text">Celebrate With Us</span>
          <h2>Wedding Events</h2>
          <div className="divider"></div>
        </div>

        {/* Events Timeline */}
        <div className="events-timeline">
          {eventsData.map((event, index) => (
            <div className="event-card fade-in" key={event.id} id={`event-${event.id}`}>
              {/* Timeline connector */}
              <div className="timeline-connector">
                <div className="timeline-dot" style={{ borderColor: event.color }}></div>
                {index < eventsData.length - 1 && <div className="timeline-line"></div>}
              </div>

              {/* Event Content */}
              <div className="event-content">
                <div className="event-icon">{event.icon}</div>
                <h3 className="event-title">{event.title}</h3>
                
                <div className="event-info">
                  <div className="info-item">
                    <span className="info-icon">📅</span>
                    <span className="info-text">{event.date}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-icon">🕐</span>
                    <span className="info-text">{event.time}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-icon">📍</span>
                    <div>
                      <span className="info-text venue-name">{event.venue}</span>
                      <span className="info-text venue-address">{event.address}</span>
                    </div>
                  </div>
                </div>

                <p className="event-description">{event.description}</p>

                <a
                  href={`https://maps.app.goo.gl/qPoznNfmjnXJofvi6`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="event-map-link"
                  id={`map-${event.id}`}
                >
                  View on Map →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events
