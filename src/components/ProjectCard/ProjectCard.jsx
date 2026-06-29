function ProjectCard({ title, description, image, link }) {
  return (
    <article>
      {image && <img src={image} alt={title} />}
      <h3>{title}</h3>
      <p>{description}</p>
      {link && <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>}
    </article>
  )
}

export default ProjectCard
