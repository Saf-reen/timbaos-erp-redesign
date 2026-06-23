import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import {
  Factory, ShoppingBag, HeartPulse, Landmark, GraduationCap,
  Truck, Building2, Plane, Cpu, Wheat,
} from "lucide-react";

const industries = [
  { Icon: Factory, t: "Manufacturing", d: "BOM, production planning, shop floor & quality." },
  { Icon: ShoppingBag, t: "Retail & E-Commerce", d: "Omnichannel POS, inventory and marketplaces." },
  { Icon: HeartPulse, t: "Healthcare", d: "Clinics, pharma, diagnostics and HMS solutions." },
  { Icon: Landmark, t: "BFSI", d: "Compliance-ready solutions for finance and insurance." },
  { Icon: GraduationCap, t: "Education", d: "Campus ERP, LMS and digital marketing for institutes." },
  { Icon: Truck, t: "Logistics", d: "Fleet, warehousing and last-mile operations." },
  { Icon: Building2, t: "Real Estate", d: "CRM, projects, vendor and finance management." },
  { Icon: Plane, t: "Travel & Hospitality", d: "Booking, CRM and revenue management." },
  { Icon: Cpu, t: "IT & SaaS", d: "Cloud, DevOps, CRM and ERP for tech companies." },
  { Icon: Wheat, t: "Agritech", d: "Supply chain and rural distribution platforms." },
];

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Akarsh Digitals" },
      { name: "description", content: "Industries we serve — Manufacturing, Retail, Healthcare, BFSI, Education, Logistics and more." },
      { property: "og:title", content: "Industries — Akarsh Digitals" },
      { property: "og:description", content: "Industries we serve at Akarsh Digitals." },
    ],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <PageHero
        title="Industries we serve"
        subtitle="Deep expertise across regulated, operations-heavy and consumer industries — powered by TIMBAOS ERP."
      />
      <section className="py-16">
        <div className="container-x grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map(({ Icon, t, d }) => (
            <div key={t} className="rounded-2xl border p-6 bg-card hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-lg grid place-items-center bg-accent text-primary mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
