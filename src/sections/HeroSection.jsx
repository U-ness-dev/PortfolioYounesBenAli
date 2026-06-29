import { useEffect, useRef } from 'react'
import ChromeText from '../components/ChromeText/ChromeText'

function HeroSection() {
  const contentRef = useRef(null)

  useEffect(() => {
    if (contentRef.current) {
      const h1 = contentRef.current.querySelector('h1.chrome-text')
      const h2 = contentRef.current.querySelector('h2.chrome-text')
      if (h1) {
        h1.classList.add('play-shine')
        setTimeout(() => h1.classList.remove('play-shine'), 2500)
      }
      if (h2) {
        setTimeout(() => {
          h2.classList.add('play-shine')
          setTimeout(() => h2.classList.remove('play-shine'), 2500)
        }, 500)
      }
    }
  }, [])

  return (
    <section id="hero" className="portfolio-bg">
      <img className="image" src="/src/assets/images/placeholder.svg" alt="" />
      <img className="image" src="/src/assets/images/placeholder.svg" alt="" />
      <img className="image" src="/src/assets/images/placeholder.svg" alt="" />
      <img className="image" src="/src/assets/images/placeholder.svg" alt="" />

      <div className="portfolio-content" ref={contentRef}>
        <ChromeText as="h1">Younes Ben Ali</ChromeText>
        <ChromeText as="h2">Graphic Designer &amp; Front-End Developer</ChromeText>
      </div>
    </section>
  )
}

export default HeroSection
