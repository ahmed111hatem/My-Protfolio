import { useCallback, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

function getSystemTheme(): "light" | "dark" {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const meta = document.querySelector('meta[name="color-scheme"]');
  if (meta) {
    meta.setAttribute(
      "content",
      theme === "system" ? "light dark" : theme,
    );
  }
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "system";
    return (localStorage.getItem("color-scheme") as Theme) || "system";
  });

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const saved = localStorage.getItem("color-scheme");
      if (!saved || saved === "system") {
        applyTheme("system");
      }
    };
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const resolved =
        current === "system" ? getSystemTheme() : current;
      const next = resolved === "dark" ? "light" : "dark";
      localStorage.setItem("color-scheme", next);
      return next;
    });
  }, []);

  return { theme, toggleTheme };
}
