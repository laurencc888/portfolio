import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/projects";

const ProjectCard = ({ title, description, tags, github, demo, overview, report }: Project) => {
  return (
    <div className="group rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-md">
      <h3 className="mb-2 text-lg font-semibold text-card-foreground">{title}</h3>
      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <div className="mb-4 flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs font-normal">
            {tag}
          </Badge>
        ))}
      </div>
      <div className="flex gap-2">
        {github && (
          <Button variant="ghost" size="sm" asChild>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-1.5 h-4 w-4" /> Code
            </a>
          </Button>
        )}
        {demo && (
          <Button variant="ghost" size="sm" asChild>
            <a href={demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-1.5 h-4 w-4" /> Demo
            </a>
          </Button>
        )}
        {report && (
          <Button variant="ghost" size="sm" asChild>
            <a href={report} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-1.5 h-4 w-4" /> Report
            </a>
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
