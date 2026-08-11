import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useDevicePrefs } from '../hooks/useDevicePrefs'

const HOVER_SELECTOR = 'a, button, [role="link"], [data-cursor-hover]'

export default function Cursor() {
  const { fine, reduced } = useDevicePrefs()
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!fine || reduced) return
    const root = rootRef.current
    if (!root) return

    const dot = root.querySelector<HTMLDivElement>('.cursor__dot')
    const ring = root.querySelector<HTMLDivElement>('.cursor__ring')
    if (!dot || !ring) return

    gsap.set([dot, ring], { x: -120, y: -120 })

    const dotX = gsap.quickTo(dot, 'x', { duration: 0.12, ease: 'power2.out' })
    const dotY = gsap.quickTo(dot, 'y', { duration: 0.12, ease: 'power2.out' })
    const ringX = gsap.quickTo(ring, 'x', { duration: 0.55, ease: 'power3.out' })
    const ringY = gsap.quickTo(ring, 'y', { duration: 0.55, ease: 'power3.out' })

    const onMove = (e: PointerEvent) => {
      dotX(e.clientX)
      dotY(e.clientY)
      ringX(e.clientX)
      ringY(e.clientY)
    }

    const onOver = (e: MouseEvent) => {
      const t = e.target as Element | null
      if (t?.closest?.(HOVER_SELECTOR)) document.body.classList.add('cursor-hover')
      else document.body.classList.remove('cursor-hover')
    }

    const onDown = () => document.body.classList.add('cursor-pressed')
    const onUp = () => document.body.classList.remove('cursor-pressed')

    const onLeave = () => gsap.to([dot, ring], { autoAlpha: 0, duration: 0.3 })
    const onEnter = () => gsap.to([dot, ring], { autoAlpha: 1, duration: 0.3 })

    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver, { passive: true })
    window.addEventListener('pointerdown', onDown, { passive: true })
    window.addEventListener('pointerup', onUp, { passive: true })
    document.documentElement.addEventListener('mouseleave', onLeave)
    document.documentElement.addEventListener('mouseenter', onEnter)

    return () => {
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('mouseover', onOver)
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointerup', onUp)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      document.documentElement.removeEventListener('mouseenter', onEnter)
      document.body.classList.remove('cursor-hover', 'cursor-pressed')
      gsap.killTweensOf([dot, ring])
    }
  }, [fine, reduced])

  if (!fine || reduced) return null

  return (
    <div className="cursor" ref={rootRef} aria-hidden="true">
      <div className="cursor__dot" />
      <div className="cursor__ring" />
    </div>
  )
}
