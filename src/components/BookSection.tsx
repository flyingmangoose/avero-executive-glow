import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowDown, CheckCircle, Loader2 } from "lucide-react";
import bookCover from "@/assets/book-cover.jpg";
import ScrollReveal from "@/components/ScrollReveal";
import { submitToHubSpot, HUBSPOT_FORMS } from "@/lib/hubspot";

const stats = [
  { number: "70%+", desc: "of large gov't IT projects fail to deliver intended benefits" },
  { number: "$216M", desc: "lost in Birmingham — from a $19M budget" },
  { number: "12", desc: "chapters of frameworks & real case studies" },
  { number: "16+", desc: "ready-to-use tools & checklists included" },
];

const forces = [
  {
    num: "01",
    title: "The Ticking Clock",
    body: "SAP end-of-support deadlines. Oracle cloud mandates. Thousands of cities, counties, and states entering the market simultaneously — many for the first time in 20 years.",
  },
  {
    num: "02",
    title: "The AI Confusion",
    body: "AI is transforming what's possible — and being weaponized as a marketing tool. The gap between what AI can deliver and what vendors claim has never been wider.",
  },
  {
    num: "03",
    title: "The Structural Trap",
    body: "Vendor-led processes. Conflicted advisors. Governance designed to rubber-stamp rather than challenge. The structures that produce failures remain unchanged.",
  },
];

const parts = [
  {
    id: "part-1",
    title: "Part I — Why Projects Fail",
    subtitle: "Understanding the root causes behind billion-dollar government IT failures",
    chapters: [
      { title: "The $216M Wake-Up Call", desc: "Forensic examination of why identical challenges produced opposite outcomes." },
      { title: "Legacy Time Bombs", desc: "Why waiting costs more than acting — and how to build the case before crisis forces your hand." },
    ],
  },
  {
    id: "part-2",
    title: "Part II — Regaining Command",
    subtitle: "The frameworks and preparation that create clarity before vendors arrive",
    chapters: [
      { title: "Four Pillars of Project Control", desc: "The architecture of control that separates success from disaster." },
      { title: "Phase Zero Mastery", desc: "The preparation that creates clarity before vendors arrive." },
      { title: "AI-Enabled Requirements", desc: "How AI transforms requirements gathering into a focused, human-centric process." },
      { title: "Winning Procurement Strategy", desc: "Crafting RFPs that attract the right vendors and protect your leverage." },
    ],
  },
  {
    id: "part-3",
    title: "Part III — Executing Without Capture",
    subtitle: "From vendor selection through go-live — maintaining independence at every stage",
    chapters: [
      { title: "Vendor Selection", desc: "Spotting allies, dodging traps, and cutting through polished demos." },
      { title: "Governance Reimagined", desc: "Structures for decision-making that prevent vendor capture." },
      { title: "The Human Element", desc: "Change management that determines adoption or rejection." },
      { title: "The Independence Principle", desc: "Building advisory relationships where incentives are permanently aligned." },
      { title: "AI Comes of Age", desc: "The new rules — what AI delivers today and how to spot vendor overselling." },
      { title: "The Complete Roadmap", desc: "Step-by-step from day one to go-live with every framework integrated." },
    ],
  },
];

