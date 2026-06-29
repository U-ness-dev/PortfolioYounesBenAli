import ChromeText from '../components/ChromeText/ChromeText'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import { threeDProjects } from '../data/projects'

function ThreeDSection() {
  return (
    <section id="3d" className="threeD-section">
      <img className="three-shape" src="/src/assets/images/placeholder.svg" alt="" />

      <ChromeText as="h2" className="threeD-title">
        3D Projects
      </ChromeText>

      <div className="threeD-grid">
        {threeDProjects.map((p) => (
          <ProjectCard
            key={p.id}
            cardClass="threeD-card"
            imgClass="threeD-img"
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

export default ThreeDSection
