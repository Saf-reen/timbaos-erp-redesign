import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Award, Target, Eye, Users } from "lucide-react";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us — Akarsh Digitals" },
      { name: "description", content: "Learn about Akarsh Digitals, a subsidiary of Alekas Solutions delivering digital transformation across industries." },
      { property: "og:title", content: "About Us — Akarsh Digitals" },
      { property: "og:description", content: "A subsidiary of Alekas Solutions delivering digital transformation." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        title="About Akarsh Digitals"
        subtitle="A dynamic subsidiary of Alekas Solutions empowering businesses with a comprehensive suite of digital solutions."
      />
      <section className="py-16">
        <div className="container-x grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-primary">Who we are</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Akarsh Digitals Pvt Ltd is a multi-service technology partner helping
              ambitious organisations modernise operations, adopt cloud, secure their
              data and grow their digital revenue. As a subsidiary of Alekas Solutions,
              we bring deep enterprise heritage to every engagement.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We're best known today for our flagship product — <span className="text-primary font-semibold">TIMBAOS ERP</span> —
              a unified enterprise platform that connects finance, people, inventory,
              customers and operations on a single source of truth.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { Icon: Target, t: "Our Mission", d: "Make world-class digital transformation accessible to Indian businesses of every size." },
              { Icon: Eye, t: "Our Vision", d: "Be the most trusted digital partner — from cloud and security to ERP and growth." },
              { Icon: Award, t: "Our Values", d: "Excellence, integrity, ownership and a relentless focus on customer outcomes." },
              { Icon: Users, t: "Our Team", d: "Engineers, consultants and creatives who care about your success." },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="rounded-xl border p-5 bg-card">
                <Icon className="w-7 h-7 text-primary mb-3" />
                <h4 className="font-bold">{t}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
