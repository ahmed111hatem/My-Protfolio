import { EDUCATION } from "../../data/portfolioData";
import { SectionHeader } from "./icons";

export function EducationSection() {
  return (
    <section id="education" className="education-section scroll-reveal">
      <div className="section-container">
        <SectionHeader subtitle="Academic Background" title="Education" />
        <div className="timeline-container">
          {EDUCATION.map((item) => (
            <div key={item.degree} className="timeline-item glass-card">
              <div className="timeline-dot" />
              <div className="timeline-date">{item.date}</div>
              <div className="timeline-content">
                <h3>{item.degree}</h3>
                <h4 className="company-name">{item.school}</h4>
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
