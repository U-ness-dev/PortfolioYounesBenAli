import ChromeText from '../components/ChromeText/ChromeText'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import { brandingProjects } from '../data/projects'

function BrandingSection() {
  return (
    <section id="branding" className="branding-section">
      <div className="branding-bg">
        <img className="branding-curve" src="/src/assets/images/placeholder.svg" alt="" />

        <ChromeText as="h2" className="branding-title">
          Branding &amp; Graphic Design
        </ChromeText>

        <div className="branding-projects">
          {brandingProjects.map((p) => (
            <ProjectCard
              key={p.id}
              cardClass="branding-project"
              imgClass="project-img"
              img={p.img}
              title={p.title}
              description={p.description}
              tools={p.tools}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BrandingSection
