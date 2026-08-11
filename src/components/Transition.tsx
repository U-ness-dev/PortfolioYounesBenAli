import { createContext, useContext, useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useDevicePrefs } from '../hooks/useDevicePrefs'

gsap.registerPlugin(ScrollTrigger)

interface TransitionContextValue {
  begin: (to: string) => void
}

const TransitionContext = createContext<TransitionContextValue>({ begin: () => {} })

export const useTransition = () => useContext(TransitionContext)

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const stateRef = useRef<'idle' | 'closing' | 'opening'>('idle')
  const navigate = useNavigate()
  const location = useLocation()
  const { reduced } = useDevicePrefs()

  const begin = (to: string) => {
    if (stateRef.current === 'closing') return
    const overlay = overlayRef.current

    if (reduced || !overlay) {
      navigate(to)
      return
    }

    stateRef.current = 'closing'
    gsap.to(overlay, {
      scaleY: 1,
      duration: 0.55,
      ease: 'power4.inOut',
      onComplete: () => navigate(to),
    })
  }

  useEffect(() => {
    if (stateRef.current !== 'closing') return

    const id = window.setTimeout(() => {
      const overlay = overlayRef.current
      if (!overlay) return
      gsap.to(overlay, {
        scaleY: 0,
        duration: 0.65,
        ease: 'power4.inOut',
        delay: 0.05,
        onComplete: () => {
          stateRef.current = 'idle'
          ScrollTrigger.refresh()
        },
      })
    }, 100)

    return () => window.clearTimeout(id)
  }, [location.pathname])

  return (
    <TransitionContext.Provider value={{ begin }}>
      {children}
      <div className="transition" ref={overlayRef} aria-hidden="true" />
    </TransitionContext.Provider>
  )
}
