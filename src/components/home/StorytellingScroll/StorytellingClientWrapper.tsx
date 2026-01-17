// src/components/sections/StorytellingClientWrapper.tsx
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { JourneyStep } from "./StorytellingScroll";

gsap.registerPlugin(ScrollTrigger);

export function StorytellingClientWrapper({
  journey,
}: {
  journey: JourneyStep[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!containerRef.current || !pathRef.current) return;

    // 1. Setup the Golden Path drawing
    const path = pathRef.current;
    const pathLength = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    tl.to(path, {
      strokeDashoffset: 0,
      ease: "none",
    });

    // 2. Image Reveal Logic (Parallax/Fade)
    journey.forEach((_, index) => {
      gsap.fromTo(
        `.img-box-${index}`,
        { clipPath: "inset(10% 10% 10% 10%)", opacity: 0, scale: 0.8 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: `#step-${index}`,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        },
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [journey]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* Dynamic Background Images */}
      {journey.map((step, index) => (
        <div
          key={step.id}
          className={`img-box-${index} absolute inset-0 flex items-center justify-start px-24 opacity-0`}
        >
          <div className="relative w-full md:w-2/5 h-[60vh] rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
            <Image
              src={step.image}
              alt={step.title}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      ))}

      {/* The Path of Light (SVG) */}
      <svg
        ref={svgRef}
        viewBox="0 0 100 800"
        className="absolute left-10 md:left-1/2 h-full w-20 md:w-40 -translate-x-1/2 opacity-20 md:opacity-100"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          d="M 50 0 Q 80 200 50 400 Q 20 600 50 800"
          stroke="var(--color-future-glow)"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
  );
}
