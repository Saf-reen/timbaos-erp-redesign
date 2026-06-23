import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Calendar, User, ArrowRight, Clock, Tag, Sparkles, BookOpen, TrendingUp, Layers } from "lucide-react";
import { useState } from "react";
import handshake from "@/assets/hero-handshake.jpg";
import dashboard from "@/assets/timbaos-dashboard.jpg";

const categories = ["All", "ERP & TIMBAOS", "Cloud & Tech", "Digital Transformation", "Industry Insights"];

const posts = [
  {
    title: "Why TIMBAOS ERP is Built for Ambitious Indian Businesses",
    category: "ERP & TIMBAOS",
    date: "Jun 12, 2026",
    author: "Akarsh Team",
    readTime: "5 min read",
    excerpt: "A single, well-designed ERP can replace 8+ disconnected tools and transform your operations overnight. Discover how TIMBAOS is redefining what an Indian business management platform can do — from finance and HR to manufacturing and CRM.",
    img: dashboard,
    featured: true,
    tags: ["TIMBAOS", "ERP", "Business Growth"],
  },
  {
    title: "TIMBAOS ERP: Finance & GST Compliance Made Simple",
    category: "ERP & TIMBAOS",
    date: "May 28, 2026",
    author: "ERP Practice",
    readTime: "4 min read",
    excerpt: "How TIMBAOS handles GST, invoicing and compliance natively — no third-party plugins needed. A complete walkthrough of the finance module.",
    img: handshake,
    tags: ["Finance", "GST", "Compliance"],
  },
  {
    title: "Managing HR and Payroll with TIMBAOS ERP",
    category: "ERP & TIMBAOS",
    date: "May 04, 2026",
    author: "ERP Practice",
    readTime: "4 min read",
    excerpt: "From attendance tracking to payroll processing — how TIMBAOS streamlines your entire HR workflow in one unified platform.",
    img: dashboard,
    tags: ["HR", "Payroll", "Workforce"],
  },
  {
    title: "Cloud Migration for SMEs: A Step-by-Step Guide",
    category: "Cloud & Tech",
    date: "Apr 22, 2026",
    author: "Akarsh Team",
    readTime: "6 min read",
    excerpt: "Moving your business to the cloud doesn't have to be overwhelming. Our step-by-step guide helps Indian SMEs plan, migrate and thrive on AWS, Azure and Google Cloud.",
    img: handshake,
    tags: ["Cloud", "AWS", "Migration"],
  },
  {
    title: "TIMBAOS ERP for Manufacturing: BOM, Production & Shop Floor",
    category: "ERP & TIMBAOS",
    date: "Apr 18, 2026",
    author: "ERP Practice",
    readTime: "5 min read",
    excerpt: "A deep dive into TIMBAOS manufacturing modules — production planning, bill of materials, shop-floor control and quality management.",
    img: dashboard,
    tags: ["Manufacturing", "Production", "BOM"],
  },
  {
    title: "Digital Transformation Trends Reshaping Indian Enterprises in 2026",
    category: "Digital Transformation",
    date: "Apr 05, 2026",
    author: "Akarsh Team",
    readTime: "7 min read",
    excerpt: "AI-powered ERP, hyperautomation and cloud-first strategies are no longer optional. Here's what leading Indian companies are doing differently in 2026.",
    img: handshake,
    tags: ["Digital Transformation", "AI", "2026 Trends"],
  },
  {
    title: "Real-Time Dashboards & Role-Based Access in TIMBAOS ERP",
    category: "ERP & TIMBAOS",
    date: "Mar 28, 2026",
    author: "Akarsh Team",
    readTime: "3 min read",
    excerpt: "How TIMBAOS empowers decision-makers with live insights and secure, role-specific data access across every department.",
    img: dashboard,
    tags: ["Dashboard", "Analytics", "Access Control"],
  },
  {
    title: "How BFSI Companies Are Leveraging Cloud ERP for Compliance",
    category: "Industry Insights",
    date: "Mar 15, 2026",
    author: "ERP Practice",
    readTime: "5 min read",
    excerpt: "Banks, NBFCs and insurance firms face unique regulatory challenges. See how cloud ERP solutions are helping BFSI organisations stay compliant and agile.",
    img: handshake,
    tags: ["BFSI", "Compliance", "Cloud ERP"],
  },
  {
    title: "From CRM to Inventory: TIMBAOS as Your Single Source of Truth",
    category: "ERP & TIMBAOS",
    date: "Mar 05, 2026",
    author: "Akarsh Team",
    readTime: "4 min read",
    excerpt: "Connecting your sales pipeline, customer data and warehouse operations in one unified platform. Why disconnected tools cost you more than you think.",
    img: dashboard,
    tags: ["CRM", "Inventory", "Integration"],
  },
];

const categoryIcons: Record<string, React.ElementType> = {
  "ERP & TIMBAOS": Sparkles,
  "Cloud & Tech": Layers,
  "Digital Transformation": TrendingUp,
  "Industry Insights": BookOpen,
};

export const Route = createFileRoute("/blog")({
  component: BlogPage,
});

