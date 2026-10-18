import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useDevicePrefs } from '../../hooks/useDevicePrefs'
import { profile } from '../../data/profile'

gsap.registerPlugin(ScrollTrigger)

export default function HomeHero() {
  const ref = useRef<HTMLElement>(null)
  const { fine, reduced } = useDevicePrefs()

  useEffect(() => {
    const section = ref.current
    if (!section) return

    const ctx = gsap.context(() => {
      const content = section.querySelector('.home-hero__content')
      const tl = section.querySelector('.home-hero__corner--tl')
      const tr = section.querySelector('.home-hero__corner--tr')
      const bl = section.querySelector('.home-hero__corner--bl')
      const br = section.querySelector('.home-hero__corner--br')

      gsap.to(content, {
        yPercent: -18,
        opacity: 0.1,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom 30%',
          scrub: true,
        },
      })

      if (tl) {
        gsap.to(tl, {
          yPercent: -60,
          ease: 'none',
          scrollTrigger: { trigger: section, start: 'top top', end: 'bottom top', scrub: true },
        })
      }
      if (tr) {
        gsap.to(tr, {
          yPercent: -60,
          ease: 'none',
          scrollTrigger: { trigger: section, start: 'top top', end: 'bottom top', scrub: true },
        })
      }
      if (bl) {
        gsap.to(bl, {
          yPercent: 40,
          ease: 'none',
          scrollTrigger: { trigger: section, start: 'top top', end: 'bottom top', scrub: true },
        })
      }
      if (br) {
        gsap.to(br, {
          yPercent: 40,
          ease: 'none',
          scrollTrigger: { trigger: section, start: 'top top', end: 'bottom top', scrub: true },
        })
      }
    }, section)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const section = ref.current
    if (!section || !fine || reduced) return
    const name = section.querySelector<HTMLHeadingElement>('.home-hero__name')
    if (!name) return

    const rot = gsap.quickTo(name, 'rotationY', { duration: 0.9, ease: 'power3.out' })

    const onMove = (e: PointerEvent) => {
      const r = section.getBoundingClientRect()
      if (!r.width) return
      const px = (e.clientX - r.left) / r.width - 0.5
      rot(px * 5)
    }

    section.addEventListener('pointermove', onMove, { passive: true })
    section.addEventListener('pointerleave', () => rot(0), { passive: true })

    return () => {
      section.removeEventListener('pointermove', onMove)
      gsap.killTweensOf(name)
    }
  }, [fine, reduced])

  return (
    <section className="home-hero" ref={ref}>
      <span className="meta home-hero__corner home-hero__corner--tl">{profile.name}</span>
      <span className="meta home-hero__corner home-hero__corner--tr">{profile.title}</span>

      <div className="home-hero__content">
        <h1 className="home-hero__name">
          YOUNES<span className="accent">.</span>
        </h1>
        <div className="home-hero__role">
          <span className="meta">Portfolio — {new Date().getFullYear()}</span>
        </div>
      </div>

      <span className="meta home-hero__corner home-hero__corner--bl">{profile.location}</span>
      <span className="meta home-hero__corner home-hero__corner--br">Available for work</span>

      <div className="home-hero__scroll">
        <span className="meta">Scroll</span>
        <div className="home-hero__scroll-line" />
      </div>
    </section>
  )
}
