import {
  Cloud, ShieldCheck, Users, Database, Megaphone, ShoppingCart,
  Scale, Sparkles, Briefcase, Cpu,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  Icon: typeof Cloud;
  highlights: string[];
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "timbaos-erp",
    title: "TIMBAOS - ERP",
    short:
      "Our flagship ERP platform unifying Finance, HR, Inventory, CRM, Manufacturing and more on a single source of truth.",
    description:
      "TIMBAOS ERP is Akarsh Digitals' flagship enterprise platform — a single source of truth that connects every department: finance, people, inventory, customers, manufacturing and operations. Built for ambitious Indian businesses that refuse to compromise on speed, control or scale.",
    Icon: Cpu,
    highlights: [
      "Finance, GST & Compliance built-in",
      "HR, Payroll & Attendance",
      "Inventory, Warehousing & Procurement",
      "CRM, Sales pipeline & Quotations",
      "Manufacturing, BOM & Production planning",
      "Real-time dashboards & role-based access",
    ],
    featured: true,
  },
  {
    slug: "cloud-services",
    title: "Cloud Services",
    short: "AWS, Azure, GCP and IBM Cloud — we design, migrate and manage cloud workloads end-to-end.",
    description:
      "The cloud computing revolution is being led by our cloud services. Cloud computing, also known as \"the cloud,\" denotes a revolutionary change in how organizations and individuals organize, use, and process data and applications. We help you migrate, optimise and secure workloads across AWS, Azure, GCP and IBM Cloud.",
    Icon: Cloud,
    highlights: [
      "Cloud strategy & migration",
      "Managed AWS / Azure / GCP",
      "Cost optimisation",
      "DevOps & CI/CD",
    ],
  },
  {
    slug: "cyber-security",
    title: "Cyber Security",
    short: "Protect digital systems, networks and data from cyberattacks, breaches and unauthorised access.",
    description:
      "Cybersecurity is the practice of protecting digital systems, networks, and data from a multitude of cyber threats, including cyberattacks, data breaches, and unauthorized access. Our team assesses risks, hardens infrastructure and monitors threats 24×7 so your business stays resilient.",
    Icon: ShieldCheck,
    highlights: [
      "VAPT & security audits",
      "SOC & threat monitoring",
      "Identity & access management",
      "Compliance — ISO 27001, SOC 2",
    ],
  },
  {
    slug: "crm-services",
    title: "CRM Services",
    short: "Improve lead conversion, unify customer data and boost sales with world-class CRM consulting.",
    description:
      "Improve lead conversations, unify customer data and boost sales rates with world-class CRM Consulting from Customer Relationship experts at Akarsh Digitals. We implement and customise Salesforce, Zoho, HubSpot and Microsoft Dynamics.",
    Icon: Users,
    highlights: [
      "Salesforce / Zoho / HubSpot implementation",
      "Sales & marketing automation",
      "Customer 360 dashboards",
      "Integrations with ERP, telephony, WhatsApp",
    ],
  },
  {
    slug: "sap-services",
    title: "SAP Services",
    short: "Modern SAP platforms, implementation, migration and support across S/4HANA and SuccessFactors.",
    description:
      "We offer an extensive range of SAP services, solutions, and modern platforms. Together, we help our clients use SAP's modern technologies to simplify and rationalise their business solution landscape so they can quickly adapt to shifting business conditions.",
    Icon: Database,
    highlights: [
      "S/4HANA implementation & migration",
      "SAP FICO, MM, SD, PP, HCM",
      "SuccessFactors & Ariba",
      "Application managed services",
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    short: "SEO, performance marketing, social and content — making your business stand out online.",
    description:
      "Making your business stand out: In our changing world digital marketing is essential. Our relationship with our clients claimed the expectations have evolved. Akarsh Digitals aims at adding value to the clients, not just through expertise, but through innovation, processes & people.",
    Icon: Megaphone,
    highlights: [
      "SEO & content marketing",
      "Google & Meta Ads",
      "Social media management",
      "Email & WhatsApp marketing",
    ],
  },
  {
    slug: "e-commerce",
    title: "E-Commerce",
    short: "eCommerce strategy, storefront design and platform engineering on Shopify, Magento and custom stacks.",
    description:
      "eCommerce business is on the rise globally. Several companies have seen its growth from the sidelines, wondering if an online business strategy is right for their business. Akarsh Digitals eCommerce Development Services is the answer to this very question.",
    Icon: ShoppingCart,
    highlights: [
      "Shopify / Magento / WooCommerce",
      "Headless commerce",
      "Marketplace integrations",
      "Payment & logistics setup",
    ],
  },
  {
    slug: "governance-risk-compliance",
    title: "Governance, Risk & Compliance",
    short: "Operate securely and responsibly in the cloud — GRC for modern, regulated businesses.",
    description:
      "In the realm of cloud services, Governance Risk Compliance takes on a crucial role in ensuring that organizations operate securely, responsibly, and in compliance with industry regulations and standards. This approach integrates governance, risk management, and compliance practices specific to cloud environments.",
    Icon: Scale,
    highlights: [
      "Cloud governance frameworks",
      "Risk assessments",
      "Policy & control design",
      "Audit readiness",
    ],
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation",
    short: "Reshape how your business operates and delivers value — a profound shift in mindset and operations.",
    description:
      "Digital transformation is a strategic, organization-wide process that leverages digital technologies to reshape how businesses operate, deliver value to customers, and stay competitive in today's digital-first world. It's not merely about adopting new technologies; it's a profound shift in mindset and operations.",
    Icon: Sparkles,
    highlights: [
      "Process automation",
      "Data & analytics platforms",
      "Legacy modernisation",
      "Change management",
    ],
  },
  {
    slug: "hr-staffing",
    title: "HR Staffing",
    short: "Skilled professionals, executives and specialised experts matched to your business.",
    description:
      "No matter what kind of expert you're looking for — skilled professionals, executives, or specialized experts — our committed staff uses its in-depth knowledge of the market and extensive network to match you with the most qualified applicants. We streamline your hiring procedure to make sure you not only attract high calibered professionals but also retain and develop them for sustained success.",
    Icon: Briefcase,
    highlights: [
      "Permanent & contract staffing",
      "Executive search",
      "IT & SAP niche hiring",
      "Payroll & compliance",
    ],
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