function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const featured = posts.find((p) => p.featured)!;
  const rest = posts.filter((p) => !p.featured);
  const filtered = activeCategory === "All" ? rest : rest.filter((p) => p.category === activeCategory);

  return (
    <>
      <PageHero
        title="Insights from Akarsh Digitals"
        subtitle="Practical articles on TIMBAOS ERP, cloud technology, digital transformation and enterprise strategy."
        bgImage={handshake}
      />

      {/* ── FEATURED POST ── */}
      <section className="py-14 bg-[var(--soft)] border-b border-border">
        <div className="container-x">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Featured Article</span>
          </div>

          <article className="group grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-border bg-card shadow-[var(--shadow-card)] hover:shadow-lg transition-all">
            {/* image */}
            <div className="relative overflow-hidden h-72 lg:h-auto">
              <img
                src={featured.img}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-deep)]/60 via-transparent to-transparent lg:bg-gradient-to-r" />
              <div className="absolute top-5 left-5">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest bg-primary text-white px-3 py-1.5 rounded-full">
                  <Sparkles className="w-3 h-3" /> Featured
                </span>
              </div>
            </div>

            {/* content */}
            <div className="p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-accent border border-primary/20 rounded-full px-3 py-1">
                    {featured.category}
                  </span>
                </div>
                <h2 className="font-display font-extrabold text-xl text-[var(--primary-deep)] leading-snug group-hover:text-primary transition-colors">
                  {featured.title}
                </h2>
                <p className="mt-3 text-[15px] text-muted-foreground leading-relaxed">{featured.excerpt}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {featured.tags.map((tag) => (
                    <span key={tag} className="text-xs text-muted-foreground bg-[var(--soft)] border border-border rounded-full px-2.5 py-0.5">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-7 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-primary" /> {featured.date}</span>
                  <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-primary" /> {featured.author}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-primary" /> {featured.readTime}</span>
                </div>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-gradient-to-r from-[var(--primary-deep)] to-primary text-white text-sm font-bold hover:opacity-90 transition shadow-sm"
                >
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ── CATEGORY FILTER + GRID ── */}
      <section className="py-16 bg-background">
        <div className="container-x">

          {/* section header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-primary">All Articles</span>
              <h2 className="mt-1 font-display font-extrabold text-2xl text-[var(--primary-deep)]">Latest Insights</h2>
              <div className="mt-2 w-10 h-1 rounded-full bg-gradient-to-r from-[var(--primary-deep)] to-primary" />
            </div>

            {/* category pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const Icon = categoryIcons[cat];
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-full border transition-all ${
                      activeCategory === cat
                        ? "bg-gradient-to-r from-[var(--primary-deep)] to-primary text-white border-transparent shadow-sm"
                        : "bg-[var(--soft)] text-foreground border-border hover:border-primary/40 hover:text-primary"
                    }`}
                  >
                    {Icon && <Icon className="w-3 h-3" />}
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* article grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">No articles in this category yet.</div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <article
                  key={p.title}
                  className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:shadow-[var(--shadow-card)] hover:-translate-y-1 transition-all"
                >
                  {/* card image */}
                  <div className="relative h-48 overflow-hidden shrink-0">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-deep)]/70 via-transparent to-transparent" />
                    {/* category badge */}
                    <div className="absolute top-3 left-3">
                      <span className="text-[9px] font-black uppercase tracking-widest bg-primary/90 text-white px-2.5 py-1 rounded-full backdrop-blur-sm">
                        {p.category}
                      </span>
                    </div>
                    {/* meta chips */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 text-[10px] text-white/85">
                      <span className="flex items-center gap-1 bg-black/30 backdrop-blur-sm rounded-full px-2 py-0.5">
                        <Calendar className="w-2.5 h-2.5" /> {p.date}
                      </span>
                      <span className="flex items-center gap-1 bg-black/30 backdrop-blur-sm rounded-full px-2 py-0.5">
                        <Clock className="w-2.5 h-2.5" /> {p.readTime}
                      </span>
                    </div>
                  </div>

                  {/* card body */}
                  <div className="flex flex-col flex-1 p-5">
                    <h3 className="font-bold text-[15px] text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed flex-1 line-clamp-3">{p.excerpt}</p>

                    {/* tags */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {p.tags.map((tag) => (
                        <span key={tag} className="inline-flex items-center gap-1 text-[10px] text-primary bg-accent border border-primary/15 rounded-full px-2 py-0.5">
                          <Tag className="w-2.5 h-2.5" /> {tag}
                        </span>
                      ))}
                    </div>

                    {/* footer */}
                    <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                        <User className="w-3 h-3 text-primary" /> {p.author}
                      </span>
                      <Link
                        to="/blog"
                        className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:gap-2 transition-all"
                      >
                        Read more <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── NEWSLETTER CTA ── */}
      <section className="py-14 bg-[var(--soft)] border-t border-border">
        <div className="container-x">
          <div className="relative rounded-2xl overflow-hidden">
            <img src={handshake} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-deep)]/97 via-[var(--primary-deep)]/88 to-primary/82" />
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "22px 22px" }}
            />
            <div className="relative px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest mb-3">
                  <BookOpen className="w-3.5 h-3.5" /> Stay Informed
                </div>
                <h2 className="font-display font-extrabold text-2xl md:text-3xl leading-snug">
                  Want More Insights Like These?
                </h2>
                <p className="mt-2 text-white/75 text-sm max-w-lg leading-relaxed">
                  Explore how TIMBAOS ERP can transform your business operations. Talk to our experts for a personalised walkthrough.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-white text-[var(--primary-deep)] font-bold text-sm hover:bg-white/90 transition shadow-lg"
                >
                  <Sparkles className="w-4 h-4" /> Request a Demo
                </Link>
                <Link
                  to="/services/$slug"
                  params={{ slug: "timbaos-erp" }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-white/40 text-white font-semibold text-sm hover:bg-white/10 transition"
                >
                  Explore TIMBAOS <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
