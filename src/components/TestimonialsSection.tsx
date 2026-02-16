import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    quote: "Avero's independent, vendor-neutral approach gave us confidence we were making the right ERP decision. They translated complex technology choices into clear executive-level insights so we always knew what was happening and why.",
    name: "Government Executive",
    role: "County Manager",
  },
  {
    quote: "They understood the fiscal pressure we were under and were transparent about total cost of ownership from day one. Their team worked alongside our staff without disrupting month-end processes—that alone was worth the investment.",
    name: "Finance Director",
    role: "Municipal Government",
  },
  {
    quote: "Most consultants check the change management box. Avero actually got our leadership aligned before the integrator started. That made all the difference when we hit the inevitable bumps during implementation.",
    name: "HR Director",
    role: "State Agency",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-bold">What People Say</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 100}>
              <Card className="bg-card border-border/50 h-full">
                <CardContent className="pt-8 pb-6">
                  <Quote className="h-8 w-8 text-primary/30 mb-4" />
                  <p className="text-foreground leading-relaxed mb-6 italic">"{t.quote}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
