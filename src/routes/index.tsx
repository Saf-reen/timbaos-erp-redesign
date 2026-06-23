import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Clock, LockKeyhole, Globe, Layers, Gauge, Headphones,
  ArrowRight, Sparkles, Phone, Mail, MapPin, Send,
  ShieldCheck, Users, Database, ShoppingCart, Briefcase, TrendingUp,
  CheckCircle2,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import handshake from "@/assets/hero-handshake.jpg";
import dashboard from "@/assets/timbaos-dashboard.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Akarsh Digitals — Empowering Your Business" },
      { name: "description", content: "Akarsh Digitals empowers Indian businesses with TIMBAOS ERP — a fully integrated cloud-ready platform covering finance, HR, CRM, manufacturing and more." },
      { property: "og:title", content: "Akarsh Digitals — Empowering Your Business" },
    ],
  }),
  component: Home,
});

const erpModules = [
  { Icon: Database,    title: "Finance & Accounts",   desc: "GST-ready invoicing, ledgers, P&L, balance sheet and real-time financial reporting in one place." },
  { Icon: ShoppingCart, title: "Inventory & Warehouse", desc: "Multi-location stock tracking, automated reorder alerts and seamless warehouse operations." },
  { Icon: Users,        title: "HR & Payroll",          desc: "Attendance, leave management, payroll processing and compliance — fully automated." },
  { Icon: TrendingUp,   title: "CRM & Sales",           desc: "Lead pipeline, customer 360°, quotation to order and after-sales support tracking." },
  { Icon: Layers,       title: "Manufacturing",         desc: "BOM, production planning, shop floor management and quality control integrated end-to-end." },
  { Icon: Briefcase,    title: "Procurement",           desc: "Vendor management, purchase orders, three-way matching and cost control workflows." },
  { Icon: ShieldCheck,  title: "Compliance & Audit",    desc: "Role-based access, audit trails, statutory reports and enterprise-grade data security." },
  { Icon: Globe,        title: "Multi-Branch Support",  desc: "Manage multiple offices, warehouses and cost centres from a single unified dashboard." },
  { Icon: Gauge,        title: "Real-time Dashboards",  desc: "Live KPIs, drill-down analytics and decision-ready insights for every management level." },
] as const;

const ourServices = [
  { label: "AWS", abbr: "AWS", desc: "Amazon Web Services — scalable cloud infrastructure, managed services, and enterprise-grade security trusted by millions globally." },
  { label: "Microsoft Azure", abbr: "Az", desc: "Microsoft Azure — a complete hybrid cloud platform with seamless integration across Microsoft products and enterprise environments." },
  { label: "GCP", abbr: "GCP", desc: "Google Cloud Platform — cutting-edge data analytics, AI/ML, and serverless computing powered by Google's global infrastructure." },
];

