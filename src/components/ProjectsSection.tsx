import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const ProjectsSection = () => {
  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 py-24">
      <h2 className="mb-10 text-center text-sm uppercase tracking-[0.3em] text-muted-foreground">
        Projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
