function ProjectCard({ img, title, description, tools, cardClass, imgClass }) {
  return (
    <div className={cardClass}>
      {img && <img src={img} alt={title} className={imgClass} />}
      <h3 className="chrome-text">{title}</h3>
      {description && <p className={cardClass === 'phone-card' ? 'phone-desc' : ''}>{description}</p>}
      {tools && (
        <div className="project-programs">
          {tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProjectCard
