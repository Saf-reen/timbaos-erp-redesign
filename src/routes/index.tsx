import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Sparkles, Phone, Mail, MapPin, Send,
  ShieldCheck, Database, TrendingUp, CheckCircle2,
  Lightbulb, Layers, Gauge, Headphones, Globe, Lock, Network,
  LayoutDashboard, Boxes, Zap, HeartHandshake, Calculator,
  Scale,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import handshake from "@/assets/hero-handshake.jpg";
import dashboard from "@/assets/timbaos-dashboard.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const erpModules = [
  { Icon: Database,    title: "Accounting & Finance",        desc: "GST-compliant invoicing, financial reporting, payment tracking, tax management, and accounting controls in one place." },
  { Icon: TrendingUp,  title: "CRM & Customer Management",   desc: "Lead management, opportunity tracking, customer database, sales monitoring, and quotation management." },
  { Icon: Boxes,       title: "Warehouse Management",        desc: "Inventory tracking, stock monitoring, multi-warehouse support, goods movement tracking, and inventory reports." },
  { Icon: LayoutDashboard, title: "Asset Management",        desc: "Track organizational assets throughout their lifecycle — allocation, tracking, maintenance monitoring, and reports." },
  { Icon: Headphones,  title: "Ticketing & Support",         desc: "Ticket creation, assignment, escalation management, SLA monitoring, and resolution tracking for customer support." },
  { Icon: TrendingUp,  title: "Sales Pipeline Management",   desc: "Pipeline visibility, revenue forecasting, opportunity management, and performance reporting." },
  { Icon: Sparkles,    title: "AI-Powered Insights",         desc: "Business analytics, smart reporting, performance insights, and workflow automation powered by artificial intelligence." },
  { Icon: Globe,       title: "Multi-Branch Support",        desc: "Manage multiple offices, warehouses, and cost centres from a single unified dashboard." },
  { Icon: Gauge,       title: "Real-time Dashboards",        desc: "Live KPIs, drill-down analytics, and decision-ready insights for every management level." },
] as const;

const ourCapabilities = [
  { label: "Artificial Intelligence", abbr: "AI", desc: "Intelligent automation and business insights that improve decision-making and drive operational efficiency across your organization." },
  { label: "Cloud Architecture", abbr: "CL", desc: "Secure, scalable cloud-based infrastructure designed for long-term growth and reliable access to business information anytime, anywhere." },
  { label: "Enterprise Security", abbr: "ES", desc: "Modern security practices and enterprise-grade infrastructure that protect business-critical information and ensure compliance." },
];

