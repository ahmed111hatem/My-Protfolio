export function GitHubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      width={size}
      height={size}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"
      />
    </svg>
  );
}

export function ExternalLinkIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      width={size}
      height={size}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  );
}

export function LinkedInIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      width={size}
      height={size}
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export function MailIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      width={size}
      height={size}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  );
}

export function PhoneIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      width={size}
      height={size}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  );
}

export function CertIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      width={24}
      height={24}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
      />
    </svg>
  );
}

export function SkillIcon({ type }: { type: "code" | "ai" | "backend" | "tools" }) {
  const props = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none" as const,
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    width: 24,
    height: 24,
  };

  switch (type) {
    case "code":
      return (
        <svg {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
          />
        </svg>
      );
    case "ai":
      return (
        <svg {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 3.104v13.01c0 .614-.79 1.054-1.34.737L3.75 14.382V3.104c0-.614.79-1.054 1.34-.737l4.66 2.737zm10.5 0v13.01c0 .614-.79 1.054-1.34.737l-4.66-2.737V3.104c0-.614.79-1.054 1.34-.737l4.66 2.737z"
          />
        </svg>
      );
    case "backend":
      return (
        <svg {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.25 14.25h13.5m-13.5 3h13.5m-13.5-6h13.5m-13.5-3h13.5m-13.5-3h13.5"
          />
        </svg>
      );
    case "tools":
      return (
        <svg {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.43l-1.003.828c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.43l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.991l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.645-.869l.214-1.28z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      );
  }
}

export function ProjectIllustration({ type }: { type: string }) {
  switch (type) {
    case "project-img-backend":
      return (
        <svg viewBox="0 0 100 100" className="card-svg">
          <rect x="25" y="20" width="50" height="12" rx="2" fill="var(--color-primary-muted)" />
          <rect x="25" y="40" width="50" height="12" rx="2" fill="var(--color-secondary-muted)" />
          <rect x="25" y="60" width="50" height="12" rx="2" fill="var(--color-primary-muted)" />
          <circle cx="32" cy="26" r="2" fill="var(--color-accent-light)" />
          <circle cx="32" cy="46" r="2" fill="var(--color-accent-light)" />
          <circle cx="32" cy="66" r="2" fill="var(--color-accent-light)" />
        </svg>
      );
    case "project-img-student":
      return (
        <svg viewBox="0 0 100 100" className="card-svg">
          <circle cx="50" cy="35" r="12" fill="var(--color-primary-muted)" />
          <line
            x1="30"
            y1="60"
            x2="70"
            y2="60"
            stroke="var(--color-secondary-muted)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <line
            x1="35"
            y1="70"
            x2="65"
            y2="70"
            stroke="var(--color-secondary-muted)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path d="M42 20 L58 20" stroke="var(--color-text)" strokeWidth="2" />
        </svg>
      );
    case "project-img-portfolio":
      return (
        <svg viewBox="0 0 100 100" className="card-svg">
          <rect x="20" y="20" width="60" height="50" rx="3" fill="var(--color-primary-muted)" />
          <rect x="20" y="20" width="60" height="8" fill="var(--color-secondary-muted)" />
          <circle cx="26" cy="24" r="2" fill="var(--color-accent-light)" />
          <circle cx="32" cy="24" r="2" fill="var(--color-accent-light)" />
          <line x1="28" y1="38" x2="48" y2="38" stroke="var(--color-text)" strokeWidth="2" />
          <line x1="28" y1="46" x2="72" y2="46" stroke="var(--color-text)" strokeWidth="2" />
          <line x1="28" y1="54" x2="62" y2="54" stroke="var(--color-text)" strokeWidth="2" />
        </svg>
      );
    case "project-img-aiml":
      return (
        <svg viewBox="0 0 100 100" className="card-svg">
          <circle cx="50" cy="50" r="14" fill="var(--color-primary-muted)" />
          <circle cx="30" cy="30" r="8" fill="var(--color-secondary-muted)" />
          <circle cx="70" cy="30" r="8" fill="var(--color-secondary-muted)" />
          <circle cx="30" cy="70" r="8" fill="var(--color-secondary-muted)" />
          <circle cx="70" cy="70" r="8" fill="var(--color-secondary-muted)" />
          <line x1="30" y1="30" x2="50" y2="50" stroke="var(--color-text)" strokeWidth="1.5" />
          <line x1="70" y1="30" x2="50" y2="50" stroke="var(--color-text)" strokeWidth="1.5" />
          <line x1="30" y1="70" x2="50" y2="50" stroke="var(--color-text)" strokeWidth="1.5" />
          <line x1="70" y1="70" x2="50" y2="50" stroke="var(--color-text)" strokeWidth="1.5" />
        </svg>
      );
    default:
      return null;
  }
}

export function SectionHeader({
  subtitle,
  title,
}: {
  subtitle: string;
  title: string;
}) {
  return (
    <div className="section-header">
      <span className="section-subtitle">{subtitle}</span>
      <h2 className="section-title">{title}</h2>
      <div className="section-divider" />
    </div>
  );
}
