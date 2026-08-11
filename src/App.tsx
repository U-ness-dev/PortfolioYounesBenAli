import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Cursor from './components/Cursor'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import { TransitionProvider } from './components/Transition'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'

function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) el.scrollIntoView()
      else window.scrollTo({ top: 0, behavior: 'instant' })
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [location.pathname, location.hash])

  return null
}

export default function App() {
  return (
    <TransitionProvider>
      <a className="skip-link" href="#work">
        Skip to content
      </a>
      <ScrollManager />
      <Cursor />
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work/:slug" element={<ProjectPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </TransitionProvider>
  )
}
