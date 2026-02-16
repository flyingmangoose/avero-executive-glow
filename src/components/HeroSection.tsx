import heroBg from "@/assets/hero-bg.jpg";
import abhijitPhoto from "@/assets/abhijit-photo.jpeg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import GeometricBackground from "@/components/GeometricBackground";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
      <GeometricBackground />

      <div className="relative z-10 container mx-auto px-4 py-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="flex-1 text-center lg:text-left">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-6 animate-fade-in">
            Founder & CEO — Avero Advisors
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight mb-6">
            <span className="text-gold-gradient">Abhijit Verekar</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
            Entrepreneur · GovTech Strategist · AI & Digital Transformation Leader
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" asChild>
              <a href="#contact">
                Let's Connect <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#about">Learn More</a>
            </Button>
          </div>
        </div>
        <div className="flex-shrink-0">
          <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
            <img src={abhijitPhoto} alt="Abhijit Verekar" className="w-full h-full object-cover object-top" />
          </div>
        </div>
      </div>
    </section>
  );
}
