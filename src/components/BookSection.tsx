import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import bookCover from "@/assets/book-cover.jpg";
import ScrollReveal from "@/components/ScrollReveal";

export default function BookSection() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(43_74%_56%_/_0.04),_transparent_70%)]" />

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Book cover */}
          <ScrollReveal className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src={bookCover}
                alt="Transforming Government book cover"
                className="relative w-64 sm:w-72 rounded-lg shadow-2xl ring-1 ring-primary/20"
              />
              <div className="absolute -bottom-3 -right-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full">
                Expected 2026
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">The Book</h2>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <p className="text-lg font-serif text-primary/80 italic mb-6">
                Transforming Government: A Leader's Guide to Digital Innovation
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
                Drawing from two decades of hands-on experience modernizing government agencies, this
                upcoming book reveals the strategies, frameworks, and hard-won lessons behind successful
                public sector digital transformation.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={250}>
              <Button size="lg" className="group">
                <Bell className="mr-2 h-4 w-4 group-hover:animate-[scale-in_0.3s_ease-out]" />
                Get Notified
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
