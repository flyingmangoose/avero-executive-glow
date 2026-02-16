import heroBg from "@/assets/hero-bg.jpg";
import abhijitPhoto from "@/assets/abhijit-photo.jpeg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import GeometricBackground from "@/components/GeometricBackground";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
      <GeometricBackground />

      <div className="relative z-10 container mx-auto px-4 py-32 flex flex-col lg:flex-row items-center lg:items-end gap-8 lg:gap-0">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left z-10">
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

        {/* Photo — large, integrated with gradient fade */}
        <div className="relative flex-shrink-0 lg:-mb-32 lg:-mr-8">
          <div className="relative w-72 h-[28rem] sm:w-80 sm:h-[32rem] lg:w-[26rem] lg:h-[36rem]">
            <img
              src={abhijitPhoto}
              alt="Abhijit Verekar"
              className="w-full h-full object-cover object-top rounded-t-3xl"
            />
            {/* Bottom fade into background */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent rounded-t-3xl" />
            {/* Side fade for seamless blend */}
            <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-transparent rounded-t-3xl hidden lg:block" />
            {/* Subtle glow behind */}
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
