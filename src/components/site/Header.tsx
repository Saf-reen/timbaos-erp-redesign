import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone, Mail, Instagram, Linkedin, Facebook, Twitter, Youtube,
  Menu, X, Sparkles, ArrowRight,
} from "lucide-react";
import akarshLogo from "@/assets/akarsh-logo.png";

const navLink =
  "px-3 py-2 text-[15px] font-semibold text-foreground hover:text-primary transition-colors";
const activeProps = { className: `${navLink} text-primary` };

export function Header() {
  const [open, setOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);

  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm">

      {/* ── Announcement bar ── */}
      {bannerVisible && (
        <div className="bg-accent border-b border-primary/20 relative">
          <div className="container-x flex items-center justify-center gap-3 py-2 pr-8">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <p className="text-xs font-semibold text-[var(--primary-deep)] text-center">
              <span className="font-black">Akarsh Digital</span> — Product Engineering & AI Solutions for Modern Businesses.{" "}
              <Link
                to="/contact"
                className="inline-flex items-center gap-1 underline underline-offset-2 font-bold hover:text-primary transition-colors"
              >
                Request a Demo <ArrowRight className="w-3 h-3" />
              </Link>
            </p>
          </div>
          <button
            onClick={() => setBannerVisible(false)}
            aria-label="Dismiss"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-primary/50 hover:text-primary transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Top contact bar */}
      <div className="bg-[var(--primary-deep)] text-white text-sm">
        <div className="container-x flex flex-wrap items-center justify-between gap-2 py-2">
          <div className="flex flex-wrap items-center gap-5">
            <a href="tel:+918919829918" className="flex items-center gap-2 hover:opacity-90">
              <span className="grid place-items-center w-7 h-7 rounded-full bg-white/15">
                <Phone className="w-3.5 h-3.5" />
              </span>
              +91 8919829918
            </a>
            <a href="mailto:info@akarshdigitals.com" className="flex items-center gap-2 hover:opacity-90">
              <span className="grid place-items-center w-7 h-7 rounded-full bg-white/15">
                <Mail className="w-3.5 h-3.5" />
              </span>
              info@akarshdigitals.com
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
        <Link to="/" className="flex items-center">
          <img src={akarshLogo} alt="Akarsh Digitals" className="h-12 w-auto object-contain" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          <Link to="/" className={navLink} activeProps={activeProps}>Home</Link>
          <Link to="/about-us" className={navLink} activeProps={activeProps}>About Us</Link>
          <Link to="/industries" className={navLink} activeProps={activeProps}>Industries</Link>
          <Link to="/blog" className={navLink} activeProps={activeProps}>Blog</Link>
          <Link to="/contact" className={navLink} activeProps={activeProps}>Contact</Link>

          <Link
            to="/contact"
            className="ml-3 btn-primary !py-2 !px-5 text-sm"
          >
            <Sparkles className="w-4 h-4 mr-1.5" />
            Request a Demo
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
            <Link to="/about-us" onClick={() => setOpen(false)} className={navLink}>About Us</Link>
            <Link to="/industries" onClick={() => setOpen(false)} className={navLink}>Industries</Link>
            <Link to="/blog" onClick={() => setOpen(false)} className={navLink}>Blog</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className={navLink}>Contact</Link>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-3"
            >
              <Sparkles className="w-4 h-4 mr-1.5" /> Request a Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
