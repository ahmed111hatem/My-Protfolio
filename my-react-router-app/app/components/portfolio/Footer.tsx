import { SOCIAL_LINKS } from "../../data/portfolioData";
import { GitHubIcon, LinkedInIcon } from "./icons";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="#hero" className="logo">
            &lt;Ahmed Hatem /&gt;
          </a>
          <p>Data Engineer & Computer Science</p>
        </div>
        <nav className="footer-nav" aria-label="Footer Navigation">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#certifications">Certifications</a>
        </nav>
        <div className="footer-socials">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <GitHubIcon size={20} />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Ahmed Hatem. All rights reserved.</p>
      </div>
    </footer>
  );
}
