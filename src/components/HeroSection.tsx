import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-muted-foreground">
        Welcome to my
      </p>
      <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
        PORTFOLIO
      </h1>
      <p className="mb-8 max-w-md text-lg text-muted-foreground">
        A collection of projects I've worked on over the years.
      </p>
      <div className="flex gap-3">
        <Button variant="ghost" size="icon" asChild>  
          {/* TODO: make this a resume download */}
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="resume">
            <Github className="h-5 w-5" />
          </a>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <a href="https://www.linkedin.com/in/laurencc888/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <a href="mailto:laurencc@usc.edu" aria-label="Email">
            <Mail className="h-5 w-5" />
          </a>
        </Button>
      </div>
      <a
        href="#about"
        className="absolute bottom-10 animate-bounce text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-6 w-6" />
      </a>
    </section>
  );
};

export default HeroSection;
