import { SectionHeader } from "./icons";

export function AboutSection() {
  return (
    <section id="about" className="about-section scroll-reveal">
      <div className="section-container">
        <SectionHeader subtitle="Get to know me" title="About Me" />
        <div className="about-grid">
          <div className="about-text glass-card">
            <p className="lead">
              I am a Computer Science professional with a strong foundation in
              programming, algorithms, databases, and software development
              methodologies.
            </p>
            <p>
              My true passion lies in{" "}
              <strong>
                Data Engineering, Business Intelligence, and analytics pipelines
              </strong>
              . I enjoy cleaning and modeling data, building ETL workflows, and
              turning insights into dashboards and reliable backend systems.
            </p>
            <p>
              As a fast learner who thrives on tackling complex problems, I&apos;m
              always searching for ways to design and build impactful solutions. I
              am eager to apply my technical foundation to real-world data
              problems and grow alongside industry experts.
            </p>
            <div className="about-info-chips">
              <div className="info-chip">
                <strong>Background:</strong> Computer Science
              </div>
              <div className="info-chip">
                <strong>Focus:</strong> Data Engineering & Power BI
              </div>
              <div className="info-chip">
                <strong>Open to:</strong> Internships, Freelance, Collaborative
                Projects
              </div>
            </div>
          </div>

          <div className="about-visual glass-card">
            <div className="card-glow" />
            <div className="visual-placeholder">
              <svg viewBox="0 0 200 200" width="100%" height="100%" className="floating-svg">
                <rect
                  x="30"
                  y="40"
                  width="140"
                  height="30"
                  rx="8"
                  fill="rgba(37, 99, 235, 0.15)"
                  stroke="var(--color-primary)"
                  strokeWidth="1.5"
                />
                <text
                  x="100"
                  y="59"
                  fill="var(--color-text)"
                  fontFamily="Fira Code"
                  fontSize="10"
                  textAnchor="middle"
                >
                  Data Sources
                </text>
                <path
                  d="M100 70 L100 90"
                  stroke="var(--color-primary-muted)"
                  strokeWidth="2"
                />
                <rect
                  x="30"
                  y="90"
                  width="140"
                  height="30"
                  rx="8"
                  fill="rgba(147, 51, 234, 0.15)"
                  stroke="var(--color-secondary)"
                  strokeWidth="1.5"
                />
                <text
                  x="100"
                  y="109"
                  fill="var(--color-text)"
                  fontFamily="Fira Code"
                  fontSize="10"
                  textAnchor="middle"
                >
                  ETL / Transform
                </text>
                <path
                  d="M100 120 L100 140"
                  stroke="var(--color-secondary-muted)"
                  strokeWidth="2"
                />
                <rect
                  x="30"
                  y="140"
                  width="140"
                  height="30"
                  rx="8"
                  fill="rgba(37, 99, 235, 0.15)"
                  stroke="var(--color-primary)"
                  strokeWidth="1.5"
                />
                <text
                  x="100"
                  y="159"
                  fill="var(--color-text)"
                  fontFamily="Fira Code"
                  fontSize="10"
                  textAnchor="middle"
                >
                  Power BI Insights
                </text>
              </svg>
            </div>
            <div className="recruiter-highlight">
              <h3>Fast Learner & Innovator</h3>
              <p>
                Committed to applying solid CS foundations directly to real-world
                production engineering challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
