export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "StudySync",
    description: "A collaborative study platform where students can share notes, create flashcards, and form study groups in real time.",
    tags: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "PathFinder",
    description: "Interactive graph algorithm visualizer supporting BFS, DFS, Dijkstra's, and A* with step-by-step animation.",
    tags: ["Python", "Flask", "D3.js"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "BudgetBuddy",
    description: "Personal finance tracker with expense categorization, monthly insights, and visual spending breakdowns.",
    tags: ["React Native", "Node.js", "MongoDB"],
    github: "https://github.com",
  },
  {
    title: "CodeReview Bot",
    description: "A GitHub bot that automatically reviews pull requests using static analysis and provides inline suggestions.",
    tags: ["Python", "GitHub API", "Docker"],
    github: "https://github.com",
  },
  {
    title: "EcoTrack",
    description: "Carbon footprint calculator that tracks daily habits and suggests actionable ways to reduce environmental impact.",
    tags: ["Next.js", "PostgreSQL", "Chart.js"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "MediConnect",
    description: "Appointment scheduling system for clinics with patient portal, reminders, and doctor availability management.",
    tags: ["Java", "Spring Boot", "React", "MySQL"],
    github: "https://github.com",
  },
];
