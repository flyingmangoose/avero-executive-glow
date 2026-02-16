import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, Sparkles, CalendarClock } from "lucide-react";
import bookCover from "@/assets/book-cover.jpg";
import ScrollReveal from "@/components/ScrollReveal";

export default function BookSection() {
  return (
    <section id="book" className="relative min-h-screen flex items-center overflow-hidden py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(43_74%_56%_/_0.06),_transparent_60%)]" />

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* Side glow accents */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-32 w-64 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -translate-y-1/2 -right-32 w-64 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Book cover */}
          <ScrollReveal className="flex justify-center">
            <div className="relative group perspective-[1200px]">
              {/* Golden glow behind book */}
              <div className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-primary/25 via-primary/10 to-primary/25 blur-2xl opacity-60 group-hover:opacity-100 transition-all duration-700" />
              <div className="absolute -inset-4 rounded-2xl bg-primary/10 blur-xl opacity-0 group-hover:opacity-80 transition-all duration-500" />

              {/* Book with 3D tilt on hover */}
              <div className="relative transition-transform duration-700 ease-out group-hover:[transform:rotateY(-8deg)_rotateX(4deg)_scale(1.03)]">
                <img
                  src={bookCover}
                  alt="Start at Zero book cover"
                  className="relative w-72 sm:w-80 lg:w-96 rounded-lg shadow-2xl ring-1 ring-primary/30"
                />

                {/* Shimmer sweep effect */}
                <div className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 -translate-x-full animate-[shimmer_3s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-primary/15 to-transparent skew-x-[-20deg]" />
                </div>

                {/* Spine shadow for 3D depth */}
                <div className="absolute top-0 bottom-0 left-0 w-4 bg-gradient-to-r from-background/40 to-transparent rounded-l-lg" />
              </div>

              {/* Timeline badge */}
              <div className="absolute -bottom-4 -right-4 flex items-center gap-1.5 bg-card border border-primary/30 text-primary text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                <CalendarClock className="h-3.5 w-3.5" />
                Spring 2026
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <div className="text-center md:text-left">
            <ScrollReveal>
              <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
                Coming Soon
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3">Start at Zero</h2>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <p className="text-xl lg:text-2xl font-serif text-primary/80 italic mb-8">
                Leading High-Stakes Modernization in the Age of AI
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-muted-foreground leading-relaxed mb-10 max-w-lg mx-auto md:mx-0 text-base lg:text-lg">
                Drawing from two decades of hands-on experience leading high-stakes modernization efforts, this
                upcoming book reveals the strategies, frameworks, and hard-won lessons behind successful
                digital transformation in the age of AI.
              </p>
            </ScrollReveal>

            {/* CTAs */}
            <ScrollReveal delay={250}>
              <div className="space-y-5">
                {/* Primary CTA - Pre-order signed copy */}
                <div className="flex flex-col items-center md:items-start">
                  <Badge className="mb-3 bg-primary/15 text-primary border-primary/30 text-xs tracking-wider uppercase px-3 py-1">
                    <Sparkles className="h-3 w-3 mr-1.5" />
                    Only 100 Signed Copies
                  </Badge>
                  <Button
                    size="lg"
                    className="w-full sm:w-auto h-14 px-10 text-base font-semibold gold-gradient text-primary-foreground hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
                  >
                    Pre-Order Signed Copy — Limited Edition
                  </Button>
                </div>

                {/* Secondary CTA - Get notified */}
                <div className="flex justify-center md:justify-start">
                  <Button size="lg" variant="outline" className="group border-primary/30 hover:border-primary/60 hover:bg-primary/5">
                    <Bell className="mr-2 h-4 w-4 group-hover:animate-[scale-in_0.3s_ease-out]" />
                    Get Notified at Launch
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