function TechCarousel() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const start = () => {
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % ourCapabilities.length);
    }, 3000);
  };

  useEffect(() => {
    start();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const goTo = (i: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setActive(i);
    start();
  };

  return (
    <div>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {ourCapabilities.map(({ label, abbr, desc }) => (
            <div key={label} className="min-w-full flex justify-center px-4">
              <div className="w-full max-w-sm rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] p-8 text-center">
                <div className="mx-auto mb-5 w-16 h-16 rounded-2xl grid place-items-center text-white font-display font-black text-lg shadow-lg bg-gradient-to-br from-[var(--primary-deep)] to-primary">
                  {abbr}
                </div>
                <h3 className="text-xl font-bold text-foreground">{label}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2.5 mt-8">
        {ourCapabilities.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 cursor-pointer ${
              i === active ? "w-7 h-2.5 bg-primary" : "w-2.5 h-2.5 bg-border hover:bg-primary/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex flex-col items-center gap-3 mb-10">
      <span className="text-xs font-bold uppercase tracking-[0.22em] text-primary">{text}</span>
      <div className="w-12 h-0.5 bg-gradient-to-r from-[var(--primary-deep)] to-primary rounded-full" />
    </div>
  );
}

function Home() {
  const [sent, setSent] = useState(false);

  return (
    <>

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="bg-background py-14 md:py-20">
        <div className="container-x grid lg:grid-cols-2 gap-10 items-center">

          <div>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.22em] uppercase text-primary border border-primary/30 rounded-full px-4 py-1.5 bg-accent mb-6">
              Welcome to Akarsh Digital
            </span>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl leading-[1.1] text-[var(--primary-deep)]">
              Product Engineering<br />
              & AI Solutions for<br />
              <span className="text-primary">Modern Businesses</span>
            </h1>
            <p className="mt-5 text-muted-foreground leading-relaxed text-[15px] max-w-lg">
              Build smarter, scale faster, and operate efficiently with intelligent software products designed for the future.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                <Sparkles className="w-4 h-4 mr-2" /> Request a Demo
              </Link>
              <Link to="/services/$slug" params={{ slug: "timbaos-erp" }} className="btn-outline">Explore Products</Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              {[
                { Icon: CheckCircle2, t: "Product-first innovation" },
                { Icon: CheckCircle2, t: "AI-powered intelligence" },
                { Icon: CheckCircle2, t: "Industry-focused solutions" },
              ].map(({ Icon, t }) => (
                <span key={t} className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                  <Icon className="w-3.5 h-3.5 text-primary" /> {t}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-br from-primary/10 to-[var(--primary-deep)]/5 rounded-3xl blur-xl" />
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)]">
              <div className="h-1 w-full bg-gradient-to-r from-[var(--primary-deep)] to-primary" />
              <img
                src={handshake}
                alt="Akarsh Digital — Product Engineering & AI Solutions"
                className="w-full h-[320px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ ABOUT ═══════════════ */}
      <section className="py-16 bg-[var(--soft)]">
        <div className="container-x max-w-3xl text-center">
          <SectionLabel text="Who We Are" />
          <h2 className="section-title -mt-4">Transforming Business Challenges into Intelligent Software Products</h2>
          <p className="mt-6 text-muted-foreground leading-[1.9] text-[15px]">
            At Akarsh Digital, we believe technology should simplify business operations, not complicate them.
            Our focus is on building scalable software products that help organizations improve productivity,
            automate workflows, and make better decisions through data and intelligent automation. We combine
            product engineering expertise, modern cloud technologies, and AI-driven innovation to create
            solutions that solve real business challenges.
          </p>
        </div>
      </section>

      {/* ═══════════════ PRODUCT PORTFOLIO STRIP ═══════════════ */}
      <section className="py-0 bg-background">
        <div className="container-x">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[var(--primary-deep)] to-primary px-8 py-10">
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "22px 22px" }}
            />
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-white text-center lg:text-left shrink-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/60">Our Products</p>
                <h3 className="font-display font-extrabold text-2xl mt-0.5">Product Portfolio</h3>
                <p className="text-sm text-white/70 mt-1">Enterprise-grade software for every industry.</p>
              </div>
              <div className="flex flex-wrap justify-center gap-8">
                {[
                  { n: "Enterprise ERP", l: "Business Management" },
                  { n: "E-Law ERP",      l: "Legal Practice" },
                  { n: "AI-Powered",     l: "Intelligent Insights" },
                  { n: "Cloud-Ready",    l: "Scalable Infrastructure" },
                ].map(({ n, l }) => (
                  <div key={l} className="text-center">
                    <p className="font-display font-extrabold text-xl text-white">{n}</p>
                    <p className="text-xs text-white/60 mt-0.5 font-medium">{l}</p>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-[var(--primary-deep)] font-bold text-sm hover:bg-white/90 transition shadow-lg shrink-0"
              >
                <Sparkles className="w-4 h-4" /> Request a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ WHY CHOOSE ═══════════════ */}
      <section className="py-16 bg-background overflow-hidden">
        <div className="container-x">
          <div className="text-center mb-12">
            <SectionLabel text="Our Advantage" />
            <h2 className="section-title -mt-4">Why Choose Akarsh Digital?</h2>
            <p className="mt-4 font-semibold text-foreground text-[15px]">
              Intelligent software products built around real business requirements.
            </p>
            <p className="mt-2 text-muted-foreground text-sm max-w-2xl mx-auto leading-relaxed">
              We build products designed around real business requirements, powered by AI, built on scalable
              cloud architecture, and tailored to specific industry needs — with continuous enhancements
              based on market feedback.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-5 items-start">

            <div className="relative rounded-2xl overflow-hidden h-[300px] shadow-[var(--shadow-card)]">
              <img
                src={handshake}
                alt=""
                aria-hidden
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/72 via-primary/55 to-[var(--primary-deep)]/90" />
              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }}
              />
              <div className="absolute inset-0 p-7 flex flex-col justify-end gap-4">
                {[
                  { Icon: Lightbulb, label: "Product-First Innovation" },
                  { Icon: Sparkles,  label: "AI-Powered Intelligence" },
                  { Icon: Globe,     label: "Scalable Technology" },
                ].map(({ Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 text-white">
                    <div className="w-9 h-9 rounded-full bg-white/20 border border-white/25 grid place-items-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <p className="font-semibold text-sm leading-snug">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-[300px] lg:mt-10 shadow-[var(--shadow-card)]">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-deep)] via-[oklch(0.35_0.19_27)] to-[oklch(0.27_0.16_27)]" />
              <div className="absolute -bottom-12 -right-12 w-56 h-56 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
              <div className="absolute inset-0 p-7 flex flex-col justify-center gap-4">
                {[
                  { Icon: Layers,       label: "Industry-Focused Solutions" },
                  { Icon: HeartHandshake, label: "Continuous Product Enhancement" },
                  { Icon: Lock,         label: "Secure Infrastructure" },
                ].map(({ Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 text-white">
                    <div className="w-9 h-9 rounded-full bg-white/15 border border-white/20 grid place-items-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <p className="font-semibold text-sm leading-snug">{label}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════ TECHNOLOGY CAPABILITIES — carousel ═══════════════ */}
      <section className="py-14 bg-[var(--soft)] border-y border-border">
        <div className="container-x">
          <div className="text-center mb-10">
            <SectionLabel text="Technology" />
            <h2 className="section-title -mt-4">Our Capabilities</h2>
          </div>
          <TechCarousel />
        </div>
      </section>

      {/* ═══════════════ ENTERPRISE ERP — modules showcase ═══════════════ */}
      <section className="py-16 bg-background">
        <div className="container-x">
          <div className="text-center mb-12">
            <SectionLabel text="Our Product" />
            <h2 className="section-title -mt-4">Enterprise ERP Platform</h2>
            <p className="mt-4 text-muted-foreground text-sm max-w-2xl mx-auto leading-relaxed">
              A fully integrated, cloud-ready ERP platform that brings finance, inventory, customer management,
              support operations, and business intelligence into a single ecosystem.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)] mb-10">
            <div className="h-1 w-full bg-gradient-to-r from-[var(--primary-deep)] to-primary" />
            <img src={dashboard} alt="Enterprise ERP Platform Dashboard" className="w-full h-52 object-cover object-top" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-deep)]/80 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center px-8">
              <div className="text-white max-w-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-white/70 mb-1">Flagship Product</p>
                <h3 className="font-display font-extrabold text-2xl leading-snug">One Platform.<br />Complete Business Control.</h3>
                <Link
                  to="/services/$slug"
                  params={{ slug: "timbaos-erp" }}
                  className="inline-flex items-center mt-4 px-5 py-2 rounded-md bg-white text-[var(--primary-deep)] font-bold text-sm hover:bg-white/90 transition shadow"
                >
                  Explore ERP <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {erpModules.map(({ Icon, title, desc }) => (
              <div key={title} className="group flex items-start gap-4 bg-card border border-border rounded-xl p-5 hover:shadow-[var(--shadow-card)] hover:-translate-y-0.5 transition-all">
                <div className="w-11 h-11 rounded-lg grid place-items-center bg-accent text-primary shrink-0 group-hover:bg-gradient-to-br group-hover:from-[var(--primary-deep)] group-hover:to-primary group-hover:text-white transition-all">
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-[14px] font-bold text-primary">{title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ E-LAW ERP SPOTLIGHT ═══════════════ */}
      <section className="py-0 bg-[var(--soft)]">
        <div className="container-x">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[var(--primary-deep)] to-primary px-8 py-10">
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "22px 22px" }}
            />
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-white text-center lg:text-left shrink-0 max-w-lg">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-xs font-bold uppercase tracking-widest mb-3">
                  <Scale className="w-3.5 h-3.5" /> Legal Practice Management
                </div>
                <h3 className="font-display font-extrabold text-2xl mt-1">E-Law ERP</h3>
                <p className="text-sm text-white/75 mt-2 leading-relaxed">
                  A comprehensive legal practice management platform for advocates, law firms, and corporate legal teams —
                  case management, client records, documents, billing, and more.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {["Case Management", "Client Management", "Document Storage", "Billing & Invoicing", "Team Collaboration"].map((f) => (
                  <span key={f} className="flex items-center gap-1.5 text-xs text-white/70 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white/50" /> {f}
                  </span>
                ))}
              </div>
              <Link
                to="/services/$slug"
                params={{ slug: "elaw-erp" }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-[var(--primary-deep)] font-bold text-sm hover:bg-white/90 transition shadow-lg shrink-0"
              >
                <ArrowRight className="w-4 h-4" /> Explore E-Law ERP
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA BANNER ═══════════════ */}
      <section className="py-14 bg-[var(--soft)]">
        <div className="container-x">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src={handshake}
              alt=""
              aria-hidden
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-deep)]/96 via-[var(--primary-deep)]/90 to-primary/82" />
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "22px 22px" }}
            />
            <div className="relative px-8 py-14 text-white text-center">
              <h2 className="font-display font-extrabold text-xl md:text-3xl leading-snug">
                Ready to transform your business?
              </h2>
              <p className="mt-3 text-white/80 text-[15px] max-w-xl mx-auto leading-relaxed">
                Explore our Enterprise ERP Platform and E-Law ERP — intelligent software products built for your industry.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center mt-7 px-7 py-3 rounded-md bg-white text-[var(--primary-deep)] font-bold text-sm hover:bg-white/90 transition shadow-lg"
              >
                Request a Demo Today <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CONTACT ═══════════════ */}
      <section className="py-16 bg-background">
        <div className="container-x">
          <div className="text-center mb-12">
            <SectionLabel text="Get in Touch" />
            <h2 className="section-title -mt-4">Let's Build the Future Together</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            <div className="space-y-4">
              {[
                { Icon: Phone, t: "Phone", v: "+91 89198 29918", href: "tel:+918919829918" },
                { Icon: Mail, t: "Email", v: "info@akarshdigitals.com", href: "mailto:info@akarshdigitals.com" },
                { Icon: MapPin, t: "Address", v: "HITEC City, Hyderabad" },
              ].map(({ Icon, t, v, href }) => (
                <div key={t} className="flex gap-3 items-start rounded-xl border border-border bg-[var(--soft)] p-4">
                  <div className="w-9 h-9 rounded-lg grid place-items-center bg-gradient-to-br from-[var(--primary-deep)] to-primary text-white shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-primary">{t}</p>
                    {href
                      ? <a href={href} className="text-sm text-foreground hover:text-primary transition-colors">{v}</a>
                      : <p className="text-sm text-foreground">{v}</p>
                    }
                  </div>
                </div>
              ))}

              <div className="relative rounded-xl overflow-hidden shadow-[var(--shadow-card)] mt-2">
                <img
                  src={dashboard}
                  alt="Enterprise ERP Platform"
                  className="w-full h-36 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-deep)]/70 to-transparent" />
                <p className="absolute bottom-3 left-3 text-white text-xs font-bold tracking-wider uppercase">
                  Enterprise ERP Platform
                </p>
              </div>
            </div>

            <form
              className="lg:col-span-2 rounded-2xl border border-border bg-card p-7 grid gap-4 sm:grid-cols-2 shadow-sm"
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            >
              <Field label="Name *" name="name" required />
              <Field label="Email *" name="email" type="email" required />
              <Field label="Number *" name="phone" required />
              <Field label="Subject" name="subject" />
              <div className="sm:col-span-2">
                <label className="text-xs font-bold uppercase tracking-widest text-foreground">Write Message *</label>
                <textarea
                  required
                  rows={4}
                  className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                />
              </div>
              <div className="sm:col-span-2 flex items-center gap-4">
                <button type="submit" className="btn-primary">
                  <Send className="w-4 h-4 mr-2" /> Send Message
                </button>
                {sent && (
                  <span className="text-sm text-primary font-semibold">
                    Thanks — we'll be in touch soon.
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: {
  label: string; name: string; type?: string; required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs font-bold uppercase tracking-widest text-foreground">{label}</label>
      <input
        name={name} type={type} required={required}
        className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
