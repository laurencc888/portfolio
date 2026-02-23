export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  report?: string;
}

export const projects: Project[] = [
  {
    title: "DigiCache",
    description: "A collaborative, campus-wide digital geocaching experience where students can view notes, songs, and photos previously left by others.",
    tags: ["Java", "Spring Boot", "DynamoDB",  "Railway", "AWS S3 Buckets"],
    github: "https://github.com/laurencc888/DigiCache-Backend",
    demo: "https://drive.google.com/file/d/1PEIT28wpvUyzZ1WEF5wVa7XVIr5dJ2MZ/view?usp=sharing",
  },
  {
    title: "Textile Sorter",
    description: "An end-to-end machine learning system that uses CNNs and multi-instance learning to classify textile fiber types from real-world product images for fabric sorting, achieving ~89% accuracy on a 100k+ image dataset.",
    tags: ["Python", "PyTorch", "Machine Learning", "CNNs", "Web Scraping", "Grad-CAM", "Model Fine-Tuning", "Green AI"],
    github: "https://github.com/laurencc888/TextileSort",
    report: "https://drive.google.com/file/d/1DDayYi_hyYqVNOgqCPBIMPiwQAXew2EP/view?usp=sharing",
  },
  {
    title: "Let's Get Lyrical!",
    description: "Personal finance tracker with expense categorization, monthly insights, and visual spending breakdowns.",
    tags: ["React Native", "Node.js", "MongoDB"],
    github: "https://github.com",
  },
  {
    title: "Overwatch 3.0",
    description: "A GitHub bot that automatically reviews pull requests using static analysis and provides inline suggestions.",
    tags: ["C++", "Unreal Engine", "Game Development"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Mini Arcade",
    description: "Carbon footprint calculator that tracks daily habits and suggests actionable ways to reduce environmental impact.",
    tags: ["Next.js", "PostgreSQL", "Chart.js"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Tap-A-Bara",
    description: "Appointment scheduling system for clinics with patient portal, reminders, and doctor availability management.",
    tags: ["Java", "Spring Boot", "React", "MySQL"],
    github: "https://github.com",
  },
  // {
  //   title: "CaLens",
  //   description: "Appointment scheduling system for clinics with patient portal, reminders, and doctor availability management.",
  //   tags: ["Java", "Spring Boot", "React", "MySQL"],
  //   github: "https://github.com",
  // },
  {
    title: "Dough To Bread",
    description: "Appointment scheduling system for clinics with patient portal, reminders, and doctor availability management.",
    tags: ["Java", "Spring Boot", "React", "MySQL"],
    github: "https://github.com",
  },
  {
    title: "Remember",
    description: "A personal project for my best friend's birthday. It serves as a reminder to stop and breathe, even if for a brief moment.",
    tags: ["Neutralinojs", "JavaScript", "HTML", "CSS", "Node.js", "Figma", "Desktop App"],
    github: "https://github.com/laurencc888/Remember",
    demo: "https://drive.google.com/file/d/1j8sqXJwDYj_76OXtiD8ERJYeEaE48lEU/view?usp=sharing",
  },
  {
    title: "How's the Weather?",
    description: "Appointment scheduling system for clinics with patient portal, reminders, and doctor availability management.",
    tags: ["Java", "Spring Boot", "React", "MySQL"],
    github: "https://github.com",
  },
];
