import { Building2, Brain, Cpu, Database, UserCog, Shield, FileSearch, RefreshCw } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  { icon: Database, title: "ERP Advisory & Selection", desc: "Vendor-neutral assessment, requirements definition, RFP development, and selection facilitation designed for government procurement." },
  { icon: Shield, title: "Implementation Oversight & IV&V", desc: "Independent verification throughout implementation, ensuring vendors deliver on commitments and your interests are protected." },
  { icon: UserCog, title: "Executive Alignment & Change Management", desc: "Get leadership aligned on risks, engagement needs, and decision rights before the integrator starts. Real OCM, not checkbox OCM." },
  { icon: FileSearch, title: "Contract & Data Advisory", desc: "Independent contract review to protect agency interests, plus comprehensive data assessment, cleansing strategy, and migration planning." },
  { icon: Brain, title: "AI Maturity & Readiness", desc: "Practical, responsible AI strategies using our proprietary 5-level maturity model designed specifically for government agencies." },
  { icon: Cpu, title: "Digital Transformation Advisory", desc: "Comprehensive modernization strategy combining deep government expertise with AI-powered delivery via our Savoi.ai platform." },
  { icon: RefreshCw, title: "Project Recovery", desc: "Rapid assessment and recovery planning when implementations go sideways—revised scope, vendor renegotiation, and governance overhaul." },
  { icon: Building2, title: "Fractional CTO & Executive Advisory", desc: "On-demand executive technology leadership for agencies navigating complex IT transformations and modernization initiatives." },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Services</p>
          <h2 className="text-3xl sm:text-4xl font-bold">What I Do</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
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
