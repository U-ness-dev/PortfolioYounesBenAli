import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { profile } from '../data/profile'
import { useTransition } from './Transition'

const LINKS = [
  { hash: '#work', label: 'Work' },
  { hash: '#about', label: 'About' },
  { hash: '#contact', label: 'Contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { begin } = useTransition()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const current = useMemo(() => {
    if (location.pathname !== '/') return undefined
    return location.hash
  }, [location.pathname, location.hash])

  const goHome = () => {
    if (location.pathname === '/') window.scrollTo({ top: 0, behavior: 'smooth' })
    else begin('/')
  }

  const goSection = (hash: string) => {
    if (location.pathname === '/') {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      begin(hash)
    }
  }

  return (
    <header className="site-nav" data-scrolled={scrolled} role="banner">
      <button className="site-nav__brand" onClick={goHome} aria-label="Back to home">
        {profile.firstName}
      </button>

      <nav className="site-nav__links" aria-label="Primary">
        {LINKS.map(({ hash, label }) => (
          <button
            key={hash}
            className="site-nav__link"
            aria-current={current === hash ? 'page' : undefined}
            onClick={() => goSection(hash)}
          >
            {label}
          </button>
        ))}
      </nav>
    </header>
  )
}
