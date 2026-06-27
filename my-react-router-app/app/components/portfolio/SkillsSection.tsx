import { SKILL_GROUPS } from "../../data/portfolioData";
import { SectionHeader, SkillIcon } from "./icons";

export function SkillsSection() {
  return (
    <section id="skills" className="skills-section scroll-reveal">
      <div className="section-container">
        <SectionHeader subtitle="My Toolbox" title="Technical Expertise" />
        <div className="skills-grid">
          {SKILL_GROUPS.map((group) => (
            <div key={group.title} className="skills-card glass-card">
              <div className="skills-icon-container">
                <SkillIcon type={group.icon} />
              </div>
              <h3>{group.title}</h3>
              <ul className="skills-list">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
