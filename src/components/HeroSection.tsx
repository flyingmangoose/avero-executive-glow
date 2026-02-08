import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />

      <div className="relative z-10 container mx-auto px-4 text-center py-32">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-6 animate-fade-in">
          Founder & CEO — Avero Advisors
        </p>
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight mb-6">
          <span className="text-gold-gradient">Abhijit Verekar</span>
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Entrepreneur · GovTech Strategist · AI & Digital Transformation Leader
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
    </section>
  );
}
