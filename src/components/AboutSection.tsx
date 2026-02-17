import { Award, TrendingUp, Users, Zap } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import abhijitPhoto from "@/assets/abhijit-photo.jpeg";

const stats = [
  { icon: TrendingUp, label: "Years in Consulting", value: "20+" },
  { icon: Award, label: "Gov ERP Engagements", value: "30+" },
  { icon: Zap, label: "Government Exclusive", value: "100%" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <ScrollReveal className="max-w-5xl mx-auto mb-16">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-shrink-0">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-lg">
                <img src={abhijitPhoto} alt="Abhijit Verekar" className="w-full h-full object-cover object-top" />
              </div>
            </div>
            <div className="text-center md:text-left">
              <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">About</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Driving Public Sector Innovation
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                <span className="text-primary font-medium">Avero Advisors</span> is an independent, vendor-neutral government technology and ERP modernization consulting firm. We serve state, local, and quasi-government agencies exclusively—every methodology, framework, and deliverable is built for government. Our human-centric, AI-powered approach delivers outcomes in weeks, not months, helping agencies modernize without disrupting day-to-day operations.
              </p>
            </div>
          </div>
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
