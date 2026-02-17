import { Bike, Camera, Target, Anchor, Plane, Snowflake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";

const interests = [
  {
    icon: Bike,
    title: "Motorcycles",
    desc: "Long adventure rides and open roads. There's nothing like the freedom of two wheels to clear the mind and spark new ideas.",
  },
  {
    icon: Camera,
    title: "Photography",
    desc: "Capturing moments through the lens. From landscapes to street photography, it's my creative outlet away from consulting.",
  },
  {
    icon: Target,
    title: "Golf",
    desc: "Working on breaking 90. The course is where patience meets strategy — not unlike a good transformation project.",
  },
  {
    icon: Anchor,
    title: "Boating",
    desc: "Weekend cruises on the water. The best ideas often come when you're unplugged and out on the lake.",
  },
  {
    icon: Plane,
    title: "Travel",
    desc: "100+ flights a year means I've seen a lot of airports — but also incredible cities, cultures, and cuisines around the world.",
  },
  {
    icon: Snowflake,
    title: "Fitness",
    desc: "Weight training, cold plunges, sauna sessions, and staying sharp. Discipline in health translates to discipline in business.",
  },
];

export default function PersonalSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Subtle gradient shift */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_hsl(43_74%_56%_/_0.03),_transparent_50%)]" />

      <div className="relative z-10 container mx-auto px-4">
        <ScrollReveal className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Beyond the Boardroom
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">The Person Behind the Strategy</h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {interests.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 80}>
              <Card className="bg-card/60 border-border/50 hover:border-primary/30 hover:shadow-[0_0_20px_hsl(43_74%_56%_/_0.08)] transition-all duration-300 h-full">
                <CardContent className="pt-8 pb-6">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
