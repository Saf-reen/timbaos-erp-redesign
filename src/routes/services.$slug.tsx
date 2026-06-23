import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { getService, services } from "@/data/services";

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const s = getService(params.slug);
    const title = s ? `${s.title} — Akarsh Digitals` : "Service — Akarsh Digitals";
    const desc = s?.short ?? "Akarsh Digitals service.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
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

function ServicePage() {
  const { service } = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        title={service.title}
        subtitle={service.short}
      >
        {service.featured && (
          <span className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur text-white text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" /> Flagship Product · Currently in focus
          </span>
        )}
      </PageHero>

      <section className="py-16">
        <div className="container-x grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="w-14 h-14 rounded-xl grid place-items-center bg-accent text-primary mb-5">
              <service.Icon className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">About {service.title}</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{service.description}</p>

            <h3 className="mt-10 text-xl font-bold text-foreground">What's included</h3>
            <ul className="mt-4 grid sm:grid-cols-2 gap-3">
              {service.highlights.map((h: string) => (
                <li key={h} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> {h}
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl p-8 bg-gradient-to-br from-[var(--primary-deep)] to-primary text-white">
              <h3 className="text-xl font-bold">Ready to get started?</h3>
              <p className="mt-2 text-white/85">Talk to our experts about {service.title}.</p>
              <Link to="/contact" className="inline-flex mt-5 px-5 py-2.5 rounded-md bg-white text-primary font-bold">
                Contact Us <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          <aside>
            <div className="rounded-2xl border bg-card p-6 sticky top-28">
              <h4 className="font-bold text-foreground">Other Services</h4>
              <ul className="mt-4 space-y-2">
                {others.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="flex items-center gap-3 p-2 rounded hover:bg-accent text-sm"
                    >
                      <s.Icon className="w-4 h-4 text-primary" /> {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link to="/services/$slug" params={{ slug: "timbaos-erp" }} className="btn-primary w-full mt-5">
                <Sparkles className="w-4 h-4 mr-2" /> TIMBAOS – ERP
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
