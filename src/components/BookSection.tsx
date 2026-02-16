import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowDown, CheckCircle } from "lucide-react";
import bookCover from "@/assets/book-cover.jpg";
import ScrollReveal from "@/components/ScrollReveal";

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

const chapters = [
  { part: "Part I — Why Projects Fail", title: "The $216M Wake-Up Call", desc: "Forensic examination of why identical challenges produced opposite outcomes." },
  { part: "Part I", title: "Legacy Time Bombs", desc: "Why waiting costs more than acting — and how to build the case before crisis forces your hand." },
  { part: "Part II — Regaining Command", title: "Four Pillars of Project Control", desc: "The architecture of control that separates success from disaster." },
  { part: "Part II", title: "Phase Zero Mastery", desc: "The preparation that creates clarity before vendors arrive." },
  { part: "Part II", title: "AI-Enabled Requirements", desc: "How AI transforms requirements gathering into a focused, human-centric process." },
  { part: "Part II", title: "Winning Procurement Strategy", desc: "Crafting RFPs that attract the right vendors and protect your leverage." },
  { part: "Part III — Executing Without Capture", title: "Vendor Selection", desc: "Spotting allies, dodging traps, and cutting through polished demos." },
  { part: "Part III", title: "Governance Reimagined", desc: "Structures for decision-making that prevent vendor capture." },
  { part: "Part III", title: "The Human Element", desc: "Change management that determines adoption or rejection." },
  { part: "Part III", title: "The Independence Principle", desc: "Building advisory relationships where incentives are permanently aligned." },
  { part: "Part III", title: "AI Comes of Age", desc: "The new rules — what AI delivers today and how to spot vendor overselling." },
  { part: "Part III", title: "The Complete Roadmap", desc: "Step-by-step from day one to go-live with every framework integrated." },
];

