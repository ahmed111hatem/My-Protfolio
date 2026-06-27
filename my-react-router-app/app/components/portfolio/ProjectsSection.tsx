import { useState } from "react";
import {
  PROJECT_FILTERS,
  PROJECTS,
  type ProjectCategory,
} from "../../data/portfolioData";
import { ExternalLinkIcon, GitHubIcon, ProjectIllustration, SectionHeader } from "./icons";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");

  const filteredProjects = PROJECTS.filter(
    (project) => activeFilter === "all" || project.category === activeFilter,
  );

  return (
    <section id="projects" className="projects-section scroll-reveal">
      <div className="section-container">
        <SectionHeader subtitle="My Work" title="Featured Projects" />

        <div className="filter-container">
          {PROJECT_FILTERS.map((filter) => (
            <button
              key={filter.value}
              type="button"
              className={`filter-btn${activeFilter === filter.value ? " active" : ""}`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid" id="projects-grid">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="project-card glass-card"
              data-category={project.category}
            >
              <div className="project-image-container">
                <div className={`project-image-placeholder ${project.imageClass}`}>
                  <ProjectIllustration type={project.imageClass} />
                </div>
                <span className="project-badge">{project.badge}</span>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech-tags">
                  {project.techTags.map((tag) => (
                    <span key={tag} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-actions">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-project btn-github"
                    aria-label={`GitHub Repository for ${project.title}`}
                  >
                    <GitHubIcon />
                    Source Code
                  </a>
                  <a
                    href="#projects"
                    className="btn-project btn-demo"
                    aria-label={`Live Demo for ${project.title}`}
                  >
                    <ExternalLinkIcon />
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
