import { useState } from "react";
import { NAV_LINKS } from "../../data/portfolioData";

interface HeaderProps {
  activeSection: string;
  onToggleTheme: () => void;
}

export function Header({ activeSection, onToggleTheme }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isActive = (href: string) => {
    const id = href.replace("#", "");
    return activeSection === id;
  };

  return (
    <header className="navbar-header" id="navbar">
      <div className="navbar-container">
        <a href="#hero" className="logo" aria-label="Ahmed Hatem Home">
          <span className="logo-accent">&lt;</span>Ahmed Hatem
          <span className="logo-accent"> /&gt;</span>
        </a>

        <button
          type="button"
          className={`menu-toggle${menuOpen ? " active" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="nav-links"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <nav
          className={`nav-links${menuOpen ? " active" : ""}`}
          id="nav-links"
          aria-label="Primary navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-item${"isContact" in link && link.isContact ? " btn-contact-nav" : ""}${isActive(link.href) ? " active" : ""}`}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="theme-toggle"
          aria-label="Toggle color theme"
          onClick={onToggleTheme}
        >
          <svg
            className="sun-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            width={20}
            height={20}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
          <svg
            className="moon-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            width={20}
            height={20}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
