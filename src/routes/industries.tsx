import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ArrowRight, Sparkles } from "lucide-react";
import {
  Cpu, HeartPulse, Factory, Clapperboard,
  Landmark, GraduationCap, Building2, Radio, Home,
} from "lucide-react";
import handshake from "@/assets/hero-handshake.jpg";
import dashboard from "@/assets/timbaos-dashboard.jpg";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Akarsh Digitals" },
      { name: "description", content: "Akarsh Digitals delivers cutting-edge digital solutions across IT, Healthcare, Manufacturing, BFSI, Education, Government, Telecom and Real Estate." },
      { property: "og:title", content: "Industries — Akarsh Digitals" },
    ],
  }),
  component: IndustriesPage,
});

const industries = [
  {
    Icon: Cpu,
    title: "IT & ITES",
    img: dashboard,
    desc: "For the IT/ITES sector, we provide a range of services, including software development, cybersecurity solutions, and IT infrastructure management. Our goal is to enable IT companies to stay agile and resilient in a dynamic business environment.",
    tags: ["Software Development", "Cybersecurity", "IT Infrastructure"],
  },
  {
    Icon: HeartPulse,
    title: "Healthcare & Pharmaceuticals",
    img: handshake,
    desc: "We help change your approach to technology, people, and processes, for better business performance and increased value to their consumers. Akarsh Digitals supports the pharmaceutical industry in delivering innovative and safe healthcare solutions.",
    tags: ["Digital Health", "Process Optimization", "Compliance"],
  },
  {
    Icon: Factory,
    title: "Manufacturing",
    img: dashboard,
    desc: "Optimizing manufacturing processes is at the core of what we do. Akarsh Digitals implements smart manufacturing solutions, leveraging automation, IoT, and data analytics to enhance efficiency, reduce costs, and drive innovation.",
    tags: ["Smart Manufacturing", "IoT", "Automation"],
  },
  {
    Icon: Clapperboard,
    title: "Media & Entertainment",
    img: handshake,
    desc: "In the dynamic world of media and entertainment, Akarsh Digitals creates immersive digital experiences. From content management systems to virtual reality applications, we help media companies stay ahead in the digital revolution.",
    tags: ["Content Management", "Virtual Reality", "Digital Media"],
  },
  {
    Icon: Landmark,
    title: "BFSI",
    img: dashboard,
    desc: "In the financial sector, security and efficiency are paramount. Akarsh Digitals provides robust fintech solutions, including online banking platforms, financial analytics, and cybersecurity measures to ensure the highest standards of financial services.",
    tags: ["Fintech", "Online Banking", "Financial Analytics"],
  },
  {
    Icon: GraduationCap,
    title: "Education",
    img: handshake,
    desc: "In the fast-evolving landscape of education, Akarsh Digitals leverages advanced technologies to create immersive learning experiences. From e-learning platforms to virtual classrooms, we empower educational institutions to embrace the future of learning.",
    tags: ["E-Learning", "Virtual Classrooms", "EdTech"],
  },
  {
    Icon: Building2,
    title: "Government",
    img: dashboard,
    desc: "Akarsh Digitals partners with government agencies to drive digital transformation. Our services include e-governance solutions, digital citizen services, and data-driven decision-making tools that enhance government efficiency and transparency.",
    tags: ["E-Governance", "Citizen Services", "Data Analytics"],
  },
  {
    Icon: Radio,
    title: "Telecom",
    img: handshake,
    desc: "Our services help you adopt the latest digital technology solutions to replace obsolete manual processes with automation and vastly more agile technologies such as hybrid cloud.",
    tags: ["Hybrid Cloud", "Automation", "Digital Ops"],
  },
  {
    Icon: Home,
    title: "Real Estate",
    img: dashboard,
    desc: "Digital innovation is reshaping the real estate industry, and Akarsh Digitals is at the forefront. We offer solutions such as virtual property tours, real estate management software, and data analytics to help real estate professionals thrive.",
    tags: ["Virtual Tours", "Property Management", "Data Analytics"],
  },
];

function IndustriesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <PageHero
        title="Making the Difference Across Industry Domains"
        subtitle="We take pride in delivering cutting-edge digital solutions tailored to meet the unique needs of diverse industries — empowering businesses to thrive in the digital age."
        bgImage={handshake}
      />

      {/* ── INTRO ── */}
      <section className="py-14 bg-[var(--soft)] border-b border-border">
        <div className="container-x max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Our Expertise</span>
          <h2 className="mt-2 font-display font-extrabold text-2xl text-[var(--primary-deep)]">Industries We Serve</h2>
          <div className="mx-auto mt-3 w-12 h-1 rounded-full bg-gradient-to-r from-[var(--primary-deep)] to-primary" />
          <p className="mt-5 text-muted-foreground leading-relaxed text-[15px]">
            Our expertise spans across a wide range of sectors, enabling us to provide comprehensive
            services that empower businesses to thrive in the digital age.
          </p>
          {/* industry count strip */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {industries.map(({ Icon, title }) => (
              <span key={title} className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--primary-deep)] bg-accent border border-primary/15 rounded-full px-3 py-1.5">
                <Icon className="w-3.5 h-3.5 text-primary" strokeWidth={1.5} /> {title}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES: alternating split rows ── */}
      <section className="py-16 bg-background">
        <div className="container-x space-y-16">
          {industries.map(({ Icon, title, img, desc, tags }, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={title}
                className={`grid lg:grid-cols-2 gap-10 items-center ${!isEven ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                {/* image card */}
                <div className="relative">
                  <div className="absolute -inset-3 bg-accent/40 rounded-3xl blur-xl" />
                  <div className="relative rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)] group">
                    <div className="h-1 w-full bg-gradient-to-r from-[var(--primary-deep)] to-primary" />
                    <img
                      src={img}
                      alt={title}
                      className="w-full h-[260px] object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* icon badge floating over image */}
                    <div className="absolute top-6 left-5 flex items-center gap-2.5 bg-[var(--primary-deep)]/90 backdrop-blur-sm text-white rounded-xl px-4 py-2.5 shadow-lg">
                      <div className="w-8 h-8 rounded-lg bg-white/15 border border-white/20 grid place-items-center shrink-0">
                        <Icon className="w-4 h-4" strokeWidth={1.5} />
                      </div>
                      <span className="font-bold text-sm">{title}</span>
                    </div>
                    {/* number watermark */}
                    <div className="absolute bottom-3 right-4 text-white/20 font-display font-black text-6xl leading-none select-none pointer-events-none">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                  </div>
                </div>

                {/* content */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl grid place-items-center bg-accent text-primary">
                      <Icon className="w-6 h-6" strokeWidth={1.25} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">Industry</p>
                      <h3 className="font-display font-bold text-xl text-[var(--primary-deep)]">{title}</h3>
                    </div>
                  </div>
                  <div className="w-8 h-0.5 rounded-full bg-primary mb-4" />
                  <p className="text-muted-foreground leading-relaxed text-[15px]">{desc}</p>
                  {/* tags */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary bg-accent border border-primary/20 rounded-full px-3 py-1"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
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
              <div className="text-center lg:text-left">
                <p className="text-xs font-bold uppercase tracking-widest text-white/70 mb-2">Your Industry</p>
                <h2 className="font-display font-extrabold text-2xl md:text-3xl leading-snug">
                  Don't see your industry here?
                </h2>
                <p className="mt-3 text-white/80 text-[15px] max-w-xl leading-relaxed">
                  We work with businesses of all sizes across all sectors. Get in touch and
                  we'll tailor a solution for your unique needs.
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
