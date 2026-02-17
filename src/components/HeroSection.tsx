import heroBg from "@/assets/hero-bg.jpg";
import abhijitPhoto from "@/assets/abhijit-photo.jpeg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import GeometricBackground from "@/components/GeometricBackground";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with low opacity */}
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />

      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />

      <GeometricBackground />

      <div className="relative z-10 container mx-auto px-4 py-32 flex flex-col lg:flex-row items-center lg:items-end gap-8 lg:gap-0">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left z-10">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-6 animate-fade-in">
            Founder &amp; CEO — Avèro Advisors
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-4 font-serif text-foreground leading-[1.1]">
            Abhijit Verekar
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-muted-foreground mb-6">
            Fixing government technology, before it breaks.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
            Author of <em>Start at Zero</em> · 5× Inc. 5000 CEO · Independent Government Technology Advisor
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" asChild>
              <a href="#book">
                Read the Book <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://averoadvisors.com" target="_blank" rel="noopener noreferrer">
                Work with Avèro →
              </a>
            </Button>
          </div>
        </div>

        {/* Photo — large, integrated with gradient fade */}
        <div className="relative flex-shrink-0 lg:-mb-32 lg:-mr-8">
          <div className="relative w-80 h-[32rem] sm:w-96 sm:h-[36rem] lg:w-[30rem] lg:h-[40rem]">
            <img
              src={abhijitPhoto}
              alt="Abhijit Verekar"
              className="w-full h-full object-cover object-top rounded-xl shadow-xl"
            />
            {/* Bottom fade into background */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent rounded-xl" />
            {/* Side fade for seamless blend */}
            <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-transparent rounded-xl hidden lg:block" />
            {/* Edge softening */}
            <div className="absolute inset-0 bg-gradient-to-l from-background/20 via-transparent to-transparent rounded-xl hidden lg:block" />
            {/* Subtle glow behind */}
            <div className="absolute -inset-6 bg-primary/5 rounded-3xl blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
