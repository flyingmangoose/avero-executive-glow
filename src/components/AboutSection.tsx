import { Award, TrendingUp, Users, Zap } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const stats = [
  { icon: TrendingUp, label: "Years in Consulting", value: "20+" },
  { icon: Users, label: "Team Members", value: "40+" },
  { icon: Award, label: "Gov ERP Engagements", value: "30+" },
  { icon: Zap, label: "Government Exclusive", value: "100%" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">About</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Driving Public Sector Innovation
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            <span className="text-primary font-medium">Avero Advisors</span> is an independent, vendor-neutral government technology and ERP modernization consulting firm. We serve state, local, and quasi-government agencies exclusively—every methodology, framework, and deliverable is built for government. Our human-centric, AI-powered approach delivers outcomes in weeks, not months, helping agencies modernize without disrupting day-to-day operations.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 100}>
              <div className="glass-card rounded-lg p-6 text-center">
                <s.icon className="h-6 w-6 text-primary mx-auto mb-3" />
                <p className="text-3xl font-bold text-foreground">{s.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
