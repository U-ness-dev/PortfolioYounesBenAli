import ChromeText from '../components/ChromeText/ChromeText'
import { education, skills, languages, softwares, aboutText } from '../data/skills'

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-grid">
        <div className="about-left">
          <div className="about-avatar">
            <img className="avatarMe" src="/src/assets/images/avatar.jpg" alt="Younes Ben Ali" />
            <img className="MeUnderPicture" src="/src/assets/images/placeholder.svg" alt="" />
          </div>
          <img className="cube" src="/src/assets/images/placeholder.svg" alt="" />

          <div className="about-education">
            <div className="h2-star">
              <h2>{education.title}</h2>
            </div>
            {education.items.map((item, i) => (
              <p key={i}>
                <strong>{item.degree}</strong> — {item.school} ({item.year})
              </p>
            ))}
          </div>

          <div className="about-skills">
            <div className="h2-star">
              <h2>Skills</h2>
            </div>
            <div className="skills-list">
              {skills.map((group) => (
                <div key={group.category}>
                  <h3 style={{ color: '#6a8fff', marginBottom: '0.3rem' }}>{group.category}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="about-languages">
            <div className="h2-star">
              <h2>Languages</h2>
            </div>
            <ul>
              {languages.map((lang) => (
                <li key={lang.lang}>
                  {lang.lang}
                  <strong>
                    <span>{lang.level}</span>
                  </strong>
                </li>
              ))}
            </ul>
          </div>

          <div className="about-softwares">
            <div className="h2-star">
              <h2>Softwares</h2>
            </div>
            <div className="software-icons">
              {softwares.map((sw) => (
                <span key={sw} className="software" style={{ background: '#20199b', color: '#e8e8e8', padding: '0.3rem 0.8rem', borderRadius: '0.5rem', fontSize: '0.9rem' }}>
                  {sw}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="about-right">
          <ChromeText as="h1">About Me</ChromeText>
          <p>{aboutText}</p>
        </div>
      </div>

      <img className="long2" src="/src/assets/images/placeholder.svg" alt="" />
    </section>
  )
}

export default AboutSection
