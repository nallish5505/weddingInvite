import React, { useState } from 'react'
import './Gallery.css'
import photo from './assets/walk.jpg';

<img src={photo} alt="img" />
/**
 * Gallery Component
 * Masonry-style image gallery with lightbox functionality
 */
const galleryImages = [
  {
    id: 1,
    url:{photo},
    alt: 'Couple photos',
    span: 'tall',
  },
  {
    id: 2,
    url: 'src/assests/hand.jpeg',
    alt: 'Wedding photos',
    span: 'wide',
  },
  {
    id: 3,
    url: 'src/assets/look.jpeg',
    alt: 'Wedding photos',
    span: 'normal',
  },
  {
    id: 4,
    url: 'src/assets/romance.jpeg',
    alt: 'wedding photos',
    span: 'normal',
  },
  {
    id: 5,
    url: 'src/assets/beach.jpeg',
    alt: 'Wedding photos',
    span: 'wide',
  },
  {
    id: 6,
    url: 'src/assets/sf.jpeg',
    alt: 'Bride preparation',
    span: 'tall',
  },
  {
    id: 7,
    url: '../assets/sunset.jpeg',
    alt: 'Wedding dance',
    span: 'normal',
  },
  {
    id: 8,
    url: 'src/assets/movie.jpeg',
    alt: 'Celebration moment',
    span: 'normal',
  },
]

function Gallery() {
  const [lightbox, setLightbox] = useState({ open: false, index: 0 })

  const openLightbox = (index) => {
    setLightbox({ open: true, index })
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightbox({ open: false, index: 0 })
    document.body.style.overflow = ''
  }

  const navigate = (direction) => {
    setLightbox((prev) => ({
      ...prev,
      index:
        (prev.index + direction + galleryImages.length) % galleryImages.length,
    }))
  }

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-container">
        {/* Section Title */}
        <div className="section-title fade-in">
          <span className="script-text">Our Moments</span>
          <h2>Photo Gallery</h2>
          <div className="divider"></div>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {galleryImages.map((img, index) => (
            <div
              className={`gallery-item fade-in ${img.span}`}
              key={img.id}
              onClick={() => openLightbox(index)}
              id={`gallery-item-${img.id}`}
            >
              <img src={img.url} alt={img.alt} loading="lazy" />
              <div className="gallery-item-overlay">
                <span className="gallery-zoom-icon">⊕</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightbox.open && (
        <div className="lightbox" onClick={closeLightbox} id="lightbox-modal">
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox} id="lightbox-close">
              ✕
            </button>
            <button
              className="lightbox-nav lightbox-prev"
              onClick={() => navigate(-1)}
              id="lightbox-prev"
            >
              ‹
            </button>
            <img
              src={galleryImages[lightbox.index].url.replace('w=600', 'w=1200')}
              alt={galleryImages[lightbox.index].alt}
              className="lightbox-image"
            />
            <button
              className="lightbox-nav lightbox-next"
              onClick={() => navigate(1)}
              id="lightbox-next"
            >
              ›
            </button>
            <p className="lightbox-caption">
              {lightbox.index + 1} / {galleryImages.length}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