export default function BookSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", organization: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Reservation form submitted:", formData);
    setSubmitted(true);
  };

  const scrollToReserve = () => {
    document.getElementById("reserve")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="book" className="relative" style={{ background: "#0c1e3a" }}>
      {/* ===== Part A: Book Hero ===== */}
      <div className="py-24 lg:py-32">
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
              <ScrollReveal delay={100}>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 font-serif" style={{ color: "#f5f0e8" }}>
                  Start at Zero
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={150}>
                <p className="text-xl lg:text-2xl font-serif italic mb-8" style={{ color: "#b8dff0" }}>
                  Leading High-Stakes Modernization in the Age of AI
                </p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="leading-relaxed mb-10 max-w-lg mx-auto md:mx-0 text-base lg:text-lg" style={{ color: "#a0aec0" }}>
                  Government ERP projects fail at rates that would be scandalous in any other sector. This book reveals why the failures are structural — and delivers the playbook that prevents the next $216&nbsp;million disaster before it starts.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={250}>
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
      <div className="py-20 border-y" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
            {stats.map((s, i) => (
              <ScrollReveal key={i} delay={i * 100}>
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
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <ScrollReveal>
              <p className="font-medium tracking-[0.2em] uppercase text-sm mb-4" style={{ color: "hsl(20 90% 48%)" }}>
                The Convergence
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mb-6" style={{ color: "#f5f0e8" }}>
                Three Forces Creating Extraordinary Risk
              </h3>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <p className="max-w-xl mx-auto leading-relaxed" style={{ color: "#8899a6" }}>
                Thousands of government organizations are simultaneously entering the market for new enterprise systems. Most aren't prepared for what's coming.
              </p>
            </ScrollReveal>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            {forces.map((f, i) => (
              <ScrollReveal key={i} delay={i * 100}>
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

      {/* ===== Part D: Case Studies ===== */}
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <ScrollReveal>
              <p className="font-medium tracking-[0.2em] uppercase text-sm mb-4" style={{ color: "hsl(20 90% 48%)" }}>
                The Evidence
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mb-6" style={{ color: "#f5f0e8" }}>
                Same Challenge. Opposite Outcomes.
              </h3>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <p className="max-w-xl mx-auto leading-relaxed" style={{ color: "#8899a6" }}>
                The difference wasn't the software, the vendor, or the staff. It was whether someone in the room had both the authority and the incentive to protect their interests.
              </p>
            </ScrollReveal>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Failure case */}
            <ScrollReveal>
              <div
                className="rounded-xl p-8 h-full flex flex-col"
                style={{
                  background: "rgba(220,38,38,0.05)",
                  border: "1px solid rgba(220,38,38,0.2)",
                }}
              >
                <span
                  className="font-mono text-xs font-bold tracking-[0.15em] uppercase mb-4 inline-block"
                  style={{ color: "#ef4444" }}
                >
                  Cautionary Tale
                </span>
                <h4 className="text-xl font-bold mb-3" style={{ color: "#f5f0e8" }}>
                  Birmingham City Council
                </h4>
                <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: "#8899a6" }}>
                  Europe's largest local authority — serving over 1 million citizens — turned a working 20-year SAP system into a catastrophe. No Phase Zero. No independent oversight. No governance separating advice from delivery.
                </p>
                <div className="pt-4" style={{ borderTop: "1px solid rgba(220,38,38,0.15)" }}>
                  <div className="text-2xl font-bold" style={{ color: "#ef4444" }}>
                    £216M lost
                  </div>
                  <p className="text-xs mt-1" style={{ color: "#64748b" }}>
                    From a £19M original budget. Effectively bankrupt.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Success case */}
            <ScrollReveal delay={100}>
              <div
                className="rounded-xl p-8 h-full flex flex-col"
                style={{
                  background: "rgba(34,197,94,0.05)",
                  border: "1px solid rgba(34,197,94,0.2)",
                }}
              >
                <span
                  className="font-mono text-xs font-bold tracking-[0.15em] uppercase mb-4 inline-block"
                  style={{ color: "#22c55e" }}
                >
                  The Playbook in Action
                </span>
                <h4 className="text-xl font-bold mb-3" style={{ color: "#f5f0e8" }}>
                  Monroe County, New York
                </h4>
                <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: "#8899a6" }}>
                  Facing the same aging infrastructure and modernization pressures, Monroe County invested in Phase Zero preparation before vendors arrived. Independent oversight. Clear governance. IT and business leadership aligned.
                </p>
                <div className="pt-4" style={{ borderTop: "1px solid rgba(34,197,94,0.15)" }}>
                  <div className="text-2xl font-bold" style={{ color: "#22c55e" }}>
                    On time. On budget.
                  </div>
                  <p className="text-xs mt-1" style={{ color: "#64748b" }}>
                    Structural preparation made the difference.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* ===== Part E: Chapter Grid ===== */}
      <div id="chapters" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <ScrollReveal>
              <p className="font-medium tracking-[0.2em] uppercase text-sm mb-4" style={{ color: "hsl(20 90% 48%)" }}>
                Inside the Book
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mb-6" style={{ color: "#f5f0e8" }}>
                The Complete Modernization Playbook
              </h3>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <p className="max-w-xl mx-auto leading-relaxed" style={{ color: "#8899a6" }}>
                12 chapters. Real case studies. Actionable frameworks. Every phase from first recognition to post-go-live governance.
              </p>
            </ScrollReveal>
          </div>

          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {chapters.map((ch, i) => (
              <ScrollReveal key={i} delay={(i % 3) * 80}>
                <div
                  className="rounded-lg p-5 h-full"
                  style={{
                    borderLeft: "3px solid #b8dff0",
                    background: "rgba(255,255,255,0.02)",
                  }}
                >
                  <span className="font-mono text-xs uppercase tracking-wider block mb-2" style={{ color: "hsl(20 90% 48%)" }}>
                    {ch.part}
                  </span>
                  <h5 className="font-bold text-sm mb-1" style={{ color: "#f5f0e8" }}>
                    {ch.title}
                  </h5>
                  <p className="text-xs leading-relaxed" style={{ color: "#64748b" }}>
                    {ch.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Part F: Reservation Form ===== */}
      <div id="reserve" className="py-24">
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
                        <Button type="submit" size="lg" className="sm:flex-[2]">
                          Reserve My Copy
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
