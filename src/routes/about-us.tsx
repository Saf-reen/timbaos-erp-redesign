import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import {
  Target, Eye, Users, Sparkles,
  Lightbulb, ShieldCheck, Cpu, HeartHandshake,
  Layers, ArrowRight, Globe, Zap,
} from "lucide-react";
import handshake from "@/assets/hero-handshake.jpg";
import dashboard from "@/assets/timbaos-dashboard.jpg";

export const Route = createFileRoute("/about-us")({
  component: AboutPage,
});

const coreValuePills = [
  { Icon: Lightbulb,      label: "Product-First Innovation" },
  { Icon: Sparkles,       label: "AI-Powered Intelligence" },
  { Icon: Globe,          label: "Scalable Technology" },
  { Icon: Layers,         label: "Industry-Focused Solutions" },
  { Icon: HeartHandshake, label: "Continuous Enhancement" },
  { Icon: ShieldCheck,    label: "Ethical & Responsible" },
];

const ourValues = [
  {
    Icon: Lightbulb,
    title: "Product-First Innovation",
    desc: "We build products designed around real business requirements, ensuring every feature delivers measurable value to our users and helps organizations achieve their goals.",
  },
  {
    Icon: Sparkles,
    title: "AI-Powered Intelligence",
    desc: "Our products leverage intelligent automation and business insights to help organizations make better decisions faster, automating repetitive tasks and surfacing actionable data.",
  },
  {
    Icon: Globe,
    title: "Scalable Technology",
    desc: "Cloud-based architecture designed for long-term growth, enabling businesses to scale without compromise — secure, reliable, and available wherever your team works.",
  },
  {
    Icon: ShieldCheck,
    title: "Industry-Focused Solutions",
    desc: "Products tailored to specific business and industry needs, delivering targeted solutions that drive real outcomes rather than generic tools that require heavy customization.",
  },
];

const pillars = [
  { abbr: "AI", label: "Artificial Intelligence", Icon: Sparkles },
  { abbr: "CL", label: "Cloud Architecture",      Icon: Globe },
  { abbr: "SE", label: "Enterprise Security",      Icon: ShieldCheck },
];

