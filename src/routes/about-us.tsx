import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import {
  Target, Eye, Users, CheckCircle2, Sparkles,
  Lightbulb, ShieldCheck, Star, Cpu, HeartHandshake,
  Layers, ArrowRight, Globe, Zap, Award,
} from "lucide-react";
import handshake from "@/assets/hero-handshake.jpg";
import dashboard from "@/assets/timbaos-dashboard.jpg";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us — Akarsh Digitals" },
      { name: "description", content: "Akarsh Digitals is a premier IT solutions company, driving digital transformation across multiple industries." },
      { property: "og:title", content: "About Us — Akarsh Digitals" },
    ],
  }),
  component: AboutPage,
});

const coreValuePills = [
  { Icon: HeartHandshake, label: "Client-Centric" },
  { Icon: Lightbulb,      label: "Innovation as a Cornerstone" },
  { Icon: ShieldCheck,    label: "Trust" },
  { Icon: Star,           label: "Excellence as Standard" },
  { Icon: Cpu,            label: "Digital Transformation" },
  { Icon: Layers,         label: "Ethical and Responsible" },
];

const ourValues = [
  {
    Icon: HeartHandshake,
    title: "Customer Focus",
    desc: "We deliver exceptional service and solutions that surpass expectations, highly value customer input, and work collaboratively to discover the optimal solutions. Our aim is to cultivate enduring relationships with our valued customers.",
  },
  {
    Icon: Star,
    title: "Expertise",
    desc: "Our proficiency fuels our achievements. Our adept professionals consistently produce top-notch work and outstanding outcomes, staying abreast of the latest trends, tools, and technologies to offer inventive solutions.",
  },
  {
    Icon: Lightbulb,
    title: "Innovation",
    desc: "We nurture innovation through exploration, a willingness to take risks, and a dedication to creativity. We provide pioneering solutions that keep our clients at the forefront by pushing boundaries and challenging conventional norms.",
  },
  {
    Icon: ShieldCheck,
    title: "Integrity",
    desc: "In every aspect of our work, we uphold the highest standards of integrity, ensuring that we are always accountable, dependable, and trustworthy.",
  },
];

const pillars = [
  { abbr: "SAP", label: "SAP",              Icon: Layers },
  { abbr: "AWS", label: "AWS",              Icon: Globe },
  { abbr: "Az",  label: "Microsoft Azure",  Icon: Zap },
];

