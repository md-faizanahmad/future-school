// src/components/sections/QuickLinksClient.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LinkItem } from "./QuickLink";

export function QuickLinksClient({ links }: { links: LinkItem[] }) {
  return (
    <nav className="flex items-center overflow-x-auto no-scrollbar md:overflow-visible py-2 px-4 gap-2 md:gap-4 md:justify-around">
      {links.map((link) => (
        <Link key={link.id} href={link.href} className="group flex-shrink-0">
          <motion.div
            initial={false}
            whileHover={{ y: -4, scale: 1.02 }}
            className="flex items-center gap-3 px-6 py-3 rounded-full transition-colors group-hover:bg-primary/5"
          >
            <div className="text-primary/40 group-hover:text-accent transition-colors">
              {link.icon}
            </div>
            <span className="text-sm font-bold tracking-tight text-primary/80 whitespace-nowrap uppercase">
              {link.label}
            </span>
            {/* Minimal Dot Indicator */}
            <div className="w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        </Link>
      ))}
    </nav>
  );
}
