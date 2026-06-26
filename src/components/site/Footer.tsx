import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook, Twitter, Youtube, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import akarshLogo from "@/assets/akarsh-logo.png";

const footerServices = [
  { label: "Enterprise ERP Platform", slug: "timbaos-erp" },
  { label: "E-Law ERP", slug: "elaw-erp" },
];

export function Footer() {
  return (
    <footer className="mt-20 bg-[var(--primary-deep)] text-white/90">

      {/* ── Product spotlight strip ── */}
      <div className="border-b border-white/10 bg-white/5">
        <div className="container-x py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 grid place-items-center shrink-0">
              <Sparkles className="w-6 h-6 text-white" strokeWidth={1.25} />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/50 mb-0.5">Our Products</p>
              <h3 className="font-display font-extrabold text-xl text-white">Enterprise ERP & E-Law ERP</h3>
              <p className="text-sm text-white/65 mt-0.5">Intelligent software products for modern businesses.</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            {["Finance & Accounts", "CRM", "Warehouse", "Asset Management", "Legal Practice"].map((m) => (
              <span key={m} className="flex items-center gap-1.5 text-xs text-white/60">
                <CheckCircle2 className="w-3.5 h-3.5 text-white/40 shrink-0" /> {m}
              </span>
            ))}
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-[var(--primary-deep)] font-bold text-sm hover:bg-white/90 transition shadow-md shrink-0"
          >
            Request a Demo <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="container-x py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="mb-4">
            <img
              src={akarshLogo}
              alt="Akarsh Digitals"
              className="h-12 w-auto object-contain brightness-0 invert"
            />
          </div>
          <p className="text-sm text-white/75 leading-relaxed">
            Akarsh Digital is a Product Engineering & AI Solutions Company developing intelligent software products that help organizations automate operations, improve efficiency, and accelerate growth.
          </p>
          <div className="flex gap-2 mt-5">
            {[Instagram, Linkedin, Facebook, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="grid place-items-center w-9 h-9 rounded-md bg-white/10 hover:bg-white/25 transition"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about-us" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/industries" className="hover:text-white transition-colors">Industries</Link></li>
            <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-bold mb-4">Products</h4>
          <ul className="space-y-2 text-sm">
            {footerServices.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="hover:text-white transition-colors"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* More Info */}
        <div>
          <h4 className="text-white font-bold mb-4">More Info</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3 items-start">
              <Phone className="w-4 h-4 mt-0.5 shrink-0" />
              <a href="tel:+918919829918" className="hover:text-white transition-colors">
                +91 8919829918
              </a>
            </li>
            <li className="flex gap-3 items-start">
              <Mail className="w-4 h-4 mt-0.5 shrink-0" />
              <a href="mailto:info@akarshdigitals.com" className="hover:text-white transition-colors">
                info@akarshdigitals.com
              </a>
            </li>
            <li className="flex gap-3 items-start">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              HITEC City, Hyderabad
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-5 text-xs text-white/60 flex flex-wrap justify-between gap-2">
          <p>© 2025 Akarsh Digitals Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
