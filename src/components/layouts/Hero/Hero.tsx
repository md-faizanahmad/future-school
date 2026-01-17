// src/components/sections/Hero.tsx
import { Button } from "@/components/ui/button";
import { HeroClientWrapper } from "./HeroClientWrapper";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* 1. Background Video Layer (SSR Friendly) */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover brightness-[0.7]"
        >
          <source
            src="/School_Children_Using_Technology_Video.mp4"
            type="video/mp4"
          />
        </video>
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-background" />
      </div>

      {/* 2. Motion Layer (Client Side) */}
      <HeroClientWrapper />

      {/* 3. Content Layer (SEO Semantic) */}
      <div className="container relative mt-8 z-10 mx-auto px-6 text-center">
        <header className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-7xl lg:text-7xl font-black tracking-tighter text-white uppercase">
            Today&apos;s Kids, <br />
            <span className="text-accent drop-shadow-[0_0_30px_rgba(245,158,11,0.5)]">
              World&apos;s Future Bright
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium">
            An immersive learning environment where technology meets empathy to
            shape the leaders of tomorrow.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary text-white px-8 h-14 text-lg rounded-full"
            >
              Explore Our Campus
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white bg-white/10 backdrop-blur-md px-8 h-14 text-lg rounded-full"
            >
              Watch Our Story
            </Button>
          </div>
        </header>
      </div>
    </section>
  );
}
