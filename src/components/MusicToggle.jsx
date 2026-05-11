import React, { useState, useRef, useEffect } from 'react'
import './MusicToggle.css'
import song from './cutsong.mp3'

/**
 * MusicToggle Component
 * Floating button to toggle background music on/off
 * Uses a royalty-free audio URL
 */
function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio(song)
    audioRef.current.loop = true
    audioRef.current.volume = 0.3

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const toggleMusic = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch(() => {
        // Browser may block autoplay, user needs to interact first
        console.log('Audio playback requires user interaction')
      })
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <button
      className={`music-toggle ${isPlaying ? 'playing' : ''}`}
      onClick={toggleMusic}
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
      title={isPlaying ? 'Pause Music' : 'Play Music'}
      id="music-toggle-btn"
    >
      <span className="music-icon">{isPlaying ? '♪' : '♪'}</span>
      <span className="music-bars">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </span>
    </button>
  )
}

export default MusicToggle
