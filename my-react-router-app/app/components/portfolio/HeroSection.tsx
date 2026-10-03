export function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="badge animate-fade-in">Available for Internships & Projects</div>
        <h1 className="hero-title animate-slide-up">
          Hi, I am <span className="gradient-text">Ahmed Hatem</span>
        </h1>
        <p className="hero-subtitle animate-slide-up-delayed">
          Data Engineer <span className="separator">|</span> Computer Science
        </p>
        <p className="hero-tagline animate-fade-in-delayed">
          Passionate about data engineering, analytics, and building reliable
          pipelines that turn raw data into real-world insight.
        </p>
        <div className="hero-actions animate-fade-in-delayed">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-graphic" aria-hidden="true">
        <div className="grid-overlay" />
        <div className="neural-network">
          <svg viewBox="0 0 400 400" width="100%" height="100%">
            <line
              x1="80"
              y1="120"
              x2="200"
              y2="80"
              stroke="var(--color-neural-line)"
              strokeWidth="1.5"
            />
            <line
              x1="80"
              y1="120"
              x2="200"
              y2="200"
              stroke="var(--color-neural-line)"
              strokeWidth="1.5"
            />
            <line
              x1="80"
              y1="280"
              x2="200"
              y2="200"
              stroke="var(--color-neural-line)"
              strokeWidth="1.5"
            />
            <line
              x1="80"
              y1="280"
              x2="200"
              y2="320"
              stroke="var(--color-neural-line)"
              strokeWidth="1.5"
            />
            <line
              x1="200"
              y1="80"
              x2="320"
              y2="120"
              stroke="var(--color-neural-line)"
              strokeWidth="1.5"
            />
            <line
              x1="200"
              y1="200"
              x2="320"
              y2="120"
              stroke="var(--color-neural-line)"
              strokeWidth="1.5"
            />
            <line
              x1="200"
              y1="200"
              x2="320"
              y2="280"
              stroke="var(--color-neural-line)"
              strokeWidth="1.5"
            />
            <line
              x1="200"
              y1="320"
              x2="320"
              y2="280"
              stroke="var(--color-neural-line)"
              strokeWidth="1.5"
            />
            <line
              x1="200"
              y1="80"
              x2="200"
              y2="200"
              stroke="var(--color-neural-line)"
              strokeWidth="1"
              strokeDasharray="4,4"
            />
            <line
              x1="200"
              y1="200"
              x2="200"
              y2="320"
              stroke="var(--color-neural-line)"
              strokeWidth="1"
              strokeDasharray="4,4"
            />

            <circle cx="80" cy="120" r="8" fill="url(#blueGradient)" />
            <circle cx="80" cy="280" r="8" fill="url(#blueGradient)" />
            <circle cx="200" cy="80" r="10" fill="url(#purpleGradient)">
              <animate attributeName="r" values="10;12;10" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="200" cy="200" r="10" fill="url(#purpleGradient)">
              <animate attributeName="r" values="10;13;10" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="200" cy="320" r="10" fill="url(#purpleGradient)">
              <animate attributeName="r" values="10;12;10" dur="3.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="320" cy="120" r="8" fill="url(#blueGradient)" />
            <circle cx="320" cy="280" r="8" fill="url(#blueGradient)" />

            <defs>
              <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--gradient-1-start)" />
                <stop offset="100%" stopColor="var(--gradient-1-stop)" />
              </linearGradient>
              <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--gradient-2-start)" />
                <stop offset="100%" stopColor="var(--gradient-2-stop)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <a href="#about" className="scroll-down-arrow" aria-label="Scroll to About Me section">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          width={24}
          height={24}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </a>
    </section>
  );
}
