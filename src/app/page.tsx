import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ImpactMetrics from "@/components/ImpactMetrics";
import Timeline from "@/components/Timeline";
import ExpertiseBento from "@/components/ExpertiseBento";
import FeaturedProjects from "@/components/FeaturedProjects";
import IvaShowcase from "@/components/IvaShowcase";
import TechWall from "@/components/TechWall";
import Certifications from "@/components/Certifications";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <ImpactMetrics />
      <About />
      <Timeline />
      <ExpertiseBento />
      <FeaturedProjects />
      <IvaShowcase />
      <TechWall />
      <Certifications />
      <Testimonials />
      <Contact />
    </main>
  );
}
