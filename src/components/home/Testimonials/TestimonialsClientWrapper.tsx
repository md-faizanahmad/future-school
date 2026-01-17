// src/components/sections/Testimonials/TestimonialsClientWrapper.tsx
"use client";

import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import { Testimonial } from "./TestimonialsGlow";
import { useRef, useState, useEffect } from "react";

export function TestimonialsClientWrapper({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [activeIdx, setActiveIdx] = useState(0);
  const dragX = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Update dots based on drag position
  useEffect(() => {
    const unsubscribe = dragX.on("change", (latest) => {
      const cardWidth = 400; // Estimated width
      const index = Math.abs(Math.round(latest / cardWidth));
      if (index !== activeIdx && index < testimonials.length) {
        setActiveIdx(index);
      }
    });
    return () => unsubscribe();
  }, [dragX, activeIdx, testimonials.length]);

  return (
    <div className="relative">
      {/* Background Liquid Motion (Hydration-Safe) */}
      <motion.div
        initial={false}
        animate={{
          scale: [1, 1.1, 1],
          borderRadius: [
            "40% 60% 70% 30%",
            "60% 40% 30% 70%",
            "40% 60% 70% 30%",
          ],
        }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 blur-[100px] z-0"
      />

      {/* Draggable Carousel */}
      <motion.div
        ref={containerRef}
        drag="x"
        dragConstraints={{ right: 0, left: -800 }} // Adjust based on total cards
        style={{ x: dragX }}
        className="flex gap-8 px-6 cursor-grab active:cursor-grabbing z-10 relative"
      >
        {testimonials.map((t) => (
          <motion.blockquote
            key={t.id}
            whileHover={{ y: -5 }}
            className="min-w-[85vw] md:min-w-112.5 p-10 rounded-[3rem] bg-white/60 backdrop-blur-xl border border-slate-100 shadow-xl flex flex-col justify-between"
          >
            <p className="text-xl font-medium text-slate-700 italic leading-relaxed">
              &quot;{t.quote}&quot;
            </p>

            <footer className="mt-8 flex items-center gap-4">
              <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-accent">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <cite className="not-italic font-black text-primary block">
                  {t.name}
                </cite>
                <span className="text-[10px] uppercase font-bold tracking-tighter text-muted-foreground">
                  {t.role}
                </span>
              </div>
            </footer>
          </motion.blockquote>
        ))}
      </motion.div>

      {/* Indicator Dots - UX Feedback */}
      <div className="flex justify-center gap-3 mt-12">
        {testimonials.map((_, i) => (
          <motion.div
            key={i}
            animate={{
              width: i === activeIdx ? 32 : 8,
              backgroundColor:
                i === activeIdx ? "var(--color-future-glow)" : "#e2e8f0",
            }}
            className="h-2 rounded-full transition-colors duration-300"
          />
        ))}
      </div>
    </div>
  );
}
