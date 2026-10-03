import type { Route } from "./+types/home";
import { PortfolioPage } from "../components/portfolio/PortfolioPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ahmed Hatem | Data Engineer Portfolio" },
    {
      name: "description",
      content:
        "Portfolio of Ahmed Hatem, Data Engineer focused on ETL pipelines, Power BI, analytics, and backend systems.",
    },
    { name: "color-scheme", content: "light dark" },
  ];
}

export default function Home() {
  return <PortfolioPage />;
}
