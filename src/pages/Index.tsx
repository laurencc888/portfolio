import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background text-foreground">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <Footer />
    </main>
  );
};

export default Index;
