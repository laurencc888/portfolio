import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const AboutSection = () => {
  return (
    <section id="about" className="mx-auto max-w-2xl px-6 py-24">
      <h2 className="mb-8 text-center text-sm uppercase tracking-[0.3em] text-muted-foreground">
        About
      </h2>
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        <Avatar className="h-20 w-20 shrink-0">
          <AvatarFallback className="text-2xl font-semibold bg-secondary text-secondary-foreground">
            JD
          </AvatarFallback>
        </Avatar>
        <div className="text-center sm:text-left">
          <p className="mb-4 leading-relaxed text-muted-foreground">
            I'm a senior Computer Science student passionate about full-stack development, 
            algorithm design, and creating software that makes a real difference. I've worked 
            on everything from mobile apps to developer tools.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Currently seeking full-time software engineering roles where I can grow, 
            contribute to meaningful products, and keep learning every day.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
