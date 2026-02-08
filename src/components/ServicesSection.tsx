import { Building2, Brain, Cpu, Database, UserCog } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  { icon: Building2, title: "GovTech Consulting", desc: "Strategic advisory for government agencies adopting modern technology platforms and cloud infrastructure." },
  { icon: Cpu, title: "Digital Transformation", desc: "End-to-end transformation strategies that modernize legacy systems and improve citizen-facing services." },
  { icon: Brain, title: "AI & Automation Advisory", desc: "Implementing intelligent automation and AI solutions to streamline government operations and decision-making." },
  { icon: Database, title: "ERP Strategy & Implementation", desc: "Enterprise resource planning roadmaps, vendor selection, and implementation oversight for public sector." },
  { icon: UserCog, title: "Executive Advisory & Fractional CTO", desc: "On-demand executive technology leadership for organizations navigating complex IT transformations." },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Services</p>
          <h2 className="text-3xl sm:text-4xl font-bold">What I Do</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 80}>
              <Card className="bg-card border-border/50 hover:border-primary/30 transition-colors group h-full">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                    <s.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{s.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
