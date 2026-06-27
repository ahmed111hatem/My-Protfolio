import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const hasScrollDrivenAnimations = CSS.supports(
      "(animation-timeline: view()) and (animation-range: entry)",
    );
    if (hasScrollDrivenAnimations) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.15 },
    );

    document
      .querySelectorAll(".scroll-reveal")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
