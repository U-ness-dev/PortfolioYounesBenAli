import { createContext, useContext, useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useDevicePrefs } from '../hooks/useDevicePrefs'
import { getProject, projects } from '../data/projects'

gsap.registerPlugin(ScrollTrigger)

/* Keep these in sync with `.transition__grid` in components.css */
const ROWS = 5
const COLS = 6
const COUNT = ROWS * COLS

interface TransitionOrigin {
  x: number
  y: number
}

interface TransitionContextValue {
  begin: (to: string, origin?: TransitionOrigin) => void
}

const TransitionContext = createContext<TransitionContextValue>({ begin: () => {} })

export const useTransition = () => useContext(TransitionContext)

function labelFor(to: string) {
  const path = to.split('#')[0]
  const match = path.match(/^\/work\/(.+)$/)
  if (!match) return null
  const project = getProject(decodeURIComponent(match[1]))
  if (!project) return null
  const index = projects.findIndex((p) => p.slug === project.slug)
  return { index: String(index + 1).padStart(2, '0'), title: project.title }
}

function centerIndex() {
  return Math.floor(ROWS / 2) * COLS + Math.floor(COLS / 2)
}

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const gridRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLDivElement>(null)
  const stateRef = useRef<'idle' | 'closing' | 'opening'>('idle')
  const originRef = useRef(centerIndex())
  const navigate = useNavigate()
  const location = useLocation()
  const { reduced } = useDevicePrefs()

  const getTiles = () => {
    const grid = gridRef.current
    return grid ? Array.from(grid.querySelectorAll<HTMLElement>('.transition__tile')) : []
  }

  const originIndex = (origin?: TransitionOrigin) => {
    if (!origin || typeof window === 'undefined') return centerIndex()
    const col = Math.min(COLS - 1, Math.max(0, Math.floor((origin.x / window.innerWidth) * COLS)))
    const row = Math.min(ROWS - 1, Math.max(0, Math.floor((origin.y / window.innerHeight) * ROWS)))
    return row * COLS + col
  }

  const begin = (to: string, origin?: TransitionOrigin) => {
    if (stateRef.current !== 'idle') return
    if (reduced) {
      navigate(to)
      return
    }

    const tiles = getTiles()
    const label = labelRef.current
    if (tiles.length === 0 || !label) {
      navigate(to)
      return
    }

    originRef.current = originIndex(origin)
    stateRef.current = 'closing'

    const parsed = labelFor(to)
    if (parsed) {
      const indexEl = label.querySelector<HTMLElement>('.transition__label-index')
      const titleEl = label.querySelector<HTMLElement>('.transition__label-title')
      if (indexEl) indexEl.textContent = parsed.index
      if (titleEl) titleEl.textContent = parsed.title
    }

    gsap.set(tiles, { scale: 0, opacity: 0 })
    gsap.set(label, { opacity: 0, y: 14 })

    const tl = gsap.timeline({ onComplete: () => navigate(to) })
    tl.to(tiles, {
      scale: 1.05,
      opacity: 1,
      duration: 0.35,
      ease: 'power2.out',
      stagger: { grid: [ROWS, COLS], from: originRef.current, amount: 0.25 },
    })

    if (parsed) {
      tl.to(label, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }, '-=0.2')
    }
  }

  useEffect(() => {
    if (stateRef.current !== 'closing') return

    const id = window.setTimeout(() => {
      const tiles = getTiles()
      const label = labelRef.current
      if (tiles.length === 0) {
        stateRef.current = 'idle'
        return
      }

      stateRef.current = 'opening'

      const tl = gsap.timeline({
        onComplete: () => {
          stateRef.current = 'idle'
          ScrollTrigger.refresh()
        },
      })

      if (label) {
        tl.to(label, { opacity: 0, y: -12, duration: 0.25, ease: 'power2.in' }, 0)
      }
      tl.to(
        tiles,
        {
          scale: 0,
          opacity: 0,
          duration: 0.4,
          ease: 'power2.in',
          stagger: { grid: [ROWS, COLS], from: originRef.current, amount: 0.22 },
        },
        label ? 0.05 : 0,
      )
    }, 120)

    return () => window.clearTimeout(id)
  }, [location.pathname])

  useEffect(() => {
    const tiles = getTiles()
    gsap.set(tiles, { scale: 0, opacity: 0 })
    if (labelRef.current) gsap.set(labelRef.current, { opacity: 0, y: 14 })
  }, [])

  return (
    <TransitionContext.Provider value={{ begin }}>
      {children}
      <div className="transition" aria-hidden="true">
        <div className="transition__grid" ref={gridRef}>
          {Array.from({ length: COUNT }).map((_, i) => (
            <span className="transition__tile" key={i} />
          ))}
        </div>
        <div className="transition__label" ref={labelRef}>
          <span className="meta transition__label-index" />
          <span className="transition__label-title" />
        </div>
      </div>
    </TransitionContext.Provider>
  )
}
