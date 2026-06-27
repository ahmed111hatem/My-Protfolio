import type { Route } from "./+types/home";
import { PortfolioPage } from "../components/portfolio/PortfolioPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ahmed Hatem | AI & Machine Learning Engineer Portfolio" },
    {
      name: "description",
      content:
        "Portfolio of Ahmed Hatem, Computer Science student and aspiring AI & Machine Learning Engineer. Exploring machine learning, data science, and backend development.",
    },
    { name: "color-scheme", content: "light dark" },
  ];
}

export default function Home() {
  return <PortfolioPage />;
}