function TechCarousel() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const start = () => {
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % ourServices.length);
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
      {/* track */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {ourServices.map(({ label, abbr, desc }) => (
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

      {/* dots */}
      <div className="flex justify-center gap-2.5 mt-8">
        {ourServices.map((_, i) => (
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

      {/* ═══════════════ HERO — split layout ═══════════════ */}
      <section className="bg-background py-14 md:py-20">
        <div className="container-x grid lg:grid-cols-2 gap-10 items-center">

          {/* Left: text */}
          <div>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.22em] uppercase text-primary border border-primary/30 rounded-full px-4 py-1.5 bg-accent mb-6">
              Welcome to Akarsh Digitals
            </span>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl leading-[1.1] text-[var(--primary-deep)]">
              Empowering Your<br />
              Businesses needs<br />
              <span className="text-primary">With Akarsh Digitals</span>
            </h1>
            <p className="mt-5 text-muted-foreground leading-relaxed text-[15px] max-w-lg">
              A dynamic subsidiary of Alekas Solutions — your strategic partner
              in digital excellence and business transformation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/services/$slug" params={{ slug: "timbaos-erp" }} className="btn-primary">
                <Sparkles className="w-4 h-4 mr-2" /> Explore TIMBAOS ERP
              </Link>
              <Link to="/contact" className="btn-outline">Contact Us</Link>
            </div>
            {/* small trust strip */}
            <div className="mt-10 flex flex-wrap items-center gap-5">
              {[
                { Icon: CheckCircle2, t: "Trusted by 500+ businesses" },
                { Icon: CheckCircle2, t: "Pan-India presence" },
                { Icon: CheckCircle2, t: "24/7 Support" },
              ].map(({ Icon, t }) => (
                <span key={t} className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                  <Icon className="w-3.5 h-3.5 text-primary" /> {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right: contained image */}
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-br from-primary/10 to-[var(--primary-deep)]/5 rounded-3xl blur-xl" />
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)]">
              <div className="h-1 w-full bg-gradient-to-r from-[var(--primary-deep)] to-primary" />
              <img
                src={handshake}
                alt="Empowering businesses"
                className="w-full h-[320px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ WELCOME ═══════════════ */}
      <section className="py-16 bg-[var(--soft)]">
        <div className="container-x max-w-3xl text-center">
          <SectionLabel text="Who We Are" />
          <h2 className="section-title -mt-4">Welcome To AKARSH DIGITALS</h2>
          <p className="mt-6 text-muted-foreground leading-[1.9] text-[15px]">
            We are proud to be a dynamic subsidiary of Alekas Solutions, dedicated to
            empowering businesses with a comprehensive suite of digital solutions. Our
            commitment to excellence and innovation, positions us as a leading force in
            the digital landscape. Akarsh Digitals is your strategic partner in the
            quest for digital excellence—we are more than just a service provider. As a
            division of Alekas Solutions, we carry on a heritage of knowledge and a
            dedication to providing unmatched solutions that promote corporate success.
          </p>
        </div>
      </section>

      {/* ═══════════════ TIMBAOS STATS STRIP ═══════════════ */}
      <section className="py-0 bg-background">
        <div className="container-x">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[var(--primary-deep)] to-primary px-8 py-10">
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "22px 22px" }}
            />
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* label + title */}
              <div className="text-white text-center lg:text-left shrink-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/60">Flagship Product</p>
                <h3 className="font-display font-extrabold text-2xl mt-0.5">TIMBAOS – ERP</h3>
                <p className="text-sm text-white/70 mt-1">One platform. Every department.</p>
              </div>
              {/* stats */}
              <div className="flex flex-wrap justify-center gap-8">
                {[
                  { n: "500+", l: "Businesses Served" },
                  { n: "10+",  l: "ERP Modules" },
                  { n: "100%", l: "Cloud Ready" },
                  { n: "24/7", l: "Expert Support" },
                ].map(({ n, l }) => (
                  <div key={l} className="text-center">
                    <p className="font-display font-extrabold text-3xl text-white">{n}</p>
                    <p className="text-xs text-white/60 mt-0.5 font-medium">{l}</p>
                  </div>
                ))}
              </div>
              {/* CTA */}
              <Link
                to="/services/$slug"
                params={{ slug: "timbaos-erp" }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-[var(--primary-deep)] font-bold text-sm hover:bg-white/90 transition shadow-lg shrink-0"
              >
                <Sparkles className="w-4 h-4" /> Register for Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ WHY CHOOSE — two side-by-side image cards ═══════════════ */}
      <section className="py-16 bg-background overflow-hidden">
        <div className="container-x">
          <div className="text-center mb-12">
            <SectionLabel text="Our Advantage" />
            <h2 className="section-title -mt-4">Why Choose AKARSH DIGITALS?</h2>
            <p className="mt-4 font-semibold text-foreground text-[15px]">
              Improved business performance made possible by our multi services provider.
            </p>
            <p className="mt-2 text-muted-foreground text-sm max-w-2xl mx-auto leading-relaxed">
              Utilize our managed cloud computing services to embrace the power of cloud
              transformation, CRM services, SAP Services, Digital Marketing, E-commerce
              services, HR staffing. You may rethink your future and completely change
              how you do business by taking use of our multi service adaptability.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-5 items-start">

            {/* Card 1 — photo bg */}
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
                  { Icon: Clock, label: "High Reliability and Uptime" },
                  { Icon: LockKeyhole, label: "Top-notch Security & Data Security" },
                  { Icon: Globe, label: "Global Reach and Accessibility" },
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

            {/* Card 2 — dark red gradient, slightly offset */}
            <div className="relative rounded-2xl overflow-hidden h-[300px] lg:mt-10 shadow-[var(--shadow-card)]">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-deep)] via-[oklch(0.35_0.19_27)] to-[oklch(0.27_0.16_27)]" />
              <div className="absolute -bottom-12 -right-12 w-56 h-56 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
              {/* cloud decoration */}
              <svg className="absolute right-4 bottom-4 w-40 h-32 opacity-[0.06] text-white" viewBox="0 0 200 150" fill="currentColor">
                <path d="M50,120 Q18,120 18,92 Q18,64 44,58 Q38,12 78,12 Q108,12 120,36 Q150,34 157,58 Q178,62 178,92 Q178,120 146,120 Z" />
                <rect x="70" y="120" width="6" height="24" rx="3" />
                <rect x="87" y="124" width="6" height="20" rx="3" />
                <rect x="104" y="118" width="6" height="26" rx="3" />
                <rect x="121" y="122" width="6" height="22" rx="3" />
              </svg>
              <div className="absolute inset-0 p-7 flex flex-col justify-center gap-4">
                {[
                  { Icon: Layers, label: "Flexible and Adaptable Solutions" },
                  { Icon: Gauge, label: "Optimized Cost and Performance" },
                  { Icon: Headphones, label: "24/7 Technical Support" },
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

      {/* ═══════════════ OUR SERVICES — auto-carousel ═══════════════ */}
      <section className="py-14 bg-[var(--soft)] border-y border-border">
        <div className="container-x">
          <div className="text-center mb-10">
            <SectionLabel text="Technologies" />
            <h2 className="section-title -mt-4">Our Services</h2>
          </div>
          <TechCarousel />
        </div>
      </section>

      {/* ═══════════════ TIMBAOS ERP — modules showcase ═══════════════ */}
      <section className="py-16 bg-background">
        <div className="container-x">
          <div className="text-center mb-12">
            <SectionLabel text="Our Product" />
            <h2 className="section-title -mt-4">TIMBAOS – ERP</h2>
            <p className="mt-4 text-muted-foreground text-sm max-w-2xl mx-auto leading-relaxed">
              A fully integrated, cloud-ready ERP platform built for Indian businesses — covering every function
              from finance to factory floor, all in one unified system.
            </p>
          </div>

          {/* dashboard image + CTA strip */}
          <div className="relative rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)] mb-10">
            <div className="h-1 w-full bg-gradient-to-r from-[var(--primary-deep)] to-primary" />
            <img src={dashboard} alt="TIMBAOS ERP Dashboard" className="w-full h-52 object-cover object-top" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-deep)]/80 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center px-8">
              <div className="text-white max-w-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-white/70 mb-1">Flagship Product</p>
                <h3 className="font-display font-extrabold text-2xl leading-snug">One ERP.<br />Every Department.</h3>
                <Link
                  to="/services/$slug"
                  params={{ slug: "timbaos-erp" }}
                  className="inline-flex items-center mt-4 px-5 py-2 rounded-md bg-white text-[var(--primary-deep)] font-bold text-sm hover:bg-white/90 transition shadow"
                >
                  Explore TIMBAOS <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>

          {/* module cards */}
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
                Transform your business with<br className="hidden md:block" />
                Cloud Services, CRM Services, SAP Services,<br className="hidden md:block" />
                Digital Marketing, E-commerce Services, HR Staffing
              </h2>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center mt-7 px-7 py-3 rounded-md bg-white text-[var(--primary-deep)] font-bold text-sm hover:bg-white/90 transition shadow-lg"
              >
                Contact Us <ArrowRight className="w-4 h-4 ml-2" />
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
            <h2 className="section-title -mt-4">Connect With Our Team</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            {/* Left info column */}
            <div className="space-y-4">
              {[
                { Icon: Phone, t: "Phone", v: "+91 8919829918", href: "tel:+918919829918" },
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

              {/* small image */}
              <div className="relative rounded-xl overflow-hidden shadow-[var(--shadow-card)] mt-2">
                <img
                  src={dashboard}
                  alt="TIMBAOS ERP"
                  className="w-full h-36 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-deep)]/70 to-transparent" />
                <p className="absolute bottom-3 left-3 text-white text-xs font-bold tracking-wider uppercase">
                  TIMBAOS – ERP
                </p>
              </div>
            </div>

            {/* Form */}
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
