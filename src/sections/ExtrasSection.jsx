import { useRef } from 'react'
import ChromeText from '../components/ChromeText/ChromeText'
import { extras } from '../data/projects'

function ExtrasSection() {
  const gridRef = useRef(null)

  const scroll = (dir) => {
    if (gridRef.current) {
      gridRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' })
    }
  }

  return (
    <section id="extras" className="extras-section">
      <ChromeText as="h2" className="extras-title">
        Extras
      </ChromeText>

      <div className="extras-grid" ref={gridRef}>
        {extras.map((item, i) => (
          <div className="extra-card" key={i}>
            {item.type === 'video' ? (
              <video className="extra-video" src={item.src} controls />
            ) : (
              <img className="extra-image" src={item.src} alt={item.alt} />
            )}
          </div>
        ))}
      </div>

      <div className="extras-nav">
        <button onClick={() => scroll(-1)}>&#10094;</button>
        <button onClick={() => scroll(1)}>&#10095;</button>
      </div>
    </section>
  )
}

export default ExtrasSection
