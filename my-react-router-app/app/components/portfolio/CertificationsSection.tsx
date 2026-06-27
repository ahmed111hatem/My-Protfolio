import { CERTIFICATIONS } from "../../data/portfolioData";
import { CertIcon, SectionHeader } from "./icons";

export function CertificationsSection() {
  return (
    <section id="certifications" className="certifications-section scroll-reveal">
      <div className="section-container">
        <SectionHeader subtitle="Continuous Learning" title="Certifications" />
        <div className="certifications-grid">
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.title} className="cert-card glass-card">
              <div className="cert-icon-container">
                <CertIcon />
              </div>
              <h3>{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-desc">{cert.description}</p>
              <div className="cert-badge">Credential Pending</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
