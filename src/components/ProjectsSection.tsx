import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" ref={ref} className="mx-auto max-w-4xl px-6 py-24">
      <h2 className={`mb-10 text-center text-sm uppercase tracking-[0.3em] text-muted-foreground transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        Projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.title}
            {...project}
            className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: isVisible ? `${i * 100}ms` : "0ms" }}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
