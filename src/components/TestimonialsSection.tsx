import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Abhijit's strategic vision transformed our entire IT infrastructure. His deep understanding of government technology and ERP systems is unmatched.",
    name: "Sarah Mitchell",
    role: "CIO, County Government",
  },
  {
    quote: "Working with Abhijit and Avero Advisors was a game-changer. They delivered a digital transformation roadmap that was both ambitious and achievable.",
    name: "James Rodriguez",
    role: "City Manager, Municipal Government",
  },
  {
    quote: "His ability to translate complex AI concepts into practical government applications is exceptional. A true thought leader in the GovTech space.",
    name: "Dr. Priya Sharma",
    role: "Director of Innovation, State Agency",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-bold">What People Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t) => (
            <Card key={t.name} className="bg-card border-border/50">
              <CardContent className="pt-8 pb-6">
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <p className="text-foreground leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
