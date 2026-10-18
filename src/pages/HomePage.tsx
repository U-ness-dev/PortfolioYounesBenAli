import { useRef } from 'react'
import HomeHero from '../components/home/HomeHero'
import Manifesto from '../components/home/Manifesto'
import WorkIndex from '../components/home/WorkIndex'
import About from '../components/home/About'
import Contact from '../components/home/Contact'
import { useScrollReveals } from '../hooks/useScrollReveals'

export default function HomePage() {
  const ref = useRef<HTMLDivElement>(null)
  useScrollReveals(ref)

  return (
    <main ref={ref}>
      <HomeHero />
      <Manifesto />
      <WorkIndex />
      <About />
      <Contact />
    </main>
  )
}
