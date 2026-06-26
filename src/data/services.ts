import { Cpu, Scale } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  Icon: typeof Cpu;
  highlights: string[];
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "timbaos-erp",
    title: "Enterprise ERP Platform",
    short:
      "A unified business management platform bringing finance, inventory, customer management, support operations, and business intelligence into a single ecosystem.",
    description:
      "The Enterprise ERP Platform enables organizations to manage critical business operations through a centralized and intelligent management system. From GST-compliant invoicing and financial reporting to CRM, warehouse management, asset tracking, and AI-powered insights — everything your business needs in one place.",
    Icon: Cpu,
    highlights: [
      "Accounting & Finance — GST-compliant invoicing, financial reporting, payment tracking, tax management",
      "CRM & Customer Management — lead management, opportunity tracking, customer database, sales monitoring",
      "Warehouse Management — inventory tracking, stock monitoring, multi-warehouse support",
      "Asset Management — asset allocation, tracking, maintenance monitoring, and asset reports",
      "Ticketing & Support Management — ticket creation, assignment, escalation, SLA monitoring",
      "Sales Pipeline Management — pipeline visibility, revenue forecasting, opportunity management",
      "AI-Powered Insights — business analytics, smart reporting, performance insights, workflow automation",
    ],
    featured: true,
  },
  {
    slug: "elaw-erp",
    title: "E-Law ERP",
    short:
      "A modern legal practice management solution designed to help legal professionals manage cases, clients, documents, schedules, and billing efficiently.",
    description:
      "E-Law ERP is a comprehensive legal practice management platform designed for advocates, legal consultants, law firms, and corporate legal teams. It digitizes legal workflows end-to-end — from case tracking and client management to document storage, hearing schedules, billing, and team collaboration.",
    Icon: Scale,
    highlights: [
      "Case Management — track legal matters, case progress, hearings, and important milestones",
      "Client Management — maintain complete client records and communication history",
      "Legal Document Management — store, organize, and retrieve legal documents securely",
      "Hearing & Schedule Management — manage hearings, appointments, and legal calendars efficiently",
      "Billing & Invoicing — track fees, invoices, payments, and financial performance",
      "Team Collaboration — enable coordination between advocates, associates, and support teams",
      "Reports & Analytics — gain visibility into workload, performance, and case progress",
    ],
    featured: true,
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
