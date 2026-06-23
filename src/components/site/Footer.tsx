import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook, Twitter, Youtube } from "lucide-react";
import { services } from "@/data/services";

export function Footer() {
  return (
    <footer className="mt-20 bg-[var(--primary-deep)] text-white/90">
      <div className="container-x py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="grid place-items-center w-11 h-11 rounded-md bg-white text-primary font-display font-black text-xl">A</div>
            <div className="leading-tight">
              <div className="font-display font-extrabold text-lg text-white">AKARSH</div>
              <div className="text-[10px] tracking-[0.2em] text-white/70">DIGITALS PVT LTD</div>
            </div>
          </div>
          <p className="text-sm text-white/75 leading-relaxed">
            A dynamic subsidiary of Alekas Solutions empowering businesses with a
            comprehensive suite of digital solutions — and the home of TIMBAOS ERP.
          </p>
          <div className="flex gap-2 mt-5">
            {[Instagram, Linkedin, Facebook, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="grid place-items-center w-9 h-9 rounded-md bg-white/10 hover:bg-white/25 transition">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about-us" className="hover:text-white">About Us</Link></li>
            <li><Link to="/industries" className="hover:text-white">Industries</Link></li>
            <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Get in touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /> Hyderabad, Telangana, India</li>
            <li className="flex gap-3"><Phone className="w-4 h-4 mt-0.5 shrink-0" /> +91 90000 00000</li>
            <li className="flex gap-3"><Mail className="w-4 h-4 mt-0.5 shrink-0" /> hello@akarshdigitals.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-5 text-xs text-white/60 flex flex-wrap justify-between gap-2">
          <p>© {new Date().getFullYear()} Akarsh Digitals Pvt Ltd. All rights reserved.</p>
          <p>Crafted with care · TIMBAOS ERP</p>
        </div>
      </div>
    </footer>
  );
}
