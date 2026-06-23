import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone, Mail, Instagram, Linkedin, Facebook, Twitter, Youtube,
  ChevronDown, Menu, X, Sparkles,
} from "lucide-react";
import { services } from "@/data/services";

const navLink =
  "px-3 py-2 text-[15px] font-semibold text-foreground hover:text-primary transition-colors";
const activeProps = { className: `${navLink} text-primary` };

export function Header() {
  const [open, setOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      {/* Top contact bar */}
      <div className="bg-[var(--primary-deep)] text-white text-sm">
        <div className="container-x flex flex-wrap items-center justify-between gap-2 py-2">
          <div className="flex flex-wrap items-center gap-5">
            <a href="tel:+919000000000" className="flex items-center gap-2 hover:opacity-90">
              <span className="grid place-items-center w-7 h-7 rounded-full bg-white/15">
                <Phone className="w-3.5 h-3.5" />
              </span>
              +91 90000 00000
            </a>
            <a href="mailto:hello@akarshdigitals.com" className="flex items-center gap-2 hover:opacity-90">
              <span className="grid place-items-center w-7 h-7 rounded-full bg-white/15">
                <Mail className="w-3.5 h-3.5" />
              </span>
              hello@akarshdigitals.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            {[Instagram, Linkedin, Facebook, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" aria-label="social"
                className="grid place-items-center w-7 h-7 rounded-md bg-white/15 hover:bg-white/30 transition">
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-x flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3">
          <div className="grid place-items-center w-12 h-12 rounded-md bg-gradient-to-br from-[var(--primary-deep)] to-primary text-white">
            <span className="font-display font-black text-xl">A</span>
          </div>
          <div className="leading-tight">
            <div className="font-display font-extrabold text-xl text-primary tracking-tight">
              AKARSH
            </div>
            <div className="text-[11px] tracking-[0.18em] text-muted-foreground font-semibold">
              DIGITALS PVT LTD
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          <Link to="/" className={navLink} activeProps={activeProps}>Home</Link>

          {/* Services dropdown */}
          <div className="relative group">
            <button className={`${navLink} flex items-center gap-1`}>
              Services <ChevronDown className="w-4 h-4" />
            </button>
            <div className="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[300px]">
              <div className="rounded-lg border bg-popover shadow-xl overflow-hidden">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className={`flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-accent ${
                      s.featured ? "bg-accent/60" : ""
                    }`}
                  >
                    <s.Icon className="w-4 h-4 text-primary shrink-0" />
                    <span className="font-medium">{s.title}</span>
                    {s.featured && (
                      <span className="ml-auto inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                        <Sparkles className="w-3 h-3" /> New
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/about-us" className={navLink} activeProps={activeProps}>About Us</Link>
          <Link to="/industries" className={navLink} activeProps={activeProps}>Industries</Link>
          <Link to="/blog" className={navLink} activeProps={activeProps}>Blog</Link>
          <Link to="/contact" className={navLink} activeProps={activeProps}>Contact</Link>

          <Link
            to="/services/$slug"
            params={{ slug: "timbaos-erp" }}
            className="ml-2 btn-primary !py-2 !px-4 text-sm"
          >
            <Sparkles className="w-4 h-4 mr-1.5" />
            TIMBAOS – ERP
          </Link>
        </nav>

        <button
          className="lg:hidden p-2 text-primary"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t bg-background">
          <div className="container-x py-3 flex flex-col">
            <Link to="/" onClick={() => setOpen(false)} className={navLink}>Home</Link>
            <button
              className={`${navLink} flex items-center justify-between`}
              onClick={() => setMobileServices((v) => !v)}
            >
              Services <ChevronDown className={`w-4 h-4 transition ${mobileServices ? "rotate-180" : ""}`} />
            </button>
            {mobileServices && (
              <div className="pl-3 flex flex-col">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    onClick={() => setOpen(false)}
                    className={`py-2 text-sm font-medium flex items-center gap-2 ${
                      s.featured ? "text-primary" : "text-foreground"
                    }`}
                  >
                    <s.Icon className="w-4 h-4" /> {s.title}
                  </Link>
                ))}
              </div>
            )}
            <Link to="/about-us" onClick={() => setOpen(false)} className={navLink}>About Us</Link>
            <Link to="/industries" onClick={() => setOpen(false)} className={navLink}>Industries</Link>
            <Link to="/blog" onClick={() => setOpen(false)} className={navLink}>Blog</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className={navLink}>Contact</Link>
            <Link
              to="/services/$slug"
              params={{ slug: "timbaos-erp" }}
              onClick={() => setOpen(false)}
              className="btn-primary mt-3"
            >
              <Sparkles className="w-4 h-4 mr-1.5" /> TIMBAOS – ERP
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
