import { useState } from "react";
import { Mic, Youtube, BookOpen, Linkedin, CalendarDays, Users, MapPin, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "@/components/ScrollReveal";

const channels = [
  { icon: Mic, title: "Keynote Speaking", desc: "Engaging talks on GovTech, AI adoption, and digital transformation at conferences nationwide.", cta: "Book a Talk" },
  { icon: Youtube, title: "YouTube", desc: "Video insights on technology strategy, leadership, and the future of government technology.", cta: "Watch Now" },
  { icon: BookOpen, title: "Substack", desc: "In-depth articles on ERP strategy, AI in government, and digital modernization.", cta: "Read Articles" },
  { icon: Linkedin, title: "LinkedIn", desc: "Daily perspectives on tech leadership, consulting, and public sector innovation.", cta: "Follow" },
];

const topics = [
  "AI & Automation in Government",
  "Digital Transformation Strategy",
  "ERP Modernization",
  "GovTech Innovation",
  "Leadership in Technology",
  "Other",
];

export default function SpeakingSection() {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    eventName: "",
    eventDate: "",
    location: "",
    topic: "",
    audienceSize: "",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request received!",
      description: "Thank you for your interest. I'll review your request and get back to you within 48 hours.",
    });
    setForm({ name: "", email: "", organization: "", eventName: "", eventDate: "", location: "", topic: "", audienceSize: "", details: "" });
  };

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

        {/* Speaker Request Form */}
        <div className="mt-24 max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Mic className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Available for Speaking Engagements</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Invite Me to Speak</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Looking for a keynote speaker on GovTech, AI, or digital transformation? Fill out the form below and I'll get back to you within 48 hours.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <Card className="bg-card border-border/50">
              <CardContent className="p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Your Name *</label>
                      <Input placeholder="Jane Smith" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="bg-background border-border/50" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email *</label>
                      <Input type="email" placeholder="jane@organization.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="bg-background border-border/50" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Organization *</label>
                      <Input placeholder="Your company or agency" value={form.organization} onChange={(e) => setForm({ ...form, organization: e.target.value })} required className="bg-background border-border/50" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Event Name</label>
                      <Input placeholder="Annual Tech Summit 2026" value={form.eventName} onChange={(e) => setForm({ ...form, eventName: e.target.value })} className="bg-background border-border/50" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground flex items-center gap-1.5">
                        <CalendarDays className="h-3.5 w-3.5 text-muted-foreground" /> Event Date
                      </label>
                      <Input type="date" value={form.eventDate} onChange={(e) => setForm({ ...form, eventDate: e.target.value })} className="bg-background border-border/50" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-muted-foreground" /> Location
                      </label>
                      <Input placeholder="City, State or Virtual" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className="bg-background border-border/50" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground flex items-center gap-1.5">
                        <Users className="h-3.5 w-3.5 text-muted-foreground" /> Audience Size
                      </label>
                      <Input placeholder="e.g. 200" value={form.audienceSize} onChange={(e) => setForm({ ...form, audienceSize: e.target.value })} className="bg-background border-border/50" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Preferred Topic</label>
                    <div className="flex flex-wrap gap-2">
                      {topics.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setForm({ ...form, topic: form.topic === t ? "" : t })}
                          className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
                            form.topic === t
                              ? "bg-primary/20 border-primary/40 text-primary"
                              : "border-border/50 text-muted-foreground hover:border-primary/30 hover:text-foreground"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Additional Details</label>
                    <Textarea placeholder="Tell me about your event, audience, and what you'd like me to cover..." rows={4} value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} className="bg-background border-border/50" />
                  </div>

                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Submit Speaking Request <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
