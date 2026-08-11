import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useDevicePrefs } from '../hooks/useDevicePrefs'

interface InteractiveImageProps {
  src: string
  alt: string
  className?: string
  eager?: boolean
}

export default function InteractiveImage({
  src,
  alt,
  className = '',
  eager = false,
}: InteractiveImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { fine, reduced } = useDevicePrefs()

  useEffect(() => {
    if (!fine || reduced) return
    const el = ref.current
    const inner = el?.querySelector<HTMLDivElement>('.iimg__inner')
    if (!el || !inner) return

    const rotX = gsap.quickTo(inner, 'rotationX', { duration: 0.7, ease: 'power3.out' })
    const rotY = gsap.quickTo(inner, 'rotationY', { duration: 0.7, ease: 'power3.out' })

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect()
      if (!r.width || !r.height) return
      const px = (e.clientX - r.left) / r.width - 0.5
      const py = (e.clientY - r.top) / r.height - 0.5
      rotY(px * 7)
      rotX(-py * 7)
    }

    const onLeave = () => {
      rotX(0)
      rotY(0)
    }

    el.addEventListener('pointermove', onMove, { passive: true })
    el.addEventListener('pointerleave', onLeave, { passive: true })

    return () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
      gsap.killTweensOf(inner)
    }
  }, [fine, reduced])

  return (
    <div className={`iimg ${className}`} ref={ref}>
      <div className="iimg__inner">
        <img
          className="iimg__media"
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
        />
      </div>
    </div>
  )
}
