export type ProjectCategory = "all" | "ai-ml" | "backend" | "frontend";

export interface Project {
  id: string;
  category: Exclude<ProjectCategory, "all">;
  badge: string;
  title: string;
  description: string;
  techTags: string[];
  githubUrl: string;
  imageClass: string;
}

export interface SkillGroup {
  title: string;
  icon: "code" | "ai" | "backend" | "tools";
  skills: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  description: string;
}

export interface ExperienceItem {
  date: string;
  title: string;
  company: string;
  description: string;
  bullets: string[];
}

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact", isContact: true },
] as const;

export const PROJECT_FILTERS: { value: ProjectCategory; label: string }[] = [
  { value: "all", label: "All Projects" },
  { value: "ai-ml", label: "AI & Machine Learning" },
  { value: "backend", label: "Backend Systems" },
  { value: "frontend", label: "Frontend / Portfolio" },
];

export const PROJECTS: Project[] = [
  {
    id: "backend-server",
    category: "backend",
    badge: "Backend",
    title: "Backend Server Project",
    description:
      "Designed and developed a production-ready backend server focusing on scalable data structures, high performance, secure authorization, and robust API development.",
    techTags: ["Node.js", "REST APIs", "Database Design", "SQL"],
    githubUrl: "https://github.com/Ahmed111Hatem",
    imageClass: "project-img-backend",
  },
  {
    id: "student-management",
    category: "backend",
    badge: "Database / Java",
    title: "Student Management System",
    description:
      "A complete desktop system for managing student records, course enrollments, and academic information. Designed with highly efficient relational queries.",
    techTags: ["Java", "SQL", "Database Design", "OOP"],
    githubUrl: "https://github.com/ahmed111hatem/Project_Management_System.git",
    imageClass: "project-img-student",
  },
  {
    id: "portfolio",
    category: "frontend",
    badge: "Portfolio",
    title: "Portfolio Website",
    description:
      "A high-end, responsive personal portfolio website showcasing technical skills, academic projects, and professional IEEE achievements.",
    techTags: ["HTML5", "Vanilla CSS", "JavaScript", "Glassmorphism"],
    githubUrl: "https://github.com/Ahmed111Hatem",
    imageClass: "project-img-portfolio",
  },
  {
    id: "ml-pipeline",
    category: "ai-ml",
    badge: "AI / ML",
    title: "ML & Deep Learning Pipeline",
    description:
      "Engineered end-to-end Machine Learning model workflows using Pandas, NumPy, and PyTorch. Performed extensive exploratory data analysis and model performance audits.",
    techTags: ["Python", "PyTorch", "Pandas", "NumPy"],
    githubUrl: "https://github.com/Ahmed111Hatem",
    imageClass: "project-img-aiml",
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Languages",
    icon: "code",
    skills: ["Python", "Java", "C++", "C", "SQL"],
  },
  {
    title: "AI & Machine Learning",
    icon: "ai",
    skills: ["Pandas", "NumPy", "PyTorch", "Data Analysis", "ML Fundamentals"],
  },
  {
    title: "Backend Development",
    icon: "backend",
    skills: ["Node.js", "REST APIs", "Database Design"],
  },
  {
    title: "Tools & DevOps",
    icon: "tools",
    skills: ["Git", "GitHub", "VS Code"],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    date: "Oct 2024 - Present",
    title: "Machine Learning Member",
    company: "IEEE Helwan Branch",
    description:
      "Active member in the student branch technical committee, focusing on building Machine Learning competence and collaborating on projects.",
    bullets: [
      "Processed and prepped complex tabular datasets for training using Pandas and NumPy.",
      "Acquired solid understandings of Machine Learning fundamentals (supervised, unsupervised models).",
      "Explored and designed basic deep neural networks using the PyTorch framework.",
      "Collaborated closely with cross-functional technical teams on workshops, hackathons, and local coding initiatives.",
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Machine Learning",
    issuer: "Professional Certifications",
    description:
      "Focuses on regression, classification, clustering, neural network design, and model evaluation metrics.",
  },
  {
    title: "Artificial Intelligence",
    issuer: "AI Foundations & Ethics",
    description:
      "Explores deep learning networks, generative models, search algorithms, and ethical considerations in AI deployment.",
  },
  {
    title: "Programming",
    issuer: "Software Architecture & DSA",
    description:
      "Focuses on object-oriented software engineering, advanced algorithms, and memory management in C++ and Java.",
  },
  {
    title: "Data Analysis",
    issuer: "Statistical Analytics",
    description:
      "Focuses on statistical modeling, testing, data pipelines, visualization libraries, and SQL querying operations.",
  },
];

export const SOCIAL_LINKS = {
  github: "https://github.com/Ahmed111Hatem",
  linkedin: "https://www.linkedin.com/in/ahmed-hatem-416205322/",
} as const;
