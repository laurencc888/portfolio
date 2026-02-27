import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { AvatarImage } from "@radix-ui/react-avatar";
import profilePic from "../misc/pfp.jpeg";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="about"
      ref={ref}
      className={`mx-auto max-w-2xl px-6 py-24 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <h2 className="mb-8 text-center text-sm uppercase tracking-[0.3em] text-muted-foreground">
        About
      </h2>
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        <Avatar className="h-20 w-20 shrink-0">
          <AvatarImage src={profilePic} alt="Profile Picture" />
          <AvatarFallback className="text-2xl font-semibold bg-secondary text-secondary-foreground">
            LC
          </AvatarFallback>
        </Avatar>
        <div className="text-center sm:text-left">
          <p className="mb-4 leading-relaxed text-muted-foreground">
            I'm a senior Computer Science student at USC also pursuing her Master's degree in Computer Science. I am passionate about full-stack development, 
            algorithm design, and creating impactful software. I've worked 
            on everything from mobile apps to developer tools.
          </p>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            Always looking to pick up new skills and refine my current ones!
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Seeking summer internships and full-time software engineering roles where I can grow, 
            contribute to meaningful products, and continue learning every day.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
