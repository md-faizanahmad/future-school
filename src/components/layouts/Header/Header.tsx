// src/components/sections/Header.tsx (Server Component)
import Link from "next/link";
import { HeaderClientWrapper } from "./HeaderClientWrapper";
import { Home, BookOpen, GraduationCap, Users } from "lucide-react"; // Icons for mobile nav

export default function Header() {
  const navLinks = [
    { name: "Programs", href: "/pages/programs", icon: BookOpen },
    { name: "Innovation", href: "/pages/innovation", icon: Users },
    { name: "Admissions", href: "/pages/admissions", icon: GraduationCap },
    { name: "Our Story", href: "/pages/story", icon: Home },
  ];

  return (
    <>
      {/* 1. TOP BAR (Logo & CTA - Fixed Top on All Screens) */}
      <header className="fixed top-0 z-50 w-full border-b border-border/10 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-primary" />
            <h1 className="text-lg font-bold tracking-tighter text-primary">
              Future <span className="text-accent">School </span>
            </h1>
          </Link>

          {/* DESKTOP NAV (Hidden on Mobile) */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* 2. BOTTOM NAV (Mobile Only - Instagram Style) */}
      <nav className="fixed bottom-0 left-0 z-50 w-full border-t border-border bg-background/95 backdrop-blur-lg md:hidden">
        <HeaderClientWrapper /> {/* Motion layer for the bottom nav */}
        <ul className="flex h-16 items-center justify-around px-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="flex flex-col items-center gap-1 text-[10px] font-medium text-muted-foreground hover:text-primary"
              >
                <link.icon className="h-5 w-5" />
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
