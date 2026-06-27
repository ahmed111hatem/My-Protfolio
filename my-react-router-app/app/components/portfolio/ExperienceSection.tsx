import { EXPERIENCE } from "../../data/portfolioData";
import { SectionHeader } from "./icons";

export function ExperienceSection() {
  return (
    <section id="experience" className="experience-section scroll-reveal">
      <div className="section-container">
        <SectionHeader subtitle="Professional Background" title="Experience" />
        <div className="timeline-container">
          {EXPERIENCE.map((item) => (
            <div key={item.title} className="timeline-item glass-card">
              <div className="timeline-dot" />
              <div className="timeline-date">{item.date}</div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <h4 className="company-name">{item.company}</h4>
                <p className="timeline-description">{item.description}</p>
                <ul className="timeline-bullets">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
