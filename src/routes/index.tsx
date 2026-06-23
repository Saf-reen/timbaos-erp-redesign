import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Clock, ShieldCheck, Headphones, Award, CheckCircle2, ArrowRight, Sparkles,
} from "lucide-react";
import handshake from "@/assets/hero-handshake.jpg";
import dashboard from "@/assets/timbaos-dashboard.jpg";
import { services } from "@/data/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Akarsh Digitals — Empowering Your Business" },
      { name: "description", content: "Akarsh Digitals empowers businesses with Cloud, CRM, SAP, Digital Marketing, E-Commerce, HR Staffing and the flagship TIMBAOS ERP platform." },
      { property: "og:title", content: "Akarsh Digitals — Empowering Your Business" },
      { property: "og:description", content: "Cloud, CRM, SAP, Digital Marketing, E-Commerce, HR Staffing, and TIMBAOS ERP." },
    ],
  }),
  component: Home,
});

function Home() {
  const timbaos = services.find((s) => s.slug === "timbaos-erp")!;
  const others = services.filter((s) => s.slug !== "timbaos-erp");

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={handshake}
          alt="Business handshake"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={900}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/10" />
        <div className="container-x relative py-24 md:py-32 max-w-3xl">
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-4">
            Welcome to Akarsh Digitals
          </p>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl leading-[1.05] text-primary">
            Empowering Your<br /> Businesses needs<br /> With Akarsh Digitals
          </h1>
          <p className="mt-6 text-lg text-foreground/80 max-w-xl">
            A dynamic subsidiary of Alekas Solutions delivering Cloud, CRM, SAP,
            Digital Marketing, E-Commerce, HR Staffing — and our flagship
            <span className="font-semibold text-primary"> TIMBAOS ERP</span>.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/services/$slug" params={{ slug: "timbaos-erp" }} className="btn-primary">
              <Sparkles className="w-4 h-4 mr-2" /> Explore TIMBAOS ERP
            </Link>
            <Link to="/contact" className="btn-outline">Get in touch</Link>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="py-20">
        <div className="container-x max-w-4xl text-center">
          <h2 className="section-title">Welcome To AKARSH DIGITALS</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            We are proud to be a dynamic subsidiary of Alekas Solutions, dedicated to
            empowering businesses with a comprehensive suite of digital solutions.
            Our commitment to excellence and innovation positions us as a leading force
            in the digital landscape. Akarsh Digitals is your strategic partner in the
            quest for digital excellence — we are more than just a service provider.
            As a division of Alekas Solutions, we carry on a heritage of knowledge and
            a dedication to providing unmatched solutions that promote corporate success.
          </p>
        </div>
      </section>

      {/* Featured: TIMBAOS ERP */}
      <section className="py-16 bg-[var(--soft)]">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl" />
            <img
              src={dashboard}
              alt="TIMBAOS ERP dashboard"
              className="relative rounded-2xl shadow-2xl border"
              width={1400}
              height={900}
              loading="lazy"
            />
          </div>
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-primary text-xs font-bold tracking-wider uppercase">
              <Sparkles className="w-3 h-3" /> Flagship Product · Currently in focus
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl mt-4 text-foreground">
              <span className="text-primary">TIMBAOS – ERP</span><br />
              One platform. Every department.
            </h2>
            <p className="mt-4 text-muted-foreground">
              {timbaos.description}
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-2">
              {timbaos.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> {h}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/services/$slug" params={{ slug: "timbaos-erp" }} className="btn-primary">
                Learn more <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link to="/contact" className="btn-outline">Book a demo</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-primary">
              Why Choose AKARSH DIGITALS?
            </h2>
            <p className="mt-4 font-semibold text-foreground">
              Improved business performance made possible by our multi services provider.
            </p>
            <p className="mt-4 text-muted-foreground">
              Use our managed cloud computing services to embrace the power of cloud
              transformation, CRM services, SAP services, Digital Marketing, E-Commerce
              and HR Staffing. Rethink your future and completely change how you do
              business by taking advantage of our multi-service adaptability.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { Icon: Clock, t: "High Reliability and Uptime" },
              { Icon: ShieldCheck, t: "Top-notch security & Data Security" },
              { Icon: Headphones, t: "24×7 Customer Support" },
              { Icon: Award, t: "Trusted Industry Experts" },
            ].map(({ Icon, t }) => (
              <div key={t} className="rounded-xl p-5 bg-gradient-to-br from-primary to-[var(--primary-deep)] text-white shadow-lg">
                <Icon className="w-7 h-7 mb-3" />
                <p className="font-semibold">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-[var(--soft)]">
        <div className="container-x">
          <h2 className="section-title">What We Do</h2>
          <p className="text-center text-muted-foreground mt-3 max-w-2xl mx-auto">
            End-to-end services from cloud and security to ERP, marketing and staffing.
          </p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group rounded-2xl bg-card border p-6 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-lg grid place-items-center bg-accent text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition">
                  <s.Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-primary">
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-x">
          <div className="rounded-3xl p-10 md:p-14 text-white text-center bg-gradient-to-br from-[var(--primary-deep)] to-primary shadow-xl">
            <h2 className="font-display font-extrabold text-2xl md:text-4xl">
              Transform your business with Cloud, CRM, SAP, Digital Marketing,
              E-Commerce & HR Staffing
            </h2>
            <p className="mt-4 text-white/85 max-w-2xl mx-auto">
              Powered by our flagship TIMBAOS ERP platform.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center mt-8 px-7 py-3 rounded-md bg-white text-primary font-bold hover:bg-white/90">
              Contact Us <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
