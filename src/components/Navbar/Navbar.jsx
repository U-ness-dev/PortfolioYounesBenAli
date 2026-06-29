import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'branding', label: 'Branding' },
  { id: 'ui', label: 'UI/UX' },
  { id: 'coding', label: 'Coding' },
  { id: '3d', label: '3D' },
  { id: 'extras', label: 'Extras' },
  { id: 'contact', label: 'Contact' },
]

function Navbar() {
  const [active, setActive] = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        }
      },
      { rootMargin: '-50% 0px -50% 0px' }
    )

    for (const { id } of NAV_ITEMS) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="nav-logo" onClick={() => scrollTo('hero')}>
        <span className="logo-text">YB</span>
        <div className="logo-shine" />
      </div>

      <button
        className="hamburger-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <svg className="hamburger-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {menuOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      <ul className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
        {NAV_ITEMS.map(({ id, label }) => (
          <li key={id}>
            <a
              className={active === id ? 'active' : ''}
              onClick={() => scrollTo(id)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {menuOpen && (
        <div className="mobile-overlay" onClick={() => setMenuOpen(false)} />
      )}
    </nav>
  )
}

export default Navbar
