import { Mic, Youtube, BookOpen, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const channels = [
  { icon: Mic, title: "Keynote Speaking", desc: "Engaging talks on GovTech, AI adoption, and digital transformation at conferences nationwide.", cta: "Book a Talk" },
  { icon: Youtube, title: "YouTube", desc: "Video insights on technology strategy, leadership, and the future of government technology.", cta: "Watch Now" },
  { icon: BookOpen, title: "Substack", desc: "In-depth articles on ERP strategy, AI in government, and digital modernization.", cta: "Read Articles" },
  { icon: Linkedin, title: "LinkedIn", desc: "Daily perspectives on tech leadership, consulting, and public sector innovation.", cta: "Follow" },
];

export default function SpeakingSection() {
  return (
    <section id="speaking" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Thought Leadership</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Speaking & Content</h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {channels.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 80}>
              <Card className="bg-card border-border/50 text-center hover:border-primary/30 transition-colors h-full">
                <CardContent className="pt-8 pb-6 flex flex-col items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <c.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                  <Button variant="outline" size="sm">{c.cta}</Button>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