function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <PageHero
        title="Building Products That Empower Businesses"
        subtitle="Akarsh Digital is a Product Engineering & AI Solutions Company focused on creating intelligent software products that help organizations improve efficiency, automate operations, and accelerate growth."
        bgImage={handshake}
      />

      {/* ── OUR STORY ── */}
      <section className="py-16 bg-background">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Our Story</span>
            <h2 className="mt-2 font-display font-extrabold text-3xl text-[var(--primary-deep)] leading-snug">
              Who We Are
            </h2>
            <div className="mt-3 w-10 h-1 rounded-full bg-gradient-to-r from-[var(--primary-deep)] to-primary" />
            <p className="mt-5 text-muted-foreground leading-relaxed text-[15px]">
              At Akarsh Digital, we believe technology should simplify business operations, not complicate them.
              Our focus is on building scalable software products that help organizations improve productivity,
              automate workflows, and make better decisions through data and intelligent automation.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                { Icon: Lightbulb,      text: "Product-first innovation approach" },
                { Icon: ShieldCheck,    text: "Enterprise-grade security and scalability" },
                { Icon: Cpu,            text: "AI-driven automation and insights" },
                { Icon: Layers,         text: "Industry-focused software products" },
                { Icon: HeartHandshake, text: "Continuous product enhancement" },
              ].map(({ Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-sm text-foreground">
                  <div className="w-8 h-8 rounded-lg grid place-items-center bg-accent text-primary shrink-0">
                    <Icon className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-accent/50 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)]">
              <div className="h-1 w-full bg-gradient-to-r from-[var(--primary-deep)] to-primary" />
              <img src={handshake} alt="Akarsh Digital team" className="w-full h-[320px] object-cover" loading="lazy" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur rounded-xl px-4 py-3 shadow-lg border border-border">
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary">Focused On</p>
                <p className="font-display font-extrabold text-xl text-[var(--primary-deep)]">Product Innovation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT ENGINEERING FOCUS ── */}
      <section className="py-14 bg-[var(--soft)] border-y border-border">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">

          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-accent/40 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)]">
              <div className="h-1 w-full bg-gradient-to-r from-[var(--primary-deep)] to-primary" />
              <img src={dashboard} alt="Product Engineering" className="w-full h-[300px] object-cover object-top" loading="lazy" />
              <div className="absolute top-4 right-4 flex items-center gap-2 bg-[var(--primary-deep)]/90 backdrop-blur text-white rounded-full px-3 py-1.5">
                <Zap className="w-3.5 h-3.5" />
                <span className="text-xs font-bold">Enterprise-Grade Products</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Our Approach</span>
            <h2 className="mt-2 font-display font-extrabold text-2xl md:text-3xl text-[var(--primary-deep)] leading-snug">
              Akarsh Digital – Product Engineering Across Industries
            </h2>
            <div className="mt-3 w-10 h-1 rounded-full bg-gradient-to-r from-[var(--primary-deep)] to-primary" />
            <p className="mt-5 text-muted-foreground leading-relaxed text-[15px]">
              We combine product engineering expertise, modern cloud technologies, and AI-driven innovation
              to create solutions that solve real business challenges. From enterprise resource planning to
              legal practice management, our products help organizations transform complex processes into
              intelligent digital ecosystems.
            </p>

            <div className="mt-7">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Built On</p>
              <div className="flex flex-wrap gap-3">
                {pillars.map(({ abbr, label, Icon }) => (
                  <div key={label} className="flex items-center gap-2.5 rounded-xl border border-border bg-card px-4 py-3 shadow-sm hover:shadow-[var(--shadow-card)] hover:-translate-y-0.5 transition-all group">
                    <div className="w-9 h-9 rounded-lg grid place-items-center text-white font-display font-black text-xs bg-gradient-to-br from-[var(--primary-deep)] to-primary group-hover:scale-105 transition-transform shrink-0">
                      {abbr}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-foreground">{label}</p>
                      <Icon className="w-3 h-3 text-muted-foreground mt-0.5" strokeWidth={1.5} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
              Every product we build is focused on usability, scalability, innovation, and delivering
              measurable business value.
            </p>
          </div>
        </div>
      </section>

      {/* ── VISION + MISSION ── */}
      <section className="py-16 bg-background">
        <div className="container-x">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Our Direction</span>
            <h2 className="mt-2 font-display font-extrabold text-2xl text-[var(--primary-deep)]">Vision & Mission</h2>
            <div className="mx-auto mt-3 w-12 h-1 rounded-full bg-gradient-to-r from-[var(--primary-deep)] to-primary" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-card)] min-h-[260px]">
              <img src={handshake} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-deep)]/90 to-primary/80" />
              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "18px 18px" }}
              />
              <div className="relative p-8 h-full flex flex-col justify-between text-white">
                <div className="w-12 h-12 rounded-xl bg-white/15 border border-white/20 grid place-items-center mb-4">
                  <Eye className="w-6 h-6" strokeWidth={1.25} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl mb-3">Our Vision</h3>
                  <p className="text-white/85 leading-relaxed text-[15px]">
                    To become a globally trusted technology company delivering intelligent software products
                    that empower businesses to thrive in a digital-first world.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-card)] min-h-[260px]">
              <img src={dashboard} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover object-top" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-deep)]/92 to-primary/82" />
              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "18px 18px" }}
              />
              <div className="relative p-8 h-full flex flex-col justify-between text-white">
                <div className="w-12 h-12 rounded-xl bg-white/15 border border-white/20 grid place-items-center mb-4">
                  <Target className="w-6 h-6" strokeWidth={1.25} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl mb-3">Our Mission</h3>
                  <p className="text-white/85 leading-relaxed text-[15px]">
                    To build scalable, secure, and user-centric software products that transform business
                    operations through automation, intelligence, and continuous innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUE PILLS ── */}
      <section className="py-14 bg-[var(--soft)] border-y border-border">
        <div className="container-x text-center">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-primary">What Drives Us</span>
          <h2 className="mt-2 font-display font-extrabold text-2xl text-[var(--primary-deep)]">Our Values</h2>
          <div className="mx-auto mt-3 w-12 h-1 rounded-full bg-gradient-to-r from-[var(--primary-deep)] to-primary" />
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {coreValuePills.map(({ Icon, label }) => (
              <div
                key={label}
                className="group flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3 shadow-sm hover:shadow-[var(--shadow-card)] hover:border-primary/30 hover:-translate-y-0.5 transition-all"
              >
                <div className="w-8 h-8 rounded-full grid place-items-center bg-accent text-primary group-hover:bg-gradient-to-br group-hover:from-[var(--primary-deep)] group-hover:to-primary group-hover:text-white transition-all shrink-0">
                  <Icon className="w-4 h-4" strokeWidth={1.5} />
                </div>
                <span className="text-sm font-semibold text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR VALUES DETAIL ── */}
      <section className="py-16 bg-background">
        <div className="container-x">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-primary">In Depth</span>
            <h2 className="mt-2 font-display font-extrabold text-2xl text-[var(--primary-deep)]">What We Stand For</h2>
            <div className="mx-auto mt-3 w-12 h-1 rounded-full bg-gradient-to-r from-[var(--primary-deep)] to-primary" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ourValues.map(({ Icon, title, desc }, idx) => (
              <div
                key={title}
                className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:shadow-[var(--shadow-card)] hover:-translate-y-1 transition-all"
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={idx % 2 === 0 ? handshake : dashboard}
                    alt=""
                    aria-hidden
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[var(--primary-deep)]/55" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white">
                    <div className="w-12 h-12 rounded-xl bg-white/20 border border-white/25 grid place-items-center backdrop-blur-sm">
                      <Icon className="w-6 h-6" strokeWidth={1.25} />
                    </div>
                    <p className="font-bold text-[14px]">{title}</p>
                  </div>
                </div>
                <p className="p-5 text-sm text-muted-foreground leading-relaxed flex-1">{desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-10 italic">
            These values form the core of who we are and how we build products at Akarsh Digital.
          </p>
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
              <div className="text-center lg:text-left max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest mb-4">
                  <Users className="w-3.5 h-3.5" /> Your Intelligent Software Partner
                </div>
                <h2 className="font-display font-extrabold text-2xl md:text-3xl leading-snug">
                  Ready to transform<br className="hidden md:block" /> your business?
                </h2>
                <p className="mt-4 text-white/80 text-[15px] leading-relaxed">
                  Whether you're exploring ERP solutions, legal practice management platforms, or AI-powered
                  business software — our team is ready to help you build the future.
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
