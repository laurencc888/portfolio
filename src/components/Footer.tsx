import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="border-t border-border px-6 py-10 text-center">
      <div className="mb-4 flex justify-center gap-3">
        <Button variant="ghost" size="icon" asChild>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-4 w-4" />
          </a>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </a>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <a href="mailto:jane@example.com" aria-label="Email">
            <Mail className="h-4 w-4" />
          </a>
        </Button>
      </div>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Jane Doe. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