function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <PageHero
        title="About AKARSH DIGITALS"
        subtitle="A dynamic subsidiary of Alekas Solutions empowering businesses with a comprehensive suite of digital solutions."
        bgImage={handshake}
      />

      {/* ── OUR STORY: text left · handshake right ── */}
      <section className="py-16 bg-background">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Our Story</span>
            <h2 className="mt-2 font-display font-extrabold text-3xl text-[var(--primary-deep)] leading-snug">
              Who We Are
            </h2>
            <div className="mt-3 w-10 h-1 rounded-full bg-gradient-to-r from-[var(--primary-deep)] to-primary" />
            <p className="mt-5 text-muted-foreground leading-relaxed text-[15px]">
              From networking to corporate architecture and beyond, our professionals
              engage across a wide range of solution domains. No matter your demands or
              industry, you can be sure that as an Alekas partner, you will get the best
              service possible.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                { Icon: HeartHandshake, text: "Client-centric methodology" },
                { Icon: Lightbulb,      text: "Innovation as a cornerstone" },
                { Icon: ShieldCheck,    text: "Trust and excellence as standards" },
                { Icon: Cpu,            text: "Digital transformation commitment" },
                { Icon: Layers,         text: "Ethical and responsible practices" },
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
              <img src={handshake} alt="Akarsh Digitals team" className="w-full h-[320px] object-cover" loading="lazy" />
              {/* floating stat badge */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur rounded-xl px-4 py-3 shadow-lg border border-border">
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary">Trusted By</p>
                <p className="font-display font-extrabold text-xl text-[var(--primary-deep)]">500+ Businesses</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LEADING DIGITAL TRANSFORMATION: text + dashboard ── */}
      <section className="py-14 bg-[var(--soft)] border-y border-border">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">

          {/* dashboard image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-accent/40 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)]">
              <div className="h-1 w-full bg-gradient-to-r from-[var(--primary-deep)] to-primary" />
              <img src={dashboard} alt="Digital Transformation" className="w-full h-[300px] object-cover object-top" loading="lazy" />
              {/* overlay pill */}
              <div className="absolute top-4 right-4 flex items-center gap-2 bg-[var(--primary-deep)]/90 backdrop-blur text-white rounded-full px-3 py-1.5">
                <Globe className="w-3.5 h-3.5" />
                <span className="text-xs font-bold">Pan-India Presence</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Our Reach</span>
            <h2 className="mt-2 font-display font-extrabold text-2xl md:text-3xl text-[var(--primary-deep)] leading-snug">
              Akarsh – Leading Digital Transformation Across Industries
            </h2>
            <div className="mt-3 w-10 h-1 rounded-full bg-gradient-to-r from-[var(--primary-deep)] to-primary" />
            <p className="mt-5 text-muted-foreground leading-relaxed text-[15px]">
              Akarsh is a premier IT solutions company, driving digital transformation across
              multiple industries with cutting-edge technology and innovation. Our expertise spans
              Banking & Financial Services, Healthcare, Manufacturing, Retail, and Media &
              Entertainment, delivering tailored digital solutions that enhance operational
              efficiency, customer experience, and business growth.
            </p>

            {/* pillars */}
            <div className="mt-7">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Our Pillars</p>
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
              Akarsh Digitals is unique because of our client-focused methodology. We take the time
              to fully comprehend your particular difficulties, desires, and objectives.
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
            {/* Vision card — photo bg */}
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-card)] min-h-[260px]">
              <img src={handshake} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-deep)]/90 to-primary/80" />
              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "18px 18px" }}
              />
              <div className="relative p-8 h-full flex flex-col justify-between text-white">
                <div className="w-13 h-13 w-12 h-12 rounded-xl bg-white/15 border border-white/20 grid place-items-center mb-4">
                  <Eye className="w-6 h-6" strokeWidth={1.25} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl mb-3">Our Vision</h3>
                  <p className="text-white/85 leading-relaxed text-[15px]">
                    We are a gathering place for those who are passionate about putting their ideas
                    into action. A setting where people can accept both achievement and loss with
                    grace. A venue where individuals broaden their perspectives and push their own boundaries.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission card — dashboard bg */}
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
                    Our mission is clear — to be a catalyst for your success. We exist to help
                    businesses navigate the complexities of the digital age, providing them with the
                    tools, expertise, and support needed to thrive in an ever-evolving landscape.
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
                {/* photo header with icon overlay */}
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
                {/* body */}
                <p className="p-5 text-sm text-muted-foreground leading-relaxed flex-1">{desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-10 italic">
            These values form the core of who we are and how we operate at AKARSH DIGITALS.
          </p>
        </div>
      </section>

      {/* ── JOIN US CTA ── */}
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
                  <Users className="w-3.5 h-3.5" /> Join Us on Your Digital Journey
                </div>
                <h2 className="font-display font-extrabold text-2xl md:text-3xl leading-snug">
                  AKARSH DIGITALS is more than<br className="hidden md:block" /> a service provider
                </h2>
                <p className="mt-4 text-white/80 text-[15px] leading-relaxed">
                  We're your partner on the road to digital success. Together, we'll navigate the digital
                  landscape, overcome challenges, and seize opportunities. Whether you're a startup with
                  big ambitions, an established enterprise seeking digital transformation, or anywhere in
                  between — AKARSH DIGITALS is here to propel your business forward.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-md bg-white text-[var(--primary-deep)] font-bold text-sm hover:bg-white/90 transition shadow-lg"
                >
                  <Sparkles className="w-4 h-4" /> Contact Us
                </Link>
                <Link
                  to="/services/$slug"
                  params={{ slug: "timbaos-erp" }}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-md border border-white/40 text-white font-semibold text-sm hover:bg-white/10 transition"
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
