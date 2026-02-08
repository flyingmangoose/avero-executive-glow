import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Youtube, Twitter, BookOpen, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Twitter, label: "X / Twitter", href: "#" },
  { icon: BookOpen, label: "Substack", href: "#" },
];

export default function ContactSection() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thank you for reaching out. I'll be in touch shortly." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Get in Touch</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether you need strategic technology advisory, a keynote speaker, or a trusted partner for your digital transformation journey—I'd love to hear from you.
            </p>
            <p className="text-sm text-muted-foreground mb-6">abhijit@averoadvisors.com</p>
            <div className="flex gap-4">
              {socials.map((s) => (
                <a key={s.label} href={s.href} className="h-10 w-10 rounded-lg border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors" aria-label={s.label}>
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="bg-card border-border/50" />
            <Input type="email" placeholder="Your Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="bg-card border-border/50" />
            <Textarea placeholder="Your Message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required className="bg-card border-border/50" />
            <Button type="submit" className="w-full">
              Send Message <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
