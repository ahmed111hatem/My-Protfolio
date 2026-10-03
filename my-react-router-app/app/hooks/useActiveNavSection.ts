import { useEffect, useState } from "react";

const SECTION_IDS = [
  "hero",
  "about",
  "education",
  "skills",
  "projects",
  "experience",
  "certifications",
  "contact",
];

export function useActiveNavSection() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const highlight = () => {
      const scrollY = window.scrollY;

      for (const id of SECTION_IDS) {
        const section = document.getElementById(id);
        if (!section) continue;

        const sectionTop = section.offsetTop - 120;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollY > sectionTop && scrollY <= sectionBottom) {
          setActiveSection(id);
          return;
        }
      }
    };

    window.addEventListener("scroll", highlight, { passive: true });
    highlight();
    return () => window.removeEventListener("scroll", highlight);
  }, []);

  return activeSection;
}
