import { profile } from '../../data/profile'
import { asset } from '../../lib/asset'

export default function About() {
  return (
    <section className="about container" id="about">
      <div className="about__head">
        <span className="meta" data-reveal>
          02 — About
        </span>
        <span className="meta" data-reveal>
          {profile.name}
        </span>
      </div>

      <div className="about__body">
        <div data-reveal>
          <div className="about__portrait">
            <img
              src={asset('/images/Me_Pic.png')}
              alt={`Portrait of ${profile.name}`}
              loading="lazy"
              decoding="async"
              className="iimg__media"
            />
          </div>
          <p className="meta" style={{ marginTop: '0.8rem' }}>
            {profile.name}
          </p>
        </div>

        <div>
          <div className="about__statement">
            {profile.about.map((p, i) => (
              <p key={i} data-reveal>
                {p}
              </p>
            ))}
          </div>

          <div className="about__data">
            {profile.skills.map((group) => (
              <div className="about__row" key={group.category} data-reveal>
                <span className="meta about__row-label">{group.category}</span>
                <span className="about__tags">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </span>
              </div>
            ))}

            <div className="about__row" data-reveal>
              <span className="meta about__row-label">Tools</span>
              <span className="about__tags">
                {profile.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </span>
            </div>

            <div className="about__row" data-reveal>
              <span className="meta about__row-label">Education</span>
              <span>
                {profile.education.map((e) => (
                  <span key={e.degree}>
                    {e.degree} — {e.school}, {e.year}
                  </span>
                ))}
              </span>
            </div>

            <div className="about__row" data-reveal>
              <span className="meta about__row-label">Languages</span>
              <span className="about__tags">
                {profile.languages.map((l) => (
                  <span className="about__lang" key={l.lang}>
                    <span>{l.lang}</span>
                    <span className="about__lang-level">{l.level}</span>
                  </span>
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
