import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import {
  CheckCircle2, ArrowRight, Sparkles, Phone, Mail, ExternalLink,
  ShoppingCart, Calculator, Users, Headphones, Warehouse,
  Factory, Store, Truck, Building2, Briefcase, Globe,
  BarChart3, Shield, Package, Zap, HeartHandshake,
  LayoutDashboard, FileText, RefreshCw, BadgePercent,
  ClipboardList, Boxes, TrendingUp,
  Network, Lock, Layers, FlaskConical,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { getService } from "@/data/services";
import handshake from "@/assets/hero-handshake.jpg";
import dashboard from "@/assets/timbaos-dashboard.jpg";

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const isTimbaos = params.slug === "timbaos-erp";
    const title = isTimbaos
      ? "Enterprise ERP Platform — Complete Business Management | Akarsh Digitals"
      : `${getService(params.slug)?.title ?? "Service"} — Akarsh Digitals`;
    return {
      meta: [
        { title },
        { name: "description", content: isTimbaos ? "Enterprise ERP Platform helps organizations manage finance, CRM, warehouse, assets, support, and sales from a single intelligent platform." : "" },
        { property: "og:title", content: title },
      ],
    };
  },
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  notFoundComponent: () => (
    <div className="container-x py-24 text-center">
      <h1 className="text-3xl font-bold text-primary">Service not found</h1>
      <Link to="/" className="btn-primary mt-6 inline-flex">Go home</Link>
    </div>
  ),
  component: ServicePage,
});

/* ─── data ─── */

const keyFeatures = [
  { Icon: Calculator,  text: "GST-compliant invoicing" },
  { Icon: FileText,    text: "Financial reporting & P&L" },
  { Icon: RefreshCw,   text: "Payment tracking" },
  { Icon: TrendingUp,  text: "Tax management & GST filing" },
  { Icon: BadgePercent,text: "Accounting controls" },
];

const oneStopBenefits = [
  { Icon: Network,        text: "Centralized business operations" },
  { Icon: LayoutDashboard,text: "Real-time reporting and dashboards" },
  { Icon: Boxes,          text: "Improved inventory accuracy" },
  { Icon: Zap,            text: "Faster order processing" },
  { Icon: HeartHandshake, text: "Better customer service" },
  { Icon: Calculator,     text: "Reduced operational costs" },
  { Icon: Lock,           text: "Secure role-based access control" },
];

const suitableFor = [
  { Icon: Factory,   label: "Manufacturing Companies",               color: "from-rose-50 to-red-50 text-primary border-red-100" },
  { Icon: Store,     label: "Trading Businesses",                    color: "from-orange-50 to-red-50 text-primary border-orange-100" },
  { Icon: Truck,     label: "Distributors",                          color: "from-red-50 to-rose-50 text-primary border-rose-100" },
  { Icon: Building2, label: "Retail Organizations",                  color: "from-slate-50 to-red-50 text-primary border-slate-100" },
  { Icon: Briefcase, label: "Service Providers",                     color: "from-red-50 to-orange-50 text-primary border-red-100" },
  { Icon: Globe,     label: "Small and Medium Enterprises (SMEs)",   color: "from-rose-50 to-slate-50 text-primary border-rose-100" },
];

const erpFeatures = [
  {
    Icon: Calculator,
    accent: "bg-rose-50 text-primary border-rose-100",
    title: "Accounting & Finance",
    points: [
      "GST-compliant invoicing",
      "Financial reporting & P&L",
      "Payment tracking",
      "Tax management & GST filing",
      "Accounting controls",
    ],
  },
  {
    Icon: Users,
    accent: "bg-orange-50 text-primary border-orange-100",
    title: "CRM & Customer Management",
    points: [
      "Lead management",
      "Opportunity tracking",
      "Customer database",
      "Sales monitoring",
      "Quotation management",
    ],
  },
  {
    Icon: Warehouse,
    accent: "bg-red-50 text-primary border-red-100",
    title: "Warehouse Management",
    points: [
      "Inventory tracking",
      "Stock monitoring",
      "Multi-warehouse support",
      "Goods movement tracking",
      "Inventory reports",
    ],
  },
  {
    Icon: ShoppingCart,
    accent: "bg-rose-50 text-primary border-rose-100",
    title: "Asset Management",
    points: [
      "Asset allocation",
      "Asset tracking",
      "Maintenance monitoring",
      "Asset reports",
    ],
  },
  {
    Icon: Headphones,
    accent: "bg-orange-50 text-primary border-orange-100",
    title: "Ticketing & Support",
    points: [
      "Ticket creation",
      "Ticket assignment",
      "Escalation management",
      "SLA monitoring",
      "Resolution tracking",
    ],
  },
];

