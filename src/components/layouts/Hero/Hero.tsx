// src/components/sections/Hero.tsx
import { Button } from "@/components/ui/button";
import { HeroClientWrapper } from "./HeroClientWrapper";
import Link from "next/link";

interface HeroProps {
  videoSrc: string;
  titleTop: string;
  titleAccent: string;
  description: string;
  primaryBtnText?: string;
  primaryBtnHref?: string;
  secondaryBtnText?: string;
  secondaryBtnHref?: string;
}

export default function Hero({
  videoSrc,
  titleTop,
  titleAccent,
  description,
  primaryBtnText = "Explore More",
  primaryBtnHref = "#",
  secondaryBtnText,
  secondaryBtnHref = "#",
}: HeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* 1. Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover brightness-[0.7]"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-background" />
      </div>

      <HeroClientWrapper />

      <div className="container relative mt-8 z-10 mx-auto px-6 text-center">
        <header className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-7xl lg:text-7xl font-black tracking-tighter text-white uppercase leading-[0.9]">
            {titleTop} <br />
            <span className="text-accent drop-shadow-[0_0_30px_rgba(245,158,11,0.5)]">
              {titleAccent}
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium">
            {description}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={primaryBtnHref}>
              <Button
                size="lg"
                className="bg-primary text-white px-8 h-14 text-lg rounded-full"
              >
                {primaryBtnText}
              </Button>
            </Link>

            {secondaryBtnText && (
              <Link href={secondaryBtnHref}>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white bg-white/10 backdrop-blur-md px-8 h-14 text-lg rounded-full"
                >
                  {secondaryBtnText}
                </Button>
              </Link>
            )}
          </div>
        </header>
      </div>
    </section>
  );
}
