import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Calendar, User, ArrowRight } from "lucide-react";

const posts = [
  { title: "Why TIMBAOS ERP is built for ambitious Indian businesses", date: "Jun 12, 2026", author: "Akarsh Team", excerpt: "A look at how a single, well-designed ERP can replace 8+ disconnected tools." },
  { title: "Cloud cost optimisation: 10 wins in the first 30 days", date: "May 28, 2026", author: "Cloud Practice", excerpt: "Quick wins to right-size and re-platform your AWS/Azure workloads." },
  { title: "CRM that sales teams actually use", date: "May 04, 2026", author: "CRM Practice", excerpt: "Adoption is everything. Here's how we design CRM for the people using it." },
  { title: "SAP S/4HANA migration: a pragmatic checklist", date: "Apr 18, 2026", author: "SAP Practice", excerpt: "From discovery to cutover — the path most enterprises actually take." },
  { title: "Digital marketing benchmarks for B2B SaaS in India", date: "Apr 02, 2026", author: "Growth Team", excerpt: "Channels, costs and conversion rates we're seeing across portfolio clients." },
  { title: "GRC in the cloud era: what's changed", date: "Mar 17, 2026", author: "Security Team", excerpt: "Governance, risk and compliance for modern multi-cloud environments." },
];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Akarsh Digitals" },
      { name: "description", content: "Insights on ERP, cloud, CRM, SAP, marketing and digital transformation." },
      { property: "og:title", content: "Blog — Akarsh Digitals" },
      { property: "og:description", content: "Insights from the Akarsh Digitals team." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <PageHero title="From the Akarsh Digitals blog" subtitle="Practical insights on ERP, cloud, security and growth." />
      <section className="py-16">
        <div className="container-x grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.title} className="rounded-2xl border bg-card overflow-hidden hover:shadow-lg transition">
              <div className="h-40 bg-gradient-to-br from-primary to-[var(--primary-deep)]" />
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {p.date}</span>
                  <span className="flex items-center gap-1"><User className="w-3 h-3" /> {p.author}</span>
                </div>
                <h3 className="mt-3 font-bold text-lg text-foreground leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                <Link to="/blog" className="mt-4 inline-flex items-center text-sm font-semibold text-primary">
                  Read more <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
