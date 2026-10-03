export type ProjectCategory = "all" | "data-analysis" | "backend";

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
  // Paste the public certificate URL here (Credly, Coursera, Google Drive, etc.)
  credentialUrl: string;
}

export interface ExperienceItem {
  date: string;
  title: string;
  company: string;
  description: string;
  bullets: string[];
}

export interface EducationItem {
  date: string;
  degree: string;
  school: string;
  description: string;
  bullets: string[];
}

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact", isContact: true },
] as const;

export const PROJECT_FILTERS: { value: ProjectCategory; label: string }[] = [
  { value: "all", label: "All Projects" },
  { value: "data-analysis", label: "Data Analysis" },
  { value: "backend", label: "Backend Systems" },
];

export const PROJECTS: Project[] = [
  {
    id: "project-management",
    category: "backend",
    badge: "Java / Backend",
    title: "Project Management System",
    description:
      "A vanilla Java desktop system for managing company projects, tasks, and operations — built around structured data models and efficient record handling.",
    techTags: ["Java", "OOP", "SQL", "Desktop App"],
    githubUrl: "https://github.com/ahmed111hatem/Project_Management_System",
    imageClass: "project-img-backend",
  },
  {
    id: "spotify-analysis",
    category: "data-analysis",
    badge: "Data Analysis",
    title: "Spotify Song Attributes Analysis",
    description:
      "Exploratory analysis of Spotify song attributes to uncover patterns in audio features, prepare datasets, and turn raw music metadata into actionable insights.",
    techTags: ["Python", "Pandas", "NumPy", "EDA", "Visualization"],
    githubUrl: "https://github.com/ahmed111hatem/Spotify-Song-Attributes-Analysis-",
    imageClass: "project-img-aiml",
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Languages",
    icon: "code",
    skills: ["Python", "SQL", "Java", "C++"],
  },
  {
    title: "Data Engineering",
    icon: "backend",
    skills: ["ETL Pipelines", "Data Warehousing", "Database Design", "Data Modeling"],
  },
  {
    title: "Analytics & BI",
    icon: "ai",
    skills: ["Power BI", "Pandas", "NumPy", "Data Visualization"],
  },
  {
    title: "Tools & Platforms",
    icon: "tools",
    skills: ["Git", "GitHub", "VS Code", "Excel"],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    date: "2022 - Present",
    degree: "Bachelor of Computer Science",
    school: "Helwan University",
    description:
      "Computer Science coursework covering algorithms, databases, and software engineering, with a growing focus on data engineering and analytics.",
    bullets: [
      "Built a strong foundation in programming, relational databases, and software design.",
      "Applied data analysis, SQL, and backend concepts through coursework and personal projects.",
      "Active technical member at IEEE Helwan Branch, collaborating on workshops and coding initiatives.",
    ],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    date: "Oct 2024 - Present",
    title: "Machine Learning Member",
    company: "IEEE Helwan Branch",
    description:
      "Active member of the technical committee, focusing on building Machine Learning competence and collaborating on projects.",
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
    title: 'Data Scientist in Python',
    issuer: 'DataCamp',
    description:
      'Covers data science workflows in Python, including data preparation, exploratory data analysis, statistical analysis, machine learning, and model evaluation.',
    credentialUrl:
      'https://drive.google.com/file/d/1qvbnclcCULSOld3hhccaSdpwroLLIjmA/view?usp=drive_link',
  },
  {
    title: 'Intermediate Git',
    issuer: 'DataCamp',
    description:
      'Covers intermediate Git workflows, including branching, merging, version control, collaboration, and managing changes across software projects.',
    credentialUrl:
      'https://drive.google.com/file/d/1N9Ov4LDpWuKEZ4zBq_ZfSZaM5TAyynse/view?usp=drive_link',
  },
  {
    title: 'Intermediate SQL',
    issuer: 'DataCamp',
    description:
      'Covers intermediate SQL techniques for querying and manipulating relational data, including joins, subqueries, aggregations, and advanced data analysis.',
    credentialUrl:
      'https://drive.google.com/file/d/1VZ4fK3s67WZr8GVMhXyahR3DMQsoG24X/view?usp=drive_link',
  },
  {
    title: 'Preprocessing for Machine Learning in Python',
    issuer: 'DataCamp',
    description:
      'Covers essential data preprocessing techniques for machine learning, including handling missing values, encoding categorical data, feature scaling, and preparing datasets for model training.',
    credentialUrl:
      'https://drive.google.com/file/d/1tQiqMemsvv-Ny3QbPLug6HlA6xN-Ab39/view?usp=drive_link',
  },
];

export const SOCIAL_LINKS = {
  github: "https://github.com/Ahmed111Hatem",
  linkedin: "https://www.linkedin.com/in/ahmed-hatem-416205322/",
  email: "ahmed111hatem111@gmail.com",
  phoneDisplay: "+20 01080602770",
  phoneHref: "tel:+201080602770",
} as const;
