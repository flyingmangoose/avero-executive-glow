import { Award, TrendingUp, Users, Zap } from "lucide-react";

const stats = [
  { icon: TrendingUp, label: "Years Experience", value: "20+" },
  { icon: Users, label: "Government Clients", value: "50+" },
  { icon: Award, label: "Digital Transformations", value: "100+" },
  { icon: Zap, label: "AI Implementations", value: "30+" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">About</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Driving Public Sector Innovation
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            With over two decades in management consulting, I founded <span className="text-primary font-medium">Avero Advisors</span> to help government agencies and public sector organizations navigate the complexities of digital transformation. My expertise spans enterprise technology strategy, AI-powered automation, and ERP modernization—empowering agencies to deliver better citizen services through smarter technology.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="glass-card rounded-lg p-6 text-center">
              <s.icon className="h-6 w-6 text-primary mx-auto mb-3" />
              <p className="text-3xl font-bold text-foreground">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
