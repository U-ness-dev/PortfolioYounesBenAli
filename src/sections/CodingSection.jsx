import ChromeText from '../components/ChromeText/ChromeText'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import { codingProjects } from '../data/projects'

function CodingSection() {
  return (
    <section id="coding" className="coding-section">
      <img className="coding-bg-long" src="/src/assets/images/placeholder.svg" alt="" />
      <img className="coding-bg-star" src="/src/assets/images/placeholder.svg" alt="" />

      <ChromeText as="h2" className="coding-title">
        Coding Projects
      </ChromeText>

      <div className="coding-grid">
        {codingProjects.map((p) => (
          <ProjectCard
            key={p.id}
            cardClass="coding-card"
            imgClass="coding-img"
            img={p.img}
            title={p.title}
            description={p.description}
            tools={p.tools}
          />
        ))}
      </div>
    </section>
  )
}

export default CodingSection
