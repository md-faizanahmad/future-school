// src/components/sections/QuickLinks.tsx
import { Calendar, Users, Utensils, CreditCard, Contact2 } from "lucide-react";
import { QuickLinksClient } from "./QuickLinksClient";

export interface LinkItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
}

export default function QuickLinks() {
  const links: LinkItem[] = [
    {
      id: "cal",
      label: "District Calendar",
      icon: <Calendar size={20} />,
      href: "/calendar",
    },
    {
      id: "com",
      label: "School Committee",
      icon: <Users size={20} />,
      href: "/committee",
    },
    {
      id: "food",
      label: "Food Service",
      icon: <Utensils size={20} />,
      href: "/food",
    },
    {
      id: "pay",
      label: "Payments",
      icon: <CreditCard size={20} />,
      href: "/pay",
    },
    {
      id: "staff",
      label: "Staff Directory",
      icon: <Contact2 size={20} />,
      href: "/staff",
    },
  ];

  return (
    <section className="relative z-20 -mt-12 md:-mt-16 px-6">
      <div className="container mx-auto">
        <div className="bg-white/80 backdrop-blur-2xl border border-slate-200/50 shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-3xl md:rounded-full p-2">
          <QuickLinksClient links={links} />
        </div>
      </div>
    </section>
  );
}
