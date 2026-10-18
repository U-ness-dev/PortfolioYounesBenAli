import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <span className="meta">© {new Date().getFullYear()} {profile.name}</span>
        <span className="meta">Designed &amp; built by {profile.firstName}</span>
        <button
          className="site-footer__to-top meta"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Top
        </button>
      </div>
    </footer>
  )
}
