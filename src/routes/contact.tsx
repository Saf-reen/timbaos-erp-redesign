import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Akarsh Digitals" },
      { name: "description", content: "Connect with the Akarsh Digitals team for ERP, cloud, CRM, SAP, marketing and HR staffing." },
      { property: "og:title", content: "Contact — Akarsh Digitals" },
      { property: "og:description", content: "Connect with our team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero title="Connect With Our Team" subtitle="Tell us about your project — we'll get back within 1 business day." />
      <section className="py-16">
        <div className="container-x grid lg:grid-cols-3 gap-10">
          <div className="space-y-6">
            {[
              { Icon: Phone, t: "Phone", v: "+91 90000 00000" },
              { Icon: Mail, t: "Email", v: "hello@akarshdigitals.com" },
              { Icon: MapPin, t: "Address", v: "Hyderabad, Telangana, India" },
            ].map(({ Icon, t, v }) => (
              <div key={t} className="flex gap-4">
                <div className="w-12 h-12 rounded-lg grid place-items-center bg-accent text-primary shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold">{t}</h4>
                  <p className="text-sm text-muted-foreground">{v}</p>
                </div>
              </div>
            ))}
          </div>

          <form
            className="lg:col-span-2 rounded-2xl border bg-card p-8 grid gap-4 sm:grid-cols-2"
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          >
            <Field label="Name *" name="name" required />
            <Field label="Email *" name="email" type="email" required />
            <Field label="Number *" name="phone" required />
            <Field label="Subject" name="subject" />
            <div className="sm:col-span-2">
              <label className="text-sm font-semibold text-foreground">Write Message *</label>
              <textarea
                required rows={5}
                className="mt-1.5 w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="sm:col-span-2 flex items-center gap-4">
              <button type="submit" className="btn-primary">
                <Send className="w-4 h-4 mr-2" /> Send message
              </button>
              {sent && <span className="text-sm text-primary font-semibold">Thanks — we'll be in touch.</span>}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-semibold text-foreground">{label}</label>
      <input
        name={name} type={type} required={required}
        className="mt-1.5 w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