/* ─── module selector ─── */

function ModuleSelector() {
  const [active, setActive] = useState(0);
  const mod = erpFeatures[active];

  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-[var(--shadow-card)] grid lg:grid-cols-[280px_1fr]">

      {/* ── left: module list ── */}
      <div className="bg-[var(--soft)] border-b lg:border-b-0 lg:border-r border-border flex lg:flex-col overflow-x-auto lg:overflow-visible">
        {erpFeatures.map(({ Icon, title }, i) => (
          <button
            key={title}
            onClick={() => setActive(i)}
            className={`group relative flex items-center gap-3 px-5 py-4 text-left w-full shrink-0 transition-all
              ${active === i
                ? "bg-card text-primary"
                : "text-muted-foreground hover:bg-card/60 hover:text-foreground"
              }`}
          >
            {/* active indicator */}
            {active === i && (
              <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[var(--primary-deep)] to-primary rounded-r-full hidden lg:block" />
            )}
            {active === i && (
              <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--primary-deep)] to-primary rounded-t-full lg:hidden" />
            )}

            <div className={`w-9 h-9 rounded-lg grid place-items-center shrink-0 transition-all
              ${active === i
                ? "bg-gradient-to-br from-[var(--primary-deep)] to-primary text-white shadow-sm"
                : "bg-background text-muted-foreground border border-border group-hover:border-primary/30"
              }`}
            >
              <Icon className="w-4 h-4" strokeWidth={1.5} />
            </div>

            <span className={`text-sm font-semibold leading-snug whitespace-nowrap lg:whitespace-normal ${active === i ? "text-primary" : ""}`}>
              {title}
            </span>

            {active === i && (
              <ArrowRight className="w-3.5 h-3.5 ml-auto text-primary shrink-0 hidden lg:block" />
            )}
          </button>
        ))}

        {/* coming soon */}
        <div className="flex items-center gap-3 px-5 py-4 border-t border-border mt-auto shrink-0">
          <div className="w-9 h-9 rounded-lg grid place-items-center bg-background border border-dashed border-primary/30 shrink-0">
            <FlaskConical className="w-4 h-4 text-primary/50" strokeWidth={1.5} />
          </div>
          <span className="text-xs text-muted-foreground font-medium whitespace-nowrap lg:whitespace-normal">More coming soon…</span>
        </div>
      </div>

      {/* ── right: detail panel ── */}
      <div className="p-0 flex flex-col">
        {/* header band */}
        <div className="relative flex items-center gap-5 px-8 py-7 bg-gradient-to-r from-[var(--primary-deep)] to-primary overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }}
          />
          {/* large decorative icon */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-10">
            <mod.Icon className="w-24 h-24 text-white" strokeWidth={0.75} />
          </div>

          <div className="relative w-14 h-14 rounded-2xl bg-white/15 border border-white/20 grid place-items-center shrink-0">
            <mod.Icon className="w-7 h-7 text-white" strokeWidth={1.25} />
          </div>
          <div className="relative">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/60 mb-0.5">Module</p>
            <h3 className="font-display font-extrabold text-2xl text-white">{mod.title}</h3>
          </div>
        </div>

        {/* bullet points */}
        <div className="p-8 flex-1">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-5">What's included</p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {mod.points.map((p, i) => (
              <li
                key={p}
                className="flex items-start gap-3 rounded-xl border border-border bg-[var(--soft)] px-4 py-3"
              >
                <div className="w-5 h-5 rounded-full grid place-items-center bg-accent text-primary shrink-0 mt-0.5 text-[10px] font-black">
                  {i + 1}
                </div>
                <span className="text-sm text-foreground leading-snug">{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-center justify-between gap-4 pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">{active + 1}</span> of {erpFeatures.length} modules
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setActive((p) => Math.max(0, p - 1))}
                disabled={active === 0}
                className="w-8 h-8 rounded-lg border border-border grid place-items-center text-muted-foreground hover:text-primary hover:border-primary/40 disabled:opacity-30 transition-all"
              >
                <ArrowRight className="w-3.5 h-3.5 rotate-180" />
              </button>
              <button
                onClick={() => setActive((p) => Math.min(erpFeatures.length - 1, p + 1))}
                disabled={active === erpFeatures.length - 1}
                className="w-8 h-8 rounded-lg border border-border grid place-items-center text-muted-foreground hover:text-primary hover:border-primary/40 disabled:opacity-30 transition-all"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── page ─── */

function ServicePage() {
  const { service } = Route.useLoaderData();
  const isTimbaos = service.slug === "timbaos-erp";
  if (!isTimbaos) return <GenericServicePage service={service} />;

  return (
    <>
      {/* 1 ── HERO */}
      <PageHero
        title="Enterprise ERP Platform – Complete Business Management"
        subtitle="A unified business management platform that brings finance, inventory, customer management, support operations, and business intelligence into a single ecosystem."
        bgImage={handshake}
      >
        <span className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur text-white text-xs font-bold tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5" /> Flagship Product
        </span>
      </PageHero>

      {/* 2 ── OVERVIEW: text + dashboard image (one key image) */}
      <section className="py-16 bg-background">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Overview</span>
            <h2 className="mt-2 font-display font-bold text-3xl text-[var(--primary-deep)] leading-snug">
              Accounting & Finance Management
            </h2>
            <div className="mt-3 w-10 h-1 rounded-full bg-gradient-to-r from-[var(--primary-deep)] to-primary" />
            <p className="mt-5 text-muted-foreground leading-relaxed text-[15px]">
              Manage invoicing, taxation, accounting, payments, and financial reporting
              from a centralized platform — GST-compliant, real-time, and fully integrated
              with every other module in the ecosystem.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-2.5">
              {keyFeatures.map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-3 rounded-xl border border-border bg-[var(--soft)] px-3.5 py-2.5">
                  <div className="w-7 h-7 rounded-md grid place-items-center bg-accent text-primary shrink-0">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-medium text-foreground">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* dashboard — one clean product image */}
          <div className="relative">
            <div className="absolute -inset-3 bg-accent/50 rounded-3xl blur-xl" />
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)]">
              <div className="h-1 w-full bg-gradient-to-r from-[var(--primary-deep)] to-primary" />
              <img
                src={dashboard}
                alt="TIMBAOS ERP Dashboard"
                className="w-full h-[300px] object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3 ── ONE STOP SOLUTION: icon grid, no photo */}
      <section className="py-14 bg-[var(--soft)] border-y border-border">
        <div className="container-x">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Why Our ERP</span>
            <h2 className="mt-2 font-display font-bold text-2xl text-[var(--primary-deep)]">One Platform. Complete Business Control.</h2>
            <div className="mx-auto mt-3 w-10 h-1 rounded-full bg-gradient-to-r from-[var(--primary-deep)] to-primary" />
            <p className="mt-3 text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
              Replace disconnected tools with a single, fully integrated ERP that runs every department from one place.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {oneStopBenefits.map(({ Icon, text }, i) => (
              <div
                key={text}
                className="group relative bg-card rounded-2xl border border-border p-5 hover:shadow-[var(--shadow-card)] hover:-translate-y-1 transition-all overflow-hidden"
              >
                {/* subtle top-left glow */}
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-accent/60 blur-xl pointer-events-none" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl grid place-items-center bg-accent text-primary mb-4 group-hover:bg-gradient-to-br group-hover:from-[var(--primary-deep)] group-hover:to-primary group-hover:text-white transition-all">
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <p className="text-sm font-semibold text-foreground leading-snug">{text}</p>
                  <span className="absolute top-0 right-0 text-[40px] font-black text-border/40 leading-none select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 ── SUITABLE FOR: icon-only cards */}
      <section className="py-16 bg-background">
        <div className="container-x">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Industries</span>
            <h2 className="mt-2 font-display font-bold text-2xl text-[var(--primary-deep)]">Suitable For</h2>
            <div className="mx-auto mt-3 w-10 h-1 rounded-full bg-gradient-to-r from-[var(--primary-deep)] to-primary" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {suitableFor.map(({ Icon, label, color }) => (
              <div
                key={label}
                className={`group flex items-center gap-4 rounded-2xl border bg-gradient-to-br ${color} px-5 py-4 hover:shadow-[var(--shadow-card)] hover:-translate-y-0.5 transition-all`}
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm grid place-items-center shrink-0 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-primary" strokeWidth={1.25} />
                </div>
                <p className="text-[14px] font-semibold text-foreground leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 ── FEATURES OF TIMBAOS: interactive tab selector */}
      <section className="py-16 bg-[var(--soft)] border-t border-border">
        <div className="container-x">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Modules</span>
            <h2 className="mt-2 font-display font-extrabold text-3xl text-[var(--primary-deep)]">ERP Platform Features</h2>
            <div className="mx-auto mt-4 w-16 h-1 rounded-full bg-gradient-to-r from-[var(--primary-deep)] to-primary" />
          </div>
          <ModuleSelector />
        </div>
      </section>

      {/* 6 ── FOR DEMO — handshake, one final image moment */}
      <section className="py-14 bg-background border-t border-border">
        <div className="container-x">
          <div className="relative rounded-2xl overflow-hidden">
            <img src={handshake} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-deep)]/97 via-[var(--primary-deep)]/88 to-primary/80" />
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "22px 22px" }}
            />
            <div className="relative px-8 py-14 flex flex-col lg:flex-row items-center justify-between gap-8 text-white">
              <div className="text-center lg:text-left">
                <p className="text-xs font-bold uppercase tracking-widest text-white/70 mb-2">For Demo</p>
                <h2 className="font-display font-extrabold text-2xl md:text-3xl leading-snug">
                  Do you have unique needs?
                </h2>
                <p className="mt-3 text-white/80 text-[15px] max-w-xl leading-relaxed">
                  Contact us and we can work together to find the right solution.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-7 py-3 rounded-md bg-white text-[var(--primary-deep)] font-bold text-sm hover:bg-white/90 transition shadow-lg"
                >
                  <Sparkles className="w-4 h-4 mr-2" /> Request a Demo
                </Link>
                <a
                  href="tel:+918919829918"
                  className="inline-flex items-center justify-center px-7 py-3 rounded-md border border-white/40 text-white font-semibold text-sm hover:bg-white/10 transition"
                >
                  <Phone className="w-4 h-4 mr-2" /> Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ─── generic fallback ─── */

function GenericServicePage({ service }: { service: ReturnType<typeof getService> }) {
  if (!service) return null;
  return (
    <>
      <PageHero title={service.title} subtitle={service.short} bgImage={handshake} />
      <section className="py-20 bg-background">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            <ul className="mt-8 grid gap-3">
              {service.highlights.map((h: string) => (
                <li key={h} className="flex items-start gap-3 text-sm bg-[var(--soft)] border border-border rounded-xl px-4 py-3">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-3">
              <Link to="/contact" className="btn-primary"><Mail className="w-4 h-4 mr-2" /> Contact Us</Link>
              <Link to="/" className="btn-outline">Back to Home</Link>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)]">
            <div className="h-1 w-full bg-gradient-to-r from-[var(--primary-deep)] to-primary" />
            <img src={handshake} alt={service.title} className="w-full h-[280px] object-cover" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
}