export default function BookSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [activePart, setActivePart] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", organization: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const [firstName, ...lastParts] = formData.name.trim().split(" ");
    const lastName = lastParts.join(" ") || "";
    const success = await submitToHubSpot(HUBSPOT_FORMS.bookReservation, [
      { name: "firstname", value: firstName },
      { name: "lastname", value: lastName },
      { name: "email", value: formData.email },
      { name: "company", value: formData.organization },
    ]);
    setSubmitting(false);
    if (success) {
      setSubmitted(true);
    }
  };

  const scrollToReserve = () => {
    document.getElementById("reserve")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="book" className="relative" style={{ background: "#0c1e3a" }}>
      {/* ===== Part A: Book Hero ===== */}
      <div className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Book cover */}
            <ScrollReveal className="flex justify-center">
              <div className="relative">
                <img
                  src={bookCover}
                  alt="Start at Zero book cover"
                  className="w-72 sm:w-80 lg:w-96 rounded-lg animate-[float_6s_ease-in-out_infinite]"
                  style={{
                    filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.5))",
                  }}
                />
              </div>
            </ScrollReveal>

            {/* Content */}
            <div className="text-center md:text-left">
              <ScrollReveal>
                <p className="font-medium tracking-[0.2em] uppercase text-sm mb-4" style={{ color: "hsl(20 90% 48%)" }}>
                  Coming Soon — Spring 2026
                </p>
              </ScrollReveal>
              <ScrollReveal delay={50}>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 font-serif" style={{ color: "#f5f0e8" }}>
                  Start at Zero
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={75}>
                <p className="text-xl lg:text-2xl font-serif italic mb-8" style={{ color: "#b8dff0" }}>
                  Leading High-Stakes Modernization in the Age of AI
                </p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <p className="leading-relaxed mb-10 max-w-lg mx-auto md:mx-0 text-base lg:text-lg" style={{ color: "#a0aec0" }}>
                  Government ERP projects fail at rates that would be scandalous in any other sector. This book reveals why the failures are structural — and delivers the playbook that prevents the next $216&nbsp;million disaster before it starts.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start">
                  <Button size="lg" className="w-full sm:w-auto" onClick={scrollToReserve}>
                    Reserve Your Signed Copy
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-[#a0aec0]/30 hover:border-[#a0aec0]/60 hover:bg-[#a0aec0]/5"
                    style={{ color: "#a0aec0" }}
                    onClick={() => document.getElementById("chapters")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    See What's Inside <ArrowDown className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <p className="mt-4 text-sm" style={{ color: "#64748b" }}>
                  No payment required. Limited signed first-edition copies.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Part B: The Numbers ===== */}
      <div className="py-8 border-y" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
            {stats.map((s, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div className="text-4xl sm:text-5xl font-bold mb-2" style={{ color: "hsl(20 90% 48%)" }}>
                  {s.number}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#8899a6" }}>
                  {s.desc}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Part C: Three Forces ===== */}
      <div className="py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <ScrollReveal>
              <p className="font-medium tracking-[0.2em] uppercase text-sm mb-4" style={{ color: "hsl(20 90% 48%)" }}>
                The Convergence
              </p>
            </ScrollReveal>
            <ScrollReveal delay={50}>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mb-6" style={{ color: "#f5f0e8" }}>
                Three Forces Creating Extraordinary Risk
              </h3>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="max-w-xl mx-auto leading-relaxed" style={{ color: "#8899a6" }}>
                Thousands of government organizations are simultaneously entering the market for new enterprise systems. Most aren't prepared for what's coming.
              </p>
            </ScrollReveal>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            {forces.map((f, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div
                  className="rounded-xl p-8 h-full"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <span className="font-mono text-sm font-bold mb-4 block" style={{ color: "hsl(20 90% 48%)" }}>
                    {f.num}
                  </span>
                  <h4 className="text-xl font-bold mb-3" style={{ color: "#f5f0e8" }}>
                    {f.title}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: "#8899a6" }}>
                    {f.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Part E: Chapter Grid ===== */}
      <div id="chapters" className="py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <ScrollReveal>
              <p className="font-medium tracking-[0.2em] uppercase text-sm mb-4" style={{ color: "hsl(20 90% 48%)" }}>
                Inside the Book
              </p>
            </ScrollReveal>
            <ScrollReveal delay={50}>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mb-6" style={{ color: "#f5f0e8" }}>
                The Complete Modernization Playbook
              </h3>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="max-w-xl mx-auto leading-relaxed" style={{ color: "#8899a6" }}>
                12 chapters. Real case studies. Actionable frameworks. Every phase from first recognition to post-go-live governance.
              </p>
            </ScrollReveal>
          </div>

          <div className="max-w-5xl mx-auto relative">
            <ScrollReveal>
              {/* Part selector tabs */}
              <div className="flex justify-center gap-3 mb-8">
                {parts.map((part, idx) => (
                  <button
                    key={part.id}
                    onClick={() => setActivePart(idx)}
                    className="px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300"
                    style={{
                      background: activePart === idx ? "rgba(255,255,255,0.08)" : "transparent",
                      border: activePart === idx ? "1px solid rgba(255,255,255,0.15)" : "1px solid rgba(255,255,255,0.06)",
                      color: activePart === idx ? "#f5f0e8" : "#64748b",
                    }}
                  >
                    <span className="font-mono text-xs tracking-wider" style={{ color: activePart === idx ? "hsl(20 90% 48%)" : "inherit" }}>
                      Part {idx + 1}
                    </span>
                  </button>
                ))}
              </div>

              {/* Part subtitle */}
              <p className="text-center text-sm mb-6" style={{ color: "#8899a6" }}>
                {parts[activePart].subtitle}
              </p>

              {/* Carousel */}
              <Carousel
                opts={{ align: "start", loop: false }}
                className="w-full"
              >
                <CarouselContent className="-ml-4">
                  {parts[activePart].chapters.map((ch, chIdx) => {
                    const chapterNum = activePart === 0 ? chIdx + 1 : activePart === 1 ? chIdx + 3 : chIdx + 7;
                    return (
                      <CarouselItem key={chIdx} className="pl-4 sm:basis-1/2 lg:basis-1/3">
                        <div
                          className="rounded-xl p-6 h-full flex flex-col transition-all duration-300 hover:translate-y-[-2px]"
                          style={{
                            background: "rgba(255,255,255,0.03)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            minHeight: "180px",
                          }}
                        >
                          <span className="font-mono text-2xl font-bold mb-3 block" style={{ color: "hsl(20 90% 48%/0.3)" }}>
                            {String(chapterNum).padStart(2, "0")}
                          </span>
                          <h5 className="font-bold text-base mb-2" style={{ color: "#f5f0e8" }}>
                            {ch.title}
                          </h5>
                          <p className="text-sm leading-relaxed mt-auto" style={{ color: "#64748b" }}>
                            {ch.desc}
                          </p>
                        </div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                <div className="flex justify-center gap-4 mt-6">
                  <CarouselPrevious
                    className="static translate-y-0 border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)]"
                    style={{ color: "#f5f0e8" }}
                  />
                  <CarouselNext
                    className="static translate-y-0 border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)]"
                    style={{ color: "#f5f0e8" }}
                  />
                </div>
              </Carousel>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* ===== Part F: Reservation Form ===== */}
      <div id="reserve" className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <div
                className="rounded-2xl p-8 sm:p-12 relative overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {/* Accent line at top */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{
                    background: "linear-gradient(90deg, transparent, hsl(20 90% 48%), transparent)",
                  }}
                />

                {submitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-12 w-12 mx-auto mb-4" style={{ color: "#22c55e" }} />
                    <h4 className="text-2xl font-bold font-serif mb-2" style={{ color: "#f5f0e8" }}>
                      You're on the list.
                    </h4>
                    <p style={{ color: "#8899a6" }}>
                      We'll reach out when Start at Zero launches.
                    </p>
                  </div>
                ) : (
                  <>
                    <h4 className="text-2xl sm:text-3xl font-bold font-serif mb-3 text-center" style={{ color: "#f5f0e8" }}>
                      Reserve Your Signed Copy
                    </h4>
                    <p className="text-center mb-8" style={{ color: "#8899a6" }}>
                      Be first to receive Start at Zero when it launches — plus get exclusive access to the companion toolkit and early chapter previews.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <Input
                          placeholder="Your name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-[#0a1628] border-[rgba(255,255,255,0.1)] text-[#f5f0e8] placeholder:text-[#4a5568]"
                        />
                        <Input
                          type="email"
                          placeholder="Email address"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-[#0a1628] border-[rgba(255,255,255,0.1)] text-[#f5f0e8] placeholder:text-[#4a5568]"
                        />
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Input
                          placeholder="Organization (optional)"
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          className="sm:flex-[3] bg-[#0a1628] border-[rgba(255,255,255,0.1)] text-[#f5f0e8] placeholder:text-[#4a5568]"
                        />
                        <Button type="submit" size="lg" className="sm:flex-[2]" disabled={submitting}>
                          {submitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Reserving...</> : "Reserve My Copy"}
                        </Button>
                      </div>
                    </form>

                    <p className="text-center mt-6 text-xs" style={{ color: "#4a5568" }}>
                      No payment required. We'll notify you at launch.
                    </p>
                  </>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
