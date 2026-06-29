import ChromeText from '../components/ChromeText/ChromeText'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import { uiProjects } from '../data/projects'

function UISection() {
  return (
    <section id="ui" className="ui-section" style={{ padding: '4rem 0' }}>
      <ChromeText as="h2" className="branding-title">
        UI &amp; UX Design
      </ChromeText>

      <img className="ui-bg" src="/src/assets/images/placeholder.svg" alt="" />

      <div className="ui-projects">
        {uiProjects.map((p) => (
          <ProjectCard
            key={p.id}
            cardClass="phone-card"
            imgClass="phone-img"
            img={p.img}
            title={p.title}
            description={p.description}
          />
        ))}
      </div>
    </section>
  )
}

export default UISection
