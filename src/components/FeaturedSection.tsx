import ScrollReveal from "@/components/ScrollReveal";

const clients = [
  "Santa Fe County",
  "City of San Jose",
  "Port of Portland",
  "State of New Mexico",
  "City of Albuquerque",
  "Bernalillo County",
];

export default function FeaturedSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <p className="text-center text-sm text-muted-foreground tracking-widest uppercase mb-10">
            Trusted By Government Agencies Nationwide
          </p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-4xl mx-auto">
            {clients.map((c) => (
              <div key={c} className="px-6 py-3 border border-border/50 rounded-lg text-sm text-muted-foreground font-medium hover:border-primary/30 hover:text-primary transition-colors">
                {c}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
