import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects, type Project } from '../../data/projects'
import { useDevicePrefs } from '../../hooks/useDevicePrefs'
import { useTransition } from '../Transition'

gsap.registerPlugin(ScrollTrigger)

const PAD = 12
const SPEEDS = [-14, 18, -18, 14, -16, 20]

function WorkRow({ project, index }: { project: Project; index: number }) {
  const rowRef = useRef<HTMLAnchorElement>(null)
  const previewRef = useRef<HTMLDivElement>(null)
  const { fine, reduced } = useDevicePrefs()
  const { begin } = useTransition()

  useEffect(() => {
    if (!fine || reduced) return
    const row = rowRef.current
    const preview = previewRef.current
    if (!row || !preview) return

    const onEnter = () => gsap.to(preview, { autoAlpha: 1, duration: 0.3 })
    const onLeave = () => gsap.to(preview, { autoAlpha: 0, duration: 0.2 })
    const onMove = (e: MouseEvent) => {
      const r = row.getBoundingClientRect()
      const w = preview.offsetWidth
      const h = preview.offsetHeight
      const x = e.clientX - r.left + 26
      const y = e.clientY - r.top - h / 2
      px(gsap.utils.clamp(PAD, r.width - w - PAD, x))
      py(gsap.utils.clamp(PAD, r.height - h - PAD, y))
    }

    gsap.set(preview, { x: -240, y: -240, autoAlpha: 0 })
    const px = gsap.quickTo(preview, 'x', { duration: 0.5, ease: 'power3.out' })
    const py = gsap.quickTo(preview, 'y', { duration: 0.5, ease: 'power3.out' })

    row.addEventListener('mouseenter', onEnter)
    row.addEventListener('mouseleave', onLeave)
    row.addEventListener('mousemove', onMove, { passive: true })

    return () => {
      row.removeEventListener('mouseenter', onEnter)
      row.removeEventListener('mouseleave', onLeave)
      row.removeEventListener('mousemove', onMove)
      gsap.killTweensOf(preview)
    }
  }, [fine, reduced])

  useEffect(() => {
    if (reduced) return
    const row = rowRef.current
    if (!row) return
    const speed = SPEEDS[index % SPEEDS.length]
    const tween = gsap.to(row, {
      y: speed,
      ease: 'none',
      scrollTrigger: {
        trigger: row,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [index, reduced])

  const go = (e: React.MouseEvent) => {
    e.preventDefault()
    begin(`/work/${project.slug}`)
  }

  return (
    <Link
      ref={rowRef}
      to={`/work/${project.slug}`}
      className={`work-row ${index % 2 === 0 ? 'work-row--indent' : ''}`}
      onClick={go}
      data-cursor-hover
    >
      <div className="work-row__inner">
        <span className="meta work-row__index">{String(index + 1).padStart(2, '0')}</span>
        <span className="work-row__name">{project.title}</span>
        <span className="work-row__meta">
          <span className="meta">{project.disciplines.join(' · ')}</span>
          <span className="meta">{project.year}</span>
        </span>
      </div>
      <div
        className={`work-preview${project.media[0]?.className ? ` ${project.media[0].className}` : ''}`}
        ref={previewRef}
        aria-hidden="true"
      >
        <img src={project.media[0]?.src} alt="" loading="lazy" decoding="async" />
      </div>
    </Link>
  )
}

export default function WorkIndex() {
  return (
    <section className="work container" id="work">
      <div className="work__head">
        <h2 className="work__title" data-reveal>
          Selected work
        </h2>
        <span className="meta work__count" data-reveal>
          {String(projects.length).padStart(2, '0')} projects
        </span>
      </div>

      <div className="work-list">
        {projects.map((project, i) => (
          <WorkRow key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
