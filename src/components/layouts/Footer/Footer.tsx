// src/components/sections/Footer.tsx (Server Component)
import Link from "next/link";
import { FooterClientWrapper } from "./FooterClientWrapper";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden border-t border-border bg-background py-12">
      {/* The Motion Layer (Client Side) */}
      <FooterClientWrapper />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-24 w-px bg-linear-to-b from-transparent via-accent to-transparent" />
        <div className="h-2 w-2 rounded-full bg-accent shadow-[0_0_15px_var(--color-future-glow)] animate-bounce" />
      </div>
      {/* The Semantic Layer (SEO Side) */}
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Column 1: School Identity */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter text-primary">
              FutureSchool
            </h2>
            <p className="max-w-xs text-sm text-muted-foreground">
              Empowering today&apos;s learners to architect the world of
              tomorrow through innovation and empathy.
            </p>
          </div>

          {/* Column 2: Quick Navigation (SEO Friendly Links) */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-semibold text-foreground">Academics</h3>
            <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <Link href="/curriculum" className="hover:text-primary">
                Our Curriculum
              </Link>
              <Link href="/admissions" className="hover:text-primary">
                Admissions
              </Link>
              <Link href="/campus" className="hover:text-primary">
                Global Campus
              </Link>
            </nav>
          </div>

          {/* Column 3: Contact & Legal */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-semibold text-foreground">Connect</h3>
            <address className="not-italic text-sm text-muted-foreground">
              123 Visionary Way, Innovation City
              <br />
              contact@futureschool.edu
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-border pt-8 text-xs text-muted-foreground md:flex-row">
          <p>© {currentYear} FutureSchool. All Rights Reserved.</p>
          <div className="mt-4 flex space-x-6 md:mt-0">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
