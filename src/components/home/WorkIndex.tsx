import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { projects, type Project } from '../../data/projects'
import { useTransition } from '../Transition'
import { asset } from '../../lib/asset'

const SPANS = [7, 5, 5, 7, 6, 6]

function frameType(project: Project): 'logo' | 'screen' | 'photo' {
  const cls = project.media[0]?.className ?? ''
  if (cls.includes('logo')) return 'logo'
  if (cls.includes('small')) return 'screen'
  return 'photo'
}

function WorkTile({ project, index }: { project: Project; index: number }) {
  const { begin } = useTransition()
  const image = project.media[0]
  const to = `/work/${encodeURIComponent(project.slug)}`
  const span = SPANS[index % SPANS.length]

  const go = (e: React.MouseEvent) => {
    e.preventDefault()
    begin(to, { x: e.clientX, y: e.clientY })
  }

  return (
    <Link
      to={to}
      onClick={go}
      className="work-tile"
      data-frame={frameType(project)}
      data-reveal
      style={{ '--span': span } as CSSProperties}
    >
      <div className="work-tile__frame">
        <img
          src={asset(image?.src ?? '')}
          alt={image?.alt ?? project.title}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="work-tile__body">
        <div className="work-tile__row">
          <span className="meta work-tile__index">{String(index + 1).padStart(2, '0')}</span>
          <span className="meta work-tile__year">{project.year}</span>
        </div>
        <h3 className="work-tile__title">
          {project.title}
          <span className="work-tile__cta" aria-hidden="true">
            →
          </span>
        </h3>
        <span className="meta work-tile__disciplines">{project.disciplines.join(' · ')}</span>
      </div>
    </Link>
  )
}

export default function WorkIndex() {
  return (
    <section className="work container" id="work">
      <div className="work__head">
        <div className="work__head-main">
          <span className="meta section-label" data-reveal>
            01 — Selected work
          </span>
          <h2 className="work__title" data-reveal>
            Selected work
          </h2>
        </div>
        <span className="meta work__count" data-reveal>
          {String(projects.length).padStart(2, '0')} projects
        </span>
      </div>

      <div className="work-grid">
        {projects.map((project, i) => (
          <WorkTile key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
