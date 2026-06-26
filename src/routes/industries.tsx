import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ArrowRight, Sparkles } from "lucide-react";
import {
  Building2, ShoppingCart, HeartPulse, GraduationCap, Scale, Briefcase,
} from "lucide-react";
import handshake from "@/assets/hero-handshake.jpg";
import dashboard from "@/assets/timbaos-dashboard.jpg";

export const Route = createFileRoute("/industries")({
  component: IndustriesPage,
});

const industries = [
  {
    Icon: Building2,
    title: "Small & Medium Enterprises",
    img: handshake,
    desc: "Akarsh Digital provides integrated business management solutions that help SMEs streamline operations, improve visibility, and support sustainable growth through a single intelligent platform.",
    tags: ["Business Management", "Operational Efficiency", "Sustainable Growth"],
  },
  {
    Icon: ShoppingCart,
    title: "Retail",
    img: dashboard,
    desc: "From inventory management to customer engagement, we help retail businesses improve sales operations, track stock efficiently, and deliver better customer experiences through intelligent software.",
    tags: ["Inventory Management", "Sales Tracking", "Customer Engagement"],
  },
  {
    Icon: HeartPulse,
    title: "Healthcare",
    img: handshake,
    desc: "We help healthcare organizations enhance administrative efficiency, improve operational visibility, and reduce manual workloads so professionals can focus on delivering quality patient care.",
    tags: ["Administrative Efficiency", "Operational Visibility", "Process Automation"],
  },
  {
    Icon: GraduationCap,
    title: "Education",
    img: dashboard,
    desc: "Akarsh Digital simplifies institutional operations for educational organizations through intelligent management platforms that automate reporting, scheduling, and administrative processes.",
    tags: ["Institutional Management", "Process Automation", "Reporting"],
  },
  {
    Icon: Scale,
    title: "Legal Firms",
    img: handshake,
    desc: "Our E-Law ERP platform digitizes legal workflows — case management, client records, document storage, hearing schedules, and billing — helping legal professionals improve productivity and service quality.",
    tags: ["Case Management", "Document Management", "Legal Operations"],
  },
  {
    Icon: Briefcase,
    title: "Professional Services",
    img: dashboard,
    desc: "We help professional service firms improve collaboration, manage workflows, and gain operational control through intelligent software platforms designed for service-oriented businesses.",
    tags: ["Workflow Management", "Productivity", "Collaboration"],
  },
];

function IndustriesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <PageHero
        title="Intelligent Software for Every Industry"
        subtitle="Akarsh Digital builds industry-focused software products that help organizations automate operations, improve efficiency, and accelerate growth."
        bgImage={handshake}
      />

      {/* ── INTRO ── */}
      <section className="py-14 bg-[var(--soft)] border-b border-border">
        <div className="container-x max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Our Expertise</span>
          <h2 className="mt-2 font-display font-extrabold text-2xl text-[var(--primary-deep)]">Industries We Serve</h2>
          <div className="mx-auto mt-3 w-12 h-1 rounded-full bg-gradient-to-r from-[var(--primary-deep)] to-primary" />
          <p className="mt-5 text-muted-foreground leading-relaxed text-[15px]">
            We develop intelligent software products tailored to the specific needs of diverse industries —
            empowering businesses to thrive in the digital era through automation, visibility, and innovation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {industries.map(({ Icon, title }) => (
              <span key={title} className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--primary-deep)] bg-accent border border-primary/15 rounded-full px-3 py-1.5">
                <Icon className="w-3.5 h-3.5 text-primary" strokeWidth={1.5} /> {title}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES: alternating split rows ── */}
      <section className="py-16 bg-background">
        <div className="container-x space-y-16">
          {industries.map(({ Icon, title, img, desc, tags }, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={title}
                className={`grid lg:grid-cols-2 gap-10 items-center ${!isEven ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="relative">
                  <div className="absolute -inset-3 bg-accent/40 rounded-3xl blur-xl" />
                  <div className="relative rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)] group">
                    <div className="h-1 w-full bg-gradient-to-r from-[var(--primary-deep)] to-primary" />
                    <img
                      src={img}
                      alt={title}
                      className="w-full h-[260px] object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-6 left-5 flex items-center gap-2.5 bg-[var(--primary-deep)]/90 backdrop-blur-sm text-white rounded-xl px-4 py-2.5 shadow-lg">
                      <div className="w-8 h-8 rounded-lg bg-white/15 border border-white/20 grid place-items-center shrink-0">
                        <Icon className="w-4 h-4" strokeWidth={1.5} />
                      </div>
                      <span className="font-bold text-sm">{title}</span>
                    </div>
                    <div className="absolute bottom-3 right-4 text-white/20 font-display font-black text-6xl leading-none select-none pointer-events-none">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl grid place-items-center bg-accent text-primary">
                      <Icon className="w-6 h-6" strokeWidth={1.25} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">Industry</p>
                      <h3 className="font-display font-bold text-xl text-[var(--primary-deep)]">{title}</h3>
                    </div>
                  </div>
                  <div className="w-8 h-0.5 rounded-full bg-primary mb-4" />
                  <p className="text-muted-foreground leading-relaxed text-[15px]">{desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary bg-accent border border-primary/20 rounded-full px-3 py-1"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 bg-[var(--soft)] border-t border-border">
        <div className="container-x">
          <div className="relative rounded-2xl overflow-hidden">
            <img src={handshake} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-deep)]/97 via-[var(--primary-deep)]/88 to-primary/82" />
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "22px 22px" }}
            />
            <div className="relative px-8 py-14 flex flex-col lg:flex-row items-center justify-between gap-8 text-white">
              <div className="text-center lg:text-left">
                <p className="text-xs font-bold uppercase tracking-widest text-white/70 mb-2">Your Industry</p>
                <h2 className="font-display font-extrabold text-2xl md:text-3xl leading-snug">
                  Ready to transform your operations?
                </h2>
                <p className="mt-3 text-white/80 text-[15px] max-w-xl leading-relaxed">
                  Whether you need an enterprise ERP or a legal practice management solution —
                  our team is ready to help you build the right product for your industry.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-md bg-white text-[var(--primary-deep)] font-bold text-sm hover:bg-white/90 transition shadow-lg"
                >
                  <Sparkles className="w-4 h-4" /> Request a Demo
                </Link>
                <Link
                  to="/services/$slug"
                  params={{ slug: "timbaos-erp" }}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-md border border-white/40 text-white font-semibold text-sm hover:bg-white/10 transition"
                >
                  Explore Products <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
