import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import {
  Phone, Mail, MapPin, Send, Globe,
  Building2, Users, Sparkles,
} from "lucide-react";
import { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps";
import worldTopology from "world-atlas/countries-110m.json";
import handshake from "@/assets/hero-handshake.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Akarsh Digitals" },
      { name: "description", content: "Connect with the Akarsh Digitals team. Offices across Hyderabad, Bangalore, Chennai, Vijayawada, Pune, Mumbai and Kerala." },
      { property: "og:title", content: "Contact — Akarsh Digitals" },
    ],
  }),
  component: ContactPage,
});

const offices = [
  { city: "Hyderabad",  heading: "Hyderabad Hub, Our Team's Heartbeat",               sub: "Nurturing Excellence from Our Hyderabad Hub." },
  { city: "Chennai",    heading: "Empowerment through Chennai Team Unity",             sub: "Where Excellence and Collaboration Converge." },
  { city: "Bangalore",  heading: "Reach Out to Our Bangalore Team Today.",             sub: "Collaboration Knows No Distance." },
  { city: "Vijayawada", heading: "Connecting Made Easy, Contact Our Vijayawada Team.", sub: "Transform Your Business with Precision Tailored Solutions." },
  { city: "Mumbai",     heading: "Elevating together, from Mumbai to beyond",          sub: "Elevate Your Business with Customized Solutions Now." },
  { city: "Pune",       heading: "Get in Touch with Our Pune-Based Experts.",          sub: "Unlock Success with Tailored Business Solutions." },
  { city: "Kerala",     heading: "Leveraging Cloud Services to Connect with Our Kerala Team.", sub: "Elevate Your Business with Customized Solutions Now." },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      {/* ── HERO ── */}
      <PageHero
        title="Connect With AKARSH DIGITALS"
        subtitle="Wherever you are, we bring world-class digital solutions to you. Reach out to our team today."
        bgImage={handshake}
      />

      {/* ── CONTACT INFO + FORM ── */}
      <section className="py-16 bg-background">
        <div className="container-x grid lg:grid-cols-3 gap-10">

          {/* Left — info */}
          <div className="space-y-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Reach Us</span>
              <h2 className="mt-2 font-display font-bold text-2xl text-[var(--primary-deep)]">Contact Us</h2>
              <div className="mt-3 w-8 h-1 rounded-full bg-gradient-to-r from-[var(--primary-deep)] to-primary" />
            </div>

            {[
              { Icon: Phone,  label: "Phone",    value: "+91 89198 29918",          href: "tel:+918919829918" },
              { Icon: Mail,   label: "Email",    value: "info@akarshdigitals.com",  href: "mailto:info@akarshdigitals.com" },
              { Icon: MapPin, label: "Location", value: "Hyderabad, Bangalore, Chennai, Vijayawada, Pune, Mumbai, Kerala" },
            ].map(({ Icon, label, value, href }) => (
              <div key={label} className="flex gap-4 items-start rounded-xl border border-border bg-[var(--soft)] px-4 py-4">
                <div className="w-10 h-10 rounded-lg grid place-items-center bg-gradient-to-br from-[var(--primary-deep)] to-primary text-white shrink-0">
                  <Icon className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-0.5">{label}</p>
                  {href
                    ? <a href={href} className="text-sm text-foreground hover:text-primary transition-colors">{value}</a>
                    : <p className="text-sm text-foreground leading-relaxed">{value}</p>
                  }
                </div>
              </div>
            ))}

            {/* global presence pill strip */}
            <div className="rounded-xl border border-border bg-[var(--soft)] px-4 py-4">
              <div className="flex items-center gap-2 mb-3">
                <Globe className="w-4 h-4 text-primary" />
                <p className="text-xs font-bold uppercase tracking-widest text-primary">Our Offices</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {offices.map(({ city }) => (
                  <span key={city} className="text-xs font-semibold text-[var(--primary-deep)] bg-accent border border-primary/15 rounded-full px-3 py-1">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <form
            className="lg:col-span-2 rounded-2xl border border-border bg-card p-7 grid gap-4 sm:grid-cols-2 shadow-sm"
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          >
            <div className="sm:col-span-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Get In Touch</span>
              <h3 className="mt-1 font-display font-bold text-xl text-[var(--primary-deep)]">Send Us a Message</h3>
              <div className="mt-2 w-8 h-1 rounded-full bg-gradient-to-r from-[var(--primary-deep)] to-primary" />
            </div>
            <Field label="Name *"    name="name"    required />
            <Field label="Email *"   name="email"   type="email" required />
            <Field label="Number *"  name="phone"   required />
            <Field label="Subject"   name="subject" />
            <div className="sm:col-span-2">
              <label className="text-xs font-bold uppercase tracking-widest text-foreground">Write Message *</label>
              <textarea
                required rows={4}
                className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
              />
            </div>
            <div className="sm:col-span-2 flex items-center gap-4">
              <button type="submit" className="btn-primary">
                <Send className="w-4 h-4 mr-2" /> Send Message
              </button>
              {sent && <span className="text-sm text-primary font-semibold">Thanks — we'll be in touch soon.</span>}
            </div>
          </form>
        </div>
      </section>

      {/* ── MAP + GLOBAL PRESENCE HEADER ── */}
      <section className="py-14 bg-[var(--soft)] border-y border-border">
        <div className="container-x">

          {/* section header */}
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Worldwide</span>
            <h2 className="mt-2 font-display font-extrabold text-2xl text-[var(--primary-deep)]">
              AKARSH DIGITALS World Wide
            </h2>
            <div className="mx-auto mt-3 w-12 h-1 rounded-full bg-gradient-to-r from-[var(--primary-deep)] to-primary" />
            <p className="mt-4 text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Our Global Office Presence — Explore a range of locations and connect with our worldwide team of specialists.
            </p>
          </div>

          {/* SVG India map */}
          <IndiaOfficeMap />
        </div>
      </section>

      {/* ── OFFICE CARDS ── */}
      <section className="py-16 bg-background">
        <div className="container-x">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Our Locations</span>
            <h2 className="mt-2 font-display font-extrabold text-2xl text-[var(--primary-deep)]">AKARSH DIGITALS Global Centers</h2>
            <div className="mx-auto mt-3 w-12 h-1 rounded-full bg-gradient-to-r from-[var(--primary-deep)] to-primary" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {offices.map(({ city, heading, sub }, idx) => (
              <div
                key={city}
                className="group relative rounded-2xl overflow-hidden border border-border bg-card hover:shadow-[var(--shadow-card)] hover:-translate-y-1 transition-all"
              >
                {/* top accent bar */}
                <div className="h-1 w-full bg-gradient-to-r from-[var(--primary-deep)] to-primary" />

                <div className="p-5">
                  {/* city badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl grid place-items-center bg-accent text-primary group-hover:bg-gradient-to-br group-hover:from-[var(--primary-deep)] group-hover:to-primary group-hover:text-white transition-all shrink-0">
                      <Building2 className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-primary">Office</p>
                      <p className="font-display font-bold text-[15px] text-[var(--primary-deep)]">{city}</p>
                    </div>
                  </div>

                  <h3 className="text-[13px] font-bold text-foreground leading-snug">{heading}</h3>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{sub}</p>

                  {/* number watermark */}
                  <p className="absolute bottom-3 right-4 text-5xl font-black text-border/30 leading-none select-none pointer-events-none">
                    {String(idx + 1).padStart(2, "0")}
                  </p>
                </div>
              </div>
            ))}

            {/* 8th — global card */}
            <div className="relative rounded-2xl overflow-hidden border border-border bg-gradient-to-br from-[var(--primary-deep)] to-primary text-white hover:shadow-[var(--shadow-card)] hover:-translate-y-1 transition-all">
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "18px 18px" }}
              />
              <div className="relative p-5 flex flex-col justify-between h-full gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/20 grid place-items-center">
                  <Globe className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-bold text-[15px] leading-snug">Experience Global Cloud Services with AKARSH DIGITALS</h3>
                  <p className="mt-2 text-white/75 text-xs leading-relaxed">Wherever You Are, We Bring Cloud Services to You.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
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
                  <Users className="w-3.5 h-3.5" /> Our Team is Ready
                </div>
                <h2 className="font-display font-extrabold text-2xl md:text-3xl leading-snug">
                  Let's Build Something Great Together
                </h2>
                <p className="mt-2 text-white/75 text-sm max-w-lg leading-relaxed">
                  Whether you're exploring TIMBAOS ERP or need a tailored digital solution — our experts are one call away.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a
                  href="tel:+918919829918"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-white text-[var(--primary-deep)] font-bold text-sm hover:bg-white/90 transition shadow-lg"
                >
                  <Phone className="w-4 h-4" /> Call Now
                </a>
                <a
                  href="mailto:info@akarshdigitals.com"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-white/40 text-white font-semibold text-sm hover:bg-white/10 transition"
                >
                  <Sparkles className="w-4 h-4" /> Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const globalMarkers = [
  {
    name: "India",
    flag: "🇮🇳",
    sub: "7 Offices",
    coordinates: [78.9629, 22.5] as [number, number],
    labelOffset: [10, -18] as [number, number],
  },
  {
    name: "Singapore",
    flag: "🇸🇬",
    sub: "Regional HQ",
    coordinates: [103.8198, 1.3521] as [number, number],
    labelOffset: [10, -18] as [number, number],
  },
  {
    name: "USA",
    flag: "🇺🇸",
    sub: "North America",
    coordinates: [-99.9018, 41.5] as [number, number],
    labelOffset: [10, -18] as [number, number],
  },
  {
    name: "Saudi Arabia",
    flag: "🇸🇦",
    sub: "Middle East",
    coordinates: [45.0792, 24.0] as [number, number],
    labelOffset: [-10, -18] as [number, number],
  },
];

function IndiaOfficeMap() {
  const [pos, setPos] = useState<{ coordinates: [number, number]; zoom: number }>({
    coordinates: [20, 10],
    zoom: 1,
  });

  const zoomIn  = () => setPos(p => ({ ...p, zoom: Math.min(p.zoom * 1.6, 12) }));
  const zoomOut = () => setPos(p => ({ ...p, zoom: Math.max(p.zoom / 1.6, 1) }));
  const reset   = () => setPos({ coordinates: [20, 10], zoom: 1 });

  /* scale markers so they stay the same visual size when zoomed */
  const ms = 1 / pos.zoom;

  return (
    <div className="rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)]">
      <div className="h-1 w-full bg-gradient-to-r from-[var(--primary-deep)] to-primary" />
      <div className="bg-[#0d1526] relative select-none">

        {/* zoom controls */}
        <div className="absolute top-3 right-3 z-10 flex flex-col gap-1">
          {[
            { label: "+", action: zoomIn,  title: "Zoom in"  },
            { label: "−", action: zoomOut, title: "Zoom out" },
            { label: "⟳", action: reset,   title: "Reset"    },
          ].map(({ label, action, title }) => (
            <button
              key={label}
              onClick={action}
              title={title}
              className="w-8 h-8 rounded-md bg-white/10 hover:bg-primary/60 active:bg-primary/80 text-white font-bold text-base flex items-center justify-center transition border border-white/15"
            >
              {label}
            </button>
          ))}
        </div>

        {/* hint */}
        <div className="absolute bottom-12 left-4 z-10">
          <span className="text-[9px] text-white/20 uppercase tracking-widest">Drag to pan · Scroll to zoom</span>
        </div>

        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 130, center: [20, 10] }}
          style={{ width: "100%", height: "auto", display: "block", cursor: "grab" }}
          viewBox="0 0 800 440"
        >
          <defs>
            {/* dot pattern that fills each country */}
            <pattern id="cDots" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse">
              <circle cx="2.5" cy="2.5" r="1.35" fill="rgba(148,163,184,0.50)" />
            </pattern>
            {/* subtle glow filter for markers */}
            <filter id="mGlow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="3" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          <ZoomableGroup
            zoom={pos.zoom}
            center={pos.coordinates}
            onMoveEnd={(p) => setPos(p as { coordinates: [number, number]; zoom: number })}
            filterZoomEvent={(e) => {
              /* allow mouse-wheel zoom, block touch-scroll */
              if (e instanceof WheelEvent) return true;
              return false;
            }}
          >
            {/* dotted continent fill */}
            <Geographies geography={worldTopology}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: { fill: "url(#cDots)",  stroke: "rgba(100,116,139,0.15)", strokeWidth: 0.3, outline: "none" },
                      hover:   { fill: "rgba(184,0,0,0.22)", stroke: "rgba(184,0,0,0.35)", strokeWidth: 0.4, outline: "none" },
                      pressed: { fill: "rgba(184,0,0,0.28)", outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>

            {/* location markers */}
            {globalMarkers.map((marker, idx) => (
              <Marker key={marker.name} coordinates={marker.coordinates}>
                <g filter="url(#mGlow)">
                  {/* pulse ring */}
                  <circle r={14 * ms} fill="none" stroke="#b80000" strokeWidth={1.2 * ms} opacity="0.6">
                    <animate
                      attributeName="r"
                      values={`${6 * ms};${18 * ms};${6 * ms}`}
                      dur={`${2.2 + idx * 0.35}s`}
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.6;0;0.6"
                      dur={`${2.2 + idx * 0.35}s`}
                      repeatCount="indefinite"
                    />
                  </circle>

                  {/* outer halo */}
                  <circle r={8 * ms} fill="rgba(184,0,0,0.25)" />
                  {/* main dot */}
                  <circle r={5.5 * ms} fill="#b80000" />
                  {/* inner bright core */}
                  <circle r={2.2 * ms} fill="#ff6666" />
                </g>

                {/* label — floats above dot, scales with zoom */}
                <g transform={`translate(0, ${-14 * ms})`}>
                  <rect
                    x={-(marker.name.length * 3.8 * ms)}
                    y={-9 * ms}
                    width={marker.name.length * 7.5 * ms}
                    height={16 * ms}
                    rx={3 * ms}
                    fill="rgba(13,21,38,0.85)"
                    stroke="rgba(184,0,0,0.4)"
                    strokeWidth={0.7 * ms}
                  />
                  <text
                    textAnchor="middle"
                    y={2 * ms}
                    fontSize={8 * ms}
                    fontWeight="700"
                    fill="white"
                    fontFamily="system-ui, sans-serif"
                    style={{ pointerEvents: "none" }}
                  >
                    {marker.flag} {marker.name}
                  </text>
                </g>
              </Marker>
            ))}
          </ZoomableGroup>
        </ComposableMap>

        {/* legend bar */}
        <div className="px-5 py-3 border-t border-white/[0.07] flex flex-wrap gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-5">
            {globalMarkers.map((m) => (
              <div key={m.name} className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-primary block shrink-0" />
                <span className="text-[11px] font-bold text-white/55 uppercase tracking-wider">
                  {m.flag} {m.name}
                </span>
              </div>
            ))}
          </div>
          <span className="text-[9px] text-white/20 font-semibold tracking-widest uppercase">4 Countries · Global Presence</span>
        </div>
      </div>
    </div>
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
