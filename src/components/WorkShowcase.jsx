import React from 'react'
import { useInView } from '../hooks/useInView'
import './WorkShowcase.css'

function WorkShowcase() {
  const [ref, visible] = useInView()

  const works = [
    {
      id: 1,
      title: 'Midnight Dreams',
      type: 'Album',
      year: '2024',
      description: 'A collection of ambient tracks exploring the depths of night',
      linkUrl: 'https://open.spotify.com/album/example',
      coverUrl: null
    },
    {
      id: 2,
      title: 'Electric Pulse',
      type: 'Single',
      year: '2024',
      description: 'High-energy electronic track with infectious beats',
      linkUrl: 'https://open.spotify.com/track/example',
      coverUrl: null
    },
    {
      id: 3,
      title: 'Acoustic Sessions',
      type: 'EP',
      year: '2023',
      description: 'Intimate acoustic performances showcasing raw emotion',
      linkUrl: 'https://open.spotify.com/album/example',
      coverUrl: null
    },
    {
      id: 4,
      title: 'Neon Nights',
      type: 'Album',
      year: '2023',
      description: 'Synthwave journey through urban landscapes',
      linkUrl: 'https://open.spotify.com/album/example',
      coverUrl: null
    },
    {
      id: 5,
      title: 'Sunset Vibes',
      type: 'Single',
      year: '2023',
      description: 'Chill lo-fi track perfect for evening relaxation',
      linkUrl: 'https://open.spotify.com/track/example',
      coverUrl: null
    },
    {
      id: 6,
      title: 'The Journey',
      type: 'Album',
      year: '2022',
      description: 'Conceptual album telling a story of transformation',
      linkUrl: 'https://open.spotify.com/album/example',
      coverUrl: null
    },
  ]

  return (
    <section
      ref={ref}
      id="work"
      className={`work-showcase ${visible ? 'section-visible' : ''}`}
    >
      <div className={`section-header work-reveal-head ${visible ? 'is-visible' : ''}`}>
        <h2 className="section-title">My Work</h2>
        <div className="title-underline" aria-hidden="true" />
        <p className="section-subtitle">Explore my latest releases and musical projects</p>
      </div>
      <div className="work-grid">
        {works.map((work) => (
          <a
            key={work.id}
            href={work.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="work-card"
          >
            <div
              className="work-image"
              style={{
                backgroundImage: work.coverUrl ? `url(${work.coverUrl})` : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="play-overlay">
                <div className="play-button">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M8 5v14l11-7z" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="work-info">
              <div className="work-type">{work.type}</div>
              <h3 className="work-title">{work.title}</h3>
              <p className="work-description">{work.description}</p>
              <div className="work-year">{work.year}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default WorkShowcase
