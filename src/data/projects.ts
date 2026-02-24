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
    title: "Textile Sorter",
    description: "An end-to-end machine learning system that uses CNNs and multi-instance learning to classify textile fiber types from real-world product images for fabric sorting, achieving ~89% accuracy on a 100k+ image dataset.",
    tags: ["Python", "PyTorch", "Machine Learning", "CNNs", "Web Scraping", "Grad-CAM", "Model Fine-Tuning", "Green AI"],
    github: "https://github.com/laurencc888/TextileSort",
    report: "https://drive.google.com/file/d/1DDayYi_hyYqVNOgqCPBIMPiwQAXew2EP/view?usp=sharing",
  },
  {
    title: "DigiCache",
    description: "A collaborative, campus-wide digital geocaching experience where students can view notes, songs, and photos previously left by others.",
    tags: ["Java", "Spring Boot", "DynamoDB",  "Railway", "AWS S3 Buckets"],
    github: "https://github.com/laurencc888/DigiCache-Backend",
    demo: "https://drive.google.com/file/d/1PEIT28wpvUyzZ1WEF5wVa7XVIr5dJ2MZ/view?usp=sharing",
  },
  {
    title: "Overwatch 3.0",
    description: "A team-based FPS game built in Unreal Engine, featuring unique hero abilities and dynamic maps. Deathmatch and Point-Capture modes are available to play.",
    tags: ["C++", "Unreal Engine", "Game Development", "FAB Content", "Multiplayer"],
    github: "https://github.com/laurencc888/OW3.0",
    demo: "https://drive.google.com/file/d/1w3e7r28FaHdkew8b0t_G1-5cKVrwzvoC/view?usp=sharing",
  },
  {
    title: "Let's Get Lyrical!",
    description: "A web application where users can search and favorite songs, generate word clouds from lyrics, and compare with friends. All song data is sourced from the Genius API.",
    tags: ["Web Development", "REST API", "JUnit", "Jest", "Cucumber", "CI/CD", "SQL", "Scrums"],
    github: "https://github.com/laurencc888/LetsGetLyrical",
    demo: "https://drive.google.com/file/d/14G6M4PHkxdRFcUjjli6ZbpsI5dl93dq3/view?usp=sharing",
  },
  // { LOWKEY PLEASE LET ME ADD THIS ONE IN LATER BC I WANNA MAKE IT BETTER
  //   title: "Mini Arcade",
  //   description: "Carbon footprint calculator that tracks daily habits and suggests actionable ways to reduce environmental impact.",
  //   tags: ["Next.js", "PostgreSQL", "Chart.js"],
  //   github: "https://github.com",
  //   demo: "https://example.com",
  // },
  // {
  //   title: "CaLens",
  //   description: "Appointment scheduling system for clinics with patient portal, reminders, and doctor availability management.",
  //   tags: ["Java", "Spring Boot", "React", "MySQL"],
  //   github: "https://github.com",
  // },
  // {
  //   title: "Dough To Bread",
  //   description: "Appointment scheduling system for clinics with patient portal, reminders, and doctor availability management.",
  //   tags: ["Java", "Spring Boot", "React", "MySQL"],
  //   github: "https://github.com",
  // },
  {
    title: "[WIP] Remember",
    description: "A personal project for my best friend's birthday. It serves as a reminder to stop and breathe, even if for a brief moment.",
    tags: ["Neutralinojs", "JavaScript", "HTML", "CSS", "Node.js", "Figma", "Desktop App"],
    github: "https://github.com/laurencc888/Remember",
    demo: "https://drive.google.com/file/d/1j8sqXJwDYj_76OXtiD8ERJYeEaE48lEU/view?usp=sharing",
  },
  {
    title: "Weather Tracker",
    description: "A weather tracking application that displays current conditions and forecasts for a location, given its name or coordinates.",
    tags: ["Java", "HTML", "CSS", "JavaScript", "Java Servlets", "MySQL", "GoogleMaps API", "JDBC", "OpenWeather API"],
    github: "https://github.com/laurencc888/WeatherTracker",
    demo: "https://drive.google.com/file/d/1TsbffRHBI4lIOHkvU_Wo_-ZBRKm1KyOL/view?usp=sharing",
  },
  {
    title: "Tap-A-Bara",
    description: "Arduino project inspired by the classic game 'Whac-a-Mole', where players tap on randomly spinning capybaras to score points, designed as an interactive experience for kids.",
    tags: ["Arduino", "3D-Printing", "Autodesk Fusion", "Tinkercad", "Embedded Systems", "Pugh Analysis"],
    github: "https://github.com/laurencc888/TapABara",
    report: "https://drive.google.com/file/d/1cUr6gfAoWa8dHG1kCJfpPxv6FTLYL2H9/view?usp=sharing",
  },
];
